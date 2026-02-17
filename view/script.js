const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navbarMenu = document.getElementById('navbarMenu');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 12);
});

menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    navbarMenu.classList.toggle('open');
});

navbarMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        navbarMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});