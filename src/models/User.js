import mongoose, { Types } from 'mongoose';
import { Schema } from mongoose;

const UserSchema = new Schema({
    Name: { Type: String, default: '', required: true },
    Nickname: { Type: String, default: '', required: false },
    Birthdate: { Type: String, default: '', required: false },
    Email: { Type: String, default: '', required: true },
    Password: { Type: String, default: '', required: true },
    AvatarImg: { Type: String, default: '', required: false },
    BannerImg: { Type: String, default: '', required: false }
});

module.exports = mongoose.model('User', UserSchema);