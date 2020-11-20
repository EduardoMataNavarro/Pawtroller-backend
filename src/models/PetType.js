const mongoose, { Types } = require('mongoose');
const { Schema } = mongoose;

const PetTypeSchema = new Schema({
    Name: { Type: String, default: '', required: false },
    Description: { Type: String, default: undefined, required: true }
});

module.exports = mongoose.model('PetType', PetTypeSchema);