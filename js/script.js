window.addEventListener('resize', ajustarImagen);
window.addEventListener('scroll', ajustarImagen);

function ajustarImagen() {
    var imagen = document.querySelector('.imagen-inicial img');
    if (imagen && window.innerWidth / window.innerHeight > imagen.width / imagen.height) {
        imagen.style.width = '100%';
        imagen.style.height = 'auto';
    } else if (imagen) {
        imagen.style.width = 'auto';
        imagen.style.height = '100%';
    }
}

ajustarImagen();
