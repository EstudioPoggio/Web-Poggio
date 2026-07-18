// ================= JS PARA ANIMACIONES =================

// Navbar cambia al hacer scroll
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  const hero = document.getElementById("inicio");

  const limite = hero.offsetHeight - 100;

  header.classList.toggle("scrolled", window.scrollY > limite);
});

// Animación al hacer scroll
const faders = document.querySelectorAll(".fade-up");

const appearOnScroll = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("appear");
      } else {
        entry.target.classList.remove("appear");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
