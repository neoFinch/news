var express = require('express');
var router = express.Router();
var newsController = require('../controllers/newsController.js');

/*
 * GET
 */
router.get('/', newsController.list);

module.exports = router;
