import MuscleMap from './scripts/muscleMap';
import Carousel from './scripts/carousel';

document.addEventListener('DOMContentLoaded', () => {
    // const instructionsContainer = document.querySelector('.instructions-container');

    const storedExercises = [];
    const carouselContainer = document.querySelector('.carousel-container');
    const myCarousel = new Carousel(carouselContainer, storedExercises);

    const bodyContainer = document.querySelector('.body-container');
    new MuscleMap(bodyContainer, myCarousel);

    const audio = document.getElementById('myAudio');
    // audio.currentTime = 14;
    const toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            toggleButton.innerText = 'PAUSE';
        } else {
            audio.pause();
            toggleButton.innerText = 'TECHNO';
        }
    });
});
