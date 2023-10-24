totalCasillas = 20;
//Guardar las posiciones de los jugadores
posicionjugador1 = 1;
posicionjugador2 = 1;
//Guardar el código correspondiente a las fichas de los jugadores
fichajugador1 = `<div class="ficha jugador1"></div>`;
fichajugador2 = `<div class="ficha jugador2"></div>`;

//Localizar el boton Jugador y crear un evento, crear una variable equivalente a su posición.
const jugador1 = document.querySelector("#jugador1").addEventListener("click", function () {
    moverficha("#jugador1", "#casillas1", fichajugador1);
  });
const jugador2 = document.querySelector("#jugador2").addEventListener("click", function () {
    moverficha("#jugador2", "#casillas2", fichajugador2);
  });

//Esta funcion genera un numero aleatorio entre el 1 y el 6
function randomNumber(){
  let dado = Math.floor(Math.random() * 6 + 1);
  return dado;
}

//Esta funcion se encarga de mover las fichas y recibe jugador que mueve la ficha, casillas correspondientes y la estructura de la ficha
function moverficha(jugador, casillas, ficha) {
  //El dado inicializa con un numero aleatorio del 1 al 6
  dado = randomNumber();
  //Comprobación de jugador
  switch (jugador) {
    case "#jugador1":
        //Eliminamos la ficha de su lugar
        document.querySelector(casillas + " #c" + posicionjugador1).innerHTML = "";
        //Añadimos la nueva posicion
        posicionjugador1 = posicionjugador1 + dado;
        retroceder(dado, jugador, casillas, ficha);
      break;
    case "#jugador2":
        //Eliminamos la ficha de su lugar
        document.querySelector(casillas + " #c" + posicionjugador2).innerHTML = "";
        //Añadimos la nueva posicion
        posicionjugador2 = posicionjugador2 + dado;
        retroceder(dado, jugador, casillas, ficha);
      break;
    default:
      console.log("Posición jugador - error no contemplado.");
  }
}

//Esta función se encarga de comprobar coincidencias entre posiciones
function comprobarPosicion(casillas, ficha) {
  if (posicionjugador1 === posicionjugador2) {
    document.querySelector(casillas + " #c1").innerHTML = ficha;
    //Compruebo de que jugador se trata para resetear la posicion
     switch (casillas) {
      case "#casillas1":
        posicionjugador1 = 1;
        break;
      case "#casillas2":
        posicionjugador2 = 1;
        break;
      default:
        console.log("Retroceder - error no contemplado.");
    }
  } else {
      //Comprobación del jugador en cuestion, para determinar la posicion nueva
      switch (casillas) {
        case "#casillas1":
          document.querySelector(casillas + " #c" + posicionjugador1).innerHTML = ficha;
          break;
        case "#casillas2":
          document.querySelector(casillas + " #c" + posicionjugador2).innerHTML = ficha;
          break;
        default:
          console.log("Mover - error no contemplado.");
      }
  }
}

//Esta funcion confirma que la posicion sea 20 y muestra un mensaje de enhorabuena al jugador
function ganador(jugador, posicion){
  if(posicion == 20){
    alert("Has ganado", jugador);
  }
}

//Esta función se encarga de hacer retroceder las casillas en caso de sobrepasarse
function retroceder(dado, jugador, casillas, ficha){
  switch (casillas) {
    case "#casillas1":
        if( posicionjugador1 > totalCasillas ) {
          //Operacion que resta las casillas totales menos las casillas movidas para retroceder
          let temp_posicion = posicionjugador1 - totalCasillas;
          posicionjugador1 = totalCasillas - temp_posicion;
          comprobarPosicion(casillas, ficha);
        } else {
          //Comprobar si es ganador
          ganador(jugador, posicionjugador1);
          //Llamamos a función retroceder por si se encuentran
          comprobarPosicion(casillas, ficha);
        }
      break;
      case "#casillas2":
        if( posicionjugador2 > totalCasillas ) {
          //Operacion que resta las casillas totales menos las casillas movidas para retroceder
          let temp_posicion = posicionjugador2 - totalCasillas;
          posicionjugador2 = totalCasillas - temp_posicion;
          comprobarPosicion(casillas, ficha);
        } else {
          //Comprobar si es ganador
          ganador(jugador, posicionjugador2);
          //Llamamos a función retroceder por si se encuentran
          comprobarPosicion(casillas, ficha);
        }
      break;
      default:
        console.log("Retroceder - error no contemplado.");
  }
}