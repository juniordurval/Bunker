window.addEventListener('resize', ajustarImagen);
window.addEventListener('scroll', ajustarImagen);

function ajustarImagen() {
  const imagenes = document.querySelectorAll('.imagen-inicial, .imagen-secundaria');

  imagenes.forEach(imagen => {
    const windowRatio = window.innerWidth / window.innerHeight;
    const imageRatio = imagen.naturalWidth / imagen.naturalHeight; // Use naturalWidth/Height for original dimensions

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
