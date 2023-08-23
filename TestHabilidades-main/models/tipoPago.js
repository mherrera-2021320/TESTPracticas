const { Schema, model } = require('mongoose');

const tipoPagoSchema = Schema({
    tipoPago: {
        type: String,
        required: [true, 'El tipo es obligatorio'],
    }
});

module.exports = model('Tipo', tipoPagoSchema);