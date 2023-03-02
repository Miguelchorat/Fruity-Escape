//Eventos de TAB

// Obtiene el primer elemento de la lista de pestañas del menú
const primerTabMenu = document.querySelectorAll(".principal__seccion__contenido__lista__elemento")[0];

// Obtiene el segundo elemento de la lista de pestañas del menú
const segundoTabMenu = document.querySelectorAll(".principal__seccion__contenido__lista__elemento")[1];

// Obtiene el primer artículo del contenido
const primerTabContenido = document.querySelectorAll(".principal__seccion__contenido__contenedor__articulo")[0];

// Obtiene el segundo artículo del contenido
const segundoTabContenido = document.querySelectorAll(".principal__seccion__contenido__contenedor__articulo")[1];

// Añade un event listener que escucha el evento "click" en el primer elemento de la lista de pestañas del menú
primerTabMenu.addEventListener("click", () => {
  // Agrega la clase "principal__seccion__contenido__contenedor__articulo--activo" al primer artículo del contenido
  primerTabContenido.classList.add("principal__seccion__contenido__contenedor__articulo--activo");

  // Agrega la clase "principal__seccion__contenido__lista__elemento--seleccionado" al primer elemento de la lista de pestañas del menú
  primerTabMenu.classList.add("principal__seccion__contenido__lista__elemento--seleccionado");

  // Remueve la clase "principal__seccion__contenido__contenedor__articulo--activo" del segundo artículo del contenido
  segundoTabContenido.classList.remove("principal__seccion__contenido__contenedor__articulo--activo");

  // Remueve la clase "principal__seccion__contenido__lista__elemento--seleccionado2" del segundo elemento de la lista de pestañas del menú
  segundoTabMenu.classList.remove("principal__seccion__contenido__lista__elemento--seleccionado2");
});

// Añade un event listener que escucha el evento "click" en el segundo elemento de la lista de pestañas del menú
segundoTabMenu.addEventListener("click", () => {
  // Agrega la clase "principal__seccion__contenido__contenedor__articulo--activo" al segundo artículo del contenido
  segundoTabContenido.classList.add("principal__seccion__contenido__contenedor__articulo--activo");

  // Agrega la clase "principal__seccion__contenido__lista__elemento--seleccionado2" al segundo elemento de la lista de pestañas del menú
  segundoTabMenu.classList.add("principal__seccion__contenido__lista__elemento--seleccionado2");

  // Remueve la clase "principal__seccion__contenido__contenedor__articulo--activo" del primer artículo del contenido
  primerTabContenido.classList.remove("principal__seccion__contenido__contenedor__articulo--activo");

  // Remueve la clase "principal__seccion__contenido__lista__elemento--seleccionado" del primer elemento de la lista de pestañas del menú
  primerTabMenu.classList.remove("principal__seccion__contenido__lista__elemento--seleccionado");
});

//Eventos de Scroll
const enlaces = document.querySelectorAll('.encabezado__nav__listado__item__enlace');
const main = document.getElementById('mi-main');


window.addEventListener("scroll", () => {
  const posicion = window.pageYOffset;
  if (posicion < (window.innerHeight * 0.5)) {
    enlaces[0].classList.add('encabezado__nav__listado__item__enlace--activo');
    enlaces[1].classList.remove('encabezado__nav__listado__item__enlace--activo');
    enlaces[2].classList.remove('encabezado__nav__listado__item__enlace--activo');
  } else if (posicion < (window.innerHeight * 1.6)) {
    enlaces[0].classList.remove('encabezado__nav__listado__item__enlace--activo');
    enlaces[1].classList.add('encabezado__nav__listado__item__enlace--activo');
    enlaces[2].classList.remove('encabezado__nav__listado__item__enlace--activo');
  } else {
    enlaces[0].classList.remove('encabezado__nav__listado__item__enlace--activo');
    enlaces[1].classList.remove('encabezado__nav__listado__item__enlace--activo');
    enlaces[2].classList.add('encabezado__nav__listado__item__enlace--activo');
  }
});

//Carrusel
const carrusel = document.querySelector('.principal__seccion__contenido__carrusel');
const imagenes = document.querySelectorAll('.principal__seccion__contenido__carrusel__img');
const radios = document.querySelectorAll('.principal__seccion__contenido__control__radio');

radios.forEach((radio, i) => {
  radio.addEventListener('click', () => {
    let posicion = i
    let operacion = posicion * -33.33;

    carrusel.style.transform = `translateX(${operacion}%)`
  });
});

//audio
const pj1 = document.querySelectorAll('.principal__seccion__contenido__contenedor__articulo__personaje')[0];
const pj2 = document.querySelectorAll('.principal__seccion__contenido__contenedor__articulo__personaje')[1];
const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");

pj1.addEventListener('click', () => {
  audio1.play()
});

pj2.addEventListener('click', () => {
  audio2.play()
});