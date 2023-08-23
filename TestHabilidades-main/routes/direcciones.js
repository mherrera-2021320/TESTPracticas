const { Router } = require('express');
const { getDirecciones, postDirecciones, putDirecciones, deleteDirecciones } = require('../controllers/direcciones');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { estadoExiste } = require('../helpers/db-validators');

const router = Router();

router.get('/ver', getDirecciones);

router.post('/agregar', [
    check('codigo', 'Ingrese El numero de su codigo').not().isEmpty(),
    check('codigo', 'El numero no puede ser mayor a 4').isLength({ max: 4 }),
    check('numCasa', 'Ingrese El numero de la Casa').not().isEmpty(),
    check('calle', 'Ingrese El nombre de la calle').not().isEmpty(),
    check('ciudad', 'Ingrese su ciudad').not().isEmpty(),
    check('codigoPostal', 'Ingrese su codigo Postal').not().isEmpty(),
    check('colonia', 'Ingrese el nombre de su colonia').not().isEmpty(),
    check('departamento', 'Ingrese el nombre de su departamento').not().isEmpty(),
    check('municipio', 'Ingrese El nombre de su municipio').not().isEmpty(),
    check('estadoActual', 'Ingrese si su estado actual es Activo o Inactivo').not().isEmpty(),
    check('estadoActual', ).custom(estadoExiste),

    validarCampos
], postDirecciones);

router.put('/editar/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('codigo', 'Ingrese El numero de su codigo').not().isEmpty(),
    check('codigo', 'El numero no puede ser mayor a 4').isLength({ max: 4 }),
    check('numCasa', 'Ingrese El numero de la Casa').not().isEmpty(),
    check('calle', 'Ingrese El nombre de la calle').not().isEmpty(),
    check('ciudad', 'Ingrese su ciudad').not().isEmpty(),
    check('codigoPostal', 'Ingrese su codigo Postal').not().isEmpty(),
    check('colonia', 'Ingrese el nombre de su colonia').not().isEmpty(),
    check('departamento', 'Ingrese el nombre de su departamento').not().isEmpty(),
    check('municipio', 'Ingrese El nombre de su municipio').not().isEmpty(),
    check('estadoActual', 'Ingrese si su estado actual es Activo o Inactivo').not().isEmpty(),
    check('estadoActual', ).custom(estadoExiste),


    validarCampos
], putDirecciones);

router.delete('/eliminar/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    validarCampos
], deleteDirecciones);



module.exports = router; 