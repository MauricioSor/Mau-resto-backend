import { Router } from "express";

import{
    obtenerUsuarios,
    obtenerUsuario,
    crearUsuario,
    borrarUsuario,
    editarUsuario
} from '../controllers/usuarios.controllers'

const router = Router();
router.route('/users').get(obtenerUsuarios)
router.route('/search/:id').get(obtenerUsuario).delete(borrarUsuario).put(editarUsuario)
router.route('/usuario/new').post(crearUsuario)

export default router
