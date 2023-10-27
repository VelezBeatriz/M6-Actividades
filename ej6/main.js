//Variables globales
palabra = "";
aciertos = "";
fallos = 6; 
letras =[];

//Activar el juego
const buttonInnit = document.getElementById("btnIntroPalabra").addEventListener('click', startGame );
//Buscar letra
const buttonLetter = document.getElementById("introLetra").addEventListener('click', insertarLetra );


//Función que inicializa el juego
function startGame(){
    //Extraer la palabra, eliminar espacios comprobar que es una sola palabra
    let inputValue = document.getElementById("inputPalabra").value;

    if(inputValue === "" ){
        alert(" Introduce una palabra ");
    } else {
        inputValue=  inputValue.trim();
        if(inputValue.split(" ").length > 1 ){
            alert(" Introduce una sola palabra ");
        } else { 
            //Guardo la palabra y la cantidad de aciertos en las variables globales
            palabra = inputValue.toLowerCase();
            aciertos = palabra.length;
            //Llamar a función para añadir la palabra, recibe la palabra
            insertarPalabra(inputValue, letra);
            //Cambiar las pantallas de juego
            const ventanaIntroPalabra = document.getElementById("ventanaIntroPalabra").classList.add("d-none");
            const juego = document.getElementById("juego").classList.remove("d-none");   
        }
    }
}

//Esta función crea las casillas y las inserta sin la letra
function insertarPalabra(palabra){
    let casilla = "";
    for (let i = 0; i < palabra.length; i++) {
            casilla += `<div class="casilla num${i}"><span>_</span></div>`;
    }

    document.getElementById("casillas").innerHTML = casilla;
}

//Esta función recorre las letras que he utilizado
function repetirLetra(letra){
    var encontrado = false;
    letras.forEach(element => {
        if(element == letra){
            encontrado = true;
        }
    });
        return encontrado;
}

//Función que comprueba la palabra y si falla pinta el moñoco
function insertarLetra(){
    //Capturar letra
    const letra = document.getElementById("letra").value.toLowerCase();

    //Comprobar si he repetido la letra
    if(repetirLetra(letra)){
        //alert("Esta letra ya la dijiste...");
    } else {

        //Capturo las letras utilizadas
        letras.push(letra);

        //Comprobación errores
        const error = palabra.includes(letra);
        //La letra consta en la palabra
        if(error){
            //Añadir letra en su lugar correspondiente
            const repeticion = palabra.matchAll(letra);
                    
            for (let repeticiones of repeticion) {
                    let casilla = document.querySelector(`.num${repeticiones.index}`).innerHTML = `<span>${letra}</span>`;
                    aciertos--;
                }
  
            ganador();
    
        } else {
        //La letra no consta en la palabra
            dibujarAhorcado();
        } 
    }
}

//Esta funcion se encarga de dibujar y notificar los intentos restantes
function dibujarAhorcado(){
    //Localizar los elementos
    const cuerpo = document.getElementById("cuerpo"); 
    const cabeza = document.getElementById("cabeza"); 
    const brazoIzq = document.getElementById("brazoIzq");
    const brazoDra = document.getElementById("brazoDra");
    const piernaDra = document.getElementById("piernaDra"); 
    const piernaIzq = document.getElementById("piernaIzq");
    fallos--;
    switch(fallos){
        case 0:
            cabeza.classList.remove("d-none");
            alert("¡Se acabó el juego, has perdido!");
            break;
        case 1:
            brazoDra.classList.remove("d-none");          
            break;
        case 2:
            brazoIzq.classList.remove("d-none");              
            break;
        case 3:
            cuerpo.classList.remove("d-none");
            break;
        case 4:
            piernaDra.classList.remove("d-none");
            break;
        case 5:
            piernaIzq.classList.remove("d-none");
            break;
        default:
            console.log("Error dibujarAhorcado - No  contemplado");

    }

}

//Función que comprueba si eres ganador y resetea el juego
function ganador(){
    if(aciertos == 0){
        //Reiniciar juegos
        alert("¡Felicidades ganaste!");

        //Resetear las letras
        letras.length = 0;
        //Cambiar las pantallas de juego
        resetDraw();
        const ventanaIntroPalabra = document.getElementById("ventanaIntroPalabra").classList.remove("d-none");
        const juego = document.getElementById("juego").classList.add("d-none");  

    }
}

//Funcion que desdibuja
function resetDraw(){
    const cuerpo = document.getElementById("cuerpo");   
    const cabeza = document.getElementById("cabeza");
    const brazoIzq = document.getElementById("brazoIzq");
    const brazoDra = document.getElementById("brazoDra");
    const piernaDra = document.getElementById("piernaDra"); 
    const piernaIzq = document.getElementById("piernaIzq");

    dibujo = [cuerpo, cabeza, brazoIzq,brazoDra, piernaDra,piernaIzq];
    dibujo.forEach(element => {
        if(!element.classList.contains("d-none")){
            element.classList.add("d-none");
        }
    });
}
