const exercises = {
    'chest': [
        {
            name: 'Bench Press',
            primaryMuscles: ['Pectoralis Major'],
            secondaryMuscles: ['Triceps', 'Deltoids'],
            suggestedRepRange: '8-12 reps'
        },
        {
            name: 'Push-Ups',
            primaryMuscles: ['Pectoralis Major'],
            secondaryMuscles: ['Triceps', 'Deltoids'],
            suggestedRepRange: '10-15 reps'
        },
        {
            name: 'Dumbbell Flyes',
            primaryMuscles: ['Pectoralis Major'],
            secondaryMuscles: ['Anterior Deltoids', 'Triceps'],
            suggestedRepRange: '12-15 reps'
        }
    ],
    'left-shoulder': [
        // Add exercises for left shoulder here
    ],
    'left-bicep': [
        // Add exercises for left bicep here
    ],
    // Add more muscle block keys and exercises as needed
};

function generateExercise(muscleBlock) {
    const exercisesByMuscleBlock = exercises[muscleBlock.classList[0]]; // Get exercises for the muscle block class
    const randomIndex = Math.floor(Math.random() * exercisesByMuscleBlock.length); // Get a random index from the exercises array
    const exercise = exercisesByMuscleBlock[randomIndex]; // Get the exercise at the random index
    const exerciseTitle = document.querySelector('.exercise-title');
    const exerciseInfoContainer = document.querySelector('.exercise-info-container');
    exerciseTitle.textContent = exercise.name;

    const exerciseInfoNum = document.createElement('h2');
    exerciseInfoNum.classList.add('exercise-info-num');
    exerciseInfoNum.innerText = 'Exercise 1';

    const exerciseInfo = document.createElement('div');
    exerciseInfo.classList.add('exercise-info');

    const primaryMusclesTitle = document.createElement('div');
    exerciseInfo.classList.add('primary-muscles-title');
    exerciseInfo.innerText = 'Primary Muscles';

    const primaryMuscles = document.createElement('div');
    primaryMuscles.classList.add('primary-muscles');
    primaryMuscles.innerText = `${exercise.primaryMuscles}`;

    exerciseInfoContainer.append(exerciseInfoNum);
    exerciseInfoNum.append(exerciseInfo);
    exerciseInfo.append(primaryMusclesTitle);
    exerciseInfo.append(primaryMuscles);
}

export default generateExercise;
export { exercises };