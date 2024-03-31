import { Router } from "express";
import {check} from 'express-validator'
import{
    obtenerRecetas,
    obtenerReceta,
    crearReceta,
    borrarReceta,
    editarReceta
} from '../controllers/recetas.controllers'
import validarProducto from "../helpers/validacionProducto";

const router = Router();
router.route('/todas').get(obtenerRecetas)
router.route('/receta/:id').get(obtenerReceta).delete(borrarReceta)
.put(validarProducto,editarReceta)
router.route('/receta/nueva')
.post(validarProducto,crearReceta)

export default router
