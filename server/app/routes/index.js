const homeRouter = require('./home');
const foodRouter = require('./food');
const authRouter = require('./auth');
const cartRouter = require('./cart');
function router(app) {
    app.use('/api/auth', authRouter);
    app.use('/api/food', foodRouter);
    app.use('/api/cart', cartRouter);
    app.use('/', homeRouter);
}

module.exports = router;