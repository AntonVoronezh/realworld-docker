const mongoose = require('mongoose')
const {db} =  require("../configuration");

module.exports.connectDB = async () => {
    await mongoose.connect(db);

    return mongoose.connection;
}
