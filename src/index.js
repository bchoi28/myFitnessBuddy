import MuscleMap from './scripts/muscleMap';
import GifContainer from './scripts/gifContainer';

document.addEventListener('DOMContentLoaded', () => {
    const bodyContainer = document.querySelector('.body-container');
    new MuscleMap(bodyContainer);

    const gifContainer = document.querySelector('.gif-container');
    new GifContainer(gifContainer);
});