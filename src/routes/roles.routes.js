import { Router } from "express"
import { 
    getAllRoles} from "../controllers/roles.controller";

const router =Router();
router.route("/").get(getAllRoles)
export default router
