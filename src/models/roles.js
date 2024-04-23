import {Schema,model}from "mongoose"
import mongoose from "mongoose";

const rolesSchema = new mongoose.Schema({
    "nombre":String
})

export default mongoose.model("roles",rolesSchema)