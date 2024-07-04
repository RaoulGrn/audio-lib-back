import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Song } from './schemas/song.schema';
import { CreateSongDto } from './dto/create-song.dto';

@Injectable()
export class SongService {
  constructor(@InjectModel('Song') private readonly songModel: Model<Song>) {}

  async create(songData: CreateSongDto): Promise<Song> {
    const song = new this.songModel(songData);
    return song.save();
  }

  async createMany(songsData: CreateSongDto[]): Promise<Song[]> {
    const songs = await this.songModel.create(songsData);
    return songs;
  }

  async remove(id: string): Promise<void> {
    await this.songModel.findByIdAndDelete(id).exec();
  }
}
