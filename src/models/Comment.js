import mongoose, { Types } from 'mongoose';
import { Schema } from mongoose;

const CommentSchema = new Schema({
    Content: { Type: String, default: '', required: false },
    User: { Type: Types.ObjectId, default: undefined, required: true }
}, { timestamps: true } );

module.exports = mongoose.model('Comment', CommentSchema);