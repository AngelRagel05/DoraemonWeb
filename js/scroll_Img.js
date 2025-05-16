'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const cabecera = document.querySelector('.contenedor-DoraemonGamer');

    const alturaInicial = 500; // igual que en el CSS
    const alturaMinima = 0;    // cuando desaparece por completo

    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;
        let nuevaAltura = Math.max(alturaInicial - scrollY, alturaMinima);
        cabecera.style.height = `${nuevaAltura}px`;
    });
});