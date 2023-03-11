const mongoose = require('mongoose');
const Schema = mongoose.Schema;


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
