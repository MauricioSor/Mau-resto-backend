import { Router } from "express"
import { 
    getAllClientes,
    getCliente,
    createCliente,
    updateCliente,
    deleteCliente } from "../controllers/clientes.controllers";

const router =Router();
router.route("/").get(getAllClientes)
router.route("/:id").get(getCliente).put(updateCliente).delete(deleteCliente)
router.route("/nuevo").post(createCliente)
export default router