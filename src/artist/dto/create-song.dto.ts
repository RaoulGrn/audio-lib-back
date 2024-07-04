import { IsString } from 'class-validator';

export class CreateSongDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly duration: number;
}
