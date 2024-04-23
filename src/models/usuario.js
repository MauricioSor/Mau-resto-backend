import mongoose, {Schema,model} from 'mongoose'

const usuarioSchema = new mongoose.Schema({
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
        type: mongoose.Schema.Types.ObjectId,
        ref:"roles"
    }
});

export default mongoose.model('usuario',usuarioSchema);