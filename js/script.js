// Collapsible "difference between" callout, matching the reference site's expandable info box
document.addEventListener("DOMContentLoaded", () => {
  const trigger = document.querySelector(".callout__trigger");
  const body = document.getElementById("calloutBody");

  if (trigger && body) {
    trigger.addEventListener("click", () => {
      const expanded = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!expanded));
      body.style.display = expanded ? "none" : "block";
    });
  }

  // ---------------------------------------------------------
  // Hero image cycler — hook this up once real images are added.
  // Drop image URLs into HERO_IMAGES and this will crossfade them
  // behind the feature card, same spot as the reference site's hero.
  // ---------------------------------------------------------
  const HERO_IMAGES = []; // e.g. ["assets/hero-1.jpg", "assets/hero-2.jpg"]
  const heroMedia = document.getElementById("heroMedia");

  if (HERO_IMAGES.length && heroMedia) {
    let i = 0;
    heroMedia.innerHTML = `<img src="${HERO_IMAGES[0]}" alt="" class="hero__img">`;
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
});
