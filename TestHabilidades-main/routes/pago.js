const { Router } = require('express');
const { getPagos, postPagos, putPago, deletePagos } = require('../controllers/pagos');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { tipoExiste } = require('../helpers/db-validators');

const router = Router();

router.get('/ver', getPagos);

router.post('/agregar', [

    check('fechaPago', 'Ingresa la Fecha Correcta').not().isEmpty(),
    check('tipoPago', 'Ingresa el tipo de Pago ').not().isEmpty(),
    check('tipoPago').custom(tipoExiste),

    check('monto', 'Ingresa el monto Correcto del pago').not().isEmpty(),
    check('monto', 'Pago debe ser mayor a Q.1000').isLength({ min: 4 }),
    check('contrato', 'Ingrese solamente Numeros').not().isEmpty(),
    check('contrato', 'El numero no debe ser mayor a 4 digitos').isLength({ min: 4 }),
    check('contrato', 'El numero no debe ser mayor a 8 digitos').isLength({ max: 8 }),

    validarCampos
], postPagos);

router.put('/editar/:id', [

    check('id', 'No es un ID valido').isMongoId(),
    check('fechaPago', 'Ingresa la Fecha Correcta').not().isEmpty(),
    check('tipoPago', 'Ingresa el tipo de Pago ').not().isEmpty(),
    check('tipoPago').custom(tipoExiste),

    check('monto', 'Ingresa el monto Correcto del pago').not().isEmpty(),
    check('monto', 'Pago debe ser mayor a Q.1000').isLength({ min: 4 }),
    check('contrato', 'Ingrese solamente Numeros').not().isEmpty(),
    check('contrato', 'El numero no debe ser mayor a 4 digitos').isLength({ min: 4 }),
    check('contrato', 'El numero no debe ser mayor a 8 digitos').isLength({ max: 8 }),

    validarCampos
], putPago);

router.delete('/eliminar/:id', [
    
    check('id', 'No es un ID valido').isMongoId(),

    validarCampos
], deletePagos);



module.exports = router; 