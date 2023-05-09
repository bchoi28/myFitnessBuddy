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
        name: 'Bench Press',
        primaryMuscles: ['Pectoralis Major'],
        secondaryMuscles: ['Triceps', 'Deltoids'],
        suggestedRepRange: '8-12 reps'
    },
    {
        type: 'CHEST',
        name: 'Push-Ups',
        primaryMuscles: ['Pectoralis Major'],
        secondaryMuscles: ['Triceps', 'Deltoids'],
        suggestedRepRange: '10-15 reps'
    },
    {
        type: 'CHEST',
        name: 'Dumbbell Fly',
        primaryMuscles: ['Pectoralis Major'],
        secondaryMuscles: ['Anterior Deltoids', 'Triceps'],
        suggestedRepRange: '12-15 reps'
    },
    {
        type: 'CHEST',
        name: 'Incline Bench Press',
        primaryMuscles: ['Upper Pectoralis Major'],
        secondaryMuscles: ['Anterior Deltoids', 'Triceps'],
        suggestedRepRange: '8-12 reps'
    },
    {
        type: 'CHEST',
        name: 'Cable Crossover',
        primaryMuscles: ['Pectoralis Major'],
        secondaryMuscles: ['Anterior Deltoids', 'Triceps'],
        suggestedRepRange: '10-15 reps'
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

const generateExercise = (muscleBlock, muscleMapInstance, carouselInstance) => {
    const exercisesByMuscleBlock = exercises[muscleBlock.classList[0]]; // Get exercises for the muscle block class
    const randomIndex = Math.floor(Math.random() * exercisesByMuscleBlock.length); // Get a random index from the exercises array
    const exercise = exercisesByMuscleBlock[randomIndex]; // Get the exercise at the random index
    const exerciseTitle = document.querySelector('.exercise-title');
    const exerciseInfoContainer = document.querySelector('.exercise-info-container');
    exerciseTitle.textContent = exercise.name;

    const exerciseDisplay = document.createElement('h2');
    exerciseDisplay.classList.add('exercise-display');
    exerciseDisplay.innerText = exercise.type;

    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.innerText = 'X';
    closeButton.addEventListener('click', () => {
        exerciseDisplay.remove();
        muscleMapInstance.exerciseCount--;
    });

    exerciseDisplay.append(closeButton);

    const exerciseInfo = document.createElement('div');
    exerciseInfo.classList.add('exercise-info');

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

    exerciseInfoContainer.append(exerciseDisplay);
    exerciseDisplay.append(exerciseInfo);
    exerciseInfo.append(primaryMusclesTitle);
    exerciseInfo.append(primaryMuscles);
    exerciseInfo.append(secondaryMusclesTitle);
    exerciseInfo.append(secondaryMuscles);

    carouselInstance.addExerciseToCarousel(exercise);
}

export default generateExercise;
export { exercises };