var express = require('express');
const postsController = require('../controllers/postsController');
var router = express.Router();

/* GET users listing. */
router.get('/', postsController.index);
router.post('/', postsController.create);
router.put('/:id', postsController.update);
router.delete('/:id', postsController.delete);

module.exports = router;
