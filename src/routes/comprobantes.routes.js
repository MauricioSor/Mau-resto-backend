import { Router } from "express"
import { 
    getAllComprobantes,
    getComprobante,
    createComprobante,
    actualizarComprobante,
    borrarComprobante } from "../controllers/comprobantes.controllers";
const router =Router();
router.route("/").get(getAllComprobantes)
router.route("/crear").post(createComprobante)
router.route("/:id").put(actualizarComprobante).delete(borrarComprobante).get(getComprobante)
export default router
