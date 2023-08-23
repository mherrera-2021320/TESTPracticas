const { response, request } = require('express');

const Pagos = require('../models/pagos')


const getPagos = async (req = request, res = response) => {

    const listaPagos = await Promise.all([
        Pagos.countDocuments(),
        Pagos.find(),
    ]);

    res.json({
        msg: 'GET API de Pagos',
        listaPagos
    });

}


const postPagos = async (req = request, res = response) => {

    const { fechaPago, tipoPago, monto, contrato } = req.body;
    const pagoDB = new Pagos({ fechaPago, tipoPago, monto, contrato});

    await pagoDB.save();

    res.json({
        msg: 'POST API de Pago',
        pagoDB
    });

}

const putPago = async (req = request, res = response) => {

    const { id } = req.params;

    const { _id, ...resto } = req.body;

    const pagoEditado = await Pagos.findByIdAndUpdate(id, resto, { new: true })


    res.status(200).json({
        msg: 'PUT API de Pago',
        pagoEditado
    });

}

const deletePagos = async (req = request, res = response) => {

    const { id } = req.params;
    const deletePagos = await Pagos.findByIdAndDelete(id)

    res.json({
        msg: 'DELETE API de Pagos',
        deletePagos
    });

}

module.exports ={

    getPagos,
    postPagos,
    putPago,
    deletePagos

}