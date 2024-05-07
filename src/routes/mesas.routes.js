import router from "./clientes.routes";
import { getAllMesas,editarMesa } from "../controllers/mesas.controllers";

const route=router();
route("/").get(getAllMesas)
route("/:id").put(editarMesa)
export default router