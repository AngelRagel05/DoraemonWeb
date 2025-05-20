document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".col-md-6 .card");
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 200}ms`;
        card.classList.add("card-animate");
    });
});