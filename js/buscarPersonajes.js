'use strict';
function filtrarTabla() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const filas = document.querySelectorAll("table tbody tr");

    filas.forEach(fila => {
        const celdas = fila.querySelectorAll("td");
        let textoFila = "";

        // Extrae el texto de todas las celdas (excepto las que contienen solo imagen)
        celdas.forEach(td => {
            // Ignorar celdas que contienen solo una imagen
            if (!td.querySelector("img")) {
                textoFila += td.textContent.toLowerCase() + " ";
            }
        });

        fila.style.display = textoFila.includes(input) ? "" : "none";
        
    });
}