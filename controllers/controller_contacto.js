const mensajeContacto = require('../models/mensajes');

let controller = {
    mostrar_contactoVista: (req, res) => {
        return res.render('contacto');
    },
    guardarMensaje: (req, res) => {
        mensajeContacto.create({
            "nya": req.body.nya,
            "email": req.body.email,
            "mensaje": req.body.subject
        });

        return res.render('respuesta', { source: '/imgs/messageSent.png', alt: 'Mensaje enviado', msj: '¡ Hemos recibido su mensaje correctamente, le estaremos brindando una respuesta a la brevedad !' });

    },

    faqs: (req, res) => {
        return res.render('ayuda');
    }
}

module.exports = controller;