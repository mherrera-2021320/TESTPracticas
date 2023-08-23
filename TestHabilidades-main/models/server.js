const express = require ('express');
const cors = require('cors');
const { dbConection } = require('../database/config');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            categoria: '/api/categoria',
            cliente: '/api/clientes',
            personal: '/api/personal',
            clases: '/api/clases',
            direccion: '/api/direccion',
            pago: '/api/pago',
            servicio: '/api/servicio',
            vehiculo: '/api/vehiculo'
        }

    
        this.conectarDB();
        this.middlewares();
        this.routes();

    }


    async conectarDB(){
        await dbConection();
    }

    
    middlewares(){

        this.app.use( cors() );

        this.app.use( express.json() );

        this.app.use(  express.static('public') );

    }


    routes(){
        this.app.use( this.paths.cliente, require('../routes/cliente'));
        this.app.use( this.paths.personal, require('../routes/personal'));
        this.app.use( this.paths.clases, require('../routes/clases'));
        this.app.use( this.paths.direccion, require('../routes/direcciones'));
        this.app.use( this.paths.pago, require('../routes/pago'));
        this.app.use( this.paths.servicio, require('../routes/servicios'));
        this.app.use( this.paths.vehiculo, require('../routes/vehiculos'));
    }


    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto localhost ${this.port}`)
        })
    }

}



module.exports = Server;