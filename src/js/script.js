
const menuToggle = document.querySelector('#button-header');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !isExpanded);

  menu.classList.toggle('open');

  if (!isExpanded) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

//  CAROUSEL 
const carousel = document.querySelector(".carouselcontainer");
const prevButton = document.querySelector(".carouselbutton--prev");
const nextButton = document.querySelector(".carouselbutton--next");
const premierItem = document.querySelector(".carouselitem");


// Largeur de défilement d’un item
if (carousel) { 
  // Scroll au clic sur le bouton précédent
  prevButton.addEventListener("click", () => {
    const scrollAmount = premierItem.clientWidth;
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  // Scroll au clic sur le bouton suivant
  nextButton.addEventListener("click", () => {
    const scrollAmount = premierItem.clientWidth;
    carousel.scrollBy({ left: +scrollAmount, behavior: "smooth" });
  });
}
// TODO
