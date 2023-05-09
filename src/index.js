import MuscleMap from './scripts/muscleMap';
import GifContainer from './scripts/gifContainer';
import Carousel from './scripts/carousel';

document.addEventListener('DOMContentLoaded', () => {
    const bodyContainer = document.querySelector('.body-container');
    new MuscleMap(bodyContainer);

    const gifContainer = document.querySelector('.gif-container');
    new GifContainer(gifContainer);

    const carouselContainer = document.querySelector('.carousel-container');
    new Carousel(carouselContainer);
});