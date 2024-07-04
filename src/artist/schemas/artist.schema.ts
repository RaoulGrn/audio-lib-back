import { Schema, Document, model } from 'mongoose';
import { AlbumDocument } from '../../album/schemas/album.schema';

export const ArtistSchema = new Schema({
  name: { type: String, required: true },
  albums: [{ type: Schema.Types.ObjectId, ref: 'Album' }],
});

export interface Artist {
  _id: Schema.Types.ObjectId;
  name: string;
  albums: AlbumDocument[];
}

export type ArtistDocument = Artist & Document;

export const ArtistModel = model<ArtistDocument>('Artist', ArtistSchema);
