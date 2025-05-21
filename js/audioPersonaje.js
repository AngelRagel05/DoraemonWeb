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