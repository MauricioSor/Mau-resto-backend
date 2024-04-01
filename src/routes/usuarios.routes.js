import { Router } from "express";

import{
    obtenerUsuarios,
    obtenerUsuario,
    crearUsuario,
    borrarUsuario,
    editarUsuario
} from '../controllers/usuarios.controllers'

const router = Router();
router.route('/usuarios').get(obtenerUsuarios)
router.route('/autenticacion').post(obtenerUsuario)
router.route("/modificacion").put(editarUsuario)
router.route("/eliminar/:id").delete(borrarUsuario)
router.route('/usuario/nuevo').post(crearUsuario)

export default router
