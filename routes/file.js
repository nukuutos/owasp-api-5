const express = require('express');

const controller = require('../controllers/file');
const decodeUser = require('../middlewares/decode-user');

const router = express.Router();

// @route     Get /api/v1/file
// @desc      Get file
// @access    Public
router.get('/', decodeUser, controller.getFile);

module.exports = router;
