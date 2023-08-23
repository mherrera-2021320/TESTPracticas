const { Schema, model } = require('mongoose');

const tipoEstadoSchema = Schema({
    tipoEstado: {
        type: String,
        required: [true, 'El estado es obligatorio'],
    }
});

module.exports = model('Estado', tipoEstadoSchema);