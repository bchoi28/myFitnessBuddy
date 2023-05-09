/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_muscleMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/muscleMap */ \"./src/scripts/muscleMap.js\");\n/* harmony import */ var _scripts_gifContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/gifContainer */ \"./src/scripts/gifContainer.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const bodyContainer = document.querySelector('.body-container');\n  new _scripts_muscleMap__WEBPACK_IMPORTED_MODULE_0__[\"default\"](bodyContainer);\n  const gifContainer = document.querySelector('.gif-container');\n  new _scripts_gifContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](gifContainer);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQTRDO0FBQ007QUFFbERFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxhQUFhLEdBQUdGLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGlCQUFpQixDQUFDO0VBQy9ELElBQUlMLDBEQUFTLENBQUNJLGFBQWEsQ0FBQztFQUU1QixNQUFNRSxZQUFZLEdBQUdKLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGdCQUFnQixDQUFDO0VBQzdELElBQUlKLDZEQUFZLENBQUNLLFlBQVksQ0FBQztBQUNsQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWZpdG5lc3NidWRkeS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNdXNjbGVNYXAgZnJvbSAnLi9zY3JpcHRzL211c2NsZU1hcCc7XG5pbXBvcnQgR2lmQ29udGFpbmVyIGZyb20gJy4vc2NyaXB0cy9naWZDb250YWluZXInO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IGJvZHlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9keS1jb250YWluZXInKTtcbiAgICBuZXcgTXVzY2xlTWFwKGJvZHlDb250YWluZXIpO1xuXG4gICAgY29uc3QgZ2lmQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdpZi1jb250YWluZXInKTtcbiAgICBuZXcgR2lmQ29udGFpbmVyKGdpZkNvbnRhaW5lcik7XG59KTsiXSwibmFtZXMiOlsiTXVzY2xlTWFwIiwiR2lmQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYm9keUNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJnaWZDb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/exercises.js":
/*!**********************************!*\
  !*** ./src/scripts/exercises.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"exercises\": function() { return /* binding */ exercises; }\n/* harmony export */ });\nconst exercises = {\n  'chest': [{\n    name: 'Bench Press',\n    primaryMuscles: ['Pectoralis Major'],\n    secondaryMuscles: ['Triceps', 'Deltoids'],\n    suggestedRepRange: '8-12 reps'\n  }, {\n    name: 'Push-Ups',\n    primaryMuscles: ['Pectoralis Major'],\n    secondaryMuscles: ['Triceps', 'Deltoids'],\n    suggestedRepRange: '10-15 reps'\n  }, {\n    name: 'Dumbbell Flyes',\n    primaryMuscles: ['Pectoralis Major'],\n    secondaryMuscles: ['Anterior Deltoids', 'Triceps'],\n    suggestedRepRange: '12-15 reps'\n  }],\n  'left-shoulder': [\n    // Add exercises for left shoulder here\n  ],\n  'left-bicep': [\n    // Add exercises for left bicep here\n  ]\n  // Add more muscle block keys and exercises as needed\n};\n\nconst generateExercise = (muscleBlock, exerciseCount, muscleMapInstance) => {\n  const exercisesByMuscleBlock = exercises[muscleBlock.classList[0]]; // Get exercises for the muscle block class\n  const randomIndex = Math.floor(Math.random() * exercisesByMuscleBlock.length); // Get a random index from the exercises array\n  const exercise = exercisesByMuscleBlock[randomIndex]; // Get the exercise at the random index\n  const exerciseTitle = document.querySelector('.exercise-title');\n  const exerciseInfoContainer = document.querySelector('.exercise-info-container');\n  exerciseTitle.textContent = exercise.name;\n  const exerciseInfoNum = document.createElement('h2');\n  exerciseInfoNum.classList.add('exercise-info-num');\n  exerciseInfoNum.innerText = `Exercise ${exerciseCount}`;\n  const closeButton = document.createElement('button');\n  closeButton.classList.add('close-button');\n  closeButton.innerText = 'X';\n  closeButton.addEventListener('click', () => {\n    exerciseInfoNum.remove();\n    muscleMapInstance.exerciseCount--;\n  });\n  exerciseInfoNum.append(closeButton);\n  const exerciseInfo = document.createElement('div');\n  exerciseInfo.classList.add('exercise-info');\n  const primaryMusclesTitle = document.createElement('div');\n  exerciseInfo.classList.add('primary-muscles-title');\n  exerciseInfo.innerText = 'Primary Muscles';\n  const primaryMuscles = document.createElement('div');\n  primaryMuscles.classList.add('primary-muscles');\n  primaryMuscles.innerText = `${exercise.primaryMuscles}`;\n  exerciseInfoContainer.append(exerciseInfoNum);\n  exerciseInfoNum.append(exerciseInfo);\n  exerciseInfo.append(primaryMusclesTitle);\n  exerciseInfo.append(primaryMuscles);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (generateExercise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxLQUFLLENBQUM7RUFDcERyQixjQUFjLENBQUNRLFNBQVMsQ0FBQ2MsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0VBQy9DdEIsY0FBYyxDQUFDdUIsU0FBUyxHQUFJLEdBQUVULFFBQVEsQ0FBQ2QsY0FBZSxFQUFDO0VBRXZEa0IscUJBQXFCLENBQUNTLE1BQU0sQ0FBQ1AsZUFBZSxDQUFDO0VBQzdDQSxlQUFlLENBQUNPLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDO0VBQ3BDQSxZQUFZLENBQUNELE1BQU0sQ0FBQ0UsbUJBQW1CLENBQUM7RUFDeENELFlBQVksQ0FBQ0QsTUFBTSxDQUFDM0IsY0FBYyxDQUFDO0FBQ3ZDLENBQUM7QUFFRCwrREFBZUcsZ0JBQWdCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWZpdG5lc3NidWRkeS8uL3NyYy9zY3JpcHRzL2V4ZXJjaXNlcy5qcz8zYzg0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4ZXJjaXNlcyA9IHtcbiAgICAnY2hlc3QnOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdCZW5jaCBQcmVzcycsXG4gICAgICAgICAgICBwcmltYXJ5TXVzY2xlczogWydQZWN0b3JhbGlzIE1ham9yJ10sXG4gICAgICAgICAgICBzZWNvbmRhcnlNdXNjbGVzOiBbJ1RyaWNlcHMnLCAnRGVsdG9pZHMnXSxcbiAgICAgICAgICAgIHN1Z2dlc3RlZFJlcFJhbmdlOiAnOC0xMiByZXBzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnUHVzaC1VcHMnLFxuICAgICAgICAgICAgcHJpbWFyeU11c2NsZXM6IFsnUGVjdG9yYWxpcyBNYWpvciddLFxuICAgICAgICAgICAgc2Vjb25kYXJ5TXVzY2xlczogWydUcmljZXBzJywgJ0RlbHRvaWRzJ10sXG4gICAgICAgICAgICBzdWdnZXN0ZWRSZXBSYW5nZTogJzEwLTE1IHJlcHMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdEdW1iYmVsbCBGbHllcycsXG4gICAgICAgICAgICBwcmltYXJ5TXVzY2xlczogWydQZWN0b3JhbGlzIE1ham9yJ10sXG4gICAgICAgICAgICBzZWNvbmRhcnlNdXNjbGVzOiBbJ0FudGVyaW9yIERlbHRvaWRzJywgJ1RyaWNlcHMnXSxcbiAgICAgICAgICAgIHN1Z2dlc3RlZFJlcFJhbmdlOiAnMTItMTUgcmVwcydcbiAgICAgICAgfVxuICAgIF0sXG4gICAgJ2xlZnQtc2hvdWxkZXInOiBbXG4gICAgICAgIC8vIEFkZCBleGVyY2lzZXMgZm9yIGxlZnQgc2hvdWxkZXIgaGVyZVxuICAgIF0sXG4gICAgJ2xlZnQtYmljZXAnOiBbXG4gICAgICAgIC8vIEFkZCBleGVyY2lzZXMgZm9yIGxlZnQgYmljZXAgaGVyZVxuICAgIF0sXG4gICAgLy8gQWRkIG1vcmUgbXVzY2xlIGJsb2NrIGtleXMgYW5kIGV4ZXJjaXNlcyBhcyBuZWVkZWRcbn07XG5cbmNvbnN0IGdlbmVyYXRlRXhlcmNpc2UgPSAobXVzY2xlQmxvY2ssIGV4ZXJjaXNlQ291bnQsIG11c2NsZU1hcEluc3RhbmNlKSA9PiB7XG4gICAgY29uc3QgZXhlcmNpc2VzQnlNdXNjbGVCbG9jayA9IGV4ZXJjaXNlc1ttdXNjbGVCbG9jay5jbGFzc0xpc3RbMF1dOyAvLyBHZXQgZXhlcmNpc2VzIGZvciB0aGUgbXVzY2xlIGJsb2NrIGNsYXNzXG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBleGVyY2lzZXNCeU11c2NsZUJsb2NrLmxlbmd0aCk7IC8vIEdldCBhIHJhbmRvbSBpbmRleCBmcm9tIHRoZSBleGVyY2lzZXMgYXJyYXlcbiAgICBjb25zdCBleGVyY2lzZSA9IGV4ZXJjaXNlc0J5TXVzY2xlQmxvY2tbcmFuZG9tSW5kZXhdOyAvLyBHZXQgdGhlIGV4ZXJjaXNlIGF0IHRoZSByYW5kb20gaW5kZXhcbiAgICBjb25zdCBleGVyY2lzZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4ZXJjaXNlLXRpdGxlJyk7XG4gICAgY29uc3QgZXhlcmNpc2VJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4ZXJjaXNlLWluZm8tY29udGFpbmVyJyk7XG4gICAgZXhlcmNpc2VUaXRsZS50ZXh0Q29udGVudCA9IGV4ZXJjaXNlLm5hbWU7XG5cbiAgICBjb25zdCBleGVyY2lzZUluZm9OdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGV4ZXJjaXNlSW5mb051bS5jbGFzc0xpc3QuYWRkKCdleGVyY2lzZS1pbmZvLW51bScpO1xuICAgIGV4ZXJjaXNlSW5mb051bS5pbm5lclRleHQgPSBgRXhlcmNpc2UgJHtleGVyY2lzZUNvdW50fWA7XG5cbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLWJ1dHRvbicpO1xuICAgIGNsb3NlQnV0dG9uLmlubmVyVGV4dCA9ICdYJztcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZXhlcmNpc2VJbmZvTnVtLnJlbW92ZSgpO1xuICAgICAgICBtdXNjbGVNYXBJbnN0YW5jZS5leGVyY2lzZUNvdW50LS07XG4gICAgfSk7XG5cbiAgICBleGVyY2lzZUluZm9OdW0uYXBwZW5kKGNsb3NlQnV0dG9uKTtcblxuICAgIGNvbnN0IGV4ZXJjaXNlSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGV4ZXJjaXNlSW5mby5jbGFzc0xpc3QuYWRkKCdleGVyY2lzZS1pbmZvJyk7XG5cbiAgICBjb25zdCBwcmltYXJ5TXVzY2xlc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZXhlcmNpc2VJbmZvLmNsYXNzTGlzdC5hZGQoJ3ByaW1hcnktbXVzY2xlcy10aXRsZScpO1xuICAgIGV4ZXJjaXNlSW5mby5pbm5lclRleHQgPSAnUHJpbWFyeSBNdXNjbGVzJztcblxuICAgIGNvbnN0IHByaW1hcnlNdXNjbGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJpbWFyeU11c2NsZXMuY2xhc3NMaXN0LmFkZCgncHJpbWFyeS1tdXNjbGVzJyk7XG4gICAgcHJpbWFyeU11c2NsZXMuaW5uZXJUZXh0ID0gYCR7ZXhlcmNpc2UucHJpbWFyeU11c2NsZXN9YDtcblxuICAgIGV4ZXJjaXNlSW5mb0NvbnRhaW5lci5hcHBlbmQoZXhlcmNpc2VJbmZvTnVtKTtcbiAgICBleGVyY2lzZUluZm9OdW0uYXBwZW5kKGV4ZXJjaXNlSW5mbyk7XG4gICAgZXhlcmNpc2VJbmZvLmFwcGVuZChwcmltYXJ5TXVzY2xlc1RpdGxlKTtcbiAgICBleGVyY2lzZUluZm8uYXBwZW5kKHByaW1hcnlNdXNjbGVzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVFeGVyY2lzZTtcbmV4cG9ydCB7IGV4ZXJjaXNlcyB9OyJdLCJuYW1lcyI6WyJleGVyY2lzZXMiLCJuYW1lIiwicHJpbWFyeU11c2NsZXMiLCJzZWNvbmRhcnlNdXNjbGVzIiwic3VnZ2VzdGVkUmVwUmFuZ2UiLCJnZW5lcmF0ZUV4ZXJjaXNlIiwibXVzY2xlQmxvY2siLCJleGVyY2lzZUNvdW50IiwibXVzY2xlTWFwSW5zdGFuY2UiLCJleGVyY2lzZXNCeU11c2NsZUJsb2NrIiwiY2xhc3NMaXN0IiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJleGVyY2lzZSIsImV4ZXJjaXNlVGl0bGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJleGVyY2lzZUluZm9Db250YWluZXIiLCJ0ZXh0Q29udGVudCIsImV4ZXJjaXNlSW5mb051bSIsImNyZWF0ZUVsZW1lbnQiLCJhZGQiLCJpbm5lclRleHQiLCJjbG9zZUJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJhcHBlbmQiLCJleGVyY2lzZUluZm8iLCJwcmltYXJ5TXVzY2xlc1RpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/exercises.js\n");

/***/ }),

/***/ "./src/scripts/gifContainer.js":
/*!*************************************!*\
  !*** ./src/scripts/gifContainer.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass GifContainer {\n  constructor(containerEl) {\n    this.container = containerEl;\n  }\n}\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GifContainer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9naWZDb250YWluZXIuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFlBQVksQ0FBQztFQUNmQyxXQUFXQSxDQUFDQyxXQUFXLEVBQUU7SUFDckIsSUFBSSxDQUFDQyxTQUFTLEdBQUdELFdBQVc7RUFDaEM7QUFDSjtBQUFDO0FBRUQsK0RBQWVGLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWZpdG5lc3NidWRkeS8uL3NyYy9zY3JpcHRzL2dpZkNvbnRhaW5lci5qcz8xNzMxIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdpZkNvbnRhaW5lciB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyRWwpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJFbDtcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2lmQ29udGFpbmVyOyJdLCJuYW1lcyI6WyJHaWZDb250YWluZXIiLCJjb25zdHJ1Y3RvciIsImNvbnRhaW5lckVsIiwiY29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/gifContainer.js\n");

/***/ }),

/***/ "./src/scripts/muscleMap.js":
/*!**********************************!*\
  !*** ./src/scripts/muscleMap.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exercises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exercises */ \"./src/scripts/exercises.js\");\n\nclass MuscleMap {\n  constructor(containerEl) {\n    this.container = containerEl;\n    this.render();\n    // this.handleclick = this.handleclick.bind(this);\n    this.bindEvents();\n    this.exerciseCount = 0;\n    this.addExerciseListener = this.addExerciseListener.bind(this);\n  }\n  render() {\n    const muscleMap = document.createElement('div');\n    muscleMap.classList.add('muscle-map');\n    const head = document.createElement('div');\n    head.classList.add('head');\n    const chest = document.createElement('div');\n    chest.classList.add('chest');\n    const leftShoulder = document.createElement('div');\n    leftShoulder.classList.add('left-shoulder');\n    const leftBicep = document.createElement('div');\n    leftBicep.classList.add('left-bicep');\n    const leftForearm = document.createElement('div');\n    leftForearm.classList.add('left-forearm');\n    const leftHand = document.createElement('div');\n    leftHand.classList.add('left-hand');\n    const rightShoulder = document.createElement('div');\n    rightShoulder.classList.add('right-shoulder');\n    const rightBicep = document.createElement('div');\n    rightBicep.classList.add('right-bicep');\n    const rightForearm = document.createElement('div');\n    rightForearm.classList.add('right-forearm');\n    const rightHand = document.createElement('div');\n    rightHand.classList.add('right-hand');\n    const absContainer = document.createElement('div');\n    absContainer.classList.add('abs');\n    for (let i = 0; i < 6; i++) {\n      const abs = document.createElement('div');\n      absContainer.appendChild(abs);\n    }\n    ;\n    const leftGlute = document.createElement('div');\n    leftGlute.classList.add('left-glute');\n    const leftQuad = document.createElement('div');\n    leftQuad.classList.add('left-quad');\n    const leftCalf = document.createElement('div');\n    leftCalf.classList.add('left-calf');\n    const leftFoot = document.createElement('div');\n    leftFoot.classList.add('left-foot');\n    const rightGlute = document.createElement('div');\n    rightGlute.classList.add('right-glute');\n    const rightQuad = document.createElement('div');\n    rightQuad.classList.add('right-quad');\n    const rightCalf = document.createElement('div');\n    rightCalf.classList.add('right-calf');\n    const rightFoot = document.createElement('div');\n    rightFoot.classList.add('right-foot');\n    muscleMap.appendChild(head);\n    muscleMap.appendChild(chest);\n    muscleMap.appendChild(leftShoulder);\n    muscleMap.appendChild(leftBicep);\n    muscleMap.appendChild(leftForearm);\n    muscleMap.appendChild(leftHand);\n    muscleMap.appendChild(rightShoulder);\n    muscleMap.appendChild(rightForearm);\n    muscleMap.appendChild(rightBicep);\n    muscleMap.appendChild(rightHand);\n    muscleMap.appendChild(absContainer);\n    muscleMap.appendChild(leftGlute);\n    muscleMap.appendChild(leftQuad);\n    muscleMap.appendChild(leftCalf);\n    muscleMap.appendChild(leftFoot);\n    muscleMap.appendChild(rightGlute);\n    muscleMap.appendChild(rightQuad);\n    muscleMap.appendChild(rightCalf);\n    muscleMap.appendChild(rightFoot);\n    this.container.appendChild(muscleMap);\n  }\n  bindEvents() {\n    this.addHoverListener();\n    this.addExerciseListener();\n  }\n  addHoverListener() {\n    const muscleBlocks = Array.from(document.querySelectorAll('.muscle-map div:not(.abs, .abs div)'));\n    muscleBlocks.forEach(muscleBlock => {\n      muscleBlock.addEventListener('mouseover', () => {\n        muscleBlock.style.backgroundColor = 'yellow';\n      });\n      muscleBlock.addEventListener('mouseout', () => {\n        muscleBlock.style.backgroundColor = \"white\";\n      });\n    });\n    const absContainer = document.querySelector('.abs');\n    absContainer.addEventListener('mouseover', e => {\n      if (e.target.matches('.abs > div')) {\n        const absBlocks = Array.from(absContainer.children);\n        absBlocks.forEach(absBlock => {\n          absBlock.style.backgroundColor = 'yellow';\n        });\n      }\n    });\n    absContainer.addEventListener('mouseout', e => {\n      if (e.target.matches('.abs > div')) {\n        const absBlocks = Array.from(absContainer.children);\n        absBlocks.forEach(absBlock => {\n          absBlock.style.backgroundColor = 'white';\n        });\n      }\n    });\n  }\n  addExerciseListener() {\n    const muscleBlocks = Array.from(document.querySelectorAll('.muscle-map div:not(.abs, .abs div)'));\n    muscleBlocks.forEach(muscleBlock => {\n      muscleBlock.addEventListener('click', () => {\n        if (this.exerciseCount < 3) {\n          (0,_exercises__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(muscleBlock, this.exerciseCount + 1, this);\n          this.exerciseCount++;\n        } else {\n          muscleBlock.removeEventListener('click', () => {});\n        }\n      });\n    });\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MuscleMap);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tdXNjbGVNYXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBMEQ7QUFFMUQsTUFBTUUsU0FBUyxDQUFDO0VBQ1pDLFdBQVdBLENBQUNDLFdBQVcsRUFBRTtJQUNyQixJQUFJLENBQUNDLFNBQVMsR0FBR0QsV0FBVztJQUM1QixJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDO0lBQ2I7SUFDQSxJQUFJLENBQUNDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pCLElBQUksQ0FBQ0MsYUFBYSxHQUFHLENBQUM7SUFDdEIsSUFBSSxDQUFDQyxtQkFBbUIsR0FBRyxJQUFJLENBQUNBLG1CQUFtQixDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0VBQ2xFO0VBRUFKLE1BQU1BLENBQUEsRUFBRztJQUVMLE1BQU1LLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQy9DRixTQUFTLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztJQUVyQyxNQUFNQyxJQUFJLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUMxQ0csSUFBSSxDQUFDRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFFMUIsTUFBTUUsS0FBSyxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDM0NJLEtBQUssQ0FBQ0gsU0FBUyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBRTVCLE1BQU1HLFlBQVksR0FBR04sUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ2xESyxZQUFZLENBQUNKLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztJQUUzQyxNQUFNSSxTQUFTLEdBQUdQLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUMvQ00sU0FBUyxDQUFDTCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7SUFFckMsTUFBTUssV0FBVyxHQUFHUixRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDakRPLFdBQVcsQ0FBQ04sU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBRXpDLE1BQU1NLFFBQVEsR0FBR1QsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzlDUSxRQUFRLENBQUNQLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztJQUVuQyxNQUFNTyxhQUFhLEdBQUdWLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUNuRFMsYUFBYSxDQUFDUixTQUFTLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztJQUU3QyxNQUFNUSxVQUFVLEdBQUdYLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUNoRFUsVUFBVSxDQUFDVCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFFdkMsTUFBTVMsWUFBWSxHQUFHWixRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDbERXLFlBQVksQ0FBQ1YsU0FBUyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0lBRTNDLE1BQU1VLFNBQVMsR0FBR2IsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQy9DWSxTQUFTLENBQUNYLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztJQUVyQyxNQUFNVyxZQUFZLEdBQUdkLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUNsRGEsWUFBWSxDQUFDWixTQUFTLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFFakMsS0FBSyxJQUFJWSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRTtNQUN4QixNQUFNQyxHQUFHLEdBQUdoQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDekNhLFlBQVksQ0FBQ0csV0FBVyxDQUFDRCxHQUFHLENBQUM7SUFDakM7SUFBQztJQUVELE1BQU1FLFNBQVMsR0FBR2xCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUMvQ2lCLFNBQVMsQ0FBQ2hCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztJQUVyQyxNQUFNZ0IsUUFBUSxHQUFHbkIsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzlDa0IsUUFBUSxDQUFDakIsU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO0lBRW5DLE1BQU1pQixRQUFRLEdBQUdwQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDOUNtQixRQUFRLENBQUNsQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7SUFFbkMsTUFBTWtCLFFBQVEsR0FBR3JCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUM5Q29CLFFBQVEsQ0FBQ25CLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztJQUVuQyxNQUFNbUIsVUFBVSxHQUFHdEIsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ2hEcUIsVUFBVSxDQUFDcEIsU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBRXZDLE1BQU1vQixTQUFTLEdBQUd2QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDL0NzQixTQUFTLENBQUNyQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7SUFFckMsTUFBTXFCLFNBQVMsR0FBR3hCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUMvQ3VCLFNBQVMsQ0FBQ3RCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztJQUVyQyxNQUFNc0IsU0FBUyxHQUFHekIsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQy9Dd0IsU0FBUyxDQUFDdkIsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO0lBRXJDSixTQUFTLENBQUNrQixXQUFXLENBQUNiLElBQUksQ0FBQztJQUMzQkwsU0FBUyxDQUFDa0IsV0FBVyxDQUFDWixLQUFLLENBQUM7SUFDNUJOLFNBQVMsQ0FBQ2tCLFdBQVcsQ0FBQ1gsWUFBWSxDQUFDO0lBQ25DUCxTQUFTLENBQUNrQixXQUFXLENBQUNWLFNBQVMsQ0FBQztJQUNoQ1IsU0FBUyxDQUFDa0IsV0FBVyxDQUFDVCxXQUFXLENBQUM7SUFDbENULFNBQVMsQ0FBQ2tCLFdBQVcsQ0FBQ1IsUUFBUSxDQUFDO0lBQy9CVixTQUFTLENBQUNrQixXQUFXLENBQUNQLGFBQWEsQ0FBQztJQUNwQ1gsU0FBUyxDQUFDa0IsV0FBVyxDQUFDTCxZQUFZLENBQUM7SUFDbkNiLFNBQVMsQ0FBQ2tCLFdBQVcsQ0FBQ04sVUFBVSxDQUFDO0lBQ2pDWixTQUFTLENBQUNrQixXQUFXLENBQUNKLFNBQVMsQ0FBQztJQUNoQ2QsU0FBUyxDQUFDa0IsV0FBVyxDQUFDSCxZQUFZLENBQUM7SUFDbkNmLFNBQVMsQ0FBQ2tCLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDO0lBQ2hDbkIsU0FBUyxDQUFDa0IsV0FBVyxDQUFDRSxRQUFRLENBQUM7SUFDL0JwQixTQUFTLENBQUNrQixXQUFXLENBQUNHLFFBQVEsQ0FBQztJQUMvQnJCLFNBQVMsQ0FBQ2tCLFdBQVcsQ0FBQ0ksUUFBUSxDQUFDO0lBQy9CdEIsU0FBUyxDQUFDa0IsV0FBVyxDQUFDSyxVQUFVLENBQUM7SUFDakN2QixTQUFTLENBQUNrQixXQUFXLENBQUNNLFNBQVMsQ0FBQztJQUNoQ3hCLFNBQVMsQ0FBQ2tCLFdBQVcsQ0FBQ08sU0FBUyxDQUFDO0lBQ2hDekIsU0FBUyxDQUFDa0IsV0FBVyxDQUFDUSxTQUFTLENBQUM7SUFFaEMsSUFBSSxDQUFDaEMsU0FBUyxDQUFDd0IsV0FBVyxDQUFDbEIsU0FBUyxDQUFDO0VBQ3pDO0VBRUFKLFVBQVVBLENBQUEsRUFBRztJQUNULElBQUksQ0FBQytCLGdCQUFnQixDQUFDLENBQUM7SUFDdkIsSUFBSSxDQUFDN0IsbUJBQW1CLENBQUMsQ0FBQztFQUM5QjtFQUVBNkIsZ0JBQWdCQSxDQUFBLEVBQUc7SUFDZixNQUFNQyxZQUFZLEdBQUdDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDN0IsUUFBUSxDQUFDOEIsZ0JBQWdCLENBQUMscUNBQXFDLENBQUMsQ0FBQztJQUNqR0gsWUFBWSxDQUFDSSxPQUFPLENBQUNDLFdBQVcsSUFBSTtNQUNoQ0EsV0FBVyxDQUFDQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsTUFBTTtRQUM1Q0QsV0FBVyxDQUFDRSxLQUFLLENBQUNDLGVBQWUsR0FBRyxRQUFRO01BQ2hELENBQUMsQ0FBQztNQUNGSCxXQUFXLENBQUNDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxNQUFNO1FBQzNDRCxXQUFXLENBQUNFLEtBQUssQ0FBQ0MsZUFBZSxHQUFHLE9BQU87TUFDL0MsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0lBRUYsTUFBTXJCLFlBQVksR0FBR2QsUUFBUSxDQUFDb0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUNuRHRCLFlBQVksQ0FBQ21CLGdCQUFnQixDQUFDLFdBQVcsRUFBR0ksQ0FBQyxJQUFLO01BQzlDLElBQUlBLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUU7UUFDaEMsTUFBTUMsU0FBUyxHQUFHWixLQUFLLENBQUNDLElBQUksQ0FBQ2YsWUFBWSxDQUFDMkIsUUFBUSxDQUFDO1FBQ25ERCxTQUFTLENBQUNULE9BQU8sQ0FBRVcsUUFBUSxJQUFLO1VBQzVCQSxRQUFRLENBQUNSLEtBQUssQ0FBQ0MsZUFBZSxHQUFHLFFBQVE7UUFDN0MsQ0FBQyxDQUFDO01BQ047SUFDSixDQUFDLENBQUM7SUFDRnJCLFlBQVksQ0FBQ21CLGdCQUFnQixDQUFDLFVBQVUsRUFBR0ksQ0FBQyxJQUFLO01BQzdDLElBQUlBLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUU7UUFDaEMsTUFBTUMsU0FBUyxHQUFHWixLQUFLLENBQUNDLElBQUksQ0FBQ2YsWUFBWSxDQUFDMkIsUUFBUSxDQUFDO1FBQ25ERCxTQUFTLENBQUNULE9BQU8sQ0FBRVcsUUFBUSxJQUFLO1VBQzVCQSxRQUFRLENBQUNSLEtBQUssQ0FBQ0MsZUFBZSxHQUFHLE9BQU87UUFDNUMsQ0FBQyxDQUFDO01BQ047SUFDSixDQUFDLENBQUM7RUFDTjtFQUVBdEMsbUJBQW1CQSxDQUFBLEVBQUc7SUFDbEIsTUFBTThCLFlBQVksR0FBR0MsS0FBSyxDQUFDQyxJQUFJLENBQUM3QixRQUFRLENBQUM4QixnQkFBZ0IsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO0lBQ2pHSCxZQUFZLENBQUNJLE9BQU8sQ0FBQ0MsV0FBVyxJQUFJO01BQ2hDQSxXQUFXLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ3hDLElBQUksSUFBSSxDQUFDckMsYUFBYSxHQUFHLENBQUMsRUFBRTtVQUN4QlIsc0RBQWdCLENBQUM0QyxXQUFXLEVBQUUsSUFBSSxDQUFDcEMsYUFBYSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUM7VUFDM0QsSUFBSSxDQUFDQSxhQUFhLEVBQUU7UUFDeEIsQ0FBQyxNQUNJO1VBQ0RvQyxXQUFXLENBQUNXLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUUsQ0FBQyxDQUFDO1FBQ3ZEO01BQ0osQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ047QUFDSjtBQUNBLCtEQUFlckQsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL215Zml0bmVzc2J1ZGR5Ly4vc3JjL3NjcmlwdHMvbXVzY2xlTWFwLmpzPzZkYzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdlbmVyYXRlRXhlcmNpc2UsIHsgZXhlcmNpc2VzIH0gZnJvbSBcIi4vZXhlcmNpc2VzXCI7XG5cbmNsYXNzIE11c2NsZU1hcCB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyRWwpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJFbDtcbiAgICAgICAgdGhpcy5yZW5kZXIoKVxuICAgICAgICAvLyB0aGlzLmhhbmRsZWNsaWNrID0gdGhpcy5oYW5kbGVjbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICAgICAgdGhpcy5leGVyY2lzZUNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5hZGRFeGVyY2lzZUxpc3RlbmVyID0gdGhpcy5hZGRFeGVyY2lzZUxpc3RlbmVyLmJpbmQodGhpcyk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBtdXNjbGVNYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbXVzY2xlTWFwLmNsYXNzTGlzdC5hZGQoJ211c2NsZS1tYXAnKTtcblxuICAgICAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWQuY2xhc3NMaXN0LmFkZCgnaGVhZCcpO1xuXG4gICAgICAgIGNvbnN0IGNoZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNoZXN0LmNsYXNzTGlzdC5hZGQoJ2NoZXN0Jyk7XG5cbiAgICAgICAgY29uc3QgbGVmdFNob3VsZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxlZnRTaG91bGRlci5jbGFzc0xpc3QuYWRkKCdsZWZ0LXNob3VsZGVyJyk7XG5cbiAgICAgICAgY29uc3QgbGVmdEJpY2VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxlZnRCaWNlcC5jbGFzc0xpc3QuYWRkKCdsZWZ0LWJpY2VwJyk7XG5cbiAgICAgICAgY29uc3QgbGVmdEZvcmVhcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGVmdEZvcmVhcm0uY2xhc3NMaXN0LmFkZCgnbGVmdC1mb3JlYXJtJyk7XG5cbiAgICAgICAgY29uc3QgbGVmdEhhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGVmdEhhbmQuY2xhc3NMaXN0LmFkZCgnbGVmdC1oYW5kJyk7XG5cbiAgICAgICAgY29uc3QgcmlnaHRTaG91bGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByaWdodFNob3VsZGVyLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LXNob3VsZGVyJyk7XG5cbiAgICAgICAgY29uc3QgcmlnaHRCaWNlcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByaWdodEJpY2VwLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWJpY2VwJyk7XG5cbiAgICAgICAgY29uc3QgcmlnaHRGb3JlYXJtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJpZ2h0Rm9yZWFybS5jbGFzc0xpc3QuYWRkKCdyaWdodC1mb3JlYXJtJyk7XG5cbiAgICAgICAgY29uc3QgcmlnaHRIYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJpZ2h0SGFuZC5jbGFzc0xpc3QuYWRkKCdyaWdodC1oYW5kJyk7XG5cbiAgICAgICAgY29uc3QgYWJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFic0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhYnMnKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBhYnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJzKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBsZWZ0R2x1dGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGVmdEdsdXRlLmNsYXNzTGlzdC5hZGQoJ2xlZnQtZ2x1dGUnKTtcblxuICAgICAgICBjb25zdCBsZWZ0UXVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZWZ0UXVhZC5jbGFzc0xpc3QuYWRkKCdsZWZ0LXF1YWQnKTtcblxuICAgICAgICBjb25zdCBsZWZ0Q2FsZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZWZ0Q2FsZi5jbGFzc0xpc3QuYWRkKCdsZWZ0LWNhbGYnKTtcblxuICAgICAgICBjb25zdCBsZWZ0Rm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZWZ0Rm9vdC5jbGFzc0xpc3QuYWRkKCdsZWZ0LWZvb3QnKTtcblxuICAgICAgICBjb25zdCByaWdodEdsdXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJpZ2h0R2x1dGUuY2xhc3NMaXN0LmFkZCgncmlnaHQtZ2x1dGUnKTtcblxuICAgICAgICBjb25zdCByaWdodFF1YWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmlnaHRRdWFkLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LXF1YWQnKTtcblxuICAgICAgICBjb25zdCByaWdodENhbGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmlnaHRDYWxmLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWNhbGYnKTtcblxuICAgICAgICBjb25zdCByaWdodEZvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmlnaHRGb290LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWZvb3QnKTtcblxuICAgICAgICBtdXNjbGVNYXAuYXBwZW5kQ2hpbGQoaGVhZCk7XG4gICAgICAgIG11c2NsZU1hcC5hcHBlbmRDaGlsZChjaGVzdCk7XG4gICAgICAgIG11c2NsZU1hcC5hcHBlbmRDaGlsZChsZWZ0U2hvdWxkZXIpO1xuICAgICAgICBtdXNjbGVNYXAuYXBwZW5kQ2hpbGQobGVmdEJpY2VwKTtcbiAgICAgICAgbXVzY2xlTWFwLmFwcGVuZENoaWxkKGxlZnRGb3JlYXJtKTtcbiAgICAgICAgbXVzY2xlTWFwLmFwcGVuZENoaWxkKGxlZnRIYW5kKTtcbiAgICAgICAgbXVzY2xlTWFwLmFwcGVuZENoaWxkKHJpZ2h0U2hvdWxkZXIpO1xuICAgICAgICBtdXNjbGVNYXAuYXBwZW5kQ2hpbGQocmlnaHRGb3JlYXJtKTtcbiAgICAgICAgbXVzY2xlTWFwLmFwcGVuZENoaWxkKHJpZ2h0QmljZXApO1xuICAgICAgICBtdXNjbGVNYXAuYXBwZW5kQ2hpbGQocmlnaHRIYW5kKTtcbiAgICAgICAgbXVzY2xlTWFwLmFwcGVuZENoaWxkKGFic0NvbnRhaW5lcik7XG4gICAgICAgIG11c2NsZU1hcC5hcHBlbmRDaGlsZChsZWZ0R2x1dGUpO1xuICAgICAgICBtdXNjbGVNYXAuYXBwZW5kQ2hpbGQobGVmdFF1YWQpO1xuICAgICAgICBtdXNjbGVNYXAuYXBwZW5kQ2hpbGQobGVmdENhbGYpO1xuICAgICAgICBtdXNjbGVNYXAuYXBwZW5kQ2hpbGQobGVmdEZvb3QpO1xuICAgICAgICBtdXNjbGVNYXAuYXBwZW5kQ2hpbGQocmlnaHRHbHV0ZSk7XG4gICAgICAgIG11c2NsZU1hcC5hcHBlbmRDaGlsZChyaWdodFF1YWQpO1xuICAgICAgICBtdXNjbGVNYXAuYXBwZW5kQ2hpbGQocmlnaHRDYWxmKTtcbiAgICAgICAgbXVzY2xlTWFwLmFwcGVuZENoaWxkKHJpZ2h0Rm9vdCk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobXVzY2xlTWFwKTtcbiAgICB9O1xuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5hZGRIb3Zlckxpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMuYWRkRXhlcmNpc2VMaXN0ZW5lcigpO1xuICAgIH07XG5cbiAgICBhZGRIb3Zlckxpc3RlbmVyKCkge1xuICAgICAgICBjb25zdCBtdXNjbGVCbG9ja3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tdXNjbGUtbWFwIGRpdjpub3QoLmFicywgLmFicyBkaXYpJykpO1xuICAgICAgICBtdXNjbGVCbG9ja3MuZm9yRWFjaChtdXNjbGVCbG9jayA9PiB7XG4gICAgICAgICAgICBtdXNjbGVCbG9jay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbXVzY2xlQmxvY2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3llbGxvdyc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG11c2NsZUJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG11c2NsZUJsb2NrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgYWJzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFicycpO1xuICAgICAgICBhYnNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcuYWJzID4gZGl2JykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhYnNCbG9ja3MgPSBBcnJheS5mcm9tKGFic0NvbnRhaW5lci5jaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgYWJzQmxvY2tzLmZvckVhY2goKGFic0Jsb2NrKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFic0Jsb2NrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd5ZWxsb3cnO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYWJzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcuYWJzID4gZGl2JykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhYnNCbG9ja3MgPSBBcnJheS5mcm9tKGFic0NvbnRhaW5lci5jaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgYWJzQmxvY2tzLmZvckVhY2goKGFic0Jsb2NrKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFic0Jsb2NrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZEV4ZXJjaXNlTGlzdGVuZXIoKSB7XG4gICAgICAgIGNvbnN0IG11c2NsZUJsb2NrcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm11c2NsZS1tYXAgZGl2Om5vdCguYWJzLCAuYWJzIGRpdiknKSk7XG4gICAgICAgIG11c2NsZUJsb2Nrcy5mb3JFYWNoKG11c2NsZUJsb2NrID0+IHtcbiAgICAgICAgICAgIG11c2NsZUJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmV4ZXJjaXNlQ291bnQgPCAzKSB7XG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRXhlcmNpc2UobXVzY2xlQmxvY2ssIHRoaXMuZXhlcmNpc2VDb3VudCArIDEsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4ZXJjaXNlQ291bnQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG11c2NsZUJsb2NrLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTXVzY2xlTWFwOyJdLCJuYW1lcyI6WyJnZW5lcmF0ZUV4ZXJjaXNlIiwiZXhlcmNpc2VzIiwiTXVzY2xlTWFwIiwiY29uc3RydWN0b3IiLCJjb250YWluZXJFbCIsImNvbnRhaW5lciIsInJlbmRlciIsImJpbmRFdmVudHMiLCJleGVyY2lzZUNvdW50IiwiYWRkRXhlcmNpc2VMaXN0ZW5lciIsImJpbmQiLCJtdXNjbGVNYXAiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJoZWFkIiwiY2hlc3QiLCJsZWZ0U2hvdWxkZXIiLCJsZWZ0QmljZXAiLCJsZWZ0Rm9yZWFybSIsImxlZnRIYW5kIiwicmlnaHRTaG91bGRlciIsInJpZ2h0QmljZXAiLCJyaWdodEZvcmVhcm0iLCJyaWdodEhhbmQiLCJhYnNDb250YWluZXIiLCJpIiwiYWJzIiwiYXBwZW5kQ2hpbGQiLCJsZWZ0R2x1dGUiLCJsZWZ0UXVhZCIsImxlZnRDYWxmIiwibGVmdEZvb3QiLCJyaWdodEdsdXRlIiwicmlnaHRRdWFkIiwicmlnaHRDYWxmIiwicmlnaHRGb290IiwiYWRkSG92ZXJMaXN0ZW5lciIsIm11c2NsZUJsb2NrcyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibXVzY2xlQmxvY2siLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJxdWVyeVNlbGVjdG9yIiwiZSIsInRhcmdldCIsIm1hdGNoZXMiLCJhYnNCbG9ja3MiLCJjaGlsZHJlbiIsImFic0Jsb2NrIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/muscleMap.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWZpdG5lc3NidWRkeS8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;