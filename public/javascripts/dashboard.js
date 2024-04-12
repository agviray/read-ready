// ----------
// state
// ----------

// -----------
// Misc Const
// -----------

const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  effect: 'coverflow',
  coverflow: {
    centeredSlides: true,
    grabCursor: true,
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
  },
  prevButton: '.swiper-button-prev',
  nextButton: '.swiper-button-next',
});

// ----------------
// cached elements
// ----------------

const swiperContainer = document.querySelectorAll('.swiper-container');
const slides = Array.from(document.querySelectorAll('.swiper-slide'));
const overlays = Array.from(document.querySelectorAll('.overlay'));
const images = Array.from(document.querySelectorAll('.swiper-slide > img'));

// ----------------
// event listeners
// ----------------

images.forEach((image) => {
  image.addEventListener('click', bringIntoView);
});

// ----------
// functions
// ----------

function bringIntoView(event) {
  const clickedImageIndex = images.indexOf(event.target);
  if (slides[clickedImageIndex].contains(event.target)) {
    swiper.slideTo(clickedImageIndex, 500, true);
  }
}
