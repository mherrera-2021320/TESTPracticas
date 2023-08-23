const { response, request } = require('express');

const Servicios = require('../models/servicios')


const getServicios = async (req = request, res = response) => {

    const listaServicios = await Promise.all([
        Servicios.countDocuments(),
        Servicios.find(),
    ]);

    res.json({
        msg: 'GET API de Servicio',
        listaServicios
    });

}


const postServicios = async (req = request, res = response) => {

    const { numContrato, numSeciones, instructor, vehiculoClases, fechaInicio, fechaFinal, costoTotal, estadoContrato } = req.body;
    const servicioDB = new Servicios({ numContrato, numSeciones, instructor, vehiculoClases, fechaInicio, fechaFinal, costoTotal, estadoContrato });

    await servicioDB.save();

    res.json({
        msg: 'POST API de Servicios',
        servicioDB
    });

}

const putServicios = async (req = request, res = response) => {

    const { id } = req.params;

    const { _id, ...resto } = req.body;

    const servicioEditado = await Servicios.findByIdAndUpdate(id, resto, { new: true })


    res.status(200).json({
        msg: 'PUT API de Servicio',
        servicioEditado
    });

}

const deleteServicios = async (req = request, res = response) => {

    const { id } = req.params;
    const deleteServicios = await Servicios.findByIdAndDelete(id)

    res.json({
        msg: 'DELETE API de Servicios',
        deleteServicios
    });

}

module.exports ={

    getServicios,
    postServicios,
    putServicios,
    deleteServicios

}