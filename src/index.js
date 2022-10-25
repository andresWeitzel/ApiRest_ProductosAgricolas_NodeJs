const express = require('express');
const morgan = require('morgan');
const app = express();

const routes = require('./routes/routes');



//Settings
app.set('port',process.env.PORT || 3000);
app.set('json spaces',2);


//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//Routes
app.use(routes);



//Starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Servidor en el puerto ${app.get('port')}`);
});