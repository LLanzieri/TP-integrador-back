let cupon = document.querySelector('.cupon');
let textoCupon = ['¡ELEGÍ, HACE CLICK Y RECIBILO EN TU HOGAR!', '¡ENVÍO GRATIS PARA COMPRAS MAYORES A $6000!', '¡APROVECHÁ HASTA 6 CUOTAS SIN INTERÉS!', '¡REALIZAMOS ENVÍOS A TODO EL PAÍS!', '¡ACEPTAMOS TODOS LOS MEDIOS DE PAGO!', '¡PUBLICÁ GRATIS EN NUESTRA PÁGINA!'];
let indice = 0;
let btnHamburg = document.getElementById('hambIcon');
let btnLupa = document.querySelector('.busqueda');
let barraBusquedaMobile = document.querySelector('.barraBusquedaMobile');
let menuDesple = document.getElementById('menuDesple');
let btnCat = document.getElementById('btnCategorias');
let submenues = document.querySelectorAll('.subMenu');
let submenues_secundarios = document.querySelectorAll('.subMenuSecundario');
let btnMujer = document.getElementById('btnMujer');
let btnHombre = document.getElementById('btnHombre');
let btnninios = document.getElementById('btnNinios');
let btnSinGenero = document.getElementById('btnSinGenero');
let btnDeporte = document.getElementById('btnDeporte')
let btnMarcas = document.getElementById('btnMarcas');
let opcionSubmenuSecundario = document.querySelectorAll('.opcion');

//Evento que se fija si algun desplegable está visible y hay algun click en otro lado, lo oculta
document.addEventListener('click', ocultar_desplegables);

// funcion para cambiar los textos del cupón
setInterval(() => {

    cupon.innerHTML = '<p>' + textoCupon[indice] + '</p>';
    indice++;

    if (indice === 6)
        indice = 0;

}, 2000)

console.log(submenues);
console.log(btnHamburg);
console.log(menuDesple);
console.log(btnCat);
console.log(submenues_secundarios);
console.log(barraBusquedaMobile);

btnHamburg.onclick = function (event) {
    event.preventDefault();
    menuDesple.classList.toggle('show');
}

btnLupa.onclick = function (event) {
    event.preventDefault();
    mostrarElementoIndividual(barraBusquedaMobile);
}

btnCat.onclick = function (event) {
    event.preventDefault();
    mostrarElementoEnArray(submenues, 0);
    ocultarElemento(submenues, 1);
    ocultarElemento(submenues, 2);
    ocultarElemento(submenues_secundarios, 0);
    ocultarElemento(submenues_secundarios, 1);
    ocultarElemento(submenues_secundarios, 2);
    ocultarElemento(submenues_secundarios, 3);
}

btnMujer.onclick = function (event) {
    event.preventDefault();
    mostrarElementoEnArray(submenues_secundarios, 0);
    ocultarElemento(submenues_secundarios, 1);
    ocultarElemento(submenues_secundarios, 2);
    ocultarElemento(submenues_secundarios, 3);
}

btnHombre.onclick = function (event) {
    event.preventDefault();
    mostrarElementoEnArray(submenues_secundarios, 1);
    ocultarElemento(submenues_secundarios, 0);
    ocultarElemento(submenues_secundarios, 2);
    ocultarElemento(submenues_secundarios, 3);
}

btnninios.onclick = function (event) {
    event.preventDefault();
    mostrarElementoEnArray(submenues_secundarios, 2);
    ocultarElemento(submenues_secundarios, 0);
    ocultarElemento(submenues_secundarios, 1);
    ocultarElemento(submenues_secundarios, 3);
}

btnSinGenero.onclick = function (event) {
    event.preventDefault();
    mostrarElementoEnArray(submenues_secundarios, 3);
    ocultarElemento(submenues_secundarios, 0);
    ocultarElemento(submenues_secundarios, 1);
    ocultarElemento(submenues_secundarios, 2);
}

btnDeporte.onclick = function (event) {
    event.preventDefault();
    mostrarElementoEnArray(submenues, 1);
    ocultarElemento(submenues, 0);
    ocultarElemento(submenues, 2);
}

btnMarcas.onclick = function (event) {
    event.preventDefault();
    mostrarElementoEnArray(submenues, 2);
    ocultarElemento(submenues, 0);
    ocultarElemento(submenues, 1);
}

function mostrarElementoIndividual(elemento) {
    elemento.classList.toggle('show');
}


function mostrarElementoEnArray(array, pos) {
    array[pos].classList.toggle('show');
}

function ocultarElemento(array, pos) {
    if (array[pos].classList.contains('show'))
        array[pos].classList.toggle('show');
}

function ocultar_desplegables(e) {
    let x = 0;
    if (submenues[2].classList.contains('show') && e.target != btnMarcas) {
        submenues[2].classList.toggle('show');
    }
    if (submenues[1].classList.contains('show') && e.target != btnDeporte) {
        submenues[1].classList.toggle('show');
    }
    if (submenues[0].classList.contains('show') && e.target != btnCat) {
        if (e.target != btnMujer && e.target != btnHombre && e.target != btnninios && e.target != btnSinGenero) {
            for (let index = 0; index < opcionSubmenuSecundario.length; index++) {
                if (e.target == opcionSubmenuSecundario[index])
                    x = 1;
            }
            if (x == 0)
                submenues[0].classList.toggle('show');
        }

    }
}



