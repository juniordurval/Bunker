window.addEventListener('resize', ajustarImagen);
window.addEventListener('scroll', ajustarImagen);

function ajustarImagen() {
    var imagenes = document.querySelectorAll('.imagen-inicial, .imagen-secundaria');
    imagenes.forEach(function(imagen) {
        if (window.innerWidth / window.innerHeight > imagen.width / imagen.height) {
            imagen.style.width = '100%';
            imagen.style.height = 'auto';
        } else {
            imagen.style.width = 'auto';
            imagen.style.height = '100%';
        }
    });
}

ajustarImagen();
