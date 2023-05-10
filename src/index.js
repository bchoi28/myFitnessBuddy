import MuscleMap from './scripts/muscleMap';
import GifContainer from './scripts/gifContainer';
import Carousel from './scripts/carousel';

document.addEventListener('DOMContentLoaded', () => {
    const gifContainer = document.querySelector('.gif-container');
    new GifContainer(gifContainer);

    const carouselContainer = document.querySelector('.carousel-container');
    const sharedExercises = [];
    const myCarousel = new Carousel(carouselContainer, sharedExercises);

    const bodyContainer = document.querySelector('.body-container');
    new MuscleMap(bodyContainer, myCarousel);
});
