const cartModel = require('../models/carts');
const orderModel = require('../models/orders');


class OrderController {

    // [POST] /api/order/create
    async createOrder(req, res) {
        const { userId, cartIdListJson, address, sdt } = req.body;

        const cartIdList = Json.parse(cartIdListJson);

        if (cartIdList.length == 0) {
            return res.json({ success: false, message: 'bad request' });
        }

        try {

            await cartModel.updateMany({ _id: { $in: cartIdList } }, { isOrder: false });

            console.log(totalCost);

            const newOrder = {
                user: userId,
                cartList: cartIdList,
                address,
                sdt
            }

            await orderModel.create(newOrder);

            return res.json({ success: true, message: 'successfully' });

        } catch (err) {
            return res.json({ success: false, message: "internal server" });
        }
    }

    // [GET] /api/order/get
    async getOrder(req, res) {
        const { userId } = req.body;

        try {
            const response = await orderModel.find({ user: userId });

            return res.json({ success: true, message: 'successfully', response }).populate('user cartList');
        } catch (err) {
            console.log(`[order get err]`, err);

            return res.json({ success: false, message: "internal server" });
        }
    }
}

module.exports = new OrderController;