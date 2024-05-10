import comprobante from "../models/comprobante";

export const getAllComprobantes =async(req,res)=>{
    try {
        const comprobantes= await comprobante.find()
        .populate("cliente","_id nombre")
        .populate("usuario","_id nombre")
        return res.status(200).json(comprobantes)
    } catch (error) {
        return res.status(400).json(error)
    }
}
export const getComprobante =(req,res)=>{
    try {
        const comprobanteBuscado = comprobante.findById(req.params.id)
        return res.status(200).json(comprobanteBuscado)
    } catch (error) {
        return res.status(400).json(error)
    }
}

export const createComprobante =async(req,res)=>{
    try {
        console.log(req.body.comprobante);
        const comprobanteNuevo = new comprobante(req.body.comprobante)
        await comprobanteNuevo.save()
        return res.status(200).json("Creado correctamente")
    } catch (error) {
        return res.status(400).json(error)
    }
}

export const borrarComprobante =async(req,res)=>{
    try {
        await comprobante.findByIdAndDelete(req.params.id)
    } catch (error) {
        return res.status(400).json(error)
    }
}

export const actualizarComprobante =async(req,res)=>{
    try {
        await comprobante.findOneAndUpdate({_id:req.body},req.body)
        return res.status(200).json("Editado correctamente")
    } catch (error) {
        return res.status(400).json(error)
    }
    
}