import {Schema,model} from 'mongoose'

const recetaSchema = new Schema({
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
    }
});

const Receta =  model('receta',recetaSchema);
export default Receta