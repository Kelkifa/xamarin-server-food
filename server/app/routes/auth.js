const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

const getUserIdMidleware = require('../midlewares/getUserIdMidleware');

router.post('/register', AuthController.register);
router.post('/login', getUserIdMidleware, AuthController.login);

module.exports = router;
