import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SongService } from './song.service';
import { CreateSongDto } from './dto/create-song.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('songs')
@UseGuards(AuthGuard())
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Get()
  async findAll() {
    return this.songService.findAll();
  }

  @Post()
  async create(@Body() createSongDto: CreateSongDto) {
    return this.songService.create(createSongDto);
  }

  @Get('search')
  async search(@Query('title') title: string) {
    return this.songService.search(title);
  }

  @Post('batch')
  async createMany(@Body() createSongsDto: CreateSongDto[]) {
    return this.songService.createMany(createSongsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.songService.remove(id);
  }
}
