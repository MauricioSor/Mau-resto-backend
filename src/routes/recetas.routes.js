import { Router } from "express";

import{
    obtenerRecetas,
    obtenerReceta,
    crearReceta,
    borrarReceta,
    editarReceta
} from '../controllers/recetas.controllers'

const router =Router();
router.route('/todas').get(obtenerRecetas)
router.route('/receta').get(obtenerReceta).delete(borrarReceta).put(editarReceta)
router.route('/receta/nueva').post(crearReceta)

export default router
