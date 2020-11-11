import mongoose, { Types } from 'mongoose';
import { Schema } from mongoose;

const PostCategorySchema = new Schema({
    Name: { Type: String, default: 'Post title', required: true },
    Decription: { Type: String, default: '', required: false },
    Keywords: { Type: [String], default: '', required: false }
});

module.exports = mongoose.model('PostCategory', PostCategorySchema);