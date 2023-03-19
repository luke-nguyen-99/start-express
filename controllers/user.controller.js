const db = require("../config/connection");
const User = db.user;

const getAll = async (req, res) => {
  const user = await User.findAll();
  res.json(user);
};
const getOne = async (req, res) => {
  const user = await User.findOne({ where: { id: +req.params?.id } });
  res.status(200).json(user);
};
const create = async (req, res) => {
  try {
    await User.create({
      name: req.body.name,
      username: req.body.username,
      role: req.body.role,
      password: req.body.password,
    });
    res
      .status(200)
      .send({ result_status: 1, message: "User was registered successfully!" });
  } catch (e) {
    res.status(400).send({ result_status: 0, error: "fail" });
  }
};
const update = async (req, res) => {
  const user = await UserModel.findOne({ _id: req.param.id }).exec();
  res.json(user);
};
const destroy = async (req, res) => {
  const user = await UserModel.findOne({ _id: req.param.id }).exec();
  res.json(user);
};

module.exports = { getAll, getOne, create, update, destroy };
