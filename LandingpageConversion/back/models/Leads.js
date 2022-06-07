const mongoose = require('mongoose');

const LeadSchema = mongoose.Schema({
    dni: {
        type: String,
        required: true
    },
    
    telefono: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('LandPageConversion', LeadSchema);