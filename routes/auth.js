const express = require('express');

const controller = require('../controllers/auth');
const decodeUser = require('../middlewares/decode-user');

const router = express.Router();

// @route     Post /api/v1/auth/sign-up
// @desc      Sign up user (for dev)
// @access    Public
// router.post('/sign-up', controller.signUp);

// @route     Post /api/v1/auth/check
// @desc      Check user token
// @access    Public
router.post('/check', decodeUser, controller.check);

// @route     Post /api/v1/auth/sign-in
// @desc      Sign in user
// @access    Public
router.post('/sign-in', controller.signIn);

module.exports = router;
