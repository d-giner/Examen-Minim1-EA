import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path'; // Módulo para especificar la ruta de directorios
import indexRoutes from './routes/routes';
import {startDB} from './database';

// Inicializaciones
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares (módulos útiles)
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/university', indexRoutes);


// Ficheros estáticos (CSS's, JS, imágenes etc)
app.use(express.static(path.join(__dirname, 'public')));


// Arrancar el servidor
app.listen(app.get('port'), () => {
    console.log(`Escuchando por el puerto ${app.get('port')}`);
});

// Arrancar DB
startDB();