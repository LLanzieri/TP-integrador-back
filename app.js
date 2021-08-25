const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

app.use(cookieParser());

//conexion a la base de datos
let miBasedeDatos = 'mongodb://localhost/backendTPintegrador';
mongoose.connect(miBasedeDatos,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
);


//settings
app.set('port', process.env.PORT || 5000)

//inicio sv
app.listen(app.get('port'), () =>
    console.log("Servidor iniciado correctamente")
);

// MIDDLEWARES PARA EL TRATAMIENTO DE DATOS ENVIADOS POR EL FORM
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// set the view engine to ejs
app.set('view engine', 'ejs');

// INDICO DONDE IR A BUSCAR RECURSOS DE LA CARPETA PUBLICA
app.use(express.static(__dirname + '/public'));

//MW DE RUTAS VISITADAS
const mw_rutas_visitadas = require('./middlewares/rutas_visitadas');
app.use(mw_rutas_visitadas);


/* ------------------------- RUTAS ---------------------------------*/

//Ruta principal
app.get('/', (req, res) => {
    let objetoUsuario;
    console.log("ESTOY EN APP");
    console.log(req.cookies.token);
    if (req.cookies.token) {
        const user = jwt.verify(req.cookies.token, 'mipalabrasecreta');
        objetoUsuario = user;
    }
    return res.render('principal', { usuario: objetoUsuario });
});

/* ------------------------- RUTAS DINAMICAS ---------------------------------*/

/* --------------------------------- USUARIO --------------------------------------------- */

const rutasUsuario = require('./routes/usuarios');

// ACTIVO MIS RUTAS DINAMICAS PARA USAR - (cuando haga /usuarios que utilice las rutas de rutasUsuario)
app.use('/usuarios', rutasUsuario);

/* ------------------------------------- MAIL ----------------------------------------- */

const rutasMail = require('./routes/mail');

// ACTIVO MIS RUTAS DINAMICAS PARA USAR - (cuando haga /mail que utilice las rutas de rutasMail)
app.use('/mail', rutasMail);

/* --------------------------------- CONTACTO --------------------------------------------- */

const rutasContacto = require('./routes/contacto');

// ACTIVO MIS RUTAS DINAMICAS PARA USAR - (cuando haga /usuarios que utilice las rutas de rutasContacto)
app.use('/contacto', rutasContacto);

/* --------------------------------- PRODUCTOS --------------------------------------------- */

const rutasProductos = require('./routes/productos');

// ACTIVO MIS RUTAS DINAMICAS PARA USAR - (cuando haga /productos que utilice las rutas de rutasProductos)
app.use('/productos', rutasProductos);

/* ------------- MIDDLEWARES ----------------------- */

//Ruta error en caso de no existir donde quiere ir el cliente
const mw_error404 = require('./middlewares/mw_error404');
app.use(mw_error404);