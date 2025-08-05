const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

//Conexón
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Conectado a mongo'))
.catch(err => console.error('Error en la conexion', err))

//Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Servidor esta corriendo en el puerto: 3000', PORT);
});