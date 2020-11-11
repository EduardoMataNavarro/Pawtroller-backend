import mongoose, { Types } from 'mongoose';
import { Schema } from mongoose;

const StatusSchema = new Schema({
    Status: { Type: String, enum: ['Perdido', 'Bien', 'Fallecido', 'Lastimado', 'NA'], required: true },
    Description: { Type: String, default: '', required: true },
    lat: { Type: Number, default: 0 },
    long: { Type: Number, default: 0 },
}, { timestamps: true });


module.exports = StatusSchema;