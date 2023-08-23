const {Schema, model} = require('mongoose');

const ServicioSchema = Schema({

    numContrato: {
        type: Number,
        required: [true,'Ingresar Numero de Contrato']
    },

    numSeciones: {
        type: Number,
        required: [true, 'Ingresar Numero de Seciones']
    },

    instructor : {
        type: String,
        required: [true, 'Ingresa el Nombre del Instructor']
    },

    vehiculoClases: {
        type: String,
        required: [true, 'Ingresar Vehiculo para impartir Clases']
    },

    fechaInicio: {
        type: Date,
        required: [true, 'Ingresar Fecha de Inicio de Clases']
    },

    fechaFinal: {
        type: Date,
        required: [true, 'Ingresar Fecha del Final de Clases']
    },

    costoTotal: {
        type: Number,
        required: [true, 'Ingresar el Costo total de las Clases']
    },

    estadoContrato: {
        type: String,
        required: [true,'Solamente puede ser Activo o Inactivo'],
        emun: ['Activo', 'Inactivo']
    },

    estadoServicios: {
        type: Boolean,
        default: true
    },

})


module.exports = model('Servicios', ServicioSchema)
