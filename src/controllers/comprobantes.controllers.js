import Comprobante from "../models/comprobante";


export const getAllComprobantes =async(req,res)=>{
    try {
        const comprobante= await Comprobante.find()
        .populate("cliente","_id nombre direccion telefono")
        .populate("usuario","_id nombre email")
        res.status(200).json(comprobante)
    } catch (error) {
        res.status(400).json(error)
    }
}
export const getComprobante =()=>{
    try {

    } catch (error) {
        res.status(400).json(error)

    }
}

export const createComprobante =()=>{
    try {

    } catch (error) {
        res.status(400).json(error)

    }
}

export const updateComprobante =()=>{
    try {

    } catch (error) {
        res.status(400).json(error)

    }
    
}

export const deleteComprobante =()=>{
    try {

    } catch (error) {
        res.status(400).json(error)

    }
    
}