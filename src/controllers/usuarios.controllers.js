import Usuario from '../models/usuario';

export const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
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
        const usuario = await Usuario.findOne({email:req.body.email,contraseña:req.body.contraseña});
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
        await Usuario.findOneAndRemove({email:req.body.email});
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
        await Usuario.findOneAndUpdate({ email: req.body.email }, req.body, { runValidators: true });
        res.status(201).json({
            mensaje: 'El usuario se editó correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al editar el usuario',
        });
    }
};