const mongoose = require('mongoose');
const { Schema } = mongoose;

const GeoSchema = new Schema({
    type: { Type: String, default: "Point" },
    coordinates: { Type: [Number], default: [0, 0], index: "2dsphere" }
});

module.exports = GeoSchema;