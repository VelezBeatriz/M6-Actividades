//console.log("test");

//Seleccionar el boton y crear el evento click
const enviar = document
  .querySelector("#enviar")
  .addEventListener("click", crearficha);

//Funcion para crear ficha, para ello recojo todos los valores de los inputs y finalmente los añado en su lugar correspondiente.
function crearficha(event) {
  event.preventDefault();

  const nombre = document.querySelector("#nombre").value;
  const primerapellido = document.querySelector("#primerapellido").value;
  const segundoapellido = document.querySelector("#segundoapellido").value;
  const dni = document.querySelector("#dni").value;
  const urlimagen = document.querySelector("#urlimagen").value;

  const infoname = (document.querySelector(".card-name").innerHTML =
    nombre + " ");
  const infosurname = (document.querySelector(".card-surname").innerHTML =
    primerapellido + " " + segundoapellido);
  const infodni = (document.querySelector(".card-dni").innerHTML = dni);

  // Para la imagen se le reemplaza el src.
  const infofoto = (document.querySelector(".card-img-top").src = urlimagen);

  // https://images.unsplash.com/photo-1570824104967-27599c232b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1059&q=80
}
