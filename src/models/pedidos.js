import {Schema,model} from 'mongoose'

const pedidoSchema = new Schema({
    cliente:{
        type:String,
        minLength:2,
        maxLength:20,
        required: true
    },
    descripcion:{
        type:String,
        minLength:20,
        maxLength:500,
        required:true
    },
    direccion:{
        type:String,
        minLength:8,
        maxLength:150,
        required:true
    },
    contacto:{
        type:Number,
        minLength:2,
        maxLength:20,
        required:true
    },
});

const Pedido =  model('pedido',pedidoSchema);
export default Pedido