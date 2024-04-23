import {Schema,model}from "mongoose"
import mongoose from "mongoose";

const rolesSchema = new mongoose.Schema({
    nombre:{
        type:String
    }
})

export default mongoose.model("roles",rolesSchema)