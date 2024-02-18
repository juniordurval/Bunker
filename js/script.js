window.addEventListener('resize', ajustarImagen);

function ajustarImagen() {
    var imagen = document.querySelector('.imagen-inicial img');
    if (window.innerWidth / window.innerHeight > imagen.width / imagen.height) {
        imagen.style.width = '100%';
        imagen.style.height = 'auto';
    } else {
        imagen.style.width = 'auto';
        imagen.style.height = '100%';
    }
}

ajustarImagen();
