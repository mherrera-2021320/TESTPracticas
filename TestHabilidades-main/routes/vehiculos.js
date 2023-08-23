const {Router} = require('express');
const { getVehiculos, postVehiculos, putVehiculo, deleteVehiculo } = require('../controllers/vehiculos');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/ver', getVehiculos);

router.post('/agregar', [

    check('marca', 'Ingresa la marca del Automovil').not().isEmpty(),
    check('modelo', 'Ingresa el modelo del Automovil').not().isEmpty(),
    check('año', 'Ingresa el año del Automovil').not().isEmpty(),
    check('año', 'Ingresa el año del Automovil').isLength({max: 4}),
    check('fechaCompra', 'Ingresa la marca del Automovil').not().isEmpty(),
    validarCampos
], postVehiculos);

router.put('/editar/:id', [

    check('id', 'No es un ID valido').isMongoId(),
    check('marca', 'Ingresa la marca del Automovil').not().isEmpty(),
    check('modelo', 'Ingresa el modelo del Automovil').not().isEmpty(),
    check('año', 'Ingresa el año del Automovil').not().isEmpty(),
    check('año', 'Ingresa el año del Automovil').isLength({max: 4}),
    check('fechaCompra', 'Ingresa la marca del Automovil').not().isEmpty(),
    validarCampos
],  putVehiculo);

router.delete('/eliminar/:id', deleteVehiculo);



module.exports = router; 