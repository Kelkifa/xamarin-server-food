
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const carts = new Schema(
    {
        userId: { type: String },
        food: {
            type: Schema.Types.ObjectId,
            ref: 'foods'
        },
        soLuong: { type: Number, default: 1 },
        isOrder: { type: Boolean, default: false }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('carts', carts);