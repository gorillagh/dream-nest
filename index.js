// dynamically adjust the height of the herosection
const navbar = document.getElementById("navbar");
const heroSection = document.getElementById("hero-section");

// Adjust hero section padding based on the navbar height
function adjustHeroPadding() {
  const navbarHeight = navbar.offsetHeight;
  heroSection.style.marginTop = `${navbarHeight}px`; // Add some extra padding
}

// Run on page load and resize
window.addEventListener("load", adjustHeroPadding);
window.addEventListener("resize", adjustHeroPadding);

window.addEventListener("scroll", function () {
  if (window.scrollY > 30) {
    navbar.classList.add("shadow-lg");
  } else {
    navbar.classList.remove("shadow-lg");
  }
});
