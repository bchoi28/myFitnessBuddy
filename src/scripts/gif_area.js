class GifContainer {
    constructor(containerEl) {
        this.container = containerEl;

        const title = document.createElement('h2');
        title.classList.add('gif-title');
        title.textContent = 'Exercise Demo';

        this.container.appendChild(title);
    };
};

export default GifContainer;