//Capturar los botones
const botonSumar = document.querySelector("#botonSumar");
const botonRestar = document.querySelector("#botonRestar");
const botonMultiplicar = document.querySelector("#botonMultiplicar");
const botonDividir = document.querySelector("#botonDividir");

// Capturamos los eventos click de cada botón
botonSumar.addEventListener("click", sumar);
botonRestar.addEventListener("click", restar);
botonMultiplicar.addEventListener("click", multiplicar);
botonDividir.addEventListener("click", dividir);

//Función sumar: captura el valor de los inputs correspondientes, los transforma en Int y luego opera con ellos
function sumar(event) {
  // Evito que refresque la página
  event.preventDefault();
  // Capturo el elemento y el valor input
  const valorInput1 = document.querySelector("#num1").value;
  //Lo transformo
  const valorInput1Num = parseInt(valorInput1);
  //C Capturo el elemento y el valor input
  const valorInput2 = document.querySelector("#num2").value;
  //Lo transformo
  const valorInput2Num = parseInt(valorInput2);

  const resultado = valorInput1Num + valorInput2Num;

  document.querySelector("#inputResultado").value = resultado;
}

// Función restar = Función sumar
function restar(event) {
  // Evito que refresque la página
  event.preventDefault();
  // Capturo el elemento y el valor input
  const valorInput1 = document.querySelector("#num1").value;
  //Lo transformo
  const valorInput1Num = parseInt(valorInput1);
  //C Capturo el elemento y el valor input
  const valorInput2 = document.querySelector("#num2").value;
  //Lo transformo
  const valorInput2Num = parseInt(valorInput2);

  const resultado = valorInput1Num - valorInput2Num;

  document.querySelector("#inputResultado").value = resultado;
}

function multiplicar(event) {
  // Evito que refresque la página
  event.preventDefault();
  // Capturo el elemento y el valor input
  const valorInput1 = document.querySelector("#num1").value;
  //Lo transformo
  const valorInput1Num = parseInt(valorInput1);
  //C Capturo el elemento y el valor input
  const valorInput2 = document.querySelector("#num2").value;
  //Lo transformo
  const valorInput2Num = parseInt(valorInput2);

  const resultado = valorInput1Num * valorInput2Num;

  document.querySelector("#inputResultado").value = resultado;
}

function dividir(event) {
  // Evito que refresque la página
  event.preventDefault();
  // Capturo el elemento y el valor input
  const valorInput1 = document.querySelector("#num1").value;
  //Lo transformo
  const valorInput1Num = parseInt(valorInput1);
  //C Capturo el elemento y el valor input
  const valorInput2 = document.querySelector("#num2").value;
  //Lo transformo
  const valorInput2Num = parseInt(valorInput2);

  const resultado = valorInput1Num / valorInput2Num;

  document.querySelector("#inputResultado").value = resultado;
}
