module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("User", {
    name: { type: Sequelize.STRING, allowNull: false },
    username: { type: Sequelize.STRING, unique: true },
    role: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.TEXT, select: false },
  }, {
    defaultScope: { attributes: { exclude: ['password'] } }
  });

  return User;
};

