import MuscleMap from './scripts/muscle_map';
import GifContainer from './scripts/gif_area';

document.addEventListener('DOMContentLoaded', () => {
    const bodyContainer = document.querySelector('.body-container');
    new MuscleMap(bodyContainer);

    const gifContainer = document.querySelector('.gif-container');
    new GifContainer(gifContainer);
});