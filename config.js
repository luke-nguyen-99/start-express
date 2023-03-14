module.exports = {
  database: process.env.POSTGRES_DATABASE,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT, 10),
  dialect: process.env.POSTGRES_TYPE,
  dialectOptions: {
    bigNumberStrings: true,
  },
};
