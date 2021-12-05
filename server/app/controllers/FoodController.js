const foodModel = require('../models/foods');

class FoodController {

    /**
     * [GET] /api/food/list
     * @param {*} req 
     * @param {*} res 
     * @returns {array} food list
     */
    async getList(req, res) {
        try {
            const response = await foodModel.find({});
            return res.json({ success: true, message: "successfully", response });
        } catch {
            return res.json({ success: false, message: "internal server" });
        }
    }

    /**
     * [POST] /api/food/create
     * @param {*} req {data: {name, production, cost, unit, minMass, maxMass}}
     * @param {*} res 
     * @returns {object} newfood
     */
    async create(req, res) {
        const { data } = req.body;

        if (!data) return res.json({ success: false, message: "bad request" });

        try {
            const response = await foodModel.create(data);
            return res.json({ success: true, message: "successfully", response });
        } catch {
            return res.json({ success: false, message: "internal server" });
        }
    }

}

module.exports = new FoodController;