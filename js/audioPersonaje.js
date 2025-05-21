'use strict';

'use strict';

function activarAudioModal(modalId, audioId) {
    const modal = document.getElementById(modalId);
    const audio = document.getElementById(audioId);

    if (!modal || !audio) return;

    modal.addEventListener('shown.bs.modal', () => {
        audio.currentTime = 0;
        audio.play();
    });

    modal.addEventListener('hidden.bs.modal', () => {
        audio.pause();
        audio.currentTime = 0;
    });
}

// Ejecutar la función para cada personaje
document.addEventListener('DOMContentLoaded', () => {
    activarAudioModal('modalNobita', 'audioNobita');
    activarAudioModal('modalDoraemon', 'audioDoraemon');
    activarAudioModal('modalShizuka', 'audioShizuka');
    activarAudioModal('modalSuneo', 'audioSuneo');
    activarAudioModal('modalGigante', 'audioGigante');
    // Añade más si los tienes
});