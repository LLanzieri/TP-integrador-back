const fs = require('fs');

const visitadas = (req,res,next) => {
    let ruta = 'visito: '+ req.url;
    fs.appendFileSync('./rutasVisitadas.txt',ruta + '\n');
    next();
}

module.exports = visitadas