// Ejercicio 1 - Aleatorio
  //Seleccionar el botón y crear el evento
  const botonAct1 = document.querySelector("#botonAct1").addEventListener("click", catchNumber);
  //FUNCIONES --------------------------------------->
  function RandomNumber(max, min) {
    //Transformo en Int 
    max = parseInt(max);
    min = parseInt(min);

    //Creamos el número aleatorio entre max(incluido) y min(incluido)
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    //Devolvemos el valor
    return randomNumber;
  }
  function catchNumber() {
    //Capturo el valor de los inputs
    const input1 = document.querySelector("#num1").value;
    const input2 = document.querySelector("#num2").value;

    //Compruebo si los valores son números o no
    if (isNaN(input1) || isNaN(input2)) {
      //Los datos ingresados no son número
      alert("Lo siento tienes que ingresar un número...");
    } else {
      const input_random = document.querySelector("#numeroAleatorio");

      if (input1 === input2) {
        //El número es el mismo
        alert("Los dos números son el mismo");
        //Imprimimos el valor
        input_random.innerHTML = input1;
      } else {
        if (input1 > input2) {
          //El número de input1 es mayor que el número de input2
          alert("El mínimo es mayor que el máximo...");
        } else {
          //Llamamos a la funcion RandomNumber
          const finalNumber = RandomNumber(input2, input1);
          //Imprimimos el valor
          input_random.innerHTML = finalNumber;
        }
      }
    }
  }

//Ejercicio 2 - String
  //Busco el botón mayusculas y minusculas y llamo a la variable changeLetter enviando un dato que especifica si es mayusculas o minusculas
    const btnUpper = document
    .querySelector("#btnupper")
    .addEventListener("click", function () {
      changeLetter("upper");
      });
    const btnLower = document
      .querySelector("#btnlower")
      .addEventListener("click", function () {
        changeLetter("lower");
      });
      
  //Busco el botón de Buscar 
    const btnSearch = document
      .querySelector("#btnSearch")
      .addEventListener("click", searchAny);
    
  //FUNCIONES --------------------------------------->

  //Esta función convierte el texto en Upper o Lower, actualiza el contador de palabras, añade el texto que posteriormente podrá buscarse y finalmente hace el resumen.
  function changeLetter(type) {
    //Cantidad de palabras totales del resumen 
    const resumLength = 10;

    //Extraer el valor del textarea
    let textArea = document.querySelector("#texto").value;
    //Extraer el lugar donde se insertará el texto
    const insertText = document.querySelector("#finaltext");
    //Extraer el lugar donde se insertará la cantidad de palabras
    const allLetter = document.querySelector("#counterLetter");
    //Extraer el lugar donde se insertará el resumen de palabras
    const resumFinal = document.querySelector("#resumen");

    //CONVERTIDOR MAYUSCULA O MINUSCULA
    //Comprobamos si es mayuscula o es minuscula
    switch (type) {
      case "upper":
        //Transformarmos el texto
        textArea = textArea.toUpperCase();
        //Insertamos el texto
        insertText.innerHTML = textArea;
        break;
      case "lower":
        //Transformarmos el texto
        textArea = textArea.toLowerCase();
        //Insertamos el texto
        insertText.innerHTML = textArea;
        break;
      default:
        //console.log("Error no contemplado");
        insertText.innerHTML = "...";
    }
    //CONTADOR DE PALABRAS - ACTUALIZAR
    //Comprobar si hay texto o no
    if (textArea === "") {
      //Añadir que hay 0 palabras
      allLetter.innerHTML = 0;
    } else {
      //Llamar a la funcion counterLetters
      let totalWords = counterLetters(textArea);
      //Añadir que las palabras que hay
      allLetter.innerHTML = totalWords;
    }
    // AÑADIR EL RESUMEN DE 10 PALABRAS
    createResum(resumFinal, resumLength, textArea);
  }
  //Esta función se limita a contar las palabras de un texto
  function counterLetters(text) {
    let total = text.split(" ").length;
    return total;
  }
  //Esta función se limita a crear un resumen, recibe el lugar donde insertara el texot, el total de palabras que tendra el resumen y el texto
  function createResum(position, totalNumber, text) {
    //Llamar a la funcion counterLetters
    let totalWords = counterLetters(text);

    //Comprobar si hay texto o no
    if (text === "") {
      //Añadir nada
      position.innerHTML = " ";
    } else {
      //Comprobar la cantidad total de palabras
      if (totalWords <= totalNumber) {
        //Si el texto tiene menos o la misma cantidad de palabras que el tope máximo se inserta sin mas
        position.innerHTML = text + "...";
      } else {
        //Inicializar variables
        let totalLetters = "";
        let i = 0;
        //Empezar a contar palabras
        for (let i = 0; i <= totalNumber; i++) {
          let Letters = text.split(" ")[i];
          totalLetters += Letters + " ";
        }
        //Añadir el resumen
        position.innerHTML = totalLetters + "...";
      }
    }
  }
  //Esta función se encarga de buscar una palabra en el texto y resaltarla
  function searchAny() {
    //Extraer el valor del textarea
    let textFinal = document.querySelector("#texto").value;

    //Extraer la palabra del input
    const word = document.querySelector("#searchWord").value;

    //Encontrar las veces que se repite
    const iterator = textFinal.matchAll(word);

    //Recorrer la cantidad de veces que se repite para guardar en la variable i la cantidad de repeticiones
    let i = 0;
    for (let ocurrence of iterator) {
      //console.log("coincidencias", ocurrence.index);
      i++;
    }

    //Remplazar el texto que buscamos por el mismo con la etiqueta mark
    nuevoTexto = textFinal.replaceAll(
      word,
      "<mark class='bg-primary text-light'>" + word + "</mark>"
    );
    
    //Añadir el texto remarcado
    const mark = (document.querySelector("#finaltext").innerHTML = nuevoTexto);
    //Añadir la cantidad de veces que encuentra la palabra
    const repeatword = (document.querySelector("#repeatWord").innerHTML = i);
  }


//EJERCICIO 3 - Date
  //Localizar el boton y añadir el evento
  const buttonName = document.querySelector("#transformName").addEventListener('click', function(){  
    //Extraer el valor del input que guarda el nombre
    const inputName = document.querySelector("#inputName").value;

    //Comprobar si el texto está vacio o no
    if(inputName === ""){
      alert("Lo siento no has introducido ningún nombre...");
    } else {
      // Eliminar espacios de delante y de detrás
      let finalName = inputName.trim();

      //Reemplazar el espacio del medio por un guión
      finalName = finalName.replaceAll(" ", "-");

      //Convertir en mayusculas
      finalName = finalName.toUpperCase();

      //Introducir los datos  
      document.querySelector("#insertName").innerHTML = finalName;
      
      //console.log(finalName);
    }
  });

  //Localizar el boton y añadir el evento
  const buttonDate = document.querySelector("#transformDate").addEventListener('click', function(){
    //Extraer el valor del input que guarda la fecha
    const inputDate = document.querySelector("#inputDate").value;
    //Comprobar si la fecha está vacia o no
    if(inputDate === ""){
      alert("Lo siento no has introducido ningún dato...");
    } else {
      //Substituir el / por el -
      finalDate = inputDate.replaceAll("/", "-");
      //Insertar el resultado
      document.querySelector("#insertDate").innerHTML = finalDate;
    }
  });

//EJERCICIO 4 - Generador de contraseñas
  //Esta funcion crea una serie de caracteres
  function createLetters(){
    const abecedarioLower = "abcdefghijklmnopqrstuvwxyz";
    const abecedarioUpper =abecedarioLower.toUpperCase();
    const abecedario = abecedarioLower + abecedarioUpper;  
    return abecedario;
  }
  // Localizar el boton para generar la contraseña
  const buttonPass = document.querySelector("#buttonPass").addEventListener('click', function(){
    //Cantidad total de las letras de la password
    const lengthPass = 10;
    //Creamos la cadena de texto
    const chainLetters = createLetters();
    let passRandom = "";

    //Craeción de la cadena aleatoria

    for (let i = 0; i < lengthPass; i++) {
      //Creamos una variable que crea un aleatorio del total de caracteres que hay en chainLetters
      const letterRandom = Math.floor(Math.random() * chainLetters.length);
      // console.log(letterRandom);
      //Añadimos el caracter de esa posicion
      passRandom += chainLetters[letterRandom];
    }
    //console.log(passRandom);
    //Introducir en el input como valor la contraseña obtenida
    const password = document.querySelector("#pass").value = passRandom;
  });

// EJERCICIO 5 - Generador de emoticonos
//Esta funcion crea una serie de emojis
function createEmojis(){
  const emojis = [
  	'😄','😃','😀','😊','☺','😉','😍','😘','😚','😗','😙','😜','😝','😛','😳','😁','😔','😌','😒','😞','😣','😢','😂','😭','😪','😥','😰','😅','😓','😩','😫','😨','😱','😠','😡','😤','😖','😆','😋','😷','😎','😴','😵','😲','😟','😦','😧','😈','👿','😮','😬','😐','😕','😯','😶','😇','😏','😑','👲','👳','👮','👷','💂','👶','👦','👧','👨','👩','👴','👵','👱','👼','👸','😺','😸','😻','😽','😼','🙀','😿','😹','😾','👹','👺','🙈','🙉','🙊','💀','👽','💩','🔥','✨','🌟','💫','💥','💢','💦','💧','💤','💨','👂','👀','👃','👅','👄','👍','👎','👌','👊','✊','✌','👋','✋','👐','👆','👇','👉','👈','🙌','🙏','☝','👏','💪','🚶','🏃','💃','👫','👪','👬','👭','💏','💑','👯','🙆','🙅','💁','🙋','💆','💇','💅','👰','🙎','🙍','🙇','🎩','👑','👒','👟','👞','👡','👠','👢','👕','👔','👚','👗','🎽','👖','👘','👙','💼','👜','👝','👛','👓','🎀','🌂','💄','💛','💙','💜','💚','❤','💔','💗','💓','💕','💖','💞','💘','💌','💋','💍','💎','👤','👥','💬','👣','💭','🐶','🐺','🐱','🐭','🐹','🐰','🐸','🐯','🐨','🐻','🐷','🐽','🐮','🐗','🐵','🐒','🐴','🐑','🐘','🐼','🐧','🐦','🐤','🐥','🐣','🐔','🐍','🐢','🐛','🐝','🐜','🐞','🐌','🐙','🐚','🐠','🐟','🐬','🐳','🐋','🐄','🐏','🐀','🐃','🐅','🐇','🐉','🐎','🐐','🐓','🐕','🐖','🐁','🐂','🐲','🐡','🐊','🐫','🐪','🐆','🐈','🐩','🐾','💐','🌸','🌷','🍀','🌹','🌻','🌺','🍁','🍃','🍂','🌿','🌾','🍄','🌵','🌴','🌲','🌳','🌰','🌱','🌼','🌐','🌞','🌝','🌚','🌑','🌒','🌓','🌔','🌕','🌖','🌗','🌘','🌜','🌛','🌙','🌍','🌎','🌏','🌋','🌌','🌠','⭐','☀','⛅','☁','⚡','☔','❄','⛄','🌀','🌁','🌈','🌊','🎍','💝','🎎','🎒','🎓','🎏','🎆','🎇','🎐','🎑','🎃','👻','🎅','🎄','🎁','🎋','🎉','🎊','🎈','🎌','🔮','🎥','📷','📹','📼','💿','📀','💽','💾','💻','📱','☎','📞','📟','📠','📡','📺','📻','🔊','🔉','🔈','🔇','🔔','🔕','📢','📣','⏳','⌛','⏰','⌚','🔓','🔒','🔏','🔐','🔑','🔎','💡','🔦','🔆','🔅','🔌','🔋','🔍','🛁','🛀','🚿','🚽','🔧','🔩','🔨','🚪','🚬','💣','🔫','🔪','💊','💉','💰','💴','💵','💷','💶','💳','💸','📲','📧','📥','📤','✉','📩','📨','📯','📫','📪','📬','📭','📮','📦','📝','📄','📃','📑','📊','📈','📉','📜','📋','📅','📆','📇','📁','📂','✂','📌','📎','✒','✏','📏','📐','📕','📗','📘','📙','📓','📔','📒','📚','📖','🔖','📛','🔬','🔭','📰','🎨','🎬','🎤','🎧','🎼','🎵','🎶','🎹','🎻','🎺','🎷','🎸','👾','🎮','🃏','🎴','🀄','🎲','🎯','🏈','🏀','⚽','⚾','🎾','🎱','🏉','🎳','⛳','🚵','🚴','🏁','🏇','🏆','🎿','🏂','🏊','🏄','🎣','☕','🍵','🍶','🍼','🍺','🍻','🍸','🍹','🍷','🍴','🍕','🍔','🍟','🍗','🍖','🍝','🍛','🍤','🍱','🍣','🍥','🍙','🍘','🍚','🍜','🍲','🍢','🍡','🍳','🍞','🍩','🍮','🍦','🍨','🍧','🎂','🍰','🍪','🍫','🍬','🍭','🍯','🍎','🍏','🍊','🍋','🍒','🍇','🍉','🍓','🍑','🍈','🍌','🍐','🍍','🍠','🍆','🍅','🌽','🏠','🏡','🏫','🏢','🏣','🏥','🏦','🏪','🏩','🏨','💒','⛪','🏬','🏤','🌇','🌆','🏯','🏰','⛺','🏭','🗼','🗾','🗻','🌄','🌅','🌃','🗽','🌉','🎠','🎡','⛲','🎢','🚢','⛵','🚤','🚣','⚓','🚀','✈','💺','🚁','🚂','🚊','🚉','🚞','🚆','🚄','🚅','🚈','🚇','🚝','🚋','🚃','🚎','🚌','🚍','🚙','🚘','🚗','🚕','🚖','🚛','🚚','🚨','🚓','🚔','🚒','🚑','🚐','🚲','🚡','🚟','🚠','🚜','💈','🚏','🎫','🚦','🚥','⚠','🚧','🔰','⛽','🏮','🎰','♨','🗿','🎪','🎭','📍','🚩','⬆','⬇','⬅','➡','🔠','🔡','🔤','↗','↖','↘','↙','↔','↕','🔄','◀','▶','🔼','🔽','↩','↪','ℹ','⏪','⏩','⏫','⏬','⤵','⤴','🆗','🔀','🔁','🔂','🆕','🆙','🆒','🆓','🆖','📶','🎦','🈁','🈯','🈳','🈵','🈴','🈲','🉐','🈹','🈺','🈶','🈚','🚻','🚹','🚺','🚼','🚾','🚰','🚮','🅿','♿','🚭','🈷','🈸','🈂','Ⓜ','🛂','🛄','🛅','🛃','🉑','㊙','㊗','🆑','🆘','🆔','🚫','🔞','📵','🚯','🚱','🚳','🚷','🚸','⛔','✳','❇','❎','✅','✴','💟','🆚','📳','📴','🅰','🅱','🆎','🅾','💠','➿','♻','♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓','⛎','🔯','🏧','💹','💲','💱','©','®','™','〽','〰','🔝','🔚','🔙','🔛','🔜','❌','⭕','❗','❓','❕','❔','🔃','🕛','🕧','🕐','🕜','🕑','🕝','🕒','🕞','🕓','🕟','🕔','🕠','🕕','🕖','🕗','🕘','🕙','🕚','🕡','🕢','🕣','🕤','🕥','🕦','✖','➕','➖','➗','♠','♥','♣','♦','💮','💯','✔','☑','🔘','🔗','➰','🔱','🔲','🔳','◼','◻','◾','◽','▪','▫','🔺','⬜','⬛','⚫','⚪','🔴','🔵','🔻','🔶','🔷','🔸','🔹'
  ];
  return emojis;
}
// Localizar el boton para generar el emoji aleatorio
const buttonEmoji = document.querySelector("#buttonEmoji").addEventListener('click', function(){
    //Llamamos la cadena de emojis
    const emojis = createEmojis();
    //Obtenemos un numero aleatorio de todos los emojis
    const emojiRandom = Math.floor(Math.random() * emojis.length);
    //Insertamos el emoji random
    document.querySelector("#insertEmoji").innerHTML = emojis[emojiRandom];
})


