import mongoose from 'mongoose';

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);

function startDB(){
    mongoose.connect('mongodb://localhost/minDB', (error) => {
        if(!error){
            console.log('Conexión con la DB establecida.');
        }
        else{
            console.log(`Error al conectar don la DB ${error}`);
        }
    });
}

export {startDB}; // Exportar la función de arrancar la DB