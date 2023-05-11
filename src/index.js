import MuscleMap from './scripts/muscleMap';
// import GifContainer from './scripts/instructions';
import Carousel from './scripts/carousel';

document.addEventListener('DOMContentLoaded', () => {
    // const instructionsContainer = document.querySelector('.instructions-container');

    const carouselContainer = document.querySelector('.carousel-container');
    const storedExercises = [];
    const myCarousel = new Carousel(carouselContainer, storedExercises);

    const bodyContainer = document.querySelector('.body-container');
    new MuscleMap(bodyContainer, myCarousel);
});
