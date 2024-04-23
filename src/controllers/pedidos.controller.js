import pedidos from "../models/pedidos";


export const obtenerPedidos = async (req, res) => {
    try {
        const pedidos = await pedidos.find();
        res.status(200).json(pedidos);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar los pedidos',
        });
    }
};
export const obtenerPedido = async (req, res) => {
    try {
        const pedido = await pedidos.findOne({email:req.body.email,contraseña:req.body.contraseña});
        res.status(200).json({
            Pedido:pedido.nombre,
            rol:pedido.rol
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar los Pedidos',
        });
    }
};
export const crearPedido = async (req, res) => {
    try {
        const pedidoNuevo = new pedidos(req.body);
        await pedidoNuevo.save();
        res.status(201).json({
            mensaje: 'El Pedido se creo correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'Error al crear el Pedido',
        });
    }
};
export const borrarPedido = async (req, res) => {
    try {
        await pedidos.findByIdAndDelete(req.params.id);
        res.status(201).json({
            mensaje: 'El pedido se borró correctamente',
        });
    } catch (error) {
        res.status(404).json({
            mensaje: 'Error al borrar el pedido',
        });
    }
};
export const editarPedido = async (req, res) => {
    try {
        await pedidos.findOneAndUpdate({ email: req.body.email }, req.body, { runValidators: true });
        res.status(201).json({
            mensaje: 'El pedido se editó correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al editar el pedido',
        });
    }
};