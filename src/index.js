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
});
