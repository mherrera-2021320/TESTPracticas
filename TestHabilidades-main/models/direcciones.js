const {Schema, model} = require('mongoose');


const DireccionesSchema = Schema ({

    codigo: {
        type: Number,
        required: [true, 'Ingresar Codigo ']
    },

    numCasa: {
        type: Number,
        required: [true, 'Ingrese el Numero de Casa']
    },
    
    calle: {
        type: String,
        required: [true, 'Ingrese la Calle o Avanida']
    },

    ciudad: {
        type: String,
        required: [true,'Ingresa la Ciudad']
    },

    codigoPostal: {
        type: Number,
        required: [true, 'Ingrese el Codigo Postal']
    },

    colonia: {
        type: String,
        required: [true, 'Ingresa el Nombre de la Colonia']
    },

    departamento: {
        type: String,
        required: [true, 'Ingresa el Departamento']
    },

    municipio: {
        type: String,
        required: [true, 'Ingresa el Municipio']
    },

    estadoActual: {
        type: String,
        required: [true, 'Solamente puede ser Activo o Inactivo'],
        enum: ['Activo', 'Inactivo']
    },

    estadoDireccion: {
        type: Boolean,
        default: true
    },

})

module.exports = model('Direccion', DireccionesSchema);