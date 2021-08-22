const express = require('express');
const router = express.Router();
const verificarToken = require('../middlewares/mw_verificarToken');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/imgs/productos');
    },
    filename: (req, file, cb) => {
        console.log(file);
        let nombreImg = file.originalname;
        //reemplazo espacios en blanco en caso de que la imagen los tenga en el nombre
        if (nombreImg.includes(' ')) {
            nombreImg = nombreImg.split(' ');
            nombreImg = nombreImg.join('_');
        }
        cb(null, file.fieldname + '-' + nombreImg);
    }
});

const upload = multer({ storage: storage });


// IMPORTO CONTROLADORES
const controller_productos = require('../controllers/controller_productos');

//localhost/productos/mis_productos
router.get('/misproductos', controller_productos.mostrar_misProductosView);

//localhost/productos/publicar
router.get('/publicar', verificarToken, controller_productos.mostrarVistaPublicar);
router.post('/publicar', upload.any('myFile', 'myFile1', 'myFile2', 'myFile3'), controller_productos.crear_producto);

//localhost/productos
router.get('/', controller_productos.mostrar_productosView);

//localhost/productos/:id

/*  EL id IDENTIFICA LA OPCION POR LA CUAL FILTRAR, se manda segun el orden que aparecen en el menu desplegable:
 0 - INDUMENTARIA + MUJER
 1 - CALZADO + MUJER
 2- ACCESORIO + MUJER
 etc
 ....       */

router.get('/:id', controller_productos.mostrar_productosParticular);

//localhost/productos/buscar
router.post('/buscar', controller_productos.buscarProductos);

//localhost/productos/todos/accesorios
router.get('/todos/accesorios', controller_productos.buscarAccesorios);

//localhost/productos/todos/ofertas
router.get('/todos/ofertas', controller_productos.buscarOfertas);

//localhost/productos/eliminarProducto/:id
router.get('/eliminarProducto/:id', controller_productos.eliminarProducto);

//localhost/productos/editarProducto/:id
router.get('/editarProducto/:id', controller_productos.editarProducto);
router.post('/editarProducto/:id', upload.any('myFile', 'myFile1', 'myFile2', 'myFile3'), controller_productos.editarYguardar);

module.exports = router;