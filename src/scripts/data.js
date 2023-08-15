export const shoulderExercises = [
    {
        type: 'SHOULDERS',
        name: 'Seated Dumbbell Press',
        apiName: "Dumbbell Neutral Overhead Press",
        primaryMuscles: ['Anterior Deltoids'],
        secondaryMuscles: ['Lateral Deltoids', 'Triceps'],
        suggestedRepRange: '8-12 reps',
        gifUrl: "https://api.exercisedb.io/image/TfvFzAjFktX0mk"
    },
    {
        type: 'SHOULDERS',
        name: 'Arnold Press',
        apiName: "Dumbbell Seated Arnold Press",
        primaryMuscles: ['Anterior and Lateral Deltoids'],
        secondaryMuscles: ['Triceps'],
        suggestedRepRange: '10-15 reps',
        gifUrl: "https://api.exercisedb.io/image/yj8v4s87LiY57Y"
    },
    {
        type: 'SHOULDERS',
        name: 'Dumbbell Lateral Raise',
        apiName: "Dumbbell Lateral Raise",
        primaryMuscles: ['Lateral Deltoids'],
        secondaryMuscles: ['Anterior and Posterior Deltoids'],
        suggestedRepRange: '12-15 reps',
        gifUrl: "https://api.exercisedb.io/image/e7O-I9hVe4D9mN"
    },
    {
        type: 'SHOULDERS',
        name: 'Dumbbell Front Raise',
        apiName: "Dumbbell Front Raise",
        primaryMuscles: ['Anterior Deltoids'],
        secondaryMuscles: ['Lateral Deltoids'],
        suggestedRepRange: '8-12 reps',
        gifUrl: "https://api.exercisedb.io/image/byZGzxCpG0CDVH"
    },
    {
        type: 'SHOULDERS',
        name: 'Reverse Fly',
        apiName: "Dumbbell Laying Reverse Fly",
        primaryMuscles: ['Posterior Deltoids'],
        secondaryMuscles: ['Trapezius', 'Rhomboids'],
        suggestedRepRange: '10-15 reps',
        gifUrl: "https://api.exercisedb.io/image/t6GtGbr8C87HgB"
    }
];

export const chestExercises = [
    {
        type: 'CHEST',
        name: 'Barbell Bench Press',
        gifName: 'barbell bench press',
        primaryMuscles: ['Pectoralis Major'],
        secondaryMuscles: ['Triceps', 'Deltoids'],
        steps: [
            "Lay flat on the bench with your feet on the ground. With straight arms unrack the bar.",
            "Lower the bar to your mid chest",
            "Raise the bar until you've locked your elbows."
        ]
    },
    {
        type: 'CHEST',
        name: 'Push-Ups',
        gifName: "deep push up",
        primaryMuscles: ['Pectoralis Major'],
        secondaryMuscles: ['Triceps', 'Deltoids'],
        steps: [
            "Place your hands firmly on the ground, directly under shoulders.",
            "Flatten your back so your entire body is straight and slowly lower your body",
            "Draw shoulder blades back and down, keeping elbows tucked close to your body",
            "Exhale as you push back to the starting position."
        ]
    },
    {
        type: 'CHEST',
        name: 'Dumbbell Fly',
        gifName: "dumbbell fly",
        primaryMuscles: ['Pectoralis Major'],
        secondaryMuscles: ['Anterior Deltoids', 'Triceps'],
        steps: [
            "Lay flat on the bench and place your feet on the ground.",
            "Begin the exercise with the dumbbells held together above your chest, elbows slightly bent.",
            "Simultaneously lower the weights to either side.",
            "Pause when the weights are parallel to the bench, then raise your arms to the starting position."
        ]
    },
    // {
    //     type: 'CHEST',
    //     name: 'Incline Bench Press',
    //     apiName: "Barbell Incline Bench Press",
    //     primaryMuscles: ['Upper Pectoralis Major'],
    //     secondaryMuscles: ['Anterior Deltoids', 'Triceps'],
    //     suggestedRepRange: '8-12 reps',
    //     gifUrl: "https://api.exercisedb.io/image/LEHuMI0sJlp8p7"
    // },
    {
        type: 'CHEST',
        name: 'Cable Crossover',
        gifName: 'cable standing fly',
        primaryMuscles: ['Pectoralis Major'],
        secondaryMuscles: ['Anterior Deltoids', 'Triceps'],
        steps: [
            "Use a handle attachment set all the way to the bottom of the machine.",
            "Bring both of the handles to your chest and make sure you are in the center of the cable crossover.",
            "Walk a few steps forward.",
            "Then press the weight forward. From there, your shoulders should horizontally abduct and adduct while your elbows stay in a fixed position."
        ]
    }
];

export const bicepExercises = [
    {
        type: 'ARMS',
        name: 'Barbell Curl',
        apiName: "Barbell Curl",
        primaryMuscles: ['Biceps'],
        secondaryMuscles: ['Forearms'],
        suggestedRepRange: '8-12 reps',
        gifUrl: "https://api.exercisedb.io/image/xIdtvDMsR5y7fR"
    },
    {
        type: 'ARMS',
        name: 'Dumbbell Curl',
        apiName: "Dumbbell Curl",
        primaryMuscles: ['Biceps'],
        secondaryMuscles: ['Forearms'],
        suggestedRepRange: '10-15 reps',
        gifUrl: "https://api.exercisedb.io/image/DqOMqS4IvguNzu"
    },
    {
        type: 'ARMS',
        name: 'Preacher Curl',
        apiName: "Dumbbell Single Arm Preacher Curl",
        primaryMuscles: ['Biceps'],
        secondaryMuscles: ['Forearms'],
        suggestedRepRange: '10-12 reps',
        gifUrl: "https://api.exercisedb.io/image/jheZVO6g5uhx1v"
    }
];