document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            // Remove "active" from all cards
            cards.forEach(c => c.classList.remove("active"));
            // Add "active" class to the hovered card
            card.classList.add("active");
        });

        card.addEventListener("mouseleave", () => {
            // Remove active class when mouse leaves
            card.classList.remove("active");
        });
    });
});