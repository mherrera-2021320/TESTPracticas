const Cliente = require('../models/clientes');
const TipoPago = require('../models/tipoPago');
const TipoEstado = require('../models/tipoEstado');


const emailExiste = async (correo = '') => {
    //Verficar si el correo existe
    const existeEmailDeUsuario = await Cliente.findOne({ correo });
    if (existeEmailDeUsuario) {
        throw new Error(`El correo ${correo}, ya esta registrado en la DB `);
    }
}

const tipoExiste = async (tipoPago = '') => {

    const exisTipoDB = await TipoPago.findOne({ tipoPago });
    if (!exisTipoDB) {
        throw new Error(`El tipo de Pago: ${tipoPago}, no existe en la DB. Solamente Disponible: Efectivo | Tarjeta | Cheque `);

    }
}


const estadoExiste = async (tipoEstado = '' ) => {

    const existEstadoDB = await TipoEstado.findOne({ tipoEstado });
    if (!existEstadoDB) {
        throw new Error(`El tipo de Estado: ${tipoEstado}, no existe en la DB `);
    }
}

    module.exports = {
        emailExiste,
        tipoExiste,
        estadoExiste
    }