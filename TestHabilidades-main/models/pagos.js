const {Schema, model} = require('mongoose');

const PagoSchema = Schema ({

    fechaPago: {
        type: Date,
        required: [true, 'Ingresa la fecha del Pago']
    },

    tipoPago: {
        type: String,
        required: true,
        enum: ['Efectivo', 'Tarjeta', 'Cheque']
    },

    monto: {
        type: Number,
        required: [true, 'Ingresa el Monto del Pago']
    },

    contrato: {
        type: Number,
        required: [true, 'Ingresa el Numero de Contrato']

    },
    
    estadoPago: {
        type: Boolean,
        default: true
    },

})

module.exports = model('Pagos', PagoSchema)
