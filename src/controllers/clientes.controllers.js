import Cliente from "../models/clientes";

export const getAllClientes = async(res) => {
    try {
        const clientes = await Cliente.find({})
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
        const cliente= new Cliente(req.body)
        await cliente.save();
    } catch (error) {
    return res.status(400).json(error)
    }
}

export const updateCliente = () => {
    try {

    } catch (error) {
        return res.status(400).json(error)

    }
}

export const deleteCliente = () => {
    try {

    } catch (error) {
        return res.status(400).json(error)

    }
}