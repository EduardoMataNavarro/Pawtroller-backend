const mongoose, { Types } = require('mongoose');
const { Schema } = mongoose;

const PostCategorySchema = new Schema({
    Name: { type: String, default: 'Post title', required: true },
    Decription: { type: String, default: '', required: false },
    Keywords: { type: [String], default: '', required: false }
});

module.exports = mongoose.model('PostCategory', PostCategorySchema);