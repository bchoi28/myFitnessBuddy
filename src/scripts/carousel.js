class Carousel {
    constructor(containerEl) {
        this.container = containerEl;
        this.render();
        this.carouselNav;
        this.carouselSlides;
        this.added
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
        carouselItem.id = `carousel-item-${document.querySelectorAll(".carousel-item").length + 1}`;

        const itemTitle = document.createElement("h3");
        itemTitle.textContent = exercise.name;

        // const closeButton = document.createElement("button");
        // closeButton.classList.add("carousel-item-close-button");
        // closeButton.innerText = "X";

        carouselItem.appendChild(itemTitle);
        // carouselItem.appendChild(closeButton);

        const carouselSlides = document.querySelector(".carousel-container .carousel .carousel-slides");
        if (carouselSlides.children.length >= 4) {
            return;
        }

        this.carouselSlides.appendChild(carouselItem);

        carouselItem.scrollIntoView({ behiavior: "smooth" });

        const numItems = document.querySelectorAll(".carousel-item").length;
        const newNavItem = document.createElement("a");
        newNavItem.href = `#carousel-item-${numItems}`;
        newNavItem.textContent = numItems.toString();
        this.carouselNav.appendChild(newNavItem);
    }
};


export default Carousel;
