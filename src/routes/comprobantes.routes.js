import { Router } from "express"
import { 
    getAllComprobantes,
    getComprobante,
    createComprobante,
    updateComprobante,
    deleteComprobante } from "../controllers/comprobantes.controllers";
const router =Router();
export default router
