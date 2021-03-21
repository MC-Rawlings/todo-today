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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTaskElement\": () => (/* binding */ createTaskElement),\n/* harmony export */   \"createListElement\": () => (/* binding */ createListElement),\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"renderLists\": () => (/* binding */ renderLists)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ \"./src/list.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n// eslint-disable-next-line import/no-cycle\n\n\n\n\nvar taskSection = document.querySelector('.tasks-section');\nvar listSection = document.querySelector('.lists'); // helper functions\n\nvar clearTaskSection = function clearTaskSection() {\n  while (taskSection.firstChild) {\n    taskSection.removeChild(taskSection.firstChild);\n  }\n};\n\nvar clearListSection = function clearListSection() {\n  while (listSection.firstChild) {\n    listSection.removeChild(listSection.firstChild);\n  }\n}; // append to DOM\n\n\nvar createTaskElement = function createTaskElement(task, index) {\n  var title = task.getTitle();\n  var description = task.getDescription();\n  var priority = task.getPriority(); // main task element\n\n  var taskElement = document.createElement('li');\n  taskElement.classList.add('task-card'); // title container\n\n  var titleDiv = document.createElement('div');\n  titleDiv.classList.add('check-title');\n  titleDiv.addEventListener('click', function () {\n    handleToggleChecked(index);\n  });\n  var checkboxImage = document.createElement('img');\n  checkboxImage.classList.add('check-icon');\n\n  if (task.getIsChecked() === false) {\n    checkboxImage.src = 'assets/images/checkbox.svg';\n  } else {\n    checkboxImage.src = 'assets/images/checked.svg';\n    taskElement.classList.add('checked');\n  }\n\n  checkboxImage.alt = 'complete-task checkbox';\n  var taskTitle = document.createElement('h4');\n  taskTitle.classList.add('task-title');\n  taskTitle.textContent = \"\".concat(title);\n  titleDiv.appendChild(checkboxImage);\n  titleDiv.appendChild(taskTitle);\n  var descriptionPara = document.createElement('p');\n  descriptionPara.classList.add('task-description');\n  descriptionPara.textContent = description; // options container\n\n  var taskOptions = document.createElement('div');\n  taskOptions.classList.add('task-options');\n  var prioritySetting = document.createElement('img');\n  prioritySetting.classList.add('priority-flag');\n  prioritySetting.src = \"assets/images/flag-\".concat(priority, \".svg\");\n  prioritySetting.alt = 'priority selection button';\n  var editBtn = document.createElement('img');\n  editBtn.classList.add('task-option-btn');\n  editBtn.classList.add('task-edit');\n  editBtn.src = 'assets/images/edit.svg';\n  editBtn.alt = 'edit-task button';\n  editBtn.addEventListener('click', function () {\n    handleEditTask(index);\n  });\n  var deleteButton = document.createElement('btn');\n  deleteButton.addEventListener('click', function () {\n    // eslint-disable-next-line no-use-before-define\n    handleRemoveTask(index);\n  });\n  var deleteImage = document.createElement('img');\n  deleteImage.src = 'assets/images/delete.svg';\n  deleteImage.alt = 'Delete task';\n  deleteButton.appendChild(deleteImage);\n  taskOptions.appendChild(prioritySetting);\n  taskOptions.appendChild(editBtn);\n  taskOptions.appendChild(deleteButton);\n  taskElement.appendChild(titleDiv);\n  taskElement.appendChild(descriptionPara);\n  taskElement.appendChild(taskOptions);\n  return taskElement;\n};\n\nvar createListElement = function createListElement(list, index) {\n  var title = list.getTitle();\n  var listItem = document.createElement('li');\n  listItem.classList.add('list-item');\n  listItem.textContent = \"\".concat(title);\n  listItem.addEventListener('click', function () {\n    handleRenderList(list);\n  });\n  return listItem;\n};\n\nvar renderLists = function renderLists() {\n  clearListSection();\n  var rootListArr = Array.from(_index__WEBPACK_IMPORTED_MODULE_0__.default.getList());\n  rootListArr.forEach(function (list, index) {\n    var listElement = createListElement(list, index);\n    listSection.appendChild(listElement);\n  });\n  var addListBtn = document.createElement('div');\n  addListBtn.classList.add('add-list__btn');\n  addListBtn.textContent = 'ADD LIST';\n  addListBtn.addEventListener('click', openListModal);\n  listSection.appendChild(addListBtn);\n  (0,_storage__WEBPACK_IMPORTED_MODULE_3__.saveToLocalStorage)();\n};\n\nvar render = function render() {\n  var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _index__WEBPACK_IMPORTED_MODULE_0__.default.getList()[0];\n  clearTaskSection(); // eslint-disable-next-line prefer-destructuring\n\n  var listArr = Array.from(list.getList());\n  listArr.forEach(function (task, index) {\n    var taskElement = createTaskElement(task, index);\n    taskSection.appendChild(taskElement);\n  });\n  document.querySelector('.tasks-section__title').textContent = \"\".concat(list.getTitle());\n  (0,_storage__WEBPACK_IMPORTED_MODULE_3__.saveToLocalStorage)();\n};\n\nvar handleRemoveTask = function handleRemoveTask(index) {\n  var list = _index__WEBPACK_IMPORTED_MODULE_0__.default.getList()[getListIndex()];\n  list.removeTask(index);\n  render(list);\n};\n\nvar handleToggleChecked = function handleToggleChecked(index) {\n  var list = _index__WEBPACK_IMPORTED_MODULE_0__.default.getList()[getListIndex()];\n  list.getList()[index].toggleCheck();\n  render(list);\n};\n\nvar handleEditTask = function handleEditTask(index) {\n  var list = _index__WEBPACK_IMPORTED_MODULE_0__.default.getList()[getListIndex()];\n  var editTaskForm = document.querySelector('.edit-task__form');\n  var title = list.getList()[index].getTitle();\n  var description = list.getList()[index].getDescription();\n  var priority = list.getList()[index].getPriority(); // open form with relative task info\n\n  editTaskForm.elements[0].value = title;\n  editTaskForm.elements[1].value = description;\n  document.getElementById(\"edit-\".concat(priority)).checked = true;\n  openEditModal(); // replace task with new info and render\n\n  document.getElementById('edit-task__confirm').addEventListener('click', function () {\n    console.log(editTaskForm.elements[0].value);\n    list.getList()[index].setTitle(editTaskForm.elements[0].value);\n    list.getList()[index].setDescription(editTaskForm.elements[1].value);\n    console.log(editTaskForm.elements[1].value);\n    list.getList()[index].setPriority(getPriorityEdit());\n    render(list);\n    closeEditModal();\n  }, {\n    once: true\n  });\n};\n\nvar handleRenderList = function handleRenderList(list) {\n  document.querySelector('.tasks-section__title').textContent = \"\".concat(list.getTitle());\n  render(list);\n};\n\nvar handleRemoveList = function handleRemoveList() {\n  _index__WEBPACK_IMPORTED_MODULE_0__.default.removeTask(getListIndex());\n  renderLists();\n  render();\n};\n\nvar handleEditTitle = function handleEditTitle() {\n  document.querySelector('.add-list__form-edit').elements[0].value = _index__WEBPACK_IMPORTED_MODULE_0__.default.getList()[getListIndex()].getTitle();\n  openListModalEdit(); // Replace with new info and render\n\n  document.getElementById('edit-list__confirm').addEventListener('click', function () {\n    var list = _index__WEBPACK_IMPORTED_MODULE_0__.default.getList()[getListIndex()];\n    list.setTitle(document.querySelector('.add-list__form-edit').elements[0].value);\n    renderLists();\n    render(list);\n    closeListModalEdit();\n  }, {\n    once: true\n  });\n}; // UI functions\n\n\nvar openEditModal = function openEditModal() {\n  document.querySelector('.modal-bg__task-edit').style.display = 'flex';\n};\n\nvar closeEditModal = function closeEditModal() {\n  document.querySelector('.modal-bg__task-edit').style.display = 'none';\n};\n\nvar openTaskModal = function openTaskModal() {\n  document.querySelector('.modal-bg__task').style.display = 'flex';\n};\n\nvar closeTaskModal = function closeTaskModal() {\n  document.querySelector('.modal-bg__task').style.display = 'none';\n};\n\nvar openListModal = function openListModal() {\n  document.querySelector('.modal-bg__list').style.display = 'flex';\n};\n\nvar closeListModal = function closeListModal() {\n  document.querySelector('.modal-bg__list').style.display = 'none';\n};\n\nvar openListModalEdit = function openListModalEdit() {\n  document.querySelector('.modal-bg__list-edit').style.display = 'flex';\n};\n\nvar closeListModalEdit = function closeListModalEdit() {\n  document.querySelector('.modal-bg__list-edit').style.display = 'none';\n}; // Calling all eventListeners\n// eslint-disable-next-line no-unused-vars\n\n\nvar eventListeners = function () {\n  var taskForm = document.querySelector('.add-task__form'); // Open add-task modal\n\n  document.querySelector('.tasks-add-btn').addEventListener('click', openTaskModal); // Cancel add-task form\n\n  document.querySelector('#add-task__cancel').addEventListener('click', function () {\n    taskForm.reset();\n    closeTaskModal();\n  }); // Confirm add-task form\n\n  document.querySelector('#add-task__confirm').addEventListener('click', function () {\n    var taskTitle = taskForm.elements[0].value;\n    var taskDescription = taskForm.elements[1].value; // get checked priority\n\n    var taskPriority = getPriority(); // create task and add to list\n\n    var newTask = (0,_task__WEBPACK_IMPORTED_MODULE_1__.default)(taskTitle, taskDescription, taskPriority);\n    var list = _index__WEBPACK_IMPORTED_MODULE_0__.default.getList()[getListIndex()];\n    list.addToList(newTask); // reset form and render\n\n    taskForm.reset();\n    closeTaskModal();\n    render(list);\n  }); // Confirm add-list form\n\n  document.querySelector('#add-list__confirm').addEventListener('click', function () {\n    var listForm = document.querySelector('.add-list__form');\n    var newList = (0,_list__WEBPACK_IMPORTED_MODULE_2__.default)(listForm.elements[0].value);\n    _index__WEBPACK_IMPORTED_MODULE_0__.default.addToList(newList);\n    listForm.reset();\n    closeListModal();\n    renderLists();\n  }); // Cancel add-list form\n\n  document.querySelector('#add-list__cancel').addEventListener('click', closeListModal); // Remove list\n\n  document.querySelector('.delete-list_title').addEventListener('click', handleRemoveList); // Edit list title\n\n  document.querySelector('.edit-list__title').addEventListener('click', handleEditTitle); // Cancel list edit\n\n  document.querySelector('#edit-list__cancel').addEventListener('click', closeListModalEdit); // Open my-list menu - mobile\n\n  document.querySelector('.toggle-lists').addEventListener('click', function () {\n    var lists = document.querySelector('.lists'); // eslint-disable-next-line no-unused-expressions\n\n    lists.style.display === 'none' ? lists.style.display = 'flex' : lists.style.display = 'none';\n  });\n  document.querySelector('#edit-task__cancel').addEventListener('click', function () {\n    closeEditModal();\n  });\n}();\n\nvar getPriority = function getPriority() {\n  var priorities = document.querySelectorAll('.priority-input');\n\n  if (priorities[0].checked === true) {\n    return 'high';\n  }\n\n  if (priorities[2].checked === true) {\n    return 'low';\n  }\n\n  return 'medium';\n};\n\nvar getPriorityEdit = function getPriorityEdit() {\n  var priorities = document.querySelectorAll('.priority-input-edit');\n\n  if (priorities[0].checked === true) {\n    return 'high';\n  }\n\n  if (priorities[2].checked === true) {\n    return 'low';\n  }\n\n  return 'medium';\n};\n\nvar getListIndex = function getListIndex() {\n  var activeListIndex = _index__WEBPACK_IMPORTED_MODULE_0__.default.getList().findIndex(function (list) {\n    return list.getTitle() === document.querySelector('.tasks-section__title').textContent;\n  });\n  console.log(activeListIndex);\n  return activeListIndex;\n};\n\n\n\n//# sourceURL=webpack://today-today/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"defaultList\": () => (/* binding */ defaultList)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ \"./src/list.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _mockData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mockData */ \"./src/mockData.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* eslint-disable import/no-cycle */\n\n\n\n\n // load default examples\n\nvar rootList = (0,_list__WEBPACK_IMPORTED_MODULE_1__.default)('Root');\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootList);\nvar defaultList = (0,_list__WEBPACK_IMPORTED_MODULE_1__.default)('Home');\nrootList.addToList(defaultList);\n_mockData__WEBPACK_IMPORTED_MODULE_3__.mockTasks.forEach(function (_ref) {\n  var title = _ref.title,\n      description = _ref.description,\n      priority = _ref.priority;\n  var newTask = (0,_task__WEBPACK_IMPORTED_MODULE_2__.default)(title, description, priority);\n  defaultList.addToList(newTask);\n});\n\nif (localStorage.getItem('rootList') !== null) {\n  (0,_storage__WEBPACK_IMPORTED_MODULE_4__.loadFromLocalStorage)();\n}\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.render)();\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderLists)();\n\n\n//# sourceURL=webpack://today-today/./src/index.js?");

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar createList = function createList(title) {\n  var list = []; // Getters\n\n  var getTitle = function getTitle() {\n    return title;\n  };\n\n  var getList = function getList() {\n    return list;\n  }; // Setters\n  // eslint-disable-next-line no-param-reassign\n  // eslint-disable-next-line no-return-assign\n\n\n  var setTitle = function setTitle(newTitle) {\n    return title = newTitle;\n  }; // eslint-disable-next-line no-return-assign\n\n\n  var updateList = function updateList(newList) {\n    return list = newList;\n  }; // Methods\n\n\n  var addToList = function addToList(task) {\n    return list.push(task);\n  };\n\n  var removeTask = function removeTask(index) {\n    list.splice(index, 1);\n  };\n\n  return {\n    getTitle: getTitle,\n    getList: getList,\n    setTitle: setTitle,\n    addToList: addToList,\n    removeTask: removeTask,\n    updateList: updateList\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createList);\n\n//# sourceURL=webpack://today-today/./src/list.js?");

/***/ }),

/***/ "./src/mockData.js":
/*!*************************!*\
  !*** ./src/mockData.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mockTasks\": () => (/* binding */ mockTasks)\n/* harmony export */ });\n// eslint-disable-next-line import/prefer-default-export\nvar mockTasks = [{\n  title: 'Example 0',\n  description: 'Example of a to-do item 0',\n  priority: 'low'\n}, {\n  title: 'Example 1',\n  description: 'Example of a to-do item 1',\n  priority: 'medium'\n}, {\n  title: 'Example 2',\n  description: 'Example of a to-do item 2',\n  priority: 'high'\n}];\n\n//# sourceURL=webpack://today-today/./src/mockData.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saveToLocalStorage\": () => (/* binding */ saveToLocalStorage),\n/* harmony export */   \"loadFromLocalStorage\": () => (/* binding */ loadFromLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ \"./src/list.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\n\n\nvar saveToLocalStorage = function saveToLocalStorage() {\n  var allLists = _index__WEBPACK_IMPORTED_MODULE_1__.default.getList();\n  var newRootList = []; // loop through all the lists in root\n\n  allLists.forEach(function (list) {\n    var tasks = list.getList();\n    var listData = {\n      title: list.getTitle(),\n      list: []\n    }; // loop through all tasks in each list\n\n    tasks.forEach(function (task) {\n      var taskData = {\n        title: task.getTitle(),\n        description: task.getDescription(),\n        priority: task.getPriority(),\n        isChecked: task.getIsChecked()\n      };\n      listData.list.push(taskData);\n    });\n    newRootList.push(listData);\n  });\n  localStorage.setItem('rootList', JSON.stringify(newRootList));\n};\n\nvar loadFromLocalStorage = function loadFromLocalStorage() {\n  var lists = JSON.parse(localStorage.getItem('rootList'));\n  var newRoot = [];\n  console.log(lists);\n  lists.forEach(function (list) {\n    var listTitle = list.title;\n    console.log(listTitle);\n    var newList = (0,_list__WEBPACK_IMPORTED_MODULE_2__.default)(listTitle);\n    list.list.forEach(function (task) {\n      var title = task.title,\n          priority = task.priority,\n          description = task.description,\n          isChecked = task.isChecked;\n      var newTask = (0,_task__WEBPACK_IMPORTED_MODULE_3__.default)(title, description, priority);\n\n      if (newTask.getIsChecked() !== task.isChecked) {\n        newTask.toggleCheck();\n      }\n\n      newList.addToList(newTask);\n    });\n    newRoot.push(newList);\n  });\n  _index__WEBPACK_IMPORTED_MODULE_1__.default.updateList(newRoot);\n  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.render)();\n  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderLists)();\n};\n\n\n\n//# sourceURL=webpack://today-today/./src/storage.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-param-reassign */\n\n/* eslint-disable no-return-assign */\nvar createTask = function createTask(title, description, priority) {\n  var isChecked = false; // Getters\n\n  var getTitle = function getTitle() {\n    return title;\n  };\n\n  var getDescription = function getDescription() {\n    return description;\n  };\n\n  var getPriority = function getPriority() {\n    return priority;\n  };\n\n  var getIsChecked = function getIsChecked() {\n    return isChecked;\n  }; // Setters\n\n\n  var setTitle = function setTitle(newTitle) {\n    return title = newTitle;\n  };\n\n  var setDescription = function setDescription(newDescription) {\n    return description = newDescription;\n  };\n\n  var setPriority = function setPriority(newPriority) {\n    return priority = newPriority;\n  };\n\n  var toggleCheck = function toggleCheck() {\n    // eslint-disable-next-line no-unused-expressions\n    if (isChecked === false) {\n      isChecked = true;\n    } else {\n      isChecked = false;\n    }\n  };\n\n  return {\n    getTitle: getTitle,\n    getDescription: getDescription,\n    getPriority: getPriority,\n    getIsChecked: getIsChecked,\n    setTitle: setTitle,\n    setDescription: setDescription,\n    setPriority: setPriority,\n    toggleCheck: toggleCheck\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);\n\n//# sourceURL=webpack://today-today/./src/task.js?");

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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;