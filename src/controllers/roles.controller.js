import roles from "../models/roles";

export const getAllRoles = async(req,res)=>{
    try {
        const allroles= await roles.find()
        res.status(200).json(allroles);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar los usuarios',
        });
    }
}



