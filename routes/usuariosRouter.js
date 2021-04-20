var express = require('express');
const usuariosController = require('../controllers/usuariosController');
var router = express.Router();

/* GET users listing. */
router.get('/', usuariosController.index);
router.post('/', usuariosController.create);
router.put('/:id', usuariosController.update);
router.delete('/:id', usuariosController.delete);

module.exports = router;
