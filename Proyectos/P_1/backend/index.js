// Importaciones base
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Inicializar app
const app = express();
app.use(cors());
app.use(express.json());

//Conectar a MongoDB Atlas
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Conectado correctamente a MongoDB"))
    .then(err => console.error("Error de conexión", err));

// Modelo (Cuidad Favorita)
const ciudad = require('./models/ciudad');

// Rutas Backend
app.get('/favorites', async (req, res) => {
    const cuidades = await ciudad.find();
    res.json(cuidades);
});

app.post('/favorites', async (req, res) => {
    const {nombre} = req.body;
    if(!nombre) return res.status(400).json({error: "Nombre de ciudad requerido"});

    // Evitar duplicados
    const existe = await ciudad.findOne({nombre});
    if (existe) return res.status(400).json({error: "Ya existe en favoritos"});

    const nueva = new cuidad({nombre});
    await nueva.save();
    res.json(nueva);
});

app.delete('/favorites/:id', async (req, res) => {
    await cuidad.findByIdAndDelete(req.params.id);
    res.json({mensaje: "Eliminada de favoritos"});
});

// Levantar servidor
const PORT = process.env.port || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));