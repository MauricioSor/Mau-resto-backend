import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema({
    cliente:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"cliente"
    },
    hora:{
        type:String,
        minLength:10,
        maxLength:500,
        required:true
    },
    detalle:{
        type:String,
        minLength:3,
        maxLength:500,
        required:true
    },
    total:{
        type:Number,
        minLength:2,
        maxLength:150,
        required:true
    }
});

export default mongoose.model('pedido',pedidoSchema);
