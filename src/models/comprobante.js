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
        type: mongoose.Schema.Types.ObjectId,
        ref:"empleado"
    }

})

export default mongoose.model("comprobante",comprobanteSchema);