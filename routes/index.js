var express = require('express');
const { obtenerTodo, obtenerPorID } = require('../controllers/animes.controllers');
var router = express.Router();

/* GET home page. */
router.get('/', obtenerTodo);

router.get('/:id', obtenerPorID);

module.exports = router;
