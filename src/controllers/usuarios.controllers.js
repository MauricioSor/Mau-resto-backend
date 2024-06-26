import Usuario from '../models/usuario';

export const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find()
        .populate('rol',"_id nombre")
        res.status(200).json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar los usuarios',
        });
    }
};
export const obtenerUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findOne({email:req.body.email,contraseña:req.body.contraseña})
        .populate('rol',"_id nombre")
        res.status(200).json({
            usuario:usuario.nombre,
            rol:usuario.rol
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar los usuarios',
        });
    }
};
export const crearUsuario = async (req, res) => {
    try {
        const usuarioNuevo = new Usuario(req.body);
        await usuarioNuevo.save();
        res.status(201).json({
            mensaje: 'El usuario se creo correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'Error al crear el usuario',
        });
    }
};
export const borrarUsuario = async (req, res) => {
    try {
        await Usuario.findByIdAndDelete(req.params.id);
        res.status(201).json({
            mensaje: 'El usuario se borró correctamente',
        });
    } catch (error) {
        res.status(404).json({
            mensaje: 'Error al borrar el usuario',
        });
    }
};
export const editarUsuario = async (req, res) => {
    try {
        
        const usuarioActualizado = await Usuario.findOneAndUpdate(
            { _id: req.params.id },req.body.usuario);
            console.log(usuarioActualizado);        
            res.status(201).json({
            mensaje: 'El usuario se editó correctamente',
        });
    } catch (error) {
        res.status(404).json({
            mensaje: 'Error al editar el usuario',
        });
    }
};