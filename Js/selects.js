const selector = document.getElementById("cambiocolor");
const base = document.getElementById("colorbase");

// Clases de Bootstrap disponibles
const colores = {
    dark: "bg-dark",
    light: "bg-light"
};

// Cambiar el fondo
function background(color) {

    // Eliminar las clases anteriores
    base.classList.remove(
        "bg-dark",
        "bg-light",
    );

    // Aplicar el nuevo fondo
    base.classList.add(colores[color]);

    // Guardar la selección
    localStorage.setItem("fondo", color);
}

// Detectar cuando el usuario cambia el select
selector.addEventListener("change", function () {
    background(selector.value);
});

// Recuperar el fondo al cargar la página
window.addEventListener("DOMContentLoaded", function () {

    let fondoGuardado = localStorage.getItem("fondo");

    if (fondoGuardado && colores[fondoGuardado]) {
        selector.value = fondoGuardado;
        background(fondoGuardado);
    }
});