// ------
// state
// ------

// ----------------
// cached elements
// ----------------
const hamburger = document.querySelector('.hamburger');
const navMenuContainer = document.querySelector('nav .menu-container');
// ----------------
// event listeners
// ----------------
hamburger.addEventListener('click', toggleMenu);

// ----------
// functions
// ----------
function toggleMenu(event) {
  if (hamburger.contains(event.target)) {
    if (hamburger.classList.contains('active')) {
      hamburger.classList.remove('active');
      navMenuContainer.classList.remove('is-open');
    } else {
      hamburger.classList.add('active');
      navMenuContainer.classList.add('is-open');
    }
  }
}
