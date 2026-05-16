// script.js

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* Smooth reveal animation */

const cards = document.querySelectorAll(
  ".about-card, .domain-card, .event-card, .contact-box"
);

window.addEventListener("scroll", revealCards);

function revealCards() {

  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < triggerBottom){
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }

  });

}

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "0.6s ease";
});