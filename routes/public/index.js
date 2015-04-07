var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.renderLayout('public/home', { title: 'Express' });
});

router.get('/login', require('./login'));

module.exports = router;