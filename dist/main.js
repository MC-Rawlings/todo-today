/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appendTask\": () => /* binding */ appendTask,\n/* harmony export */   \"appendList\": () => /* binding */ appendList\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n// eslint-disable-next-line import/no-cycle\n\n\n\n// Append to DOM\nconst appendTask = (task) => {\n  const taskTitle = task.getTitle();\n  const taskDescription = task.getDescription();\n\n  const toAppend = document.createElement('li');\n  toAppend.classList.add('task-card');\n  toAppend.innerHTML = `\n        <div class=\"check-title\">\n            <img src=\"css/images/checkbox.svg\" alt=\"\" class=\"check-icon\">\n            <h4 class=\"task-title\">${taskTitle}</h4>\n        </div>\n        <p class=\"task-description\">${taskDescription}</p>\n        <div class=\"task-options\">\n            <img src=\"css/images/flag-orange.svg\" alt=\"\" class=\"priority-flag\">\n            <img src=\"css/images/edit.svg\" alt=\"\" class=\"task-option-btn task-edit\">\n            <img src=\"css/images/delete.svg\" alt=\"\" class=\"task-option-btn task-delete\">\n        </div>\n    `;\n\n  document.querySelector('.tasks-section').appendChild(toAppend);\n};\n\nconst appendList = (list) => {\n  const listTitle = list.getTitle();\n\n  const toAppend = document.createElement('li');\n  toAppend.classList.add('list-item');\n  toAppend.innerText = `${listTitle}`;\n\n  document.querySelector('.lists').appendChild(toAppend);\n};\n\n// UI functions\nconst openModal = () => {\n  document.querySelector('.modal-bg').style.display = 'flex';\n};\n\nconst closeModal = () => {\n  document.querySelector('.modal-bg').style.display = 'none';\n};\n\n// Calling all eventListeners\n// eslint-disable-next-line no-unused-vars\nconst eventListeners = (() => {\n  // Open add-task modal\n  document.querySelector('.tasks-add-btn').addEventListener('click', openModal);\n\n  // Cancel add-task form\n  document\n    .querySelector('#add-task__cancel')\n    .addEventListener('click', closeModal);\n\n  // Confirm add-task form\n  document.querySelector('#add-task__confirm').addEventListener('click', () => {\n    const form = document.querySelector('form');\n    const newTask = (0,_task__WEBPACK_IMPORTED_MODULE_1__.default)(form.elements[0].value, form.elements[1].value, form.elements[2].id);\n    const defaultList = _index__WEBPACK_IMPORTED_MODULE_0__.default.getList()[0];\n    defaultList.addToList(newTask);\n    appendTask(newTask);\n\n    form.reset();\n    closeModal();\n  });\n\n  // Open my-list menu - mobile\n  document.querySelector('.toggle-lists').addEventListener('click', () => {\n    const lists = document.querySelector('.lists');\n    // eslint-disable-next-line no-unused-expressions\n    lists.style.display === 'none'\n      ? (lists.style.display = 'flex')\n      : (lists.style.display = 'none');\n  });\n})();\n\n\n\n\n//# sourceURL=webpack://today-today/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ \"./src/list.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* eslint-disable import/no-cycle */\n\n\n\n\n// load default examples\nconst rootList = (0,_list__WEBPACK_IMPORTED_MODULE_1__.default)('Root');\nconst defaultList = (0,_list__WEBPACK_IMPORTED_MODULE_1__.default)('Home');\ndefaultList.toggleIsActive();\nconst defaultTask = (0,_task__WEBPACK_IMPORTED_MODULE_2__.default)('Example', 'Example of a to-do item', 'medium');\n\ndefaultList.addToList(defaultTask);\nrootList.addToList(defaultList);\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.appendTask)(defaultTask);\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.appendList)(defaultList);\n\nconsole.log(rootList.getList()[0].getList()[0].getPriority());\n\n// eslint-disable-next-line import/prefer-default-export\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootList);\n\n\n//# sourceURL=webpack://today-today/./src/index.js?");

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* eslint-disable no-unused-expressions */\n/* eslint-disable no-return-assign */\n// import { createTask } from './task';\n// eslint-disable-next-line import/no-cycle\n\n\nconst createList = (title) => {\n  const list = [];\n  let isActive = false;\n\n  // Getters\n  const getTitle = () => title;\n  const getList = () => list;\n  const getIsActive = () => isActive;\n\n  // Setters\n  // eslint-disable-next-line no-param-reassign\n  const setTitle = (newTitle) => (title = newTitle);\n  const toggleIsActive = () => {\n    isActive === false ? (isActive = true) : (isActive = false);\n  };\n\n  // Methods\n  const addToList = (task) => list.push(task);\n\n  const removeTask = (taskTitle) => {\n    const index = list.findIndexconsole.log(_index__WEBPACK_IMPORTED_MODULE_0__.default.getList()[0].getTitle());\n    (task) => {\n      task.getTitle === taskTitle;\n    };\n\n    list.splice(index, 1);\n  };\n\n  return {\n    getTitle,\n    getList,\n    getIsActive,\n    setTitle,\n    toggleIsActive,\n    addToList,\n    removeTask,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createList);\n\n\n//# sourceURL=webpack://today-today/./src/list.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* eslint-disable no-param-reassign */\n/* eslint-disable no-return-assign */\nconst createTask = (title, description, priority) => {\n  let isChecked = false;\n\n  // Getters\n  const getTitle = () => title;\n  const getDescription = () => description;\n  const getPriority = () => priority;\n  const getIsChecked = () => isChecked;\n\n  // Setters\n  const setTitle = (newTitle) => {\n    const tempTitle = newTitle;\n    return tempTitle;\n  };\n\n  const setDescription = (newDescription) => (description = newDescription);\n  const setPriority = (newPriority) => (priority = newPriority);\n\n  const toggleCheck = () => {\n    // eslint-disable-next-line no-unused-expressions\n    isChecked === false ? (isChecked = true) : (isChecked = false);\n  };\n\n  return {\n    getTitle,\n    getDescription,\n    getPriority,\n    getIsChecked,\n    setTitle,\n    setDescription,\n    setPriority,\n    toggleCheck,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);\n\n\n//# sourceURL=webpack://today-today/./src/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.js");
/******/ })()
;