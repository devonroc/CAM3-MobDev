function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });

    var attachComponent = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);

                if (!el.componentOnReady) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return el.componentOnReady();

              case 11:
                return _context.abrupt("return", el);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, h */

  /***/
  function node_modulesIonicCoreDistEsmHapticCcbda579Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelectionEnd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelection;
    });
    /**
     * Check to see if the Haptic Plugin is available
     * @return Returns `true` or false if the plugin is available
     */

    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */


    var hapticSelection = function hapticSelection() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.selection();
      }
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionStart();
      }
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionChanged();
      }
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionEnd();
      }
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/index-729ec402.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/index-729ec402.js ***!
    \*************************************************************/

  /*! exports provided: s */

  /***/
  function node_modulesIonicCoreDistEsmIndex729ec402Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s", function () {
      return sanitizeDOMString;
    });
    /**
     * Does a simple sanitization of all elements
     * in an untrusted string
     */


    var sanitizeDOMString = function sanitizeDOMString(untrustedString) {
      try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
          return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */


        var documentFragment = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */

        blockedTags.forEach(function (blockedTag) {
          var getElementsToRemove = documentFragment.querySelectorAll(blockedTag);

          for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
            var element = getElementsToRemove[elementIndex];

            if (element.parentNode) {
              element.parentNode.removeChild(element);
            } else {
              documentFragment.removeChild(element);
            }
            /**
             * We still need to sanitize
             * the children of this element
             * as they are left behind
             */


            var childElements = getElementChildren(element);
            /* tslint:disable-next-line */

            for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
              sanitizeElement(childElements[childIndex]);
            }
          }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes

        var dfChildren = getElementChildren(documentFragment);
        /* tslint:disable-next-line */

        for (var childIndex = 0; childIndex < dfChildren.length; childIndex++) {
          sanitizeElement(dfChildren[childIndex]);
        } // Append document fragment to div


        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment); // First child is always the div we did our work in

        var getInnerDiv = fragmentDiv.querySelector('div');
        return getInnerDiv !== null ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
      } catch (err) {
        console.error(err);
        return '';
      }
    };
    /**
     * Clean up current element based on allowed attributes
     * and then recursively dig down into any child elements to
     * clean those up as well
     */


    var sanitizeElement = function sanitizeElement(element) {
      // IE uses childNodes, so ignore nodes that are not elements
      if (element.nodeType && element.nodeType !== 1) {
        return;
      }

      for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes.item(i);
        var attributeName = attribute.name; // remove non-allowed attribs

        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
          element.removeAttribute(attributeName);
          continue;
        } // clean up any allowed attribs
        // that attempt to do any JS funny-business


        var attributeValue = attribute.value;
        /* tslint:disable-next-line */

        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
          element.removeAttribute(attributeName);
        }
      }
      /**
       * Sanitize any nested children
       */


      var childElements = getElementChildren(element);
      /* tslint:disable-next-line */

      for (var _i = 0; _i < childElements.length; _i++) {
        sanitizeElement(childElements[_i]);
      }
    };
    /**
     * IE doesn't always support .children
     * so we revert to .childNodes instead
     */


    var getElementChildren = function getElementChildren(el) {
      return el.children != null ? el.children : el.childNodes;
    };

    var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
    var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
    \***********************************************************************/

  /*! exports provided: S */

  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });

    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
          return {
            r: 20,
            cx: 48,
            cy: 48,
            fill: 'none',
            viewBox: '24 24 48 48',
            transform: 'translate(0,0)',
            style: {}
          };
        }
      },
      'crescent': {
        dur: 750,
        circles: 1,
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmThemeC2dc54d9Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color) {
      return typeof color === 'string' && color.length > 0 ? _defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true) : undefined;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction) {
        var router;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context2.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context2.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context2.abrupt("return", router.push(url, direction));

              case 5:
                return _context2.abrupt("return", false);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function openURL(_x6, _x7, _x8) {
        return _ref3.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./src/app/pipes/deathsfilter.pipe.ts":
  /*!********************************************!*\
    !*** ./src/app/pipes/deathsfilter.pipe.ts ***!
    \********************************************/

  /*! exports provided: DeathsfilterPipe */

  /***/
  function srcAppPipesDeathsfilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeathsfilterPipe", function () {
      return DeathsfilterPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**  Title: ionic 4+: Search Bar - Módulos - Filtros
    *    Author:     Fernando Herrera
    *    Date: 18 mar. 2019
    *    Availability: https://www.youtube.com/watch?v=T5pdU0s4J6w&t=1994s
    **/
    //Creation of pipe called filter, it will be used to filter and search the data from the deaths page


    var DeathsfilterPipe = /*#__PURE__*/function () {
      function DeathsfilterPipe() {
        _classCallCheck(this, DeathsfilterPipe);
      }

      _createClass(DeathsfilterPipe, [{
        key: "transform",
        //PipeTransform is an interface that uses pipes, this pipes take data and transform it into to a desired output.
        value: function transform(deaths, keyword) {
          console.log(deaths); //if the variable is empty it will return the list of deaths

          if (keyword.length === 0) {
            return deaths;
          } //this fuction convert the text typed by the user and convert it in lowercase


          keyword = keyword.toLocaleLowerCase(); //this fuction will search the input in the death variable and 
          //will return the result of the filtering the input in the array

          return deaths.filter(function (death) {
            return death.death.toLocaleLowerCase().includes(keyword); //show the result in the console
            // console.log(keyword);
          });
        }
      }]);

      return DeathsfilterPipe;
    }();

    DeathsfilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'deathsfilter'
    })], DeathsfilterPipe);
    /***/
  },

  /***/
  "./src/app/pipes/filter.pipe.ts":
  /*!**************************************!*\
    !*** ./src/app/pipes/filter.pipe.ts ***!
    \**************************************/

  /*! exports provided: FilterPipe */

  /***/
  function srcAppPipesFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
      return FilterPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**  Title: ionic 4+: Search Bar - Módulos - Filtros
    *    Author:     Fernando Herrera
    *    Date: 18 mar. 2019
    *    Availability: https://www.youtube.com/watch?v=T5pdU0s4J6w&t=1994s
    **/
    //Creation of pipe called filter, it will be used to filter and search the data from the quotes page


    var FilterPipe = /*#__PURE__*/function () {
      function FilterPipe() {
        _classCallCheck(this, FilterPipe);
      }

      _createClass(FilterPipe, [{
        key: "transform",
        //PipeTransform is an interface that uses pipes, this pipes take data and transform it into to a desired output.
        value: function transform(quotes, search) {
          //show the result in the console
          // console.log(quotes);
          //if the variable is empty it will return the list of quotes
          if (search.length === 0) {
            return quotes;
          } //this fuction convert the text typed by the user and convert it in lowercase


          search = search.toLocaleLowerCase(); //this fuction will search the input in the quote and in the author variables and 
          //will return the result of the filtering the input in the array

          return quotes.filter(function (quote) {
            return quote.quote.toLocaleLowerCase().includes(search) || quote.author.toLocaleLowerCase().includes(search); //show the result in the console
            // console.log(search);
          });
        }
      }]);

      return FilterPipe;
    }();

    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'filter'
    })], FilterPipe);
    /***/
  },

  /***/
  "./src/app/pipes/pipes.module.ts":
  /*!***************************************!*\
    !*** ./src/app/pipes/pipes.module.ts ***!
    \***************************************/

  /*! exports provided: PipesModule */

  /***/
  function srcAppPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return PipesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./filter.pipe */
    "./src/app/pipes/filter.pipe.ts");
    /* harmony import */


    var _deathsfilter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./deathsfilter.pipe */
    "./src/app/pipes/deathsfilter.pipe.ts");
    /**  Title: ionic 4+: Search Bar - Módulos - Filtros
    *    Author:     Fernando Herrera
    *    Date: 18 mar. 2019
    *    Availability: https://www.youtube.com/watch?v=T5pdU0s4J6w&t=1994s
    **/
    //To be able of use the pipe module we need to import the pipes that we create into this page
    //The pipes created are FilterPipe and DeathsfilterPipe
    //To make posible that the app can interact with these pipes it is neccesary to export them


    var PipesModule = function PipesModule() {
      _classCallCheck(this, PipesModule);
    };

    PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"], _deathsfilter_pipe__WEBPACK_IMPORTED_MODULE_3__["DeathsfilterPipe"]],
      exports: [_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"], _deathsfilter_pipe__WEBPACK_IMPORTED_MODULE_3__["DeathsfilterPipe"]]
    })], PipesModule);
    /***/
  },

  /***/
  "./src/app/services/api.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/api.service.ts ***!
    \*****************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /**  Title:  Week9 (Ap 13- Ap 19)
    *    Author: Mikhail Timofeev
    *    Date: 14/April/2020
    *    Availability: https://drive.google.com/file/d/1DtBAlEWYf28XwlT0eEHIsYc8D0DKLz3Q/view?usp=sharing
    **/


    var ApiService = /*#__PURE__*/function () {
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http;
      } //Method to get the Episodes data from the API


      _createClass(ApiService, [{
        key: "getEpisodes",
        value: function getEpisodes() {
          return this.http.get("https://www.breakingbadapi.com/api/episodes");
        } //Method to get the Episode by the ID from the API

      }, {
        key: "getEpisode",
        value: function getEpisode(id) {
          return this.http.get("https://www.breakingbadapi.com/api/episodes/".concat(id));
        } //Method to get the  list of characters and the offset from the API

      }, {
        key: "getCharacters",
        value: function getCharacters(offset) {
          return this.http.get("https://www.breakingbadapi.com/api/characters?limit=20&offset=".concat(offset));
        } //Method to get the characters by ID from the API

      }, {
        key: "getCharacter",
        value: function getCharacter(id) {
          return this.http.get("https://www.breakingbadapi.com/api/characters/".concat(id));
        } //Method to get the  list of Quotes from the API

      }, {
        key: "getQuotes",
        value: function getQuotes() {
          return this.http.get("https://www.breakingbadapi.com/api/quotes");
        } //Method to get the  Quotes by ID  from the API

      }, {
        key: "getQuote",
        value: function getQuote(id) {
          return this.http.get("https://www.breakingbadapi.com/api/quotes/".concat(id));
        } //Method to get the  list of Deaths  from the API

      }, {
        key: "getDeaths",
        value: function getDeaths() {
          return this.http.get("https://www.breakingbadapi.com/api/deaths");
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ApiService);
    /***/
  },

  /***/
  "./src/app/services/favourite.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/favourite.service.ts ***!
    \***********************************************/

  /*! exports provided: FavouriteService */

  /***/
  function srcAppServicesFavouriteServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavouriteService", function () {
      return FavouriteService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /**  Title:  Week 7: Storing Data inside Ionic Apps
    *    Author: Mikhail Timofeev
    *    Date: 31/March/2020
    *    Availability: https://mikhail-cct.github.io/mobdev/wk7/#/13
    **/
    // Service to store the state of the episodes and characters marked as favourite
    //Create variables to store the state of the favourite Episode and character


    var STORAGE_KEYEpi = 'favouriteEpisodes';
    var STORAGE_KEYChar = 'favouriteCharacteres';

    var FavouriteService = /*#__PURE__*/function () {
      function FavouriteService(storage) {
        _classCallCheck(this, FavouriteService);

        this.storage = storage;
      } // Method that returns all the episodes marked as favourite 


      _createClass(FavouriteService, [{
        key: "getAllFavouriteEpisodes",
        value: function getAllFavouriteEpisodes() {
          return this.storage.get(STORAGE_KEYEpi);
        } //Method to store the id of the episode marked as favourite

      }, {
        key: "isFavouriteEp",
        value: function isFavouriteEp(episodeId) {
          return this.getAllFavouriteEpisodes().then(function (result) {
            return result && result.indexOf(episodeId) !== -1;
          });
        } //Method to mark the id of the episode as favourite

      }, {
        key: "favouriteEpisode",
        value: function favouriteEpisode(episodeId) {
          var _this = this;

          return this.getAllFavouriteEpisodes().then(function (result) {
            if (result) {
              result.push(episodeId);
              return _this.storage.set(STORAGE_KEYEpi, result);
            } else {
              return _this.storage.set(STORAGE_KEYEpi, [episodeId]);
            }
          });
        } //If the episode is alreade marked as favourite so unmark 

      }, {
        key: "unfavouriteEpisode",
        value: function unfavouriteEpisode(episodeId) {
          var _this2 = this;

          return this.getAllFavouriteEpisodes().then(function (result) {
            if (result) {
              var index = result.indexOf(episodeId);
              result.splice(index, 1);
              return _this2.storage.set(STORAGE_KEYEpi, result);
            }
          });
        } // Method that returns all the characters marked as favourite 

      }, {
        key: "getAllFavouriteCharacteres",
        value: function getAllFavouriteCharacteres() {
          return this.storage.get(STORAGE_KEYChar);
        } //Method to store the id of the character marked as favourite

      }, {
        key: "isFavouriteChar",
        value: function isFavouriteChar(characterId) {
          return this.getAllFavouriteCharacteres().then(function (result) {
            return result && result.indexOf(characterId) !== -1;
          });
        } //Method to mark the id of the character as favourite

      }, {
        key: "favouriteCharacter",
        value: function favouriteCharacter(characterId) {
          var _this3 = this;

          return this.getAllFavouriteCharacteres().then(function (result) {
            if (result) {
              result.push(characterId);
              return _this3.storage.set(STORAGE_KEYChar, result);
            } else {
              return _this3.storage.set(STORAGE_KEYChar, [characterId]);
            }
          });
        } //If the episode is alreade marked as favourite so unmark 

      }, {
        key: "unfavouriteCharacter",
        value: function unfavouriteCharacter(characterId) {
          var _this4 = this;

          return this.getAllFavouriteCharacteres().then(function (result) {
            if (result) {
              var index = result.indexOf(characterId);
              result.splice(index, 1);
              return _this4.storage.set(STORAGE_KEYChar, result);
            }
          });
        }
      }]);

      return FavouriteService;
    }();

    FavouriteService.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }];
    };

    FavouriteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])], FavouriteService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map