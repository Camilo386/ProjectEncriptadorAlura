const vocalesDesencriptadas = ["e", "i", "a", "o", "u"];
const vocalesEncriptadas = ["enter", "imes", "ai", "ober", "ufat"];

function encriptador(mensaje, forma) {
  mensaje = mensaje.toLowerCase();

  if (forma == 1) {
    for (let i = 0; i < vocalesEncriptadas.length; i++) {
      mensaje = mensaje.replaceAll(
        vocalesDesencriptadas[i],
        vocalesEncriptadas[i]
      );
    }
  } else if (forma == 2) {
    for (let i = 0; i < vocalesDesencriptadas.length; i++) {
      mensaje = mensaje.replaceAll(
        vocalesEncriptadas[i],
        vocalesDesencriptadas[i]
      );
    }
  }

  return mensaje;
}

const textoEntrada = document.querySelector("#textoEntrada");
const botonEncriptar = document.querySelector("#botonEncriptar")
const textoSalida = document.querySelector("#textoSalida")
const botonCopiar = document.querySelector("#botonCopiar")
const botonDesencriptar = document.querySelector("#botonDesencriptar")
const title = document.querySelector("#title");
const parrafo = document.querySelector("#parrafo");
const muneco = document.querySelector("#muneco");

botonEncriptar.addEventListener("click", () => {
    if (textoEntrada.value !== ""){
        ocultarBranding();
        let mensaje = encriptador(textoEntrada.value,1);
        textoEntrada.value = "";
        textoSalida.value = mensaje;
    }
    else {
        alert("Ingresa el mensaje a encriptar")
    }
})

botonDesencriptar.addEventListener("click", () => {
    if (textoEntrada.value !== ""){
        ocultarBranding();
        let mensaje = encriptador(textoEntrada.value,2)
        textoEntrada.value = "";
        textoSalida.value = mensaje;
    }
    else {
        alert("Ingresa el mensaje a desencriptar")
    }
})

botonCopiar.addEventListener("click", () => {
    mostrarBranding();
    navigator.clipboard.writeText(textoSalida.value);
    textoEntrada.value = textoSalida.value;
    textoSalida.value = "";
})

function ocultarBranding() {
    title.classList.add("hide");
    parrafo.classList.add("hide");
    muneco.classList.add("hide");
    textoSalida.classList.remove("hide");
    botonCopiar.classList.remove("hide");
  }
  
  function mostrarBranding() {
    title.classList.remove("hide");
    parrafo.classList.remove("hide");
    muneco.classList.remove("hide");
    textoSalida.classList.add("hide");
    botonCopiar.classList.add("hide");
  }
