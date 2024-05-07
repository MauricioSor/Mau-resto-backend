import { Router } from "express";
import { getAllMesas,editarMesa } from "../controllers/mesas.controllers";

const router = Router();
router.route("/").get(getAllMesas)
router.route("/:id").put(editarMesa)
export default router