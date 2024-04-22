import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import 'dotenv/config';
import './src/database/db.connection';
import comidasRouter from './src/routes/comidas.routes';
import usuariosRouter from './src/routes/usuarios.routes';
import pedidosRouter from "./src/routes/pedidos.routes"
//Configuro el puerto

const app = express();
app.set('port', process.env.PORT || 4004);
app.listen(app.get('port'),()=>{
    console.log('estoy en el puerto' +app.get('port')+"Estoy en la BD "+(app.get('name')))
})

// middlewares
app.use(cors());
app.use(express.json()); 
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'/public')))

//rutas
//http://localhost:4004/blogRecetas
//http://localhost:4004/apiRecetas/recetas
//http://localhost:4004/apiRecetas/auth/users
app.use('/apiComidas',comidasRouter);
app.use("/apiPedidos",pedidosRouter);
app.use('/apiUsuarios',usuariosRouter);
