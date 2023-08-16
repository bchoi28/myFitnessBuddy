import MuscleMap from './scripts/muscleMap';
import Carousel from './scripts/carousel';

document.addEventListener('DOMContentLoaded', () => {
    // const instructionsContainer = document.querySelector('.instructions-container');

    const storedExercises = [];
    const carouselContainer = document.querySelector('.carousel-container');
    const myCarousel = new Carousel(carouselContainer, storedExercises);

    const bodyContainer = document.querySelector('.body-container');
    new MuscleMap(bodyContainer, myCarousel);

    document.querySelector('.main-title').addEventListener("click", () => {
        location.reload();
    })

    const overlay = document.getElementById('overlay');

    // Show the introduction modal
    const buddyModal = document.getElementById('buddy-modal');

    // Hide the modal when it's clicked
    document.addEventListener('click', () => {
        buddyModal.classList.add('hidden');
        overlay.classList.add('hidden');
    });
});
