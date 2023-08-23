const { Router } = require('express');
const { getPersonal, postPersonal, putPersonal, deletePersonal } = require('../controllers/personal');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { estadoExiste } = require('../helpers/db-validators');

const router = Router();

router.get('/ver', getPersonal);

router.post('/agregar', [

    check('dpi', 'Ingrese su DPI ').not().isEmpty(),
    check('dpi', 'El DPI tiene que ser exactamente 13 digitos ').isLength({min: 13}),
    check('dpi', 'El DPI tiene que ser exactamente 13 digitos ').isLength({max: 13}),
    check('nombre', 'Ingrese su nombre ').not().isEmpty(),
    check('apellido', 'Ingrese su apellido ').not().isEmpty(),
    check('fechaNacimiento', 'Ingrese su fecha de Nacimiento ').not().isEmpty(),
    check('fechaContratacion', 'Ingrese su fecha de Contratacion').not().isEmpty(),
    check('telefono', 'Ingrese su numero Celular ').not().isEmpty(),
    check('telefono', 'Tienen que ser 8 digitos exactamente').isLength({min: 8}),
    check('telefono', 'Tienen que ser 8 digitos exactamente').isLength({max: 8}),
    check('correo', 'Ingrese su correo ').not().isEmpty(),
    check('fechaBaja', 'Ingrese la fecha de su despido ').not().isEmpty(),
    check('tipoEstado', 'Eliga su estado ').not().isEmpty(),
    check('tipoEstado').custom(estadoExiste),
    check('puesto',"Ingreso el puesto Correctamente").not().isEmpty(),

    validarCampos
], postPersonal);

router.put('/editar/:id', [

    check('id', 'No es un ID valido').isMongoId(),
    check('dpi', 'Ingrese su DPI Correcto ').not().isEmpty(),
    check('dpi', 'El DPI tiene que ser exactamente 13 digitos ').isLength({min: 13}),
    check('dpi', 'El DPI tiene que ser exactamente 13 digitos ').isLength({max: 13}),
    check('nombre', 'Ingrese su nombre ').not().isEmpty(),
    check('apellido', 'Ingrese su apellido ').not().isEmpty(),
    check('fechaNacimiento', 'Ingrese su fecha de Nacimiento ').not().isEmpty(),
    check('fechaContratacion', 'Ingrese su fecha de Contratacion').not().isEmpty(),
    check('telefono', 'Ingrese su numero Celular ').not().isEmpty(),
    check('telefono', 'Tienen que ser 8 digitos exactamente').isLength({min: 8}),
    check('telefono', 'Tienen que ser 8 digitos exactamente').isLength({max: 8}),
    check('correo', 'Ingrese su correo ').not().isEmpty(),
    check('fechaBaja', 'Ingrese la fecha de su despido ').not().isEmpty(),
    check('tipoEstado', 'Eliga su estado ').not().isEmpty(),
    check('tipoEstado').custom(estadoExiste),
    check('puesto',"Ingreso el puesto Correctamente").not().isEmpty(),

    validarCampos
], putPersonal);

router.delete('/eliminar/:id', [
    
    check('id', 'No es un ID valido').isMongoId(),

    validarCampos
], deletePersonal);



module.exports = router; 