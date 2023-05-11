import { generateExercise } from './exercises.js';

class MuscleMap {
    constructor(containerEl, myCarousel) {
        this.container = containerEl;
        this.myCarousel = myCarousel;
        this.render()
        this.handleClickGenerateExercise = this.handleClickGenerateExercise.bind(this);
        this.bindEvents();
    };

    render() {

        const muscleMap = document.createElement('div');
        muscleMap.classList.add('muscle-map');

        const head = document.createElement('div');
        head.classList.add('head');

        const chest = document.createElement('div');
        chest.classList.add('chest');

        const leftShoulder = document.createElement('div');
        leftShoulder.classList.add('left-shoulder');

        const leftBicep = document.createElement('div');
        leftBicep.classList.add('left-bicep');

        const leftForearm = document.createElement('div');
        leftForearm.classList.add('left-forearm');

        const leftHand = document.createElement('div');
        leftHand.classList.add('left-hand');

        const rightShoulder = document.createElement('div');
        rightShoulder.classList.add('right-shoulder');

        const rightBicep = document.createElement('div');
        rightBicep.classList.add('right-bicep');

        const rightForearm = document.createElement('div');
        rightForearm.classList.add('right-forearm');

        const rightHand = document.createElement('div');
        rightHand.classList.add('right-hand');

        const absContainer = document.createElement('div');
        absContainer.classList.add('abs');

        for (let i = 0; i < 6; i++) {
            const abs = document.createElement('div');
            absContainer.appendChild(abs);
        };

        const leftGlute = document.createElement('div');
        leftGlute.classList.add('left-glute');

        const leftQuad = document.createElement('div');
        leftQuad.classList.add('left-quad');

        const leftCalf = document.createElement('div');
        leftCalf.classList.add('left-calf');

        const leftFoot = document.createElement('div');
        leftFoot.classList.add('left-foot');

        const rightGlute = document.createElement('div');
        rightGlute.classList.add('right-glute');

        const rightQuad = document.createElement('div');
        rightQuad.classList.add('right-quad');

        const rightCalf = document.createElement('div');
        rightCalf.classList.add('right-calf');

        const rightFoot = document.createElement('div');
        rightFoot.classList.add('right-foot');

        muscleMap.appendChild(head);
        muscleMap.appendChild(chest);
        muscleMap.appendChild(leftShoulder);
        muscleMap.appendChild(leftBicep);
        muscleMap.appendChild(leftForearm);
        muscleMap.appendChild(leftHand);
        muscleMap.appendChild(rightShoulder);
        muscleMap.appendChild(rightForearm);
        muscleMap.appendChild(rightBicep);
        muscleMap.appendChild(rightHand);
        muscleMap.appendChild(absContainer);
        muscleMap.appendChild(leftGlute);
        muscleMap.appendChild(leftQuad);
        muscleMap.appendChild(leftCalf);
        muscleMap.appendChild(leftFoot);
        muscleMap.appendChild(rightGlute);
        muscleMap.appendChild(rightQuad);
        muscleMap.appendChild(rightCalf);
        muscleMap.appendChild(rightFoot);

        this.container.appendChild(muscleMap);
    };

    bindEvents() {
        this.addEventListeners();
    };

    addEventListeners() {
        const muscleBlocks = Array.from(document.querySelectorAll('.muscle-map div:not(.abs, .abs div)'));
        muscleBlocks.forEach(muscleBlock => {
            muscleBlock.addEventListener('click', () => {
                this.handleClickGenerateExercise(muscleBlock);
            });
            // muscleBlock.addEventListener('click', this.handleClickGenerateFace);
        });
    }

    handleClickGenerateExercise(muscleBlock) {
        if (this.myCarousel.storedExercises.length < 4) {
            generateExercise(muscleBlock, this.myCarousel);
        }
        else {
            muscleBlock.removeEventListener('click', () => { });
        }
    }

    // handleClickGenerateFace(muscleBlock) {
    //     const faceContainer = document.querySelector('.face-container');

    //     const eyes = document.createElement('div');
    //     eyes.classList.add('eyes');

    //     const eyeSpan1 = document.createElement('span');
    //     eyeSpan1.classList.add('eye');
    //     eyeSpan1.textContent = 'd';

    //     const eyeSpan2 = document.createElement('span');
    //     eyeSpan2.classList.add('eye');
    //     eyeSpan2.textContent = 'd';

    //     const mouthSpan = document.createElement('span');
    //     mouthSpan.classList.add('mouth');
    //     mouthSpan.textContent = 'y';

    //     eyes.appendChild(eyeSpan1);
    //     eyes.appendChild(eyeSpan2);
    //     faceContainer.append(eyes, mouthSpan);

    //     // muscleBlock.removeEventListener('click', this.handleClickGenerateFace);
    // };
}

export default MuscleMap;