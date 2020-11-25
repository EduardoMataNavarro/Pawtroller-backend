const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

const UserSchema = new Schema({
    Name: { type: String, default: '', required: true },
    Nickname: { type: String, default: '', required: false },
    Birthdate: { type: String, default: '', required: false },
    Email: { type: String, default: '', required: true },
    Password: { type: String, default: '', required: true },
    AvatarImg: { type: String, default: '', required: false },
    BannerImg: { type: String, default: '', required: false }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);