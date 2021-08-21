const usuarios = require('../models/usuarios');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

let controller = {
    mostrar_crearCuentaView: (req, res) => {
        return res.render('crearCuentaView');
    },
    guardarNuevoUsuario: async (req, res) => {
        let nombreImg;
        let nombreImagenFinal;
        let passSinHash = req.body.pwd;

        if (req.body.nombre != '' && req.body.apellido != '' && req.body.email != '' && req.file) {
            nombreImg = req.file.filename;

            //busco el email del nuevo usuario para ver si ya existe en la base de datos
            let usuario = await usuarios.find({ email: req.body.email });

            //si devuelve algo, el mail ya existe en la base de datos y sería un duplicado
            if (usuario.length > 0)
                return res.render('crearCuentaView', { msj: 'El mail ingresado ya se encuentra registrado.' })
            else {
                // sino, guardo en la base de datos

                //reemplazo espacios si la foto tiene algun espacio en blanco en el nombre
                if (nombreImg.includes(' ')) {
                    nombreImg = nombreImg.split(' ');
                    nombreImg = nombreImg.join('_');
                    console.log(nombreImg);
                }

                nombreImagenFinal = '/imgs/avatars/' + nombreImg;

                //hasheo la contraseña, la nueva contraseña se guarda en "hash"
                bcrypt.hash(req.body.pwd, saltRounds, function (err, hashedPassword) {
                    if (err)
                        next(err);

                    usuarios.create({
                        "nombre": req.body.nombre,
                        "apellido": req.body.apellido,
                        "email": req.body.email,
                        "password": hashedPassword,
                        "avatar": nombreImagenFinal,
                    });
                });

                return res.render('respuesta', { source: '/imgs/verde.png', alt: 'Check verde usuario registrado exitosamente', msj: '¡ Su usuario ha sido registrado exitosamente ! Por favor proceda a loguearse en la página.' });
            }

        }

        return res.render('crearCuentaView', { msj: 'Algún campo se encuentra vacío' });

    },
    mostrar_iniciarSesionView: (req, res) => {
        return res.render('iniciarSesionView');
    },
    login: async (req, res) => {
        //const data = req.body.email;
        //busco el email de la persona que se quiere loguear
        let usuario = await usuarios.find({ email: req.body.email });
        let miUsuario = usuario[0];
        let data = miUsuario;

        //si no existe, el array no tiene nada
        if (usuario.length == 0) {
            return res.render('iniciarSesionView', { msj: 'Nombre de usuario ingresado inexistente.' });
        }
        //si existe, comparo contraseñas
        bcrypt.compare(req.body.pwd, miUsuario.password, (err, coinciden) => {
            if (err) {
                console.log("Error comprobando:", err);
                return;
            }
            // si las contraseñas coinciden, creo el token para ese usuario y lo envio en una cookie
            if (coinciden) {
                console.log("La contraseña coincide");
                const token = jwt.sign({ data }, 'mipalabrasecreta');
                console.log(token);
                res.cookie("token", token, {
                    httpOnly: true,
                });
                res.redirect('/');
            }
            else
                return res.render('iniciarSesionView', { msj: 'La contraseña ingresada es incorrecta.' });

        });

    },
    mostrar_recuperarPassView: (req, res) => {
        return res.render('recuperarPassView');
    },
    cerrarSesion: (req, res) => {
        res.clearCookie("token");
        res.redirect("/");
    }

}

module.exports = controller;