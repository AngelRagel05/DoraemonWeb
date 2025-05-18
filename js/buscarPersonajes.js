'use strict';
// Función para buscar personajes por nombre        
function filtrarTabla() {
    let input = document.getElementById("searchInput").ariaValueMax.toLowerCase;
    let filas = document.querySelectorAll("table tbody tr");

    filas.forEach(fila => {
        let texto = fila.innerText.toLowerCase();
        fila.style.display = texto.includes(input) ? "" : "none";
    });
}