import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistModule } from './artist/artist.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/audio-lib'),
    ArtistModule,
  ],
})
export class AppModule {}
