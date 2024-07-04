import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { AlbumDocument, Album } from './schemas/album.schema';
import { CreateSongDto } from 'src/song/dto/create-song.dto';
import { CreateAlbumDto } from './dto/create-album.dto';
import { SongService } from '../song/song.service';

@Injectable()
export class AlbumService {
  constructor(
    @InjectModel('Album') private readonly albumModel: Model<AlbumDocument>,
    @Inject(SongService) private readonly songService: SongService,
  ) {}

  async findAll(): Promise<Album[]> {
    return this.albumModel.find().populate('songs').exec();
  }

  async findOne(id: string): Promise<Album> {
    return this.albumModel.findById(id).populate('songs').exec();
  }

  async create(createAlbumDto: CreateAlbumDto): Promise<Album> {
    const createdAlbum = new this.albumModel(createAlbumDto);
    return createdAlbum.save();
  }

  async remove(id: string): Promise<void> {
    await this.albumModel.findByIdAndDelete(id).exec();
  }

  async search(term: string): Promise<Album[]> {
    return this.albumModel.find({ title: new RegExp(term, 'i') }).exec();
  }

  async addSongsToAlbum(
    albumId: string,
    songIds: Types.ObjectId[],
  ): Promise<void> {
    await this.albumModel
      .findByIdAndUpdate(albumId, { $push: { songs: { $each: songIds } } })
      .exec();
  }

  async createMany(songs: CreateSongDto[]): Promise<any[]> {
    const createdSongs = await this.songService.createMany(songs);
    return createdSongs;
  }
}
