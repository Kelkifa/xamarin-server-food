const cartModel = require('../models/carts');

class CartController {

    /**
     * [GET] /api/cart/get
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async getFoodList(req, res) {
        const { userId } = req.body;
        if (!userId) return res.json({ success: false, message: "Bạn chưa đăng nhập" });
        try {
            const response = await cartModel.find({ userId }).sort({ createdAt: 'desc' }).populate('food');
            return res.json({ success: true, message: 'successfully', response });
        } catch (err) {
            return res.json({ success: false, message: 'internal error' });
        }
    }


    /**
     * [POST] /api/cart/add
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async addCart(req, res) {
        const { userId, foodId, soLuong = 1 } = req.body;

        if (!userId) return res.json({ success: false, message: 'Bạn chưa đăng nhập' });
        if (!foodId) return res.json({ success: false, message: 'bad request' });

        try {
            const newCart = {
                userId,
                foodId,
                soLuong
            }

            await cartModel.create(newCart);

            return res.json({ success: true, message: 'successfully' });

        } catch (err) {
            console.log(`[Cart Add err]`, err);

            return res.json({ success: false, message: 'internal server' });
        }
    }
}

module.exports = new CartController;