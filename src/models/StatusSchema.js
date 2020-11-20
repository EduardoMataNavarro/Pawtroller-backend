const mongoose, { Types } = require('mongoose');
const { Schema } = mongoose;
const GeoSchema = require('./GeoSchema');

const StatusSchema = new Schema({
    Status: { Type: String, enum: ['Perdido', 'Bien', 'Fallecido', 'Lastimado', 'NA'], default: 'Bien', required: true },
    StatusDate: { Type: Date, default: Date.now(), required: true },
    Description: { Type: String, default: '', required: true },
    Location: GeoSchema
}, { timestamps: true });


module.exports = StatusSchema;