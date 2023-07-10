const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-nav');
const header = document.querySelector('header');

const windowWidth = window.innerWidth;

navToggle.addEventListener('click', () => {
     primaryNav.hasAttribute("data-visible") ? navToggle.setAttribute('aria-expanded', false): navToggle.setAttribute('aria-expanded', true)
    
    primaryNav.toggleAttribute("data-visible");
    header.toggleAttribute("data-overlay") 
});







