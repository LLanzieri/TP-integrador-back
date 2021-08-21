const productos = require('../models/productos');
const jwt = require('jsonwebtoken');

let controller = {
    mostrar_productosView: async (req, res) => {
        let objetoUsuario = descrifrarUsuario(req);
        let todosLosProductos = await productos.find({});

        return res.render('listadoProductos', { products: todosLosProductos, usuario: objetoUsuario });
    },

    mostrar_productosParticular: async (req, res) => {
        let objetoUsuario = descrifrarUsuario(req);
        let opcion = req.params.id;
        console.log(opcion);
        let opcionesTildadas;

        /* OPCIONES DE MUJER */
        if (opcion == 0) {
            let objetosEncontrados = await productos.find({ tipo: 'indumentaria', genero: 'mujer' });
            opcionesTildadas = { "indumentariaMujer": "on" }
            return res.render('listadoProductos', { products: objetosEncontrados, rta: opcionesTildadas, usuario: objetoUsuario });
        }
        if (opcion == 1) {
            let objetosEncontrados = await productos.find({ tipo: 'calzado', genero: 'mujer' });
            opcionesTildadas = { "calzadoMujer": "on" }
            return res.render('listadoProductos', { products: objetosEncontrados, rta: opcionesTildadas, usuario: objetoUsuario });

        }
        if (opcion == 2) {
            let objetosEncontrados = await productos.find({ tipo: 'accesorio', genero: 'mujer' });
            opcionesTildadas = { "accesorioMujer": "on" }
            return res.render('listadoProductos', { products: objetosEncontrados, rta: opcionesTildadas, usuario: objetoUsuario });
        }
        if (opcion == 3) {
            let objetosEncontrados = await productos.find({ genero: 'mujer' });
            opcionesTildadas = { "accesorioMujer": "on", "calzadoMujer": "on", "indumentariaMujer": "on" };
            return res.render('listadoProductos', { products: objetosEncontrados, rta: opcionesTildadas, usuario: objetoUsuario });
        }

        /* OPCIONES DE HOMBRE */
        if (opcion == 4) {
            let objetosEncontrados = await productos.find({ tipo: 'indumentaria', genero: 'hombre' });
            opcionesTildadas = { "indumentariaHombre": "on" }
            return res.render('listadoProductos', { products: objetosEncontrados, rta: opcionesTildadas, usuario: objetoUsuario });
        }
        if (opcion == 5) {
            let objetosEncontrados = await productos.find({ tipo: 'calzado', genero: 'hombre' });
            opcionesTildadas = { "calzadoHombre": "on" }
            return res.render('listadoProductos', { products: objetosEncontrados, rta: opcionesTildadas, usuario: objetoUsuario });

        }
        if (opcion == 6) {
            let objetosEncontrados = await productos.find({ tipo: 'accesorio', genero: 'hombre' });
            opcionesTildadas = { "accesorioHombre": "on" }
            return res.render('listadoProductos', { products: objetosEncontrados, rta: opcionesTildadas, usuario: objetoUsuario });
        }
        if (opcion == 7) {
            let objetosEncontrados = await productos.find({ genero: 'hombre' });
            opcionesTildadas = { "accesorioHombre": "on", "calzadoHombre": "on", "indumentariaHombre": "on" };
            return res.render('listadoProductos', { products: objetosEncontrados, rta: opcionesTildadas, usuario: objetoUsuario });
        }

    },

    buscarProductos: async (req, res) => {
        let objetoUsuario = descrifrarUsuario(req);
        let opcionesTildadas = req.body;
        console.log(opcionesTildadas);
        let objAuxiliar;
        let objDevuelto = [];

        if (opcionesTildadas.indumentariaMujer === 'on') {
            let objetosEncontrados = await productos.find({ tipo: 'indumentaria', genero: 'mujer' });
            //console.log(objetosEncontrados);
            for (let index = 0; index < objetosEncontrados.length; index++) {
                objAuxiliar = objetosEncontrados[index];
                objDevuelto.push(objAuxiliar);
            }
        }
        if (opcionesTildadas.calzadoMujer === 'on') {
            let objetosEncontrados = await productos.find({ tipo: 'calzado', genero: 'mujer' });
            //console.log(objetosEncontrados);
            for (let index = 0; index < objetosEncontrados.length; index++) {
                objAuxiliar = objetosEncontrados[index];
                objDevuelto.push(objAuxiliar);
            }
        }
        if (opcionesTildadas.accesorioMujer === 'on') {
            let objetosEncontrados = await productos.find({ tipo: 'accesorio', genero: 'mujer' });
            //console.log(objetosEncontrados);
            for (let index = 0; index < objetosEncontrados.length; index++) {
                objAuxiliar = objetosEncontrados[index];
                objDevuelto.push(objAuxiliar);
            }
        }
        if (opcionesTildadas.indumentariaHombre === 'on') {
            let objetosEncontrados = await productos.find({ tipo: 'indumentaria', genero: 'hombre' });
            //console.log(objetosEncontrados);
            for (let index = 0; index < objetosEncontrados.length; index++) {
                objAuxiliar = objetosEncontrados[index];
                objDevuelto.push(objAuxiliar);
            }
        }
        if (opcionesTildadas.calzadoHombre === 'on') {
            let objetosEncontrados = await productos.find({ tipo: 'calzado', genero: 'hombre' });
            //console.log(objetosEncontrados);
            for (let index = 0; index < objetosEncontrados.length; index++) {
                objAuxiliar = objetosEncontrados[index];
                objDevuelto.push(objAuxiliar);
            }
        }
        if (opcionesTildadas.accesorioHombre === 'on') {
            let objetosEncontrados = await productos.find({ tipo: 'accesorio', genero: 'hombre' });
            //console.log(objetosEncontrados);
            for (let index = 0; index < objetosEncontrados.length; index++) {
                objAuxiliar = objetosEncontrados[index];
                objDevuelto.push(objAuxiliar);
            }
        }

        console.log(objDevuelto);
        return res.render('listadoProductos', { products: objDevuelto, rta: opcionesTildadas, usuario: objetoUsuario });

    },

    buscarAccesorios: async (req, res) => {
        let objetoUsuario = descrifrarUsuario(req);
        let objetosEncontrados = await productos.find({ tipo: 'accesorio' });
        opcionesTildadas = { "accesorioMujer": "on", "accesorioHombre": "on" };
        return res.render('listadoProductos', { products: objetosEncontrados, rta: opcionesTildadas, usuario: objetoUsuario });
    },
    mostrarVistaPublicar: (req, res) => {
        console.log("ESTOY EN PUBLICARVISTA");
        console.log(req.user);
        return res.render('publicar', { obj: req.user });
    },
    crear_producto: (req, res) => {
        console.log("estoy en la ruta post de crear producto");
        return res.send("ANDA EL POST");
    },
    mostrar_misProductosView: async (req, res) => {
        let objetoUsuario = descrifrarUsuario(req);
        let misProductos;
        console.log("ESTOY EN MIS PRODUCTOS");

        misProductos = await productos.find({ propietario: objetoUsuario.data.email });

        return res.render('misProductos', { products: misProductos, usuario: objetoUsuario });
    },

    eliminarProducto: async (req, res) => {
        await productos.findByIdAndRemove({ _id: req.params.id });
    }
}

function descrifrarUsuario(req) {
    let objetoUsuario;
    let user;
    if (req.cookies.token) {
        user = jwt.verify(req.cookies.token, 'mipalabrasecreta');
        objetoUsuario = user;
    }
    return objetoUsuario;
}

module.exports = controller;
