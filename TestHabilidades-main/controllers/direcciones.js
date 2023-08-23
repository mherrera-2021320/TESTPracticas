const { response, request } = require('express');

const Direcciones = require('../models/direcciones')


const getDirecciones = async (req = request, res = response) => {

    const listaDirecciones = await Promise.all([
        Direcciones.countDocuments(),
        Direcciones.find(),
    ]);

    res.json({
        msg: 'GET API de Direcciones',
        listaDirecciones
    });

}


const postDirecciones = async (req = request, res = response) => {

    const { codigo, numCasa, calle, ciudad, codigoPostal, colonia, departamento, municipio, estadoActual } = req.body;
    const direccionesDB = new Direcciones({ codigo, numCasa, calle, ciudad, codigoPostal, colonia, departamento, municipio, estadoActual});

    await direccionesDB.save();

    res.json({
        msg: 'POST API de Direcciones',
        direccionesDB
    });

}

const putDirecciones = async (req = request, res = response) => {

    const { id } = req.params;

    const { _id, ...resto } = req.body;

    const direccionEditada = await Direcciones.findByIdAndUpdate(id, resto, { new: true })


    res.status(200).json({
        msg: 'PUT API de Pago',
        direccionEditada
    });

}

const deleteDirecciones = async (req = request, res = response) => {

    const { id } = req.params;
    const deleteDirecciones = await Direcciones.findByIdAndDelete(id)

    res.json({
        msg: 'DELETE API de Pagos',
        deleteDirecciones
    });

}

module.exports ={

    getDirecciones,
    postDirecciones,
    putDirecciones,
    deleteDirecciones
}