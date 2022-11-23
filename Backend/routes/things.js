const express = require('express');
const router = express.Router();

// const Ctrl = require('../controllers/post');

const Ctrl = require('../controllers/things');

router.post('/', Ctrl.postuser);
//router.get('/', Ctrl.postsDisplay);

// router.post('/', Ctrl.postAdd);


module.exports = router;