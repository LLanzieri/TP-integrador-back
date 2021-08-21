const nodemailer = require("nodemailer");
const usuarios = require('../models/usuarios');
let userAmodificar;

let controller = {

    envioMail: async (req, res) => {
        if (!req.body.email) {
            return console.log("NO HAY MAIL PARA SUSCRIBIRSE");
        }
        //modifico el campo de suscripcion de la cuenta y mando a actualizar en la base de datos
        userAmodificar = await usuarios.find({ email: req.body.email });
        userAmodificar[0].suscripcion = true;
        console.log(userAmodificar);
        await usuarios.findByIdAndUpdate(userAmodificar[0]._id, userAmodificar[0]);

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'jeremie.buckridge60@ethereal.email', // generated ethereal user
                pass: 'hH8Hepnket2GDVNWtA', // generated ethereal password
            },
        });

        // send mail with defined transport object
        return transporter.sendMail({
            from: '"A ver si anda el mail 👻" <mail_backend@example.com>', // sender address
            to: req.body.email, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        }, (err, information) => {
            if (err)
                res.status(200).send({ success: false, error: err });

            return res.status(200).send({ success: true, message: 'Email enviado' });

        });
    }
}

module.exports = controller;