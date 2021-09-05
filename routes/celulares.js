const router = require('express').Router();
const {
  crearCelular,
  obtenerCelulares,
  modificarCelular,
  eliminarCelular,
} = require('../controllers/celulares');

router.get('/', obtenerCelulares);
router.post('/', crearCelular);
router.put('/:id', modificarCelular);
router.delete('/:id', eliminarCelular);

module.exports = router;
