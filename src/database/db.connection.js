import {connect} from 'mongoose';
import {MONGODB_URI} from '../config'

connect (MONGODB_URI)
.then((resp)=>{`DB conectada en el puerto ${resp.connection.port}`})
.catch((error)=>{console.log(error)});