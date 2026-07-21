document.addEventListener("DOMContentLoaded", function () {
    const imagenes = document.querySelectorAll(".slider img");

    if (imagenes.length === 0) {
        return;
    }

    let imagenActual = 0;

    // Solo la primera imagen comienza visible
    imagenes.forEach(function (imagen, posicion) {
        imagen.classList.toggle("activa", posicion === 0);
    });

    function cambiarImagen() {
        imagenes[imagenActual].classList.remove("activa");

        imagenActual = (imagenActual + 1) % imagenes.length;

        imagenes[imagenActual].classList.add("activa");
    }

    // Elimina otro temporizador anterior, si existiera
    clearInterval(window.temporizadorSlider);

    window.temporizadorSlider = setInterval(cambiarImagen, 6000);
});