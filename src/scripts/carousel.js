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

        // add a single eventListener to the carouselNav instead of each newNavItem
        this.carouselNav.addEventListener('click', (e) => {
            const clickedNavItem = e.target;
            if (clickedNavItem.tagName === 'A') {
                const exerciseName = clickedNavItem.dataset.exerciseName;
                const updatedExercise = this.storedExercises.find(exercise => exercise.name === exerciseName);
                displayExerciseInfo(updatedExercise);

                this.deactivateNavItems();
                clickedNavItem.classList.add('active');
            }
        });

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

        this.deactivateNavItems();
        newNavItem.classList.add('active');

        newNavItem.href = `#carousel-item-${numItems}`;
        newNavItem.textContent = numItems.toString();
        newNavItem.dataset.exerciseName = exercise.name;
        this.carouselNav.appendChild(newNavItem);

        // newNavItem.addEventListener('click', (event) => {
        //     const exerciseName = event.target.dataset.exerciseName;
        //     const updatedExercise = this.storedExercises.find(exercise => exercise.name === exerciseName);
        //     if (updatedExercise) {
        //         displayExerciseInfo(updatedExercise);
        //     }
        //     this.deactivateNavItems();
        //     event.target.classList.add('active');
        // });

        closeButton.addEventListener('click', () => {
            this.deactivateNavItems();

            let nextActiveCarouselItem = carouselItem.nextElementSibling || carouselItem.previousElementSibling;
            const nextExercise = this.removeExerciseFromCarousel(carouselItem);
            removeExerciseFromInfoContainer(nextExercise);

            if (nextActiveCarouselItem) {
                const nextActiveCarouselItemId = nextActiveCarouselItem.id.split("-")[2];
                const nextActiveNavItem = this.carouselNav.querySelector(`a[href="#carousel-item-${nextActiveCarouselItemId}"]`);
                if (nextActiveNavItem) {
                    nextActiveNavItem.classList.add('active');
                }
            }
        });

        this.storedExercises.push(exercise);
    }

    removeExerciseFromCarousel(carouselItem) {

        const itemId = carouselItem.id.split("-")[2];
        const navItem = document.querySelector(`.carousel-nav a[href="#carousel-item-${itemId}"]`);
        this.carouselNav.removeChild(navItem);
        this.carouselSlides.removeChild(carouselItem);

        const exerciseName = carouselItem.querySelector('.carousel-item-title').innerText;
        const exerciseIndex = this.storedExercises.findIndex((exercise) => exercise.name === exerciseName);
        this.storedExercises.splice(exerciseIndex, 1);

        if (this.carouselSlides.children.length === 0) {
            this.container.querySelector(".carousel").style.display = "none";  // Hide the carousel when all exercises are removed
        }
        let nextExerciseIndex = exerciseIndex;
        if (nextExerciseIndex >= this.storedExercises.length) {
            nextExerciseIndex = this.storedExercises.length - 1;  // If we've removed the last exercise, take the one before it
        }

        this.renumberCarouselItemsAndNavItems();

        return this.storedExercises[nextExerciseIndex];
    }

    renumberCarouselItemsAndNavItems() {
        const carouselItems = Array.from(this.carouselSlides.children);
        const navItems = Array.from(this.carouselNav.querySelectorAll('a'));

        carouselItems.forEach((item, index) => {
            item.id = `carousel-item-${index + 1}`;
            const navItem = navItems[index];
            navItem.href = `#carousel-item-${index + 1}`;
            navItem.textContent = (index + 1).toString();
            navItem.classList.remove('active');
        });

        const activeCarouselItem = this.carouselSlides.querySelector('.carousel-item.active');
        if (activeCarouselItem) {
            const activeItemId = activeCarouselItem.id.split("-")[2];
            const activeNavItem = this.carouselNav.querySelector(`a[href="#carousel-item-${activeItemId}"]`);
            if (activeNavItem) {
                activeNavItem.classList.add('active');
            }
        }
    }

    // reset active navItem
    deactivateNavItems() {
        const activeNavItem = this.carouselNav.querySelector('.carousel-nav a.active');
        if (activeNavItem) activeNavItem.classList.remove('active');
    }

    updateStoredExercise(updatedExercise) {
        const index = this.storedExercises.findIndex(exercise => exercise.name === updatedExercise.name);
        if (index !== -1) {
            this.storedExercises[index] = updatedExercise;
        }
    }
};


export default Carousel;
