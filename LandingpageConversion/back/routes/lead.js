// Rutas para lead
const express = require('express');
const router = express.Router();
const leadController = require('../controllers/leadController');

// api/Leads
router.post('/', leadController.crearLead);
router.get('/', leadController.obtenerLeads);
router.put('/:id', leadController.actualizarLead);
router.get('/:id', leadController.obtenerLead);
router.delete('/:id', leadController.eliminarLead);

module.exports = router;