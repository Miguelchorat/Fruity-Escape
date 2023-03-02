//Eventos de TAB

const primerTabMenu = document.querySelectorAll(".principal__seccion__contenido__lista__elemento")[0];
const segundoTabMenu = document.querySelectorAll(".principal__seccion__contenido__lista__elemento")[1];
const primerTabContenido = document.querySelectorAll(".principal__seccion__contenido__contenedor__articulo")[0];
const segundoTabContenido = document.querySelectorAll(".principal__seccion__contenido__contenedor__articulo")[1];


primerTabMenu.addEventListener("click", () => {
  primerTabContenido.classList.add("principal__seccion__contenido__contenedor__articulo--activo");
  primerTabMenu.classList.add("principal__seccion__contenido__lista__elemento--seleccionado");
  segundoTabContenido.classList.remove("principal__seccion__contenido__contenedor__articulo--activo");
  segundoTabMenu.classList.remove("principal__seccion__contenido__lista__elemento--seleccionado2");
});

segundoTabMenu.addEventListener("click", () => {
  segundoTabContenido.classList.add("principal__seccion__contenido__contenedor__articulo--activo");
  segundoTabMenu.classList.add("principal__seccion__contenido__lista__elemento--seleccionado2");
  primerTabContenido.classList.remove("principal__seccion__contenido__contenedor__articulo--activo");
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