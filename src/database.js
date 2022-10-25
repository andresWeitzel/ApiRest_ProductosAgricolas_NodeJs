import {connect} from 'mongoose';

(async ()=>{
try {
    
    const db = await connect("mongodb://localhost/db_productos_agricolas")

    console.log('== SE HA ESTABLECIDO LA CONEXIÓN DE LA DB ',db.connection.name,' CORRECTAMENTE ==')


} catch (error) {
    console.log(error)
}

})()