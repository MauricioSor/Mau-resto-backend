import Cliente from "../models/clientes";

export const getAllClientes = async(req,res) => {
    try {
        const clientes = await Cliente.find()
        return res.status(200).json(clientes)
    } catch (error) {
        return res.status(400).json(error)
    }
}
export const getCliente = async(req,res) => {
    try {
        const cliente = await Cliente.findById(req.params.id)
        return res.status(200).json(cliente);
    } catch (error) {
        return res.status(400).json(error)
    }
}

export const createCliente = async(req,res) => {
    try {
        const cliente= new Cliente(req.body.cliente)
        await cliente.save();
        return res.status(200).json(cliente._id)
    } catch (error) {
    return res.status(400).json(error)
    }
}

export const updateCliente = async(req,res) => {
    try {
        await Cliente.findByIdAndUpdate({_id:req.params.id},req.body)
        return res.status(201).json("Modificacion exitosa")
    } catch (error) {
        return res.status(400).json(error)
    }
}

export const deleteCliente = async(req,res) => {
    try {   
        await Cliente.findByIdAndDelete({_id:req.params.id})
        return res.status(201).json("Borrado exitosamente");
    } catch (error) {
        return res.status(400).json(error)
    }
}