class Carousel {
    constructor(containerEl) {
        this.container = containerEl;
        this.render();
        this.carouselNav;
        this.carouselSlides;
    }

    render() {
        const carousel = document.createElement("div");
        carousel.classList.add("carousel");

        const carouselNav = document.createElement("div");
        carouselNav.classList.add("carousel-nav");
        this.carouselNav = carouselNav;
        carousel.appendChild(carouselNav);

        const carouselSlides = document.createElement("div");
        carouselSlides.classList.add("carousel-slides");
        carousel.appendChild(carouselSlides);
        this.carouselSlides = carouselSlides;

        this.container.appendChild(carousel);
    }

    addExerciseToCarousel(exercise) {
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");

        const itemTitle = document.createElement("h3");
        itemTitle.textContent = exercise.name;

        carouselItem.appendChild(itemTitle);
        // TODO: Add the carousel item to the carousel slide
        this.carouselSlides.appendChild(carouselItem);
        // TODO: Update the carousel nav
        const numItems = document.querySelectorAll(".carousel-item").length;
        const newNavItem = document.createElement("a");
        newNavItem.href = `#carousel-item-${numItems}`;
        newNavItem.textContent = numItems.toString();
        this.carouselNav.appendChild(newNavItem);
    };
}


export default Carousel;
