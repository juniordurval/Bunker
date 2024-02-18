window.addEventListener('resize', ajustarImagen);

function ajustarImagen() {
  const imagenes = document.querySelectorAll('.imagen-inicial, .imagen-secundaria');

  imagenes.forEach(imagen => {
    const windowRatio = window.innerWidth / window.innerHeight;
    const imageRatio = imagen.naturalWidth / imagen.naturalHeight;

    if (windowRatio > imageRatio) {
      imagen.style.width = '100%';
      imagen.style.height = 'auto';
    } else {
      imagen.style.width = 'auto';
      imagen.style.height = '100%';
    }
  });
}

ajustarImagen(); // Llamada inicial para ajustar las imágenes al cargar la página

// Mejoras:

// Se ha eliminado la redundancia de usar el evento `scroll` para ajustar las imágenes. Ajustar las imágenes en respuesta al cambio de tamaño de la ventana es suficiente.
// Se ha actualizado la sintaxis de `querySelectorAll` para mayor compatibilidad.
// Se ha utilizado `naturalWidth` y `naturalHeight` para obtener las dimensiones originales de la imagen, evitando distorsiones.
// Se ha añadido un comentario para explicar el propósito del código.
