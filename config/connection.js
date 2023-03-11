const mongoose = require('mongoose');

const connectDatabase = async () => {
    try {
        // mongoose.set('strictQuery', false);
        mongoose.connect(process.env.MONGO_CONNECTION_STRING + process.env.MONGO_DATABASE_NAME);

    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDatabase; 