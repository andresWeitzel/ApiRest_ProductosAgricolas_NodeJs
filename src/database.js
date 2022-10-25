import mongoose from 'mongoose';
import config from './config';



(async ()=>{
try {
    
    const db = await mongoose.connect(config.mongoUrl)

    console.log('== SE HA ESTABLECIDO LA CONEXIÓN DE LA DB ',db.connection.name,' CORRECTAMENTE ==')


} catch (error) {
    console.log(error)
}

})()