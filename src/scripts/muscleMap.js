import { generateExercise } from './exercises.js';

class MuscleMap {
    constructor(containerEl, myCarousel) {
        this.container = containerEl;
        this.myCarousel = myCarousel;
        this.render();
        this.renderBack();
        this.renderToggleButton();
        this.handleClickGenerateExercise = this.handleClickGenerateExercise.bind(this);
        this.bindEvents();
        this.onCooldown = false;
    };

    render() {
        const muscleMap = document.createElement('div');
        muscleMap.classList.add('muscle-map');

        const head = document.createElement('div');
        head.classList.add('head');

        const chest = document.createElement('div');
        chest.classList.add('chest');

        const leftChest = document.createElement('div');
        leftChest.classList.add('left-chest');
        chest.appendChild(leftChest);

        const rightChest = document.createElement('div');
        rightChest.classList.add('right-chest');
        chest.appendChild(rightChest);

        const back = document.createElement('div');
        back.classList.add('back');

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
        muscleMap.appendChild(back);

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


    renderBack() {
        const muscleMapBack = document.createElement('div');
        muscleMapBack.classList.add('muscle-map-back');

        const head2 = document.createElement('div');
        head2.classList.add('head-2');

        const back2 = document.createElement('div');
        back2.classList.add('back-2');

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

        const leftGlute2 = document.createElement('div');
        leftGlute2.classList.add('left-glute-2');

        const rightGlute2 = document.createElement('div');
        rightGlute2.classList.add('right-glute-2');

        const leftHamstring = document.createElement('div');
        leftHamstring.classList.add('left-hamstring');

        const leftCalf = document.createElement('div');
        leftCalf.classList.add('left-calf');

        const leftFoot = document.createElement('div');
        leftFoot.classList.add('left-foot');

        const rightHamstring = document.createElement('div');
        rightHamstring.classList.add('right-hamstring');

        const rightCalf = document.createElement('div');
        rightCalf.classList.add('right-calf');

        const rightFoot = document.createElement('div');
        rightFoot.classList.add('right-foot');

        muscleMapBack.appendChild(head2);
        muscleMapBack.appendChild(back2);
        muscleMapBack.appendChild(leftShoulder);
        muscleMapBack.appendChild(leftBicep);
        muscleMapBack.appendChild(leftForearm);
        muscleMapBack.appendChild(leftHand);
        muscleMapBack.appendChild(rightShoulder);
        muscleMapBack.appendChild(rightForearm);
        muscleMapBack.appendChild(rightBicep);
        muscleMapBack.appendChild(rightHand);
        muscleMapBack.appendChild(leftGlute2);
        muscleMapBack.appendChild(leftHamstring);
        muscleMapBack.appendChild(leftCalf);
        muscleMapBack.appendChild(leftFoot);
        muscleMapBack.appendChild(rightGlute2);
        muscleMapBack.appendChild(rightHamstring);
        muscleMapBack.appendChild(rightCalf);
        muscleMapBack.appendChild(rightFoot);

        this.container.appendChild(muscleMapBack);
    }

    toggleView() {
        const frontView = this.container.querySelector('.muscle-map');
        const backView = this.container.querySelector('.muscle-map-back');

        if (frontView.style.display !== 'none') {
            frontView.style.display = 'none';
            backView.style.display = 'grid';
        } else {
            frontView.style.display = 'grid';
            backView.style.display = 'none';
        }
    }


    bindEvents() {
        this.addEventListeners();

        const toggleButton = document.getElementById('toggle-view');
        toggleButton.addEventListener('click', this.toggleView.bind(this));
    }

    renderToggleButton() {
        const toggleButton = document.createElement('button');
        toggleButton.id = 'toggle-view';
        toggleButton.innerText = "FLIP";
        this.container.appendChild(toggleButton);
    }

    addEventListeners() {
        const muscleBlocks = Array.from(document.querySelectorAll('.muscle-map div:not(.abs, .abs div, .chest, .left-chest, .right-chest)'));
        muscleBlocks.forEach(muscleBlock => {
            muscleBlock.addEventListener('click', () => {
                this.handleClickGenerateExercise(muscleBlock);
                this.addAnimation(muscleBlock);
            });
        });

        const chest = document.querySelector('.chest');
        chest.addEventListener('click', () => {
            this.handleClickGenerateExercise(chest);
            const leftChest = chest.querySelector('.left-chest');
            const rightChest = chest.querySelector('.right-chest');
            this.addAnimation(leftChest);
            this.addAnimation(rightChest);
        });
    }

    addAnimation(element) {
        element.classList.add('animate');
        element.addEventListener('animationend', () => {
            element.classList.remove('animate');
        });
    }

    handleClickGenerateExercise(muscleBlock) {
        if (this.onCooldown) {
            return;
        }
        if (this.myCarousel.storedExercises.length < 4) {
            generateExercise(muscleBlock, this.myCarousel);
            this.startCooldown();
        }
        else {
            muscleBlock.removeEventListener('click', () => { });
        }
    }

    startCooldown() {
        this.onCooldown = true;
        setTimeout(() => {
            this.onCooldown = false;
        }, 2000);
    }


}

export default MuscleMap;