import { Router } from "express"
import { 
    getAllClientes,
    getCliente,
    createCliente,
    updateCliente,
    deleteCliente } from "../controllers/clientes.controllers";
const router =Router();

export default router