"use strict";
const dlcs = [
    {
        titulo: "La vida de los insectos",
        subtitulo: "DLC 2",
        texto: "Contiene ropa, muebles y una historia sobre insectos.",
        fecha: "15 marzo 2023",
        video: "https://www.youtube.com/embed/VIDEO_ID_1"
    },
    {
        titulo: "Historias de invierno",
        subtitulo: "DLC 3",
        texto: "Ropa de abrigo, decoración nevada y una historia cálida.",
        fecha: "7 septiembre 2023",
        video: "https://www.youtube.com/embed/VIDEO_ID_2"
    },
    {
        titulo: "La vida de los animales",
        subtitulo: "DLC 1",
        texto: "Explora el mundo animal con nuevos muebles y trajes.",
        fecha: "19 enero 2023",
        video: "https://www.youtube.com/embed/VIDEO_ID_3"
    },
    {
        titulo: "DORAEMON STORY OF SEASONS:",
        subtitulo: "Friends of the Great Kingdom",
        texto: "Trailer de Fecha de Lanzamiento: 02/11/22",
        fecha: "1 noviembre 2022",
        video: "https://www.youtube.com/embed/gRlGGuWHJvE"
    }
];
function updateMainCard(index) {
    const info = dlcs[index];
    const container = document.getElementById("tarjetaPrincipal");

    container.style.opacity = 0;

    setTimeout(() => {
        document.getElementById("tituloPrincipal").textContent = info.titulo;
        document.getElementById("subtituloPrincipal").textContent = info.subtitulo;
        document.getElementById("textoPrincipal").textContent = info.texto;
        document.getElementById("fechaPrincipal").textContent = info.fecha;
        document.getElementById("videoPrincipal").src = info.video;

        container.style.opacity = 1;
    }, 300);

}