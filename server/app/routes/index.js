const homeRouter = require('./home');
const foodRouter = require('./food');

function router(app) {
    app.use('/api/food', foodRouter);
    app.use('/', homeRouter);
}

module.exports = router;