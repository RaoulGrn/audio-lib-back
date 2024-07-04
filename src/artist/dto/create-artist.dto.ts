import { IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateAlbumDto } from './create-album.dto';

export class CreateArtistDto {
  @isString()
  readonly name: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAlbumDto)
  readonly albums: CreateAlbumDto[];
}
