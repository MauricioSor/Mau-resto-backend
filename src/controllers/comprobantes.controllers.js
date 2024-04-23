import Comprobante from "../models/comprobante";


export const getAllComprobantes =async()=>{
    try {
        const comprobante= await Comprobante.find({})
        return res.status(200).json(comprobante)
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