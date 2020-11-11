import mongoose, { Types } from 'mongoose';
import { Schema } from mongoose;
import StatusSchema from './StatusSchema';

/*
const StatusSchema = new Schema({
    Status: { Type: String, enum: ['Perdido', 'Bien', 'Fallecido', 'Lastimado', 'NA'], required: true },
    Description: { Type: String, default: '', required: true },
    lat: { Type: Number, default: 0 },
    long: { Type: Number, default: 0 },
}, { timestamps: true });
*/

const PetSchema = new Schema({
    Name: { Type: String, default: 'Solovino', required: true },
    Nickname: { Type: String, default: '', required: false },
    Age: { Type: Number, default: 0, required: false },
    Birthdate: { Type: String, default: '', required: false },
    Owner: { Type: Types.ObjectId, default: undefined, require: true },
    Status: { Type: StatusSchema, default: undefined, required: true },
    PetType: { Type: Types.ObjectId, default: undefined, required: true },
    CodePath: { Type: String, default: '', required: false },
    ImagePaths: { Type:[String], default: [] },
    VideoPaths: { Type: [String], default: [] }
}, { timestamps: true });

module.exports = mongoose.model('Pet', PetSchema);