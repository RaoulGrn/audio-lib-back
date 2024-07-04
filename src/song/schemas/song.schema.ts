import { Schema, Document, model } from 'mongoose';

export interface Song extends Document {
  _id: Schema.Types.ObjectId;
  title: string;
  length: string;
}

export const SongSchema = new Schema({
  title: { type: String, required: true },
  length: { type: String, required: true },
});

export const SongModel = model<Song>('Song', SongSchema);
