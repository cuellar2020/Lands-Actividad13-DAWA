const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");
const path = require('path')
// Creamos el servidor
const app = express();

// Conectamos a la BD
conectarDB();
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api/leads', require('./routes/lead'));

app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})