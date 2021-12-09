const express = require('express');
const router = express.Router();
const FoodController = require('../controllers/FoodController');

router.delete('/delete', FoodController.delete);
router.put('/update', FoodController.update);
router.post('/create', FoodController.create);
router.post('/getOne', FoodController.getOne);
router.get('/custom', FoodController.customChange);
router.get('/json', FoodController.getJson);
router.get('/get', FoodController.getList);

module.exports = router;