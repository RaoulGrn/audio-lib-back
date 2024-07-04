import { Schema, Document } from 'mongoose';
import { Song } from '../models/song.schema';

export const AlbumSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  songs: [{ type: Schema.Types.ObjectId, ref: 'Song' }],
});

export interface Album extends Document {
  id: string;
  title: string;
  description: string;
  songs: Song[];
}
