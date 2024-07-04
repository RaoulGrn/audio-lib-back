import { IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateSongDto } from '../../song/dto/create-song.dto';

export class CreateAlbumDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly description: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateSongDto)
  readonly songs: CreateSongDto[];
}
