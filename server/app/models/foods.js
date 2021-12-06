
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const foods = new Schema(
    {
        name: { type: String },
        image: { type: String },
        description: { type: String },
        production: { type: String },
        cost: { type: Number },
        unit: { type: String },
        minMass: { type: String, default: "0kg" },
        maxMass: { type: String, default: "0kg" }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('foods', foods);