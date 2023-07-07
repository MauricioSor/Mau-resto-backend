import receta from '../models/receta';

export const obtenerRecetas = async (req, res) => {
    try {
        //pedir a la BD la lista de recetas
        const recetas = await receta.find();
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
        const receta = await receta.findById(req.params.id)
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
        // console.log(req.body);
        const recetaNuevo = new receta(req.body);
        await recetaNuevo.save();
        res.status(201).json({
            mensaje: 'La receta se creo correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al crear la receta',
        });
    }
};

export const borrarReceta = async (req, res) => {
    try {
        await receta.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: 'La receta fue eliminada correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error no se pudo eliminar la receta',
        });
    }
}

export const editarReceta = async (req, res) => {
    try {
        await receta.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            mensaje: 'La receta fue editada correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'Error al intentar editar la receta',
        });
    }
}
