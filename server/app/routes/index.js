const homeRouter = require('./home');
const foodRouter = require('./food');
const authRouter = require('./auth');

function router(app) {
    app.use('/api/auth', authRouter);
    app.use('/api/food', foodRouter);
    app.use('/', homeRouter);
}

module.exports = router;