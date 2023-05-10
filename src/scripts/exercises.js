import { Carousel } from './carousel';

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

const generateExercise = async (muscleBlock, muscleMapInstance, carouselInstance) => {

    const exercisesByMuscleBlock = exercises[muscleBlock.classList[0]]; // Get exercises for the muscle block class

    let exercise;
    do {
        const randomIndex = Math.floor(Math.random() * exercisesByMuscleBlock.length);
        exercise = exercisesByMuscleBlock[randomIndex];
    } while (carouselInstance.sharedExercises.includes(exercise));

    // exercise.steps = steps;
    // const exerciseSteps = document.createElement('div');
    // exerciseSteps.classList.add('exercise-steps');
    // exerciseSteps.innerText = exercise.steps.join('\n');

    const exerciseTitle = document.querySelector('.exercise-title');
    const exerciseInfoContainer = document.querySelector('.exercise-info-container');
    exerciseTitle.textContent = exercise.name;

    const exerciseDisplay = document.createElement('div');
    exerciseDisplay.classList.add('exercise-display');

    // const closeButton = document.createElement('button');
    // closeButton.classList.add('close-button');
    // closeButton.innerText = 'X';
    // closeButton.addEventListener('click', () => {
    //     exerciseDisplay.remove();
    //     carouselInstance.removeExerciseFromInfoContainer(carouselItem);
    // });

    // exerciseDisplay.append(closeButton);

    const exerciseInfo1 = document.createElement('div');
    exerciseInfo1.classList.add('exercise-info');

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

    exerciseDisplay.append(exerciseInfo1);
    exerciseInfo1.append(primaryMusclesTitle);
    exerciseInfo1.append(primaryMuscles);
    exerciseInfo1.append(secondaryMusclesTitle);
    exerciseInfo1.append(secondaryMuscles);

    const steps = await fetchSteps(exercise.apiName);
    const exerciseSteps = document.createElement('ul');
    exerciseSteps.classList.add('exercise-steps');
    steps.forEach((step) => {
        const exerciseStep = document.createElement('li');
        exerciseStep.innerText = step;
        exerciseSteps.appendChild(exerciseStep);
    });
    exercise.steps = steps;

    const exerciseInfo2 = document.createElement('div');
    exerciseInfo2.classList.add('exercise-info');

    const instructionsDiv = document.createElement('div');
    instructionsDiv.classList.add('instructions-div');
    instructionsDiv.innerText = 'Instructions';

    exerciseInfo2.appendChild(instructionsDiv);
    exerciseInfo2.append(exerciseSteps);
    exerciseDisplay.append(exerciseInfo2);

    if (exerciseInfoContainer.childElementCount === 1) {
        exerciseInfoContainer.removeChild(exerciseInfoContainer.children[0]);
    }

    exerciseInfoContainer.append(exerciseDisplay);

    carouselInstance.addExerciseToCarousel(exercise);
}

const removeExerciseFromInfoContainer = (exercise) => {
    const exerciseInfoContainer = document.querySelector('.exercise-info-container');
    const exercises = Array.from(exerciseInfoContainer.children);
    const exerciseToRemove = exercises.find((ex) => ex.dataset.name === exercise.name);
    if (exerciseToRemove) {
        exerciseInfoContainer.removeChild(exerciseToRemove);
    }
};

const displayExerciseInfo = (exercise) => {

    const exerciseInfoContainer = document.querySelector('.exercise-info-container');
    exerciseInfoContainer.removeChild(exerciseInfoContainer.firstChild);

    const exerciseDisplay = document.createElement('div');
    exerciseDisplay.classList.add('exercise-display');

    // const closeButton = document.createElement('button');
    // closeButton.classList.add('close-button');
    // closeButton.innerText = 'X';
    // closeButton.addEventListener('click', () => {
    //     exerciseDisplay.remove();
    // });

    // exerciseDisplay.append(closeButton);

    const exerciseInfo1 = document.createElement('div');
    exerciseInfo1.classList.add('exercise-info');

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

    const exerciseSteps = document.createElement('ul');
    exerciseSteps.classList.add('exercise-steps');
    exercise.steps.forEach((step) => {
        const exerciseStep = document.createElement('li');
        exerciseStep.innerText = step;
        exerciseSteps.appendChild(exerciseStep);
    });

    const exerciseInfo2 = document.createElement('div');
    exerciseInfo2.classList.add('exercise-info');

    const instructionsDiv = document.createElement('div');
    instructionsDiv.classList.add('instructions-div');
    instructionsDiv.innerText = 'Instructions';

    exerciseDisplay.append(exerciseInfo1);
    exerciseInfo1.append(primaryMusclesTitle);
    exerciseInfo1.append(primaryMuscles);
    exerciseInfo1.append(secondaryMusclesTitle);
    exerciseInfo1.append(secondaryMuscles);

    exerciseDisplay.append(exerciseInfo2);
    exerciseInfo2.appendChild(instructionsDiv);
    exerciseInfo2.append(exerciseSteps);

    exerciseInfoContainer.append(exerciseDisplay);
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
