const foodModel = require('../models/foods');

class FoodController {

    /**
     * [GET] /api/food/json
     * @param {*} req 
     * @param {*} res
     * @returns json api data web
     */
    async getJson(req, res) {
        const findData = req.query.s;
        try {
            const response = await foodModel.find(findData ? { name: { $regex: findData, $options: 'i' } } : {});
            return res.json(response);
        } catch (err) {
            console.log(err);
            return res.json({ success: false, message: "internal server" });
        }
    }

    /**
     * [GET] /api/food/get
     * @param {*} req 
     * @param {*} res 
     * @returns {array} food list
     */
    async getList(req, res) {
        try {
            const response = await foodModel.find({});
            return res.json({ success: true, message: "successfully", response });
        } catch (err) {
            console.log(err);
            return res.json({ success: false, message: "internal server" });
        }
    }

    /**
     * [POST] /api/food/getOne
     * @param {*} req 
     * @param {*} res {data: String, des: foodId}
     * @returns 
     */
    async getOne(req, res) {
        const foodId = req.body.data;
        if (!foodId) return res.json({ success: false, message: "bad request" });
        try {
            const response = await foodModel.findOne({ _id: foodId });

            return res.json({ success: true, message: 'successfully', response });

        } catch (err) {
            console.log(err);
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


    /**
     * [PUT] /api/food/update
     * @param {*} req {data}
     * @param {*} res 
     */
    async update(req, res) {
        const { updatedData, foodId } = req.body;

        if (!updatedData || !foodId) {
            return res.json({ success: false, message: "bad request" });
        }
        try {
            await foodModel.updateOne({ _id: foodId }, updatedData);

            return res.json({ success: true, message: 'successfully' });
        } catch {
            return res.json({ success: false, message: 'internal server' });
        }
    }

    /**
     * [DELETE] /api/food/delete
     * @param {*} req {data: String}
     * @param {*} res 
     */
    async delete(req, res) {
        const foodId = req.body.data;
        console.log(`[foodId]`, foodId);
        if (!foodId) return res.json({ success: false, message: 'bad request' });
        try {

            await foodModel.deleteOne({ _id: foodId });
            return res.json({ success: true, message: 'successfully' });

        } catch (err) {
            return res.json({ success: false, message: 'internal server' });
        }
    }

}

module.exports = new FoodController;