import { Schema, Document, Types, model } from 'mongoose';
import { Song } from '../../song/schemas/song.schema';

export const AlbumSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  songs: [{ type: Types.ObjectId, ref: 'Song' }],
});

export interface Album {
  _id: Schema.Types.ObjectId;
  title: string;
  description: string;
  songs: Song[];
}

export type AlbumDocument = Album & Document;

export const AlbumModel = model<AlbumDocument>('Album', AlbumSchema);
