const Lead = require("../models/Leads");


exports.crearLead = async (req, res) => {

    try {
        let lead;

        // Creamos nuestro producto
        lead = new Lead(req.body);

        await lead.save();
        res.send(lead);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerLeads = async (req, res) => {

    try {

        const leads = await Lead.find();
        res.json(leads)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarLead = async (req, res) => {

    try {
        const { nombre, email, telefono, direccion } = req.body;
        let lead = await Lead.findById(req.params.id);

        if(!lead) {
            res.status(404).json({ msg: 'No existe el producto' })
        }

        lead.nombre = nombre;
        lead.email = email;
        lead.telefono = telefono;
        lead.direccion = direccion;

        lead = await Lead.findOneAndUpdate({ _id: req.params.id },lead, { new: true} )
        res.json((lead));
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerLead = async (req, res) => {

    try {
        let lead= await Lead.findById(req.params.id);

        if(!lead) {
            res.status(404).json({ msg: 'No existe el producto' })
        }
       
        res.json(lead);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarLead = async (req, res) => {

    try {
        let lead = await Lead.findById(req.params.id);

        if(!lead) {
            res.status(404).json({ msg: 'No existe el registro' })
        }
       
        await Producto.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Registro  eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
} 