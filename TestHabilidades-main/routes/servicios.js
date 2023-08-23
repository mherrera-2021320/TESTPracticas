const { Router } = require('express');
const { getServicios, postServicios, putServicios, deleteServicios } = require('../controllers/servicios');
const { check } = require('express-validator');
const { estadoExiste } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/ver', getServicios);

router.post('/agregar', [

    check('numContrato', 'Ingresa el Numero del Contrato').not().isEmpty(),
    check('numContrato', 'Minimo 4 digitos').isLength({ min: 4 }),
    check('numContrato', 'Maximo 8 Digitos').isLength({ max: 8 }),
    check('numSeciones', 'Ingresa el Numero del Contrato').not().isEmpty(),
    check('instructor', 'Ingresa el Nombre del Instructor').not().isEmpty(),
    check('vehiculoClases', 'Ingresa el Modelo y Marca del Carro').not().isEmpty(),
    check('fechaInicio', 'Ingresa la fecha de Inicio').not().isEmpty(),
    check('fechaFinal', 'Ingresa la fecha Final').not().isEmpty(),
    check('costoTotal', 'Ingresa el costo ').not().isEmpty(),
    check('costoTotal', 'Ingresa el costo ').isLength({ max: 3 }),
    check('estadoContrato', 'Ingresa el Numero del Contrato').not().isEmpty(),
    check('estadoContrato').custom(estadoExiste),

    validarCampos
], postServicios);

router.put('/editar/:id', [

    check('id', 'No es un ID valido').isMongoId(),
    check('numContrato', 'Ingresa el Numero del Contrato').not().isEmpty(),
    check('numContrato', 'Minimo 4 digitos').isLength({ min: 4 }),
    check('numContrato', 'Maximo 8 Digitos').isLength({ max: 8 }),
    check('numSeciones', 'Ingresa el Numero del Contrato').not().isEmpty(),
    check('instructor', 'Ingresa el Nombre del Instructor').not().isEmpty(),
    check('vehiculoClases', 'Ingresa el Modelo y Marca del Carro').not().isEmpty(),
    check('fechaInicio', 'Ingresa la fecha de Inicio').not().isEmpty(),
    check('fechaFinal', 'Ingresa la fecha Final').not().isEmpty(),
    check('costoTotal', 'Ingresa el costo ').not().isEmpty(),
    check('costoTotal', 'Menor a 3 Digitos').isLength({ max: 3 }),
    check('estadoContrato', 'Ingresa el Numero del Contrato').not().isEmpty(),
    check('estadoContrato').custom(estadoExiste),

    validarCampos
], putServicios);

router.delete('/eliminar/:id', [
    
    check('id', 'No es un ID valido').isMongoId(),

    validarCampos
], deleteServicios);


module.exports = router; 