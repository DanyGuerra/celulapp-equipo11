const router = require('express').Router();
const {
  crearCelular,
  obtenerCelulares,
  modificarCelular,
  eliminarCelular,
  obtenerCelularesPorMarca,
  obtenerCelularesPorSO,
  obtenerCelularesPorRAM,
  obtenerPropiedadesEspecificas,
} = require('../controllers/celulares');

router.get('/propiedades', obtenerPropiedadesEspecificas);

router.get('/', obtenerCelulares);
router.post('/crearCelular', crearCelular);
router.put('/modificarCelular', modificarCelular);
router.delete('/eliminarCelular/:id', eliminarCelular);

router.get('/marca/:marca', obtenerCelularesPorMarca);
router.get('/so/:so', obtenerCelularesPorSO);
router.get('/ram/:ram', obtenerCelularesPorRAM);

module.exports = router;
