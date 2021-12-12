

function getUserIdMidleware(req, res, next) {
    req.body.userId = undefined;
    const authHeader = req.header('Authorization');
    const userId = authHeader && authHeader.split(' ')[1]

    console.log(userId);
    // if (!userId)
    //     return res.json({ success: false, message: "Bạn chưa đăng nhập" });

    req.body.userId = userId;
    return next();
}

module.exports = getUserIdMidleware;