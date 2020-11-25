const mongoose= require('mongoose');
const { Schema, Types } = mongoose;
const StatusSchema = require('./StatusSchema');

/*
const StatusSchema = new Schema({
    Status: { type: String, enum: ['Perdido', 'Bien', 'Fallecido', 'Lastimado', 'NA'], required: true },
    Description: { type: String, default: '', required: true },
    lat: { type: Number, default: 0 },
    long: { type: Number, default: 0 },
}, { timestamps: true });
*/

const PetSchema = new Schema({
    Name: { type: String, default: 'Solovino', required: true },
    Nickname: { type: String, default: '', required: false },
    Age: { type: Number, default: 0, required: false },
    Birthdate: { type: String, default: '', required: false },
    Owner: { type: Types.ObjectId, default: undefined, require: true },
    Status: StatusSchema,
    Pettype: { type: Types.ObjectId, default: undefined, required: true },
    CodePath: { type: String, default: '', required: false },
    ImagePaths: { type: [String], default: [] },
    VideoPaths: { type: [String], default: [] }
}, { timestamps: true });

module.exports = mongoose.model('Pet', PetSchema);