const express = require('express');

const router = express.Router();

const { loginUser, signupUser, getAllUsers} = require('../Controllers/userController');

router.post('/login', loginUser);

router.post('/signup', signupUser);

router.get('/getusers', getAllUsers);

module.exports = router;