import { Router } from "express"
import { 
    getAllComprobantes,
    getComprobante,
    createComprobante,
    updateComprobante,
    deleteComprobante } from "../controllers/comprobantes.controllers";
const router =Router();
router.route("/").get(getAllComprobantes)
export default router
