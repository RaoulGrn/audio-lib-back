import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Artist } from './schemas/artist.schema';
import { CreateArtistDto } from './dto/create-artist.dto';
import { AlbumService } from '../album/album.service';

@Injectable()
export class ArtistService {
  constructor(
    @InjectModel('Artist') private readonly artistModel: Model<Artist>,
    private readonly albumService: AlbumService,
  ) {}

  async findAll(): Promise<Artist[]> {
    return this.artistModel
      .find()
      .populate({
        path: 'albums',
        populate: {
          path: 'songs',
          model: 'Song',
        },
      })
      .exec();
  }

  async findOne(id: string): Promise<Artist> {
    return this.artistModel
      .findById(id)
      .populate({
        path: 'albums',
        populate: {
          path: 'songs',
          model: 'Song',
        },
      })
      .exec();
  }

  async create(createArtistDto: CreateArtistDto): Promise<Artist> {
    const { name, albums } = createArtistDto;

    const createdAlbums = await Promise.all(
      albums.map(async (album) => {
        const { title, description, songs } = album;
        const createdSongs = await this.albumService.createMany(songs);
        return this.albumService.create({
          title,
          description,
          songs: createdSongs.map((song) => song._id),
        });
      }),
    );

    const artist = new this.artistModel({ name, albums: createdAlbums });
    return artist.save();
  }

  async remove(id: string): Promise<void> {
    await this.artistModel.findByIdAndDelete(id).exec();
  }

  async search(name: string): Promise<Artist[]> {
    return this.artistModel
      .find({ name: new RegExp(name, 'i') })
      .populate({
        path: 'albums',
        populate: {
          path: 'songs',
          model: 'Song',
        },
      })
      .exec();
  }
}
