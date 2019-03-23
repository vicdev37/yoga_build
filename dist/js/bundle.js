/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parts_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/calc */ "./src/js/parts/calc.js");
/* harmony import */ var _parts_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/form */ "./src/js/parts/form.js");
/* harmony import */ var _parts_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/slider */ "./src/js/parts/slider.js");
/* harmony import */ var _parts_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/tabs */ "./src/js/parts/tabs.js");
/* harmony import */ var _parts_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/timer */ "./src/js/parts/timer.js");
/* harmony import */ var _parts_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/modal */ "./src/js/parts/modal.js");






window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  Object(_parts_calc__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_parts_form__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_parts_slider__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_parts_tabs__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_parts_timer__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_parts_modal__WEBPACK_IMPORTED_MODULE_5__["default"])();
});

/***/ }),

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calc() {
  // Калькулятор		
  var persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0;
  totalValue.innerHTML = 0;
  persons.addEventListener('change', function () {
    personsSum = +this.value;
    if (restDays.value == '' || persons.value == '') return;
    total = (daysSum + personsSum) * 4000;

    if (restDays.value == '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });
  restDays.addEventListener('change', function () {
    console.log('restDays.value', restDays.value, 'persons.value', persons.value);
    daysSum = +this.value;
    if (restDays.value == '' || persons.value == '') return;
    total = (daysSum + personsSum) * 4000;

    if (persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });
  place.addEventListener('change', function () {
    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      var _a = total;
      totalValue.innerHTML = _a * this.options[this.selectedIndex].value;
    }
  });
  var a;

  if (input.value != '') {
    a = input.value;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es6.promise'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es6.object.to-string'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



// function form() {
//   let message = {
//     loading: 'Загрузка',
//     success: 'Спасибо! Скоро мы с вами свяжемся!',
//     failure: 'Что-то пошло не так...'
//   };
//   let form = document.getElementsByClassName('main-form')[0],
//     formBottom = document.getElementById('form'),
//     input = document.getElementsByTagName('input'),
//     statusMessage = document.createElement('div');
//   statusMessage.classList.add('status');
//   function sendForm(elem) {
//     elem.addEventListener('submit', function (e) {
//       e.preventDefault();
//       elem.appendChild(statusMessage);
//       let formData = new FormData(elem);
//       function postData(data) {
//         return new Promise(function (resolve, reject) {
//           let request = new XMLHttpRequest();
//           request.open('POST', 'server.php');
//           request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//           request.onreadystatechange = function () {
//             if (request.readyState < 4) {
//               resolve();
//             } else if (request.readyState === 4) {
//               if (request.status == 200 && request.status < 300) {
//                 resolve();
//               } else {
//                 reject();
//               }
//             }
//           };
//           request.send(data);
//         });
//       }
//       function clearInput() {
//         for (let i = 0; i < input.length; i++) {
//           input[i].value = '';
//         }
//       }
//       postData(formData)
//         .then(() => statusMessage.innerHTML = message.loading)
//         .then(() => {
//           statusMessage.innerHTML = message.success;
//         })
//         .catch(() => statusMessage.innerHTML = message.failure)
//         .then(clearInput);
//     });
//   }
//   sendForm(form);
//   sendForm(formBottom);
// }
// export default form;
function form() {
  var sendRequest = function sendRequest(target) {
    var message = {
      loading: "Загрузка....",
      success: "Спасибо! Скоро мы с вами свяжемся!",
      failure: "Что-то пошло не так..."
    },
        statusMessage = document.createElement('div'),
        inputs = document.querySelectorAll('input'),
        clearInputs = function clearInputs() {
      inputs.forEach(function (item) {
        item.value = '';
      });
    };

    statusMessage.classList.add('status');
    target.appendChild(statusMessage);
    var formData = new FormData(target),
        obj = {};
    formData.forEach(function (value, key) {
      obj[key] = value;
    });

    var postData = function postData() {
      return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest(),
            json = JSON.stringify(obj);
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        request.onreadystatechange = function () {
          if (request.readyState < 4) {
            resolve();
          } else if (request.readyState == 4 && request.status == 200) {
            resolve();
          } else {
            reject();
          }
        };

        request.send(json);
      });
    };

    postData().then(function () {
      return statusMessage.innerHTML = message.loading;
    }).then(function () {
      return statusMessage.innerHTML = message.success;
    }).catch(function () {
      return statusMessage.innerHTML = message.failure;
    }).then(function () {
      return clearInputs();
    });
  };

  document.body.addEventListener('submit', function (e) {
    e.preventDefault();
    var target = e.target;
    target.id == 'form' || target.classList.contains('main-form') ? sendRequest(target) : '';
  });
}

/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function modal() {
  var more = document.querySelectorAll('.more, .description-btn'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'); // more.addEventListener('click', function() {
  // 	overlay.style.display = 'block';
  // 	this.classList.add('more-splash');
  // 	document.body.style.overflow = 'hidden';
  // });
  //!!

  function styleToggle(modal) {
    if (!overlay.style.display || overlay.style.display === 'none') {
      overlay.style.display = 'block';
      modal.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    } else {
      overlay.style.display = 'none';
      modal.classList.remove('more-splash');
      document.body.style.overflow = '';
    }
  }

  more.forEach(function (el) {
    el.addEventListener('click', function (event) {
      styleToggle(this);
    });
  });
  close.addEventListener('click', function () {
    styleToggle(this);
  }); // let more2 = Array.from(document.querySelectorAll('.description-btn'));
}

/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider() {
  // Slider
  // параметр текущего слайда
  var slideIndex = 1,
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');
  showSlides(slideIndex);

  function showSlides(n) {
    // чтобы когда кончались слайды, мы переходили к первому, или к последнему, если нажимаем назад
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(function (item) {
      return item.style.display = 'none';
    }); // можно записать еще так, но первая запись более современна
    // for (let i = 0; i < slides.lenght; i++) {
    // 	slides[i].style.display = 'none';
    // }

    dots.forEach(function (item) {
      return item.classList.remove('dot-active');
    });
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  prev.addEventListener('click', function () {
    plusSlides(-1);
  });
  next.addEventListener('click', function () {
    plusSlides(1);
  });
  dotsWrap.addEventListener('click', function (event) {
    for (var i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs() {
  var tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

  var hideTabContent = function hideTabContent(a) {
    for (var i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  };

  hideTabContent(1);

  var showTabContent = function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  };

  info.addEventListener('click', function (event) {
    var target = event.target;

    if (target && target.classList.contains('info-header-tab')) {
      tab.forEach(function (item, i) {
        if (target == item) {
          hideTabContent(0);
          showTabContent(i);
        }
      });
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function timer() {
  // Timer
  var deadline = '2019-03-13 04:43:07 PM';

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / (1000 * 60 * 60));
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(id, endtime) {
    var timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      var t = getTimeRemaining(endtime);
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      if (t.total <= 0) {
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
        clearInterval(timeInterval);
      }
    }
  }

  setClock('timer', deadline);
}

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map