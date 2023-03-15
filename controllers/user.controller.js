const UserModel = require('../models/User');

const getAll = async (req, res) => {
    const user = await UserModel.find().exec();
    res.json(user);
}
const getOne = async (req, res) => {
    const user = await UserModel.findOne({ _id: req.param.id }).exec();
    res.json(user);
}
const create = async (req, res) => {
    const user = await UserModel.findOne({ _id: req.param.id }).exec();
    res.json(user);
}
const update = async (req, res) => {
    const user = await UserModel.findOne({ _id: req.param.id }).exec();
    res.json(user);
}
const destroy = async (req, res) => {
    const user = await UserModel.findOne({ _id: req.param.id }).exec();
    res.json(user);
}

module.exports = { getAll, getOne, create, update, destroy };