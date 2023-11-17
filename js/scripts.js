'use strict'

console.log('Empieza el programa')

// ------------------- VARIABLES GLOBALES ------------------------

// capturamos el formulario de introduccion de socios - Ejercicio 1
const formulario = document.querySelector('#formNombre')

// capturamos el contenedor donde escribiremos los socios - Ejercicio 2
const contenedorEscribirSocios = document.getElementById(
  'contenedorPintarSocios'
)

var arraySocios = []
// ------------------- FUNCIONES ------------------------

// EJERCICIO 1

/*
  Funcion para leer del JSON
*/
function cargarSociosJSON () {
  let path = 'model/datosSocios.json'

  let request = new Request(path, {
    headers: new Headers({
      'Content-Type': 'text/json'
    }),
    method: 'GET'
  })

  fetch(request).then(response => {
    response.json().then(data => {
      console.log('Datos', data)
    })
  })
}

/* 
  Metodo para añadir socios al array cuando arranca la pagina web
*/

  function aniadirSociosInicialesArray() {
    let path = 'model/datosSocios.json';
  
    let request = new Request(path, {
      headers: new Headers({
        'Content-Type': 'text/json'
      }),
      method: 'GET'
    });
  
    fetch(request)
      .then(response => response.json())
      .then(data => {

        arraySocios = data.map(socio => {
          return {
            id: socio.id,
            nombre: socio.nombre,
            apellido: socio.apellido,
            
          }
        })
      })
  }

/*
  Metodo para capturar los datos del socio introducidor en el formulario
*/
function capturarDatosSocio () {
  
  const socio = {
    nombre: document.getElementById('fnombre').value,
    apellido: document.getElementById('fapellido').value,
    id: crearID()
  }  
  console.log(socio)
  arraySocios.push(socio)
}

/* 
 Metodo para crear un socio pasandole el nombre y el apellido
*/
function crearSocio (nombre, apellido) {
  const socio = {
    nombre: this.nombre,
    apellido: this.apellido,
  }  
  arraySocios.push(socio)
}

/*
TODO: 
    Metodo para crear el ID del socio en funcion del ultimo
    ID que hay en el array de socios
*/
function crearID () {
  const ultimoId = arraySocios.length 
  return ultimoId + 1;
}

// EJERCICIO 2

/*
  Metodo que elimina la lista previamente pintada en el contenedor asignado 
  para pintar socios, recorre el array con un bucle y pinta los socios 
*/
function pintarListaSocios () {
  contenedorEscribirSocios.innerHTML = '';
  arraySocios.forEach((socio) => {
    const divSocio = document.createElement('div');
    divSocio.innerHTML = `<p>Socio numero ${socio.id}: ${socio.nombre} ${socio.apellido}</p>`
    contenedorEscribirSocios.appendChild(divSocio)
  })
  //TODO: borramos todo lo que hay en el div
  //TODO: bucle para recorrer y pintar el array de socios
  //TODO: debemos añadir los socios a la pagina web
}

// ------------------- MAIN ------------------------
cargarSociosJSON()
aniadirSociosInicialesArray ()
pintarListaSocios ()


console.log('Acaba el programa')
