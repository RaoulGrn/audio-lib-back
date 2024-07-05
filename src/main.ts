import * as fs from 'fs';
import * as path from 'path';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ArtistService } from './artist/artist.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const artistService = app.get(ArtistService);

  let data;
  try {
    const filePath = path.resolve(__dirname, '../src/data.json');
    data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    console.log(data);
  } catch (error) {
    console.error('Error reading or parsing data.json:', error);
    throw new Error('Failed to read or parse data.json');
  }

  if (!Array.isArray(data)) {
    console.log(data);
    throw new Error('Data is not in expected array format.');
  }

  for (const artistData of data) {
    await artistService.create(artistData);
  }
  app.enableCors();
  await app.listen(3000);
}

bootstrap();
