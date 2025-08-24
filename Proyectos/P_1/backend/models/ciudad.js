const mongoose = require('mongoose');

const cuidadSchema = new mongoose.Schema({
    nombre : {type: String, required: true}
});

module.exports = mongoose.model('cuidad', cuidadSchema);