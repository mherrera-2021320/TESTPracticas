const { response, request } = require('express');

const Clases = require('../models/clases')


const getClases = async (req = request, res = response) => {

    const listaClases = await Promise.all([
        Clases.countDocuments(),
        Clases.find(),
    ]);

    res.json({
        msg: 'GET API de Clases',
        listaClases
    });

}


const postClases = async (req = request, res = response) => {

    const { fecha, cliente, fechaHoraInicio, fechaHoraFinal, contrato  } = req.body;
    const clasesDB = new Clases({ fecha, cliente, fechaHoraInicio, fechaHoraFinal, contrato});

    await clasesDB.save();

    res.json({
        msg: 'POST API de Clases',
        clasesDB
    });

}

const putClases = async (req = request, res = response) => {

    const { id } = req.params;

    const { _id, ...resto } = req.body;

    const claseEditado = await Clases.findByIdAndUpdate(id, resto, { new: true })


    res.status(200).json({
        msg: 'PUT API de Clases',
        claseEditado
    });

}

const deleteClase = async (req = request, res = response) => {

    const { id } = req.params;
    const deleteClases = await Clases.findByIdAndDelete(id)

    res.json({
        msg: 'DELETE API de Clases',
        deleteClases
    });

}

module.exports ={

    getClases,
    postClases,
    putClases,
    deleteClase

}