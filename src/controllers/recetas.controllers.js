import { validationResult } from 'express-validator';
import Receta from '../models/comidas';

export const obtenerRecetas = async (req, res) => {
    try {
        //pedir a la BD la lista de recetas
        const recetas = await Receta.find();
        res.status(200).json(recetas);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar las recetas',
        });
    }
};
export const obtenerReceta = async (req, res) => {
    try {
        console.log(req.params.id);
        const receta = await Receta.findById(req.params.id)
        res.status(200).json(receta);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error no se encontro la receta',
        });
    }
};

export const crearReceta = async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
        return res.status(400).json({
            errores:errors.array()
        })
        }
        const recetaNuevo = new Receta(req.body);
        await recetaNuevo.save();
        res.status(201).json({
            mensaje: 'La receta se creo correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(304).json({
            mensaje: 'Error al crear la receta',
        });
    }
};

export const borrarReceta = async (req, res) => {
    try {
        await Receta.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: 'La receta fue eliminada correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'Error no se pudo eliminar la receta',
        });
    }
}

export const editarReceta = async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
        return res.status(400).json({
            errores:errors.array()
            ,Mensaje:errors
        })
        }
        await Receta.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true });
        res.status(201).json({
            mensaje: 'La receta fue editada correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'Error al intentar editar la receta',
        });
    }
}
