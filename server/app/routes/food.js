const express = require('express');
const router = express.Router();
const FoodController = require('../controllers/FoodController');

router.post('/create', FoodController.create);
router.get('/list', FoodController.getList);

module.exports = router;