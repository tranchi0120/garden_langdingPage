const menu = document.querySelector(".menu");
const OpenMenu = document.querySelector(".menu-mobile");
const CLoseMenu = document.querySelector(".menu-close");

OpenMenu.addEventListener("click", () => {
  menu.classList.add("mobilemenu");
});

CLoseMenu.addEventListener("click", () => {
  menu.classList.remove("mobilemenu");
});

/*==================== ScrollTop ====================*/

const scrollTop = () => {
  const scrollTop = document.getElementById("scroll-top");
  if (window.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollTop);

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr__top = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: false,
});

sr__top.reveal(
  `.hero,.about-top,.about-box,.title ,.product-group,
  .benefit-box,.view-image,.testimonial-box,.hero-btn__primary,.connect-title,
  .hero-btn__second,.connect-form,.blog-box,.footer-top`,
  {
    interval: 200,
  }
);
