
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) toggle.addEventListener("click", () => nav.classList.toggle("open"));

  const track = document.querySelector(".carousel-track");
  const prev = document.querySelector("[data-prev]");
  const next = document.querySelector("[data-next]");
  const dots = [...document.querySelectorAll(".dot")];
  if (track) {
    const step = () => {
      const card = track.querySelector(".timeline-card");
      return card ? card.getBoundingClientRect().width + 16 : track.clientWidth;
    };
    prev?.addEventListener("click", () => track.scrollBy({left: -step(), behavior:"smooth"}));
    next?.addEventListener("click", () => track.scrollBy({left: step(), behavior:"smooth"}));
    track.addEventListener("scroll", () => {
      const index = Math.round(track.scrollLeft / step());
      dots.forEach((dot,i) => dot.classList.toggle("active", i === index));
    });
    dots.forEach((dot,i) => dot.addEventListener("click", () => track.scrollTo({left:i*step(),behavior:"smooth"})));
  }
});
