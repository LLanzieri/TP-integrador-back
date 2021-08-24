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

        /* OPCIONES DE NIÑOS */
        if (opcion == 8) {
            let objetosEncontrados = await productos.find({ tipo: 'indumentaria', genero: 'niños' });
            opcionesTildadas = { "indumentariaNiño": "on" }
            return res.render('listadoProductos', { products: objetosEncontrados, rta: opcionesTildadas, usuario: objetoUsuario });
        }
        if (opcion == 9) {
            let objetosEncontrados = await productos.find({ tipo: 'calzado', genero: 'niños' });
            opcionesTildadas = { "calzadoNiño": "on" }
            return res.render('listadoProductos', { products: objetosEncontrados, rta: opcionesTildadas, usuario: objetoUsuario });

        }
        if (opcion == 10) {
            let objetosEncontrados = await productos.find({ tipo: 'accesorio', genero: 'niños' });
            opcionesTildadas = { "accesorioNiño": "on" }
            return res.render('listadoProductos', { products: objetosEncontrados, rta: opcionesTildadas, usuario: objetoUsuario });
        }
        if (opcion == 11) {
            let objetosEncontrados = await productos.find({ genero: 'niños' });
            opcionesTildadas = { "accesorioNiño": "on", "calzadoNiño": "on", "indumentariaNiño": "on" };
            return res.render('listadoProductos', { products: objetosEncontrados, rta: opcionesTildadas, usuario: objetoUsuario });
        }

        /* OPCIONES SIN GENERO */
        if (opcion == 12) {
            let objetosEncontrados = await productos.find({ tipo: 'indumentaria', genero: 'singen' });
            opcionesTildadas = { "indumentariaSingen": "on" }
            return res.render('listadoProductos', { products: objetosEncontrados, rta: opcionesTildadas, usuario: objetoUsuario });
        }
        if (opcion == 13) {
            let objetosEncontrados = await productos.find({ tipo: 'calzado', genero: 'singen' });
            opcionesTildadas = { "calzadoSingen": "on" }
            return res.render('listadoProductos', { products: objetosEncontrados, rta: opcionesTildadas, usuario: objetoUsuario });

        }
        if (opcion == 14) {
            let objetosEncontrados = await productos.find({ tipo: 'accesorio', genero: 'singen' });
            opcionesTildadas = { "accesorioSingen": "on" }
            return res.render('listadoProductos', { products: objetosEncontrados, rta: opcionesTildadas, usuario: objetoUsuario });
        }
        if (opcion == 15) {
            let objetosEncontrados = await productos.find({ genero: 'singen' });
            opcionesTildadas = { "accesorioSingen": "on", "calzadoSingen": "on", "indumentariaSingen": "on" };
            return res.render('listadoProductos', { products: objetosEncontrados, rta: opcionesTildadas, usuario: objetoUsuario });
        }
        /* OPCIONES DEPORTES */
        if (opcion == 16) {
            let objetosEncontrados = await productos.find({ categoria: 'futbol' });
            opcionesTildadas = { "futbol": "on" }
            return res.render('listadoProductos', { products: objetosEncontrados, rta: opcionesTildadas, usuario: objetoUsuario });
        }
        if (opcion == 17) {
            let objetosEncontrados = await productos.find({ categoria: 'tenis' });
            opcionesTildadas = { "tenis": "on" }
            return res.render('listadoProductos', { products: objetosEncontrados, rta: opcionesTildadas, usuario: objetoUsuario });

        }
        if (opcion == 18) {
            let objetosEncontrados = await productos.find({ categoria: 'running' });
            opcionesTildadas = { "running": "on" }
            return res.render('listadoProductos', { products: objetosEncontrados, rta: opcionesTildadas, usuario: objetoUsuario });
        }
        if (opcion == 19) {
            let objetosEncontrados = await productos.find({ categoria: 'natacion' });
            opcionesTildadas = { "natacion": "on" }
            return res.render('listadoProductos', { products: objetosEncontrados, rta: opcionesTildadas, usuario: objetoUsuario });
        }
        if (opcion == 20) {
            let objetosEncontrados = await productos.find({ categoria: 'futbol', categoria: 'tenis', categoria: 'running', categoria: 'natacion' });
            opcionesTildadas = { "futbol": "on", "tenis": "on", "running": "on", "natacion": "on" };
            return res.render('listadoProductos', { products: objetosEncontrados, rta: opcionesTildadas, usuario: objetoUsuario });
        }

        /* OPCIONES MARCAS */
        if (opcion == 21) {
            let objetosEncontrados = await productos.find({ marca: 'nike' });
            opcionesTildadas = { "nike": "on" }
            return res.render('listadoProductos', { products: objetosEncontrados, rta: opcionesTildadas, usuario: objetoUsuario });
        }
        if (opcion == 22) {
            let objetosEncontrados = await productos.find({ marca: 'adidas' });
            opcionesTildadas = { "adidas": "on" }
            return res.render('listadoProductos', { products: objetosEncontrados, rta: opcionesTildadas, usuario: objetoUsuario });

        }
        if (opcion == 23) {
            let objetosEncontrados = await productos.find({ marca: 'reebok' });
            opcionesTildadas = { "reebok": "on" }
            return res.render('listadoProductos', { products: objetosEncontrados, rta: opcionesTildadas, usuario: objetoUsuario });
        }
        if (opcion == 24) {
            let objetosEncontrados = await productos.find({ marca: 'puma' });
            opcionesTildadas = { "puma": "on" }
            return res.render('listadoProductos', { products: objetosEncontrados, rta: opcionesTildadas, usuario: objetoUsuario });
        }
        if (opcion == 25) {
            let objetosEncontrados = await productos.find({ marca: 'nike', marca: 'adidas', marca: 'reebok', marca: 'puma' });
            opcionesTildadas = { "nike": "on", "adidas": "on", "reebok": "on", "puma": "on" };
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

            for (let index = 0; index < objetosEncontrados.length; index++) {
                objAuxiliar = objetosEncontrados[index];
                objDevuelto.push(objAuxiliar);
            }
        }
        if (opcionesTildadas.calzadoMujer === 'on') {
            let objetosEncontrados = await productos.find({ tipo: 'calzado', genero: 'mujer' });

            for (let index = 0; index < objetosEncontrados.length; index++) {
                objAuxiliar = objetosEncontrados[index];
                objDevuelto.push(objAuxiliar);
            }
        }
        if (opcionesTildadas.accesorioMujer === 'on') {
            let objetosEncontrados = await productos.find({ tipo: 'accesorio', genero: 'mujer' });

            for (let index = 0; index < objetosEncontrados.length; index++) {
                objAuxiliar = objetosEncontrados[index];
                objDevuelto.push(objAuxiliar);
            }
        }
        if (opcionesTildadas.indumentariaHombre === 'on') {
            let objetosEncontrados = await productos.find({ tipo: 'indumentaria', genero: 'hombre' });

            for (let index = 0; index < objetosEncontrados.length; index++) {
                objAuxiliar = objetosEncontrados[index];
                objDevuelto.push(objAuxiliar);
            }
        }
        if (opcionesTildadas.calzadoHombre === 'on') {
            let objetosEncontrados = await productos.find({ tipo: 'calzado', genero: 'hombre' });

            for (let index = 0; index < objetosEncontrados.length; index++) {
                objAuxiliar = objetosEncontrados[index];
                objDevuelto.push(objAuxiliar);
            }
        }
        if (opcionesTildadas.accesorioHombre === 'on') {
            let objetosEncontrados = await productos.find({ tipo: 'accesorio', genero: 'hombre' });

            for (let index = 0; index < objetosEncontrados.length; index++) {
                objAuxiliar = objetosEncontrados[index];
                objDevuelto.push(objAuxiliar);
            }
        }
        if (opcionesTildadas.indumentariaNiño === 'on') {
            let objetosEncontrados = await productos.find({ tipo: 'indumentaria', genero: 'niños' });

            for (let index = 0; index < objetosEncontrados.length; index++) {
                objAuxiliar = objetosEncontrados[index];
                objDevuelto.push(objAuxiliar);
            }
        }
        if (opcionesTildadas.calzadoNiño === 'on') {
            let objetosEncontrados = await productos.find({ tipo: 'calzado', genero: 'niños' });

            for (let index = 0; index < objetosEncontrados.length; index++) {
                objAuxiliar = objetosEncontrados[index];
                objDevuelto.push(objAuxiliar);
            }
        }
        if (opcionesTildadas.accesorioNiño === 'on') {
            let objetosEncontrados = await productos.find({ tipo: 'accesorio', genero: 'niños' });

            for (let index = 0; index < objetosEncontrados.length; index++) {
                objAuxiliar = objetosEncontrados[index];
                objDevuelto.push(objAuxiliar);
            }
        }
        if (opcionesTildadas.indumentariaSingen === 'on') {
            let objetosEncontrados = await productos.find({ tipo: 'indumentaria', genero: 'singen' });

            for (let index = 0; index < objetosEncontrados.length; index++) {
                objAuxiliar = objetosEncontrados[index];
                objDevuelto.push(objAuxiliar);
            }
        }
        if (opcionesTildadas.calzadoSingen === 'on') {
            let objetosEncontrados = await productos.find({ tipo: 'calzado', genero: 'singen' });

            for (let index = 0; index < objetosEncontrados.length; index++) {
                objAuxiliar = objetosEncontrados[index];
                objDevuelto.push(objAuxiliar);
            }
        }
        if (opcionesTildadas.accesorioSingen === 'on') {
            let objetosEncontrados = await productos.find({ tipo: 'accesorio', genero: 'singen' });

            for (let index = 0; index < objetosEncontrados.length; index++) {
                objAuxiliar = objetosEncontrados[index];
                objDevuelto.push(objAuxiliar);
            }
        }
        if (opcionesTildadas.accesorioSingen === 'on') {
            let objetosEncontrados = await productos.find({ tipo: 'accesorio', genero: 'singen' });

            for (let index = 0; index < objetosEncontrados.length; index++) {
                objAuxiliar = objetosEncontrados[index];
                objDevuelto.push(objAuxiliar);
            }
        }
        if (opcionesTildadas.futbol === 'on') {
            let objetosEncontrados = await productos.find({ categoria: 'futbol' });

            for (let index = 0; index < objetosEncontrados.length; index++) {
                objAuxiliar = objetosEncontrados[index];
                objDevuelto.push(objAuxiliar);
            }
        }
        if (opcionesTildadas.tenis === 'on') {
            let objetosEncontrados = await productos.find({ categoria: 'tenis' });

            for (let index = 0; index < objetosEncontrados.length; index++) {
                objAuxiliar = objetosEncontrados[index];
                objDevuelto.push(objAuxiliar);
            }
        }
        if (opcionesTildadas.running === 'on') {
            let objetosEncontrados = await productos.find({ categoria: 'running' });

            for (let index = 0; index < objetosEncontrados.length; index++) {
                objAuxiliar = objetosEncontrados[index];
                objDevuelto.push(objAuxiliar);
            }
        }
        if (opcionesTildadas.natacion === 'on') {
            let objetosEncontrados = await productos.find({ categoria: 'natacion' });

            for (let index = 0; index < objetosEncontrados.length; index++) {
                objAuxiliar = objetosEncontrados[index];
                objDevuelto.push(objAuxiliar);
            }
        }
        if (opcionesTildadas.nike === 'on') {
            let objetosEncontrados = await productos.find({ marca: 'nike' });

            for (let index = 0; index < objetosEncontrados.length; index++) {
                objAuxiliar = objetosEncontrados[index];
                objDevuelto.push(objAuxiliar);
            }
        }
        if (opcionesTildadas.adidas === 'on') {
            let objetosEncontrados = await productos.find({ marca: 'adidas' });

            for (let index = 0; index < objetosEncontrados.length; index++) {
                objAuxiliar = objetosEncontrados[index];
                objDevuelto.push(objAuxiliar);
            }
        }
        if (opcionesTildadas.reebok === 'on') {
            let objetosEncontrados = await productos.find({ marca: 'reebok' });

            for (let index = 0; index < objetosEncontrados.length; index++) {
                objAuxiliar = objetosEncontrados[index];
                objDevuelto.push(objAuxiliar);
            }
        }
        if (opcionesTildadas.puma === 'on') {
            let objetosEncontrados = await productos.find({ marca: 'puma' });

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
        console.log(req.user);
        return res.render('publicar', { obj: req.user });
    },

    crear_producto: async (req, res) => {
        let objetoUsuario = descrifrarUsuario(req);
        let nombreImg = [];
        let nombreImagenFinal = [];
        console.log(req);
        //console.log(req.files);

        if (req.body.title === '') {
            return res.render('publicar', { msj: 'Debe ingresar un título para su producto.' });
        }
        if (req.body.description === '') {
            return res.render('publicar', { msj: 'Debe ingresar una descripción de su producto.' });
        }
        if (req.body.price === '') {
            return res.render('publicar', { msj: 'Debe ingresar un precio para su producto.' });
        }
        if (req.files.length == 0) {
            return res.render('publicar', { msj: 'Debe ingresar imágenes de su producto.' });
        }

        for (let i = 0; i < req.files.length; i++) {
            nombreImg[i] = req.files[i].filename;
            if (nombreImg[i].includes(' ')) {
                nombreImg[i] = nombreImg.split(' ');
                nombreImg[i] = nombreImg.join('_');
                console.log(nombreImg[i]);
                nombreImagenFinal[i] = '/imgs/productos/' + nombreImg[i];
            }
            else nombreImagenFinal[i] = '/imgs/productos/' + nombreImg[i];
        }

        console.log(req.body);
        await productos.create({
            "genero": req.body.genero,
            "tipo": req.body.tipo,
            "categoria": req.body.categoria,
            "marca": req.body.marca,
            "talle": req.body.talle,
            "nombre": req.body.title,
            "descrip": req.body.description,
            "precio": req.body.price,
            "imagenPerfil": nombreImagenFinal[0],
            "imagen_1": nombreImagenFinal[1],
            "imagen_2": nombreImagenFinal[2],
            "imagen_3": nombreImagenFinal[3],
            "propietario": objetoUsuario.data.email

        });

        misProductos = await productos.find({ propietario: objetoUsuario.data.email });
        return res.render('misProductos', { products: misProductos, usuario: objetoUsuario, msj: "¡ Producto creado exitosamente !", imagen: '/imgs/create.png' });
    },

    editarProducto: async (req, res) => {
        productoElegido = await productos.find({ _id: req.params.id });
        console.log(productoElegido);
        return res.render('editar', { producto: productoElegido });
    },

    editarYguardar: async (req, res) => {
        let objetoUsuario = descrifrarUsuario(req);
        let obj;
        let nombreImg = [];
        let nombreImagenFinal = [];
        productoElegido = await productos.find({ _id: req.params.id });

        // SI HAY ALGUN CAMPO INCOMPLETO, CORTO

        if (req.body.title === '') {
            return res.render('editar', { producto: productoElegido, msj: 'Debe ingresar un título para su producto.' });
        }
        if (req.body.description === '') {
            return res.render('editar', { producto: productoElegido, msj: 'Debe ingresar una descripción de su producto.' });
        }
        if (req.body.price === '') {
            return res.render('editar', { producto: productoElegido, msj: 'Debe ingresar un precio para su producto.' });
        }
        if (req.files.length == 0) {
            return res.render('editar', { producto: productoElegido, msj: 'Debe ingresar imágenes de su producto.' });
        }

        // SINO, EDITO 

        for (let i = 0; i < req.files.length; i++) {
            nombreImg[i] = req.files[i].filename;
            if (nombreImg[i].includes(' ')) {
                nombreImg[i] = nombreImg.split(' ');
                nombreImg[i] = nombreImg.join('_');
                console.log(nombreImg[i]);
                nombreImagenFinal[i] = '/imgs/productos/' + nombreImg[i];
            }
            else nombreImagenFinal[i] = '/imgs/productos/' + nombreImg[i];
        }

        //ME TRAIGO EL OBJETO QUE QUIERO EDITAR
        obj = await productos.findById(req.params.id);
        //LO EDITO
        obj = {
            "genero": req.body.genero,
            "tipo": req.body.tipo,
            "categoria": req.body.categoria,
            "marca": req.body.marca,
            "talle": req.body.talle,
            "nombre": req.body.title,
            "descrip": req.body.description,
            "precio": req.body.price,
            "imagenPerfil": nombreImagenFinal[0],
            "imagen_1": nombreImagenFinal[1],
            "imagen_2": nombreImagenFinal[2],
            "imagen_3": nombreImagenFinal[3],
            "propietario": objetoUsuario.data.email
        }

        // findByIdAndUpdate recibe (EL ID DEL OBJETO PARA QUE LO UBIQUE, EL OBJETO CON EL QUE QUIERO EDITAR)
        await productos.findByIdAndUpdate(req.params.id, obj);

        misProductos = await productos.find({ propietario: objetoUsuario.data.email });
        return res.render('misProductos', { products: misProductos, usuario: objetoUsuario, msj: "¡ Producto editado exitosamente !", imagen: '/imgs/edit.png' });
    },

    mostrar_detalle: async (req, res) => {

        let objetoUsuario = descrifrarUsuario(req);
        console.log('estoy en detalle');
        let producto = await productos.findById(req.params.id);
        console.log(producto);
        return res.render('detalle', { producto, usuario: objetoUsuario });

    },

    mostrar_misProductosView: async (req, res) => {
        let objetoUsuario = descrifrarUsuario(req);
        let misProductos;
        console.log("ESTOY EN MIS PRODUCTOS");

        misProductos = await productos.find({ propietario: objetoUsuario.data.email });

        return res.render('misProductos', { products: misProductos, usuario: objetoUsuario });
    },

    eliminarProducto: async (req, res) => {
        let objetoUsuario = descrifrarUsuario(req);
        let misProductos;

        // elimino el producto
        await productos.findByIdAndRemove({ _id: req.params.id });
        // busco los productos restantes
        misProductos = await productos.find({ propietario: objetoUsuario.data.email });
        return res.render('misProductos', { products: misProductos, usuario: objetoUsuario, msj: "¡ Producto eliminado exitosamente !", imagen: '/imgs/delete.png' });
    },

    buscarOfertas: async (req, res) => {
        let objetoUsuario = descrifrarUsuario(req);
        console.log("ENTRE A OFERTAS");
        // me traigo los productos de precio menor a 5000
        let objetosEncontrados = await productos.find({ precio: { $lt: 5000 } });
        console.log(objetosEncontrados);

        return res.render('listadoProductos', { products: objetosEncontrados, usuario: objetoUsuario });
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
