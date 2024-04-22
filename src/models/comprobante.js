import {Schema,model} from 'mongoose'

import mongoose from "mongoose";

const comprobanteSchema = new mongoose.Schema({

    "cliente":{
    type:mongoose.Schema.Types.ObjectId,
    ref:"cliente"
    },
    "total":{
        type:Number,
    },
    "pago":{
        type:String,
    },
    "mesa":{
        type:Number,
    },
    "empleado":{
        type:mongoose.schema.type.ObjectId,
        ref:"empleado"
    }

})

const Comprobante = mongoose.model ("comprobante",comprobanteSchema);
export default Comprobante