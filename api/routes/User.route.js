const express = require('express');
const router = express.Router();

const __user = require('../controllers/User.controller');

router.post('/user/login', __user.login);
router.post('/user/register', __user.register);
// router.post('/user/forgot-password', __user.forgotPassword);

module.exports = router;
