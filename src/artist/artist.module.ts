import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtistService } from './artist.service';
import { ArtistController } from './artist.controller';
import { ArtistModel } from './schemas/artist.schema';
import { AlbumModule } from '../album/album.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Artist', schema: ArtistModel.schema }]),
    AlbumModule,
  ],
  providers: [ArtistService],
  controllers: [ArtistController],
  exports: [ArtistService],
})
export class ArtistModule {}
