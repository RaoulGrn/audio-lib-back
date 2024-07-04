import { Schema, Document } from 'mongoose';
import { Album } from '../models/album.schema';

export const ArtistSchema = new Schema({
  name: { type: String, required: true },
  albums: [{ type: Schema.Types.ObjectId, ref: 'Album' }],
});

export interface Artist extends Document {
  id: string;
  name: string;
  albums: Album[];
}
