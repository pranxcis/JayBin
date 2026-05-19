/* =========================================
   PLANET AGE CALCULATOR
========================================= */

function calculatePlanetAge() {

  const ageInput = document.getElementById("earthAge").value;

  const earthAge = parseFloat(ageInput);

  if (isNaN(earthAge) || earthAge <= 0) {

    alert("Please enter a valid age.");

    return;
  }

  /* =========================================
     ORBITAL PERIODS
     (IN EARTH YEARS)
  ========================================= */

  const orbitalPeriods = {

    mercury: 0.24,
    venus: 0.62,
    earth: 1,
    mars: 1.88,
    jupiter: 11.86,
    saturn: 29.45,
    uranus: 84.01,
    neptune: 164.8,
    pluto: 248

  };

  /* =========================================
     CALCULATE AGES
  ========================================= */

  document.getElementById("mercuryAge").textContent =
    (earthAge / orbitalPeriods.mercury).toFixed(1);

  document.getElementById("venusAge").textContent =
    (earthAge / orbitalPeriods.venus).toFixed(1);

  document.getElementById("earthAgeResult").textContent =
    (earthAge / orbitalPeriods.earth).toFixed(1);

  document.getElementById("marsAge").textContent =
    (earthAge / orbitalPeriods.mars).toFixed(1);

  document.getElementById("jupiterAge").textContent =
    (earthAge / orbitalPeriods.jupiter).toFixed(1);

  document.getElementById("saturnAge").textContent =
    (earthAge / orbitalPeriods.saturn).toFixed(1);

  document.getElementById("uranusAge").textContent =
    (earthAge / orbitalPeriods.uranus).toFixed(1);

  document.getElementById("neptuneAge").textContent =
    (earthAge / orbitalPeriods.neptune).toFixed(1);

  document.getElementById("plutoAge").textContent =
    (earthAge / orbitalPeriods.pluto).toFixed(1);

}

/* =========================================
   ENTER KEY SUPPORT
========================================= */

document
  .getElementById("earthAge")
  .addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

      calculatePlanetAge();

    }

  });

/* =========================================
   OPTIONAL:
   AUTO PLAY VIDEOS WHEN VISIBLE
========================================= */

const planetVideos = document.querySelectorAll(".planet-preview");

planetVideos.forEach(function(video) {

  video.play().catch(function() {

    /* Prevent autoplay errors silently */

  });

});

/* =========================================
   OPTIONAL:
   SMOOTH REVEAL ANIMATION
========================================= */

if ("IntersectionObserver" in window) {

  const revealObserver = new IntersectionObserver(

    function(entries) {

      entries.forEach(function(entry) {

        if (entry.isIntersecting) {

          entry.target.classList.add("revealed");

          revealObserver.unobserve(entry.target);

        }

      });

    },

    {
      threshold: 0.15
    }

  );

  document
    .querySelectorAll(".planet-card, .planet-side-card")
    .forEach(function(el) {

      el.classList.add("will-reveal");

      revealObserver.observe(el);

    });

}