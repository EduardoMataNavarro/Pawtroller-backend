const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

const PetTypeSchema = new Schema({
    Name: { type: String, default: '', required: false },
    Description: { type: String, default: undefined, required: true }
});

module.exports = mongoose.model('PetType', PetTypeSchema);