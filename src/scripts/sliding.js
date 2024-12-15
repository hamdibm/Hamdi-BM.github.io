
const imagesContainer = document.querySelector('.carousel__images');
const images = document.querySelectorAll('.carousel__image');
const leftButton = document.querySelector('.carousel__button--left');
const rightButton = document.querySelector('.carousel__button--right');

let currentIndex = 0;

const updateCarousel = () => {
  const imageWidth = images[0].clientWidth;
  imagesContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
};

leftButton.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  updateCarousel();
});

rightButton.addEventListener('click', () => {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  updateCarousel();
});

// Ensure proper positioning of images on load
window.addEventListener('resize', updateCarousel);
updateCarousel();
