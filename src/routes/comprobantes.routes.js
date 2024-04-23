import { Router } from "express"
import { 
    getAllComprobantes,
    getComprobante,
    createComprobante,
    updateComprobante,
    deleteComprobante } from "../controllers/comprobantes.controllers";
const router =Router();
router.route("/").get(getAllComprobantes)
router.route("/crear").post(createComprobante)
router.route("/:id").put(updateComprobante).delete(deleteComprobante).get(getComprobante)
export default router
