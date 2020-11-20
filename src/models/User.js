const mongoose, { Types } = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    Name: { Type: String, default: '', required: true },
    Nickname: { Type: String, default: '', required: false },
    Birthdate: { Type: String, default: '', required: false },
    Email: { Type: String, default: '', required: true },
    Password: { Type: String, default: '', required: true },
    AvatarImg: { Type: String, default: '', required: false },
    BannerImg: { Type: String, default: '', required: false }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);