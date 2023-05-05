class MuscleMap {
    constructor(containerEl) {
        this.container = containerEl;
        this.render()
        // this.handleclick = this.handleclick.bind(this);
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

        const rightShoulder = document.createElement('div');
        rightShoulder.classList.add('right-shoulder');

        const rightBicep = document.createElement('div');
        rightBicep.classList.add('right-bicep');

        const absContainer = document.createElement('div');
        absContainer.classList.add('abs');

        for (let i = 0; i < 6; i++) {
            const abs = document.createElement('div');
            absContainer.appendChild(abs);
        }

        muscleMap.appendChild(head);
        muscleMap.appendChild(chest);
        muscleMap.appendChild(leftShoulder);
        muscleMap.appendChild(leftBicep);
        muscleMap.appendChild(rightShoulder);
        muscleMap.appendChild(rightBicep);
        muscleMap.appendChild(absContainer);

        this.container.appendChild(muscleMap);
    };

    bindEvents() {
        const muscleBlocks = Array.from(document.querySelectorAll('.muscle-map div'));
        muscleBlocks.forEach(muscleBlock => {
            if (!muscleBlock.classList.contains('abs')) {
                muscleBlock.addEventListener('mouseover', () => {
                    muscleBlock.style.backgroundColor = 'yellow';
                });
                muscleBlock.addEventListener('mouseout', () => {
                    muscleBlock.style.backgroundColor = "white";
                })
            };
        })
    };
}

export default MuscleMap;