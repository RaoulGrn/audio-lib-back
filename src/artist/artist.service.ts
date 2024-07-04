import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Artist } from './schemas/artist.schema';
import { CreateArtistDto } from './dto/create-artist.dto';

@Injectable()
export class ArtistService {
  constructor(
    @InjectModel('Artist') private readonly artistModel: Model<Artist>,
  ) {}

  async findAll(): Promise<Artist[]> {
    return this.artistModel.find().populate('albums').exec();
  }

  async findOne(id: string): Promise<Artist> {
    return this.artistModel.findById(id).populate('albums').exec();
  }

  async create(createArtistDto: CreateArtistDto): Promise<Artist> {
    const createdArtist = new this.artistModel(createArtistDto);
    return createdArtist.save();
  }

  async remove(id: string): Promise<void> {
    await this.artistModel.findByIdAndDelete(id).exec();
  }

  async search(term: string): Promise<Artist[]> {
    return this.artistModel.find({ name: new RegExp(term, 'i') }).exec();
  }
}
