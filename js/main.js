const menu = document.querySelector(".menu");

const OpenMenu = document.querySelector(".menu-mobile");
const CLoseMenu = document.querySelector(".menu-close");

OpenMenu.addEventListener("click", () => {
  menu.classList.add("mobilemenu");
});

CLoseMenu.addEventListener("click", () => {
  menu.classList.remove("mobilemenu");
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr__top = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: false,
});

sr__top.reveal(
  `.hero,.about-top,.about-box,.title,.product-bottom-box ,.product-box,
  .benefit-box,.view-image,.testimonial-box,.hero-btn__primary,.product-bottom__btn,.connect-title,
  .hero-btn__second,.connect-form,.blog-box,.footer-top`,
  {
    interval: 200,
  }
);
