import {Schema,model} from 'mongoose'
import mongoose from "mongoose";

const mesasSchema = new mongoose.Schema({
    estado:{
        type:String
    },
    total:{
        type:Number
    },
    pago:{
        type:String
    },
    empleado:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"usuario"
    }

})

export default mongoose.model("Mesa",mesasSchema);