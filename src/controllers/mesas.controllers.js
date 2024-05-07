import mesa from "../models/mesa";

export const getAllMesas =async(req,res)=>{
    try {
        const mesas= await mesa.find()
        .populate("usuario","_id nombre ")
        res.status(200).json(mesas)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const editarMesa = async (req, res) => {
    try {
        console.log(req.body.body);
        await Comida.findOneAndUpdate( req.body._id,req.body.body);
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
