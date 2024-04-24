import { validationResult } from 'express-validator';
import Comida from '../models/comidas';

export const obtenerComidas = async (req, res) => {
    try {
        const Comidas = await Comida.find();
        res.status(200).json(Comidas);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar productos',
        });
    }
};
export const obtenerComida = async (req, res) => {
    try {
        const comida = await Comida.findById(req.params.id)
        res.status(200).json(comida);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error no se encontro el producto',
        });
    }
};

export const crearComida = async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
        return res.status(400).json({
            errores:errors.array()
        })
        }
        const comidaNueva = new Comida(req.body);
        await comidaNueva.save();
        res.status(201).json({
            mensaje: 'El producto se creo correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(304).json({
            mensaje: 'Error al crear producto',
        });
    }
};

export const borrarComida = async (req, res) => {
    try {
        await Comida.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: 'El producto fue eliminado correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'Error no se pudo eliminar el producto',
        });
    }
}

export const editarComida = async (req, res) => {
    try {
/*         const errors = validationResult(req);
        if(!errors.isEmpty()){
        return res.status(400).json({
            errores:errors.array()
            ,Mensaje:errors
        })
        } */
        await Comida.findOneAndUpdate({ _id: req.params.id }, req.body);
        
        res.status(201).json({
            mensaje: 'El producto fue editado correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'Error al intentar editar el producto',
        });
    }
}
