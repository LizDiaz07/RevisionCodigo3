// Definición del array de productos disponibles
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./imagenes/taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./imagenes/taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./imagenes/bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./imagenes/bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./imagenes/zapato-rojo.jpg"}
];

// Referencias a elementos del DOM
const listaDeProductos = document.getElementById("lista-de-productos"); // Contenedor de productos
const inputFiltro = document.getElementById("input-filtro"); // Input de búsqueda
const botonDeFiltro = document.getElementById("btn-filtrar"); // Botón de filtro

/**
 * Función para mostrar una lista de productos en el DOM.
 * @param {Array} lista - Array de productos a mostrar.
 */
function displayProductos(lista) {
  // Limpia la lista de productos actual antes de mostrar los nuevos elementos
  listaDeProductos.innerHTML = '';

  // Itera sobre la lista de productos para agregarlos al contenedor
  lista.forEach(producto => {
    // Creación del contenedor de cada producto
    const contenedorProducto = document.createElement("div");
    contenedorProducto.classList.add("producto");

    // Creación del título del producto
    const titulo = document.createElement("p");
    titulo.classList.add("titulo");
    titulo.textContent = producto.nombre;

    // Creación de la imagen del producto
    const imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img);

    // Añadir título e imagen al contenedor del producto
    contenedorProducto.appendChild(titulo);
    contenedorProducto.appendChild(imagen);

    // Añadir el contenedor de producto a la lista en el DOM
    listaDeProductos.appendChild(contenedorProducto);
  });
}

// Mostrar todos los productos al cargar la página
displayProductos(productos);

/**
 * Evento para filtrar productos cuando se presiona el botón de filtro
 */
botonDeFiltro.onclick = function() {
  // Convertir el texto del input a minúsculas para mejorar la búsqueda
  const texto = inputFiltro.value.toLowerCase(); 
  // Filtrar productos según el texto ingresado
  const productosFiltrados = filtrado(productos, texto);
  // Mostrar los productos filtrados
  displayProductos(productosFiltrados);
}

/**
 * Función para filtrar productos por tipo o color.
 * @param {Array} lista - Lista de productos original.
 * @param {string} texto - Texto de búsqueda ingresado por el usuario.
 * @returns {Array} Lista de productos filtrados.
 */
function filtrado(lista, texto) {
  // Filtra productos que incluyan el texto en el tipo o color
  return lista.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}
