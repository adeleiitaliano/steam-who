const carousel = document.querySelector(".carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let scrollAmount = 0;

nextBtn.addEventListener("click", () => {
  const cardWidth = document.querySelector(".card").offsetWidth + 56;
  const visibleCards = 3;
  if (scrollAmount < carousel.scrollWidth - cardWidth * visibleCards) {
    scrollAmount += cardWidth;
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
  }
});

prevBtn.addEventListener("click", () => {
  const cardWidth = document.querySelector(".card").offsetWidth + 56;
  if (scrollAmount > 0) {
    scrollAmount -= cardWidth;
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
  }
});

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    card.querySelector(".card-inner").classList.toggle("is-flipped");
  });
});

