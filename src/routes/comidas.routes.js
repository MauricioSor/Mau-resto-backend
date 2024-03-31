import { Router } from "express";
import {check} from 'express-validator'
import{
    obtenerRecetas,
    obtenerReceta,
    crearReceta,
    borrarReceta,
    editarReceta
} from '../controllers/comidas.controllers'
import validarProducto from "../helpers/validacionProducto";

const router = Router();
router.route('/todas').get(obtenerRecetas)
router.route('/comida/:id').get(obtenerReceta).delete(borrarReceta)
.put(validarProducto,editarReceta)
router.route('/comida/nueva')
.post(validarProducto,crearReceta)

export default router
