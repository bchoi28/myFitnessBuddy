import { displayExerciseInfo, removeExerciseFromInfoContainer } from "./exercises";

class Carousel {
    constructor(containerEl, storedExercises) {
        this.container = containerEl;
        this.render();
        this.storedExercises = storedExercises;
    }

    render() {
        const carousel = document.createElement("div");
        carousel.classList.add("carousel");

        const carouselNav = document.createElement("div");
        carouselNav.classList.add("carousel-nav");
        this.carouselNav = carouselNav;

        const carouselSlides = document.createElement("div");
        carouselSlides.classList.add("carousel-slides");
        this.carouselSlides = carouselSlides;

        const exerciseTitle = document.createElement("div");
        exerciseTitle.classList.add("my-exercises");
        exerciseTitle.innerText = "My Exercises";

        this.container.appendChild(carousel);
        carousel.style.display = "none";
        carousel.append(exerciseTitle, carouselNav, carouselSlides);
    }

    addExerciseToCarousel(exercise) {

        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
        carouselItem.id = `carousel-item-${document.querySelectorAll(".carousel-item").length + 1}`;

        const carouselItemTitle = document.createElement('div');
        carouselItemTitle.classList.add('carousel-item-title');
        carouselItemTitle.innerText = exercise.name;

        const carouselItemType = document.createElement('div');
        carouselItemType.classList.add('carousel-item-type');
        carouselItemType.innerText = exercise.type;

        const closeButton = document.createElement("button");
        closeButton.classList.add("carousel-item-close-button");
        closeButton.innerText = "X";

        if (this.carouselSlides.children.length === 4) {
            return;
        }

        this.carouselSlides.appendChild(carouselItem);
        carouselItem.append(carouselItemTitle, carouselItemType, closeButton);

        if (this.carouselSlides.children.length === 1) {
            this.container.querySelector(".carousel").style.display = "block";
        }

        carouselItem.scrollIntoView({ behavior: "smooth" });

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

        closeButton.addEventListener('click', () => {
            const nextExercise = this.removeExerciseFromCarousel(carouselItem);
            removeExerciseFromInfoContainer(nextExercise);
        });

        this.storedExercises.push(exercise);
    }

    removeExerciseFromCarousel(carouselItem) {
        this.carouselSlides.removeChild(carouselItem);
        const itemId = carouselItem.id.split("-")[2];
        const navItem = document.querySelector(`.carousel-nav a[href="#carousel-item-${itemId}"]`);
        this.carouselNav.removeChild(navItem);

        // Remove the exercise from the storedExercises array
        const exerciseName = carouselItem.querySelector('.carousel-item-title').innerText;
        const exerciseIndex = this.storedExercises.findIndex((exercise) => exercise.name === exerciseName);
        this.storedExercises.splice(exerciseIndex, 1);
        if (this.carouselSlides.children.length === 0) {
            this.container.querySelector(".carousel").style.display = "none";  // Hide the carousel when all exercises are removed
        }
        return this.storedExercises[exerciseIndex - 1];
    }
};


export default Carousel;
