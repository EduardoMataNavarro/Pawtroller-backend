import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';

const AuthController = {};

AuthController.login = async (req, res) => {
    const user = User.find({ Email: req.body.email, Password: req.body.pass });
    if (user != undefined) {
        res.json(user);
    }
    res.status(404).send('se la come');
};

AuthController.signup = async (req, res) => {

};

module.exports = AuthController;