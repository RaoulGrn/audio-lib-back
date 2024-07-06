import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ArtistService } from './artist.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { Artist } from './schemas/artist.schema';
import { AuthGuard } from '@nestjs/passport';

@Controller('artists')
@UseGuards(AuthGuard())
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get()
  async findAll() {
    return this.artistService.findAll();
  }

  @Get('search')
  async search(@Query('name') name: string): Promise<Artist[]> {
    return this.artistService.search(name);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.artistService.findOne(id);
  }

  @Post()
  async create(@Body() createArtistDto: CreateArtistDto) {
    return this.artistService.create(createArtistDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.artistService.remove(id);
  }
}
