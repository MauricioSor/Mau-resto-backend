import jwt  from "jsonwebtoken";

const generarJWT = (nombreUsuario)=>{
    return new Promise( (resolve, reject)=>{
        //agregar los datos al payload
        const payload = {nombreUsuario};
        //aqui firmamos el token
        jwt.sign(payload,process.env.SECRET_JWT,{
            expiresIn: '3h'
        },(err, token)=>{
            if(err){
                console.log(err);
                reject('No se pudo generar el token')
            }
            //si esta todo correcto
            resolve(token);
        })
    })
}

export default generarJWT