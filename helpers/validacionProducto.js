import { check } from "express-validator";
import resultadovalidacion from "./resultadoValidacion";

const validarProducto = [
    check("nombre")
    .notEmpty()
    .withMessage('El nombre es obligatorio')
    .isLength({min:2,max:100})
    .withMessage('El nombe debe contener entre 2 y 100 caracteres'),
    check("precio")
    .notEmpty()
    .withMessage('Debe completar el campo del precio')
    .isNumeric()
    .withMessage("El precio debe ser un numero")
    .custom((precioValue)=>{
        if(precioValue>1&&precioValue<999999){
        return true;
        }else{
            throw new Error("El precio debe ser mayor a 1 y menor a 999999");        
        }    
    }),
    check("imagen")
    .notEmpty()
    .withMessage("El url de imagen es obligatorio")
    .matches(/^(https?:\/\/)?(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}(?:\/[^/?#]+)+\.(?:png|jpg|jpeg)$/)
    .withMessage('La URL de imagen debe ser valida'),
    check('categoria')
    .notEmpty()
    .withMessage('La categoria es obligatoria')
    .isIn(['Bebida caliente','Bebida fria','Simples','Frio','Calientes','Pastas','Sandwich','Postre','Minutas'])
    .withMessage('La categoria no es valida')
    ,(req,res,next)=>{resultadovalidacion(req,res,next)}
]
export default validarProducto