import {Schema,model}from "mongoose"
import mongoose from "mongoose";

const rolesSchema = new mongoose.Schema({
    "nombre":String
})

const Roles = model("roles",rolesSchema)