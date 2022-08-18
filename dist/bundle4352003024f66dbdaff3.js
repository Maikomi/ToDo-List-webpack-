/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addNewTask.js":
/*!***************************!*\
  !*** ./src/addNewTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _removeTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeTask */ "./src/removeTask.js");
/* harmony import */ var _pickColorForNewTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pickColorForNewTask */ "./src/pickColorForNewTask.js");
/* harmony import */ var _setTaskAsDone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setTaskAsDone */ "./src/setTaskAsDone.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var addNewTask = function addNewTask() {
  var id = '';
  var taskList = document.querySelector("ul");

  if (taskList.childNodes.length === 0) {
    id = '0';
  }

  var newTaskName = document.getElementById("name").value;
  var newTaskDescription = document.getElementById("description").value;

  if (newTaskName == "") {
    alert("Please name you task");
  } else {
    var tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

    var checkForDuplication = function checkForDuplication(tasks) {
      var _iterator = _createForOfIteratorHelper(tasks),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _task = _step.value;

          if (_task.name == newTaskName) {
            alert("task already exist");
            document.getElementById("name").value = "";
            document.getElementById("description").value = "";
            return true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return false;
    };

    if (checkForDuplication(tasks)) return;

    if (id == '') {
      var lengthOfArr = tasks.length;
      var index = lengthOfArr - 1;
      var lastTask = tasks[index];
      var lastId = Number(lastTask.myId);
      var newId = lastId + 1;
      id = newId.toString();
    }

    var newTask = document.createElement("li");
    newTask.innerHTML = "<article><div class=\"taskText\"><h3>".concat(newTaskName, "</h3><p>").concat(newTaskDescription, "</p></div><div class =\"check\"></div><div class = \"delete\"></div></article>");
    newTask.querySelector(".check").addEventListener("click", function (event) {
      return (0,_setTaskAsDone__WEBPACK_IMPORTED_MODULE_2__["default"])(event);
    });
    newTask.querySelector(".delete").addEventListener("click", function (event) {
      return (0,_removeTask__WEBPACK_IMPORTED_MODULE_0__["default"])(event);
    });
    var color = (0,_pickColorForNewTask__WEBPACK_IMPORTED_MODULE_1__["default"])();
    newTask.classList.add(color);
    newTask.setAttribute('id', id);
    taskList.insertBefore(newTask, taskList.children[0]);
    var task = {
      name: newTaskName,
      description: newTaskDescription,
      color: color,
      myId: id
    };
    localStorage.setItem("tasks", JSON.stringify([].concat(_toConsumableArray(JSON.parse(localStorage.getItem("tasks"))), [task])));
  }

  document.getElementById("name").value = "";
  document.getElementById("description").value = "";
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNewTask);

/***/ }),

/***/ "./src/changeLightDarkMode.js":
/*!************************************!*\
  !*** ./src/changeLightDarkMode.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var changeLightDarkMode = function changeLightDarkMode() {
  document.body.classList.toggle("dark");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeLightDarkMode);

/***/ }),

/***/ "./src/loadTasks.js":
/*!**************************!*\
  !*** ./src/loadTasks.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _removeTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeTask */ "./src/removeTask.js");
/* harmony import */ var _setTaskAsDone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setTaskAsDone */ "./src/setTaskAsDone.js");



var loadTasks = function loadTasks() {
  var taskList = document.querySelector("ul");
  if (localStorage.getItem("tasks") == null) return;
  var tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  tasks.forEach(function (task) {
    var li = document.createElement("li");
    li.classList.add(task.color);
    li.innerHTML = "<article><div class=\"taskText\"><h3>".concat(task.name, "</h3><p>").concat(task.description, "</p></div><div class =\"check\"></div><div class = \"delete\"></div></article>");
    li.querySelector(".check").addEventListener("click", function (event) {
      return (0,_setTaskAsDone__WEBPACK_IMPORTED_MODULE_1__["default"])(event);
    });
    li.querySelector(".delete").addEventListener("click", function (event) {
      return (0,_removeTask__WEBPACK_IMPORTED_MODULE_0__["default"])(event);
    });
    li.setAttribute('id', task.myId);
    taskList.insertBefore(li, taskList.children[0]);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadTasks);

/***/ }),

/***/ "./src/pickColorForNewTask.js":
/*!************************************!*\
  !*** ./src/pickColorForNewTask.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var pickColorForNewTask = function pickColorForNewTask() {
  var random = Math.floor(Math.random() * 5).toString();
  var x = '';

  switch (random) {
    case '0':
      x = 'red';
      break;

    case '1':
      x = 'blue';
      break;

    case '2':
      x = 'mint';
      break;

    case '3':
      x = 'gold';
      break;

    case '4':
      x = 'green';
      break;
  }

  return x;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pickColorForNewTask);

/***/ }),

/***/ "./src/removeTask.js":
/*!***************************!*\
  !*** ./src/removeTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var removeTask = function removeTask(event) {
  var tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  var wholeTask = event.target.parentElement.parentElement;
  var id = wholeTask.getAttribute('id');
  document.getElementById(id).remove();

  var isDifferentThanId = function isDifferentThanId(value) {
    return value.myId != id;
  };

  tasks = tasks.filter(isDifferentThanId);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTask);

/***/ }),

/***/ "./src/setTaskAsDone.js":
/*!******************************!*\
  !*** ./src/setTaskAsDone.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var setTaskAsDone = function setTaskAsDone(e) {
  var parent = e.target.parentNode.parentNode;
  parent.classList.toggle("completed");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setTaskAsDone);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/colors.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/colors.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/doneRed.svg */ "./src/assets/doneRed.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/binRed.svg */ "./src/assets/binRed.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/doneBlue.svg */ "./src/assets/doneBlue.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/binBlue.svg */ "./src/assets/binBlue.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/doneMint.svg */ "./src/assets/doneMint.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/binMint.svg */ "./src/assets/binMint.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/doneGold.svg */ "./src/assets/doneGold.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/binGold.svg */ "./src/assets/binGold.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/doneGreen.svg */ "./src/assets/doneGreen.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/binGreen.svg */ "./src/assets/binGreen.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".red {\n  background-image: linear-gradient(90deg, #B21942 0%, #F2BAC9 100%);\n}\n\n.red .check {\n  background-color: #F2BAC9;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.red .delete {\n  background-color: #F2BAC9;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.red p {\n  color: #F2BAC9;\n}\n\n.blue {\n  background-image: linear-gradient(270deg, #BAD7F2 0%, #1969B2 100%);\n}\n\n.blue .check {\n  background-color: #BAD7F2;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.blue .delete {\n  background-color: #BAD7F2;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n.blue p {\n  color: #BAD7F2;\n}\n\n.mint {\n  background-image: linear-gradient(90deg, #19B26B 0%, #BAF2D8 100%);\n}\n\n.mint .check {\n  background-color: #BAF2D8;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n\n.mint .delete {\n  background-color: #BAF2D8;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n}\n\n.mint p {\n  color: #BAF2D8;\n}\n\n.gold {\n  background-image: linear-gradient(90deg, #B28719 0%, #F2E2BA 100%);\n}\n\n.gold .check {\n  background-color: #F2E2BA;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n}\n\n.gold .delete {\n  background-color: #F2E2BA;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n}\n\n.gold p {\n  color: #F2E2BA;\n}\n\n.green {\n  background-image: linear-gradient(90deg, #1AB41D 0%, #BAF2BB 100%);\n}\n\n.green .check {\n  background-color: #BAF2BB;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\n}\n\n.green .delete {\n  background-color: #BAF2BB;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\n}\n\n.green p {\n  color: #BAF2BB;\n}", "",{"version":3,"sources":["webpack://./src/styles/colors.scss"],"names":[],"mappings":"AAAA;EACI,kEAAA;AACJ;;AAEA;EACI,yBAAA;EACA,yDAAA;AACJ;;AAEA;EACI,yBAAA;EACA,yDAAA;AACJ;;AAEA;EACI,cAAA;AACJ;;AAGA;EACI,mEAAA;AAAJ;;AAGA;EACI,yBAAA;EACA,yDAAA;AAAJ;;AAGA;EACI,yBAAA;EACA,yDAAA;AAAJ;;AAGA;EACI,cAAA;AAAJ;;AAGA;EACI,kEAAA;AAAJ;;AAGA;EACI,yBAAA;EACA,yDAAA;AAAJ;;AAGA;EACI,yBAAA;EACA,yDAAA;AAAJ;;AAGA;EACI,cAAA;AAAJ;;AAGA;EACI,kEAAA;AAAJ;;AAGA;EACI,yBAAA;EACA,yDAAA;AAAJ;;AAGA;EACI,yBAAA;EACA,yDAAA;AAAJ;;AAGA;EACI,cAAA;AAAJ;;AAGA;EACI,kEAAA;AAAJ;;AAGA;EACI,yBAAA;EACA,yDAAA;AAAJ;;AAGA;EACI,yBAAA;EACA,yDAAA;AAAJ;;AAGA;EACI,cAAA;AAAJ","sourcesContent":[".red{\r\n    background-image: linear-gradient(90deg, #B21942 0%, #F2BAC9 100%);\r\n}\r\n\r\n.red .check{\r\n    background-color: #F2BAC9;\r\n    background-image: url(../assets/doneRed.svg);\r\n}\r\n\r\n.red .delete{\r\n    background-color: #F2BAC9;\r\n    background-image: url(../assets/binRed.svg);\r\n}\r\n\r\n.red p{\r\n    color: #F2BAC9;\r\n}\r\n\r\n\r\n.blue{\r\n    background-image: linear-gradient(270deg, #BAD7F2 0%, #1969B2 100%);\r\n}\r\n\r\n.blue .check{\r\n    background-color: #BAD7F2;\r\n    background-image: url(../assets/doneBlue.svg);\r\n}\r\n\r\n.blue .delete{\r\n    background-color: #BAD7F2;\r\n    background-image: url(../assets/binBlue.svg);\r\n}\r\n\r\n.blue p{\r\n    color: #BAD7F2;\r\n}\r\n\r\n.mint{\r\n    background-image: linear-gradient(90deg, #19B26B 0%, #BAF2D8 100%);\r\n}\r\n\r\n.mint .check{\r\n    background-color: #BAF2D8;\r\n    background-image: url(../assets/doneMint.svg);\r\n}\r\n\r\n.mint .delete{\r\n    background-color: #BAF2D8;\r\n    background-image: url(../assets/binMint.svg);\r\n}\r\n\r\n.mint p{\r\n    color: #BAF2D8;\r\n}\r\n\r\n.gold{\r\n    background-image: linear-gradient(90deg, #B28719 0%, #F2E2BA 100%);\r\n}\r\n\r\n.gold .check{\r\n    background-color: #F2E2BA;\r\n    background-image: url(../assets/doneGold.svg);\r\n}\r\n\r\n.gold .delete{\r\n    background-color: #F2E2BA;\r\n    background-image: url(../assets/binGold.svg);\r\n}\r\n\r\n.gold p{\r\n    color: #F2E2BA;\r\n}\r\n\r\n.green{\r\n    background-image:  linear-gradient(90deg, #1AB41D 0%, #BAF2BB 100%);\r\n}\r\n\r\n.green .check{\r\n    background-color: #BAF2BB;\r\n    background-image: url(../assets/doneGreen.svg);\r\n}\r\n\r\n.green .delete{\r\n    background-color: #BAF2BB;\r\n    background-image: url(../assets/binGreen.svg);\r\n}\r\n\r\n.green p{\r\n    color: #BAF2BB;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/darkMode.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/darkMode.scss ***!
  \***************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/addDark.svg */ "./src/assets/addDark.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/sun.svg */ "./src/assets/sun.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".dark {\n  background-color: #312F2F;\n}\n\n.dark .header {\n  border: #F8F2EF solid 0.4rem;\n  box-shadow: -8px -8px 12px 0 rgba(255, 255, 255, 0.2);\n}\n\n.dark .header__text {\n  background-color: #F8F2EF;\n  color: #312F2F;\n}\n\n.dark input {\n  font-size: 1rem;\n}\n\n.dark input::placeholder {\n  color: #312F2F;\n}\n\n.dark .addButton {\n  background-color: #827D7D;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.dark .darkMode {\n  border: #F8F2EF solid 0.4rem;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.dark li {\n  box-shadow: -8px -8px 12px 0 rgba(255, 255, 255, 0.2);\n}", "",{"version":3,"sources":["webpack://./src/styles/darkMode.scss"],"names":[],"mappings":"AAAA;EACI,yBAAA;AACJ;;AAEA;EACI,4BAAA;EACA,qDAAA;AACJ;;AAEA;EACI,yBAAA;EACA,cAAA;AACJ;;AAEA;EACI,eAAA;AACJ;;AAEA;EACI,cAAA;AACJ;;AAGA;EACI,yBAAA;EACA,yDAAA;AAAJ;;AAGA;EACI,4BAAA;EACA,yDAAA;AAAJ;;AAGA;EACI,qDAAA;AAAJ","sourcesContent":[".dark{\r\n    background-color: #312F2F;\r\n}\r\n\r\n.dark .header{\r\n    border: #F8F2EF solid 0.4rem;\r\n    box-shadow: -8px -8px 12px 0 rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.dark .header__text{\r\n    background-color: #F8F2EF;\r\n    color: #312F2F;\r\n}\r\n\r\n.dark input{\r\n    font-size: 1rem;\r\n}\r\n\r\n.dark input::placeholder{\r\n    color: #312F2F;\r\n}\r\n\r\n\r\n.dark .addButton{\r\n    background-color: #827D7D;\r\n    background-image: url(../assets/addDark.svg);\r\n}\r\n\r\n.dark .darkMode{\r\n    border: #F8F2EF solid 0.4rem;\r\n    background-image: url(../assets/sun.svg);\r\n}\r\n\r\n.dark li{\r\n    box-shadow: -8px -8px 12px 0 rgba(255, 255, 255, 0.2);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/moon.svg */ "./src/assets/moon.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/Group.svg */ "./src/assets/Group.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: #F8F2EF;\n  font-family: \"Rubik\", sans-serif;\n  display: grid;\n  grid-template-rows: 15rem auto;\n  grid-template-areas: \"input\" \"tasks\";\n}\n\n.darkMode {\n  position: absolute;\n  top: 2rem;\n  right: 2rem;\n  height: 5rem;\n  width: 5rem;\n  margin: 0;\n  border-radius: 30px;\n  border: #312F2F solid 0.4rem;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.header {\n  grid-area: input;\n  border-radius: 30px;\n  border: #312F2F solid 0.4rem;\n  width: 25rem;\n  justify-self: center;\n  margin-block: 2rem;\n  display: grid;\n  grid-template-rows: 1fr 2fr;\n  grid-template-areas: \"textBox\" \"inputBox\";\n  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25), -8px -8px 12px 0 rgba(255, 255, 255, 0.3);\n}\n\n.header__text {\n  background-color: #312F2F;\n  color: #F8F2EF;\n  text-align: center;\n  border-radius: 20px 20px 0px 0px;\n  grid-area: textBox;\n}\n\nh2 {\n  padding-block: 0.5rem;\n  font-size: 2.5rem;\n  font-weight: 500;\n}\n\n.input {\n  grid-area: inputBox;\n  display: grid;\n  grid-template-columns: 6fr 1fr;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-areas: \"name addBtn\" \"description addBtn\";\n}\n\ninput {\n  margin: 0.5rem;\n  border-radius: 30px;\n  background-color: #827D7D;\n  border: transparent;\n  color: #FFFFFF;\n  font-size: 1rem;\n  padding-left: 1rem;\n  text-transform: capitalize;\n}\n\ninput::placeholder {\n  color: #FFFFFF;\n}\n\n.name {\n  grid-area: name;\n}\n\n.description {\n  grid-area: description;\n}\n\n.addButton {\n  background-color: #827D7D;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 2rem 2rem;\n  color: #F8F2EF;\n  grid-area: addBtn;\n  margin: 0.5rem;\n  border-radius: 30px;\n}\n\nul {\n  grid-area: tasks;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  margin-inline: 5rem;\n  gap: 1rem 3rem;\n  list-style-type: none;\n}\n\nli {\n  border-radius: 30px;\n  height: 5rem;\n  background-image: linear-gradient(90deg, #B21942 0%, #F2BAC9 100%);\n  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25), -8px -8px 12px 0 rgba(255, 255, 255, 0.3);\n}\n\narticle {\n  display: grid;\n  grid-template-columns: auto 5rem 5rem;\n  column-gap: 1rem;\n  margin: 1rem;\n}\n\n.check {\n  height: 3rem;\n  width: 5rem;\n  background-size: 2rem;\n  background-repeat: no-repeat;\n  background-position: center;\n  border-radius: 30px;\n  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.2), -8px -8px 12px 0 rgba(255, 255, 255, 0.25);\n}\n\n.delete {\n  height: 3rem;\n  width: 5rem;\n  background-size: 2rem;\n  background-repeat: no-repeat;\n  background-position: center;\n  border-radius: 30px;\n  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.2), -8px -8px 12px 0 rgba(255, 255, 255, 0.25);\n}\n\nh3 {\n  color: black;\n  text-transform: capitalize;\n}\n\np {\n  width: 20ch;\n  overflow-wrap: break-word;\n}\n\n.completed p, .completed h3 {\n  text-decoration: line-through;\n}\n\n.completed {\n  opacity: 60%;\n  box-shadow: none;\n}\n\n@media (max-width: 950px) {\n  .header {\n    width: 20rem;\n    margin-block: 2rem;\n    box-shadow: -8px -8px 12px 0 rgba(0, 0, 0, 0.3), 12px 12px 16px 0 rgba(255, 255, 255, 0.25);\n  }\n  .input {\n    grid-template-columns: 5fr 1fr;\n  }\n  ul {\n    margin: auto;\n    grid-area: tasks;\n    display: flex;\n    flex-direction: column;\n    list-style-type: none;\n  }\n  li {\n    box-shadow: -8px -8px 12px 0 rgba(0, 0, 0, 0.3), 12px 12px 16px 0 rgba(255, 255, 255, 0.25);\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;EACA,SAAA;EACA,UAAA;AACJ;;AAEA;EACI,yBAAA;EACA,gCAAA;EACA,aAAA;EACA,8BAAA;EACA,oCAAA;AACJ;;AAGA;EACI,kBAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,SAAA;EACA,mBAAA;EACA,4BAAA;EACA,yDAAA;EACA,2BAAA;EACA,4BAAA;AAAJ;;AAGA;EACI,gBAAA;EACA,mBAAA;EACA,4BAAA;EACA,YAAA;EACA,oBAAA;EACA,kBAAA;EACA,aAAA;EACA,2BAAA;EACA,yCAAA;EAEA,2FAAA;AADJ;;AAIA;EACI,yBAAA;EACA,cAAA;EACA,kBAAA;EACA,gCAAA;EACA,kBAAA;AADJ;;AAIA;EACI,qBAAA;EACA,iBAAA;EACA,gBAAA;AADJ;;AAIA;EACI,mBAAA;EACA,aAAA;EACA,8BAAA;EACA,kCAAA;EACA,uDAAA;AADJ;;AAKA;EACI,cAAA;EACA,mBAAA;EACA,yBAAA;EACA,mBAAA;EACA,cAAA;EACA,eAAA;EACA,kBAAA;EACA,0BAAA;AAFJ;;AAKA;EACI,cAAA;AAFJ;;AAKA;EACI,eAAA;AAFJ;;AAKA;EACI,sBAAA;AAFJ;;AAKA;EACI,yBAAA;EACA,yDAAA;EACA,4BAAA;EACA,2BAAA;EACA,0BAAA;EACA,cAAA;EACA,iBAAA;EACA,cAAA;EACA,mBAAA;AAFJ;;AAKA;EACI,gBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,cAAA;EACA,qBAAA;AAFJ;;AAKA;EACI,mBAAA;EACA,YAAA;EACA,kEAAA;EACA,2FAAA;AAFJ;;AAKA;EACI,aAAA;EACA,qCAAA;EACA,gBAAA;EACA,YAAA;AAFJ;;AAKA;EACI,YAAA;EACA,WAAA;EACA,qBAAA;EACA,4BAAA;EACA,2BAAA;EACA,mBAAA;EACA,2FAAA;AAFJ;;AAKA;EACI,YAAA;EACA,WAAA;EACA,qBAAA;EACA,4BAAA;EACA,2BAAA;EACA,mBAAA;EACA,2FAAA;AAFJ;;AAKA;EACI,YAAA;EACA,0BAAA;AAFJ;;AAKA;EAEI,WAAA;EACA,yBAAA;AAHJ;;AAMA;EACI,6BAAA;AAHJ;;AAMA;EACI,YAAA;EACA,gBAAA;AAHJ;;AAMA;EAEI;IACI,YAAA;IACA,kBAAA;IACA,2FAAA;EAJN;EAOE;IACI,8BAAA;EALN;EAQE;IACI,YAAA;IACA,gBAAA;IACA,aAAA;IACA,sBAAA;IACA,qBAAA;EANN;EASE;IACI,2FAAA;EAPN;AACF","sourcesContent":["*, *::before, *::after {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody{\r\n    background-color: #F8F2EF;\r\n    font-family: 'Rubik', sans-serif;\r\n    display: grid;\r\n    grid-template-rows: 15rem auto;\r\n    grid-template-areas: \"input\"\r\n    \"tasks\";\r\n}\r\n\r\n.darkMode{\r\n    position: absolute;\r\n    top: 2rem;\r\n    right: 2rem;\r\n    height: 5rem;\r\n    width: 5rem;\r\n    margin: 0;\r\n    border-radius: 30px;\r\n    border: #312F2F solid 0.4rem;\r\n    background-image: url(../assets/moon.svg);\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.header{\r\n    grid-area: input;\r\n    border-radius: 30px;\r\n    border: #312F2F solid 0.4rem;\r\n    width: 25rem;\r\n    justify-self: center;\r\n    margin-block: 2rem;\r\n    display: grid;\r\n    grid-template-rows: 1fr 2fr;\r\n    grid-template-areas: \"textBox\"\r\n    \"inputBox\";\r\n    box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25), -8px -8px 12px 0 rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.header__text{\r\n    background-color: #312F2F;\r\n    color: #F8F2EF;\r\n    text-align: center;\r\n    border-radius: 20px 20px 0px 0px;\r\n    grid-area: textBox;\r\n}\r\n\r\nh2{\r\n    padding-block: 0.5rem;\r\n    font-size: 2.5rem;\r\n    font-weight: 500;\r\n}\r\n\r\n.input{\r\n    grid-area: inputBox;\r\n    display: grid;\r\n    grid-template-columns: 6fr 1fr;\r\n    grid-template-rows: repeat(2, 1fr);\r\n    grid-template-areas: \"name addBtn\"\r\n    \"description addBtn\";\r\n}\r\n\r\ninput{\r\n    margin: 0.5rem;\r\n    border-radius: 30px;\r\n    background-color: #827D7D;\r\n    border: transparent;\r\n    color: #FFFFFF;\r\n    font-size: 1rem;\r\n    padding-left: 1rem;\r\n    text-transform: capitalize;\r\n}\r\n\r\ninput::placeholder{\r\n    color: #FFFFFF;\r\n}\r\n\r\n.name{\r\n    grid-area: name;\r\n}\r\n\r\n.description{\r\n    grid-area: description;\r\n}\r\n\r\n.addButton{\r\n    background-color: #827D7D;\r\n    background-image: url(../assets/Group.svg);\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: 2rem 2rem;\r\n    color: #F8F2EF;\r\n    grid-area: addBtn;\r\n    margin: 0.5rem;\r\n    border-radius: 30px;\r\n}\r\n\r\nul{\r\n    grid-area: tasks;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    margin-inline: 5rem;\r\n    gap: 1rem 3rem;\r\n    list-style-type: none;\r\n}\r\n\r\nli{\r\n    border-radius: 30px;\r\n    height: 5rem;\r\n    background-image: linear-gradient(90deg, #B21942 0%, #F2BAC9 100%);\r\n    box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25), -8px -8px 12px 0 rgba(255, 255, 255, 0.3);\r\n}\r\n\r\narticle{\r\n    display: grid;\r\n    grid-template-columns: auto 5rem 5rem;\r\n    column-gap: 1rem;\r\n    margin: 1rem;\r\n}\r\n\r\n.check{\r\n    height: 3rem;\r\n    width: 5rem;\r\n    background-size: 2rem;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    border-radius: 30px;\r\n    box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.2), -8px -8px 12px 0 rgba(255, 255, 255, 0.25);\r\n}\r\n\r\n.delete{\r\n    height: 3rem;\r\n    width: 5rem;\r\n    background-size: 2rem;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    border-radius: 30px;\r\n    box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.2), -8px -8px 12px 0 rgba(255, 255, 255, 0.25);\r\n}\r\n\r\nh3{\r\n    color: black;\r\n    text-transform: capitalize;\r\n}\r\n\r\np{\r\n    // color: #F2BAC9;\r\n    width: 20ch;\r\n    overflow-wrap: break-word;\r\n}\r\n\r\n.completed p, .completed h3{\r\n    text-decoration: line-through;\r\n}\r\n\r\n.completed{\r\n    opacity: 60%;\r\n    box-shadow: none;\r\n}\r\n\r\n@media (max-width: 950px){\r\n\r\n    .header{\r\n        width: 20rem;\r\n        margin-block: 2rem;\r\n        box-shadow: -8px -8px 12px 0 rgba(0, 0, 0, 0.3), 12px 12px 16px 0 rgba(255, 255, 255, 0.25);\r\n    }\r\n\r\n    .input{\r\n        grid-template-columns: 5fr 1fr;\r\n    }\r\n\r\n    ul{\r\n        margin: auto;\r\n        grid-area: tasks;\r\n        display: flex;\r\n        flex-direction: column;\r\n        list-style-type: none;\r\n    }\r\n\r\n    li{\r\n        box-shadow: -8px -8px 12px 0 rgba(0, 0, 0, 0.3), 12px 12px 16px 0 rgba(255, 255, 255, 0.25);\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/colors.scss":
/*!********************************!*\
  !*** ./src/styles/colors.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_colors_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./colors.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/colors.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_colors_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_colors_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_colors_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_colors_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/darkMode.scss":
/*!**********************************!*\
  !*** ./src/styles/darkMode.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_darkMode_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./darkMode.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/darkMode.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_darkMode_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_darkMode_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_darkMode_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_darkMode_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/Group.svg":
/*!******************************!*\
  !*** ./src/assets/Group.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Group.svg";

/***/ }),

/***/ "./src/assets/addDark.svg":
/*!********************************!*\
  !*** ./src/assets/addDark.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "addDark.svg";

/***/ }),

/***/ "./src/assets/binBlue.svg":
/*!********************************!*\
  !*** ./src/assets/binBlue.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "binBlue.svg";

/***/ }),

/***/ "./src/assets/binGold.svg":
/*!********************************!*\
  !*** ./src/assets/binGold.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "binGold.svg";

/***/ }),

/***/ "./src/assets/binGreen.svg":
/*!*********************************!*\
  !*** ./src/assets/binGreen.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "binGreen.svg";

/***/ }),

/***/ "./src/assets/binMint.svg":
/*!********************************!*\
  !*** ./src/assets/binMint.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "binMint.svg";

/***/ }),

/***/ "./src/assets/binRed.svg":
/*!*******************************!*\
  !*** ./src/assets/binRed.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "binRed.svg";

/***/ }),

/***/ "./src/assets/doneBlue.svg":
/*!*********************************!*\
  !*** ./src/assets/doneBlue.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "doneBlue.svg";

/***/ }),

/***/ "./src/assets/doneGold.svg":
/*!*********************************!*\
  !*** ./src/assets/doneGold.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "doneGold.svg";

/***/ }),

/***/ "./src/assets/doneGreen.svg":
/*!**********************************!*\
  !*** ./src/assets/doneGreen.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "doneGreen.svg";

/***/ }),

/***/ "./src/assets/doneMint.svg":
/*!*********************************!*\
  !*** ./src/assets/doneMint.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "doneMint.svg";

/***/ }),

/***/ "./src/assets/doneRed.svg":
/*!********************************!*\
  !*** ./src/assets/doneRed.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "doneRed.svg";

/***/ }),

/***/ "./src/assets/moon.svg":
/*!*****************************!*\
  !*** ./src/assets/moon.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moon.svg";

/***/ }),

/***/ "./src/assets/sun.svg":
/*!****************************!*\
  !*** ./src/assets/sun.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sun.svg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadTasks */ "./src/loadTasks.js");
/* harmony import */ var _addNewTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addNewTask */ "./src/addNewTask.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_colors_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/colors.scss */ "./src/styles/colors.scss");
/* harmony import */ var _styles_darkMode_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/darkMode.scss */ "./src/styles/darkMode.scss");
/* harmony import */ var _changeLightDarkMode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./changeLightDarkMode */ "./src/changeLightDarkMode.js");
var addButton = document.getElementById("addButton");
var darkModeButton = document.getElementById("darkMode");





 // import clearAll from "./clearAll"

addButton.addEventListener("click", _addNewTask__WEBPACK_IMPORTED_MODULE_1__["default"]);
darkModeButton.addEventListener("click", _changeLightDarkMode__WEBPACK_IMPORTED_MODULE_5__["default"]);
window.addEventListener("load", _loadTasks__WEBPACK_IMPORTED_MODULE_0__["default"]); // const btn = document.getElementById("die");
// btn.addEventListener("click", clearAll);
})();

/******/ })()
;
//# sourceMappingURL=bundle4352003024f66dbdaff3.js.map