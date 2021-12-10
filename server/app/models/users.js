
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const users = new Schema(
    {
        username: { type: String, required: true, unique: [true, "tài khoản đã tồn tại"] },
        password: { type: String, required: [true, "Chưa nhậP password"] },
    }
);

module.exports = mongoose.model('users', users);