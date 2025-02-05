import express from 'express';
import usuarioRouter from './routes/usuario.router';
import recursoRouter from './routes/recurso.router';
import proyectoRouter from './routes/proyecto.router';
import clienteRouter from './routes/cliente.router';
import actividadRouter from './routes/actividad.router';
import cors from 'cors';


const app = express();
const PORT= 3000;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use('/api/usuario',usuarioRouter);
app.use('/api/recurso',recursoRouter);
app.use('/api/proyecto',proyectoRouter);
app.use('/api/cliente',clienteRouter);
app.use('/api/actividad',actividadRouter);




app.listen(PORT, ()=> {
    console.log(`Api escuchando puerto ${PORT}`)
    
})