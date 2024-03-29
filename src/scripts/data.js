export const shoulderExercises = [
    {
        type: 'SHOULDERS',
        name: 'Seated Dumbbell Press',
        gifName: "dumbbell seated shoulder press",
        primaryMuscles: ['Anterior Deltoids'],
        secondaryMuscles: ['Lateral Deltoids', 'Triceps'],
        steps: [
            "Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward.",
            "Raise the dumbbells upwards and pause at the contracted position.",
            "Lower the weights back to starting position."
        ]
    },
    // {
    //     type: 'SHOULDERS',
    //     name: 'Arnold Press',
    //     apiName: "Dumbbell Seated Arnold Press",
    //     primaryMuscles: ['Anterior and Lateral Deltoids'],
    //     secondaryMuscles: ['Triceps'],
    //     suggestedRepRange: '10-15 reps',
    //     gifUrl: "https://api.exercisedb.io/image/yj8v4s87LiY57Y"
    // },
    {
        type: 'SHOULDERS',
        name: 'Dumbbell Lateral Raise',
        gifName: "dumbbell lateral raise",
        primaryMuscles: ['Lateral Deltoids'],
        secondaryMuscles: ['Anterior and Posterior Deltoids'],
        steps: [
            "Stand up straight with dumbbells at either side, palms facing your hips.",
            "Raise your arms on either side with a slight bend in your elbow until they are parallel with the floor. Pause at the top of the motion.",
            "Slowly return your arms down to starting position."
        ]

    },
    {
        type: 'SHOULDERS',
        name: 'Dumbbell Front Raise',
        gifName: "dumbbell front raise",
        primaryMuscles: ['Anterior Deltoids'],
        secondaryMuscles: ['Lateral Deltoids'],
        steps: [
            "Grab two dumbbells while standing upright with the dumbbells at your side.",
            "Raise the two dumbbells with your elbows being fully extended until the dumbbells are eye level.",
            "Lower the weights in a controlled manner to the starting position and repeat."
        ]

    },
    // {
    //     type: 'SHOULDERS',
    //     name: 'Reverse Fly',
    //     apiName: "Dumbbell Laying Reverse Fly",
    //     primaryMuscles: ['Posterior Deltoids'],
    //     secondaryMuscles: ['Trapezius', 'Rhomboids'],
    //     suggestedRepRange: '10-15 reps',
    //     gifUrl: "https://api.exercisedb.io/image/t6GtGbr8C87HgB"
    // }
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
        name: 'Cable Low Fly',
        gifName: 'cable low fly',
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
        type: 'UPPER ARMS',
        name: 'Barbell Curl',
        gifName: "barbell curl",
        primaryMuscles: ['Biceps Brachii'],
        secondaryMuscles: ['Brachialis', 'Brachioradialis'],
        steps: [
            "While holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out.",
            "Continue the movement until your biceps are fully contracted and the bar is at shoulder level.",
            "Hold the contracted position for a second and squeeze the biceps hard.",
            "Slowly bring the weight back down to the starting position."
        ]
    },
    {
        type: 'UPPER ARMS',
        name: 'Dumbbell Curl',
        gifName: "dumbbell alternate biceps curl",
        primaryMuscles: ['Biceps Brachii'],
        secondaryMuscles: ['Brachialis', 'Brachioradialis'],
        steps: [
            "Stand up straight with a dumbbell in each hand at arm's length.",
            "Raise one dumbbell and twist your forearm until it is vertical and your palm faces the shoulder.",
            "Lower to original position and repeat with opposite arm."
        ]
    },
    {
        type: 'UPPER ARMS',
        name: 'Preacher Curl',
        gifName: "dumbbell alternate preacher curl",
        primaryMuscles: ['Biceps Brachii'],
        secondaryMuscles: ['Brachialis', 'Brachioradialis'],
        steps: [
            "Start with a with a dumbbell in one hand and your elbow resting on the bench.",
            "From this starting position, curl the dumbbell up towards your shoulder, keeping your upper arm stationary on the bench."
        ]
    }
];

export const tricepExercises = [
    {
        type: 'UPPER ARMS',
        name: 'Cable Push Down',
        gifName: "cable pushdown",
        primaryMuscles: ['Triceps Brachii'],
        secondaryMuscles: ['Anconeus'],
        steps: [
            "You can use any attachment for this. The cable should be set all the way at the top of the machine.",
            "Make sure to keep your upper arm glued at your side. Extend your elbows until you feel your triceps contract."
        ]
    },
    {
        type: 'UPPER ARMS',
        name: 'Skull Crusher',
        gifName: "barbell lying triceps extension skull crusher",
        primaryMuscles: ['Triceps Brachii'],
        secondaryMuscles: ['Anconeus', 'Deltoids'],
        steps: [
            "Take a shoulder width grip. Break at the elbows. Try to keep your elbows tucked in. Don't let them flare out.",
            "Stop the bar a few inches from your forehead and extend your elbows back up."
        ]
    }
];

export const backExercises = [
    {
        type: 'BACK',
        name: 'Barbell Bent Over Row',
        gifName: "barbell bent over row",
        primaryMuscles: ['Latissimus Dorsi', 'Rhomboids', 'Trapezius'],
        secondaryMuscles: ['Biceps Brachii', 'Brachialis', 'Brachioradialis'],
        steps: [
            "Grab a barbell with a shoulder width pronated or supinated grip.",
            "Bend forward at your hips while maintaining a flat back.",
            "Pull the weight toward your upper abdomen.",
            "Lower the weight in a controlled manner and repeat."
        ]
    },
    {
        type: 'BACK',
        name: 'Lat Pulldown',
        gifName: "cable pulldown",
        primaryMuscles: ['Latissimus Dorsi'],
        secondaryMuscles: ['Rhomboids', 'Trapezius', 'Brachialis', 'Brachioradialis'],
        steps: [
            "Grip the bar with the palms facing forward, your hands need to be spaced out at a distance wider than shoulder width.",
            "As you have both arms extended in front of you holding the bar, bring your torso back around 30 degrees while sticking your chest out.",
            "Pull the bar down to about chin level or a little lower in a smooth movement whilst squeezing the shoulder blades together.",
            "After a second of squeezing, slowly raise the bar back to the starting position when your arms are fully extended."
        ]
    }
];

export const forearmExercises = [
    {
        type: 'LOWER ARMS',
        name: 'Seated Dumbbell Wrist Curl',
        gifName: "dumbbell seated palms up wrist curl",
        primaryMuscles: ['Flexor Carpi Radialis', 'Flexor Carpi Ulnaris'],
        secondaryMuscles: ['Flexor Digitorum Superficialis'],
        steps: [
            "Grip the dumbbell with your palm facing upwards with your forearm rested against the bench.",
            "Slowly curl your wrist upwards in a semicircular motion.",
            "Return to starting position and repeat."
        ]
    }
];

export const coreExercises = [
    {
        type: 'CORE',
        name: 'Barbell Rollouts',
        gifName: "barbell rollerout",
        primaryMuscles: ['Rectus Abdominis'],
        secondaryMuscles: ['Obliques', 'Transverse Abdominis', 'Erector Spinae'],
        steps: [
            "Hold the Barbell with both hands and kneel on the floor with your feet up",
            "Slowly roll the Barbell straight forward, stretching your body into a straight position.",
            "After a pause at the stretched position, start pulling yourself back to the starting position. This should be a slow and controlled movement."
        ]
    },
    {
        type: 'CORE',
        name: 'Crunches',
        gifName: "crunch floor",
        primaryMuscles: ['Rectus Abdominis'],
        secondaryMuscles: ['Obliques', 'Transverse Abdominis'],
        steps: [
            "Lay flat on your back with your knees bent and your feet flat on the ground, about a foot from your lower back.",
            "Place your fingertips on your temples with your palms facing out.",
            "Draw your belly into the base of your spine to engage the muscles, then raise your head and shoulders off the floor.",
            "Return to starting position and repeat."
        ]
    }
];

export const gluteExercises = [
    {
        type: 'GLUTES',
        name: 'Barbell Hip Thrust',
        gifName: "barbell glute bridge",
        primaryMuscles: ['Gluteus Maximus'],
        secondaryMuscles: ['Hamstrings', 'Core Stabilizers'],
        steps: [
            "Sit on the ground with a bench behind you. Have the barbell over your legs just above your hips.",
            "Lean back against the bench so that your shoulders are resting upon it, stretch your arms out to either side using the bench as support.",
            "Raise the weight by driving through your feet and extending your hips upwards. Support the weight with your shoulders and feet.",
            "Slowly extend as far as you can, and then slowly return to the starting position."
        ]
    },
    {
        type: 'GLUTES',
        name: 'Cable Pull Through',
        gifName: "cable pull through (with rope)",
        primaryMuscles: ['Gluteus Maximus'],
        secondaryMuscles: ['Hamstrings'],
        steps: [
            "This exercise works best with a rope attachment but can be done with anything. The attachment should be set to the bottom of the machine.",
            "Face away from the cable machine, straddle the cable itself, and grab the attachment. Walk a few steps away.",
            "Break at the hips while maintaining a flat back and mostly extended knees.",
            "Push hips forward until you are back in a standing position."
        ]
    }
];

export const quadExercises = [
    {
        type: 'QUADS',
        name: 'Barbell Squat',
        gifName: "barbell bench squat",
        primaryMuscles: ['Quadriceps'],
        secondaryMuscles: ['Gluteus Maximus', 'Hamstrings', 'Erector Spinae'],
        steps: [
            "Stand with your feet shoulder-width apart. Maintain the natural arch in your back, squeezing your shoulder blades and raising your chest.",
            "Grip the bar across your shoulders and support it on your upper back. Unwrack the bar by straightening your legs, and take a step back.",
            "Bend your knees as you lower the weight without altering the form of your back until your hips are below your knees.",
            "Raise the bar back to starting position, lift with your legs and exhale at the top."
        ]
    },
    {
        type: 'QUADS',
        name: 'Dumbbell Goblet Squat',
        gifName: "dumbbell goblet squat",
        primaryMuscles: ['Quadriceps'],
        secondaryMuscles: ['Gluteus Maximus', 'Hamstrings', 'Erector Spinae'],
        steps: [
            "Hold the weight tucked into your upper chest area, keeping your elbows in. Your feet should be slightly wider than shoulder width.",
            "Sink down into the squat, keeping your elbows inside the track of your knees.",
            "Push through your heels while keeping your chest up and return to starting position."
        ]
    }
];

export const hamstringExercises = [
    {
        type: 'HAMSTRINGS',
        name: 'Dumbbell Romanian Deadlift',
        gifName: "dumbbell romanian deadlift",
        primaryMuscles: ['Hamstrings'],
        secondaryMuscles: ['Gluteus Maximus', 'Erector Spinae'],
        steps: [
            "Stand with a shoulder width stance. Push your butt back while leaving your knees MOSTLY extended.",
            "You should feel a stretch in your hamstrings. When you feel the stretch, push your hips forward to complete the rep.",
            "Do not push your hips all the way forward. This will hyperextend your spine. Just go to a normal standing position."
        ]
    },
    {
        type: 'HAMSTRINGS',
        name: 'Machine Hamstring Curl',
        gifName: "lever lying two-one leg curl",
        primaryMuscles: ['Hamstrings'],
        secondaryMuscles: ['Calves', 'Gluteus Minimus'],
        steps: [
            "Lay down on the machine, placing your legs beneath the padded lever. Position your legs so that the padded lever is below your calve muscles.",
            "Support yourself by grabbing the side handles of the machine, and slowly raise the weight with your legs, toes pointed straight.",
            "Pause at the apex of the motion, then slowly return to starting position."
        ]
    }
];

export const calfExercises = [
    {
        type: 'CALVES',
        name: 'Dumbbell Calf Raises',
        gifName: "dumbbell standing calf raise",
        primaryMuscles: ['Gastrocnemius'],
        secondaryMuscles: ['Soleus'],
        steps: [
            "Stand tall with your feet on the ground. You can put the balls of your feet on top of a plate to extend the range of motion.",
            "Imagine you have a string attached to your heels and pull your heels up toward the ceiling."
        ]
    },
    {
        type: 'CALVES',
        name: 'Barbell Calf Raise',
        gifName: "barbell standing calf raise",
        primaryMuscles: ['Gastrocnemius', 'Soleus'],
        secondaryMuscles: ['Anterior Tibialis'],
        steps: [
            "Begin by standing on a raised surface (such as a step or box) with the balls of your feet on the edge of the surface and your heels hanging off.",
            "Hold a barbell across your upper back and shoulders, using an overhand grip.",
            "Keeping your core engaged and your back straight, push through the balls of your feet to raise your heels up as high as you can.",
            "Lower your heels back down to the starting position, allowing your calves to stretch."
        ]
    }
];

