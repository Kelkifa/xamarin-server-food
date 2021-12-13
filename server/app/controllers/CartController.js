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
            console.log(response);
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
        const { userId, food, soLuong = 1 } = req.body;

        if (!userId) return res.json({ success: false, message: 'Bạn chưa đăng nhập' });
        if (!food) return res.json({ success: false, message: 'bad request' });

        try {
            const newCart = {
                userId,
                food,
                soLuong
            }

            await cartModel.create(newCart);

            return res.json({ success: true, message: 'successfully' });

        } catch (err) {
            console.log(`[Cart Add err]`, err);

            return res.json({ success: false, message: 'internal server' });
        }
    }


    /**
     * [POST] /api/cart/remove
     * @param {*} req {cartId}
     * @param {*} res 
     */
    async removeCart(req, res) {
        const { cartIdList = [] } = req.body;
        console.log(req.body);

        if (cartIdList.length == 0) return res.json({ success: false, message: 'bad request' });
        try {
            await cartModel.deleteOne({ _id: cartId });
            return res.json({ success: true, message: 'successfully' });
        } catch (err) {
            console.log(`[Cart remove err]`, err);
            return res.json({ success: false, message: "internal server" });
        }

    }
}

module.exports = new CartController;