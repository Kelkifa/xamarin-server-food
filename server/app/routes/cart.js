const express = require('express');
const router = express.Router();
const CartController = require('../controllers/CartController');

router.post('/add', CartController.addCart);
router.post('/get', CartController.getFoodList);

module.exports = router;