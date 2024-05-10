import {Schema,model} from 'mongoose'
import mongoose from "mongoose";

const mesasSchema = new mongoose.Schema({
    _id:{
        type:Number
    },
    estado:{
        type:String
    },
    total:{
        type:Number
    },
    pago:{
        type:String
    },
    detalle:{
        type:String,
    }

})

export default mongoose.model("Mesa",mesasSchema);