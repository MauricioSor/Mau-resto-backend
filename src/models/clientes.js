import {Schema,model} from 'mongoose'
import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
    "nombre":{
        type:String,
    },
    "telefono":{
        type:String,
        
    },
    "direccion":{
        type:String,
        
    }
})

export default mongoose.model("cliente",clienteSchema);