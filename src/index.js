import express from 'express';
import morgan from 'morgan';
import routes from './routes/routes'

const app = express();


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