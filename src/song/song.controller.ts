import { Controller, Post, Body, Param, Delete } from '@nestjs/common';
import { SongService } from './song.service';
import { CreateSongDto } from './dto/create-song.dto';

@Controller('songs')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Post()
  async create(@Body() createSongDto: CreateSongDto) {
    return this.songService.create(createSongDto);
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
