const express = require('express');
const router = express.Router();

const __user = require('../controllers/User.controller');

router.get('/users', __user.fetchUsers);
router.post('/users', __user.createUser);

module.exports = router;
