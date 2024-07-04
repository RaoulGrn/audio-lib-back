import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtistModule } from './artist/artist.module';
import { AlbumModule } from './album/album.module';
import { SongModule } from './song/song.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/audio-lib', {}),
    ArtistModule,
    AlbumModule,
    SongModule,
  ],
})
export class AppModule {}
