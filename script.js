var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munieco = document.querySelector(".contenedormunieco");
var contenedor = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");
var contenedorResultado = document.querySelector(".contenedor-resultado");
var mensajeInicial = document.querySelectorAll(".mensaje-inicial"); // Selecciona todos los mensajes iniciales

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
document.querySelector(".btn-copiar").addEventListener("click", copiar);

function encriptar() {
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajatexto);
    ocultarMensajeInicial();
}

function desencriptar() {
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajatexto);
    ocultarMensajeInicial();
}

function recuperarTexto() {
    var cajatexto = document.querySelector(".cajatexto");
    return cajatexto.value;
}

function ocultarAdelante() {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
    contenedorResultado.classList.add("show"); // Muestra el contenedor de resultados
}

function mostrarMensajeInicial() {
    mensajeInicial.forEach(element => element.classList.remove("hide"));
    contenedorResultado.classList.remove("show");
}

function ocultarMensajeInicial() {
    mensajeInicial.forEach(element => element.classList.add("hide"));
    contenedorResultado.classList.add("show");
}

function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] === "a") {
            textoFinal += "ai";
        } else if (texto[i] === "e") {
            textoFinal += "enter";
        } else if (texto[i] === "i") {
            textoFinal += "imes";
        } else if (texto[i] === "o") {
            textoFinal += "ober";
        } else if (texto[i] === "u") {
            textoFinal += "ufat";
        } else {
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] === "a" && texto.substring(i, i + 2) === "ai") {
            textoFinal += "a";
            i += 1;
        } else if (texto[i] === "e" && texto.substring(i, i + 5) === "enter") {
            textoFinal += "e";
            i += 4;
        } else if (texto[i] === "i" && texto.substring(i, i + 4) === "imes") {
            textoFinal += "i";
            i += 3;
        } else if (texto[i] === "o" && texto.substring(i, i + 4) === "ober") {
            textoFinal += "o";
            i += 3;
        } else if (texto[i] === "u" && texto.substring(i, i + 4) === "ufat") {
            textoFinal += "u";
            i += 3;
        } else {
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

function copiar() {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido)
        .then(() => {
            alert("Texto copiado al portapapeles");
        })
        .catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
}
