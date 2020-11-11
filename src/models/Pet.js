import mongoose, { Types } from 'mongoose';
import { Schema } from mongoose;

const PetSchema = new Schema({
    Name: { Type: String, default: 'Solovino', required: true },
    Nickname: { Type: String, default: '', required: false },
    Age: { Type: Number, default: 0, required: false },
    Birthdate: { Type: String, default: '', required: false },
    Owner: { Type: Types.ObjectId, default: undefined, require: true },
    Status: { Type: Object, default: undefined, required: true },
    CodePath: { Type: String, default: '', required: false },
    ImagePaths: { Type:[String], default: [] },
    VideoPaths: { Type: [String], default: [] }
});

module.exports = mongoose.model('Pet', PetSchema);