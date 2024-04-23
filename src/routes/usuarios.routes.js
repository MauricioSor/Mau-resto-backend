import { Router } from "express";

import{
    obtenerUsuarios,
    obtenerUsuario,
    crearUsuario,
    borrarUsuario,
    editarUsuario
} from '../controllers/usuarios.controllers'

const router = Router();
router.route('/').get(obtenerUsuarios)
router.route('/autenticacion').post(obtenerUsuario)
router.route("/:id").put(editarUsuario).delete(borrarUsuario)
router.route('/nuevo').post(crearUsuario)

export default router
