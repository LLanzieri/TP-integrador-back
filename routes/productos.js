const express = require('express');
const router = express.Router();
const verificarToken = require('../middlewares/mw_verificarToken');

// IMPORTO CONTROLADORES
const controller_productos = require('../controllers/controller_productos');

//localhost/productos/mis_productos
router.get('/misproductos', controller_productos.mostrar_misProductosView);

//localhost/productos/publicar
router.get('/publicar', verificarToken, controller_productos.mostrarVistaPublicar);
router.post('/publicar', controller_productos.crear_producto);

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

//localhost/productos/eliminarProducto/:id
router.get('/eliminarProducto/:id', controller_productos.eliminarProducto);

module.exports = router;