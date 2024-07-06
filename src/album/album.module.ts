import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';
import { AlbumModel } from './schemas/album.schema';
import { SongModule } from '../song/song.module';
import { SongModel } from 'src/song/schemas/song.schema';
import { SongController } from '../song/song.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'Album', schema: AlbumModel.schema }]),
    SongModule,
  ],
  providers: [AlbumService, SongModel],
  controllers: [AlbumController, SongController],
  exports: [AlbumService],
})
export class AlbumModule {}
