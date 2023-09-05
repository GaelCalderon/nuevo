const express = require('express'); //referencia a framework express
const app = express();//se crea la aplicacion de express
const log = require('morgan'); //saber los clientes conectados
const bodyParser = require('body-parser');
const IndexRoutes = require('./routers/index.js');

app.set('port', process.env.PORT || 3000); // asigno puerto 3000
//midelewarw utiliza morgar
app.use(log('dev'));
app.use(bodyParser.urlencoded({extended:false}));
//Rutas 
app.use('/',IndexRoutes);

app.listen(app.get('port'), () => {
    console.log('El servidor esta funcionando en el puerto', app.get('port'));
}

);
//mensaje de conectado