function encriptar() {
    var texto = document.querySelector("#input-texto").value;
    if (texto === "") {
      document.querySelector("#mensaje-error").style.display = "block";
      document.querySelector(".text-input-salida").value = ""; 
      return;
    }
    document.querySelector("#mensaje-error").style.display = "none";
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".text-input-salida").value = textoCifrado;
  }
  
  function desencriptar() {
    var texto = document.querySelector("#input-texto").value;
    if (texto === "") {
      document.querySelector("#mensaje-error").style.display = "block";
      document.querySelector(".text-input-salida").value = "";
      return;
    }
    document.querySelector("#mensaje-error").style.display = "none";
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector(".text-input-salida").value = textoCifrado;
  }
  
  function copiarMensaje() {
    var mensajeEncriptado = document.querySelector(".text-input-salida");
    mensajeEncriptado.select();
    document.execCommand("copy");
  }
  
  function validarTexto() {
    var inputTexto = document.querySelector("#input-texto").value;
    var btnEncriptar = document.querySelector("#btn-encriptar");
    var btnDesencriptar = document.querySelector("#btn-desencriptar");
    var mensajeError = document.querySelector("#mensaje-error");
  
    if (texto === "") {
      btnEncriptar.disabled = true;
      btnDesencriptar.disabled = true;
      mensajeError.style.display = "block";
    } else {
      btnEncriptar.disabled = false;
      btnDesencriptar.disabled = false;
      mensajeError.style.display = "none";
    }
  }