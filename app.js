let numeroSecreto = 0;
let numeroIntentos = 0;
let numeroMaximo = 10;
let listaNumerosSorteados = [];


function asignarElementoTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

asignarElementoTexto('h1', 'Juego del Número Secreto');
asignarElementoTexto('p', `Introduce un número del 1 al ${numeroMaximo}`);

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroUsuario === numeroSecreto) {
        asignarElementoTexto('p', `Acertaste en ${numeroIntentos} ${(numeroIntentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroSecreto > numeroUsuario) {
        asignarElementoTexto('p', 'El número secreto es mayor');
    } else {
        asignarElementoTexto('p', 'El número secreto es menor');

    }
    numeroIntentos++;
    limpiarCaja();

    }
    return;
    
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarElementoTexto('p', 'Ya se sortearon todos los números posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}


function condicionesIniciales() {
    asignarElementoTexto('h1', 'Juego del Número Secreto');
    asignarElementoTexto('p', `Introduce un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();