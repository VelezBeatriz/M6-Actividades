//console.log("test");
const db = [];

//Seleccionar el boton y crear el evento click
const enviar = document
  .querySelector("#enviar")
  .addEventListener("click", crearficha);

//Funcion para crear ficha
function crearficha(event) {
  event.preventDefault();

  //Recojo los datos
  const nombre = document.querySelector("#nombre").value;
  const primerapellido = document.querySelector("#primerapellido").value;
  const segundoapellido = document.querySelector("#segundoapellido").value;
  const dni = document.querySelector("#dni").value;
  const urlimagen = document.querySelector("#urlimagen").value;

  //Inserto los datos en su lugar
  const infoname = (document.querySelector(".card-name").innerHTML =
    nombre + " ");
  const infosurname = (document.querySelector(".card-surname").innerHTML =
    primerapellido + " " + segundoapellido);
  const infodni = (document.querySelector(".card-dni").innerHTML = dni);
  const infofoto = (document.querySelector(".card-img-top").src = urlimagen);

  //Guardo los datos en un objeto
  const usuarios = {
    nombre: nombre,
    primerapellido: primerapellido,
    segundoapellido: segundoapellido,
    dni: dni,
    urlimagen: urlimagen,
  };

  //Almaceno los objetos en el array de objetos db creado en la linea 0
  db.push(usuarios);

  rellenarTabla(db);
}
//Funcion encargada de rellenar la tabla
function rellenarTabla(listado) {
  //Encuentro la posicion donde insertare la tabla
  const table_users = document.querySelector(".table_users");

  //Creo la estructura de la tabla
  let data_user = "";
  listado.forEach((element, index) => {
    data_user += `
    <tr>
    <td>${index + 1}</td>
    <td><img width="30" src="${element.urlimagen}"></td>
   <td>${element.nombre}</td>
    <td>${element.primerapellido + " " + element.segundoapellido}</td>
    <td>${element.dni}</td>
    </tr>`;
  });

  //Inserto los datos
  const inserta = (table_users.innerHTML = data_user);
}
