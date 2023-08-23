const {Router} = require('express');
const { validarCampos } = require('../middlewares/validar-campos');
const { check } = require('express-validator');

const {getClases, postClases, putClases, deleteClase } = require('../controllers/clases')

const router = Router();

router.get('/ver', getClases);

router.post('/agregar',[

    check('fecha', 'Ingresa la fecha').not().isEmpty(),
    check('cliente', 'Ingresa nombre del Cliente').not().isEmpty(),
    check('fechaHoraInicio', 'Ingresa Fecha de Inicio de Clase').not().isEmpty(),
    check('fechaHoraFinal', 'Ingresa Fecha de Final de Clase').not().isEmpty(),
    check('contrato', 'Ingrese el numero de su contrato').not().isEmpty(),
    check('contrato', 'El numero debe ser mayor a 4 digitos').isLength({ min: 4  }),
    check('contrato', 'El numero no debe ser mayor a 8 digitos').isLength({ max: 8  }),
    validarCampos
], postClases);

router.put('/editar/:id',[
    check('id', 'No es un ID valido').isMongoId(),
    check('fecha', 'No es una Fecha Valida').not().isEmpty(),
    check('cliente', 'Ingrese el clientre correcto').not().isEmpty(),
    check('fechaHoraInicio', 'Ingrese la Fecha de Inicio Correcta').not().isEmpty(),
    check('fechaHoraFinal', 'Ingresa la Fecha de Fin correcta').not().isEmpty(),
    check('contrato', 'Ingrese solamente Numeros').not().isEmpty(),
    check('contrato', 'Ingrese solamente un numero').isLength({ min: 4  }),
    check('contrato', 'El numero no debe ser mayor a 8 digitos').isLength({ max: 8  }),
    validarCampos
] , putClases);

router.delete('/eliminar/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    validarCampos
], deleteClase);



module.exports = router; 