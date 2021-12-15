
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const orders = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        cartList: [{
            type: Schema.Types.ObjectId,
            ref: 'carts'
        }],
        address: { type: String },
        sdt: { type: String },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('orders', orders);


