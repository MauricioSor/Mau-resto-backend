import {Schema,model} from 'mongoose'
import mongoose from 'mongoose';

const comidaSchema = new mongoose.Schema({
    nombre:{
        type:String,
        minLength:2,
        maxLength:20,
        required: true
    },
    precio:{
        type: Number,
        min: 1,
        max: 999999,
        required: true
    },
    imagen:{
        type:String,
        minLength:2,
        maxLength:150,
        required:true
    },
    categoria:{
        type:String,
        minLength:2,
        maxLength:20,
        required:true
    },
    descripcion:{
        type:String,
        minLength:20,
        maxLength:500,
        required:true
    }
});


export default mongoose.model('comida',comidaSchema);