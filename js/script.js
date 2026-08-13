document.addEventListener("DOMContentLoaded", () => {
  // Collapsible callout
  const triggers = document.querySelectorAll(".callout__trigger");
  triggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      const body = document.getElementById(trigger.getAttribute("aria-controls"));
      const expanded = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!expanded));
      body.style.display = expanded ? "none" : "block";
    });
  });

  // Hero image cycler
  const HERO_IMAGES = []; // Add your image paths: ["assets/hero-1.jpg", "assets/hero-2.jpg", ...]
  const heroMedia = document.getElementById("heroMedia");

  if (HERO_IMAGES.length && heroMedia) {
    let i = 0;
    heroMedia.innerHTML = `<img src="${HERO_IMAGES[0]}" alt="Seiryu community" class="hero__img">`;
    const imgEl = heroMedia.querySelector(".hero__img");

    setInterval(() => {
      i = (i + 1) % HERO_IMAGES.length;
      imgEl.style.opacity = 0;
      setTimeout(() => {
        imgEl.src = HERO_IMAGES[i];
        imgEl.style.opacity = 1;
      }, 300);
    }, 5000);
  }

  // Smooth nav highlight on scroll (optional)
  const navLinks = document.querySelectorAll(".primary-nav a");
  window.addEventListener("scroll", () => {
    navLinks.forEach(link => {
      if (link.href.endsWith(window.location.pathname)) {
        link.classList.add("is-active");
      }
    });
  });
});
