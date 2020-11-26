const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

const PostSchema = new Schema({
    Title: { type: String, default: 'Post title', required: true },
    Content: { type: String, default: '', required: false },
    Owner: { type: Types.ObjectId, default: undefined, required: true },
    Category: { type: Types.ObjectId, default: undefined, required: true },
    Likes: { type: Types.ObjectId, default: undefined, requiered: false },
    Dislikes: { type: Types.ObjectId, default: undefined, required: false }
}, { timestamps: true } );

module.exports = mongoose.model('Post', PostSchema);