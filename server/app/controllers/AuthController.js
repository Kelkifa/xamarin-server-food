const userModel = require('../models/users');


class AuthController {

    /**
     * [POST] /api/auth/login
     * @param {*} req {username, password}
     * @param {*} res 
     * @returns 
     */
    async login(req, res) {
        const { username, password } = req.body;
        if (!username || !password) return res.json({ success: false, message: "bad request" })
        try {
            const foundUser = await userModel.findOne({ username });
            if (!foundUser) return res.json({ success: false, message: "Tài khoản hoặc mật khẩu không chính xác" });

            if (password !== foundUser.password)
                return res.json({ success: false, message: "Tài khoản hoặc mật khẩu không chính xác" });


            return res.json({ success: true, message: 'successfully', response: foundUser._id });
        } catch (err) {
            console.log(err);
            return res.json({ success: false, message: "internal server" });
        }
    }


    /**
     * [POST] /api/auth/register
     * @param {*} req {fullname, username, password}
     * @param {*} res 
     * @returns 
     */
    async register(req, res) {
        const { username, password } = req.body;
        console.log(req.body);
        if (!username || !password) return res.json({ success: false, message: 'bad request' });
        try {
            await userModel.create({ username, password });
            return res.json({ success: true, message: 'successfully' });
        } catch (error) {
            if (error.name === 'MongoError' && error.code === 11000) {
                return res.json({ success: false, message: "Tài khoản đã tồn tại" });
            }
            return res.json({ success: false, message: "internal server" });
        }
    }
}


module.exports = new AuthController;