import { Router } from "express";

import{
    obtenerPedidos,
    obtenerPedido,
    crearPedido,
    borrarPedido,
    editarPedido
} from '../controllers/pedidos.controller'

const router = Router();
router.route('/pedidos').get(obtenerPedidos)
router.route('/buscar').get(obtenerPedido)
router.route("/pedidos/modificacion").put(editarPedido)
router.route("/pedidos/eliminar/:id").delete(borrarPedido)
router.route('/pedidos/nuevo').post(crearPedido)

export default router
