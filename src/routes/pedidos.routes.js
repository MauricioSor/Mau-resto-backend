import { Router } from "express";

import{
    obtenerPedidos,
    obtenerPedido,
    crearPedido,
    borrarPedido,
    editarPedido
} from '../controllers/pedidos.controller'

const router = Router();
router.route('/').get(obtenerPedidos)
router.route('/:id').get(obtenerPedido).put(editarPedido).delete(borrarPedido)
router.route('/nuevo').post(crearPedido)
export default router
