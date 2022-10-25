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


//Url api base
app.use('/api/v1/productos',routes);


//Routes
app.use(routes);


export default app;