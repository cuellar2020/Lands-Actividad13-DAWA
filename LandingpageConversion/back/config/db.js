const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const conectarDB = async () => {

    try {

        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true, //esta aun si puede ser soportada
           // useUnifiedTopology: true, 
        
           // useFindAndModify: false
           //useNewUrlParser, useUnifiedTopology, useFindAndModify, and useCreateIndex are no longer supported options.
        })
        console.log('BD Conectada');
        
    } catch (error) {
        console.log(error);
        process.exit(1); // Detenemos la app
    }

}

module.exports = conectarDB