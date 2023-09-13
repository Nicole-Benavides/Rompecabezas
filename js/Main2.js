// Obtener la referencia al elemento contenedor principal
const rompecabezas1 = document.querySelector('.rompecabezas1');

// Función para mover los botones aleatoriamente
function moverBotones() {
    const botones = Array.from(rompecabezas1.querySelectorAll('button'));

    // Mezclar los botones de forma aleatoria usando el algoritmo Fisher-Yates
    for (let i = botones.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [botones[i], botones[j]] = [botones[j], botones[i]];
    }

    // Colocar los botones mezclados de nuevo en el contenedor principal
    botones.forEach(boton => {
        rompecabezas1.appendChild(boton.parentElement);
    });

}

// Llamar a la función para mezclar los botones al cargar la página
moverBotones();
