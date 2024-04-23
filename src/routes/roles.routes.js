import { Router } from "express"
import { 
    getAllRoles,
    createRol } from "../controllers/roles.controller";

const router =Router();
router.route("/todos").get(getAllRoles)

export default router
