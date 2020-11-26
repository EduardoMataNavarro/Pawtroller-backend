const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

const CommentSchema = new Schema({
    Content: { type: String, default: '', required: false },
    User: { type: Types.ObjectId, default: undefined, required: true },
    ParentPost: { type: Types.ObjectId, default: undefined, required: true },
    ImgPaths: { type: [String], default: [] }
}, { timestamps: true });

module.exports = mongoose.model('Comment', CommentSchema);