import { IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateAlbumDto } from '../../album/dto/create-album.dto';

export class CreateArtistDto {
  @IsString()
  readonly name: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAlbumDto)
  readonly albums: CreateAlbumDto[];
}
