const mongoose, { Types } = require('mongoose');
const { Schema } = mongoose;

const PostCategorySchema = new Schema({
    Name: { Type: String, default: 'Post title', required: true },
    Decription: { Type: String, default: '', required: false },
    Keywords: { Type: [String], default: '', required: false }
});

module.exports = mongoose.model('PostCategory', PostCategorySchema);