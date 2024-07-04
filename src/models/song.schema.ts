import { Schema, Document } from 'mongoose';

export const SongSchema = new Schema({
  title: { type: String, required: true },
  duration: { type: Number, required: true },
});

export interface Song extends Document {
  id: string;
  title: string;
  duration: number;
}
