const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let index = 0;
let interval;

function showSlide(i) {
  index = (i + images.length) % images.length;
  slides.style.transform = `translateX(${-index * 100}%)`;

  document.querySelectorAll(".dots span").forEach(dot => dot.classList.remove("active"));
  dotsContainer.children[index].classList.add("active");
}

images.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.onclick = () => showSlide(i);
  dotsContainer.appendChild(dot);
});

function startAutoPlay() {
  interval = setInterval(() => showSlide(index + 1), 3000);
}

function stopAutoPlay() {
  clearInterval(interval);
}

prev.onclick = () => showSlide(index - 1);
next.onclick = () => showSlide(index + 1);

document.querySelector(".slider").addEventListener("mouseenter", stopAutoPlay);
document.querySelector(".slider").addEventListener("mouseleave", startAutoPlay);

showSlide(index);
startAutoPlay();
