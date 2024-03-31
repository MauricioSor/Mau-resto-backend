import {Schema,model} from 'mongoose'

const usuarioSchema = new Schema({
    nombre:{
        type:String,
        minLength:2,
        maxLength:20,
        required:true
    },
    email:{
        type:String,
        minLength:2,
        maxLength:30,
        required:true
    },
    contraseña:{
        type:String,
        minLength:2,
        maxLength:30,
        required:true
    },
    rol:{
        type:String,
        required:true
    }
});

const Usuario = model('usuario',usuarioSchema);
export default Usuario