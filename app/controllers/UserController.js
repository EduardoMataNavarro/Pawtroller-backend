const Pet = require('../models/Pet');
const User = require('../models/User');

const UserController = {};

UserController.Index = async (req, res) => {
    const users = await User.find({});
    res.json(users);
};

UserController.GetById = async (req, res) => {
    const { id } = req.body;
    const user = await User.findById(id);
    res.json(user);
};

UserController.GetPets = async (req, res) => {
    const { id } = req.params;
    const userPets = await Pet.find({ Owner: id });
    res.json(userPets);
};

module.exports = UserController;