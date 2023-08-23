const { Schema, model } = require('mongoose');

const VehiculoSchema = Schema({

    marca: {
        type: String,
        required: [true, 'Ingresa la Marca del Automovil']
    },

    modelo: {
        type: String,
        required: [true, 'Ingresa el Modelo del Automovil']
    },

    año: {
        type: Number, 
        required: [true, 'Ingresa el año del Automovil']
    },

    fechaCompra:{
        type: Date,
        required: [true, 'Ingresa la fecha en la cual se compro el Vehiculo']
    },

    estadoVehiculo: {
        type: Boolean,
        default: true
    },


})

module.exports = model('Vehiculo', VehiculoSchema);