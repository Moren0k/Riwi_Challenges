const mongoose = require('mongoose');

const cliente = new mongoose.Schema({
    nombre: String,
    edad: Number,
    direccion: String,
});

mongoose.exports = mongoose.model('cliente', cliente);