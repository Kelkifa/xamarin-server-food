
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const users = new Schema(
    {
        username: { type: String, required: true, unique: [true, "tài khoản đã tồn tại"] },
        password: { type: String, required: [true, "Chưa nhậP password"] },
        fullname: { type: String, required: true },
    }
);

module.exports = mongoose.model('users', users);