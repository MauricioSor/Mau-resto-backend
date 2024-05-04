import pedido from "../models/pedidos";


export const obtenerPedidos = async (req, res) => {
    try {
        const pedidos = await pedido.find()
        .populate("cliente","_id nombre direccion telefono")
        .populate("detalle","_id nombre precio")
        res.status(200).json(pedidos);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar los pedidos',
        });
    }
};

export const obtenerPedidosPorEstado = async (req, res) => {
    try {
        const pedidos = await pedido.find({estado:req.params.estado})
        .populate("cliente","_id nombre direccion telefono")
        .populate("detalle","_id nombre precio")
        res.status(200).json(pedidos);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar pedidosxxxxx',
        });
    }
};
export const obtenerPedido = async (req, res) => {
    try {
        const pedido = await pedido.findOne({email:req.body.email,contraseña:req.body.contraseña});
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
        const pedidoNuevo = new pedido(req.body);
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
        await pedido.findByIdAndDelete(req.params.id);
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
        await pedido.findOneAndUpdate({ _id: req.params.id }, req.body.body);
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