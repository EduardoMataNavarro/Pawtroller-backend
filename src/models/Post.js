const mongoose, { Types } = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
    Title: { Type: String, default: 'Post title', required: true },
    Content: { Type: String, default: '', required: false },
    Owner: { Type: Types.ObjectId, default: undefined, required: true },
    Category: { Type: Types.ObjectId, default: undefined, required: true },
    Likes: { Type: Types.ObjectId, default: undefined, requiered: false },
    Dislikes: { Type: Types.ObjectId, default: undefined, required: false }
}, { timestamps: true } );

module.exports = mongoose.model('Post', PostSchema);