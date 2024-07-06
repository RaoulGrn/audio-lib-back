import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtistModule } from './artist/artist.module';
import { AlbumModule } from './album/album.module';
import { SongModule } from './song/song.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI, {}),
    AuthModule,
    ArtistModule,
    AlbumModule,
    SongModule,
    AuthModule,
  ],
})
export class AppModule {}
