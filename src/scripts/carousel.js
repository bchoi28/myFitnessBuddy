import { displayExerciseInfo, removeExerciseFromInfoContainer } from "./exercises";

class Carousel {
    constructor(containerEl, storedExercises) {
        this.container = containerEl;
        this.render();
        this.carouselNav;
        this.carouselSlides;
        this.storedExercises = storedExercises;
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

        const closeButton = document.createElement("button");
        closeButton.classList.add("carousel-item-close-button");
        closeButton.innerText = "X";

        closeButton.addEventListener('click', () => {
            this.removeExerciseFromCarousel(carouselItem);
            removeExerciseFromInfoContainer(exercise);
        })

        carouselItem.appendChild(itemTitle);
        carouselItem.appendChild(closeButton);

        if (this.carouselSlides.children.length >= 4) {
            return;
        }

        this.carouselSlides.appendChild(carouselItem);

        carouselItem.scrollIntoView({ behiavior: "smooth" });

        const numItems = document.querySelectorAll(".carousel-item").length;
        const newNavItem = document.createElement("a");
        const navItems = Array.from(document.querySelectorAll('.carousel-nav a'));
        navItems.forEach((navItem) => navItem.classList.remove('active'));
        newNavItem.classList.add('active');

        newNavItem.href = `#carousel-item-${numItems}`;
        newNavItem.textContent = numItems.toString();
        this.carouselNav.appendChild(newNavItem);



        newNavItem.addEventListener('click', (event) => {
            displayExerciseInfo(exercise);
            const navItems = Array.from(document.querySelectorAll('.carousel-nav a'));
            navItems.forEach((navItem) => navItem.classList.remove('active'));
            event.target.classList.add('active');
        });

        this.storedExercises.push(exercise);
    }

    removeExerciseFromCarousel(carouselItem) {
        this.carouselSlides.removeChild(carouselItem);
        const itemId = carouselItem.id.split("-")[2];
        const navItem = document.querySelector(`.carousel-nav a[href="#carousel-item-${itemId}"]`);
        this.carouselNav.removeChild(navItem);

        // Remove the exercise from the storedExercises array
        const exerciseName = carouselItem.querySelector("h3").textContent;
        const exerciseIndex = this.storedExercises.findIndex((exercise) => exercise.name === exerciseName);
        if (exerciseIndex > -1) {
            this.storedExercises.splice(exerciseIndex, 1);
        }
    }
};


export default Carousel;
