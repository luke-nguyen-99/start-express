const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.POSTGRES_DATABASE,
    process.env.POSTGRES_USERNAME,
    process.env.POSTGRES_PASSWORD,
    {
        dialect: process.env.POSTGRES_TYPE,
        host: process.env.POSTGRES_HOST,
        port: parseInt(process.env.POSTGRES_PORT, 10),
    },
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require('../database/User')(sequelize, Sequelize);

//exporting the module
module.exports = { db, sequelize };