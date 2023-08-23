const { response, request } = require('express');

const Personal = require('../models/personal')


const getPersonal = async (req = request, res = response) => {

    const listaPersonal = await Promise.all([
        Personal.countDocuments(),
        Personal.find(),
    ]);

    res.json({
        msg: 'GET API de Personal',
        listaPersonal
    });

}


const postPersonal = async (req = request, res = response) => {

    const { dpi, nombre, apellido, fechaNacimiento, fechaContratacion, telefono, correo, fechaBaja, tipoEstado, puesto } = req.body;
    const personalDB = new Personal({ dpi, nombre, apellido, fechaNacimiento, fechaContratacion, telefono, correo, fechaBaja, tipoEstado, puesto });

    await personalDB.save();

    res.json({
        msg: 'POST API de Personal',
        personalDB
    });

}

const putPersonal = async (req = request, res = response) => {

    const { id } = req.params;

    const { _id, ...resto } = req.body;

    const personalEditado = await Personal.findByIdAndUpdate(id, resto, { new: true })

    res.status(200).json({
        msg: 'PUT API de Personal',
        personalEditado
    });

}

const deletePersonal = async (req = request, res = response) => {

    const { id } = req.params;
    const deletePersonal = await Personal.findByIdAndDelete(id)

    res.json({
        msg: 'DELETE API de Personal',
        deletePersonal
    });

}

module.exports ={

    getPersonal,
    postPersonal,
    putPersonal,
    deletePersonal

}