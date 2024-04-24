import { Router } from "express";
import {check} from 'express-validator'
import{
    obtenerComidas,
    obtenerComida,
    crearComida,
    borrarComida,
    editarComida
} from '../controllers/comidas.controllers'
import validarProducto from "../helpers/validacionProducto";

const router = Router();
router.route('/').get(obtenerComidas)
router.route('/:id').get(obtenerComida).delete(borrarComida).put(editarComida)
router.route('/nueva').post(crearComida)

export default router
