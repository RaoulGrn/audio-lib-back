import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { AlbumService } from './album.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { Types } from 'mongoose';

@Controller('albums')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Get()
  async findAll() {
    return this.albumService.findAll();
  }

  @Get('search')
  async search(@Query('title') title: string) {
    return this.albumService.search(title);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.albumService.findOne(id);
  }

  @Post()
  async create(@Body() createAlbumDto: CreateAlbumDto) {
    return this.albumService.create(createAlbumDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.albumService.remove(id);
  }

  @Post(':id/songs')
  async addSongsToAlbum(
    @Param('id') albumId: string,
    @Body() songIds: string[],
  ) {
    const songObjectIds = songIds.map((id) => new Types.ObjectId(id));
    return this.albumService.addSongsToAlbum(albumId, songObjectIds);
  }
}
