<p align="center">
  <a href="https://bchoi28.github.io/myFitnessBuddy">
  <img src="assets/images/myFitnessBuddy-title.png" alt="logo" />
  </a>  
</p>

[myFitnessBuddy](https://bchoi28.github.io/myFitnessBuddy/), a single-page, web application, developed with only vanilla javascript, can serve as your personal workout routine generator. 

## MVP Features

With myFitnessBuddy, users are able to:
- Choose any clickable muscle region on Buddy which generates a random exercise for that region.
- View exercise instructions, primary/secondary musculature involved, and animated demonstration.
- Click a goal for that exercise which displays the recommended rep range for that goal.
- Select and deselect up to 4 exercises which are stored in a carousel.

## Main Wireframe

![myFitnessBuddy_wireframe](/assets/images/wireframe.png)

## App Demo

![demo](/assets/images/myFitnessBuddy_demo.gif)

```javascript
// carousel.js
  render() {
    // ...

    // Add a single eventListener to the carouselNav instead of each newNavItem.
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

    // ...
  };

  addExerciseToCarousel(exercise) {
    // ...

    closeButton.addEventListener('click', () => {
      this.deactivateNavItems();
      
      // Find the next carousel item in the DOM. If there isn't one, fallback to the previous item.
      let nextActiveCarouselItem = carouselItem.nextElementSibling || carouselItem.previousElementSibling;
      const nextExercise = this.removeExerciseFromCarousel(carouselItem);
      removeExerciseFromInfoContainer(nextExercise);
      
      if (nextActiveCarouselItem) {
          const nextActiveCarouselItemId = nextActiveCarouselItem.id.split("-")[2];
          // Find the corresponding navigation item using the extracted ID.
          const nextActiveNavItem = this.carouselNav.querySelector(`a[href="#carousel-item-${nextActiveCarouselItemId}"]`);
          if (nextActiveNavItem) {
              nextActiveNavItem.classList.add('active');
          }
      }
    });

    // ...
  }

```




## Technologies

* Languages: JavaScript, HTML5, CSS3
* API: [ExerciseDB](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb) (for fetching GIFs)
* Hosting: GitHub

## Future Functionalities

- Ability to save exercise routines via localStorage
- Nav-bar with muscle names as alternate method for exercise generation
- Primary/secondary musculature re: displayed exercise highlighted on Buddy

## About Me

<p align="left">
  <a href="https://linkedin.com/in/brandonchoi28">
    <img src='assets/images/developer.jpeg' width=100 alt="developer" align="left"/>
    </a>  
</p>
I am a fullstack software engineer proficient in JS/Ruby with a strong interest in creating seamless and intuitive user experiences. 
As a former Physical Therapist, I have redirected my passion for helping others and attention to detail towards the field of software engineering.
Connect with me on <a href="https://linkedin.com/in/brandonchoi28">LinkedIn!</a>
