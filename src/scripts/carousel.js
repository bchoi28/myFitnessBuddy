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
        newNavItem.dataset.exerciseName = exercise.name;
        this.carouselNav.appendChild(newNavItem);

        newNavItem.addEventListener('click', (event) => {
            debugger
            const exerciseName = event.target.dataset.exerciseName;
            const updatedExercise = this.storedExercises.find(exercise => exercise.name === exerciseName);
            if (updatedExercise) {
                displayExerciseInfo(updatedExercise);
            }
            const navItems = Array.from(document.querySelectorAll('.carousel-nav a'));
            navItems.forEach((navItem) => navItem.classList.remove('active'));
            event.target.classList.add('active');
        });

        // closeButton.addEventListener('click', () => {
        //     const nextExercise = this.removeExerciseFromCarousel(carouselItem);
        //     removeExerciseFromInfoContainer(nextExercise);

        //     // Set the active class on the next navigation item (assuming you're showing the next item in the carousel)
        //     // const nextNavItem = this.carouselNav.querySelector('a.active');
        //     // if (nextNavItem) nextNavItem.classList.remove('active');
        //     // const newActiveNavItem = this.carouselNav.querySelector(`a[href="#${carouselItem.nextElementSibling.id}"]`);
        //     // if (newActiveNavItem) newActiveNavItem.classList.add('active');
        // });
        // closeButton.addEventListener('click', () => {
        //     // Determine the next active carousel item before removal
        //     let nextActiveCarouselItem = carouselItem.nextElementSibling || carouselItem.previousElementSibling;

        //     // Remove the current carousel item
        //     const nextExercise = this.removeExerciseFromCarousel(carouselItem);
        //     removeExerciseFromInfoContainer(nextExercise);

        //     // Set the active class on the next navigation item
        //     if (nextActiveCarouselItem) {
        //         nextActiveCarouselItem.classList.add('active'); // Make sure you've logic elsewhere to remove active class from other carousel items
        //         const nextActiveCarouselItemId = nextActiveCarouselItem.id.split("-")[2];
        //         const nextActiveNavItem = this.carouselNav.querySelector(`a[href="#carousel-item-${nextActiveCarouselItemId}"]`);
        //         if (nextActiveNavItem) {
        //             nextActiveNavItem.classList.add('active');
        //         }
        //     }
        // });

        closeButton.addEventListener('click', () => {
            // Determine the next active carousel item before removal
            let nextActiveCarouselItem = carouselItem.nextElementSibling || carouselItem.previousElementSibling;

            // Clear active class from all carousel items
            const allCarouselItems = this.carouselSlides.querySelectorAll('.carousel-item');
            allCarouselItems.forEach(item => item.classList.remove('active'));

            // Clear active class from all navigation items
            const allNavItems = this.carouselNav.querySelectorAll('a');
            allNavItems.forEach(item => item.classList.remove('active'));

            // Remove the current carousel item
            const nextExercise = this.removeExerciseFromCarousel(carouselItem);
            removeExerciseFromInfoContainer(nextExercise);

            // Set the active class on the next navigation item
            if (nextActiveCarouselItem) {
                nextActiveCarouselItem.classList.add('active');
                const nextActiveCarouselItemId = nextActiveCarouselItem.id.split("-")[2];
                const nextActiveNavItem = this.carouselNav.querySelector(`a[href="#carousel-item-${nextActiveCarouselItemId}"]`);
                if (nextActiveNavItem) {
                    nextActiveNavItem.classList.add('active');
                }
            }
        });


        debugger
        this.storedExercises.push(exercise);
    }

    removeExerciseFromCarousel(carouselItem) {

        const itemId = carouselItem.id.split("-")[2];
        const navItem = document.querySelector(`.carousel-nav a[href="#carousel-item-${itemId}"]`);
        this.carouselNav.removeChild(navItem);
        this.carouselSlides.removeChild(carouselItem);

        // Remove the exercise from the storedExercises array
        const exerciseName = carouselItem.querySelector('.carousel-item-title').innerText;
        const exerciseIndex = this.storedExercises.findIndex((exercise) => exercise.name === exerciseName);
        this.storedExercises.splice(exerciseIndex, 1);

        if (this.carouselSlides.children.length === 0) {
            this.container.querySelector(".carousel").style.display = "none";  // Hide the carousel when all exercises are removed
        }
        // Determine which exercise to return based on the current index
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
            navItem.classList.remove('active');  // Reset active class
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


    updateStoredExercise(updatedExercise) {
        debugger
        // Find the index of the exercise that matches the name of updatedExercise
        const index = this.storedExercises.findIndex(exercise => exercise.name === updatedExercise.name);
        if (index !== -1) {
            this.storedExercises[index] = updatedExercise;
        }
    }
};


export default Carousel;
