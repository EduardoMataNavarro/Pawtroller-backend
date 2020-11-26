const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const AuthUserController = {};

AuthUserController.Login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ Email: email });
    if (user) {
        const verification = await bcrypt.compare(password, user.Password);
        if (verification) {
            const payload = {
                userId: user._id,
                username: user.Name
            };
            const token = jwt.sign(payload, process.env.JWT_SECRET);
            res.set('auth-token', token).send({ message: 'success', authToken: token });
        }
        else {
            res.status(401).send({ message: 'Incorrect email or password' });
        }
    }
    else {
        res.status(401).send({ message: 'Incorrect email or password' });
    }
};

AuthUserController.Signup = async (req, res) => {
    const { name, username, birthdate, email, password } = req.body;

    try {
        const passSalt = await bcrypt.genSalt(12);
        const hashedPass = await bcrypt.hash(password, passSalt);

        const newUser = new User({
            Name: name,
            Nickname: username,
            Birthdate: birthdate,
            Email: email,
            Password: hashedPass
        });
        await newUser.save();

        const payload = {
            userId: newUser._id,
            username: newUser.Name
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.set('auth-token', token).send({ message: 'success', token: token });

    } catch (error) {
        res.send(error);
    }
};

AuthUserController.UpdateUser = async (req, res) => {
    const { id, name, username, birthdate, avatarImg, bannerImg } = req.body;

    try {
        const passSalt = await bcrypt.genSalt(12);
        const hashedPass = await bcrypt.hash(password, passSalt);

        const updateInfo = {
            Name: name,
            Username: username,
            Birthdate: birthdate,
            Password: hashedPass,
            AvatarImg: avatarImg,
            BannerImg: bannerImg
        };

        const user = await User.findByIdAndUpdate(id, updateInfo);

        await user.save();

        const payload = {
            userId: user._id,
            username: user.Name
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.set('auth-token', token).send({ message: 'success' });

    } catch (error) {
        res.send(error);
    }
};

module.exports = AuthUserController;