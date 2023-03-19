const Sequelize = require('sequelize');

const sequelize = new Sequelize('express', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
  });

const userSchema = new Schema(
    {
        name: String,
        username: !String,
        password: !String,
        role: !String,
        age: Number,
        address: String,
    }, 
    { 
        collection: 'user' 
    }
);

module.exports = mongoose.model('user', userSchema);
