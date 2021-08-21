const jwt = require('jsonwebtoken');

function verificarToken(req, res, next) {
    console.log("ESTOY EN VERIFICAR TOKEN");
    const accessToken = req.cookies.token;
    console.log(accessToken);

    try {
        console.log("ENTRE AL TRY");
        const user = jwt.verify(accessToken, 'mipalabrasecreta');
        console.log(user);
        req.user = user;
        next();
    } catch (err) {
        res.clearCookie("token");
        return res.render('iniciarSesionView', { msj: 'Debe estar logueado para poder ingresar a esta sección. Por favor introduzca su usuario y contraseña.' });
    }

}

module.exports = verificarToken;