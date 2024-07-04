import { Schema, Document, Types, model } from 'mongoose';
import { Album } from '../../album/schemas/album.schema';

export const ArtistSchema = new Schema({
  name: { type: String, required: true },
  albums: [{ type: Types.ObjectId, ref: 'Album' }],
});

export interface Artist {
  _id: Schema.Types.ObjectId;
  name: string;
  albums: Album[];
}

export type ArtistDocument = Artist & Document;

export const ArtistModel = model<ArtistDocument>('Artist', ArtistSchema);
