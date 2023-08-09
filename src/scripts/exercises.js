
const shoulderExercises = [
    {
        type: 'SHOULDERS',
        name: 'Seated Dumbbell Press',
        primaryMuscles: ['Anterior Deltoids'],
        secondaryMuscles: ['Lateral Deltoids', 'Triceps'],
        suggestedRepRange: '8-12 reps'
    },
    {
        type: 'SHOULDERS',
        name: 'Arnold Press',
        primaryMuscles: ['Anterior and Lateral Deltoids'],
        secondaryMuscles: ['Triceps'],
        suggestedRepRange: '10-15 reps'
    },
    {
        type: 'SHOULDERS',
        name: 'Dumbbell Lateral Raise',
        primaryMuscles: ['Lateral Deltoids'],
        secondaryMuscles: ['Anterior and Posterior Deltoids'],
        suggestedRepRange: '12-15 reps'
    },
    {
        type: 'SHOULDERS',
        name: 'Front Dumbbell Raise',
        primaryMuscles: ['Anterior Deltoids'],
        secondaryMuscles: ['Lateral Deltoids'],
        suggestedRepRange: '8-12 reps'
    },
    {
        type: 'SHOULDERS',
        name: 'Reverse Fly',
        primaryMuscles: ['Posterior Deltoids'],
        secondaryMuscles: ['Trapezius', 'Rhomboids'],
        suggestedRepRange: '10-15 reps'
    }
];

const chestExercises = [
    {
        type: 'CHEST',
        name: 'Barbell Bench Press',
        apiName: 'Barbell Bench Press', //MuscleWiki API
        primaryMuscles: ['Pectoralis Major'],
        secondaryMuscles: ['Triceps', 'Deltoids'],
        suggestedRepRange: '8-12 reps',
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0025.gif" //ExerciseDB API
    },
    {
        type: 'CHEST',
        name: 'Push-Ups',
        apiName: "Push Up",
        primaryMuscles: ['Pectoralis Major'],
        secondaryMuscles: ['Triceps', 'Deltoids'],
        suggestedRepRange: '10-15 reps',
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0662.gif"
    },
    {
        type: 'CHEST',
        name: 'Dumbbell Fly',
        apiName: "Dumbbell Chest Fly",
        primaryMuscles: ['Pectoralis Major'],
        secondaryMuscles: ['Anterior Deltoids', 'Triceps'],
        suggestedRepRange: '12-15 reps',
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0308.gif"
    },
    {
        type: 'CHEST',
        name: 'Incline Bench Press',
        apiName: "Barbell Incline Bench Press",
        primaryMuscles: ['Upper Pectoralis Major'],
        secondaryMuscles: ['Anterior Deltoids', 'Triceps'],
        suggestedRepRange: '8-12 reps',
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0047.gif"
    },
    {
        type: 'CHEST',
        name: 'Cable Crossover',
        apiName: 'Cable Pec Fly',
        primaryMuscles: ['Pectoralis Major'],
        secondaryMuscles: ['Anterior Deltoids', 'Triceps'],
        suggestedRepRange: '10-15 reps',
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1269.gif"
    }
];

const bicepExercises = [
    {
        type: 'ARMS',
        name: 'Barbell Curl',
        primaryMuscles: ['Biceps'],
        secondaryMuscles: ['Forearms'],
        suggestedRepRange: '8-12 reps'
    },
    {
        type: 'ARMS',
        name: 'Dumbbell Curl',
        primaryMuscles: ['Biceps'],
        secondaryMuscles: ['Forearms'],
        suggestedRepRange: '10-15 reps'
    },
    {
        type: 'ARMS',
        name: 'Preacher Curl',
        primaryMuscles: ['Biceps'],
        secondaryMuscles: ['Forearms'],
        suggestedRepRange: '10-12 reps'
    },
    {
        type: 'ARMS',
        name: 'Concentration Curl',
        primaryMuscles: ['Biceps'],
        secondaryMuscles: ['Forearms'],
        suggestedRepRange: '12-15 reps'
    },
    {
        type: 'ARMS',
        name: 'Hammer Curl',
        primaryMuscles: ['Biceps', 'Brachialis'],
        secondaryMuscles: ['Forearms'],
        suggestedRepRange: '10-12 reps'
    }
];

const exercises = {
    'chest': chestExercises,
    'left-shoulder': shoulderExercises,
    'right-shoulder': shoulderExercises,
    'left-bicep': bicepExercises,
    'right-bicep': bicepExercises,
};

const generateExercise = async (muscleBlock, carouselInstance) => {

    const exercisesByMuscleBlock = exercises[muscleBlock.classList[0]]; // Get exercises for the muscle block class

    // keep assigning an exercise until it's NOT in storedExercises
    let exercise;
    do {
        const randomIndex = Math.floor(Math.random() * exercisesByMuscleBlock.length);
        exercise = exercisesByMuscleBlock[randomIndex];
    } while (carouselInstance.storedExercises.includes(exercise));


    // check if anything exists on the R side
    const instructionsContainer = document.querySelector('.instructions-container');
    while (instructionsContainer.firstChild) {
        instructionsContainer.removeChild(instructionsContainer.firstChild)
    };

    const exerciseInfo = document.querySelector('.exercise-info');
    while (exerciseInfo.firstChild) {
        exerciseInfo.removeChild(exerciseInfo.firstChild);
    };

    const gifContainer = document.querySelector('.gif-container');
    if (gifContainer.firstChild) {
        gifContainer.removeChild(gifContainer.firstChild);
    };

    const exerciseTitleContainer = document.querySelector('.exercise-title-container');
    if (exerciseTitleContainer.firstChild) {
        exerciseTitleContainer.removeChild(exerciseTitleContainer.firstChild);
    }

    // create/append exerciseInfo
    const primaryMusclesTitle = document.createElement('div');
    primaryMusclesTitle.classList.add('primary-muscles-title');
    primaryMusclesTitle.innerText = 'Primary Muscles';

    const primaryMuscles = document.createElement('div');
    primaryMuscles.classList.add('primary-muscles');
    primaryMuscles.innerText = `${exercise.primaryMuscles.join(" ")}`;

    const secondaryMusclesTitle = document.createElement('div');
    secondaryMusclesTitle.classList.add('secondary-muscles-title');
    secondaryMusclesTitle.innerText = 'Secondary Muscles';

    const secondaryMuscles = document.createElement('div');
    secondaryMuscles.classList.add('secondary-muscles');
    secondaryMuscles.innerText = `${exercise.secondaryMuscles.join(", ")}`;

    // add three buttons in a row: strength, size, endurance
    // depending on which one the user clicks, underneath an element is created with
    // the recommended rep range for that button.

    const strengthButton = document.createElement('button');
    strengthButton.classList.add('goal-button')
    strengthButton.innerText = 'Strength';
    strengthButton.dataset.goal = 'strength';

    const sizeButton = document.createElement('button');
    sizeButton.classList.add('goal-button')
    sizeButton.innerText = 'Size';
    sizeButton.dataset.goal = 'size';

    const enduranceButton = document.createElement('button');
    enduranceButton.classList.add('goal-button')
    enduranceButton.innerText = 'Endurance';
    enduranceButton.dataset.goal = 'endurance';


    strengthButton.addEventListener('click', () => {
        toggleActiveButton(strengthButton);
        displayRecommendedRepRange('strength');
        exercise.goal = 'strength';
        exercise.repRange = '4-6 reps';
    });

    sizeButton.addEventListener('click', () => {
        toggleActiveButton(sizeButton);
        displayRecommendedRepRange('size');
        exercise.goal = 'size';
        exercise.repRange = '8-12 reps';
    });

    enduranceButton.addEventListener('click', () => {
        toggleActiveButton(enduranceButton);
        displayRecommendedRepRange('endurance');
        exercise.goal = 'endurance';
        exercise.repRange = '15-20 reps';
    });

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('goal-buttons-container');
    buttonsContainer.append(strengthButton, sizeButton, enduranceButton);

    exerciseInfo.append(primaryMusclesTitle, primaryMuscles, secondaryMusclesTitle, secondaryMuscles, buttonsContainer);


    // create/append gif
    const gif = document.createElement('img');
    gif.classList.add('gif');
    gif.src = exercise.gifUrl;
    gif.alt = exercise.name;
    gifContainer.appendChild(gif);

    // create/append instructions
    const steps = await fetchSteps(exercise.apiName);
    exercise.steps = steps;
    const exerciseSteps = document.createElement('ul');
    exerciseSteps.classList.add('exercise-steps');
    steps.forEach((step) => {
        const exerciseStep = document.createElement('li');
        exerciseStep.classList.add('exercise-step');
        exerciseStep.innerText = `  ${step}`;
        exerciseSteps.appendChild(exerciseStep);
    });

    // exerciseTitle.style.display = 'flex';
    const exerciseTitle = document.createElement('div');
    exerciseTitle.classList.add('exercise-title');
    exerciseTitle.innerText = exercise.name;
    exerciseTitleContainer.append(exerciseTitle);

    const instructionsExerciseTitle = document.createElement('div');
    instructionsExerciseTitle.classList.add('instructions-exercise-title');
    instructionsExerciseTitle.innerText = 'Instructions';

    instructionsContainer.appendChild(instructionsExerciseTitle);
    instructionsContainer.appendChild(exerciseSteps);

    carouselInstance.addExerciseToCarousel(exercise);

    // const closeButton = document.createElement('button');
    // closeButton.classList.add('close-button');
    // closeButton.innerText = 'X';
    // closeButton.addEventListener('click', () => {
    //     exerciseDisplay.remove();
    //     carouselInstance.removeExerciseFromInfoContainer(carouselItem);
    // });

    // exerciseDisplay.append(closeButton);
}

const displayRecommendedRepRange = (workoutType) => {
    let repRangeContainer = document.querySelector('.rep-range');

    if (!repRangeContainer) {
        repRangeContainer = document.createElement('div');
        repRangeContainer.classList.add('rep-range');

        // Append the rep range container to the exercise info container
        const exerciseInfo = document.querySelector('.exercise-info');
        exerciseInfo.appendChild(repRangeContainer);
    } else {
        repRangeContainer.innerText = ''; // Clear the existing inner text
    }

    let repRange;
    if (workoutType === 'strength') {
        repRange = '4-6 reps';
    } else if (workoutType === 'size') {
        repRange = '8-12 reps';
    } else if (workoutType === 'endurance') {
        repRange = '15-20 reps';
    }

    repRangeContainer.innerText = repRange;
};

const toggleActiveButton = (clickedButton) => {
    const buttons = Array.from(document.querySelectorAll('.goal-button'));
    buttons.forEach((button) => {
        if (button === clickedButton) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

const removeExerciseFromInfoContainer = (nextExercise) => {
    if (nextExercise) displayExerciseInfo(nextExercise);
    else {
        const exerciseTitle = document.querySelector('.exercise-title');
        exerciseTitle.innerText = "";
        exerciseTitle.style.display = 'none';

        const instructionsContainer = document.querySelector('.instructions-container');
        while (instructionsContainer.firstChild) {
            instructionsContainer.removeChild(instructionsContainer.firstChild)
        };

        const exerciseInfo = document.querySelector('.exercise-info');
        while (exerciseInfo.firstChild) {
            exerciseInfo.removeChild(exerciseInfo.firstChild);
        };

        const gifContainer = document.querySelector('.gif-container');
        if (gifContainer.firstChild) {
            gifContainer.removeChild(gifContainer.firstChild);
        };
    }
};

const displayExerciseInfo = (exercise) => {

    // change exercise name and remove appendages
    const exerciseTitle = document.querySelector('.exercise-title');
    exerciseTitle.innerText = exercise.name;

    const instructionsContainer = document.querySelector('.instructions-container');
    while (instructionsContainer.firstChild) {
        instructionsContainer.removeChild(instructionsContainer.firstChild)
    };

    const exerciseInfo = document.querySelector('.exercise-info');
    while (exerciseInfo.firstChild) {
        exerciseInfo.removeChild(exerciseInfo.firstChild);
    };

    const gifContainer = document.querySelector('.gif-container');
    if (gifContainer.firstChild) {
        gifContainer.removeChild(gifContainer.firstChild);
    };

    // const closeButton = document.createElement('button');
    // closeButton.classList.add('close-button');
    // closeButton.innerText = 'X';
    // closeButton.addEventListener('click', () => {
    //     exerciseDisplay.remove();
    // });

    // exerciseDisplay.append(closeButton);


    // rebuild exercise info
    const primaryMusclesTitle = document.createElement('div');
    primaryMusclesTitle.classList.add('primary-muscles-title');
    primaryMusclesTitle.innerText = 'Primary Muscles';

    const primaryMuscles = document.createElement('div');
    primaryMuscles.classList.add('primary-muscles');
    primaryMuscles.innerText = `${exercise.primaryMuscles.join(" ")}`;

    const secondaryMusclesTitle = document.createElement('div');
    secondaryMusclesTitle.classList.add('secondary-muscles-title');
    secondaryMusclesTitle.innerText = 'Secondary Muscles';

    const secondaryMuscles = document.createElement('div');
    secondaryMuscles.classList.add('secondary-muscles');
    secondaryMuscles.innerText = `${exercise.secondaryMuscles.join(", ")}`;

    const strengthButton = document.createElement('button');
    strengthButton.classList.add('goal-button')
    strengthButton.innerText = 'Strength';
    strengthButton.dataset.goal = 'strength';

    const sizeButton = document.createElement('button');
    sizeButton.classList.add('goal-button')
    sizeButton.innerText = 'Size';
    sizeButton.dataset.goal = 'size';

    const enduranceButton = document.createElement('button');
    enduranceButton.classList.add('goal-button')
    enduranceButton.innerText = 'Endurance';
    enduranceButton.dataset.goal = 'endurance';

    strengthButton.addEventListener('click', () => {
        toggleActiveButton(strengthButton);
        displayRecommendedRepRange('strength');
        exercise.goal = 'strength';
    });

    sizeButton.addEventListener('click', () => {
        toggleActiveButton(sizeButton);
        displayRecommendedRepRange('size');
        exercise.goal = 'size';
    });

    enduranceButton.addEventListener('click', () => {
        toggleActiveButton(enduranceButton);
        displayRecommendedRepRange('endurance');
        exercise.goal = 'endurance';
    });

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('goal-buttons-container');
    buttonsContainer.append(strengthButton, sizeButton, enduranceButton);

    exerciseInfo.append(primaryMusclesTitle, primaryMuscles, secondaryMusclesTitle, secondaryMuscles, buttonsContainer);

    const button = document.querySelector(`.goal-button[data-goal="${exercise.goal}"]`);
    button.classList.add('active');

    const repRangeContainer = document.createElement('div');
    repRangeContainer.classList.add('rep-range');
    repRangeContainer.innerText = exercise.repRange;
    exerciseInfo.appendChild(repRangeContainer);

    // rebuild instructions
    const exerciseSteps = document.createElement('ul');
    exerciseSteps.classList.add('exercise-steps');
    exercise.steps.forEach((step) => {
        const exerciseStep = document.createElement('li');
        exerciseStep.classList.add('exercise-step');
        exerciseStep.innerText = step;
        exerciseSteps.appendChild(exerciseStep);
    });

    const instructionsExerciseTitle = document.createElement('div');
    instructionsExerciseTitle.classList.add('instructions-exercise-title');
    instructionsExerciseTitle.innerText = 'Instructions';

    instructionsContainer.appendChild(instructionsExerciseTitle);
    instructionsContainer.appendChild(exerciseSteps);

    // rebuild gif
    const gif = document.createElement('img');
    gif.classList.add('gif');
    gif.src = exercise.gifUrl;
    gif.alt = exercise.name;
    gifContainer.appendChild(gif);
}

const fetchSteps = async (exerciseName) => {
    const encodedName = encodeURIComponent(exerciseName);
    const url = `https://musclewiki.p.rapidapi.com/exercises?name=${encodedName}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3af8ef8f2dmshc6efeb993784441p1a7439jsn93b2667827e7',
            'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const exercise = result[0];
        return exercise.steps;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export { generateExercise, removeExerciseFromInfoContainer, displayExerciseInfo };
