import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SongController } from './song.controller';
import { SongService } from './song.service';
import { SongSchema } from './schemas/song.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'Song', schema: SongSchema }]),
  ],
  controllers: [SongController],
  providers: [SongService],
  exports: [SongService],
})
export class SongModule {}
