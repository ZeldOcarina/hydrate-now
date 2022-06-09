let navbar = document.querySelector('.navbar');
const navButton = document.querySelector('.custom-button');
let navState = navButton.getAttribute('aria-expanded');

// Setting transition for whole navbar
navbar.style.transition = "all 0.2s";

const setDefault = () => {
   navState = navButton.getAttribute('aria-expanded');
   navButton.setAttribute('aria-expanded', false)
}

// Changing BG color when nav is open
const changeNavBG = () => {
   navState = navButton.getAttribute('aria-expanded');
   if (navState == 'true') {
      navbar.style.backgroundColor = "#ffffff"
   } else if (navState == 'false') {
      //navbar.style.backgroundColor = "#ffffff80"
      navbar.style.backgroundColor = "#ffffff"
   }
}

navButton.addEventListener("click", changeNavBG)

// document.addEventListener("DOMContentLoaded", setDefault)