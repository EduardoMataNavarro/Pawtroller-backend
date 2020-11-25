const mongoose = require('mongoose');
const { Schema } = mongoose;

const GeoSchema = new Schema({
    type: { type: String, default: "Point" },
    coordinates: { type: [Number], default: [0, 0], index: "2dsphere" }
});

module.exports = GeoSchema;