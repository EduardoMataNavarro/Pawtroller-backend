const mongoose= require('mongoose');
const { Schema, Type } = mongoose;
const GeoSchema = require('./GeoSchema');

const StatusSchema = new Schema({
    Status: { type: String, enum: ['Perdido', 'Bien', 'Fallecido', 'Lastimado', 'NA'], default: 'Bien', required: true },
    StatusDate: { type: Date, default: Date.now(), required: true },
    Description: { type: String, default: '', required: true },
    Location: GeoSchema
}, { timestamps: true });


module.exports = StatusSchema;