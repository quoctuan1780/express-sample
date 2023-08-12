var express = require('express');
var multipart = require('connect-multiparty');
var router = express.Router();
const customerController = require('../controllers/customerController.js');
const postController = require('../controllers/postController.js');
var multipartMiddleware = multipart();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/customer', customerController.createPost);
router.get('/customer', customerController.getPost);
router.get('/customer/:id', customerController.getPostById);

router.post("/post", multipartMiddleware, postController.createPost);
router.get('/post', postController.getPost);
router.get('/post/:id', postController.getPostById);

module.exports = router;
