import {Schema,model} from 'mongoose'
import mongoose from "mongoose";

const comprobanteSchema = new mongoose.Schema({
    cliente:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"cliente"
    },
    total:{
        type:Number,
    },
    detalle:{
        type:String,
    },
    pago:{
        type:String,
    },
    mesa:{
        type:mongoose.Schema.Types.Number,
        ref:"mesa"
    },
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"usuario"
    }
})

export default mongoose.model("comprobante",comprobanteSchema);