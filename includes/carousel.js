let currentProject = 0;

const track = document.getElementById("projectTrack");
const slides = document.querySelectorAll(".project-slide");
const dotsContainer = document.getElementById("carouselDots");

function buildDots() {

  dotsContainer.innerHTML = "";

  slides.forEach((_, index) => {

    const dot = document.createElement("button");

    dot.className = "carousel-dot";

    if (index === 0) {
      dot.classList.add("active");
    }

    dot.setAttribute("aria-label", `Go to slide ${index + 1}`);

    dot.addEventListener("click", () => {
      goToProject(index);
    });

    dotsContainer.appendChild(dot);

  });
}

function updateDots() {

  const dots = document.querySelectorAll(".carousel-dot");

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentProject);
  });
}

function goToProject(index) {

  currentProject =
    (index + slides.length) % slides.length;

  track.style.transform =
    `translateX(-${currentProject * 100}%)`;

  updateDots();
}

function changeProject(direction) {
  goToProject(currentProject + direction);
}

document.addEventListener("DOMContentLoaded", buildDots);