
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const foods = new Schema(
    {
        name: { type: String, required: true },
        type: { type: String, required: true },
        image: { type: String, required: true },
        description: { type: String, required: true },
        production: { type: String, required: true },
        cost: { type: Number, required: true },
        unit: { type: String, required: true },
        minMass: { type: String, default: "0kg" },
        maxMass: { type: String, default: "0kg" }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('foods', foods);