import { shoulderExercises, chestExercises, bicepExercises, tricepExercises, forearmExercises, coreExercises, backExercises, gluteExercises, quadExercises, hamstringExercises, calfExercises } from './data.js';

const exercises = {
    'chest': chestExercises,
    'left-shoulder': shoulderExercises,
    'right-shoulder': shoulderExercises,
    'left-bicep': bicepExercises,
    'right-bicep': bicepExercises,
    'left-tricep': tricepExercises,
    'right-tricep': tricepExercises,
    'left-forearm': forearmExercises,
    'right-forearm': forearmExercises,
    'abs': coreExercises,
    'back-2': backExercises,
    'left-glute-2': gluteExercises,
    'right-glute-2': gluteExercises,
    'left-quad': quadExercises,
    'right-quad': quadExercises,
    'left-hamstring': hamstringExercises,
    'right-hamstring': hamstringExercises,
    'left-calf': calfExercises,
    'right-calf': calfExercises
};

const generateExercise = async (muscleBlock, carouselInstance) => {

    const exercisesByMuscleBlock = exercises[muscleBlock.classList[0]];
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

    const exerciseInfoContainer = document.querySelector('.exercise-info-container');
    while (exerciseInfoContainer.firstChild) {
        exerciseInfoContainer.removeChild(exerciseInfoContainer.firstChild);
    };

    const gifContainer = document.querySelector('.gif-container');
    if (gifContainer.firstChild) {
        gifContainer.removeChild(gifContainer.firstChild);
    };

    const loadingIndicator = document.createElement('div');
    loadingIndicator.classList.add('loading');
    loadingIndicator.innerText = "Fetching GIF...";
    gifContainer.appendChild(loadingIndicator);
    debugger

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
        carouselInstance.updateStoredExercise(exercise);
    });

    sizeButton.addEventListener('click', () => {
        toggleActiveButton(sizeButton);
        displayRecommendedRepRange('size');
        exercise.goal = 'size';
        carouselInstance.updateStoredExercise(exercise);
    });

    enduranceButton.addEventListener('click', () => {
        toggleActiveButton(enduranceButton);
        displayRecommendedRepRange('endurance');
        exercise.goal = 'endurance';
        carouselInstance.updateStoredExercise(exercise);
    });

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('goal-buttons-container');
    buttonsContainer.append(strengthButton, sizeButton, enduranceButton);
    const repRangeContainer = document.createElement('div');
    repRangeContainer.classList.add('rep-range');
    repRangeContainer.innerText = 'Choose a goal';


    const exerciseSteps = document.createElement('ul');
    exerciseSteps.classList.add('exercise-steps');
    exercise.steps.forEach((step) => {
        const exerciseStep = document.createElement('li');
        exerciseStep.classList.add('exercise-step');
        exerciseStep.innerText = `  ${step}`;
        exerciseSteps.appendChild(exerciseStep);
    });

    const exerciseTitle = document.createElement('div');
    exerciseTitle.classList.add('exercise-title');
    exerciseTitle.innerText = exercise.name;
    exerciseTitleContainer.append(exerciseTitle);

    instructionsContainer.appendChild(exerciseSteps);

    const exerciseInfo = document.createElement('div');
    exerciseInfo.classList.add('exercise-info');
    exerciseInfo.append(primaryMusclesTitle, primaryMuscles, secondaryMusclesTitle, secondaryMuscles, buttonsContainer, repRangeContainer);
    exerciseInfoContainer.appendChild(exerciseInfo);

    // create/append gif
    const gifImage = await fetchGif(exercise.gifName);
    const gif = document.createElement('img');
    gif.classList.add('gif');
    gif.alt = exercise.name;

    // const gifImage = await fetchGif(exercise.gifName);
    gif.src = gifImage;
    gifContainer.appendChild(gif);
    debugger
    loadingIndicator.remove();

    exercise.gifUrl = gifImage;
    carouselInstance.addExerciseToCarousel(exercise);
}

const displayRecommendedRepRange = (workoutType) => {
    let repRangeContainer = document.querySelector('.rep-range');

    // if (!repRangeContainer) {
    //     repRangeContainer = document.createElement('div');
    //     repRangeContainer.classList.add('rep-range');

    //     const exerciseInfo = document.querySelector('.exercise-info');
    //     exerciseInfo.appendChild(repRangeContainer);
    // } else {
    //     // repRangeContainer.innerText = '';
    //     repRangeContainer.innerText = 'Choose a goal';
    // }

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

        const exerciseInfoContainer = document.querySelector('.exercise-info-container');
        while (exerciseInfoContainer.firstChild) {
            exerciseInfoContainer.removeChild(exerciseInfoContainer.firstChild);
        };

        const gifContainer = document.querySelector('.gif-container');
        if (gifContainer.firstChild) {
            gifContainer.removeChild(gifContainer.firstChild);
        };
    }
};

const displayExerciseInfo = (exercise) => {

    const exerciseTitle = document.querySelector('.exercise-title');
    exerciseTitle.innerText = exercise.name;

    const instructionsContainer = document.querySelector('.instructions-container');
    instructionsContainer.removeChild(instructionsContainer.children[0]);
    const exerciseSteps = document.createElement('ul');
    exerciseSteps.classList.add('exercise-steps');
    exercise.steps.forEach((step) => {
        const exerciseStep = document.createElement('li');
        exerciseStep.classList.add('exercise-step');
        exerciseStep.innerText = step;
        exerciseSteps.appendChild(exerciseStep);
    });

    instructionsContainer.appendChild(exerciseSteps);

    const primaryMuscles = document.querySelector('.primary-muscles');
    primaryMuscles.innerText = `${exercise.primaryMuscles.join(" ")}`;
    const secondaryMuscles = document.querySelector('.secondary-muscles');
    secondaryMuscles.innerText = `${exercise.secondaryMuscles.join(" ")}`;

    const gifContainer = document.querySelector('.gif-container');
    if (gifContainer.firstChild) {
        gifContainer.removeChild(gifContainer.firstChild);
    };

    const goalButtons = document.querySelectorAll('.goal-button');
    goalButtons.forEach(button => button.classList.remove('active'));
    const button = document.querySelector(`.goal-button[data-goal="${exercise.goal}"]`);
    if (button) {
        button.classList.add('active');
        displayRecommendedRepRange(exercise.goal);
    } else {
        const repRangeElement = document.querySelector('.rep-range');
        if (repRangeElement) {
            repRangeElement.innerText = 'Choose a goal';
        }
    }

    const gif = document.createElement('img');
    gif.classList.add('gif');
    gif.src = exercise.gifUrl;
    gif.alt = exercise.name;
    gifContainer.appendChild(gif);
}

// const fetchSteps = async (exerciseName) => {
//     const encodedName = encodeURIComponent(exerciseName);
//     const url = `https://musclewiki.p.rapidapi.com/exercises?name=${encodedName}`;
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '3af8ef8f2dmshc6efeb993784441p1a7439jsn93b2667827e7',
//             'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com'
//         }
//     };
//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         const exercise = result[0];
//         return exercise.steps;
//     } catch (error) {
//         console.error(error);
//         return null;
//     }
// };


const fetchGif = async (exerciseName) => {
    const encodedName = encodeURIComponent(exerciseName);
    const url = `https://exercisedb.p.rapidapi.com/exercises/name/${encodedName}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '91cf2fc490mshc6c99117d33a2a2p1011c0jsnf2d0274cc698',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const gifUrl = result[0].gifUrl;
        return gifUrl;
    } catch (error) {
        console.error(error);
    }
}


export { generateExercise, removeExerciseFromInfoContainer, displayExerciseInfo };
