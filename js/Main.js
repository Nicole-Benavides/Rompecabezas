// Obtener la referencia al elemento contenedor principal
const rompecabezas1 = document.querySelector('.rompecabezas1');

// Obtener una lista de todos los elementos botón dentro del contenedor principal
const botones = Array.from(rompecabezas1.querySelectorAll('button'));

// Función para mover los botones aleatoriamente
function moverBotones() {
    // Copiar la lista de botones
    const botonesCopia = botones.slice();

    // Mezclar los botones de forma aleatoria
    for (let i = botonesCopia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [botonesCopia[i], botonesCopia[j]] = [botonesCopia[j], botonesCopia[i]];
    }

    // Colocar los botones mezclados de nuevo en el contenedor principal
    botonesCopia.forEach((boton, index) => {
        rompecabezas1.appendChild(boton.parentNode);
    });
}

// Llamar a la función para mezclar los botones al cargar la página
moverBotones();