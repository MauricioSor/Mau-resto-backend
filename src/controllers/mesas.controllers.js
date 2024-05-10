import mesa from "../models/mesa";

export const getAllMesas =async(req,res)=>{
    try {
        const mesas = await mesa.find({});
        res.status(200).json(mesas)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const editarMesa = async (req, res) => {
    try {
        console.log(req.params.id);
        console.log(req.body.mesa);
        await mesa.findOneAndUpdate( {_id:req.params.id},req.body.mesa);
        res.status(201).json({
            mensaje: 'La mesa se actualizo correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'Error al intentar editar mesa',
        });
    }
}
