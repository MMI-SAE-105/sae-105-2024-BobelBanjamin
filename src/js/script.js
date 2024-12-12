
const menuToggle = document.querySelector('#button-header');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);

    menu.classList.toggle('open');
});
