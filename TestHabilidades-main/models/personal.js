const { Schema, model } = require('mongoose');


const PersonalSchema = Schema({

    dpi: {
        type: Number,
        required: [true, 'Ingresar su DPI']
    },

    nombre: {
        type: String,
        required: [true, 'Ingresar su primer Nombre']
    },

    apellido: {
        type: String,
        required: [true, 'Ingresar su primer Apellido']
    },

    fechaNacimiento: {
        type: Date,
        required: [true, 'Ingresar su fecha de Nacimiento']
    },

    fechaContratacion: {
        type: Date,
        required: [true, 'Ingresar la fecha de la contratacion']
    },

    telefono: {
        type: Number,
        required: [true, 'Ingresar su numero Celular']
    },

    correo: {
        type: String,
        required: [true, 'Ingresar su correo']
    },


    fechaBaja: {
        type: Date,
        required: [true, 'Ingresar su fecha de ida']
    },

    tipoEstado: {
        type: String,
        required: [true, 'Ingresar el estado de la Cuenta'],
        enum: ['Activo', "Inactivo"]
    },

    puesto: {
        type: String,
        required: [true, 'Ingresar su fecha de ida']
    },

    estadoPersonal: {
        type: Boolean,
        default: true

    },

})

module.exports = model('Personal', PersonalSchema)