const { response, request } = require('express');

const Vehiculos = require('../models/vehiculos')


const getVehiculos = async (req = request, res = response) => {

    const listaVehiculos = await Promise.all([
        Vehiculos.countDocuments(),
        Vehiculos.find(),
    ]);

    res.json({
        msg: 'GET API de Vehiculos',
        listaVehiculos
    });

}


const postVehiculos = async (req = request, res = response) => {

    const { marca, modelo, año, fechaCompra  } = req.body;
    const vehiculoDB = new Vehiculos({ marca, modelo, año, fechaCompra });

    await vehiculoDB.save();

    res.json({
        msg: 'POST API de Vehiculo',
        vehiculoDB
    });

}

const putVehiculo = async (req = request, res = response) => {

    const { id } = req.params;

    const { _id, ...resto } = req.body;

    const vehiculoEditado = await Vehiculos.findByIdAndUpdate(id, resto, { new: true })


    res.status(200).json({
        msg: 'PUT API de Vehiculo',
        vehiculoEditado
    });

}

const deleteVehiculo = async (req = request, res = response) => {

    const { id } = req.params;
    const deleteVehiculo = await Vehiculos.findByIdAndDelete(id)

    res.json({
        msg: 'DELETE API de Vehiculo',
        deleteVehiculo
    });

}

module.exports ={

    getVehiculos,
    postVehiculos,
    putVehiculo,
    deleteVehiculo

}