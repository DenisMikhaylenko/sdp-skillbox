(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*! choices.js v10.2.0 | © 2022 Josh Johnson | https://github.com/jshjohnson/Choices#readme */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Choices"] = factory();
	else
		root["Choices"] = factory();
})(window, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 282:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.clearChoices = exports.activateChoices = exports.filterChoices = exports.addChoice = void 0;
var constants_1 = __webpack_require__(883);
var addChoice = function (_a) {
  var value = _a.value,
    label = _a.label,
    id = _a.id,
    groupId = _a.groupId,
    disabled = _a.disabled,
    elementId = _a.elementId,
    customProperties = _a.customProperties,
    placeholder = _a.placeholder,
    keyCode = _a.keyCode;
  return {
    type: constants_1.ACTION_TYPES.ADD_CHOICE,
    value: value,
    label: label,
    id: id,
    groupId: groupId,
    disabled: disabled,
    elementId: elementId,
    customProperties: customProperties,
    placeholder: placeholder,
    keyCode: keyCode
  };
};
exports.addChoice = addChoice;
var filterChoices = function (results) {
  return {
    type: constants_1.ACTION_TYPES.FILTER_CHOICES,
    results: results
  };
};
exports.filterChoices = filterChoices;
var activateChoices = function (active) {
  if (active === void 0) {
    active = true;
  }
  return {
    type: constants_1.ACTION_TYPES.ACTIVATE_CHOICES,
    active: active
  };
};
exports.activateChoices = activateChoices;
var clearChoices = function () {
  return {
    type: constants_1.ACTION_TYPES.CLEAR_CHOICES
  };
};
exports.clearChoices = clearChoices;

/***/ }),

/***/ 783:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.addGroup = void 0;
var constants_1 = __webpack_require__(883);
var addGroup = function (_a) {
  var value = _a.value,
    id = _a.id,
    active = _a.active,
    disabled = _a.disabled;
  return {
    type: constants_1.ACTION_TYPES.ADD_GROUP,
    value: value,
    id: id,
    active: active,
    disabled: disabled
  };
};
exports.addGroup = addGroup;

/***/ }),

/***/ 464:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.highlightItem = exports.removeItem = exports.addItem = void 0;
var constants_1 = __webpack_require__(883);
var addItem = function (_a) {
  var value = _a.value,
    label = _a.label,
    id = _a.id,
    choiceId = _a.choiceId,
    groupId = _a.groupId,
    customProperties = _a.customProperties,
    placeholder = _a.placeholder,
    keyCode = _a.keyCode;
  return {
    type: constants_1.ACTION_TYPES.ADD_ITEM,
    value: value,
    label: label,
    id: id,
    choiceId: choiceId,
    groupId: groupId,
    customProperties: customProperties,
    placeholder: placeholder,
    keyCode: keyCode
  };
};
exports.addItem = addItem;
var removeItem = function (id, choiceId) {
  return {
    type: constants_1.ACTION_TYPES.REMOVE_ITEM,
    id: id,
    choiceId: choiceId
  };
};
exports.removeItem = removeItem;
var highlightItem = function (id, highlighted) {
  return {
    type: constants_1.ACTION_TYPES.HIGHLIGHT_ITEM,
    id: id,
    highlighted: highlighted
  };
};
exports.highlightItem = highlightItem;

/***/ }),

/***/ 137:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.setIsLoading = exports.resetTo = exports.clearAll = void 0;
var constants_1 = __webpack_require__(883);
var clearAll = function () {
  return {
    type: constants_1.ACTION_TYPES.CLEAR_ALL
  };
};
exports.clearAll = clearAll;
var resetTo = function (state) {
  return {
    type: constants_1.ACTION_TYPES.RESET_TO,
    state: state
  };
};
exports.resetTo = resetTo;
var setIsLoading = function (isLoading) {
  return {
    type: constants_1.ACTION_TYPES.SET_IS_LOADING,
    isLoading: isLoading
  };
};
exports.setIsLoading = setIsLoading;

/***/ }),

/***/ 373:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var deepmerge_1 = __importDefault(__webpack_require__(996));
/* eslint-disable @typescript-eslint/no-explicit-any */
var fuse_js_1 = __importDefault(__webpack_require__(221));
var choices_1 = __webpack_require__(282);
var groups_1 = __webpack_require__(783);
var items_1 = __webpack_require__(464);
var misc_1 = __webpack_require__(137);
var components_1 = __webpack_require__(520);
var constants_1 = __webpack_require__(883);
var defaults_1 = __webpack_require__(789);
var utils_1 = __webpack_require__(799);
var reducers_1 = __webpack_require__(655);
var store_1 = __importDefault(__webpack_require__(744));
var templates_1 = __importDefault(__webpack_require__(686));
/** @see {@link http://browserhacks.com/#hack-acea075d0ac6954f275a70023906050c} */
var IS_IE11 = '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;
var USER_DEFAULTS = {};
/**
 * Choices
 * @author Josh Johnson<josh@joshuajohnson.co.uk>
 */
var Choices = /** @class */function () {
  function Choices(element, userConfig) {
    if (element === void 0) {
      element = '[data-choice]';
    }
    if (userConfig === void 0) {
      userConfig = {};
    }
    var _this = this;
    if (userConfig.allowHTML === undefined) {
      console.warn('Deprecation warning: allowHTML will default to false in a future release. To render HTML in Choices, you will need to set it to true. Setting allowHTML will suppress this message.');
    }
    this.config = deepmerge_1.default.all([defaults_1.DEFAULT_CONFIG, Choices.defaults.options, userConfig],
    // When merging array configs, replace with a copy of the userConfig array,
    // instead of concatenating with the default array
    {
      arrayMerge: function (_, sourceArray) {
        return __spreadArray([], sourceArray, true);
      }
    });
    var invalidConfigOptions = (0, utils_1.diff)(this.config, defaults_1.DEFAULT_CONFIG);
    if (invalidConfigOptions.length) {
      console.warn('Unknown config option(s) passed', invalidConfigOptions.join(', '));
    }
    var passedElement = typeof element === 'string' ? document.querySelector(element) : element;
    if (!(passedElement instanceof HTMLInputElement || passedElement instanceof HTMLSelectElement)) {
      throw TypeError('Expected one of the following types text|select-one|select-multiple');
    }
    this._isTextElement = passedElement.type === constants_1.TEXT_TYPE;
    this._isSelectOneElement = passedElement.type === constants_1.SELECT_ONE_TYPE;
    this._isSelectMultipleElement = passedElement.type === constants_1.SELECT_MULTIPLE_TYPE;
    this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement;
    this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled;
    if (!['auto', 'always'].includes("".concat(this.config.renderSelectedChoices))) {
      this.config.renderSelectedChoices = 'auto';
    }
    if (userConfig.addItemFilter && typeof userConfig.addItemFilter !== 'function') {
      var re = userConfig.addItemFilter instanceof RegExp ? userConfig.addItemFilter : new RegExp(userConfig.addItemFilter);
      this.config.addItemFilter = re.test.bind(re);
    }
    if (this._isTextElement) {
      this.passedElement = new components_1.WrappedInput({
        element: passedElement,
        classNames: this.config.classNames,
        delimiter: this.config.delimiter
      });
    } else {
      this.passedElement = new components_1.WrappedSelect({
        element: passedElement,
        classNames: this.config.classNames,
        template: function (data) {
          return _this._templates.option(data);
        }
      });
    }
    this.initialised = false;
    this._store = new store_1.default();
    this._initialState = reducers_1.defaultState;
    this._currentState = reducers_1.defaultState;
    this._prevState = reducers_1.defaultState;
    this._currentValue = '';
    this._canSearch = !!this.config.searchEnabled;
    this._isScrollingOnIe = false;
    this._highlightPosition = 0;
    this._wasTap = true;
    this._placeholderValue = this._generatePlaceholderValue();
    this._baseId = (0, utils_1.generateId)(this.passedElement.element, 'choices-');
    /**
     * setting direction in cases where it's explicitly set on passedElement
     * or when calculated direction is different from the document
     */
    this._direction = this.passedElement.dir;
    if (!this._direction) {
      var elementDirection = window.getComputedStyle(this.passedElement.element).direction;
      var documentDirection = window.getComputedStyle(document.documentElement).direction;
      if (elementDirection !== documentDirection) {
        this._direction = elementDirection;
      }
    }
    this._idNames = {
      itemChoice: 'item-choice'
    };
    if (this._isSelectElement) {
      // Assign preset groups from passed element
      this._presetGroups = this.passedElement.optionGroups;
      // Assign preset options from passed element
      this._presetOptions = this.passedElement.options;
    }
    // Assign preset choices from passed object
    this._presetChoices = this.config.choices;
    // Assign preset items from passed object first
    this._presetItems = this.config.items;
    // Add any values passed from attribute
    if (this.passedElement.value && this._isTextElement) {
      var splitValues = this.passedElement.value.split(this.config.delimiter);
      this._presetItems = this._presetItems.concat(splitValues);
    }
    // Create array of choices from option elements
    if (this.passedElement.options) {
      this.passedElement.options.forEach(function (option) {
        _this._presetChoices.push({
          value: option.value,
          label: option.innerHTML,
          selected: !!option.selected,
          disabled: option.disabled || option.parentNode.disabled,
          placeholder: option.value === '' || option.hasAttribute('placeholder'),
          customProperties: (0, utils_1.parseCustomProperties)(option.dataset.customProperties)
        });
      });
    }
    this._render = this._render.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
    this._onKeyUp = this._onKeyUp.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onClick = this._onClick.bind(this);
    this._onTouchMove = this._onTouchMove.bind(this);
    this._onTouchEnd = this._onTouchEnd.bind(this);
    this._onMouseDown = this._onMouseDown.bind(this);
    this._onMouseOver = this._onMouseOver.bind(this);
    this._onFormReset = this._onFormReset.bind(this);
    this._onSelectKey = this._onSelectKey.bind(this);
    this._onEnterKey = this._onEnterKey.bind(this);
    this._onEscapeKey = this._onEscapeKey.bind(this);
    this._onDirectionKey = this._onDirectionKey.bind(this);
    this._onDeleteKey = this._onDeleteKey.bind(this);
    // If element has already been initialised with Choices, fail silently
    if (this.passedElement.isActive) {
      if (!this.config.silent) {
        console.warn('Trying to initialise Choices on element already initialised', {
          element: element
        });
      }
      this.initialised = true;
      return;
    }
    // Let's go
    this.init();
  }
  Object.defineProperty(Choices, "defaults", {
    get: function () {
      return Object.preventExtensions({
        get options() {
          return USER_DEFAULTS;
        },
        get templates() {
          return templates_1.default;
        }
      });
    },
    enumerable: false,
    configurable: true
  });
  Choices.prototype.init = function () {
    if (this.initialised) {
      return;
    }
    this._createTemplates();
    this._createElements();
    this._createStructure();
    this._store.subscribe(this._render);
    this._render();
    this._addEventListeners();
    var shouldDisable = !this.config.addItems || this.passedElement.element.hasAttribute('disabled');
    if (shouldDisable) {
      this.disable();
    }
    this.initialised = true;
    var callbackOnInit = this.config.callbackOnInit;
    // Run callback if it is a function
    if (callbackOnInit && typeof callbackOnInit === 'function') {
      callbackOnInit.call(this);
    }
  };
  Choices.prototype.destroy = function () {
    if (!this.initialised) {
      return;
    }
    this._removeEventListeners();
    this.passedElement.reveal();
    this.containerOuter.unwrap(this.passedElement.element);
    this.clearStore();
    if (this._isSelectElement) {
      this.passedElement.options = this._presetOptions;
    }
    this._templates = templates_1.default;
    this.initialised = false;
  };
  Choices.prototype.enable = function () {
    if (this.passedElement.isDisabled) {
      this.passedElement.enable();
    }
    if (this.containerOuter.isDisabled) {
      this._addEventListeners();
      this.input.enable();
      this.containerOuter.enable();
    }
    return this;
  };
  Choices.prototype.disable = function () {
    if (!this.passedElement.isDisabled) {
      this.passedElement.disable();
    }
    if (!this.containerOuter.isDisabled) {
      this._removeEventListeners();
      this.input.disable();
      this.containerOuter.disable();
    }
    return this;
  };
  Choices.prototype.highlightItem = function (item, runEvent) {
    if (runEvent === void 0) {
      runEvent = true;
    }
    if (!item || !item.id) {
      return this;
    }
    var id = item.id,
      _a = item.groupId,
      groupId = _a === void 0 ? -1 : _a,
      _b = item.value,
      value = _b === void 0 ? '' : _b,
      _c = item.label,
      label = _c === void 0 ? '' : _c;
    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
    this._store.dispatch((0, items_1.highlightItem)(id, true));
    if (runEvent) {
      this.passedElement.triggerEvent(constants_1.EVENTS.highlightItem, {
        id: id,
        value: value,
        label: label,
        groupValue: group && group.value ? group.value : null
      });
    }
    return this;
  };
  Choices.prototype.unhighlightItem = function (item) {
    if (!item || !item.id) {
      return this;
    }
    var id = item.id,
      _a = item.groupId,
      groupId = _a === void 0 ? -1 : _a,
      _b = item.value,
      value = _b === void 0 ? '' : _b,
      _c = item.label,
      label = _c === void 0 ? '' : _c;
    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
    this._store.dispatch((0, items_1.highlightItem)(id, false));
    this.passedElement.triggerEvent(constants_1.EVENTS.highlightItem, {
      id: id,
      value: value,
      label: label,
      groupValue: group && group.value ? group.value : null
    });
    return this;
  };
  Choices.prototype.highlightAll = function () {
    var _this = this;
    this._store.items.forEach(function (item) {
      return _this.highlightItem(item);
    });
    return this;
  };
  Choices.prototype.unhighlightAll = function () {
    var _this = this;
    this._store.items.forEach(function (item) {
      return _this.unhighlightItem(item);
    });
    return this;
  };
  Choices.prototype.removeActiveItemsByValue = function (value) {
    var _this = this;
    this._store.activeItems.filter(function (item) {
      return item.value === value;
    }).forEach(function (item) {
      return _this._removeItem(item);
    });
    return this;
  };
  Choices.prototype.removeActiveItems = function (excludedId) {
    var _this = this;
    this._store.activeItems.filter(function (_a) {
      var id = _a.id;
      return id !== excludedId;
    }).forEach(function (item) {
      return _this._removeItem(item);
    });
    return this;
  };
  Choices.prototype.removeHighlightedItems = function (runEvent) {
    var _this = this;
    if (runEvent === void 0) {
      runEvent = false;
    }
    this._store.highlightedActiveItems.forEach(function (item) {
      _this._removeItem(item);
      // If this action was performed by the user
      // trigger the event
      if (runEvent) {
        _this._triggerChange(item.value);
      }
    });
    return this;
  };
  Choices.prototype.showDropdown = function (preventInputFocus) {
    var _this = this;
    if (this.dropdown.isActive) {
      return this;
    }
    requestAnimationFrame(function () {
      _this.dropdown.show();
      _this.containerOuter.open(_this.dropdown.distanceFromTopWindow);
      if (!preventInputFocus && _this._canSearch) {
        _this.input.focus();
      }
      _this.passedElement.triggerEvent(constants_1.EVENTS.showDropdown, {});
    });
    return this;
  };
  Choices.prototype.hideDropdown = function (preventInputBlur) {
    var _this = this;
    if (!this.dropdown.isActive) {
      return this;
    }
    requestAnimationFrame(function () {
      _this.dropdown.hide();
      _this.containerOuter.close();
      if (!preventInputBlur && _this._canSearch) {
        _this.input.removeActiveDescendant();
        _this.input.blur();
      }
      _this.passedElement.triggerEvent(constants_1.EVENTS.hideDropdown, {});
    });
    return this;
  };
  Choices.prototype.getValue = function (valueOnly) {
    if (valueOnly === void 0) {
      valueOnly = false;
    }
    var values = this._store.activeItems.reduce(function (selectedItems, item) {
      var itemValue = valueOnly ? item.value : item;
      selectedItems.push(itemValue);
      return selectedItems;
    }, []);
    return this._isSelectOneElement ? values[0] : values;
  };
  Choices.prototype.setValue = function (items) {
    var _this = this;
    if (!this.initialised) {
      return this;
    }
    items.forEach(function (value) {
      return _this._setChoiceOrItem(value);
    });
    return this;
  };
  Choices.prototype.setChoiceByValue = function (value) {
    var _this = this;
    if (!this.initialised || this._isTextElement) {
      return this;
    }
    // If only one value has been passed, convert to array
    var choiceValue = Array.isArray(value) ? value : [value];
    // Loop through each value and
    choiceValue.forEach(function (val) {
      return _this._findAndSelectChoiceByValue(val);
    });
    return this;
  };
  /**
   * Set choices of select input via an array of objects (or function that returns array of object or promise of it),
   * a value field name and a label field name.
   * This behaves the same as passing items via the choices option but can be called after initialising Choices.
   * This can also be used to add groups of choices (see example 2); Optionally pass a true `replaceChoices` value to remove any existing choices.
   * Optionally pass a `customProperties` object to add additional data to your choices (useful when searching/filtering etc).
   *
   * **Input types affected:** select-one, select-multiple
   *
   * @example
   * ```js
   * const example = new Choices(element);
   *
   * example.setChoices([
   *   {value: 'One', label: 'Label One', disabled: true},
   *   {value: 'Two', label: 'Label Two', selected: true},
   *   {value: 'Three', label: 'Label Three'},
   * ], 'value', 'label', false);
   * ```
   *
   * @example
   * ```js
   * const example = new Choices(element);
   *
   * example.setChoices(async () => {
   *   try {
   *      const items = await fetch('/items');
   *      return items.json()
   *   } catch(err) {
   *      console.error(err)
   *   }
   * });
   * ```
   *
   * @example
   * ```js
   * const example = new Choices(element);
   *
   * example.setChoices([{
   *   label: 'Group one',
   *   id: 1,
   *   disabled: false,
   *   choices: [
   *     {value: 'Child One', label: 'Child One', selected: true},
   *     {value: 'Child Two', label: 'Child Two',  disabled: true},
   *     {value: 'Child Three', label: 'Child Three'},
   *   ]
   * },
   * {
   *   label: 'Group two',
   *   id: 2,
   *   disabled: false,
   *   choices: [
   *     {value: 'Child Four', label: 'Child Four', disabled: true},
   *     {value: 'Child Five', label: 'Child Five'},
   *     {value: 'Child Six', label: 'Child Six', customProperties: {
   *       description: 'Custom description about child six',
   *       random: 'Another random custom property'
   *     }},
   *   ]
   * }], 'value', 'label', false);
   * ```
   */
  Choices.prototype.setChoices = function (choicesArrayOrFetcher, value, label, replaceChoices) {
    var _this = this;
    if (choicesArrayOrFetcher === void 0) {
      choicesArrayOrFetcher = [];
    }
    if (value === void 0) {
      value = 'value';
    }
    if (label === void 0) {
      label = 'label';
    }
    if (replaceChoices === void 0) {
      replaceChoices = false;
    }
    if (!this.initialised) {
      throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");
    }
    if (!this._isSelectElement) {
      throw new TypeError("setChoices can't be used with INPUT based Choices");
    }
    if (typeof value !== 'string' || !value) {
      throw new TypeError("value parameter must be a name of 'value' field in passed objects");
    }
    // Clear choices if needed
    if (replaceChoices) {
      this.clearChoices();
    }
    if (typeof choicesArrayOrFetcher === 'function') {
      // it's a choices fetcher function
      var fetcher_1 = choicesArrayOrFetcher(this);
      if (typeof Promise === 'function' && fetcher_1 instanceof Promise) {
        // that's a promise
        // eslint-disable-next-line no-promise-executor-return
        return new Promise(function (resolve) {
          return requestAnimationFrame(resolve);
        }).then(function () {
          return _this._handleLoadingState(true);
        }).then(function () {
          return fetcher_1;
        }).then(function (data) {
          return _this.setChoices(data, value, label, replaceChoices);
        }).catch(function (err) {
          if (!_this.config.silent) {
            console.error(err);
          }
        }).then(function () {
          return _this._handleLoadingState(false);
        }).then(function () {
          return _this;
        });
      }
      // function returned something else than promise, let's check if it's an array of choices
      if (!Array.isArray(fetcher_1)) {
        throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: ".concat(typeof fetcher_1));
      }
      // recursion with results, it's sync and choices were cleared already
      return this.setChoices(fetcher_1, value, label, false);
    }
    if (!Array.isArray(choicesArrayOrFetcher)) {
      throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
    }
    this.containerOuter.removeLoadingState();
    this._startLoading();
    choicesArrayOrFetcher.forEach(function (groupOrChoice) {
      if (groupOrChoice.choices) {
        _this._addGroup({
          id: groupOrChoice.id ? parseInt("".concat(groupOrChoice.id), 10) : null,
          group: groupOrChoice,
          valueKey: value,
          labelKey: label
        });
      } else {
        var choice = groupOrChoice;
        _this._addChoice({
          value: choice[value],
          label: choice[label],
          isSelected: !!choice.selected,
          isDisabled: !!choice.disabled,
          placeholder: !!choice.placeholder,
          customProperties: choice.customProperties
        });
      }
    });
    this._stopLoading();
    return this;
  };
  Choices.prototype.clearChoices = function () {
    this._store.dispatch((0, choices_1.clearChoices)());
    return this;
  };
  Choices.prototype.clearStore = function () {
    this._store.dispatch((0, misc_1.clearAll)());
    return this;
  };
  Choices.prototype.clearInput = function () {
    var shouldSetInputWidth = !this._isSelectOneElement;
    this.input.clear(shouldSetInputWidth);
    if (!this._isTextElement && this._canSearch) {
      this._isSearching = false;
      this._store.dispatch((0, choices_1.activateChoices)(true));
    }
    return this;
  };
  Choices.prototype._render = function () {
    if (this._store.isLoading()) {
      return;
    }
    this._currentState = this._store.state;
    var stateChanged = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items;
    var shouldRenderChoices = this._isSelectElement;
    var shouldRenderItems = this._currentState.items !== this._prevState.items;
    if (!stateChanged) {
      return;
    }
    if (shouldRenderChoices) {
      this._renderChoices();
    }
    if (shouldRenderItems) {
      this._renderItems();
    }
    this._prevState = this._currentState;
  };
  Choices.prototype._renderChoices = function () {
    var _this = this;
    var _a = this._store,
      activeGroups = _a.activeGroups,
      activeChoices = _a.activeChoices;
    var choiceListFragment = document.createDocumentFragment();
    this.choiceList.clear();
    if (this.config.resetScrollPosition) {
      requestAnimationFrame(function () {
        return _this.choiceList.scrollToTop();
      });
    }
    // If we have grouped options
    if (activeGroups.length >= 1 && !this._isSearching) {
      // If we have a placeholder choice along with groups
      var activePlaceholders = activeChoices.filter(function (activeChoice) {
        return activeChoice.placeholder === true && activeChoice.groupId === -1;
      });
      if (activePlaceholders.length >= 1) {
        choiceListFragment = this._createChoicesFragment(activePlaceholders, choiceListFragment);
      }
      choiceListFragment = this._createGroupsFragment(activeGroups, activeChoices, choiceListFragment);
    } else if (activeChoices.length >= 1) {
      choiceListFragment = this._createChoicesFragment(activeChoices, choiceListFragment);
    }
    // If we have choices to show
    if (choiceListFragment.childNodes && choiceListFragment.childNodes.length > 0) {
      var activeItems = this._store.activeItems;
      var canAddItem = this._canAddItem(activeItems, this.input.value);
      // ...and we can select them
      if (canAddItem.response) {
        // ...append them and highlight the first choice
        this.choiceList.append(choiceListFragment);
        this._highlightChoice();
      } else {
        var notice = this._getTemplate('notice', canAddItem.notice);
        this.choiceList.append(notice);
      }
    } else {
      // Otherwise show a notice
      var dropdownItem = void 0;
      var notice = void 0;
      if (this._isSearching) {
        notice = typeof this.config.noResultsText === 'function' ? this.config.noResultsText() : this.config.noResultsText;
        dropdownItem = this._getTemplate('notice', notice, 'no-results');
      } else {
        notice = typeof this.config.noChoicesText === 'function' ? this.config.noChoicesText() : this.config.noChoicesText;
        dropdownItem = this._getTemplate('notice', notice, 'no-choices');
      }
      this.choiceList.append(dropdownItem);
    }
  };
  Choices.prototype._renderItems = function () {
    var activeItems = this._store.activeItems || [];
    this.itemList.clear();
    // Create a fragment to store our list items
    // (so we don't have to update the DOM for each item)
    var itemListFragment = this._createItemsFragment(activeItems);
    // If we have items to add, append them
    if (itemListFragment.childNodes) {
      this.itemList.append(itemListFragment);
    }
  };
  Choices.prototype._createGroupsFragment = function (groups, choices, fragment) {
    var _this = this;
    if (fragment === void 0) {
      fragment = document.createDocumentFragment();
    }
    var getGroupChoices = function (group) {
      return choices.filter(function (choice) {
        if (_this._isSelectOneElement) {
          return choice.groupId === group.id;
        }
        return choice.groupId === group.id && (_this.config.renderSelectedChoices === 'always' || !choice.selected);
      });
    };
    // If sorting is enabled, filter groups
    if (this.config.shouldSort) {
      groups.sort(this.config.sorter);
    }
    groups.forEach(function (group) {
      var groupChoices = getGroupChoices(group);
      if (groupChoices.length >= 1) {
        var dropdownGroup = _this._getTemplate('choiceGroup', group);
        fragment.appendChild(dropdownGroup);
        _this._createChoicesFragment(groupChoices, fragment, true);
      }
    });
    return fragment;
  };
  Choices.prototype._createChoicesFragment = function (choices, fragment, withinGroup) {
    var _this = this;
    if (fragment === void 0) {
      fragment = document.createDocumentFragment();
    }
    if (withinGroup === void 0) {
      withinGroup = false;
    }
    // Create a fragment to store our list items (so we don't have to update the DOM for each item)
    var _a = this.config,
      renderSelectedChoices = _a.renderSelectedChoices,
      searchResultLimit = _a.searchResultLimit,
      renderChoiceLimit = _a.renderChoiceLimit;
    var filter = this._isSearching ? utils_1.sortByScore : this.config.sorter;
    var appendChoice = function (choice) {
      var shouldRender = renderSelectedChoices === 'auto' ? _this._isSelectOneElement || !choice.selected : true;
      if (shouldRender) {
        var dropdownItem = _this._getTemplate('choice', choice, _this.config.itemSelectText);
        fragment.appendChild(dropdownItem);
      }
    };
    var rendererableChoices = choices;
    if (renderSelectedChoices === 'auto' && !this._isSelectOneElement) {
      rendererableChoices = choices.filter(function (choice) {
        return !choice.selected;
      });
    }
    // Split array into placeholders and "normal" choices
    var _b = rendererableChoices.reduce(function (acc, choice) {
        if (choice.placeholder) {
          acc.placeholderChoices.push(choice);
        } else {
          acc.normalChoices.push(choice);
        }
        return acc;
      }, {
        placeholderChoices: [],
        normalChoices: []
      }),
      placeholderChoices = _b.placeholderChoices,
      normalChoices = _b.normalChoices;
    // If sorting is enabled or the user is searching, filter choices
    if (this.config.shouldSort || this._isSearching) {
      normalChoices.sort(filter);
    }
    var choiceLimit = rendererableChoices.length;
    // Prepend placeholeder
    var sortedChoices = this._isSelectOneElement ? __spreadArray(__spreadArray([], placeholderChoices, true), normalChoices, true) : normalChoices;
    if (this._isSearching) {
      choiceLimit = searchResultLimit;
    } else if (renderChoiceLimit && renderChoiceLimit > 0 && !withinGroup) {
      choiceLimit = renderChoiceLimit;
    }
    // Add each choice to dropdown within range
    for (var i = 0; i < choiceLimit; i += 1) {
      if (sortedChoices[i]) {
        appendChoice(sortedChoices[i]);
      }
    }
    return fragment;
  };
  Choices.prototype._createItemsFragment = function (items, fragment) {
    var _this = this;
    if (fragment === void 0) {
      fragment = document.createDocumentFragment();
    }
    // Create fragment to add elements to
    var _a = this.config,
      shouldSortItems = _a.shouldSortItems,
      sorter = _a.sorter,
      removeItemButton = _a.removeItemButton;
    // If sorting is enabled, filter items
    if (shouldSortItems && !this._isSelectOneElement) {
      items.sort(sorter);
    }
    if (this._isTextElement) {
      // Update the value of the hidden input
      this.passedElement.value = items.map(function (_a) {
        var value = _a.value;
        return value;
      }).join(this.config.delimiter);
    } else {
      // Update the options of the hidden input
      this.passedElement.options = items;
    }
    var addItemToFragment = function (item) {
      // Create new list element
      var listItem = _this._getTemplate('item', item, removeItemButton);
      // Append it to list
      fragment.appendChild(listItem);
    };
    // Add each list item to list
    items.forEach(addItemToFragment);
    return fragment;
  };
  Choices.prototype._triggerChange = function (value) {
    if (value === undefined || value === null) {
      return;
    }
    this.passedElement.triggerEvent(constants_1.EVENTS.change, {
      value: value
    });
  };
  Choices.prototype._selectPlaceholderChoice = function (placeholderChoice) {
    this._addItem({
      value: placeholderChoice.value,
      label: placeholderChoice.label,
      choiceId: placeholderChoice.id,
      groupId: placeholderChoice.groupId,
      placeholder: placeholderChoice.placeholder
    });
    this._triggerChange(placeholderChoice.value);
  };
  Choices.prototype._handleButtonAction = function (activeItems, element) {
    if (!activeItems || !element || !this.config.removeItems || !this.config.removeItemButton) {
      return;
    }
    var itemId = element.parentNode && element.parentNode.dataset.id;
    var itemToRemove = itemId && activeItems.find(function (item) {
      return item.id === parseInt(itemId, 10);
    });
    if (!itemToRemove) {
      return;
    }
    // Remove item associated with button
    this._removeItem(itemToRemove);
    this._triggerChange(itemToRemove.value);
    if (this._isSelectOneElement && this._store.placeholderChoice) {
      this._selectPlaceholderChoice(this._store.placeholderChoice);
    }
  };
  Choices.prototype._handleItemAction = function (activeItems, element, hasShiftKey) {
    var _this = this;
    if (hasShiftKey === void 0) {
      hasShiftKey = false;
    }
    if (!activeItems || !element || !this.config.removeItems || this._isSelectOneElement) {
      return;
    }
    var passedId = element.dataset.id;
    // We only want to select one item with a click
    // so we deselect any items that aren't the target
    // unless shift is being pressed
    activeItems.forEach(function (item) {
      if (item.id === parseInt("".concat(passedId), 10) && !item.highlighted) {
        _this.highlightItem(item);
      } else if (!hasShiftKey && item.highlighted) {
        _this.unhighlightItem(item);
      }
    });
    // Focus input as without focus, a user cannot do anything with a
    // highlighted item
    this.input.focus();
  };
  Choices.prototype._handleChoiceAction = function (activeItems, element) {
    if (!activeItems || !element) {
      return;
    }
    // If we are clicking on an option
    var id = element.dataset.id;
    var choice = id && this._store.getChoiceById(id);
    if (!choice) {
      return;
    }
    var passedKeyCode = activeItems[0] && activeItems[0].keyCode ? activeItems[0].keyCode : undefined;
    var hasActiveDropdown = this.dropdown.isActive;
    // Update choice keyCode
    choice.keyCode = passedKeyCode;
    this.passedElement.triggerEvent(constants_1.EVENTS.choice, {
      choice: choice
    });
    if (!choice.selected && !choice.disabled) {
      var canAddItem = this._canAddItem(activeItems, choice.value);
      if (canAddItem.response) {
        this._addItem({
          value: choice.value,
          label: choice.label,
          choiceId: choice.id,
          groupId: choice.groupId,
          customProperties: choice.customProperties,
          placeholder: choice.placeholder,
          keyCode: choice.keyCode
        });
        this._triggerChange(choice.value);
      }
    }
    this.clearInput();
    // We want to close the dropdown if we are dealing with a single select box
    if (hasActiveDropdown && this._isSelectOneElement) {
      this.hideDropdown(true);
      this.containerOuter.focus();
    }
  };
  Choices.prototype._handleBackspace = function (activeItems) {
    if (!this.config.removeItems || !activeItems) {
      return;
    }
    var lastItem = activeItems[activeItems.length - 1];
    var hasHighlightedItems = activeItems.some(function (item) {
      return item.highlighted;
    });
    // If editing the last item is allowed and there are not other selected items,
    // we can edit the item value. Otherwise if we can remove items, remove all selected items
    if (this.config.editItems && !hasHighlightedItems && lastItem) {
      this.input.value = lastItem.value;
      this.input.setWidth();
      this._removeItem(lastItem);
      this._triggerChange(lastItem.value);
    } else {
      if (!hasHighlightedItems) {
        // Highlight last item if none already highlighted
        this.highlightItem(lastItem, false);
      }
      this.removeHighlightedItems(true);
    }
  };
  Choices.prototype._startLoading = function () {
    this._store.dispatch((0, misc_1.setIsLoading)(true));
  };
  Choices.prototype._stopLoading = function () {
    this._store.dispatch((0, misc_1.setIsLoading)(false));
  };
  Choices.prototype._handleLoadingState = function (setLoading) {
    if (setLoading === void 0) {
      setLoading = true;
    }
    var placeholderItem = this.itemList.getChild(".".concat(this.config.classNames.placeholder));
    if (setLoading) {
      this.disable();
      this.containerOuter.addLoadingState();
      if (this._isSelectOneElement) {
        if (!placeholderItem) {
          placeholderItem = this._getTemplate('placeholder', this.config.loadingText);
          if (placeholderItem) {
            this.itemList.append(placeholderItem);
          }
        } else {
          placeholderItem.innerHTML = this.config.loadingText;
        }
      } else {
        this.input.placeholder = this.config.loadingText;
      }
    } else {
      this.enable();
      this.containerOuter.removeLoadingState();
      if (this._isSelectOneElement) {
        if (placeholderItem) {
          placeholderItem.innerHTML = this._placeholderValue || '';
        }
      } else {
        this.input.placeholder = this._placeholderValue || '';
      }
    }
  };
  Choices.prototype._handleSearch = function (value) {
    if (!this.input.isFocussed) {
      return;
    }
    var choices = this._store.choices;
    var _a = this.config,
      searchFloor = _a.searchFloor,
      searchChoices = _a.searchChoices;
    var hasUnactiveChoices = choices.some(function (option) {
      return !option.active;
    });
    // Check that we have a value to search and the input was an alphanumeric character
    if (value !== null && typeof value !== 'undefined' && value.length >= searchFloor) {
      var resultCount = searchChoices ? this._searchChoices(value) : 0;
      // Trigger search event
      this.passedElement.triggerEvent(constants_1.EVENTS.search, {
        value: value,
        resultCount: resultCount
      });
    } else if (hasUnactiveChoices) {
      // Otherwise reset choices to active
      this._isSearching = false;
      this._store.dispatch((0, choices_1.activateChoices)(true));
    }
  };
  Choices.prototype._canAddItem = function (activeItems, value) {
    var canAddItem = true;
    var notice = typeof this.config.addItemText === 'function' ? this.config.addItemText(value) : this.config.addItemText;
    if (!this._isSelectOneElement) {
      var isDuplicateValue = (0, utils_1.existsInArray)(activeItems, value);
      if (this.config.maxItemCount > 0 && this.config.maxItemCount <= activeItems.length) {
        // If there is a max entry limit and we have reached that limit
        // don't update
        canAddItem = false;
        notice = typeof this.config.maxItemText === 'function' ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText;
      }
      if (!this.config.duplicateItemsAllowed && isDuplicateValue && canAddItem) {
        canAddItem = false;
        notice = typeof this.config.uniqueItemText === 'function' ? this.config.uniqueItemText(value) : this.config.uniqueItemText;
      }
      if (this._isTextElement && this.config.addItems && canAddItem && typeof this.config.addItemFilter === 'function' && !this.config.addItemFilter(value)) {
        canAddItem = false;
        notice = typeof this.config.customAddItemText === 'function' ? this.config.customAddItemText(value) : this.config.customAddItemText;
      }
    }
    return {
      response: canAddItem,
      notice: notice
    };
  };
  Choices.prototype._searchChoices = function (value) {
    var newValue = typeof value === 'string' ? value.trim() : value;
    var currentValue = typeof this._currentValue === 'string' ? this._currentValue.trim() : this._currentValue;
    if (newValue.length < 1 && newValue === "".concat(currentValue, " ")) {
      return 0;
    }
    // If new value matches the desired length and is not the same as the current value with a space
    var haystack = this._store.searchableChoices;
    var needle = newValue;
    var options = Object.assign(this.config.fuseOptions, {
      keys: __spreadArray([], this.config.searchFields, true),
      includeMatches: true
    });
    var fuse = new fuse_js_1.default(haystack, options);
    var results = fuse.search(needle); // see https://github.com/krisk/Fuse/issues/303
    this._currentValue = newValue;
    this._highlightPosition = 0;
    this._isSearching = true;
    this._store.dispatch((0, choices_1.filterChoices)(results));
    return results.length;
  };
  Choices.prototype._addEventListeners = function () {
    var documentElement = document.documentElement;
    // capture events - can cancel event processing or propagation
    documentElement.addEventListener('touchend', this._onTouchEnd, true);
    this.containerOuter.element.addEventListener('keydown', this._onKeyDown, true);
    this.containerOuter.element.addEventListener('mousedown', this._onMouseDown, true);
    // passive events - doesn't call `preventDefault` or `stopPropagation`
    documentElement.addEventListener('click', this._onClick, {
      passive: true
    });
    documentElement.addEventListener('touchmove', this._onTouchMove, {
      passive: true
    });
    this.dropdown.element.addEventListener('mouseover', this._onMouseOver, {
      passive: true
    });
    if (this._isSelectOneElement) {
      this.containerOuter.element.addEventListener('focus', this._onFocus, {
        passive: true
      });
      this.containerOuter.element.addEventListener('blur', this._onBlur, {
        passive: true
      });
    }
    this.input.element.addEventListener('keyup', this._onKeyUp, {
      passive: true
    });
    this.input.element.addEventListener('focus', this._onFocus, {
      passive: true
    });
    this.input.element.addEventListener('blur', this._onBlur, {
      passive: true
    });
    if (this.input.element.form) {
      this.input.element.form.addEventListener('reset', this._onFormReset, {
        passive: true
      });
    }
    this.input.addEventListeners();
  };
  Choices.prototype._removeEventListeners = function () {
    var documentElement = document.documentElement;
    documentElement.removeEventListener('touchend', this._onTouchEnd, true);
    this.containerOuter.element.removeEventListener('keydown', this._onKeyDown, true);
    this.containerOuter.element.removeEventListener('mousedown', this._onMouseDown, true);
    documentElement.removeEventListener('click', this._onClick);
    documentElement.removeEventListener('touchmove', this._onTouchMove);
    this.dropdown.element.removeEventListener('mouseover', this._onMouseOver);
    if (this._isSelectOneElement) {
      this.containerOuter.element.removeEventListener('focus', this._onFocus);
      this.containerOuter.element.removeEventListener('blur', this._onBlur);
    }
    this.input.element.removeEventListener('keyup', this._onKeyUp);
    this.input.element.removeEventListener('focus', this._onFocus);
    this.input.element.removeEventListener('blur', this._onBlur);
    if (this.input.element.form) {
      this.input.element.form.removeEventListener('reset', this._onFormReset);
    }
    this.input.removeEventListeners();
  };
  Choices.prototype._onKeyDown = function (event) {
    var keyCode = event.keyCode;
    var activeItems = this._store.activeItems;
    var hasFocusedInput = this.input.isFocussed;
    var hasActiveDropdown = this.dropdown.isActive;
    var hasItems = this.itemList.hasChildren();
    var keyString = String.fromCharCode(keyCode);
    // eslint-disable-next-line no-control-regex
    var wasPrintableChar = /[^\x00-\x1F]/.test(keyString);
    var BACK_KEY = constants_1.KEY_CODES.BACK_KEY,
      DELETE_KEY = constants_1.KEY_CODES.DELETE_KEY,
      ENTER_KEY = constants_1.KEY_CODES.ENTER_KEY,
      A_KEY = constants_1.KEY_CODES.A_KEY,
      ESC_KEY = constants_1.KEY_CODES.ESC_KEY,
      UP_KEY = constants_1.KEY_CODES.UP_KEY,
      DOWN_KEY = constants_1.KEY_CODES.DOWN_KEY,
      PAGE_UP_KEY = constants_1.KEY_CODES.PAGE_UP_KEY,
      PAGE_DOWN_KEY = constants_1.KEY_CODES.PAGE_DOWN_KEY;
    if (!this._isTextElement && !hasActiveDropdown && wasPrintableChar) {
      this.showDropdown();
      if (!this.input.isFocussed) {
        /*
          We update the input value with the pressed key as
          the input was not focussed at the time of key press
          therefore does not have the value of the key.
        */
        this.input.value += event.key.toLowerCase();
      }
    }
    switch (keyCode) {
      case A_KEY:
        return this._onSelectKey(event, hasItems);
      case ENTER_KEY:
        return this._onEnterKey(event, activeItems, hasActiveDropdown);
      case ESC_KEY:
        return this._onEscapeKey(hasActiveDropdown);
      case UP_KEY:
      case PAGE_UP_KEY:
      case DOWN_KEY:
      case PAGE_DOWN_KEY:
        return this._onDirectionKey(event, hasActiveDropdown);
      case DELETE_KEY:
      case BACK_KEY:
        return this._onDeleteKey(event, activeItems, hasFocusedInput);
      default:
    }
  };
  Choices.prototype._onKeyUp = function (_a) {
    var target = _a.target,
      keyCode = _a.keyCode;
    var value = this.input.value;
    var activeItems = this._store.activeItems;
    var canAddItem = this._canAddItem(activeItems, value);
    var backKey = constants_1.KEY_CODES.BACK_KEY,
      deleteKey = constants_1.KEY_CODES.DELETE_KEY;
    // We are typing into a text input and have a value, we want to show a dropdown
    // notice. Otherwise hide the dropdown
    if (this._isTextElement) {
      var canShowDropdownNotice = canAddItem.notice && value;
      if (canShowDropdownNotice) {
        var dropdownItem = this._getTemplate('notice', canAddItem.notice);
        this.dropdown.element.innerHTML = dropdownItem.outerHTML;
        this.showDropdown(true);
      } else {
        this.hideDropdown(true);
      }
    } else {
      var wasRemovalKeyCode = keyCode === backKey || keyCode === deleteKey;
      var userHasRemovedValue = wasRemovalKeyCode && target && !target.value;
      var canReactivateChoices = !this._isTextElement && this._isSearching;
      var canSearch = this._canSearch && canAddItem.response;
      if (userHasRemovedValue && canReactivateChoices) {
        this._isSearching = false;
        this._store.dispatch((0, choices_1.activateChoices)(true));
      } else if (canSearch) {
        this._handleSearch(this.input.rawValue);
      }
    }
    this._canSearch = this.config.searchEnabled;
  };
  Choices.prototype._onSelectKey = function (event, hasItems) {
    var ctrlKey = event.ctrlKey,
      metaKey = event.metaKey;
    var hasCtrlDownKeyPressed = ctrlKey || metaKey;
    // If CTRL + A or CMD + A have been pressed and there are items to select
    if (hasCtrlDownKeyPressed && hasItems) {
      this._canSearch = false;
      var shouldHightlightAll = this.config.removeItems && !this.input.value && this.input.element === document.activeElement;
      if (shouldHightlightAll) {
        this.highlightAll();
      }
    }
  };
  Choices.prototype._onEnterKey = function (event, activeItems, hasActiveDropdown) {
    var target = event.target;
    var enterKey = constants_1.KEY_CODES.ENTER_KEY;
    var targetWasButton = target && target.hasAttribute('data-button');
    if (this._isTextElement && target && target.value) {
      var value = this.input.value;
      var canAddItem = this._canAddItem(activeItems, value);
      if (canAddItem.response) {
        this.hideDropdown(true);
        this._addItem({
          value: value
        });
        this._triggerChange(value);
        this.clearInput();
      }
    }
    if (targetWasButton) {
      this._handleButtonAction(activeItems, target);
      event.preventDefault();
    }
    if (hasActiveDropdown) {
      var highlightedChoice = this.dropdown.getChild(".".concat(this.config.classNames.highlightedState));
      if (highlightedChoice) {
        // add enter keyCode value
        if (activeItems[0]) {
          activeItems[0].keyCode = enterKey; // eslint-disable-line no-param-reassign
        }

        this._handleChoiceAction(activeItems, highlightedChoice);
      }
      event.preventDefault();
    } else if (this._isSelectOneElement) {
      this.showDropdown();
      event.preventDefault();
    }
  };
  Choices.prototype._onEscapeKey = function (hasActiveDropdown) {
    if (hasActiveDropdown) {
      this.hideDropdown(true);
      this.containerOuter.focus();
    }
  };
  Choices.prototype._onDirectionKey = function (event, hasActiveDropdown) {
    var keyCode = event.keyCode,
      metaKey = event.metaKey;
    var downKey = constants_1.KEY_CODES.DOWN_KEY,
      pageUpKey = constants_1.KEY_CODES.PAGE_UP_KEY,
      pageDownKey = constants_1.KEY_CODES.PAGE_DOWN_KEY;
    // If up or down key is pressed, traverse through options
    if (hasActiveDropdown || this._isSelectOneElement) {
      this.showDropdown();
      this._canSearch = false;
      var directionInt = keyCode === downKey || keyCode === pageDownKey ? 1 : -1;
      var skipKey = metaKey || keyCode === pageDownKey || keyCode === pageUpKey;
      var selectableChoiceIdentifier = '[data-choice-selectable]';
      var nextEl = void 0;
      if (skipKey) {
        if (directionInt > 0) {
          nextEl = this.dropdown.element.querySelector("".concat(selectableChoiceIdentifier, ":last-of-type"));
        } else {
          nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
        }
      } else {
        var currentEl = this.dropdown.element.querySelector(".".concat(this.config.classNames.highlightedState));
        if (currentEl) {
          nextEl = (0, utils_1.getAdjacentEl)(currentEl, selectableChoiceIdentifier, directionInt);
        } else {
          nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
        }
      }
      if (nextEl) {
        // We prevent default to stop the cursor moving
        // when pressing the arrow
        if (!(0, utils_1.isScrolledIntoView)(nextEl, this.choiceList.element, directionInt)) {
          this.choiceList.scrollToChildElement(nextEl, directionInt);
        }
        this._highlightChoice(nextEl);
      }
      // Prevent default to maintain cursor position whilst
      // traversing dropdown options
      event.preventDefault();
    }
  };
  Choices.prototype._onDeleteKey = function (event, activeItems, hasFocusedInput) {
    var target = event.target;
    // If backspace or delete key is pressed and the input has no value
    if (!this._isSelectOneElement && !target.value && hasFocusedInput) {
      this._handleBackspace(activeItems);
      event.preventDefault();
    }
  };
  Choices.prototype._onTouchMove = function () {
    if (this._wasTap) {
      this._wasTap = false;
    }
  };
  Choices.prototype._onTouchEnd = function (event) {
    var target = (event || event.touches[0]).target;
    var touchWasWithinContainer = this._wasTap && this.containerOuter.element.contains(target);
    if (touchWasWithinContainer) {
      var containerWasExactTarget = target === this.containerOuter.element || target === this.containerInner.element;
      if (containerWasExactTarget) {
        if (this._isTextElement) {
          this.input.focus();
        } else if (this._isSelectMultipleElement) {
          this.showDropdown();
        }
      }
      // Prevents focus event firing
      event.stopPropagation();
    }
    this._wasTap = true;
  };
  /**
   * Handles mousedown event in capture mode for containetOuter.element
   */
  Choices.prototype._onMouseDown = function (event) {
    var target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }
    // If we have our mouse down on the scrollbar and are on IE11...
    if (IS_IE11 && this.choiceList.element.contains(target)) {
      // check if click was on a scrollbar area
      var firstChoice = this.choiceList.element.firstElementChild;
      var isOnScrollbar = this._direction === 'ltr' ? event.offsetX >= firstChoice.offsetWidth : event.offsetX < firstChoice.offsetLeft;
      this._isScrollingOnIe = isOnScrollbar;
    }
    if (target === this.input.element) {
      return;
    }
    var item = target.closest('[data-button],[data-item],[data-choice]');
    if (item instanceof HTMLElement) {
      var hasShiftKey = event.shiftKey;
      var activeItems = this._store.activeItems;
      var dataset = item.dataset;
      if ('button' in dataset) {
        this._handleButtonAction(activeItems, item);
      } else if ('item' in dataset) {
        this._handleItemAction(activeItems, item, hasShiftKey);
      } else if ('choice' in dataset) {
        this._handleChoiceAction(activeItems, item);
      }
    }
    event.preventDefault();
  };
  /**
   * Handles mouseover event over this.dropdown
   * @param {MouseEvent} event
   */
  Choices.prototype._onMouseOver = function (_a) {
    var target = _a.target;
    if (target instanceof HTMLElement && 'choice' in target.dataset) {
      this._highlightChoice(target);
    }
  };
  Choices.prototype._onClick = function (_a) {
    var target = _a.target;
    var clickWasWithinContainer = this.containerOuter.element.contains(target);
    if (clickWasWithinContainer) {
      if (!this.dropdown.isActive && !this.containerOuter.isDisabled) {
        if (this._isTextElement) {
          if (document.activeElement !== this.input.element) {
            this.input.focus();
          }
        } else {
          this.showDropdown();
          this.containerOuter.focus();
        }
      } else if (this._isSelectOneElement && target !== this.input.element && !this.dropdown.element.contains(target)) {
        this.hideDropdown();
      }
    } else {
      var hasHighlightedItems = this._store.highlightedActiveItems.length > 0;
      if (hasHighlightedItems) {
        this.unhighlightAll();
      }
      this.containerOuter.removeFocusState();
      this.hideDropdown(true);
    }
  };
  Choices.prototype._onFocus = function (_a) {
    var _b;
    var _this = this;
    var target = _a.target;
    var focusWasWithinContainer = target && this.containerOuter.element.contains(target);
    if (!focusWasWithinContainer) {
      return;
    }
    var focusActions = (_b = {}, _b[constants_1.TEXT_TYPE] = function () {
      if (target === _this.input.element) {
        _this.containerOuter.addFocusState();
      }
    }, _b[constants_1.SELECT_ONE_TYPE] = function () {
      _this.containerOuter.addFocusState();
      if (target === _this.input.element) {
        _this.showDropdown(true);
      }
    }, _b[constants_1.SELECT_MULTIPLE_TYPE] = function () {
      if (target === _this.input.element) {
        _this.showDropdown(true);
        // If element is a select box, the focused element is the container and the dropdown
        // isn't already open, focus and show dropdown
        _this.containerOuter.addFocusState();
      }
    }, _b);
    focusActions[this.passedElement.element.type]();
  };
  Choices.prototype._onBlur = function (_a) {
    var _b;
    var _this = this;
    var target = _a.target;
    var blurWasWithinContainer = target && this.containerOuter.element.contains(target);
    if (blurWasWithinContainer && !this._isScrollingOnIe) {
      var activeItems = this._store.activeItems;
      var hasHighlightedItems_1 = activeItems.some(function (item) {
        return item.highlighted;
      });
      var blurActions = (_b = {}, _b[constants_1.TEXT_TYPE] = function () {
        if (target === _this.input.element) {
          _this.containerOuter.removeFocusState();
          if (hasHighlightedItems_1) {
            _this.unhighlightAll();
          }
          _this.hideDropdown(true);
        }
      }, _b[constants_1.SELECT_ONE_TYPE] = function () {
        _this.containerOuter.removeFocusState();
        if (target === _this.input.element || target === _this.containerOuter.element && !_this._canSearch) {
          _this.hideDropdown(true);
        }
      }, _b[constants_1.SELECT_MULTIPLE_TYPE] = function () {
        if (target === _this.input.element) {
          _this.containerOuter.removeFocusState();
          _this.hideDropdown(true);
          if (hasHighlightedItems_1) {
            _this.unhighlightAll();
          }
        }
      }, _b);
      blurActions[this.passedElement.element.type]();
    } else {
      // On IE11, clicking the scollbar blurs our input and thus
      // closes the dropdown. To stop this, we refocus our input
      // if we know we are on IE *and* are scrolling.
      this._isScrollingOnIe = false;
      this.input.element.focus();
    }
  };
  Choices.prototype._onFormReset = function () {
    this._store.dispatch((0, misc_1.resetTo)(this._initialState));
  };
  Choices.prototype._highlightChoice = function (el) {
    var _this = this;
    if (el === void 0) {
      el = null;
    }
    var choices = Array.from(this.dropdown.element.querySelectorAll('[data-choice-selectable]'));
    if (!choices.length) {
      return;
    }
    var passedEl = el;
    var highlightedChoices = Array.from(this.dropdown.element.querySelectorAll(".".concat(this.config.classNames.highlightedState)));
    // Remove any highlighted choices
    highlightedChoices.forEach(function (choice) {
      choice.classList.remove(_this.config.classNames.highlightedState);
      choice.setAttribute('aria-selected', 'false');
    });
    if (passedEl) {
      this._highlightPosition = choices.indexOf(passedEl);
    } else {
      // Highlight choice based on last known highlight location
      if (choices.length > this._highlightPosition) {
        // If we have an option to highlight
        passedEl = choices[this._highlightPosition];
      } else {
        // Otherwise highlight the option before
        passedEl = choices[choices.length - 1];
      }
      if (!passedEl) {
        passedEl = choices[0];
      }
    }
    passedEl.classList.add(this.config.classNames.highlightedState);
    passedEl.setAttribute('aria-selected', 'true');
    this.passedElement.triggerEvent(constants_1.EVENTS.highlightChoice, {
      el: passedEl
    });
    if (this.dropdown.isActive) {
      // IE11 ignores aria-label and blocks virtual keyboard
      // if aria-activedescendant is set without a dropdown
      this.input.setActiveDescendant(passedEl.id);
      this.containerOuter.setActiveDescendant(passedEl.id);
    }
  };
  Choices.prototype._addItem = function (_a) {
    var value = _a.value,
      _b = _a.label,
      label = _b === void 0 ? null : _b,
      _c = _a.choiceId,
      choiceId = _c === void 0 ? -1 : _c,
      _d = _a.groupId,
      groupId = _d === void 0 ? -1 : _d,
      _e = _a.customProperties,
      customProperties = _e === void 0 ? {} : _e,
      _f = _a.placeholder,
      placeholder = _f === void 0 ? false : _f,
      _g = _a.keyCode,
      keyCode = _g === void 0 ? -1 : _g;
    var passedValue = typeof value === 'string' ? value.trim() : value;
    var items = this._store.items;
    var passedLabel = label || passedValue;
    var passedOptionId = choiceId || -1;
    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
    var id = items ? items.length + 1 : 1;
    // If a prepended value has been passed, prepend it
    if (this.config.prependValue) {
      passedValue = this.config.prependValue + passedValue.toString();
    }
    // If an appended value has been passed, append it
    if (this.config.appendValue) {
      passedValue += this.config.appendValue.toString();
    }
    this._store.dispatch((0, items_1.addItem)({
      value: passedValue,
      label: passedLabel,
      id: id,
      choiceId: passedOptionId,
      groupId: groupId,
      customProperties: customProperties,
      placeholder: placeholder,
      keyCode: keyCode
    }));
    if (this._isSelectOneElement) {
      this.removeActiveItems(id);
    }
    // Trigger change event
    this.passedElement.triggerEvent(constants_1.EVENTS.addItem, {
      id: id,
      value: passedValue,
      label: passedLabel,
      customProperties: customProperties,
      groupValue: group && group.value ? group.value : null,
      keyCode: keyCode
    });
  };
  Choices.prototype._removeItem = function (item) {
    var id = item.id,
      value = item.value,
      label = item.label,
      customProperties = item.customProperties,
      choiceId = item.choiceId,
      groupId = item.groupId;
    var group = groupId && groupId >= 0 ? this._store.getGroupById(groupId) : null;
    if (!id || !choiceId) {
      return;
    }
    this._store.dispatch((0, items_1.removeItem)(id, choiceId));
    this.passedElement.triggerEvent(constants_1.EVENTS.removeItem, {
      id: id,
      value: value,
      label: label,
      customProperties: customProperties,
      groupValue: group && group.value ? group.value : null
    });
  };
  Choices.prototype._addChoice = function (_a) {
    var value = _a.value,
      _b = _a.label,
      label = _b === void 0 ? null : _b,
      _c = _a.isSelected,
      isSelected = _c === void 0 ? false : _c,
      _d = _a.isDisabled,
      isDisabled = _d === void 0 ? false : _d,
      _e = _a.groupId,
      groupId = _e === void 0 ? -1 : _e,
      _f = _a.customProperties,
      customProperties = _f === void 0 ? {} : _f,
      _g = _a.placeholder,
      placeholder = _g === void 0 ? false : _g,
      _h = _a.keyCode,
      keyCode = _h === void 0 ? -1 : _h;
    if (typeof value === 'undefined' || value === null) {
      return;
    }
    // Generate unique id
    var choices = this._store.choices;
    var choiceLabel = label || value;
    var choiceId = choices ? choices.length + 1 : 1;
    var choiceElementId = "".concat(this._baseId, "-").concat(this._idNames.itemChoice, "-").concat(choiceId);
    this._store.dispatch((0, choices_1.addChoice)({
      id: choiceId,
      groupId: groupId,
      elementId: choiceElementId,
      value: value,
      label: choiceLabel,
      disabled: isDisabled,
      customProperties: customProperties,
      placeholder: placeholder,
      keyCode: keyCode
    }));
    if (isSelected) {
      this._addItem({
        value: value,
        label: choiceLabel,
        choiceId: choiceId,
        customProperties: customProperties,
        placeholder: placeholder,
        keyCode: keyCode
      });
    }
  };
  Choices.prototype._addGroup = function (_a) {
    var _this = this;
    var group = _a.group,
      id = _a.id,
      _b = _a.valueKey,
      valueKey = _b === void 0 ? 'value' : _b,
      _c = _a.labelKey,
      labelKey = _c === void 0 ? 'label' : _c;
    var groupChoices = (0, utils_1.isType)('Object', group) ? group.choices : Array.from(group.getElementsByTagName('OPTION'));
    var groupId = id || Math.floor(new Date().valueOf() * Math.random());
    var isDisabled = group.disabled ? group.disabled : false;
    if (groupChoices) {
      this._store.dispatch((0, groups_1.addGroup)({
        value: group.label,
        id: groupId,
        active: true,
        disabled: isDisabled
      }));
      var addGroupChoices = function (choice) {
        var isOptDisabled = choice.disabled || choice.parentNode && choice.parentNode.disabled;
        _this._addChoice({
          value: choice[valueKey],
          label: (0, utils_1.isType)('Object', choice) ? choice[labelKey] : choice.innerHTML,
          isSelected: choice.selected,
          isDisabled: isOptDisabled,
          groupId: groupId,
          customProperties: choice.customProperties,
          placeholder: choice.placeholder
        });
      };
      groupChoices.forEach(addGroupChoices);
    } else {
      this._store.dispatch((0, groups_1.addGroup)({
        value: group.label,
        id: group.id,
        active: false,
        disabled: group.disabled
      }));
    }
  };
  Choices.prototype._getTemplate = function (template) {
    var _a;
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    return (_a = this._templates[template]).call.apply(_a, __spreadArray([this, this.config], args, false));
  };
  Choices.prototype._createTemplates = function () {
    var callbackOnCreateTemplates = this.config.callbackOnCreateTemplates;
    var userTemplates = {};
    if (callbackOnCreateTemplates && typeof callbackOnCreateTemplates === 'function') {
      userTemplates = callbackOnCreateTemplates.call(this, utils_1.strToEl);
    }
    this._templates = (0, deepmerge_1.default)(templates_1.default, userTemplates);
  };
  Choices.prototype._createElements = function () {
    this.containerOuter = new components_1.Container({
      element: this._getTemplate('containerOuter', this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type, this.config.labelId),
      classNames: this.config.classNames,
      type: this.passedElement.element.type,
      position: this.config.position
    });
    this.containerInner = new components_1.Container({
      element: this._getTemplate('containerInner'),
      classNames: this.config.classNames,
      type: this.passedElement.element.type,
      position: this.config.position
    });
    this.input = new components_1.Input({
      element: this._getTemplate('input', this._placeholderValue),
      classNames: this.config.classNames,
      type: this.passedElement.element.type,
      preventPaste: !this.config.paste
    });
    this.choiceList = new components_1.List({
      element: this._getTemplate('choiceList', this._isSelectOneElement)
    });
    this.itemList = new components_1.List({
      element: this._getTemplate('itemList', this._isSelectOneElement)
    });
    this.dropdown = new components_1.Dropdown({
      element: this._getTemplate('dropdown'),
      classNames: this.config.classNames,
      type: this.passedElement.element.type
    });
  };
  Choices.prototype._createStructure = function () {
    // Hide original element
    this.passedElement.conceal();
    // Wrap input in container preserving DOM ordering
    this.containerInner.wrap(this.passedElement.element);
    // Wrapper inner container with outer container
    this.containerOuter.wrap(this.containerInner.element);
    if (this._isSelectOneElement) {
      this.input.placeholder = this.config.searchPlaceholderValue || '';
    } else if (this._placeholderValue) {
      this.input.placeholder = this._placeholderValue;
      this.input.setWidth();
    }
    this.containerOuter.element.appendChild(this.containerInner.element);
    this.containerOuter.element.appendChild(this.dropdown.element);
    this.containerInner.element.appendChild(this.itemList.element);
    if (!this._isTextElement) {
      this.dropdown.element.appendChild(this.choiceList.element);
    }
    if (!this._isSelectOneElement) {
      this.containerInner.element.appendChild(this.input.element);
    } else if (this.config.searchEnabled) {
      this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild);
    }
    if (this._isSelectElement) {
      this._highlightPosition = 0;
      this._isSearching = false;
      this._startLoading();
      if (this._presetGroups.length) {
        this._addPredefinedGroups(this._presetGroups);
      } else {
        this._addPredefinedChoices(this._presetChoices);
      }
      this._stopLoading();
    }
    if (this._isTextElement) {
      this._addPredefinedItems(this._presetItems);
    }
  };
  Choices.prototype._addPredefinedGroups = function (groups) {
    var _this = this;
    // If we have a placeholder option
    var placeholderChoice = this.passedElement.placeholderOption;
    if (placeholderChoice && placeholderChoice.parentNode && placeholderChoice.parentNode.tagName === 'SELECT') {
      this._addChoice({
        value: placeholderChoice.value,
        label: placeholderChoice.innerHTML,
        isSelected: placeholderChoice.selected,
        isDisabled: placeholderChoice.disabled,
        placeholder: true
      });
    }
    groups.forEach(function (group) {
      return _this._addGroup({
        group: group,
        id: group.id || null
      });
    });
  };
  Choices.prototype._addPredefinedChoices = function (choices) {
    var _this = this;
    // If sorting is enabled or the user is searching, filter choices
    if (this.config.shouldSort) {
      choices.sort(this.config.sorter);
    }
    var hasSelectedChoice = choices.some(function (choice) {
      return choice.selected;
    });
    var firstEnabledChoiceIndex = choices.findIndex(function (choice) {
      return choice.disabled === undefined || !choice.disabled;
    });
    choices.forEach(function (choice, index) {
      var _a = choice.value,
        value = _a === void 0 ? '' : _a,
        label = choice.label,
        customProperties = choice.customProperties,
        placeholder = choice.placeholder;
      if (_this._isSelectElement) {
        // If the choice is actually a group
        if (choice.choices) {
          _this._addGroup({
            group: choice,
            id: choice.id || null
          });
        } else {
          /**
           * If there is a selected choice already or the choice is not the first in
           * the array, add each choice normally.
           *
           * Otherwise we pre-select the first enabled choice in the array ("select-one" only)
           */
          var shouldPreselect = _this._isSelectOneElement && !hasSelectedChoice && index === firstEnabledChoiceIndex;
          var isSelected = shouldPreselect ? true : choice.selected;
          var isDisabled = choice.disabled;
          _this._addChoice({
            value: value,
            label: label,
            isSelected: !!isSelected,
            isDisabled: !!isDisabled,
            placeholder: !!placeholder,
            customProperties: customProperties
          });
        }
      } else {
        _this._addChoice({
          value: value,
          label: label,
          isSelected: !!choice.selected,
          isDisabled: !!choice.disabled,
          placeholder: !!choice.placeholder,
          customProperties: customProperties
        });
      }
    });
  };
  Choices.prototype._addPredefinedItems = function (items) {
    var _this = this;
    items.forEach(function (item) {
      if (typeof item === 'object' && item.value) {
        _this._addItem({
          value: item.value,
          label: item.label,
          choiceId: item.id,
          customProperties: item.customProperties,
          placeholder: item.placeholder
        });
      }
      if (typeof item === 'string') {
        _this._addItem({
          value: item
        });
      }
    });
  };
  Choices.prototype._setChoiceOrItem = function (item) {
    var _this = this;
    var itemType = (0, utils_1.getType)(item).toLowerCase();
    var handleType = {
      object: function () {
        if (!item.value) {
          return;
        }
        // If we are dealing with a select input, we need to create an option first
        // that is then selected. For text inputs we can just add items normally.
        if (!_this._isTextElement) {
          _this._addChoice({
            value: item.value,
            label: item.label,
            isSelected: true,
            isDisabled: false,
            customProperties: item.customProperties,
            placeholder: item.placeholder
          });
        } else {
          _this._addItem({
            value: item.value,
            label: item.label,
            choiceId: item.id,
            customProperties: item.customProperties,
            placeholder: item.placeholder
          });
        }
      },
      string: function () {
        if (!_this._isTextElement) {
          _this._addChoice({
            value: item,
            label: item,
            isSelected: true,
            isDisabled: false
          });
        } else {
          _this._addItem({
            value: item
          });
        }
      }
    };
    handleType[itemType]();
  };
  Choices.prototype._findAndSelectChoiceByValue = function (value) {
    var _this = this;
    var choices = this._store.choices;
    // Check 'value' property exists and the choice isn't already selected
    var foundChoice = choices.find(function (choice) {
      return _this.config.valueComparer(choice.value, value);
    });
    if (foundChoice && !foundChoice.selected) {
      this._addItem({
        value: foundChoice.value,
        label: foundChoice.label,
        choiceId: foundChoice.id,
        groupId: foundChoice.groupId,
        customProperties: foundChoice.customProperties,
        placeholder: foundChoice.placeholder,
        keyCode: foundChoice.keyCode
      });
    }
  };
  Choices.prototype._generatePlaceholderValue = function () {
    if (this._isSelectElement && this.passedElement.placeholderOption) {
      var placeholderOption = this.passedElement.placeholderOption;
      return placeholderOption ? placeholderOption.text : null;
    }
    var _a = this.config,
      placeholder = _a.placeholder,
      placeholderValue = _a.placeholderValue;
    var dataset = this.passedElement.element.dataset;
    if (placeholder) {
      if (placeholderValue) {
        return placeholderValue;
      }
      if (dataset.placeholder) {
        return dataset.placeholder;
      }
    }
    return null;
  };
  return Choices;
}();
exports["default"] = Choices;

/***/ }),

/***/ 613:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var utils_1 = __webpack_require__(799);
var constants_1 = __webpack_require__(883);
var Container = /** @class */function () {
  function Container(_a) {
    var element = _a.element,
      type = _a.type,
      classNames = _a.classNames,
      position = _a.position;
    this.element = element;
    this.classNames = classNames;
    this.type = type;
    this.position = position;
    this.isOpen = false;
    this.isFlipped = false;
    this.isFocussed = false;
    this.isDisabled = false;
    this.isLoading = false;
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
  }
  Container.prototype.addEventListeners = function () {
    this.element.addEventListener('focus', this._onFocus);
    this.element.addEventListener('blur', this._onBlur);
  };
  Container.prototype.removeEventListeners = function () {
    this.element.removeEventListener('focus', this._onFocus);
    this.element.removeEventListener('blur', this._onBlur);
  };
  /**
   * Determine whether container should be flipped based on passed
   * dropdown position
   */
  Container.prototype.shouldFlip = function (dropdownPos) {
    if (typeof dropdownPos !== 'number') {
      return false;
    }
    // If flip is enabled and the dropdown bottom position is
    // greater than the window height flip the dropdown.
    var shouldFlip = false;
    if (this.position === 'auto') {
      shouldFlip = !window.matchMedia("(min-height: ".concat(dropdownPos + 1, "px)")).matches;
    } else if (this.position === 'top') {
      shouldFlip = true;
    }
    return shouldFlip;
  };
  Container.prototype.setActiveDescendant = function (activeDescendantID) {
    this.element.setAttribute('aria-activedescendant', activeDescendantID);
  };
  Container.prototype.removeActiveDescendant = function () {
    this.element.removeAttribute('aria-activedescendant');
  };
  Container.prototype.open = function (dropdownPos) {
    this.element.classList.add(this.classNames.openState);
    this.element.setAttribute('aria-expanded', 'true');
    this.isOpen = true;
    if (this.shouldFlip(dropdownPos)) {
      this.element.classList.add(this.classNames.flippedState);
      this.isFlipped = true;
    }
  };
  Container.prototype.close = function () {
    this.element.classList.remove(this.classNames.openState);
    this.element.setAttribute('aria-expanded', 'false');
    this.removeActiveDescendant();
    this.isOpen = false;
    // A dropdown flips if it does not have space within the page
    if (this.isFlipped) {
      this.element.classList.remove(this.classNames.flippedState);
      this.isFlipped = false;
    }
  };
  Container.prototype.focus = function () {
    if (!this.isFocussed) {
      this.element.focus();
    }
  };
  Container.prototype.addFocusState = function () {
    this.element.classList.add(this.classNames.focusState);
  };
  Container.prototype.removeFocusState = function () {
    this.element.classList.remove(this.classNames.focusState);
  };
  Container.prototype.enable = function () {
    this.element.classList.remove(this.classNames.disabledState);
    this.element.removeAttribute('aria-disabled');
    if (this.type === constants_1.SELECT_ONE_TYPE) {
      this.element.setAttribute('tabindex', '0');
    }
    this.isDisabled = false;
  };
  Container.prototype.disable = function () {
    this.element.classList.add(this.classNames.disabledState);
    this.element.setAttribute('aria-disabled', 'true');
    if (this.type === constants_1.SELECT_ONE_TYPE) {
      this.element.setAttribute('tabindex', '-1');
    }
    this.isDisabled = true;
  };
  Container.prototype.wrap = function (element) {
    (0, utils_1.wrap)(element, this.element);
  };
  Container.prototype.unwrap = function (element) {
    if (this.element.parentNode) {
      // Move passed element outside this element
      this.element.parentNode.insertBefore(element, this.element);
      // Remove this element
      this.element.parentNode.removeChild(this.element);
    }
  };
  Container.prototype.addLoadingState = function () {
    this.element.classList.add(this.classNames.loadingState);
    this.element.setAttribute('aria-busy', 'true');
    this.isLoading = true;
  };
  Container.prototype.removeLoadingState = function () {
    this.element.classList.remove(this.classNames.loadingState);
    this.element.removeAttribute('aria-busy');
    this.isLoading = false;
  };
  Container.prototype._onFocus = function () {
    this.isFocussed = true;
  };
  Container.prototype._onBlur = function () {
    this.isFocussed = false;
  };
  return Container;
}();
exports["default"] = Container;

/***/ }),

/***/ 217:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var Dropdown = /** @class */function () {
  function Dropdown(_a) {
    var element = _a.element,
      type = _a.type,
      classNames = _a.classNames;
    this.element = element;
    this.classNames = classNames;
    this.type = type;
    this.isActive = false;
  }
  Object.defineProperty(Dropdown.prototype, "distanceFromTopWindow", {
    /**
     * Bottom position of dropdown in viewport coordinates
     */
    get: function () {
      return this.element.getBoundingClientRect().bottom;
    },
    enumerable: false,
    configurable: true
  });
  Dropdown.prototype.getChild = function (selector) {
    return this.element.querySelector(selector);
  };
  /**
   * Show dropdown to user by adding active state class
   */
  Dropdown.prototype.show = function () {
    this.element.classList.add(this.classNames.activeState);
    this.element.setAttribute('aria-expanded', 'true');
    this.isActive = true;
    return this;
  };
  /**
   * Hide dropdown from user
   */
  Dropdown.prototype.hide = function () {
    this.element.classList.remove(this.classNames.activeState);
    this.element.setAttribute('aria-expanded', 'false');
    this.isActive = false;
    return this;
  };
  return Dropdown;
}();
exports["default"] = Dropdown;

/***/ }),

/***/ 520:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WrappedSelect = exports.WrappedInput = exports.List = exports.Input = exports.Container = exports.Dropdown = void 0;
var dropdown_1 = __importDefault(__webpack_require__(217));
exports.Dropdown = dropdown_1.default;
var container_1 = __importDefault(__webpack_require__(613));
exports.Container = container_1.default;
var input_1 = __importDefault(__webpack_require__(11));
exports.Input = input_1.default;
var list_1 = __importDefault(__webpack_require__(624));
exports.List = list_1.default;
var wrapped_input_1 = __importDefault(__webpack_require__(541));
exports.WrappedInput = wrapped_input_1.default;
var wrapped_select_1 = __importDefault(__webpack_require__(982));
exports.WrappedSelect = wrapped_select_1.default;

/***/ }),

/***/ 11:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var utils_1 = __webpack_require__(799);
var constants_1 = __webpack_require__(883);
var Input = /** @class */function () {
  function Input(_a) {
    var element = _a.element,
      type = _a.type,
      classNames = _a.classNames,
      preventPaste = _a.preventPaste;
    this.element = element;
    this.type = type;
    this.classNames = classNames;
    this.preventPaste = preventPaste;
    this.isFocussed = this.element.isEqualNode(document.activeElement);
    this.isDisabled = element.disabled;
    this._onPaste = this._onPaste.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
  }
  Object.defineProperty(Input.prototype, "placeholder", {
    set: function (placeholder) {
      this.element.placeholder = placeholder;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Input.prototype, "value", {
    get: function () {
      return (0, utils_1.sanitise)(this.element.value);
    },
    set: function (value) {
      this.element.value = value;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Input.prototype, "rawValue", {
    get: function () {
      return this.element.value;
    },
    enumerable: false,
    configurable: true
  });
  Input.prototype.addEventListeners = function () {
    this.element.addEventListener('paste', this._onPaste);
    this.element.addEventListener('input', this._onInput, {
      passive: true
    });
    this.element.addEventListener('focus', this._onFocus, {
      passive: true
    });
    this.element.addEventListener('blur', this._onBlur, {
      passive: true
    });
  };
  Input.prototype.removeEventListeners = function () {
    this.element.removeEventListener('input', this._onInput);
    this.element.removeEventListener('paste', this._onPaste);
    this.element.removeEventListener('focus', this._onFocus);
    this.element.removeEventListener('blur', this._onBlur);
  };
  Input.prototype.enable = function () {
    this.element.removeAttribute('disabled');
    this.isDisabled = false;
  };
  Input.prototype.disable = function () {
    this.element.setAttribute('disabled', '');
    this.isDisabled = true;
  };
  Input.prototype.focus = function () {
    if (!this.isFocussed) {
      this.element.focus();
    }
  };
  Input.prototype.blur = function () {
    if (this.isFocussed) {
      this.element.blur();
    }
  };
  Input.prototype.clear = function (setWidth) {
    if (setWidth === void 0) {
      setWidth = true;
    }
    if (this.element.value) {
      this.element.value = '';
    }
    if (setWidth) {
      this.setWidth();
    }
    return this;
  };
  /**
   * Set the correct input width based on placeholder
   * value or input value
   */
  Input.prototype.setWidth = function () {
    // Resize input to contents or placeholder
    var _a = this.element,
      style = _a.style,
      value = _a.value,
      placeholder = _a.placeholder;
    style.minWidth = "".concat(placeholder.length + 1, "ch");
    style.width = "".concat(value.length + 1, "ch");
  };
  Input.prototype.setActiveDescendant = function (activeDescendantID) {
    this.element.setAttribute('aria-activedescendant', activeDescendantID);
  };
  Input.prototype.removeActiveDescendant = function () {
    this.element.removeAttribute('aria-activedescendant');
  };
  Input.prototype._onInput = function () {
    if (this.type !== constants_1.SELECT_ONE_TYPE) {
      this.setWidth();
    }
  };
  Input.prototype._onPaste = function (event) {
    if (this.preventPaste) {
      event.preventDefault();
    }
  };
  Input.prototype._onFocus = function () {
    this.isFocussed = true;
  };
  Input.prototype._onBlur = function () {
    this.isFocussed = false;
  };
  return Input;
}();
exports["default"] = Input;

/***/ }),

/***/ 624:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var constants_1 = __webpack_require__(883);
var List = /** @class */function () {
  function List(_a) {
    var element = _a.element;
    this.element = element;
    this.scrollPos = this.element.scrollTop;
    this.height = this.element.offsetHeight;
  }
  List.prototype.clear = function () {
    this.element.innerHTML = '';
  };
  List.prototype.append = function (node) {
    this.element.appendChild(node);
  };
  List.prototype.getChild = function (selector) {
    return this.element.querySelector(selector);
  };
  List.prototype.hasChildren = function () {
    return this.element.hasChildNodes();
  };
  List.prototype.scrollToTop = function () {
    this.element.scrollTop = 0;
  };
  List.prototype.scrollToChildElement = function (element, direction) {
    var _this = this;
    if (!element) {
      return;
    }
    var listHeight = this.element.offsetHeight;
    // Scroll position of dropdown
    var listScrollPosition = this.element.scrollTop + listHeight;
    var elementHeight = element.offsetHeight;
    // Distance from bottom of element to top of parent
    var elementPos = element.offsetTop + elementHeight;
    // Difference between the element and scroll position
    var destination = direction > 0 ? this.element.scrollTop + elementPos - listScrollPosition : element.offsetTop;
    requestAnimationFrame(function () {
      _this._animateScroll(destination, direction);
    });
  };
  List.prototype._scrollDown = function (scrollPos, strength, destination) {
    var easing = (destination - scrollPos) / strength;
    var distance = easing > 1 ? easing : 1;
    this.element.scrollTop = scrollPos + distance;
  };
  List.prototype._scrollUp = function (scrollPos, strength, destination) {
    var easing = (scrollPos - destination) / strength;
    var distance = easing > 1 ? easing : 1;
    this.element.scrollTop = scrollPos - distance;
  };
  List.prototype._animateScroll = function (destination, direction) {
    var _this = this;
    var strength = constants_1.SCROLLING_SPEED;
    var choiceListScrollTop = this.element.scrollTop;
    var continueAnimation = false;
    if (direction > 0) {
      this._scrollDown(choiceListScrollTop, strength, destination);
      if (choiceListScrollTop < destination) {
        continueAnimation = true;
      }
    } else {
      this._scrollUp(choiceListScrollTop, strength, destination);
      if (choiceListScrollTop > destination) {
        continueAnimation = true;
      }
    }
    if (continueAnimation) {
      requestAnimationFrame(function () {
        _this._animateScroll(destination, direction);
      });
    }
  };
  return List;
}();
exports["default"] = List;

/***/ }),

/***/ 730:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var utils_1 = __webpack_require__(799);
var WrappedElement = /** @class */function () {
  function WrappedElement(_a) {
    var element = _a.element,
      classNames = _a.classNames;
    this.element = element;
    this.classNames = classNames;
    if (!(element instanceof HTMLInputElement) && !(element instanceof HTMLSelectElement)) {
      throw new TypeError('Invalid element passed');
    }
    this.isDisabled = false;
  }
  Object.defineProperty(WrappedElement.prototype, "isActive", {
    get: function () {
      return this.element.dataset.choice === 'active';
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(WrappedElement.prototype, "dir", {
    get: function () {
      return this.element.dir;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(WrappedElement.prototype, "value", {
    get: function () {
      return this.element.value;
    },
    set: function (value) {
      // you must define setter here otherwise it will be readonly property
      this.element.value = value;
    },
    enumerable: false,
    configurable: true
  });
  WrappedElement.prototype.conceal = function () {
    // Hide passed input
    this.element.classList.add(this.classNames.input);
    this.element.hidden = true;
    // Remove element from tab index
    this.element.tabIndex = -1;
    // Backup original styles if any
    var origStyle = this.element.getAttribute('style');
    if (origStyle) {
      this.element.setAttribute('data-choice-orig-style', origStyle);
    }
    this.element.setAttribute('data-choice', 'active');
  };
  WrappedElement.prototype.reveal = function () {
    // Reinstate passed element
    this.element.classList.remove(this.classNames.input);
    this.element.hidden = false;
    this.element.removeAttribute('tabindex');
    // Recover original styles if any
    var origStyle = this.element.getAttribute('data-choice-orig-style');
    if (origStyle) {
      this.element.removeAttribute('data-choice-orig-style');
      this.element.setAttribute('style', origStyle);
    } else {
      this.element.removeAttribute('style');
    }
    this.element.removeAttribute('data-choice');
    // Re-assign values - this is weird, I know
    // @todo Figure out why we need to do this
    this.element.value = this.element.value; // eslint-disable-line no-self-assign
  };

  WrappedElement.prototype.enable = function () {
    this.element.removeAttribute('disabled');
    this.element.disabled = false;
    this.isDisabled = false;
  };
  WrappedElement.prototype.disable = function () {
    this.element.setAttribute('disabled', '');
    this.element.disabled = true;
    this.isDisabled = true;
  };
  WrappedElement.prototype.triggerEvent = function (eventType, data) {
    (0, utils_1.dispatchEvent)(this.element, eventType, data);
  };
  return WrappedElement;
}();
exports["default"] = WrappedElement;

/***/ }),

/***/ 541:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var wrapped_element_1 = __importDefault(__webpack_require__(730));
var WrappedInput = /** @class */function (_super) {
  __extends(WrappedInput, _super);
  function WrappedInput(_a) {
    var element = _a.element,
      classNames = _a.classNames,
      delimiter = _a.delimiter;
    var _this = _super.call(this, {
      element: element,
      classNames: classNames
    }) || this;
    _this.delimiter = delimiter;
    return _this;
  }
  Object.defineProperty(WrappedInput.prototype, "value", {
    get: function () {
      return this.element.value;
    },
    set: function (value) {
      this.element.setAttribute('value', value);
      this.element.value = value;
    },
    enumerable: false,
    configurable: true
  });
  return WrappedInput;
}(wrapped_element_1.default);
exports["default"] = WrappedInput;

/***/ }),

/***/ 982:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var wrapped_element_1 = __importDefault(__webpack_require__(730));
var WrappedSelect = /** @class */function (_super) {
  __extends(WrappedSelect, _super);
  function WrappedSelect(_a) {
    var element = _a.element,
      classNames = _a.classNames,
      template = _a.template;
    var _this = _super.call(this, {
      element: element,
      classNames: classNames
    }) || this;
    _this.template = template;
    return _this;
  }
  Object.defineProperty(WrappedSelect.prototype, "placeholderOption", {
    get: function () {
      return this.element.querySelector('option[value=""]') ||
      // Backward compatibility layer for the non-standard placeholder attribute supported in older versions.
      this.element.querySelector('option[placeholder]');
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(WrappedSelect.prototype, "optionGroups", {
    get: function () {
      return Array.from(this.element.getElementsByTagName('OPTGROUP'));
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(WrappedSelect.prototype, "options", {
    get: function () {
      return Array.from(this.element.options);
    },
    set: function (options) {
      var _this = this;
      var fragment = document.createDocumentFragment();
      var addOptionToFragment = function (data) {
        // Create a standard select option
        var option = _this.template(data);
        // Append it to fragment
        fragment.appendChild(option);
      };
      // Add each list item to list
      options.forEach(function (optionData) {
        return addOptionToFragment(optionData);
      });
      this.appendDocFragment(fragment);
    },
    enumerable: false,
    configurable: true
  });
  WrappedSelect.prototype.appendDocFragment = function (fragment) {
    this.element.innerHTML = '';
    this.element.appendChild(fragment);
  };
  return WrappedSelect;
}(wrapped_element_1.default);
exports["default"] = WrappedSelect;

/***/ }),

/***/ 883:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SCROLLING_SPEED = exports.SELECT_MULTIPLE_TYPE = exports.SELECT_ONE_TYPE = exports.TEXT_TYPE = exports.KEY_CODES = exports.ACTION_TYPES = exports.EVENTS = void 0;
exports.EVENTS = {
  showDropdown: 'showDropdown',
  hideDropdown: 'hideDropdown',
  change: 'change',
  choice: 'choice',
  search: 'search',
  addItem: 'addItem',
  removeItem: 'removeItem',
  highlightItem: 'highlightItem',
  highlightChoice: 'highlightChoice',
  unhighlightItem: 'unhighlightItem'
};
exports.ACTION_TYPES = {
  ADD_CHOICE: 'ADD_CHOICE',
  FILTER_CHOICES: 'FILTER_CHOICES',
  ACTIVATE_CHOICES: 'ACTIVATE_CHOICES',
  CLEAR_CHOICES: 'CLEAR_CHOICES',
  ADD_GROUP: 'ADD_GROUP',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  HIGHLIGHT_ITEM: 'HIGHLIGHT_ITEM',
  CLEAR_ALL: 'CLEAR_ALL',
  RESET_TO: 'RESET_TO',
  SET_IS_LOADING: 'SET_IS_LOADING'
};
exports.KEY_CODES = {
  BACK_KEY: 46,
  DELETE_KEY: 8,
  ENTER_KEY: 13,
  A_KEY: 65,
  ESC_KEY: 27,
  UP_KEY: 38,
  DOWN_KEY: 40,
  PAGE_UP_KEY: 33,
  PAGE_DOWN_KEY: 34
};
exports.TEXT_TYPE = 'text';
exports.SELECT_ONE_TYPE = 'select-one';
exports.SELECT_MULTIPLE_TYPE = 'select-multiple';
exports.SCROLLING_SPEED = 4;

/***/ }),

/***/ 789:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DEFAULT_CONFIG = exports.DEFAULT_CLASSNAMES = void 0;
var utils_1 = __webpack_require__(799);
exports.DEFAULT_CLASSNAMES = {
  containerOuter: 'choices',
  containerInner: 'choices__inner',
  input: 'choices__input',
  inputCloned: 'choices__input--cloned',
  list: 'choices__list',
  listItems: 'choices__list--multiple',
  listSingle: 'choices__list--single',
  listDropdown: 'choices__list--dropdown',
  item: 'choices__item',
  itemSelectable: 'choices__item--selectable',
  itemDisabled: 'choices__item--disabled',
  itemChoice: 'choices__item--choice',
  placeholder: 'choices__placeholder',
  group: 'choices__group',
  groupHeading: 'choices__heading',
  button: 'choices__button',
  activeState: 'is-active',
  focusState: 'is-focused',
  openState: 'is-open',
  disabledState: 'is-disabled',
  highlightedState: 'is-highlighted',
  selectedState: 'is-selected',
  flippedState: 'is-flipped',
  loadingState: 'is-loading',
  noResults: 'has-no-results',
  noChoices: 'has-no-choices'
};
exports.DEFAULT_CONFIG = {
  items: [],
  choices: [],
  silent: false,
  renderChoiceLimit: -1,
  maxItemCount: -1,
  addItems: true,
  addItemFilter: null,
  removeItems: true,
  removeItemButton: false,
  editItems: false,
  allowHTML: true,
  duplicateItemsAllowed: true,
  delimiter: ',',
  paste: true,
  searchEnabled: true,
  searchChoices: true,
  searchFloor: 1,
  searchResultLimit: 4,
  searchFields: ['label', 'value'],
  position: 'auto',
  resetScrollPosition: true,
  shouldSort: true,
  shouldSortItems: false,
  sorter: utils_1.sortByAlpha,
  placeholder: true,
  placeholderValue: null,
  searchPlaceholderValue: null,
  prependValue: null,
  appendValue: null,
  renderSelectedChoices: 'auto',
  loadingText: 'Loading...',
  noResultsText: 'No results found',
  noChoicesText: 'No choices to choose from',
  itemSelectText: 'Press to select',
  uniqueItemText: 'Only unique values can be added',
  customAddItemText: 'Only values matching specific conditions can be added',
  addItemText: function (value) {
    return "Press Enter to add <b>\"".concat((0, utils_1.sanitise)(value), "\"</b>");
  },
  maxItemText: function (maxItemCount) {
    return "Only ".concat(maxItemCount, " values can be added");
  },
  valueComparer: function (value1, value2) {
    return value1 === value2;
  },
  fuseOptions: {
    includeScore: true
  },
  labelId: '',
  callbackOnInit: null,
  callbackOnCreateTemplates: null,
  classNames: exports.DEFAULT_CLASSNAMES
};

/***/ }),

/***/ 18:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 978:
/***/ (function(__unused_webpack_module, exports) {



/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 948:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 359:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 285:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 533:
/***/ (function(__unused_webpack_module, exports) {



/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 187:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
__exportStar(__webpack_require__(18), exports);
__exportStar(__webpack_require__(978), exports);
__exportStar(__webpack_require__(948), exports);
__exportStar(__webpack_require__(359), exports);
__exportStar(__webpack_require__(285), exports);
__exportStar(__webpack_require__(533), exports);
__exportStar(__webpack_require__(287), exports);
__exportStar(__webpack_require__(132), exports);
__exportStar(__webpack_require__(837), exports);
__exportStar(__webpack_require__(598), exports);
__exportStar(__webpack_require__(369), exports);
__exportStar(__webpack_require__(37), exports);
__exportStar(__webpack_require__(47), exports);
__exportStar(__webpack_require__(923), exports);
__exportStar(__webpack_require__(876), exports);

/***/ }),

/***/ 287:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 132:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 837:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 598:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 37:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 369:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 47:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 923:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 876:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 799:
/***/ (function(__unused_webpack_module, exports) {



/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.parseCustomProperties = exports.diff = exports.cloneObject = exports.existsInArray = exports.dispatchEvent = exports.sortByScore = exports.sortByAlpha = exports.strToEl = exports.sanitise = exports.isScrolledIntoView = exports.getAdjacentEl = exports.wrap = exports.isType = exports.getType = exports.generateId = exports.generateChars = exports.getRandomNumber = void 0;
var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};
exports.getRandomNumber = getRandomNumber;
var generateChars = function (length) {
  return Array.from({
    length: length
  }, function () {
    return (0, exports.getRandomNumber)(0, 36).toString(36);
  }).join('');
};
exports.generateChars = generateChars;
var generateId = function (element, prefix) {
  var id = element.id || element.name && "".concat(element.name, "-").concat((0, exports.generateChars)(2)) || (0, exports.generateChars)(4);
  id = id.replace(/(:|\.|\[|\]|,)/g, '');
  id = "".concat(prefix, "-").concat(id);
  return id;
};
exports.generateId = generateId;
var getType = function (obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
};
exports.getType = getType;
var isType = function (type, obj) {
  return obj !== undefined && obj !== null && (0, exports.getType)(obj) === type;
};
exports.isType = isType;
var wrap = function (element, wrapper) {
  if (wrapper === void 0) {
    wrapper = document.createElement('div');
  }
  if (element.parentNode) {
    if (element.nextSibling) {
      element.parentNode.insertBefore(wrapper, element.nextSibling);
    } else {
      element.parentNode.appendChild(wrapper);
    }
  }
  return wrapper.appendChild(element);
};
exports.wrap = wrap;
var getAdjacentEl = function (startEl, selector, direction) {
  if (direction === void 0) {
    direction = 1;
  }
  var prop = "".concat(direction > 0 ? 'next' : 'previous', "ElementSibling");
  var sibling = startEl[prop];
  while (sibling) {
    if (sibling.matches(selector)) {
      return sibling;
    }
    sibling = sibling[prop];
  }
  return sibling;
};
exports.getAdjacentEl = getAdjacentEl;
var isScrolledIntoView = function (element, parent, direction) {
  if (direction === void 0) {
    direction = 1;
  }
  if (!element) {
    return false;
  }
  var isVisible;
  if (direction > 0) {
    // In view from bottom
    isVisible = parent.scrollTop + parent.offsetHeight >= element.offsetTop + element.offsetHeight;
  } else {
    // In view from top
    isVisible = element.offsetTop >= parent.scrollTop;
  }
  return isVisible;
};
exports.isScrolledIntoView = isScrolledIntoView;
var sanitise = function (value) {
  if (typeof value !== 'string') {
    return value;
  }
  return value.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
};
exports.sanitise = sanitise;
exports.strToEl = function () {
  var tmpEl = document.createElement('div');
  return function (str) {
    var cleanedInput = str.trim();
    tmpEl.innerHTML = cleanedInput;
    var firldChild = tmpEl.children[0];
    while (tmpEl.firstChild) {
      tmpEl.removeChild(tmpEl.firstChild);
    }
    return firldChild;
  };
}();
var sortByAlpha = function (_a, _b) {
  var value = _a.value,
    _c = _a.label,
    label = _c === void 0 ? value : _c;
  var value2 = _b.value,
    _d = _b.label,
    label2 = _d === void 0 ? value2 : _d;
  return label.localeCompare(label2, [], {
    sensitivity: 'base',
    ignorePunctuation: true,
    numeric: true
  });
};
exports.sortByAlpha = sortByAlpha;
var sortByScore = function (a, b) {
  var _a = a.score,
    scoreA = _a === void 0 ? 0 : _a;
  var _b = b.score,
    scoreB = _b === void 0 ? 0 : _b;
  return scoreA - scoreB;
};
exports.sortByScore = sortByScore;
var dispatchEvent = function (element, type, customArgs) {
  if (customArgs === void 0) {
    customArgs = null;
  }
  var event = new CustomEvent(type, {
    detail: customArgs,
    bubbles: true,
    cancelable: true
  });
  return element.dispatchEvent(event);
};
exports.dispatchEvent = dispatchEvent;
var existsInArray = function (array, value, key) {
  if (key === void 0) {
    key = 'value';
  }
  return array.some(function (item) {
    if (typeof value === 'string') {
      return item[key] === value.trim();
    }
    return item[key] === value;
  });
};
exports.existsInArray = existsInArray;
var cloneObject = function (obj) {
  return JSON.parse(JSON.stringify(obj));
};
exports.cloneObject = cloneObject;
/**
 * Returns an array of keys present on the first but missing on the second object
 */
var diff = function (a, b) {
  var aKeys = Object.keys(a).sort();
  var bKeys = Object.keys(b).sort();
  return aKeys.filter(function (i) {
    return bKeys.indexOf(i) < 0;
  });
};
exports.diff = diff;
var parseCustomProperties = function (customProperties) {
  if (typeof customProperties !== 'undefined') {
    try {
      return JSON.parse(customProperties);
    } catch (e) {
      return customProperties;
    }
  }
  return {};
};
exports.parseCustomProperties = parseCustomProperties;

/***/ }),

/***/ 273:
/***/ (function(__unused_webpack_module, exports) {



var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.defaultState = void 0;
exports.defaultState = [];
function choices(state, action) {
  if (state === void 0) {
    state = exports.defaultState;
  }
  if (action === void 0) {
    action = {};
  }
  switch (action.type) {
    case 'ADD_CHOICE':
      {
        var addChoiceAction = action;
        var choice = {
          id: addChoiceAction.id,
          elementId: addChoiceAction.elementId,
          groupId: addChoiceAction.groupId,
          value: addChoiceAction.value,
          label: addChoiceAction.label || addChoiceAction.value,
          disabled: addChoiceAction.disabled || false,
          selected: false,
          active: true,
          score: 9999,
          customProperties: addChoiceAction.customProperties,
          placeholder: addChoiceAction.placeholder || false
        };
        /*
          A disabled choice appears in the choice dropdown but cannot be selected
          A selected choice has been added to the passed input's value (added as an item)
          An active choice appears within the choice dropdown
        */
        return __spreadArray(__spreadArray([], state, true), [choice], false);
      }
    case 'ADD_ITEM':
      {
        var addItemAction_1 = action;
        // When an item is added and it has an associated choice,
        // we want to disable it so it can't be chosen again
        if (addItemAction_1.choiceId > -1) {
          return state.map(function (obj) {
            var choice = obj;
            if (choice.id === parseInt("".concat(addItemAction_1.choiceId), 10)) {
              choice.selected = true;
            }
            return choice;
          });
        }
        return state;
      }
    case 'REMOVE_ITEM':
      {
        var removeItemAction_1 = action;
        // When an item is removed and it has an associated choice,
        // we want to re-enable it so it can be chosen again
        if (removeItemAction_1.choiceId && removeItemAction_1.choiceId > -1) {
          return state.map(function (obj) {
            var choice = obj;
            if (choice.id === parseInt("".concat(removeItemAction_1.choiceId), 10)) {
              choice.selected = false;
            }
            return choice;
          });
        }
        return state;
      }
    case 'FILTER_CHOICES':
      {
        var filterChoicesAction_1 = action;
        return state.map(function (obj) {
          var choice = obj;
          // Set active state based on whether choice is
          // within filtered results
          choice.active = filterChoicesAction_1.results.some(function (_a) {
            var item = _a.item,
              score = _a.score;
            if (item.id === choice.id) {
              choice.score = score;
              return true;
            }
            return false;
          });
          return choice;
        });
      }
    case 'ACTIVATE_CHOICES':
      {
        var activateChoicesAction_1 = action;
        return state.map(function (obj) {
          var choice = obj;
          choice.active = activateChoicesAction_1.active;
          return choice;
        });
      }
    case 'CLEAR_CHOICES':
      {
        return exports.defaultState;
      }
    default:
      {
        return state;
      }
  }
}
exports["default"] = choices;

/***/ }),

/***/ 871:
/***/ (function(__unused_webpack_module, exports) {



var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.defaultState = void 0;
exports.defaultState = [];
function groups(state, action) {
  if (state === void 0) {
    state = exports.defaultState;
  }
  if (action === void 0) {
    action = {};
  }
  switch (action.type) {
    case 'ADD_GROUP':
      {
        var addGroupAction = action;
        return __spreadArray(__spreadArray([], state, true), [{
          id: addGroupAction.id,
          value: addGroupAction.value,
          active: addGroupAction.active,
          disabled: addGroupAction.disabled
        }], false);
      }
    case 'CLEAR_CHOICES':
      {
        return [];
      }
    default:
      {
        return state;
      }
  }
}
exports["default"] = groups;

/***/ }),

/***/ 655:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.defaultState = void 0;
var redux_1 = __webpack_require__(791);
var items_1 = __importDefault(__webpack_require__(52));
var groups_1 = __importDefault(__webpack_require__(871));
var choices_1 = __importDefault(__webpack_require__(273));
var loading_1 = __importDefault(__webpack_require__(502));
var utils_1 = __webpack_require__(799);
exports.defaultState = {
  groups: [],
  items: [],
  choices: [],
  loading: false
};
var appReducer = (0, redux_1.combineReducers)({
  items: items_1.default,
  groups: groups_1.default,
  choices: choices_1.default,
  loading: loading_1.default
});
var rootReducer = function (passedState, action) {
  var state = passedState;
  // If we are clearing all items, groups and options we reassign
  // state and then pass that state to our proper reducer. This isn't
  // mutating our actual state
  // See: http://stackoverflow.com/a/35641992
  if (action.type === 'CLEAR_ALL') {
    state = exports.defaultState;
  } else if (action.type === 'RESET_TO') {
    return (0, utils_1.cloneObject)(action.state);
  }
  return appReducer(state, action);
};
exports["default"] = rootReducer;

/***/ }),

/***/ 52:
/***/ (function(__unused_webpack_module, exports) {



var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.defaultState = void 0;
exports.defaultState = [];
function items(state, action) {
  if (state === void 0) {
    state = exports.defaultState;
  }
  if (action === void 0) {
    action = {};
  }
  switch (action.type) {
    case 'ADD_ITEM':
      {
        var addItemAction = action;
        // Add object to items array
        var newState = __spreadArray(__spreadArray([], state, true), [{
          id: addItemAction.id,
          choiceId: addItemAction.choiceId,
          groupId: addItemAction.groupId,
          value: addItemAction.value,
          label: addItemAction.label,
          active: true,
          highlighted: false,
          customProperties: addItemAction.customProperties,
          placeholder: addItemAction.placeholder || false,
          keyCode: null
        }], false);
        return newState.map(function (obj) {
          var item = obj;
          item.highlighted = false;
          return item;
        });
      }
    case 'REMOVE_ITEM':
      {
        // Set item to inactive
        return state.map(function (obj) {
          var item = obj;
          if (item.id === action.id) {
            item.active = false;
          }
          return item;
        });
      }
    case 'HIGHLIGHT_ITEM':
      {
        var highlightItemAction_1 = action;
        return state.map(function (obj) {
          var item = obj;
          if (item.id === highlightItemAction_1.id) {
            item.highlighted = highlightItemAction_1.highlighted;
          }
          return item;
        });
      }
    default:
      {
        return state;
      }
  }
}
exports["default"] = items;

/***/ }),

/***/ 502:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.defaultState = void 0;
exports.defaultState = false;
var general = function (state, action) {
  if (state === void 0) {
    state = exports.defaultState;
  }
  if (action === void 0) {
    action = {};
  }
  switch (action.type) {
    case 'SET_IS_LOADING':
      {
        return action.isLoading;
      }
    default:
      {
        return state;
      }
  }
};
exports["default"] = general;

/***/ }),

/***/ 744:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/* eslint-disable @typescript-eslint/no-explicit-any */
var redux_1 = __webpack_require__(791);
var index_1 = __importDefault(__webpack_require__(655));
var Store = /** @class */function () {
  function Store() {
    this._store = (0, redux_1.createStore)(index_1.default, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  }
  /**
   * Subscribe store to function call (wrapped Redux method)
   */
  Store.prototype.subscribe = function (onChange) {
    this._store.subscribe(onChange);
  };
  /**
   * Dispatch event to store (wrapped Redux method)
   */
  Store.prototype.dispatch = function (action) {
    this._store.dispatch(action);
  };
  Object.defineProperty(Store.prototype, "state", {
    /**
     * Get store object (wrapping Redux method)
     */
    get: function () {
      return this._store.getState();
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Store.prototype, "items", {
    /**
     * Get items from store
     */
    get: function () {
      return this.state.items;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Store.prototype, "activeItems", {
    /**
     * Get active items from store
     */
    get: function () {
      return this.items.filter(function (item) {
        return item.active === true;
      });
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Store.prototype, "highlightedActiveItems", {
    /**
     * Get highlighted items from store
     */
    get: function () {
      return this.items.filter(function (item) {
        return item.active && item.highlighted;
      });
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Store.prototype, "choices", {
    /**
     * Get choices from store
     */
    get: function () {
      return this.state.choices;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Store.prototype, "activeChoices", {
    /**
     * Get active choices from store
     */
    get: function () {
      return this.choices.filter(function (choice) {
        return choice.active === true;
      });
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Store.prototype, "selectableChoices", {
    /**
     * Get selectable choices from store
     */
    get: function () {
      return this.choices.filter(function (choice) {
        return choice.disabled !== true;
      });
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Store.prototype, "searchableChoices", {
    /**
     * Get choices that can be searched (excluding placeholders)
     */
    get: function () {
      return this.selectableChoices.filter(function (choice) {
        return choice.placeholder !== true;
      });
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Store.prototype, "placeholderChoice", {
    /**
     * Get placeholder choice from store
     */
    get: function () {
      return __spreadArray([], this.choices, true).reverse().find(function (choice) {
        return choice.placeholder === true;
      });
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Store.prototype, "groups", {
    /**
     * Get groups from store
     */
    get: function () {
      return this.state.groups;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Store.prototype, "activeGroups", {
    /**
     * Get active groups from store
     */
    get: function () {
      var _a = this,
        groups = _a.groups,
        choices = _a.choices;
      return groups.filter(function (group) {
        var isActive = group.active === true && group.disabled === false;
        var hasActiveOptions = choices.some(function (choice) {
          return choice.active === true && choice.disabled === false;
        });
        return isActive && hasActiveOptions;
      }, []);
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Get loading state from store
   */
  Store.prototype.isLoading = function () {
    return this.state.loading;
  };
  /**
   * Get single choice by it's ID
   */
  Store.prototype.getChoiceById = function (id) {
    return this.activeChoices.find(function (choice) {
      return choice.id === parseInt(id, 10);
    });
  };
  /**
   * Get group by group id
   */
  Store.prototype.getGroupById = function (id) {
    return this.groups.find(function (group) {
      return group.id === id;
    });
  };
  return Store;
}();
exports["default"] = Store;

/***/ }),

/***/ 686:
/***/ (function(__unused_webpack_module, exports) {



/**
 * Helpers to create HTML elements used by Choices
 * Can be overridden by providing `callbackOnCreateTemplates` option
 */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var templates = {
  containerOuter: function (_a, dir, isSelectElement, isSelectOneElement, searchEnabled, passedElementType, labelId) {
    var containerOuter = _a.classNames.containerOuter;
    var div = Object.assign(document.createElement('div'), {
      className: containerOuter
    });
    div.dataset.type = passedElementType;
    if (dir) {
      div.dir = dir;
    }
    if (isSelectOneElement) {
      div.tabIndex = 0;
    }
    if (isSelectElement) {
      div.setAttribute('role', searchEnabled ? 'combobox' : 'listbox');
      if (searchEnabled) {
        div.setAttribute('aria-autocomplete', 'list');
      }
    }
    div.setAttribute('aria-haspopup', 'true');
    div.setAttribute('aria-expanded', 'false');
    if (labelId) {
      div.setAttribute('aria-labelledby', labelId);
    }
    return div;
  },
  containerInner: function (_a) {
    var containerInner = _a.classNames.containerInner;
    return Object.assign(document.createElement('div'), {
      className: containerInner
    });
  },
  itemList: function (_a, isSelectOneElement) {
    var _b = _a.classNames,
      list = _b.list,
      listSingle = _b.listSingle,
      listItems = _b.listItems;
    return Object.assign(document.createElement('div'), {
      className: "".concat(list, " ").concat(isSelectOneElement ? listSingle : listItems)
    });
  },
  placeholder: function (_a, value) {
    var _b;
    var allowHTML = _a.allowHTML,
      placeholder = _a.classNames.placeholder;
    return Object.assign(document.createElement('div'), (_b = {
      className: placeholder
    }, _b[allowHTML ? 'innerHTML' : 'innerText'] = value, _b));
  },
  item: function (_a, _b, removeItemButton) {
    var _c, _d;
    var allowHTML = _a.allowHTML,
      _e = _a.classNames,
      item = _e.item,
      button = _e.button,
      highlightedState = _e.highlightedState,
      itemSelectable = _e.itemSelectable,
      placeholder = _e.placeholder;
    var id = _b.id,
      value = _b.value,
      label = _b.label,
      customProperties = _b.customProperties,
      active = _b.active,
      disabled = _b.disabled,
      highlighted = _b.highlighted,
      isPlaceholder = _b.placeholder;
    var div = Object.assign(document.createElement('div'), (_c = {
      className: item
    }, _c[allowHTML ? 'innerHTML' : 'innerText'] = label, _c));
    Object.assign(div.dataset, {
      item: '',
      id: id,
      value: value,
      customProperties: customProperties
    });
    if (active) {
      div.setAttribute('aria-selected', 'true');
    }
    if (disabled) {
      div.setAttribute('aria-disabled', 'true');
    }
    if (isPlaceholder) {
      div.classList.add(placeholder);
    }
    div.classList.add(highlighted ? highlightedState : itemSelectable);
    if (removeItemButton) {
      if (disabled) {
        div.classList.remove(itemSelectable);
      }
      div.dataset.deletable = '';
      /** @todo This MUST be localizable, not hardcoded! */
      var REMOVE_ITEM_TEXT = 'Remove item';
      var removeButton = Object.assign(document.createElement('button'), (_d = {
        type: 'button',
        className: button
      }, _d[allowHTML ? 'innerHTML' : 'innerText'] = REMOVE_ITEM_TEXT, _d));
      removeButton.setAttribute('aria-label', "".concat(REMOVE_ITEM_TEXT, ": '").concat(value, "'"));
      removeButton.dataset.button = '';
      div.appendChild(removeButton);
    }
    return div;
  },
  choiceList: function (_a, isSelectOneElement) {
    var list = _a.classNames.list;
    var div = Object.assign(document.createElement('div'), {
      className: list
    });
    if (!isSelectOneElement) {
      div.setAttribute('aria-multiselectable', 'true');
    }
    div.setAttribute('role', 'listbox');
    return div;
  },
  choiceGroup: function (_a, _b) {
    var _c;
    var allowHTML = _a.allowHTML,
      _d = _a.classNames,
      group = _d.group,
      groupHeading = _d.groupHeading,
      itemDisabled = _d.itemDisabled;
    var id = _b.id,
      value = _b.value,
      disabled = _b.disabled;
    var div = Object.assign(document.createElement('div'), {
      className: "".concat(group, " ").concat(disabled ? itemDisabled : '')
    });
    div.setAttribute('role', 'group');
    Object.assign(div.dataset, {
      group: '',
      id: id,
      value: value
    });
    if (disabled) {
      div.setAttribute('aria-disabled', 'true');
    }
    div.appendChild(Object.assign(document.createElement('div'), (_c = {
      className: groupHeading
    }, _c[allowHTML ? 'innerHTML' : 'innerText'] = value, _c)));
    return div;
  },
  choice: function (_a, _b, selectText) {
    var _c;
    var allowHTML = _a.allowHTML,
      _d = _a.classNames,
      item = _d.item,
      itemChoice = _d.itemChoice,
      itemSelectable = _d.itemSelectable,
      selectedState = _d.selectedState,
      itemDisabled = _d.itemDisabled,
      placeholder = _d.placeholder;
    var id = _b.id,
      value = _b.value,
      label = _b.label,
      groupId = _b.groupId,
      elementId = _b.elementId,
      isDisabled = _b.disabled,
      isSelected = _b.selected,
      isPlaceholder = _b.placeholder;
    var div = Object.assign(document.createElement('div'), (_c = {
      id: elementId
    }, _c[allowHTML ? 'innerHTML' : 'innerText'] = label, _c.className = "".concat(item, " ").concat(itemChoice), _c));
    if (isSelected) {
      div.classList.add(selectedState);
    }
    if (isPlaceholder) {
      div.classList.add(placeholder);
    }
    div.setAttribute('role', groupId && groupId > 0 ? 'treeitem' : 'option');
    Object.assign(div.dataset, {
      choice: '',
      id: id,
      value: value,
      selectText: selectText
    });
    if (isDisabled) {
      div.classList.add(itemDisabled);
      div.dataset.choiceDisabled = '';
      div.setAttribute('aria-disabled', 'true');
    } else {
      div.classList.add(itemSelectable);
      div.dataset.choiceSelectable = '';
    }
    return div;
  },
  input: function (_a, placeholderValue) {
    var _b = _a.classNames,
      input = _b.input,
      inputCloned = _b.inputCloned;
    var inp = Object.assign(document.createElement('input'), {
      type: 'search',
      name: 'search_terms',
      className: "".concat(input, " ").concat(inputCloned),
      autocomplete: 'off',
      autocapitalize: 'off',
      spellcheck: false
    });
    inp.setAttribute('role', 'textbox');
    inp.setAttribute('aria-autocomplete', 'list');
    inp.setAttribute('aria-label', placeholderValue);
    return inp;
  },
  dropdown: function (_a) {
    var _b = _a.classNames,
      list = _b.list,
      listDropdown = _b.listDropdown;
    var div = document.createElement('div');
    div.classList.add(list, listDropdown);
    div.setAttribute('aria-expanded', 'false');
    return div;
  },
  notice: function (_a, innerText, type) {
    var _b;
    var allowHTML = _a.allowHTML,
      _c = _a.classNames,
      item = _c.item,
      itemChoice = _c.itemChoice,
      noResults = _c.noResults,
      noChoices = _c.noChoices;
    if (type === void 0) {
      type = '';
    }
    var classes = [item, itemChoice];
    if (type === 'no-choices') {
      classes.push(noChoices);
    } else if (type === 'no-results') {
      classes.push(noResults);
    }
    return Object.assign(document.createElement('div'), (_b = {}, _b[allowHTML ? 'innerHTML' : 'innerText'] = innerText, _b.className = classes.join(' '), _b));
  },
  option: function (_a) {
    var label = _a.label,
      value = _a.value,
      customProperties = _a.customProperties,
      active = _a.active,
      disabled = _a.disabled;
    var opt = new Option(label, value, false, active);
    if (customProperties) {
      opt.dataset.customProperties = "".concat(customProperties);
    }
    opt.disabled = !!disabled;
    return opt;
  }
};
exports["default"] = templates;

/***/ }),

/***/ 996:
/***/ (function(module) {



var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


/***/ }),

/***/ 221:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Fuse; }
/* harmony export */ });
/**
 * Fuse.js v6.6.2 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2022 Kiro Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

function isArray(value) {
  return !Array.isArray
    ? getTag(value) === '[object Array]'
    : Array.isArray(value)
}

// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/baseToString.js
const INFINITY = 1 / 0;
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value
  }
  let result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result
}

function toString(value) {
  return value == null ? '' : baseToString(value)
}

function isString(value) {
  return typeof value === 'string'
}

function isNumber(value) {
  return typeof value === 'number'
}

// Adapted from: https://github.com/lodash/lodash/blob/master/isBoolean.js
function isBoolean(value) {
  return (
    value === true ||
    value === false ||
    (isObjectLike(value) && getTag(value) == '[object Boolean]')
  )
}

function isObject(value) {
  return typeof value === 'object'
}

// Checks if `value` is object-like.
function isObjectLike(value) {
  return isObject(value) && value !== null
}

function isDefined(value) {
  return value !== undefined && value !== null
}

function isBlank(value) {
  return !value.trim().length
}

// Gets the `toStringTag` of `value`.
// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/getTag.js
function getTag(value) {
  return value == null
    ? value === undefined
      ? '[object Undefined]'
      : '[object Null]'
    : Object.prototype.toString.call(value)
}

const EXTENDED_SEARCH_UNAVAILABLE = 'Extended search is not available';

const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";

const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) =>
  `Invalid value for key ${key}`;

const PATTERN_LENGTH_TOO_LARGE = (max) =>
  `Pattern length exceeds max of ${max}.`;

const MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;

const INVALID_KEY_WEIGHT_VALUE = (key) =>
  `Property 'weight' in key '${key}' must be a positive integer`;

const hasOwn = Object.prototype.hasOwnProperty;

class KeyStore {
  constructor(keys) {
    this._keys = [];
    this._keyMap = {};

    let totalWeight = 0;

    keys.forEach((key) => {
      let obj = createKey(key);

      totalWeight += obj.weight;

      this._keys.push(obj);
      this._keyMap[obj.id] = obj;

      totalWeight += obj.weight;
    });

    // Normalize weights so that their sum is equal to 1
    this._keys.forEach((key) => {
      key.weight /= totalWeight;
    });
  }
  get(keyId) {
    return this._keyMap[keyId]
  }
  keys() {
    return this._keys
  }
  toJSON() {
    return JSON.stringify(this._keys)
  }
}

function createKey(key) {
  let path = null;
  let id = null;
  let src = null;
  let weight = 1;
  let getFn = null;

  if (isString(key) || isArray(key)) {
    src = key;
    path = createKeyPath(key);
    id = createKeyId(key);
  } else {
    if (!hasOwn.call(key, 'name')) {
      throw new Error(MISSING_KEY_PROPERTY('name'))
    }

    const name = key.name;
    src = name;

    if (hasOwn.call(key, 'weight')) {
      weight = key.weight;

      if (weight <= 0) {
        throw new Error(INVALID_KEY_WEIGHT_VALUE(name))
      }
    }

    path = createKeyPath(name);
    id = createKeyId(name);
    getFn = key.getFn;
  }

  return { path, id, weight, src, getFn }
}

function createKeyPath(key) {
  return isArray(key) ? key : key.split('.')
}

function createKeyId(key) {
  return isArray(key) ? key.join('.') : key
}

function get(obj, path) {
  let list = [];
  let arr = false;

  const deepGet = (obj, path, index) => {
    if (!isDefined(obj)) {
      return
    }
    if (!path[index]) {
      // If there's no path left, we've arrived at the object we care about.
      list.push(obj);
    } else {
      let key = path[index];

      const value = obj[key];

      if (!isDefined(value)) {
        return
      }

      // If we're at the last value in the path, and if it's a string/number/bool,
      // add it to the list
      if (
        index === path.length - 1 &&
        (isString(value) || isNumber(value) || isBoolean(value))
      ) {
        list.push(toString(value));
      } else if (isArray(value)) {
        arr = true;
        // Search each item in the array.
        for (let i = 0, len = value.length; i < len; i += 1) {
          deepGet(value[i], path, index + 1);
        }
      } else if (path.length) {
        // An object. Recurse further.
        deepGet(value, path, index + 1);
      }
    }
  };

  // Backwards compatibility (since path used to be a string)
  deepGet(obj, isString(path) ? path.split('.') : path, 0);

  return arr ? list : list[0]
}

const MatchOptions = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: false,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: false,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
};

const BasicOptions = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: false,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: false,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: true,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (a, b) =>
    a.score === b.score ? (a.idx < b.idx ? -1 : 1) : a.score < b.score ? -1 : 1
};

const FuzzyOptions = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
};

const AdvancedOptions = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: false,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: get,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: false,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: false,
  // The weight to determine how much field length norm effects scoring.
  fieldNormWeight: 1
};

var Config = {
  ...BasicOptions,
  ...MatchOptions,
  ...FuzzyOptions,
  ...AdvancedOptions
};

const SPACE = /[^ ]+/g;

// Field-length norm: the shorter the field, the higher the weight.
// Set to 3 decimals to reduce index size.
function norm(weight = 1, mantissa = 3) {
  const cache = new Map();
  const m = Math.pow(10, mantissa);

  return {
    get(value) {
      const numTokens = value.match(SPACE).length;

      if (cache.has(numTokens)) {
        return cache.get(numTokens)
      }

      // Default function is 1/sqrt(x), weight makes that variable
      const norm = 1 / Math.pow(numTokens, 0.5 * weight);

      // In place of `toFixed(mantissa)`, for faster computation
      const n = parseFloat(Math.round(norm * m) / m);

      cache.set(numTokens, n);

      return n
    },
    clear() {
      cache.clear();
    }
  }
}

class FuseIndex {
  constructor({
    getFn = Config.getFn,
    fieldNormWeight = Config.fieldNormWeight
  } = {}) {
    this.norm = norm(fieldNormWeight, 3);
    this.getFn = getFn;
    this.isCreated = false;

    this.setIndexRecords();
  }
  setSources(docs = []) {
    this.docs = docs;
  }
  setIndexRecords(records = []) {
    this.records = records;
  }
  setKeys(keys = []) {
    this.keys = keys;
    this._keysMap = {};
    keys.forEach((key, idx) => {
      this._keysMap[key.id] = idx;
    });
  }
  create() {
    if (this.isCreated || !this.docs.length) {
      return
    }

    this.isCreated = true;

    // List is Array<String>
    if (isString(this.docs[0])) {
      this.docs.forEach((doc, docIndex) => {
        this._addString(doc, docIndex);
      });
    } else {
      // List is Array<Object>
      this.docs.forEach((doc, docIndex) => {
        this._addObject(doc, docIndex);
      });
    }

    this.norm.clear();
  }
  // Adds a doc to the end of the index
  add(doc) {
    const idx = this.size();

    if (isString(doc)) {
      this._addString(doc, idx);
    } else {
      this._addObject(doc, idx);
    }
  }
  // Removes the doc at the specified index of the index
  removeAt(idx) {
    this.records.splice(idx, 1);

    // Change ref index of every subsquent doc
    for (let i = idx, len = this.size(); i < len; i += 1) {
      this.records[i].i -= 1;
    }
  }
  getValueForItemAtKeyId(item, keyId) {
    return item[this._keysMap[keyId]]
  }
  size() {
    return this.records.length
  }
  _addString(doc, docIndex) {
    if (!isDefined(doc) || isBlank(doc)) {
      return
    }

    let record = {
      v: doc,
      i: docIndex,
      n: this.norm.get(doc)
    };

    this.records.push(record);
  }
  _addObject(doc, docIndex) {
    let record = { i: docIndex, $: {} };

    // Iterate over every key (i.e, path), and fetch the value at that key
    this.keys.forEach((key, keyIndex) => {
      let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);

      if (!isDefined(value)) {
        return
      }

      if (isArray(value)) {
        let subRecords = [];
        const stack = [{ nestedArrIndex: -1, value }];

        while (stack.length) {
          const { nestedArrIndex, value } = stack.pop();

          if (!isDefined(value)) {
            continue
          }

          if (isString(value) && !isBlank(value)) {
            let subRecord = {
              v: value,
              i: nestedArrIndex,
              n: this.norm.get(value)
            };

            subRecords.push(subRecord);
          } else if (isArray(value)) {
            value.forEach((item, k) => {
              stack.push({
                nestedArrIndex: k,
                value: item
              });
            });
          } else ;
        }
        record.$[keyIndex] = subRecords;
      } else if (isString(value) && !isBlank(value)) {
        let subRecord = {
          v: value,
          n: this.norm.get(value)
        };

        record.$[keyIndex] = subRecord;
      }
    });

    this.records.push(record);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    }
  }
}

function createIndex(
  keys,
  docs,
  { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}
) {
  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
  myIndex.setKeys(keys.map(createKey));
  myIndex.setSources(docs);
  myIndex.create();
  return myIndex
}

function parseIndex(
  data,
  { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}
) {
  const { keys, records } = data;
  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
  myIndex.setKeys(keys);
  myIndex.setIndexRecords(records);
  return myIndex
}

function computeScore$1(
  pattern,
  {
    errors = 0,
    currentLocation = 0,
    expectedLocation = 0,
    distance = Config.distance,
    ignoreLocation = Config.ignoreLocation
  } = {}
) {
  const accuracy = errors / pattern.length;

  if (ignoreLocation) {
    return accuracy
  }

  const proximity = Math.abs(expectedLocation - currentLocation);

  if (!distance) {
    // Dodge divide by zero error.
    return proximity ? 1.0 : accuracy
  }

  return accuracy + proximity / distance
}

function convertMaskToIndices(
  matchmask = [],
  minMatchCharLength = Config.minMatchCharLength
) {
  let indices = [];
  let start = -1;
  let end = -1;
  let i = 0;

  for (let len = matchmask.length; i < len; i += 1) {
    let match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        indices.push([start, end]);
      }
      start = -1;
    }
  }

  // (i-1 - start) + 1 => i - start
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    indices.push([start, i - 1]);
  }

  return indices
}

// Machine word size
const MAX_BITS = 32;

function search(
  text,
  pattern,
  patternAlphabet,
  {
    location = Config.location,
    distance = Config.distance,
    threshold = Config.threshold,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    includeMatches = Config.includeMatches,
    ignoreLocation = Config.ignoreLocation
  } = {}
) {
  if (pattern.length > MAX_BITS) {
    throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS))
  }

  const patternLen = pattern.length;
  // Set starting location at beginning text and initialize the alphabet.
  const textLen = text.length;
  // Handle the case when location > text.length
  const expectedLocation = Math.max(0, Math.min(location, textLen));
  // Highest score beyond which we give up.
  let currentThreshold = threshold;
  // Is there a nearby exact match? (speedup)
  let bestLocation = expectedLocation;

  // Performance: only computer matches when the minMatchCharLength > 1
  // OR if `includeMatches` is true.
  const computeMatches = minMatchCharLength > 1 || includeMatches;
  // A mask of the matches, used for building the indices
  const matchMask = computeMatches ? Array(textLen) : [];

  let index;

  // Get all exact matches, here for speed up
  while ((index = text.indexOf(pattern, bestLocation)) > -1) {
    let score = computeScore$1(pattern, {
      currentLocation: index,
      expectedLocation,
      distance,
      ignoreLocation
    });

    currentThreshold = Math.min(score, currentThreshold);
    bestLocation = index + patternLen;

    if (computeMatches) {
      let i = 0;
      while (i < patternLen) {
        matchMask[index + i] = 1;
        i += 1;
      }
    }
  }

  // Reset the best location
  bestLocation = -1;

  let lastBitArr = [];
  let finalScore = 1;
  let binMax = patternLen + textLen;

  const mask = 1 << (patternLen - 1);

  for (let i = 0; i < patternLen; i += 1) {
    // Scan for the best match; each iteration allows for one more error.
    // Run a binary search to determine how far from the match location we can stray
    // at this error level.
    let binMin = 0;
    let binMid = binMax;

    while (binMin < binMid) {
      const score = computeScore$1(pattern, {
        errors: i,
        currentLocation: expectedLocation + binMid,
        expectedLocation,
        distance,
        ignoreLocation
      });

      if (score <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }

      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }

    // Use the result from this iteration as the maximum for the next.
    binMax = binMid;

    let start = Math.max(1, expectedLocation - binMid + 1);
    let finish = findAllMatches
      ? textLen
      : Math.min(expectedLocation + binMid, textLen) + patternLen;

    // Initialize the bit array
    let bitArr = Array(finish + 2);

    bitArr[finish + 1] = (1 << i) - 1;

    for (let j = finish; j >= start; j -= 1) {
      let currentLocation = j - 1;
      let charMatch = patternAlphabet[text.charAt(currentLocation)];

      if (computeMatches) {
        // Speed up: quick bool to int conversion (i.e, `charMatch ? 1 : 0`)
        matchMask[currentLocation] = +!!charMatch;
      }

      // First pass: exact match
      bitArr[j] = ((bitArr[j + 1] << 1) | 1) & charMatch;

      // Subsequent passes: fuzzy match
      if (i) {
        bitArr[j] |=
          ((lastBitArr[j + 1] | lastBitArr[j]) << 1) | 1 | lastBitArr[j + 1];
      }

      if (bitArr[j] & mask) {
        finalScore = computeScore$1(pattern, {
          errors: i,
          currentLocation,
          expectedLocation,
          distance,
          ignoreLocation
        });

        // This match will almost certainly be better than any existing match.
        // But check anyway.
        if (finalScore <= currentThreshold) {
          // Indeed it is
          currentThreshold = finalScore;
          bestLocation = currentLocation;

          // Already passed `loc`, downhill from here on in.
          if (bestLocation <= expectedLocation) {
            break
          }

          // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }

    // No hope for a (better) match at greater error levels.
    const score = computeScore$1(pattern, {
      errors: i + 1,
      currentLocation: expectedLocation,
      expectedLocation,
      distance,
      ignoreLocation
    });

    if (score > currentThreshold) {
      break
    }

    lastBitArr = bitArr;
  }

  const result = {
    isMatch: bestLocation >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(0.001, finalScore)
  };

  if (computeMatches) {
    const indices = convertMaskToIndices(matchMask, minMatchCharLength);
    if (!indices.length) {
      result.isMatch = false;
    } else if (includeMatches) {
      result.indices = indices;
    }
  }

  return result
}

function createPatternAlphabet(pattern) {
  let mask = {};

  for (let i = 0, len = pattern.length; i < len; i += 1) {
    const char = pattern.charAt(i);
    mask[char] = (mask[char] || 0) | (1 << (len - i - 1));
  }

  return mask
}

class BitapSearch {
  constructor(
    pattern,
    {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreLocation = Config.ignoreLocation
    } = {}
  ) {
    this.options = {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreLocation
    };

    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();

    this.chunks = [];

    if (!this.pattern.length) {
      return
    }

    const addChunk = (pattern, startIndex) => {
      this.chunks.push({
        pattern,
        alphabet: createPatternAlphabet(pattern),
        startIndex
      });
    };

    const len = this.pattern.length;

    if (len > MAX_BITS) {
      let i = 0;
      const remainder = len % MAX_BITS;
      const end = len - remainder;

      while (i < end) {
        addChunk(this.pattern.substr(i, MAX_BITS), i);
        i += MAX_BITS;
      }

      if (remainder) {
        const startIndex = len - MAX_BITS;
        addChunk(this.pattern.substr(startIndex), startIndex);
      }
    } else {
      addChunk(this.pattern, 0);
    }
  }

  searchIn(text) {
    const { isCaseSensitive, includeMatches } = this.options;

    if (!isCaseSensitive) {
      text = text.toLowerCase();
    }

    // Exact match
    if (this.pattern === text) {
      let result = {
        isMatch: true,
        score: 0
      };

      if (includeMatches) {
        result.indices = [[0, text.length - 1]];
      }

      return result
    }

    // Otherwise, use Bitap algorithm
    const {
      location,
      distance,
      threshold,
      findAllMatches,
      minMatchCharLength,
      ignoreLocation
    } = this.options;

    let allIndices = [];
    let totalScore = 0;
    let hasMatches = false;

    this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
      const { isMatch, score, indices } = search(text, pattern, alphabet, {
        location: location + startIndex,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        includeMatches,
        ignoreLocation
      });

      if (isMatch) {
        hasMatches = true;
      }

      totalScore += score;

      if (isMatch && indices) {
        allIndices = [...allIndices, ...indices];
      }
    });

    let result = {
      isMatch: hasMatches,
      score: hasMatches ? totalScore / this.chunks.length : 1
    };

    if (hasMatches && includeMatches) {
      result.indices = allIndices;
    }

    return result
  }
}

class BaseMatch {
  constructor(pattern) {
    this.pattern = pattern;
  }
  static isMultiMatch(pattern) {
    return getMatch(pattern, this.multiRegex)
  }
  static isSingleMatch(pattern) {
    return getMatch(pattern, this.singleRegex)
  }
  search(/*text*/) {}
}

function getMatch(pattern, exp) {
  const matches = pattern.match(exp);
  return matches ? matches[1] : null
}

// Token: 'file

class ExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'exact'
  }
  static get multiRegex() {
    return /^="(.*)"$/
  }
  static get singleRegex() {
    return /^=(.*)$/
  }
  search(text) {
    const isMatch = text === this.pattern;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    }
  }
}

// Token: !fire

class InverseExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-exact'
  }
  static get multiRegex() {
    return /^!"(.*)"$/
  }
  static get singleRegex() {
    return /^!(.*)$/
  }
  search(text) {
    const index = text.indexOf(this.pattern);
    const isMatch = index === -1;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

// Token: ^file

class PrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'prefix-exact'
  }
  static get multiRegex() {
    return /^\^"(.*)"$/
  }
  static get singleRegex() {
    return /^\^(.*)$/
  }
  search(text) {
    const isMatch = text.startsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    }
  }
}

// Token: !^fire

class InversePrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-prefix-exact'
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/
  }
  static get singleRegex() {
    return /^!\^(.*)$/
  }
  search(text) {
    const isMatch = !text.startsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

// Token: .file$

class SuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'suffix-exact'
  }
  static get multiRegex() {
    return /^"(.*)"\$$/
  }
  static get singleRegex() {
    return /^(.*)\$$/
  }
  search(text) {
    const isMatch = text.endsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [text.length - this.pattern.length, text.length - 1]
    }
  }
}

// Token: !.file$

class InverseSuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-suffix-exact'
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/
  }
  static get singleRegex() {
    return /^!(.*)\$$/
  }
  search(text) {
    const isMatch = !text.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

class FuzzyMatch extends BaseMatch {
  constructor(
    pattern,
    {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreLocation = Config.ignoreLocation
    } = {}
  ) {
    super(pattern);
    this._bitapSearch = new BitapSearch(pattern, {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreLocation
    });
  }
  static get type() {
    return 'fuzzy'
  }
  static get multiRegex() {
    return /^"(.*)"$/
  }
  static get singleRegex() {
    return /^(.*)$/
  }
  search(text) {
    return this._bitapSearch.searchIn(text)
  }
}

// Token: 'file

class IncludeMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'include'
  }
  static get multiRegex() {
    return /^'"(.*)"$/
  }
  static get singleRegex() {
    return /^'(.*)$/
  }
  search(text) {
    let location = 0;
    let index;

    const indices = [];
    const patternLen = this.pattern.length;

    // Get all exact matches
    while ((index = text.indexOf(this.pattern, location)) > -1) {
      location = index + patternLen;
      indices.push([index, location - 1]);
    }

    const isMatch = !!indices.length;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices
    }
  }
}

// ❗Order is important. DO NOT CHANGE.
const searchers = [
  ExactMatch,
  IncludeMatch,
  PrefixExactMatch,
  InversePrefixExactMatch,
  InverseSuffixExactMatch,
  SuffixExactMatch,
  InverseExactMatch,
  FuzzyMatch
];

const searchersLen = searchers.length;

// Regex to split by spaces, but keep anything in quotes together
const SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
const OR_TOKEN = '|';

// Return a 2D array representation of the query, for simpler parsing.
// Example:
// "^core go$ | rb$ | py$ xy$" => [["^core", "go$"], ["rb$"], ["py$", "xy$"]]
function parseQuery(pattern, options = {}) {
  return pattern.split(OR_TOKEN).map((item) => {
    let query = item
      .trim()
      .split(SPACE_RE)
      .filter((item) => item && !!item.trim());

    let results = [];
    for (let i = 0, len = query.length; i < len; i += 1) {
      const queryItem = query[i];

      // 1. Handle multiple query match (i.e, once that are quoted, like `"hello world"`)
      let found = false;
      let idx = -1;
      while (!found && ++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isMultiMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          found = true;
        }
      }

      if (found) {
        continue
      }

      // 2. Handle single query matches (i.e, once that are *not* quoted)
      idx = -1;
      while (++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isSingleMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          break
        }
      }
    }

    return results
  })
}

// These extended matchers can return an array of matches, as opposed
// to a singl match
const MultiMatchSet = new Set([FuzzyMatch.type, IncludeMatch.type]);

/**
 * Command-like searching
 * ======================
 *
 * Given multiple search terms delimited by spaces.e.g. `^jscript .python$ ruby !java`,
 * search in a given text.
 *
 * Search syntax:
 *
 * | Token       | Match type                 | Description                            |
 * | ----------- | -------------------------- | -------------------------------------- |
 * | `jscript`   | fuzzy-match                | Items that fuzzy match `jscript`       |
 * | `=scheme`   | exact-match                | Items that are `scheme`                |
 * | `'python`   | include-match              | Items that include `python`            |
 * | `!ruby`     | inverse-exact-match        | Items that do not include `ruby`       |
 * | `^java`     | prefix-exact-match         | Items that start with `java`           |
 * | `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang` |
 * | `.js$`      | suffix-exact-match         | Items that end with `.js`              |
 * | `!.go$`     | inverse-suffix-exact-match | Items that do not end with `.go`       |
 *
 * A single pipe character acts as an OR operator. For example, the following
 * query matches entries that start with `core` and end with either`go`, `rb`,
 * or`py`.
 *
 * ```
 * ^core go$ | rb$ | py$
 * ```
 */
class ExtendedSearch {
  constructor(
    pattern,
    {
      isCaseSensitive = Config.isCaseSensitive,
      includeMatches = Config.includeMatches,
      minMatchCharLength = Config.minMatchCharLength,
      ignoreLocation = Config.ignoreLocation,
      findAllMatches = Config.findAllMatches,
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance
    } = {}
  ) {
    this.query = null;
    this.options = {
      isCaseSensitive,
      includeMatches,
      minMatchCharLength,
      findAllMatches,
      ignoreLocation,
      location,
      threshold,
      distance
    };

    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    this.query = parseQuery(this.pattern, this.options);
  }

  static condition(_, options) {
    return options.useExtendedSearch
  }

  searchIn(text) {
    const query = this.query;

    if (!query) {
      return {
        isMatch: false,
        score: 1
      }
    }

    const { includeMatches, isCaseSensitive } = this.options;

    text = isCaseSensitive ? text : text.toLowerCase();

    let numMatches = 0;
    let allIndices = [];
    let totalScore = 0;

    // ORs
    for (let i = 0, qLen = query.length; i < qLen; i += 1) {
      const searchers = query[i];

      // Reset indices
      allIndices.length = 0;
      numMatches = 0;

      // ANDs
      for (let j = 0, pLen = searchers.length; j < pLen; j += 1) {
        const searcher = searchers[j];
        const { isMatch, indices, score } = searcher.search(text);

        if (isMatch) {
          numMatches += 1;
          totalScore += score;
          if (includeMatches) {
            const type = searcher.constructor.type;
            if (MultiMatchSet.has(type)) {
              allIndices = [...allIndices, ...indices];
            } else {
              allIndices.push(indices);
            }
          }
        } else {
          totalScore = 0;
          numMatches = 0;
          allIndices.length = 0;
          break
        }
      }

      // OR condition, so if TRUE, return
      if (numMatches) {
        let result = {
          isMatch: true,
          score: totalScore / numMatches
        };

        if (includeMatches) {
          result.indices = allIndices;
        }

        return result
      }
    }

    // Nothing was matched
    return {
      isMatch: false,
      score: 1
    }
  }
}

const registeredSearchers = [];

function register(...args) {
  registeredSearchers.push(...args);
}

function createSearcher(pattern, options) {
  for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
    let searcherClass = registeredSearchers[i];
    if (searcherClass.condition(pattern, options)) {
      return new searcherClass(pattern, options)
    }
  }

  return new BitapSearch(pattern, options)
}

const LogicalOperator = {
  AND: '$and',
  OR: '$or'
};

const KeyType = {
  PATH: '$path',
  PATTERN: '$val'
};

const isExpression = (query) =>
  !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);

const isPath = (query) => !!query[KeyType.PATH];

const isLeaf = (query) =>
  !isArray(query) && isObject(query) && !isExpression(query);

const convertToExplicit = (query) => ({
  [LogicalOperator.AND]: Object.keys(query).map((key) => ({
    [key]: query[key]
  }))
});

// When `auto` is `true`, the parse function will infer and initialize and add
// the appropriate `Searcher` instance
function parse(query, options, { auto = true } = {}) {
  const next = (query) => {
    let keys = Object.keys(query);

    const isQueryPath = isPath(query);

    if (!isQueryPath && keys.length > 1 && !isExpression(query)) {
      return next(convertToExplicit(query))
    }

    if (isLeaf(query)) {
      const key = isQueryPath ? query[KeyType.PATH] : keys[0];

      const pattern = isQueryPath ? query[KeyType.PATTERN] : query[key];

      if (!isString(pattern)) {
        throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key))
      }

      const obj = {
        keyId: createKeyId(key),
        pattern
      };

      if (auto) {
        obj.searcher = createSearcher(pattern, options);
      }

      return obj
    }

    let node = {
      children: [],
      operator: keys[0]
    };

    keys.forEach((key) => {
      const value = query[key];

      if (isArray(value)) {
        value.forEach((item) => {
          node.children.push(next(item));
        });
      }
    });

    return node
  };

  if (!isExpression(query)) {
    query = convertToExplicit(query);
  }

  return next(query)
}

// Practical scoring function
function computeScore(
  results,
  { ignoreFieldNorm = Config.ignoreFieldNorm }
) {
  results.forEach((result) => {
    let totalScore = 1;

    result.matches.forEach(({ key, norm, score }) => {
      const weight = key ? key.weight : null;

      totalScore *= Math.pow(
        score === 0 && weight ? Number.EPSILON : score,
        (weight || 1) * (ignoreFieldNorm ? 1 : norm)
      );
    });

    result.score = totalScore;
  });
}

function transformMatches(result, data) {
  const matches = result.matches;
  data.matches = [];

  if (!isDefined(matches)) {
    return
  }

  matches.forEach((match) => {
    if (!isDefined(match.indices) || !match.indices.length) {
      return
    }

    const { indices, value } = match;

    let obj = {
      indices,
      value
    };

    if (match.key) {
      obj.key = match.key.src;
    }

    if (match.idx > -1) {
      obj.refIndex = match.idx;
    }

    data.matches.push(obj);
  });
}

function transformScore(result, data) {
  data.score = result.score;
}

function format(
  results,
  docs,
  {
    includeMatches = Config.includeMatches,
    includeScore = Config.includeScore
  } = {}
) {
  const transformers = [];

  if (includeMatches) transformers.push(transformMatches);
  if (includeScore) transformers.push(transformScore);

  return results.map((result) => {
    const { idx } = result;

    const data = {
      item: docs[idx],
      refIndex: idx
    };

    if (transformers.length) {
      transformers.forEach((transformer) => {
        transformer(result, data);
      });
    }

    return data
  })
}

class Fuse {
  constructor(docs, options = {}, index) {
    this.options = { ...Config, ...options };

    if (
      this.options.useExtendedSearch &&
      !true
    ) {}

    this._keyStore = new KeyStore(this.options.keys);

    this.setCollection(docs, index);
  }

  setCollection(docs, index) {
    this._docs = docs;

    if (index && !(index instanceof FuseIndex)) {
      throw new Error(INCORRECT_INDEX_TYPE)
    }

    this._myIndex =
      index ||
      createIndex(this.options.keys, this._docs, {
        getFn: this.options.getFn,
        fieldNormWeight: this.options.fieldNormWeight
      });
  }

  add(doc) {
    if (!isDefined(doc)) {
      return
    }

    this._docs.push(doc);
    this._myIndex.add(doc);
  }

  remove(predicate = (/* doc, idx */) => false) {
    const results = [];

    for (let i = 0, len = this._docs.length; i < len; i += 1) {
      const doc = this._docs[i];
      if (predicate(doc, i)) {
        this.removeAt(i);
        i -= 1;
        len -= 1;

        results.push(doc);
      }
    }

    return results
  }

  removeAt(idx) {
    this._docs.splice(idx, 1);
    this._myIndex.removeAt(idx);
  }

  getIndex() {
    return this._myIndex
  }

  search(query, { limit = -1 } = {}) {
    const {
      includeMatches,
      includeScore,
      shouldSort,
      sortFn,
      ignoreFieldNorm
    } = this.options;

    let results = isString(query)
      ? isString(this._docs[0])
        ? this._searchStringList(query)
        : this._searchObjectList(query)
      : this._searchLogical(query);

    computeScore(results, { ignoreFieldNorm });

    if (shouldSort) {
      results.sort(sortFn);
    }

    if (isNumber(limit) && limit > -1) {
      results = results.slice(0, limit);
    }

    return format(results, this._docs, {
      includeMatches,
      includeScore
    })
  }

  _searchStringList(query) {
    const searcher = createSearcher(query, this.options);
    const { records } = this._myIndex;
    const results = [];

    // Iterate over every string in the index
    records.forEach(({ v: text, i: idx, n: norm }) => {
      if (!isDefined(text)) {
        return
      }

      const { isMatch, score, indices } = searcher.searchIn(text);

      if (isMatch) {
        results.push({
          item: text,
          idx,
          matches: [{ score, value: text, norm, indices }]
        });
      }
    });

    return results
  }

  _searchLogical(query) {

    const expression = parse(query, this.options);

    const evaluate = (node, item, idx) => {
      if (!node.children) {
        const { keyId, searcher } = node;

        const matches = this._findMatches({
          key: this._keyStore.get(keyId),
          value: this._myIndex.getValueForItemAtKeyId(item, keyId),
          searcher
        });

        if (matches && matches.length) {
          return [
            {
              idx,
              item,
              matches
            }
          ]
        }

        return []
      }

      const res = [];
      for (let i = 0, len = node.children.length; i < len; i += 1) {
        const child = node.children[i];
        const result = evaluate(child, item, idx);
        if (result.length) {
          res.push(...result);
        } else if (node.operator === LogicalOperator.AND) {
          return []
        }
      }
      return res
    };

    const records = this._myIndex.records;
    const resultMap = {};
    const results = [];

    records.forEach(({ $: item, i: idx }) => {
      if (isDefined(item)) {
        let expResults = evaluate(expression, item, idx);

        if (expResults.length) {
          // Dedupe when adding
          if (!resultMap[idx]) {
            resultMap[idx] = { idx, item, matches: [] };
            results.push(resultMap[idx]);
          }
          expResults.forEach(({ matches }) => {
            resultMap[idx].matches.push(...matches);
          });
        }
      }
    });

    return results
  }

  _searchObjectList(query) {
    const searcher = createSearcher(query, this.options);
    const { keys, records } = this._myIndex;
    const results = [];

    // List is Array<Object>
    records.forEach(({ $: item, i: idx }) => {
      if (!isDefined(item)) {
        return
      }

      let matches = [];

      // Iterate over every key (i.e, path), and fetch the value at that key
      keys.forEach((key, keyIndex) => {
        matches.push(
          ...this._findMatches({
            key,
            value: item[keyIndex],
            searcher
          })
        );
      });

      if (matches.length) {
        results.push({
          idx,
          item,
          matches
        });
      }
    });

    return results
  }
  _findMatches({ key, value, searcher }) {
    if (!isDefined(value)) {
      return []
    }

    let matches = [];

    if (isArray(value)) {
      value.forEach(({ v: text, i: idx, n: norm }) => {
        if (!isDefined(text)) {
          return
        }

        const { isMatch, score, indices } = searcher.searchIn(text);

        if (isMatch) {
          matches.push({
            score,
            key,
            value: text,
            idx,
            norm,
            indices
          });
        }
      });
    } else {
      const { v: text, n: norm } = value;

      const { isMatch, score, indices } = searcher.searchIn(text);

      if (isMatch) {
        matches.push({ score, key, value: text, norm, indices });
      }
    }

    return matches
  }
}

Fuse.version = '6.6.2';
Fuse.createIndex = createIndex;
Fuse.parseIndex = parseIndex;
Fuse.config = Config;

{
  Fuse.parseQuery = parse;
}

{
  register(ExtendedSearch);
}




/***/ }),

/***/ 791:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__DO_NOT_USE__ActionTypes": function() { return /* binding */ ActionTypes; },
  "applyMiddleware": function() { return /* binding */ applyMiddleware; },
  "bindActionCreators": function() { return /* binding */ bindActionCreators; },
  "combineReducers": function() { return /* binding */ combineReducers; },
  "compose": function() { return /* binding */ compose; },
  "createStore": function() { return /* binding */ createStore; },
  "legacy_createStore": function() { return /* binding */ legacy_createStore; }
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
;// CONCATENATED MODULE: ./node_modules/redux/es/redux.js


/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = (function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }

  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);

  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if (false) {}

  return typeOfVal;
}

/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error( true ? formatProdErrorMessage(0) : 0);
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error( true ? formatProdErrorMessage(1) : 0);
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error( true ? formatProdErrorMessage(2) : 0);
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(3) : 0);
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error( true ? formatProdErrorMessage(4) : 0);
    }

    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(5) : 0);
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error( true ? formatProdErrorMessage(6) : 0);
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error( true ? formatProdErrorMessage(7) : 0);
    }

    if (typeof action.type === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(8) : 0);
    }

    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(9) : 0);
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error( true ? formatProdErrorMessage(10) : 0);
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error( true ? formatProdErrorMessage(11) : 0);
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
/**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

var legacy_createStore = createStore;

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(12) : 0);
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(13) : 0);
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error( true ? formatProdErrorMessage(14) : 0);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error( true ? formatProdErrorMessage(16) : 0);
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error( true ? formatProdErrorMessage(15) : 0);
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2(_objectSpread2({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (false) {}




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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/* harmony import */ var _scripts_choices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(373);
/* harmony import */ var _scripts_choices__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_choices__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(187);
/* harmony import */ var _scripts_interfaces__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_interfaces__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(883);
/* harmony import */ var _scripts_defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(789);
/* harmony import */ var _scripts_templates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(686);







/* harmony default export */ __webpack_exports__["default"] = ((_scripts_choices__WEBPACK_IMPORTED_MODULE_0___default()));

}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
},{}],2:[function(require,module,exports){
/*!
* focus-trap 6.9.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tabbable = require('tabbable');

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var activeFocusTraps = function () {
  var trapQueue = [];
  return {
    activateTrap: function activateTrap(trap) {
      if (trapQueue.length > 0) {
        var activeTrap = trapQueue[trapQueue.length - 1];

        if (activeTrap !== trap) {
          activeTrap.pause();
        }
      }

      var trapIndex = trapQueue.indexOf(trap);

      if (trapIndex === -1) {
        trapQueue.push(trap);
      } else {
        // move this existing trap to the front of the queue
        trapQueue.splice(trapIndex, 1);
        trapQueue.push(trap);
      }
    },
    deactivateTrap: function deactivateTrap(trap) {
      var trapIndex = trapQueue.indexOf(trap);

      if (trapIndex !== -1) {
        trapQueue.splice(trapIndex, 1);
      }

      if (trapQueue.length > 0) {
        trapQueue[trapQueue.length - 1].unpause();
      }
    }
  };
}();

var isSelectableInput = function isSelectableInput(node) {
  return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
};

var isEscapeEvent = function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
};

var isTabEvent = function isTabEvent(e) {
  return e.key === 'Tab' || e.keyCode === 9;
};

var delay = function delay(fn) {
  return setTimeout(fn, 0);
}; // Array.find/findIndex() are not supported on IE; this replicates enough
//  of Array.findIndex() for our needs


var findIndex = function findIndex(arr, fn) {
  var idx = -1;
  arr.every(function (value, i) {
    if (fn(value)) {
      idx = i;
      return false; // break
    }

    return true; // next
  });
  return idx;
};
/**
 * Get an option's value when it could be a plain value, or a handler that provides
 *  the value.
 * @param {*} value Option's value to check.
 * @param {...*} [params] Any parameters to pass to the handler, if `value` is a function.
 * @returns {*} The `value`, or the handler's returned value.
 */


var valueOrHandler = function valueOrHandler(value) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }

  return typeof value === 'function' ? value.apply(void 0, params) : value;
};

var getActualTarget = function getActualTarget(event) {
  // NOTE: If the trap is _inside_ a shadow DOM, event.target will always be the
  //  shadow host. However, event.target.composedPath() will be an array of
  //  nodes "clicked" from inner-most (the actual element inside the shadow) to
  //  outer-most (the host HTML document). If we have access to composedPath(),
  //  then use its first element; otherwise, fall back to event.target (and
  //  this only works for an _open_ shadow DOM; otherwise,
  //  composedPath()[0] === event.target always).
  return event.target.shadowRoot && typeof event.composedPath === 'function' ? event.composedPath()[0] : event.target;
};

var createFocusTrap = function createFocusTrap(elements, userOptions) {
  // SSR: a live trap shouldn't be created in this type of environment so this
  //  should be safe code to execute if the `document` option isn't specified
  var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;

  var config = _objectSpread2({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true,
    delayInitialFocus: true
  }, userOptions);

  var state = {
    // containers given to createFocusTrap()
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   tabbableNodes: Array<HTMLElement>, // empty if none
    //   focusableNodes: Array<HTMLElement>, // empty if none
    //   firstTabbableNode: HTMLElement|null,
    //   lastTabbableNode: HTMLElement|null,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    containerGroups: [],
    // same order/length as `containers` list
    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: undefined
  };
  var trap; // eslint-disable-line prefer-const -- some private functions reference it, and its methods reference private functions, so we must declare here and define later

  /**
   * Gets a configuration option value.
   * @param {Object|undefined} configOverrideOptions If true, and option is defined in this set,
   *  value will be taken from this object. Otherwise, value will be taken from base configuration.
   * @param {string} optionName Name of the option whose value is sought.
   * @param {string|undefined} [configOptionName] Name of option to use __instead of__ `optionName`
   *  IIF `configOverrideOptions` is not defined. Otherwise, `optionName` is used.
   */

  var getOption = function getOption(configOverrideOptions, optionName, configOptionName) {
    return configOverrideOptions && configOverrideOptions[optionName] !== undefined ? configOverrideOptions[optionName] : config[configOptionName || optionName];
  };
  /**
   * Finds the index of the container that contains the element.
   * @param {HTMLElement} element
   * @returns {number} Index of the container in either `state.containers` or
   *  `state.containerGroups` (the order/length of these lists are the same); -1
   *  if the element isn't found.
   */


  var findContainerIndex = function findContainerIndex(element) {
    // NOTE: search `containerGroups` because it's possible a group contains no tabbable
    //  nodes, but still contains focusable nodes (e.g. if they all have `tabindex=-1`)
    //  and we still need to find the element in there
    return state.containerGroups.findIndex(function (_ref) {
      var container = _ref.container,
          tabbableNodes = _ref.tabbableNodes;
      return container.contains(element) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      tabbableNodes.find(function (node) {
        return node === element;
      });
    });
  };
  /**
   * Gets the node for the given option, which is expected to be an option that
   *  can be either a DOM node, a string that is a selector to get a node, `false`
   *  (if a node is explicitly NOT given), or a function that returns any of these
   *  values.
   * @param {string} optionName
   * @returns {undefined | false | HTMLElement | SVGElement} Returns
   *  `undefined` if the option is not specified; `false` if the option
   *  resolved to `false` (node explicitly not given); otherwise, the resolved
   *  DOM node.
   * @throws {Error} If the option is set, not `false`, and is not, or does not
   *  resolve to a node.
   */


  var getNodeForOption = function getNodeForOption(optionName) {
    var optionValue = config[optionName];

    if (typeof optionValue === 'function') {
      for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        params[_key2 - 1] = arguments[_key2];
      }

      optionValue = optionValue.apply(void 0, params);
    }

    if (optionValue === true) {
      optionValue = undefined; // use default value
    }

    if (!optionValue) {
      if (optionValue === undefined || optionValue === false) {
        return optionValue;
      } // else, empty string (invalid), null (invalid), 0 (invalid)


      throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
    }

    var node = optionValue; // could be HTMLElement, SVGElement, or non-empty string at this point

    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue); // resolve to node, or null if fails

      if (!node) {
        throw new Error("`".concat(optionName, "` as selector refers to no known node"));
      }
    }

    return node;
  };

  var getInitialFocusNode = function getInitialFocusNode() {
    var node = getNodeForOption('initialFocus'); // false explicitly indicates we want no initialFocus at all

    if (node === false) {
      return false;
    }

    if (node === undefined) {
      // option not specified: use fallback options
      if (findContainerIndex(doc.activeElement) >= 0) {
        node = doc.activeElement;
      } else {
        var firstTabbableGroup = state.tabbableGroups[0];
        var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode; // NOTE: `fallbackFocus` option function cannot return `false` (not supported)

        node = firstTabbableNode || getNodeForOption('fallbackFocus');
      }
    }

    if (!node) {
      throw new Error('Your focus-trap needs to have at least one focusable element');
    }

    return node;
  };

  var updateTabbableNodes = function updateTabbableNodes() {
    state.containerGroups = state.containers.map(function (container) {
      var tabbableNodes = tabbable.tabbable(container, config.tabbableOptions); // NOTE: if we have tabbable nodes, we must have focusable nodes; focusable nodes
      //  are a superset of tabbable nodes

      var focusableNodes = tabbable.focusable(container, config.tabbableOptions);
      return {
        container: container,
        tabbableNodes: tabbableNodes,
        focusableNodes: focusableNodes,
        firstTabbableNode: tabbableNodes.length > 0 ? tabbableNodes[0] : null,
        lastTabbableNode: tabbableNodes.length > 0 ? tabbableNodes[tabbableNodes.length - 1] : null,

        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function nextTabbableNode(node) {
          var forward = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          // NOTE: If tabindex is positive (in order to manipulate the tab order separate
          //  from the DOM order), this __will not work__ because the list of focusableNodes,
          //  while it contains tabbable nodes, does not sort its nodes in any order other
          //  than DOM order, because it can't: Where would you place focusable (but not
          //  tabbable) nodes in that order? They have no order, because they aren't tabbale...
          // Support for positive tabindex is already broken and hard to manage (possibly
          //  not supportable, TBD), so this isn't going to make things worse than they
          //  already are, and at least makes things better for the majority of cases where
          //  tabindex is either 0/unset or negative.
          // FYI, positive tabindex issue: https://github.com/focus-trap/focus-trap/issues/375
          var nodeIdx = focusableNodes.findIndex(function (n) {
            return n === node;
          });

          if (nodeIdx < 0) {
            return undefined;
          }

          if (forward) {
            return focusableNodes.slice(nodeIdx + 1).find(function (n) {
              return tabbable.isTabbable(n, config.tabbableOptions);
            });
          }

          return focusableNodes.slice(0, nodeIdx).reverse().find(function (n) {
            return tabbable.isTabbable(n, config.tabbableOptions);
          });
        }
      };
    });
    state.tabbableGroups = state.containerGroups.filter(function (group) {
      return group.tabbableNodes.length > 0;
    }); // throw if no groups have tabbable nodes and we don't have a fallback focus node either

    if (state.tabbableGroups.length <= 0 && !getNodeForOption('fallbackFocus') // returning false not supported for this option
    ) {
      throw new Error('Your focus-trap must have at least one container with at least one tabbable node in it at all times');
    }
  };

  var tryFocus = function tryFocus(node) {
    if (node === false) {
      return;
    }

    if (node === doc.activeElement) {
      return;
    }

    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }

    node.focus({
      preventScroll: !!config.preventScroll
    });
    state.mostRecentlyFocusedNode = node;

    if (isSelectableInput(node)) {
      node.select();
    }
  };

  var getReturnFocusNode = function getReturnFocusNode(previousActiveElement) {
    var node = getNodeForOption('setReturnFocus', previousActiveElement);
    return node ? node : node === false ? false : previousActiveElement;
  }; // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.


  var checkPointerDown = function checkPointerDown(e) {
    var target = getActualTarget(e);

    if (findContainerIndex(target) >= 0) {
      // allow the click since it ocurred inside the trap
      return;
    }

    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      // immediately deactivate the trap
      trap.deactivate({
        // if, on deactivation, we should return focus to the node originally-focused
        //  when the trap was activated (or the configured `setReturnFocus` node),
        //  then assume it's also OK to return focus to the outside node that was
        //  just clicked, causing deactivation, as long as that node is focusable;
        //  if it isn't focusable, then return focus to the original node focused
        //  on activation (or the configured `setReturnFocus` node)
        // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
        //  which will result in the outside click setting focus to the node
        //  that was clicked, whether it's focusable or not; by setting
        //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
        //  on activation (or the configured `setReturnFocus` node)
        returnFocus: config.returnFocusOnDeactivate && !tabbable.isFocusable(target, config.tabbableOptions)
      });
      return;
    } // This is needed for mobile devices.
    // (If we'll only let `click` events through,
    // then on mobile they will be blocked anyways if `touchstart` is blocked.)


    if (valueOrHandler(config.allowOutsideClick, e)) {
      // allow the click outside the trap to take place
      return;
    } // otherwise, prevent the click


    e.preventDefault();
  }; // In case focus escapes the trap for some strange reason, pull it back in.


  var checkFocusIn = function checkFocusIn(e) {
    var target = getActualTarget(e);
    var targetContained = findContainerIndex(target) >= 0; // In Firefox when you Tab out of an iframe the Document is briefly focused.

    if (targetContained || target instanceof Document) {
      if (targetContained) {
        state.mostRecentlyFocusedNode = target;
      }
    } else {
      // escaped! pull it back in to where it just left
      e.stopImmediatePropagation();
      tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
    }
  }; // Hijack Tab events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.


  var checkTab = function checkTab(e) {
    var target = getActualTarget(e);
    updateTabbableNodes();
    var destinationNode = null;

    if (state.tabbableGroups.length > 0) {
      // make sure the target is actually contained in a group
      // NOTE: the target may also be the container itself if it's focusable
      //  with tabIndex='-1' and was given initial focus
      var containerIndex = findContainerIndex(target);
      var containerGroup = containerIndex >= 0 ? state.containerGroups[containerIndex] : undefined;

      if (containerIndex < 0) {
        // target not found in any group: quite possible focus has escaped the trap,
        //  so bring it back in to...
        if (e.shiftKey) {
          // ...the last node in the last group
          destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
        } else {
          // ...the first node in the first group
          destinationNode = state.tabbableGroups[0].firstTabbableNode;
        }
      } else if (e.shiftKey) {
        // REVERSE
        // is the target the first tabbable node in a group?
        var startOfGroupIndex = findIndex(state.tabbableGroups, function (_ref2) {
          var firstTabbableNode = _ref2.firstTabbableNode;
          return target === firstTabbableNode;
        });

        if (startOfGroupIndex < 0 && (containerGroup.container === target || tabbable.isFocusable(target, config.tabbableOptions) && !tabbable.isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target, false))) {
          // an exception case where the target is either the container itself, or
          //  a non-tabbable node that was given focus (i.e. tabindex is negative
          //  and user clicked on it or node was programmatically given focus)
          //  and is not followed by any other tabbable node, in which
          //  case, we should handle shift+tab as if focus were on the container's
          //  first tabbable node, and go to the last tabbable node of the LAST group
          startOfGroupIndex = containerIndex;
        }

        if (startOfGroupIndex >= 0) {
          // YES: then shift+tab should go to the last tabbable node in the
          //  previous group (and wrap around to the last tabbable node of
          //  the LAST group if it's the first tabbable node of the FIRST group)
          var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
          var destinationGroup = state.tabbableGroups[destinationGroupIndex];
          destinationNode = destinationGroup.lastTabbableNode;
        }
      } else {
        // FORWARD
        // is the target the last tabbable node in a group?
        var lastOfGroupIndex = findIndex(state.tabbableGroups, function (_ref3) {
          var lastTabbableNode = _ref3.lastTabbableNode;
          return target === lastTabbableNode;
        });

        if (lastOfGroupIndex < 0 && (containerGroup.container === target || tabbable.isFocusable(target, config.tabbableOptions) && !tabbable.isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target))) {
          // an exception case where the target is the container itself, or
          //  a non-tabbable node that was given focus (i.e. tabindex is negative
          //  and user clicked on it or node was programmatically given focus)
          //  and is not followed by any other tabbable node, in which
          //  case, we should handle tab as if focus were on the container's
          //  last tabbable node, and go to the first tabbable node of the FIRST group
          lastOfGroupIndex = containerIndex;
        }

        if (lastOfGroupIndex >= 0) {
          // YES: then tab should go to the first tabbable node in the next
          //  group (and wrap around to the first tabbable node of the FIRST
          //  group if it's the last tabbable node of the LAST group)
          var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;

          var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
          destinationNode = _destinationGroup.firstTabbableNode;
        }
      }
    } else {
      // NOTE: the fallbackFocus option does not support returning false to opt-out
      destinationNode = getNodeForOption('fallbackFocus');
    }

    if (destinationNode) {
      e.preventDefault();
      tryFocus(destinationNode);
    } // else, let the browser take care of [shift+]tab and move the focus

  };

  var checkKey = function checkKey(e) {
    if (isEscapeEvent(e) && valueOrHandler(config.escapeDeactivates, e) !== false) {
      e.preventDefault();
      trap.deactivate();
      return;
    }

    if (isTabEvent(e)) {
      checkTab(e);
      return;
    }
  };

  var checkClick = function checkClick(e) {
    var target = getActualTarget(e);

    if (findContainerIndex(target) >= 0) {
      return;
    }

    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      return;
    }

    if (valueOrHandler(config.allowOutsideClick, e)) {
      return;
    }

    e.preventDefault();
    e.stopImmediatePropagation();
  }; //
  // EVENT LISTENERS
  //


  var addListeners = function addListeners() {
    if (!state.active) {
      return;
    } // There can be only one listening focus trap at a time


    activeFocusTraps.activateTrap(trap); // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.

    state.delayInitialFocusTimer = config.delayInitialFocus ? delay(function () {
      tryFocus(getInitialFocusNode());
    }) : tryFocus(getInitialFocusNode());
    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('touchstart', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('click', checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener('keydown', checkKey, {
      capture: true,
      passive: false
    });
    return trap;
  };

  var removeListeners = function removeListeners() {
    if (!state.active) {
      return;
    }

    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);
    return trap;
  }; //
  // TRAP DEFINITION
  //


  trap = {
    get active() {
      return state.active;
    },

    get paused() {
      return state.paused;
    },

    activate: function activate(activateOptions) {
      if (state.active) {
        return this;
      }

      var onActivate = getOption(activateOptions, 'onActivate');
      var onPostActivate = getOption(activateOptions, 'onPostActivate');
      var checkCanFocusTrap = getOption(activateOptions, 'checkCanFocusTrap');

      if (!checkCanFocusTrap) {
        updateTabbableNodes();
      }

      state.active = true;
      state.paused = false;
      state.nodeFocusedBeforeActivation = doc.activeElement;

      if (onActivate) {
        onActivate();
      }

      var finishActivation = function finishActivation() {
        if (checkCanFocusTrap) {
          updateTabbableNodes();
        }

        addListeners();

        if (onPostActivate) {
          onPostActivate();
        }
      };

      if (checkCanFocusTrap) {
        checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
        return this;
      }

      finishActivation();
      return this;
    },
    deactivate: function deactivate(deactivateOptions) {
      if (!state.active) {
        return this;
      }

      var options = _objectSpread2({
        onDeactivate: config.onDeactivate,
        onPostDeactivate: config.onPostDeactivate,
        checkCanReturnFocus: config.checkCanReturnFocus
      }, deactivateOptions);

      clearTimeout(state.delayInitialFocusTimer); // noop if undefined

      state.delayInitialFocusTimer = undefined;
      removeListeners();
      state.active = false;
      state.paused = false;
      activeFocusTraps.deactivateTrap(trap);
      var onDeactivate = getOption(options, 'onDeactivate');
      var onPostDeactivate = getOption(options, 'onPostDeactivate');
      var checkCanReturnFocus = getOption(options, 'checkCanReturnFocus');
      var returnFocus = getOption(options, 'returnFocus', 'returnFocusOnDeactivate');

      if (onDeactivate) {
        onDeactivate();
      }

      var finishDeactivation = function finishDeactivation() {
        delay(function () {
          if (returnFocus) {
            tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
          }

          if (onPostDeactivate) {
            onPostDeactivate();
          }
        });
      };

      if (returnFocus && checkCanReturnFocus) {
        checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
        return this;
      }

      finishDeactivation();
      return this;
    },
    pause: function pause() {
      if (state.paused || !state.active) {
        return this;
      }

      state.paused = true;
      removeListeners();
      return this;
    },
    unpause: function unpause() {
      if (!state.paused || !state.active) {
        return this;
      }

      state.paused = false;
      updateTabbableNodes();
      addListeners();
      return this;
    },
    updateContainerElements: function updateContainerElements(containerElements) {
      var elementsAsArray = [].concat(containerElements).filter(Boolean);
      state.containers = elementsAsArray.map(function (element) {
        return typeof element === 'string' ? doc.querySelector(element) : element;
      });

      if (state.active) {
        updateTabbableNodes();
      }

      return this;
    }
  }; // initialize container elements

  trap.updateContainerElements(elements);
  return trap;
};

exports.createFocusTrap = createFocusTrap;


},{"tabbable":5}],3:[function(require,module,exports){
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  /**
   * Applies the :focus-visible polyfill at the given scope.
   * A scope in this case is either the top-level Document or a Shadow Root.
   *
   * @param {(Document|ShadowRoot)} scope
   * @see https://github.com/WICG/focus-visible
   */
  function applyFocusVisiblePolyfill(scope) {
    var hadKeyboardEvent = true;
    var hadFocusVisibleRecently = false;
    var hadFocusVisibleRecentlyTimeout = null;

    var inputTypesAllowlist = {
      text: true,
      search: true,
      url: true,
      tel: true,
      email: true,
      password: true,
      number: true,
      date: true,
      month: true,
      week: true,
      time: true,
      datetime: true,
      'datetime-local': true
    };

    /**
     * Helper function for legacy browsers and iframes which sometimes focus
     * elements like document, body, and non-interactive SVG.
     * @param {Element} el
     */
    function isValidFocusTarget(el) {
      if (
        el &&
        el !== document &&
        el.nodeName !== 'HTML' &&
        el.nodeName !== 'BODY' &&
        'classList' in el &&
        'contains' in el.classList
      ) {
        return true;
      }
      return false;
    }

    /**
     * Computes whether the given element should automatically trigger the
     * `focus-visible` class being added, i.e. whether it should always match
     * `:focus-visible` when focused.
     * @param {Element} el
     * @return {boolean}
     */
    function focusTriggersKeyboardModality(el) {
      var type = el.type;
      var tagName = el.tagName;

      if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
        return true;
      }

      if (tagName === 'TEXTAREA' && !el.readOnly) {
        return true;
      }

      if (el.isContentEditable) {
        return true;
      }

      return false;
    }

    /**
     * Add the `focus-visible` class to the given element if it was not added by
     * the author.
     * @param {Element} el
     */
    function addFocusVisibleClass(el) {
      if (el.classList.contains('focus-visible')) {
        return;
      }
      el.classList.add('focus-visible');
      el.setAttribute('data-focus-visible-added', '');
    }

    /**
     * Remove the `focus-visible` class from the given element if it was not
     * originally added by the author.
     * @param {Element} el
     */
    function removeFocusVisibleClass(el) {
      if (!el.hasAttribute('data-focus-visible-added')) {
        return;
      }
      el.classList.remove('focus-visible');
      el.removeAttribute('data-focus-visible-added');
    }

    /**
     * If the most recent user interaction was via the keyboard;
     * and the key press did not include a meta, alt/option, or control key;
     * then the modality is keyboard. Otherwise, the modality is not keyboard.
     * Apply `focus-visible` to any current active element and keep track
     * of our keyboard modality state with `hadKeyboardEvent`.
     * @param {KeyboardEvent} e
     */
    function onKeyDown(e) {
      if (e.metaKey || e.altKey || e.ctrlKey) {
        return;
      }

      if (isValidFocusTarget(scope.activeElement)) {
        addFocusVisibleClass(scope.activeElement);
      }

      hadKeyboardEvent = true;
    }

    /**
     * If at any point a user clicks with a pointing device, ensure that we change
     * the modality away from keyboard.
     * This avoids the situation where a user presses a key on an already focused
     * element, and then clicks on a different element, focusing it with a
     * pointing device, while we still think we're in keyboard modality.
     * @param {Event} e
     */
    function onPointerDown(e) {
      hadKeyboardEvent = false;
    }

    /**
     * On `focus`, add the `focus-visible` class to the target if:
     * - the target received focus as a result of keyboard navigation, or
     * - the event target is an element that will likely require interaction
     *   via the keyboard (e.g. a text box)
     * @param {Event} e
     */
    function onFocus(e) {
      // Prevent IE from focusing the document or HTML element.
      if (!isValidFocusTarget(e.target)) {
        return;
      }

      if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
        addFocusVisibleClass(e.target);
      }
    }

    /**
     * On `blur`, remove the `focus-visible` class from the target.
     * @param {Event} e
     */
    function onBlur(e) {
      if (!isValidFocusTarget(e.target)) {
        return;
      }

      if (
        e.target.classList.contains('focus-visible') ||
        e.target.hasAttribute('data-focus-visible-added')
      ) {
        // To detect a tab/window switch, we look for a blur event followed
        // rapidly by a visibility change.
        // If we don't see a visibility change within 100ms, it's probably a
        // regular focus change.
        hadFocusVisibleRecently = true;
        window.clearTimeout(hadFocusVisibleRecentlyTimeout);
        hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
          hadFocusVisibleRecently = false;
        }, 100);
        removeFocusVisibleClass(e.target);
      }
    }

    /**
     * If the user changes tabs, keep track of whether or not the previously
     * focused element had .focus-visible.
     * @param {Event} e
     */
    function onVisibilityChange(e) {
      if (document.visibilityState === 'hidden') {
        // If the tab becomes active again, the browser will handle calling focus
        // on the element (Safari actually calls it twice).
        // If this tab change caused a blur on an element with focus-visible,
        // re-apply the class when the user switches back to the tab.
        if (hadFocusVisibleRecently) {
          hadKeyboardEvent = true;
        }
        addInitialPointerMoveListeners();
      }
    }

    /**
     * Add a group of listeners to detect usage of any pointing devices.
     * These listeners will be added when the polyfill first loads, and anytime
     * the window is blurred, so that they are active when the window regains
     * focus.
     */
    function addInitialPointerMoveListeners() {
      document.addEventListener('mousemove', onInitialPointerMove);
      document.addEventListener('mousedown', onInitialPointerMove);
      document.addEventListener('mouseup', onInitialPointerMove);
      document.addEventListener('pointermove', onInitialPointerMove);
      document.addEventListener('pointerdown', onInitialPointerMove);
      document.addEventListener('pointerup', onInitialPointerMove);
      document.addEventListener('touchmove', onInitialPointerMove);
      document.addEventListener('touchstart', onInitialPointerMove);
      document.addEventListener('touchend', onInitialPointerMove);
    }

    function removeInitialPointerMoveListeners() {
      document.removeEventListener('mousemove', onInitialPointerMove);
      document.removeEventListener('mousedown', onInitialPointerMove);
      document.removeEventListener('mouseup', onInitialPointerMove);
      document.removeEventListener('pointermove', onInitialPointerMove);
      document.removeEventListener('pointerdown', onInitialPointerMove);
      document.removeEventListener('pointerup', onInitialPointerMove);
      document.removeEventListener('touchmove', onInitialPointerMove);
      document.removeEventListener('touchstart', onInitialPointerMove);
      document.removeEventListener('touchend', onInitialPointerMove);
    }

    /**
     * When the polfyill first loads, assume the user is in keyboard modality.
     * If any event is received from a pointing device (e.g. mouse, pointer,
     * touch), turn off keyboard modality.
     * This accounts for situations where focus enters the page from the URL bar.
     * @param {Event} e
     */
    function onInitialPointerMove(e) {
      // Work around a Safari quirk that fires a mousemove on <html> whenever the
      // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
      if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
        return;
      }

      hadKeyboardEvent = false;
      removeInitialPointerMoveListeners();
    }

    // For some kinds of state, we are interested in changes at the global scope
    // only. For example, global pointer input, global key presses and global
    // visibility change should affect the state at every scope:
    document.addEventListener('keydown', onKeyDown, true);
    document.addEventListener('mousedown', onPointerDown, true);
    document.addEventListener('pointerdown', onPointerDown, true);
    document.addEventListener('touchstart', onPointerDown, true);
    document.addEventListener('visibilitychange', onVisibilityChange, true);

    addInitialPointerMoveListeners();

    // For focus and blur, we specifically care about state changes in the local
    // scope. This is because focus / blur events that originate from within a
    // shadow root are not re-dispatched from the host element if it was already
    // the active element in its own scope:
    scope.addEventListener('focus', onFocus, true);
    scope.addEventListener('blur', onBlur, true);

    // We detect that a node is a ShadowRoot by ensuring that it is a
    // DocumentFragment and also has a host property. This check covers native
    // implementation and polyfill implementation transparently. If we only cared
    // about the native implementation, we could just check if the scope was
    // an instance of a ShadowRoot.
    if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
      // Since a ShadowRoot is a special kind of DocumentFragment, it does not
      // have a root element to add a class to. So, we add this attribute to the
      // host element instead:
      scope.host.setAttribute('data-js-focus-visible', '');
    } else if (scope.nodeType === Node.DOCUMENT_NODE) {
      document.documentElement.classList.add('js-focus-visible');
      document.documentElement.setAttribute('data-js-focus-visible', '');
    }
  }

  // It is important to wrap all references to global window and document in
  // these checks to support server-side rendering use cases
  // @see https://github.com/WICG/focus-visible/issues/199
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    // Make the polyfill helper globally available. This can be used as a signal
    // to interested libraries that wish to coordinate with the polyfill for e.g.,
    // applying the polyfill to a shadow root:
    window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill;

    // Notify interested libraries of the polyfill's presence, in case the
    // polyfill was loaded lazily:
    var event;

    try {
      event = new CustomEvent('focus-visible-polyfill-ready');
    } catch (error) {
      // IE11 does not support using CustomEvent as a constructor directly:
      event = document.createEvent('CustomEvent');
      event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
    }

    window.dispatchEvent(event);
  }

  if (typeof document !== 'undefined') {
    // Apply the polyfill to the global document, so that no JavaScript
    // coordination is required to use the polyfill in the top-level document:
    applyFocusVisiblePolyfill(document);
  }

})));

},{}],4:[function(require,module,exports){
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["scrollLock"] = factory();
	else
		root["scrollLock"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/tools.js
var argumentAsArray = function argumentAsArray(argument) {
  return Array.isArray(argument) ? argument : [argument];
};
var isElement = function isElement(target) {
  return target instanceof Node;
};
var isElementList = function isElementList(nodeList) {
  return nodeList instanceof NodeList;
};
var eachNode = function eachNode(nodeList, callback) {
  if (nodeList && callback) {
    nodeList = isElementList(nodeList) ? nodeList : [nodeList];

    for (var i = 0; i < nodeList.length; i++) {
      if (callback(nodeList[i], i, nodeList.length) === true) {
        break;
      }
    }
  }
};
var throwError = function throwError(message) {
  return console.error("[scroll-lock] ".concat(message));
};
var arrayAsSelector = function arrayAsSelector(array) {
  if (Array.isArray(array)) {
    var selector = array.join(', ');
    return selector;
  }
};
var nodeListAsArray = function nodeListAsArray(nodeList) {
  var nodes = [];
  eachNode(nodeList, function (node) {
    return nodes.push(node);
  });
  return nodes;
};
var findParentBySelector = function findParentBySelector($el, selector) {
  var self = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var $root = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : document;

  if (self && nodeListAsArray($root.querySelectorAll(selector)).indexOf($el) !== -1) {
    return $el;
  }

  while (($el = $el.parentElement) && nodeListAsArray($root.querySelectorAll(selector)).indexOf($el) === -1) {
    ;
  }

  return $el;
};
var elementHasSelector = function elementHasSelector($el, selector) {
  var $root = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
  var has = nodeListAsArray($root.querySelectorAll(selector)).indexOf($el) !== -1;
  return has;
};
var elementHasOverflowHidden = function elementHasOverflowHidden($el) {
  if ($el) {
    var computedStyle = getComputedStyle($el);
    var overflowIsHidden = computedStyle.overflow === 'hidden';
    return overflowIsHidden;
  }
};
var elementScrollTopOnStart = function elementScrollTopOnStart($el) {
  if ($el) {
    if (elementHasOverflowHidden($el)) {
      return true;
    }

    var scrollTop = $el.scrollTop;
    return scrollTop <= 0;
  }
};
var elementScrollTopOnEnd = function elementScrollTopOnEnd($el) {
  if ($el) {
    if (elementHasOverflowHidden($el)) {
      return true;
    }

    var scrollTop = $el.scrollTop;
    var scrollHeight = $el.scrollHeight;
    var scrollTopWithHeight = scrollTop + $el.offsetHeight;
    return scrollTopWithHeight >= scrollHeight;
  }
};
var elementScrollLeftOnStart = function elementScrollLeftOnStart($el) {
  if ($el) {
    if (elementHasOverflowHidden($el)) {
      return true;
    }

    var scrollLeft = $el.scrollLeft;
    return scrollLeft <= 0;
  }
};
var elementScrollLeftOnEnd = function elementScrollLeftOnEnd($el) {
  if ($el) {
    if (elementHasOverflowHidden($el)) {
      return true;
    }

    var scrollLeft = $el.scrollLeft;
    var scrollWidth = $el.scrollWidth;
    var scrollLeftWithWidth = scrollLeft + $el.offsetWidth;
    return scrollLeftWithWidth >= scrollWidth;
  }
};
var elementIsScrollableField = function elementIsScrollableField($el) {
  var selector = 'textarea, [contenteditable="true"]';
  return elementHasSelector($el, selector);
};
var elementIsInputRange = function elementIsInputRange($el) {
  var selector = 'input[type="range"]';
  return elementHasSelector($el, selector);
};
// CONCATENATED MODULE: ./src/scroll-lock.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disablePageScroll", function() { return disablePageScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enablePageScroll", function() { return enablePageScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollState", function() { return getScrollState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearQueueScrollLocks", function() { return clearQueueScrollLocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTargetScrollBarWidth", function() { return scroll_lock_getTargetScrollBarWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentTargetScrollBarWidth", function() { return scroll_lock_getCurrentTargetScrollBarWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageScrollBarWidth", function() { return getPageScrollBarWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentPageScrollBarWidth", function() { return getCurrentPageScrollBarWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addScrollableTarget", function() { return scroll_lock_addScrollableTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeScrollableTarget", function() { return scroll_lock_removeScrollableTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addScrollableSelector", function() { return scroll_lock_addScrollableSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeScrollableSelector", function() { return scroll_lock_removeScrollableSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLockableTarget", function() { return scroll_lock_addLockableTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLockableSelector", function() { return scroll_lock_addLockableSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFillGapMethod", function() { return scroll_lock_setFillGapMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFillGapTarget", function() { return scroll_lock_addFillGapTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFillGapTarget", function() { return scroll_lock_removeFillGapTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFillGapSelector", function() { return scroll_lock_addFillGapSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFillGapSelector", function() { return scroll_lock_removeFillGapSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refillGaps", function() { return refillGaps; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var FILL_GAP_AVAILABLE_METHODS = ['padding', 'margin', 'width', 'max-width', 'none'];
var TOUCH_DIRECTION_DETECT_OFFSET = 3;
var state = {
  scroll: true,
  queue: 0,
  scrollableSelectors: ['[data-scroll-lock-scrollable]'],
  lockableSelectors: ['body', '[data-scroll-lock-lockable]'],
  fillGapSelectors: ['body', '[data-scroll-lock-fill-gap]', '[data-scroll-lock-lockable]'],
  fillGapMethod: FILL_GAP_AVAILABLE_METHODS[0],
  //
  startTouchY: 0,
  startTouchX: 0
};
var disablePageScroll = function disablePageScroll(target) {
  if (state.queue <= 0) {
    state.scroll = false;
    scroll_lock_hideLockableOverflow();
    fillGaps();
  }

  scroll_lock_addScrollableTarget(target);
  state.queue++;
};
var enablePageScroll = function enablePageScroll(target) {
  state.queue > 0 && state.queue--;

  if (state.queue <= 0) {
    state.scroll = true;
    scroll_lock_showLockableOverflow();
    unfillGaps();
  }

  scroll_lock_removeScrollableTarget(target);
};
var getScrollState = function getScrollState() {
  return state.scroll;
};
var clearQueueScrollLocks = function clearQueueScrollLocks() {
  state.queue = 0;
};
var scroll_lock_getTargetScrollBarWidth = function getTargetScrollBarWidth($target) {
  var onlyExists = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (isElement($target)) {
    var currentOverflowYProperty = $target.style.overflowY;

    if (onlyExists) {
      if (!getScrollState()) {
        $target.style.overflowY = $target.getAttribute('data-scroll-lock-saved-overflow-y-property');
      }
    } else {
      $target.style.overflowY = 'scroll';
    }

    var width = scroll_lock_getCurrentTargetScrollBarWidth($target);
    $target.style.overflowY = currentOverflowYProperty;
    return width;
  } else {
    return 0;
  }
};
var scroll_lock_getCurrentTargetScrollBarWidth = function getCurrentTargetScrollBarWidth($target) {
  if (isElement($target)) {
    if ($target === document.body) {
      var documentWidth = document.documentElement.clientWidth;
      var windowWidth = window.innerWidth;
      var currentWidth = windowWidth - documentWidth;
      return currentWidth;
    } else {
      var borderLeftWidthCurrentProperty = $target.style.borderLeftWidth;
      var borderRightWidthCurrentProperty = $target.style.borderRightWidth;
      $target.style.borderLeftWidth = '0px';
      $target.style.borderRightWidth = '0px';

      var _currentWidth = $target.offsetWidth - $target.clientWidth;

      $target.style.borderLeftWidth = borderLeftWidthCurrentProperty;
      $target.style.borderRightWidth = borderRightWidthCurrentProperty;
      return _currentWidth;
    }
  } else {
    return 0;
  }
};
var getPageScrollBarWidth = function getPageScrollBarWidth() {
  var onlyExists = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return scroll_lock_getTargetScrollBarWidth(document.body, onlyExists);
};
var getCurrentPageScrollBarWidth = function getCurrentPageScrollBarWidth() {
  return scroll_lock_getCurrentTargetScrollBarWidth(document.body);
};
var scroll_lock_addScrollableTarget = function addScrollableTarget(target) {
  if (target) {
    var targets = argumentAsArray(target);
    targets.map(function ($targets) {
      eachNode($targets, function ($target) {
        if (isElement($target)) {
          $target.setAttribute('data-scroll-lock-scrollable', '');
        } else {
          throwError("\"".concat($target, "\" is not a Element."));
        }
      });
    });
  }
};
var scroll_lock_removeScrollableTarget = function removeScrollableTarget(target) {
  if (target) {
    var targets = argumentAsArray(target);
    targets.map(function ($targets) {
      eachNode($targets, function ($target) {
        if (isElement($target)) {
          $target.removeAttribute('data-scroll-lock-scrollable');
        } else {
          throwError("\"".concat($target, "\" is not a Element."));
        }
      });
    });
  }
};
var scroll_lock_addScrollableSelector = function addScrollableSelector(selector) {
  if (selector) {
    var selectors = argumentAsArray(selector);
    selectors.map(function (selector) {
      state.scrollableSelectors.push(selector);
    });
  }
};
var scroll_lock_removeScrollableSelector = function removeScrollableSelector(selector) {
  if (selector) {
    var selectors = argumentAsArray(selector);
    selectors.map(function (selector) {
      state.scrollableSelectors = state.scrollableSelectors.filter(function (sSelector) {
        return sSelector !== selector;
      });
    });
  }
};
var scroll_lock_addLockableTarget = function addLockableTarget(target) {
  if (target) {
    var targets = argumentAsArray(target);
    targets.map(function ($targets) {
      eachNode($targets, function ($target) {
        if (isElement($target)) {
          $target.setAttribute('data-scroll-lock-lockable', '');
        } else {
          throwError("\"".concat($target, "\" is not a Element."));
        }
      });
    });

    if (!getScrollState()) {
      scroll_lock_hideLockableOverflow();
    }
  }
};
var scroll_lock_addLockableSelector = function addLockableSelector(selector) {
  if (selector) {
    var selectors = argumentAsArray(selector);
    selectors.map(function (selector) {
      state.lockableSelectors.push(selector);
    });

    if (!getScrollState()) {
      scroll_lock_hideLockableOverflow();
    }

    scroll_lock_addFillGapSelector(selector);
  }
};
var scroll_lock_setFillGapMethod = function setFillGapMethod(method) {
  if (method) {
    if (FILL_GAP_AVAILABLE_METHODS.indexOf(method) !== -1) {
      state.fillGapMethod = method;
      refillGaps();
    } else {
      var methods = FILL_GAP_AVAILABLE_METHODS.join(', ');
      throwError("\"".concat(method, "\" method is not available!\nAvailable fill gap methods: ").concat(methods, "."));
    }
  }
};
var scroll_lock_addFillGapTarget = function addFillGapTarget(target) {
  if (target) {
    var targets = argumentAsArray(target);
    targets.map(function ($targets) {
      eachNode($targets, function ($target) {
        if (isElement($target)) {
          $target.setAttribute('data-scroll-lock-fill-gap', '');

          if (!state.scroll) {
            scroll_lock_fillGapTarget($target);
          }
        } else {
          throwError("\"".concat($target, "\" is not a Element."));
        }
      });
    });
  }
};
var scroll_lock_removeFillGapTarget = function removeFillGapTarget(target) {
  if (target) {
    var targets = argumentAsArray(target);
    targets.map(function ($targets) {
      eachNode($targets, function ($target) {
        if (isElement($target)) {
          $target.removeAttribute('data-scroll-lock-fill-gap');

          if (!state.scroll) {
            scroll_lock_unfillGapTarget($target);
          }
        } else {
          throwError("\"".concat($target, "\" is not a Element."));
        }
      });
    });
  }
};
var scroll_lock_addFillGapSelector = function addFillGapSelector(selector) {
  if (selector) {
    var selectors = argumentAsArray(selector);
    selectors.map(function (selector) {
      if (state.fillGapSelectors.indexOf(selector) === -1) {
        state.fillGapSelectors.push(selector);

        if (!state.scroll) {
          scroll_lock_fillGapSelector(selector);
        }
      }
    });
  }
};
var scroll_lock_removeFillGapSelector = function removeFillGapSelector(selector) {
  if (selector) {
    var selectors = argumentAsArray(selector);
    selectors.map(function (selector) {
      state.fillGapSelectors = state.fillGapSelectors.filter(function (fSelector) {
        return fSelector !== selector;
      });

      if (!state.scroll) {
        scroll_lock_unfillGapSelector(selector);
      }
    });
  }
};
var refillGaps = function refillGaps() {
  if (!state.scroll) {
    fillGaps();
  }
};

var scroll_lock_hideLockableOverflow = function hideLockableOverflow() {
  var selector = arrayAsSelector(state.lockableSelectors);
  scroll_lock_hideLockableOverflowSelector(selector);
};

var scroll_lock_showLockableOverflow = function showLockableOverflow() {
  var selector = arrayAsSelector(state.lockableSelectors);
  scroll_lock_showLockableOverflowSelector(selector);
};

var scroll_lock_hideLockableOverflowSelector = function hideLockableOverflowSelector(selector) {
  var $targets = document.querySelectorAll(selector);
  eachNode($targets, function ($target) {
    scroll_lock_hideLockableOverflowTarget($target);
  });
};

var scroll_lock_showLockableOverflowSelector = function showLockableOverflowSelector(selector) {
  var $targets = document.querySelectorAll(selector);
  eachNode($targets, function ($target) {
    scroll_lock_showLockableOverflowTarget($target);
  });
};

var scroll_lock_hideLockableOverflowTarget = function hideLockableOverflowTarget($target) {
  if (isElement($target) && $target.getAttribute('data-scroll-lock-locked') !== 'true') {
    var computedStyle = window.getComputedStyle($target);
    $target.setAttribute('data-scroll-lock-saved-overflow-y-property', computedStyle.overflowY);
    $target.setAttribute('data-scroll-lock-saved-inline-overflow-property', $target.style.overflow);
    $target.setAttribute('data-scroll-lock-saved-inline-overflow-y-property', $target.style.overflowY);
    $target.style.overflow = 'hidden';
    $target.setAttribute('data-scroll-lock-locked', 'true');
  }
};

var scroll_lock_showLockableOverflowTarget = function showLockableOverflowTarget($target) {
  if (isElement($target) && $target.getAttribute('data-scroll-lock-locked') === 'true') {
    $target.style.overflow = $target.getAttribute('data-scroll-lock-saved-inline-overflow-property');
    $target.style.overflowY = $target.getAttribute('data-scroll-lock-saved-inline-overflow-y-property');
    $target.removeAttribute('data-scroll-lock-saved-overflow-property');
    $target.removeAttribute('data-scroll-lock-saved-inline-overflow-property');
    $target.removeAttribute('data-scroll-lock-saved-inline-overflow-y-property');
    $target.removeAttribute('data-scroll-lock-locked');
  }
};

var fillGaps = function fillGaps() {
  state.fillGapSelectors.map(function (selector) {
    scroll_lock_fillGapSelector(selector);
  });
};

var unfillGaps = function unfillGaps() {
  state.fillGapSelectors.map(function (selector) {
    scroll_lock_unfillGapSelector(selector);
  });
};

var scroll_lock_fillGapSelector = function fillGapSelector(selector) {
  var $targets = document.querySelectorAll(selector);
  var isLockable = state.lockableSelectors.indexOf(selector) !== -1;
  eachNode($targets, function ($target) {
    scroll_lock_fillGapTarget($target, isLockable);
  });
};

var scroll_lock_fillGapTarget = function fillGapTarget($target) {
  var isLockable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (isElement($target)) {
    var scrollBarWidth;

    if ($target.getAttribute('data-scroll-lock-lockable') === '' || isLockable) {
      scrollBarWidth = scroll_lock_getTargetScrollBarWidth($target, true);
    } else {
      var $lockableParent = findParentBySelector($target, arrayAsSelector(state.lockableSelectors));
      scrollBarWidth = scroll_lock_getTargetScrollBarWidth($lockableParent, true);
    }

    if ($target.getAttribute('data-scroll-lock-filled-gap') === 'true') {
      scroll_lock_unfillGapTarget($target);
    }

    var computedStyle = window.getComputedStyle($target);
    $target.setAttribute('data-scroll-lock-filled-gap', 'true');
    $target.setAttribute('data-scroll-lock-current-fill-gap-method', state.fillGapMethod);

    if (state.fillGapMethod === 'margin') {
      var currentMargin = parseFloat(computedStyle.marginRight);
      $target.style.marginRight = "".concat(currentMargin + scrollBarWidth, "px");
    } else if (state.fillGapMethod === 'width') {
      $target.style.width = "calc(100% - ".concat(scrollBarWidth, "px)");
    } else if (state.fillGapMethod === 'max-width') {
      $target.style.maxWidth = "calc(100% - ".concat(scrollBarWidth, "px)");
    } else if (state.fillGapMethod === 'padding') {
      var currentPadding = parseFloat(computedStyle.paddingRight);
      $target.style.paddingRight = "".concat(currentPadding + scrollBarWidth, "px");
    }
  }
};

var scroll_lock_unfillGapSelector = function unfillGapSelector(selector) {
  var $targets = document.querySelectorAll(selector);
  eachNode($targets, function ($target) {
    scroll_lock_unfillGapTarget($target);
  });
};

var scroll_lock_unfillGapTarget = function unfillGapTarget($target) {
  if (isElement($target)) {
    if ($target.getAttribute('data-scroll-lock-filled-gap') === 'true') {
      var currentFillGapMethod = $target.getAttribute('data-scroll-lock-current-fill-gap-method');
      $target.removeAttribute('data-scroll-lock-filled-gap');
      $target.removeAttribute('data-scroll-lock-current-fill-gap-method');

      if (currentFillGapMethod === 'margin') {
        $target.style.marginRight = "";
      } else if (currentFillGapMethod === 'width') {
        $target.style.width = "";
      } else if (currentFillGapMethod === 'max-width') {
        $target.style.maxWidth = "";
      } else if (currentFillGapMethod === 'padding') {
        $target.style.paddingRight = "";
      }
    }
  }
};

var onResize = function onResize(e) {
  refillGaps();
};

var onTouchStart = function onTouchStart(e) {
  if (!state.scroll) {
    state.startTouchY = e.touches[0].clientY;
    state.startTouchX = e.touches[0].clientX;
  }
};

var scroll_lock_onTouchMove = function onTouchMove(e) {
  if (!state.scroll) {
    var startTouchY = state.startTouchY,
        startTouchX = state.startTouchX;
    var currentClientY = e.touches[0].clientY;
    var currentClientX = e.touches[0].clientX;

    if (e.touches.length < 2) {
      var selector = arrayAsSelector(state.scrollableSelectors);
      var direction = {
        up: startTouchY < currentClientY,
        down: startTouchY > currentClientY,
        left: startTouchX < currentClientX,
        right: startTouchX > currentClientX
      };
      var directionWithOffset = {
        up: startTouchY + TOUCH_DIRECTION_DETECT_OFFSET < currentClientY,
        down: startTouchY - TOUCH_DIRECTION_DETECT_OFFSET > currentClientY,
        left: startTouchX + TOUCH_DIRECTION_DETECT_OFFSET < currentClientX,
        right: startTouchX - TOUCH_DIRECTION_DETECT_OFFSET > currentClientX
      };

      var handle = function handle($el) {
        var skip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if ($el) {
          var parentScrollableEl = findParentBySelector($el, selector, false);

          if (elementIsInputRange($el)) {
            return false;
          }

          if (skip || elementIsScrollableField($el) && findParentBySelector($el, selector) || elementHasSelector($el, selector)) {
            var prevent = false;

            if (elementScrollLeftOnStart($el) && elementScrollLeftOnEnd($el)) {
              if (direction.up && elementScrollTopOnStart($el) || direction.down && elementScrollTopOnEnd($el)) {
                prevent = true;
              }
            } else if (elementScrollTopOnStart($el) && elementScrollTopOnEnd($el)) {
              if (direction.left && elementScrollLeftOnStart($el) || direction.right && elementScrollLeftOnEnd($el)) {
                prevent = true;
              }
            } else if (directionWithOffset.up && elementScrollTopOnStart($el) || directionWithOffset.down && elementScrollTopOnEnd($el) || directionWithOffset.left && elementScrollLeftOnStart($el) || directionWithOffset.right && elementScrollLeftOnEnd($el)) {
              prevent = true;
            }

            if (prevent) {
              if (parentScrollableEl) {
                handle(parentScrollableEl, true);
              } else {
                if (e.cancelable) {
                  e.preventDefault();
                }
              }
            }
          } else {
            handle(parentScrollableEl);
          }
        } else {
          if (e.cancelable) {
            e.preventDefault();
          }
        }
      };

      handle(e.target);
    }
  }
};

var onTouchEnd = function onTouchEnd(e) {
  if (!state.scroll) {
    state.startTouchY = 0;
    state.startTouchX = 0;
  }
};

if (typeof window !== 'undefined') {
  window.addEventListener('resize', onResize);
}

if (typeof document !== 'undefined') {
  document.addEventListener('touchstart', onTouchStart);
  document.addEventListener('touchmove', scroll_lock_onTouchMove, {
    passive: false
  });
  document.addEventListener('touchend', onTouchEnd);
}

var deprecatedMethods = {
  hide: function hide(target) {
    throwError('"hide" is deprecated! Use "disablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget');
    disablePageScroll(target);
  },
  show: function show(target) {
    throwError('"show" is deprecated! Use "enablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget');
    enablePageScroll(target);
  },
  toggle: function toggle(target) {
    throwError('"toggle" is deprecated! Do not use it.');

    if (getScrollState()) {
      disablePageScroll();
    } else {
      enablePageScroll(target);
    }
  },
  getState: function getState() {
    throwError('"getState" is deprecated! Use "getScrollState" instead. \n https://github.com/FL3NKEY/scroll-lock#getscrollstate');
    return getScrollState();
  },
  getWidth: function getWidth() {
    throwError('"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth');
    return getPageScrollBarWidth();
  },
  getCurrentWidth: function getCurrentWidth() {
    throwError('"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth');
    return getCurrentPageScrollBarWidth();
  },
  setScrollableTargets: function setScrollableTargets(target) {
    throwError('"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget');
    scroll_lock_addScrollableTarget(target);
  },
  setFillGapSelectors: function setFillGapSelectors(selector) {
    throwError('"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector');
    scroll_lock_addFillGapSelector(selector);
  },
  setFillGapTargets: function setFillGapTargets(target) {
    throwError('"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget');
    scroll_lock_addFillGapTarget(target);
  },
  clearQueue: function clearQueue() {
    throwError('"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. \n https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks');
    clearQueueScrollLocks();
  }
};

var scrollLock = _objectSpread({
  disablePageScroll: disablePageScroll,
  enablePageScroll: enablePageScroll,
  getScrollState: getScrollState,
  clearQueueScrollLocks: clearQueueScrollLocks,
  getTargetScrollBarWidth: scroll_lock_getTargetScrollBarWidth,
  getCurrentTargetScrollBarWidth: scroll_lock_getCurrentTargetScrollBarWidth,
  getPageScrollBarWidth: getPageScrollBarWidth,
  getCurrentPageScrollBarWidth: getCurrentPageScrollBarWidth,
  addScrollableSelector: scroll_lock_addScrollableSelector,
  removeScrollableSelector: scroll_lock_removeScrollableSelector,
  addScrollableTarget: scroll_lock_addScrollableTarget,
  removeScrollableTarget: scroll_lock_removeScrollableTarget,
  addLockableSelector: scroll_lock_addLockableSelector,
  addLockableTarget: scroll_lock_addLockableTarget,
  addFillGapSelector: scroll_lock_addFillGapSelector,
  removeFillGapSelector: scroll_lock_removeFillGapSelector,
  addFillGapTarget: scroll_lock_addFillGapTarget,
  removeFillGapTarget: scroll_lock_removeFillGapTarget,
  setFillGapMethod: scroll_lock_setFillGapMethod,
  refillGaps: refillGaps,
  _state: state
}, deprecatedMethods);

/* harmony default export */ var scroll_lock = __webpack_exports__["default"] = (scrollLock);

/***/ })
/******/ ])["default"];
});
},{}],5:[function(require,module,exports){
/*!
* tabbable 5.3.3
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]:not(slot)', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])', 'details>summary:first-of-type', 'details'];
var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
var NoElement = typeof Element === 'undefined';
var matches = NoElement ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function (element) {
  return element.getRootNode();
} : function (element) {
  return element.ownerDocument;
};
/**
 * @param {Element} el container to check in
 * @param {boolean} includeContainer add container to check
 * @param {(node: Element) => boolean} filter filter candidates
 * @returns {Element[]}
 */

var getCandidates = function getCandidates(el, includeContainer, filter) {
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));

  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }

  candidates = candidates.filter(filter);
  return candidates;
};
/**
 * @callback GetShadowRoot
 * @param {Element} element to check for shadow root
 * @returns {ShadowRoot|boolean} ShadowRoot if available or boolean indicating if a shadowRoot is attached but not available.
 */

/**
 * @callback ShadowRootFilter
 * @param {Element} shadowHostNode the element which contains shadow content
 * @returns {boolean} true if a shadow root could potentially contain valid candidates.
 */

/**
 * @typedef {Object} CandidatesScope
 * @property {Element} scope contains inner candidates
 * @property {Element[]} candidates
 */

/**
 * @typedef {Object} IterativeOptions
 * @property {GetShadowRoot|boolean} getShadowRoot true if shadow support is enabled; falsy if not;
 *  if a function, implies shadow support is enabled and either returns the shadow root of an element
 *  or a boolean stating if it has an undisclosed shadow root
 * @property {(node: Element) => boolean} filter filter candidates
 * @property {boolean} flatten if true then result will flatten any CandidatesScope into the returned list
 * @property {ShadowRootFilter} shadowRootFilter filter shadow roots;
 */

/**
 * @param {Element[]} elements list of element containers to match candidates from
 * @param {boolean} includeContainer add container list to check
 * @param {IterativeOptions} options
 * @returns {Array.<Element|CandidatesScope>}
 */


var getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);

  while (elementsToCheck.length) {
    var element = elementsToCheck.shift();

    if (element.tagName === 'SLOT') {
      // add shadow dom slot scope (slot itself cannot be focusable)
      var assigned = element.assignedElements();
      var content = assigned.length ? assigned : element.children;
      var nestedCandidates = getCandidatesIteratively(content, true, options);

      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scope: element,
          candidates: nestedCandidates
        });
      }
    } else {
      // check candidate element
      var validCandidate = matches.call(element, candidateSelector);

      if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
        candidates.push(element);
      } // iterate over shadow content if possible


      var shadowRoot = element.shadowRoot || // check for an undisclosed shadow
      typeof options.getShadowRoot === 'function' && options.getShadowRoot(element);
      var validShadowRoot = !options.shadowRootFilter || options.shadowRootFilter(element);

      if (shadowRoot && validShadowRoot) {
        // add shadow dom scope IIF a shadow root node was given; otherwise, an undisclosed
        //  shadow exists, so look at light dom children as fallback BUT create a scope for any
        //  child candidates found because they're likely slotted elements (elements that are
        //  children of the web component element (which has the shadow), in the light dom, but
        //  slotted somewhere _inside_ the undisclosed shadow) -- the scope is created below,
        //  _after_ we return from this recursive call
        var _nestedCandidates = getCandidatesIteratively(shadowRoot === true ? element.children : shadowRoot.children, true, options);

        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scope: element,
            candidates: _nestedCandidates
          });
        }
      } else {
        // there's not shadow so just dig into the element's (light dom) children
        //  __without__ giving the element special scope treatment
        elementsToCheck.unshift.apply(elementsToCheck, element.children);
      }
    }
  }

  return candidates;
};

var getTabindex = function getTabindex(node, isScope) {
  if (node.tabIndex < 0) {
    // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
    // `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
    // yet they are still part of the regular tab order; in FF, they get a default
    // `tabIndex` of 0; since Chrome still puts those elements in the regular tab
    // order, consider their tab index to be 0.
    // Also browsers do not return `tabIndex` correctly for contentEditable nodes;
    // so if they don't have a tabindex attribute specifically set, assume it's 0.
    //
    // isScope is positive for custom element with shadow root or slot that by default
    // have tabIndex -1, but need to be sorted by document order in order for their
    // content to be inserted in the correct position
    if ((isScope || /^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || node.isContentEditable) && isNaN(parseInt(node.getAttribute('tabindex'), 10))) {
      return 0;
    }
  }

  return node.tabIndex;
};

var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};

var isInput = function isInput(node) {
  return node.tagName === 'INPUT';
};

var isHiddenInput = function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
};

var isDetailsWithSummary = function isDetailsWithSummary(node) {
  var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
    return child.tagName === 'SUMMARY';
  });
  return r;
};

var getCheckedRadio = function getCheckedRadio(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};

var isTabbableRadio = function isTabbableRadio(node) {
  if (!node.name) {
    return true;
  }

  var radioScope = node.form || getRootNode(node);

  var queryRadios = function queryRadios(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };

  var radioSet;

  if (typeof window !== 'undefined' && typeof window.CSS !== 'undefined' && typeof window.CSS.escape === 'function') {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s', err.message);
      return false;
    }
  }

  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};

var isRadio = function isRadio(node) {
  return isInput(node) && node.type === 'radio';
};

var isNonTabbableRadio = function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
};

var isZeroArea = function isZeroArea(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(),
      width = _node$getBoundingClie.width,
      height = _node$getBoundingClie.height;

  return width === 0 && height === 0;
};

var isHidden = function isHidden(node, _ref) {
  var displayCheck = _ref.displayCheck,
      getShadowRoot = _ref.getShadowRoot;

  // NOTE: visibility will be `undefined` if node is detached from the document
  //  (see notes about this further down), which means we will consider it visible
  //  (this is legacy behavior from a very long way back)
  // NOTE: we check this regardless of `displayCheck="none"` because this is a
  //  _visibility_ check, not a _display_ check
  if (getComputedStyle(node).visibility === 'hidden') {
    return true;
  }

  var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;

  if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
    return true;
  } // The root node is the shadow root if the node is in a shadow DOM; some document otherwise
  //  (but NOT _the_ document; see second 'If' comment below for more).
  // If rootNode is shadow root, it'll have a host, which is the element to which the shadow
  //  is attached, and the one we need to check if it's in the document or not (because the
  //  shadow, and all nodes it contains, is never considered in the document since shadows
  //  behave like self-contained DOMs; but if the shadow's HOST, which is part of the document,
  //  is hidden, or is not in the document itself but is detached, it will affect the shadow's
  //  visibility, including all the nodes it contains). The host could be any normal node,
  //  or a custom element (i.e. web component). Either way, that's the one that is considered
  //  part of the document, not the shadow root, nor any of its children (i.e. the node being
  //  tested).
  // If rootNode is not a shadow root, it won't have a host, and so rootNode should be the
  //  document (per the docs) and while it's a Document-type object, that document does not
  //  appear to be the same as the node's `ownerDocument` for some reason, so it's safer
  //  to ignore the rootNode at this point, and use `node.ownerDocument`. Otherwise,
  //  using `rootNode.contains(node)` will _always_ be true we'll get false-positives when
  //  node is actually detached.


  var nodeRootHost = getRootNode(node).host;
  var nodeIsAttached = (nodeRootHost === null || nodeRootHost === void 0 ? void 0 : nodeRootHost.ownerDocument.contains(nodeRootHost)) || node.ownerDocument.contains(node);

  if (!displayCheck || displayCheck === 'full') {
    if (typeof getShadowRoot === 'function') {
      // figure out if we should consider the node to be in an undisclosed shadow and use the
      //  'non-zero-area' fallback
      var originalNode = node;

      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode(node);

        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true // check if there's an undisclosed shadow
        ) {
          // node has an undisclosed shadow which means we can only treat it as a black box, so we
          //  fall back to a non-zero-area test
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          // iterate up slot
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          // cross shadow boundary
          node = rootNode.host;
        } else {
          // iterate up normal dom
          node = parentElement;
        }
      }

      node = originalNode;
    } // else, `getShadowRoot` might be true, but all that does is enable shadow DOM support
    //  (i.e. it does not also presume that all nodes might have undisclosed shadows); or
    //  it might be a falsy value, which means shadow DOM support is disabled
    // Since we didn't find it sitting in an undisclosed shadow (or shadows are disabled)
    //  now we can just test to see if it would normally be visible or not, provided it's
    //  attached to the main document.
    // NOTE: We must consider case where node is inside a shadow DOM and given directly to
    //  `isTabbable()` or `isFocusable()` -- regardless of `getShadowRoot` option setting.


    if (nodeIsAttached) {
      // this works wherever the node is: if there's at least one client rect, it's
      //  somehow displayed; it also covers the CSS 'display: contents' case where the
      //  node itself is hidden in place of its contents; and there's no need to search
      //  up the hierarchy either
      return !node.getClientRects().length;
    } // Else, the node isn't attached to the document, which means the `getClientRects()`
    //  API will __always__ return zero rects (this can happen, for example, if React
    //  is used to render nodes onto a detached tree, as confirmed in this thread:
    //  https://github.com/facebook/react/issues/9117#issuecomment-284228870)
    //
    // It also means that even window.getComputedStyle(node).display will return `undefined`
    //  because styles are only computed for nodes that are in the document.
    //
    // NOTE: THIS HAS BEEN THE CASE FOR YEARS. It is not new, nor is it caused by tabbable
    //  somehow. Though it was never stated officially, anyone who has ever used tabbable
    //  APIs on nodes in detached containers has actually implicitly used tabbable in what
    //  was later (as of v5.2.0 on Apr 9, 2021) called `displayCheck="none"` mode -- essentially
    //  considering __everything__ to be visible because of the innability to determine styles.

  } else if (displayCheck === 'non-zero-area') {
    // NOTE: Even though this tests that the node's client rect is non-zero to determine
    //  whether it's displayed, and that a detached node will __always__ have a zero-area
    //  client rect, we don't special-case for whether the node is attached or not. In
    //  this mode, we do want to consider nodes that have a zero area to be hidden at all
    //  times, and that includes attached or not.
    return isZeroArea(node);
  } // visible, as far as we can tell, or per current `displayCheck` mode


  return false;
}; // form fields (nested) inside a disabled fieldset are not focusable/tabbable
//  unless they are in the _first_ <legend> element of the top-most disabled
//  fieldset


var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement; // check if `node` is contained in a disabled <fieldset>

    while (parentNode) {
      if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
        // look for the first <legend> among the children of the disabled <fieldset>
        for (var i = 0; i < parentNode.children.length; i++) {
          var child = parentNode.children.item(i); // when the first <legend> (in document order) is found

          if (child.tagName === 'LEGEND') {
            // if its parent <fieldset> is not nested in another disabled <fieldset>,
            // return whether `node` is a descendant of its first <legend>
            return matches.call(parentNode, 'fieldset[disabled] *') ? true : !child.contains(node);
          }
        } // the disabled <fieldset> containing `node` has no <legend>


        return true;
      }

      parentNode = parentNode.parentElement;
    }
  } // else, node's tabbable/focusable state should not be affected by a fieldset's
  //  enabled/disabled state


  return false;
};

var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
  if (node.disabled || isHiddenInput(node) || isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }

  return true;
};

var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
  if (isNonTabbableRadio(node) || getTabindex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }

  return true;
};

var isValidShadowRootTabbable = function isValidShadowRootTabbable(shadowHostNode) {
  var tabIndex = parseInt(shadowHostNode.getAttribute('tabindex'), 10);

  if (isNaN(tabIndex) || tabIndex >= 0) {
    return true;
  } // If a custom element has an explicit negative tabindex,
  // browsers will not allow tab targeting said element's children.


  return false;
};
/**
 * @param {Array.<Element|CandidatesScope>} candidates
 * @returns Element[]
 */


var sortByOrder = function sortByOrder(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function (item, i) {
    var isScope = !!item.scope;
    var element = isScope ? item.scope : item;
    var candidateTabindex = getTabindex(element, isScope);
    var elements = isScope ? sortByOrder(item.candidates) : element;

    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        item: item,
        isScope: isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function (acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};

var tabbable = function tabbable(el, options) {
  options = options || {};
  var candidates;

  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([el], options.includeContainer, {
      filter: isNodeMatchingSelectorTabbable.bind(null, options),
      flatten: false,
      getShadowRoot: options.getShadowRoot,
      shadowRootFilter: isValidShadowRootTabbable
    });
  } else {
    candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  }

  return sortByOrder(candidates);
};

var focusable = function focusable(el, options) {
  options = options || {};
  var candidates;

  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([el], options.includeContainer, {
      filter: isNodeMatchingSelectorFocusable.bind(null, options),
      flatten: true,
      getShadowRoot: options.getShadowRoot
    });
  } else {
    candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
  }

  return candidates;
};

var isTabbable = function isTabbable(node, options) {
  options = options || {};

  if (!node) {
    throw new Error('No node provided');
  }

  if (matches.call(node, candidateSelector) === false) {
    return false;
  }

  return isNodeMatchingSelectorTabbable(options, node);
};

var focusableCandidateSelector = /* #__PURE__ */candidateSelectors.concat('iframe').join(',');

var isFocusable = function isFocusable(node, options) {
  options = options || {};

  if (!node) {
    throw new Error('No node provided');
  }

  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }

  return isNodeMatchingSelectorFocusable(options, node);
};

exports.focusable = focusable;
exports.isFocusable = isFocusable;
exports.isTabbable = isTabbable;
exports.tabbable = tabbable;


},{}],6:[function(require,module,exports){
"use strict";

var _scrollLock = require("scroll-lock");
var siteBody = document.querySelector('.site-body');
var preloader = document.querySelector('.preloader');
(0, _scrollLock.disablePageScroll)(preloader);
(0, _scrollLock.addFillGapTarget)(preloader);
window.addEventListener('load', function () {
  window.setTimeout(function () {
    siteBody.classList.add('ui-preloader-hidden');
    siteBody.classList.add('ui-scroll-visible');
    (0, _scrollLock.enablePageScroll)(preloader);
  }, 1500);
  window.setTimeout(function () {
    siteBody.classList.add('ui-site-loaded');
    siteBody.classList.remove('ui-preloader-hidden');
  }, 2000);
});

},{"scroll-lock":4}],7:[function(require,module,exports){
"use strict";

var _choices = _interopRequireDefault(require("choices.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var choosingCategory = document.querySelector('.choosing-category');
if (choosingCategory) {
  var select = choosingCategory.querySelector('.choosing-category__select');
  var choices = new _choices["default"](select, {
    allowHTML: false,
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
    classNames: {
      flippedState: 'is-flip'
    }
  });
}

},{"choices.js":1}],8:[function(require,module,exports){
"use strict";

var _choices2 = _interopRequireDefault(require("choices.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// |=============== INITIALIZATION OF A CUSTOM SELECT ON THE FIRST LINE ===============>
var choosingRegionFirst = document.querySelector('.site-header__choosing-region_line_first');
if (choosingRegionFirst) {
  var select = choosingRegionFirst.querySelector('.choosing-region__select');
  var choices = new _choices2["default"](select, {
    allowHTML: false,
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: ''
  });
}

// |=============== INITIALIZATION OF A CUSTOM SELECT ON THE SECOND LINE ===============>
var choosingRegionSecond = document.querySelector('.site-header__choosing-region_line_second');
if (choosingRegionSecond) {
  var _select = choosingRegionSecond.querySelector('.choosing-region__select');
  var _choices = new _choices2["default"](_select, {
    allowHTML: false,
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: ''
  });
}

},{"choices.js":1}],9:[function(require,module,exports){
"use strict";

var _scrollLock = require("scroll-lock");
var _focusTrap = require("focus-trap");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var buttonOpenNavigationMenu = document.querySelector('.burger');
var buttonCloseNavigationMenu = document.querySelector('.close-navigation-menu');
var navigationMenu = document.querySelector('.site-header__navigation-menu');
var primaryNavigationLinks = document.querySelectorAll('.primary-navigation__link');
var additionalNavigationLinks = document.querySelectorAll('.additional-navigation__link');
var focusTrap = (0, _focusTrap.createFocusTrap)(navigationMenu, {
  onActivate: function onActivate() {
    return navigationMenu.classList.add('ui-focus-trap-active');
  },
  onDeactivate: function onDeactivate() {
    return navigationMenu.classList.remove('ui-focus-trap-active');
  },
  checkCanFocusTrap: function checkCanFocusTrap(trapContainers) {
    var results = trapContainers.map(function (trapContainer) {
      return new Promise(function (resolve) {
        var interval = setInterval(function () {
          if (getComputedStyle(trapContainer).visibility !== 'hidden') {
            resolve();
            clearInterval(interval);
          }
        }, 5);
      });
    });
    return Promise.all(results);
  }
});
function activationNavigationMenu(element, elementClass) {
  element.classList.add("".concat(elementClass));
  focusTrap.activate();
  (0, _scrollLock.disablePageScroll)(element);
}
function deactivationNavigationMenu(element, elementClass) {
  element.classList.remove("".concat(elementClass));
  focusTrap.deactivate();
  (0, _scrollLock.enablePageScroll)(element);
}
buttonOpenNavigationMenu.addEventListener('click', function () {
  activationNavigationMenu(navigationMenu, 'ui-navigation-menu-active');
});
buttonCloseNavigationMenu.addEventListener('click', function () {
  deactivationNavigationMenu(navigationMenu, 'ui-navigation-menu-active');
});
if (primaryNavigationLinks) {
  _toConsumableArray(primaryNavigationLinks).forEach(function (primaryLink) {
    primaryLink.addEventListener('click', function () {
      deactivationNavigationMenu(navigationMenu, 'ui-navigation-menu-active');
    });
  });
}
if (additionalNavigationLinks) {
  _toConsumableArray(additionalNavigationLinks).forEach(function (additionalLink) {
    additionalLink.addEventListener('click', function () {
      deactivationNavigationMenu(navigationMenu, 'ui-navigation-menu-active');
    });
  });
}
function heightNavigationMenu() {
  navigationMenu.style.setProperty('--height-navigation-menu', "".concat(window.innerHeight, "px"));
}
heightNavigationMenu();
window.addEventListener('resize', heightNavigationMenu);

},{"focus-trap":2,"scroll-lock":4}],10:[function(require,module,exports){
"use strict";

require("focus-visible");
require("../components/home/_custom-select-choosing-region");
require("../components/home/_custom-select-choosing-category");
require("../components/home/_navigation-menu");
require("../components/global/_preloader");

},{"../components/global/_preloader":6,"../components/home/_custom-select-choosing-category":7,"../components/home/_custom-select-choosing-region":8,"../components/home/_navigation-menu":9,"focus-visible":3}]},{},[10]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzcmMvanMvcGFnZXMvc3VwcGxpZXJzLXNjcmlwdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vKiEgY2hvaWNlcy5qcyB2MTAuMi4wIHwgwqkgMjAyMiBKb3NoIEpvaG5zb24gfCBodHRwczovL2dpdGh1Yi5jb20vanNoam9obnNvbi9DaG9pY2VzI3JlYWRtZSAqL1xuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQ2hvaWNlc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJDaG9pY2VzXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24oKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0XCJ1c2Ugc3RyaWN0XCI7XG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKHtcblxuLyoqKi8gMjgyOlxuLyoqKi8gKGZ1bmN0aW9uKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsICh7XG4gIHZhbHVlOiB0cnVlXG59KSk7XG5leHBvcnRzLmNsZWFyQ2hvaWNlcyA9IGV4cG9ydHMuYWN0aXZhdGVDaG9pY2VzID0gZXhwb3J0cy5maWx0ZXJDaG9pY2VzID0gZXhwb3J0cy5hZGRDaG9pY2UgPSB2b2lkIDA7XG52YXIgY29uc3RhbnRzXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDg4Myk7XG52YXIgYWRkQ2hvaWNlID0gZnVuY3Rpb24gKF9hKSB7XG4gIHZhciB2YWx1ZSA9IF9hLnZhbHVlLFxuICAgIGxhYmVsID0gX2EubGFiZWwsXG4gICAgaWQgPSBfYS5pZCxcbiAgICBncm91cElkID0gX2EuZ3JvdXBJZCxcbiAgICBkaXNhYmxlZCA9IF9hLmRpc2FibGVkLFxuICAgIGVsZW1lbnRJZCA9IF9hLmVsZW1lbnRJZCxcbiAgICBjdXN0b21Qcm9wZXJ0aWVzID0gX2EuY3VzdG9tUHJvcGVydGllcyxcbiAgICBwbGFjZWhvbGRlciA9IF9hLnBsYWNlaG9sZGVyLFxuICAgIGtleUNvZGUgPSBfYS5rZXlDb2RlO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGNvbnN0YW50c18xLkFDVElPTl9UWVBFUy5BRERfQ0hPSUNFLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBsYWJlbDogbGFiZWwsXG4gICAgaWQ6IGlkLFxuICAgIGdyb3VwSWQ6IGdyb3VwSWQsXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgIGVsZW1lbnRJZDogZWxlbWVudElkLFxuICAgIGN1c3RvbVByb3BlcnRpZXM6IGN1c3RvbVByb3BlcnRpZXMsXG4gICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgIGtleUNvZGU6IGtleUNvZGVcbiAgfTtcbn07XG5leHBvcnRzLmFkZENob2ljZSA9IGFkZENob2ljZTtcbnZhciBmaWx0ZXJDaG9pY2VzID0gZnVuY3Rpb24gKHJlc3VsdHMpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBjb25zdGFudHNfMS5BQ1RJT05fVFlQRVMuRklMVEVSX0NIT0lDRVMsXG4gICAgcmVzdWx0czogcmVzdWx0c1xuICB9O1xufTtcbmV4cG9ydHMuZmlsdGVyQ2hvaWNlcyA9IGZpbHRlckNob2ljZXM7XG52YXIgYWN0aXZhdGVDaG9pY2VzID0gZnVuY3Rpb24gKGFjdGl2ZSkge1xuICBpZiAoYWN0aXZlID09PSB2b2lkIDApIHtcbiAgICBhY3RpdmUgPSB0cnVlO1xuICB9XG4gIHJldHVybiB7XG4gICAgdHlwZTogY29uc3RhbnRzXzEuQUNUSU9OX1RZUEVTLkFDVElWQVRFX0NIT0lDRVMsXG4gICAgYWN0aXZlOiBhY3RpdmVcbiAgfTtcbn07XG5leHBvcnRzLmFjdGl2YXRlQ2hvaWNlcyA9IGFjdGl2YXRlQ2hvaWNlcztcbnZhciBjbGVhckNob2ljZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogY29uc3RhbnRzXzEuQUNUSU9OX1RZUEVTLkNMRUFSX0NIT0lDRVNcbiAgfTtcbn07XG5leHBvcnRzLmNsZWFyQ2hvaWNlcyA9IGNsZWFyQ2hvaWNlcztcblxuLyoqKi8gfSksXG5cbi8qKiovIDc4Mzpcbi8qKiovIChmdW5jdGlvbihfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCAoe1xuICB2YWx1ZTogdHJ1ZVxufSkpO1xuZXhwb3J0cy5hZGRHcm91cCA9IHZvaWQgMDtcbnZhciBjb25zdGFudHNfMSA9IF9fd2VicGFja19yZXF1aXJlX18oODgzKTtcbnZhciBhZGRHcm91cCA9IGZ1bmN0aW9uIChfYSkge1xuICB2YXIgdmFsdWUgPSBfYS52YWx1ZSxcbiAgICBpZCA9IF9hLmlkLFxuICAgIGFjdGl2ZSA9IF9hLmFjdGl2ZSxcbiAgICBkaXNhYmxlZCA9IF9hLmRpc2FibGVkO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGNvbnN0YW50c18xLkFDVElPTl9UWVBFUy5BRERfR1JPVVAsXG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIGlkOiBpZCxcbiAgICBhY3RpdmU6IGFjdGl2ZSxcbiAgICBkaXNhYmxlZDogZGlzYWJsZWRcbiAgfTtcbn07XG5leHBvcnRzLmFkZEdyb3VwID0gYWRkR3JvdXA7XG5cbi8qKiovIH0pLFxuXG4vKioqLyA0NjQ6XG4vKioqLyAoZnVuY3Rpb24oX191bnVzZWRfd2VicGFja19tb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgKHtcbiAgdmFsdWU6IHRydWVcbn0pKTtcbmV4cG9ydHMuaGlnaGxpZ2h0SXRlbSA9IGV4cG9ydHMucmVtb3ZlSXRlbSA9IGV4cG9ydHMuYWRkSXRlbSA9IHZvaWQgMDtcbnZhciBjb25zdGFudHNfMSA9IF9fd2VicGFja19yZXF1aXJlX18oODgzKTtcbnZhciBhZGRJdGVtID0gZnVuY3Rpb24gKF9hKSB7XG4gIHZhciB2YWx1ZSA9IF9hLnZhbHVlLFxuICAgIGxhYmVsID0gX2EubGFiZWwsXG4gICAgaWQgPSBfYS5pZCxcbiAgICBjaG9pY2VJZCA9IF9hLmNob2ljZUlkLFxuICAgIGdyb3VwSWQgPSBfYS5ncm91cElkLFxuICAgIGN1c3RvbVByb3BlcnRpZXMgPSBfYS5jdXN0b21Qcm9wZXJ0aWVzLFxuICAgIHBsYWNlaG9sZGVyID0gX2EucGxhY2Vob2xkZXIsXG4gICAga2V5Q29kZSA9IF9hLmtleUNvZGU7XG4gIHJldHVybiB7XG4gICAgdHlwZTogY29uc3RhbnRzXzEuQUNUSU9OX1RZUEVTLkFERF9JVEVNLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBsYWJlbDogbGFiZWwsXG4gICAgaWQ6IGlkLFxuICAgIGNob2ljZUlkOiBjaG9pY2VJZCxcbiAgICBncm91cElkOiBncm91cElkLFxuICAgIGN1c3RvbVByb3BlcnRpZXM6IGN1c3RvbVByb3BlcnRpZXMsXG4gICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgIGtleUNvZGU6IGtleUNvZGVcbiAgfTtcbn07XG5leHBvcnRzLmFkZEl0ZW0gPSBhZGRJdGVtO1xudmFyIHJlbW92ZUl0ZW0gPSBmdW5jdGlvbiAoaWQsIGNob2ljZUlkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogY29uc3RhbnRzXzEuQUNUSU9OX1RZUEVTLlJFTU9WRV9JVEVNLFxuICAgIGlkOiBpZCxcbiAgICBjaG9pY2VJZDogY2hvaWNlSWRcbiAgfTtcbn07XG5leHBvcnRzLnJlbW92ZUl0ZW0gPSByZW1vdmVJdGVtO1xudmFyIGhpZ2hsaWdodEl0ZW0gPSBmdW5jdGlvbiAoaWQsIGhpZ2hsaWdodGVkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogY29uc3RhbnRzXzEuQUNUSU9OX1RZUEVTLkhJR0hMSUdIVF9JVEVNLFxuICAgIGlkOiBpZCxcbiAgICBoaWdobGlnaHRlZDogaGlnaGxpZ2h0ZWRcbiAgfTtcbn07XG5leHBvcnRzLmhpZ2hsaWdodEl0ZW0gPSBoaWdobGlnaHRJdGVtO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gMTM3OlxuLyoqKi8gKGZ1bmN0aW9uKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsICh7XG4gIHZhbHVlOiB0cnVlXG59KSk7XG5leHBvcnRzLnNldElzTG9hZGluZyA9IGV4cG9ydHMucmVzZXRUbyA9IGV4cG9ydHMuY2xlYXJBbGwgPSB2b2lkIDA7XG52YXIgY29uc3RhbnRzXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDg4Myk7XG52YXIgY2xlYXJBbGwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogY29uc3RhbnRzXzEuQUNUSU9OX1RZUEVTLkNMRUFSX0FMTFxuICB9O1xufTtcbmV4cG9ydHMuY2xlYXJBbGwgPSBjbGVhckFsbDtcbnZhciByZXNldFRvID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogY29uc3RhbnRzXzEuQUNUSU9OX1RZUEVTLlJFU0VUX1RPLFxuICAgIHN0YXRlOiBzdGF0ZVxuICB9O1xufTtcbmV4cG9ydHMucmVzZXRUbyA9IHJlc2V0VG87XG52YXIgc2V0SXNMb2FkaW5nID0gZnVuY3Rpb24gKGlzTG9hZGluZykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGNvbnN0YW50c18xLkFDVElPTl9UWVBFUy5TRVRfSVNfTE9BRElORyxcbiAgICBpc0xvYWRpbmc6IGlzTG9hZGluZ1xuICB9O1xufTtcbmV4cG9ydHMuc2V0SXNMb2FkaW5nID0gc2V0SXNMb2FkaW5nO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gMzczOlxuLyoqKi8gKGZ1bmN0aW9uKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblxuXG52YXIgX19zcHJlYWRBcnJheSA9IHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5IHx8IGZ1bmN0aW9uICh0bywgZnJvbSwgcGFjaykge1xuICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xuICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcbiAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XG4gICAgICBhcltpXSA9IGZyb21baV07XG4gICAgfVxuICB9XG4gIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSB0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0IHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgcmV0dXJuIG1vZCAmJiBtb2QuX19lc01vZHVsZSA/IG1vZCA6IHtcbiAgICBcImRlZmF1bHRcIjogbW9kXG4gIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCAoe1xuICB2YWx1ZTogdHJ1ZVxufSkpO1xudmFyIGRlZXBtZXJnZV8xID0gX19pbXBvcnREZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oOTk2KSk7XG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG52YXIgZnVzZV9qc18xID0gX19pbXBvcnREZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oMjIxKSk7XG52YXIgY2hvaWNlc18xID0gX193ZWJwYWNrX3JlcXVpcmVfXygyODIpO1xudmFyIGdyb3Vwc18xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3ODMpO1xudmFyIGl0ZW1zXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ2NCk7XG52YXIgbWlzY18xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMzcpO1xudmFyIGNvbXBvbmVudHNfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNTIwKTtcbnZhciBjb25zdGFudHNfMSA9IF9fd2VicGFja19yZXF1aXJlX18oODgzKTtcbnZhciBkZWZhdWx0c18xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3ODkpO1xudmFyIHV0aWxzXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc5OSk7XG52YXIgcmVkdWNlcnNfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNjU1KTtcbnZhciBzdG9yZV8xID0gX19pbXBvcnREZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oNzQ0KSk7XG52YXIgdGVtcGxhdGVzXzEgPSBfX2ltcG9ydERlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXyg2ODYpKTtcbi8qKiBAc2VlIHtAbGluayBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1hY2VhMDc1ZDBhYzY5NTRmMjc1YTcwMDIzOTA2MDUwY30gKi9cbnZhciBJU19JRTExID0gJy1tcy1zY3JvbGwtbGltaXQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiAnLW1zLWltZS1hbGlnbicgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xudmFyIFVTRVJfREVGQVVMVFMgPSB7fTtcbi8qKlxuICogQ2hvaWNlc1xuICogQGF1dGhvciBKb3NoIEpvaG5zb248am9zaEBqb3NodWFqb2huc29uLmNvLnVrPlxuICovXG52YXIgQ2hvaWNlcyA9IC8qKiBAY2xhc3MgKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENob2ljZXMoZWxlbWVudCwgdXNlckNvbmZpZykge1xuICAgIGlmIChlbGVtZW50ID09PSB2b2lkIDApIHtcbiAgICAgIGVsZW1lbnQgPSAnW2RhdGEtY2hvaWNlXSc7XG4gICAgfVxuICAgIGlmICh1c2VyQ29uZmlnID09PSB2b2lkIDApIHtcbiAgICAgIHVzZXJDb25maWcgPSB7fTtcbiAgICB9XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBpZiAodXNlckNvbmZpZy5hbGxvd0hUTUwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc29sZS53YXJuKCdEZXByZWNhdGlvbiB3YXJuaW5nOiBhbGxvd0hUTUwgd2lsbCBkZWZhdWx0IHRvIGZhbHNlIGluIGEgZnV0dXJlIHJlbGVhc2UuIFRvIHJlbmRlciBIVE1MIGluIENob2ljZXMsIHlvdSB3aWxsIG5lZWQgdG8gc2V0IGl0IHRvIHRydWUuIFNldHRpbmcgYWxsb3dIVE1MIHdpbGwgc3VwcHJlc3MgdGhpcyBtZXNzYWdlLicpO1xuICAgIH1cbiAgICB0aGlzLmNvbmZpZyA9IGRlZXBtZXJnZV8xLmRlZmF1bHQuYWxsKFtkZWZhdWx0c18xLkRFRkFVTFRfQ09ORklHLCBDaG9pY2VzLmRlZmF1bHRzLm9wdGlvbnMsIHVzZXJDb25maWddLFxuICAgIC8vIFdoZW4gbWVyZ2luZyBhcnJheSBjb25maWdzLCByZXBsYWNlIHdpdGggYSBjb3B5IG9mIHRoZSB1c2VyQ29uZmlnIGFycmF5LFxuICAgIC8vIGluc3RlYWQgb2YgY29uY2F0ZW5hdGluZyB3aXRoIHRoZSBkZWZhdWx0IGFycmF5XG4gICAge1xuICAgICAgYXJyYXlNZXJnZTogZnVuY3Rpb24gKF8sIHNvdXJjZUFycmF5KSB7XG4gICAgICAgIHJldHVybiBfX3NwcmVhZEFycmF5KFtdLCBzb3VyY2VBcnJheSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdmFyIGludmFsaWRDb25maWdPcHRpb25zID0gKDAsIHV0aWxzXzEuZGlmZikodGhpcy5jb25maWcsIGRlZmF1bHRzXzEuREVGQVVMVF9DT05GSUcpO1xuICAgIGlmIChpbnZhbGlkQ29uZmlnT3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgIGNvbnNvbGUud2FybignVW5rbm93biBjb25maWcgb3B0aW9uKHMpIHBhc3NlZCcsIGludmFsaWRDb25maWdPcHRpb25zLmpvaW4oJywgJykpO1xuICAgIH1cbiAgICB2YXIgcGFzc2VkRWxlbWVudCA9IHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCkgOiBlbGVtZW50O1xuICAgIGlmICghKHBhc3NlZEVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50IHx8IHBhc3NlZEVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignRXhwZWN0ZWQgb25lIG9mIHRoZSBmb2xsb3dpbmcgdHlwZXMgdGV4dHxzZWxlY3Qtb25lfHNlbGVjdC1tdWx0aXBsZScpO1xuICAgIH1cbiAgICB0aGlzLl9pc1RleHRFbGVtZW50ID0gcGFzc2VkRWxlbWVudC50eXBlID09PSBjb25zdGFudHNfMS5URVhUX1RZUEU7XG4gICAgdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50ID0gcGFzc2VkRWxlbWVudC50eXBlID09PSBjb25zdGFudHNfMS5TRUxFQ1RfT05FX1RZUEU7XG4gICAgdGhpcy5faXNTZWxlY3RNdWx0aXBsZUVsZW1lbnQgPSBwYXNzZWRFbGVtZW50LnR5cGUgPT09IGNvbnN0YW50c18xLlNFTEVDVF9NVUxUSVBMRV9UWVBFO1xuICAgIHRoaXMuX2lzU2VsZWN0RWxlbWVudCA9IHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCB8fCB0aGlzLl9pc1NlbGVjdE11bHRpcGxlRWxlbWVudDtcbiAgICB0aGlzLmNvbmZpZy5zZWFyY2hFbmFibGVkID0gdGhpcy5faXNTZWxlY3RNdWx0aXBsZUVsZW1lbnQgfHwgdGhpcy5jb25maWcuc2VhcmNoRW5hYmxlZDtcbiAgICBpZiAoIVsnYXV0bycsICdhbHdheXMnXS5pbmNsdWRlcyhcIlwiLmNvbmNhdCh0aGlzLmNvbmZpZy5yZW5kZXJTZWxlY3RlZENob2ljZXMpKSkge1xuICAgICAgdGhpcy5jb25maWcucmVuZGVyU2VsZWN0ZWRDaG9pY2VzID0gJ2F1dG8nO1xuICAgIH1cbiAgICBpZiAodXNlckNvbmZpZy5hZGRJdGVtRmlsdGVyICYmIHR5cGVvZiB1c2VyQ29uZmlnLmFkZEl0ZW1GaWx0ZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciByZSA9IHVzZXJDb25maWcuYWRkSXRlbUZpbHRlciBpbnN0YW5jZW9mIFJlZ0V4cCA/IHVzZXJDb25maWcuYWRkSXRlbUZpbHRlciA6IG5ldyBSZWdFeHAodXNlckNvbmZpZy5hZGRJdGVtRmlsdGVyKTtcbiAgICAgIHRoaXMuY29uZmlnLmFkZEl0ZW1GaWx0ZXIgPSByZS50ZXN0LmJpbmQocmUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5faXNUZXh0RWxlbWVudCkge1xuICAgICAgdGhpcy5wYXNzZWRFbGVtZW50ID0gbmV3IGNvbXBvbmVudHNfMS5XcmFwcGVkSW5wdXQoe1xuICAgICAgICBlbGVtZW50OiBwYXNzZWRFbGVtZW50LFxuICAgICAgICBjbGFzc05hbWVzOiB0aGlzLmNvbmZpZy5jbGFzc05hbWVzLFxuICAgICAgICBkZWxpbWl0ZXI6IHRoaXMuY29uZmlnLmRlbGltaXRlclxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGFzc2VkRWxlbWVudCA9IG5ldyBjb21wb25lbnRzXzEuV3JhcHBlZFNlbGVjdCh7XG4gICAgICAgIGVsZW1lbnQ6IHBhc3NlZEVsZW1lbnQsXG4gICAgICAgIGNsYXNzTmFtZXM6IHRoaXMuY29uZmlnLmNsYXNzTmFtZXMsXG4gICAgICAgIHRlbXBsYXRlOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5fdGVtcGxhdGVzLm9wdGlvbihkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuaW5pdGlhbGlzZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9zdG9yZSA9IG5ldyBzdG9yZV8xLmRlZmF1bHQoKTtcbiAgICB0aGlzLl9pbml0aWFsU3RhdGUgPSByZWR1Y2Vyc18xLmRlZmF1bHRTdGF0ZTtcbiAgICB0aGlzLl9jdXJyZW50U3RhdGUgPSByZWR1Y2Vyc18xLmRlZmF1bHRTdGF0ZTtcbiAgICB0aGlzLl9wcmV2U3RhdGUgPSByZWR1Y2Vyc18xLmRlZmF1bHRTdGF0ZTtcbiAgICB0aGlzLl9jdXJyZW50VmFsdWUgPSAnJztcbiAgICB0aGlzLl9jYW5TZWFyY2ggPSAhIXRoaXMuY29uZmlnLnNlYXJjaEVuYWJsZWQ7XG4gICAgdGhpcy5faXNTY3JvbGxpbmdPbkllID0gZmFsc2U7XG4gICAgdGhpcy5faGlnaGxpZ2h0UG9zaXRpb24gPSAwO1xuICAgIHRoaXMuX3dhc1RhcCA9IHRydWU7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXJWYWx1ZSA9IHRoaXMuX2dlbmVyYXRlUGxhY2Vob2xkZXJWYWx1ZSgpO1xuICAgIHRoaXMuX2Jhc2VJZCA9ICgwLCB1dGlsc18xLmdlbmVyYXRlSWQpKHRoaXMucGFzc2VkRWxlbWVudC5lbGVtZW50LCAnY2hvaWNlcy0nKTtcbiAgICAvKipcbiAgICAgKiBzZXR0aW5nIGRpcmVjdGlvbiBpbiBjYXNlcyB3aGVyZSBpdCdzIGV4cGxpY2l0bHkgc2V0IG9uIHBhc3NlZEVsZW1lbnRcbiAgICAgKiBvciB3aGVuIGNhbGN1bGF0ZWQgZGlyZWN0aW9uIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBkb2N1bWVudFxuICAgICAqL1xuICAgIHRoaXMuX2RpcmVjdGlvbiA9IHRoaXMucGFzc2VkRWxlbWVudC5kaXI7XG4gICAgaWYgKCF0aGlzLl9kaXJlY3Rpb24pIHtcbiAgICAgIHZhciBlbGVtZW50RGlyZWN0aW9uID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5wYXNzZWRFbGVtZW50LmVsZW1lbnQpLmRpcmVjdGlvbjtcbiAgICAgIHZhciBkb2N1bWVudERpcmVjdGlvbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZGlyZWN0aW9uO1xuICAgICAgaWYgKGVsZW1lbnREaXJlY3Rpb24gIT09IGRvY3VtZW50RGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbiA9IGVsZW1lbnREaXJlY3Rpb247XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lkTmFtZXMgPSB7XG4gICAgICBpdGVtQ2hvaWNlOiAnaXRlbS1jaG9pY2UnXG4gICAgfTtcbiAgICBpZiAodGhpcy5faXNTZWxlY3RFbGVtZW50KSB7XG4gICAgICAvLyBBc3NpZ24gcHJlc2V0IGdyb3VwcyBmcm9tIHBhc3NlZCBlbGVtZW50XG4gICAgICB0aGlzLl9wcmVzZXRHcm91cHMgPSB0aGlzLnBhc3NlZEVsZW1lbnQub3B0aW9uR3JvdXBzO1xuICAgICAgLy8gQXNzaWduIHByZXNldCBvcHRpb25zIGZyb20gcGFzc2VkIGVsZW1lbnRcbiAgICAgIHRoaXMuX3ByZXNldE9wdGlvbnMgPSB0aGlzLnBhc3NlZEVsZW1lbnQub3B0aW9ucztcbiAgICB9XG4gICAgLy8gQXNzaWduIHByZXNldCBjaG9pY2VzIGZyb20gcGFzc2VkIG9iamVjdFxuICAgIHRoaXMuX3ByZXNldENob2ljZXMgPSB0aGlzLmNvbmZpZy5jaG9pY2VzO1xuICAgIC8vIEFzc2lnbiBwcmVzZXQgaXRlbXMgZnJvbSBwYXNzZWQgb2JqZWN0IGZpcnN0XG4gICAgdGhpcy5fcHJlc2V0SXRlbXMgPSB0aGlzLmNvbmZpZy5pdGVtcztcbiAgICAvLyBBZGQgYW55IHZhbHVlcyBwYXNzZWQgZnJvbSBhdHRyaWJ1dGVcbiAgICBpZiAodGhpcy5wYXNzZWRFbGVtZW50LnZhbHVlICYmIHRoaXMuX2lzVGV4dEVsZW1lbnQpIHtcbiAgICAgIHZhciBzcGxpdFZhbHVlcyA9IHRoaXMucGFzc2VkRWxlbWVudC52YWx1ZS5zcGxpdCh0aGlzLmNvbmZpZy5kZWxpbWl0ZXIpO1xuICAgICAgdGhpcy5fcHJlc2V0SXRlbXMgPSB0aGlzLl9wcmVzZXRJdGVtcy5jb25jYXQoc3BsaXRWYWx1ZXMpO1xuICAgIH1cbiAgICAvLyBDcmVhdGUgYXJyYXkgb2YgY2hvaWNlcyBmcm9tIG9wdGlvbiBlbGVtZW50c1xuICAgIGlmICh0aGlzLnBhc3NlZEVsZW1lbnQub3B0aW9ucykge1xuICAgICAgdGhpcy5wYXNzZWRFbGVtZW50Lm9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgIF90aGlzLl9wcmVzZXRDaG9pY2VzLnB1c2goe1xuICAgICAgICAgIHZhbHVlOiBvcHRpb24udmFsdWUsXG4gICAgICAgICAgbGFiZWw6IG9wdGlvbi5pbm5lckhUTUwsXG4gICAgICAgICAgc2VsZWN0ZWQ6ICEhb3B0aW9uLnNlbGVjdGVkLFxuICAgICAgICAgIGRpc2FibGVkOiBvcHRpb24uZGlzYWJsZWQgfHwgb3B0aW9uLnBhcmVudE5vZGUuZGlzYWJsZWQsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IG9wdGlvbi52YWx1ZSA9PT0gJycgfHwgb3B0aW9uLmhhc0F0dHJpYnV0ZSgncGxhY2Vob2xkZXInKSxcbiAgICAgICAgICBjdXN0b21Qcm9wZXJ0aWVzOiAoMCwgdXRpbHNfMS5wYXJzZUN1c3RvbVByb3BlcnRpZXMpKG9wdGlvbi5kYXRhc2V0LmN1c3RvbVByb3BlcnRpZXMpXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlciA9IHRoaXMuX3JlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uRm9jdXMgPSB0aGlzLl9vbkZvY3VzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25CbHVyID0gdGhpcy5fb25CbHVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25LZXlVcCA9IHRoaXMuX29uS2V5VXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbktleURvd24gPSB0aGlzLl9vbktleURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkNsaWNrID0gdGhpcy5fb25DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uVG91Y2hNb3ZlID0gdGhpcy5fb25Ub3VjaE1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vblRvdWNoRW5kID0gdGhpcy5fb25Ub3VjaEVuZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uTW91c2VEb3duID0gdGhpcy5fb25Nb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbk1vdXNlT3ZlciA9IHRoaXMuX29uTW91c2VPdmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25Gb3JtUmVzZXQgPSB0aGlzLl9vbkZvcm1SZXNldC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uU2VsZWN0S2V5ID0gdGhpcy5fb25TZWxlY3RLZXkuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkVudGVyS2V5ID0gdGhpcy5fb25FbnRlcktleS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uRXNjYXBlS2V5ID0gdGhpcy5fb25Fc2NhcGVLZXkuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkRpcmVjdGlvbktleSA9IHRoaXMuX29uRGlyZWN0aW9uS2V5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25EZWxldGVLZXkgPSB0aGlzLl9vbkRlbGV0ZUtleS5iaW5kKHRoaXMpO1xuICAgIC8vIElmIGVsZW1lbnQgaGFzIGFscmVhZHkgYmVlbiBpbml0aWFsaXNlZCB3aXRoIENob2ljZXMsIGZhaWwgc2lsZW50bHlcbiAgICBpZiAodGhpcy5wYXNzZWRFbGVtZW50LmlzQWN0aXZlKSB7XG4gICAgICBpZiAoIXRoaXMuY29uZmlnLnNpbGVudCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1RyeWluZyB0byBpbml0aWFsaXNlIENob2ljZXMgb24gZWxlbWVudCBhbHJlYWR5IGluaXRpYWxpc2VkJywge1xuICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gTGV0J3MgZ29cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2hvaWNlcywgXCJkZWZhdWx0c1wiLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHtcbiAgICAgICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgICAgcmV0dXJuIFVTRVJfREVGQVVMVFM7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCB0ZW1wbGF0ZXMoKSB7XG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlc18xLmRlZmF1bHQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICBDaG9pY2VzLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmluaXRpYWxpc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2NyZWF0ZVRlbXBsYXRlcygpO1xuICAgIHRoaXMuX2NyZWF0ZUVsZW1lbnRzKCk7XG4gICAgdGhpcy5fY3JlYXRlU3RydWN0dXJlKCk7XG4gICAgdGhpcy5fc3RvcmUuc3Vic2NyaWJlKHRoaXMuX3JlbmRlcik7XG4gICAgdGhpcy5fcmVuZGVyKCk7XG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB2YXIgc2hvdWxkRGlzYWJsZSA9ICF0aGlzLmNvbmZpZy5hZGRJdGVtcyB8fCB0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgaWYgKHNob3VsZERpc2FibGUpIHtcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgIH1cbiAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgICB2YXIgY2FsbGJhY2tPbkluaXQgPSB0aGlzLmNvbmZpZy5jYWxsYmFja09uSW5pdDtcbiAgICAvLyBSdW4gY2FsbGJhY2sgaWYgaXQgaXMgYSBmdW5jdGlvblxuICAgIGlmIChjYWxsYmFja09uSW5pdCAmJiB0eXBlb2YgY2FsbGJhY2tPbkluaXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrT25Jbml0LmNhbGwodGhpcyk7XG4gICAgfVxuICB9O1xuICBDaG9pY2VzLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5pbml0aWFsaXNlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9yZW1vdmVFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMucGFzc2VkRWxlbWVudC5yZXZlYWwoKTtcbiAgICB0aGlzLmNvbnRhaW5lck91dGVyLnVud3JhcCh0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudCk7XG4gICAgdGhpcy5jbGVhclN0b3JlKCk7XG4gICAgaWYgKHRoaXMuX2lzU2VsZWN0RWxlbWVudCkge1xuICAgICAgdGhpcy5wYXNzZWRFbGVtZW50Lm9wdGlvbnMgPSB0aGlzLl9wcmVzZXRPcHRpb25zO1xuICAgIH1cbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXNfMS5kZWZhdWx0O1xuICAgIHRoaXMuaW5pdGlhbGlzZWQgPSBmYWxzZTtcbiAgfTtcbiAgQ2hvaWNlcy5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnBhc3NlZEVsZW1lbnQuaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5wYXNzZWRFbGVtZW50LmVuYWJsZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb250YWluZXJPdXRlci5pc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgdGhpcy5pbnB1dC5lbmFibGUoKTtcbiAgICAgIHRoaXMuY29udGFpbmVyT3V0ZXIuZW5hYmxlKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBDaG9pY2VzLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5wYXNzZWRFbGVtZW50LmlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMucGFzc2VkRWxlbWVudC5kaXNhYmxlKCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5jb250YWluZXJPdXRlci5pc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLl9yZW1vdmVFdmVudExpc3RlbmVycygpO1xuICAgICAgdGhpcy5pbnB1dC5kaXNhYmxlKCk7XG4gICAgICB0aGlzLmNvbnRhaW5lck91dGVyLmRpc2FibGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIENob2ljZXMucHJvdG90eXBlLmhpZ2hsaWdodEl0ZW0gPSBmdW5jdGlvbiAoaXRlbSwgcnVuRXZlbnQpIHtcbiAgICBpZiAocnVuRXZlbnQgPT09IHZvaWQgMCkge1xuICAgICAgcnVuRXZlbnQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoIWl0ZW0gfHwgIWl0ZW0uaWQpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB2YXIgaWQgPSBpdGVtLmlkLFxuICAgICAgX2EgPSBpdGVtLmdyb3VwSWQsXG4gICAgICBncm91cElkID0gX2EgPT09IHZvaWQgMCA/IC0xIDogX2EsXG4gICAgICBfYiA9IGl0ZW0udmFsdWUsXG4gICAgICB2YWx1ZSA9IF9iID09PSB2b2lkIDAgPyAnJyA6IF9iLFxuICAgICAgX2MgPSBpdGVtLmxhYmVsLFxuICAgICAgbGFiZWwgPSBfYyA9PT0gdm9pZCAwID8gJycgOiBfYztcbiAgICB2YXIgZ3JvdXAgPSBncm91cElkID49IDAgPyB0aGlzLl9zdG9yZS5nZXRHcm91cEJ5SWQoZ3JvdXBJZCkgOiBudWxsO1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKCgwLCBpdGVtc18xLmhpZ2hsaWdodEl0ZW0pKGlkLCB0cnVlKSk7XG4gICAgaWYgKHJ1bkV2ZW50KSB7XG4gICAgICB0aGlzLnBhc3NlZEVsZW1lbnQudHJpZ2dlckV2ZW50KGNvbnN0YW50c18xLkVWRU5UUy5oaWdobGlnaHRJdGVtLCB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgIGdyb3VwVmFsdWU6IGdyb3VwICYmIGdyb3VwLnZhbHVlID8gZ3JvdXAudmFsdWUgOiBudWxsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIENob2ljZXMucHJvdG90eXBlLnVuaGlnaGxpZ2h0SXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaWYgKCFpdGVtIHx8ICFpdGVtLmlkKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdmFyIGlkID0gaXRlbS5pZCxcbiAgICAgIF9hID0gaXRlbS5ncm91cElkLFxuICAgICAgZ3JvdXBJZCA9IF9hID09PSB2b2lkIDAgPyAtMSA6IF9hLFxuICAgICAgX2IgPSBpdGVtLnZhbHVlLFxuICAgICAgdmFsdWUgPSBfYiA9PT0gdm9pZCAwID8gJycgOiBfYixcbiAgICAgIF9jID0gaXRlbS5sYWJlbCxcbiAgICAgIGxhYmVsID0gX2MgPT09IHZvaWQgMCA/ICcnIDogX2M7XG4gICAgdmFyIGdyb3VwID0gZ3JvdXBJZCA+PSAwID8gdGhpcy5fc3RvcmUuZ2V0R3JvdXBCeUlkKGdyb3VwSWQpIDogbnVsbDtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCgoMCwgaXRlbXNfMS5oaWdobGlnaHRJdGVtKShpZCwgZmFsc2UpKTtcbiAgICB0aGlzLnBhc3NlZEVsZW1lbnQudHJpZ2dlckV2ZW50KGNvbnN0YW50c18xLkVWRU5UUy5oaWdobGlnaHRJdGVtLCB7XG4gICAgICBpZDogaWQsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBsYWJlbDogbGFiZWwsXG4gICAgICBncm91cFZhbHVlOiBncm91cCAmJiBncm91cC52YWx1ZSA/IGdyb3VwLnZhbHVlIDogbnVsbFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBDaG9pY2VzLnByb3RvdHlwZS5oaWdobGlnaHRBbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB0aGlzLl9zdG9yZS5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gX3RoaXMuaGlnaGxpZ2h0SXRlbShpdGVtKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgQ2hvaWNlcy5wcm90b3R5cGUudW5oaWdobGlnaHRBbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB0aGlzLl9zdG9yZS5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gX3RoaXMudW5oaWdobGlnaHRJdGVtKGl0ZW0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBDaG9pY2VzLnByb3RvdHlwZS5yZW1vdmVBY3RpdmVJdGVtc0J5VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHRoaXMuX3N0b3JlLmFjdGl2ZUl0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0udmFsdWUgPT09IHZhbHVlO1xuICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBfdGhpcy5fcmVtb3ZlSXRlbShpdGVtKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgQ2hvaWNlcy5wcm90b3R5cGUucmVtb3ZlQWN0aXZlSXRlbXMgPSBmdW5jdGlvbiAoZXhjbHVkZWRJZCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdGhpcy5fc3RvcmUuYWN0aXZlSXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChfYSkge1xuICAgICAgdmFyIGlkID0gX2EuaWQ7XG4gICAgICByZXR1cm4gaWQgIT09IGV4Y2x1ZGVkSWQ7XG4gICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIF90aGlzLl9yZW1vdmVJdGVtKGl0ZW0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBDaG9pY2VzLnByb3RvdHlwZS5yZW1vdmVIaWdobGlnaHRlZEl0ZW1zID0gZnVuY3Rpb24gKHJ1bkV2ZW50KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBpZiAocnVuRXZlbnQgPT09IHZvaWQgMCkge1xuICAgICAgcnVuRXZlbnQgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5fc3RvcmUuaGlnaGxpZ2h0ZWRBY3RpdmVJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICBfdGhpcy5fcmVtb3ZlSXRlbShpdGVtKTtcbiAgICAgIC8vIElmIHRoaXMgYWN0aW9uIHdhcyBwZXJmb3JtZWQgYnkgdGhlIHVzZXJcbiAgICAgIC8vIHRyaWdnZXIgdGhlIGV2ZW50XG4gICAgICBpZiAocnVuRXZlbnQpIHtcbiAgICAgICAgX3RoaXMuX3RyaWdnZXJDaGFuZ2UoaXRlbS52YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIENob2ljZXMucHJvdG90eXBlLnNob3dEcm9wZG93biA9IGZ1bmN0aW9uIChwcmV2ZW50SW5wdXRGb2N1cykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgaWYgKHRoaXMuZHJvcGRvd24uaXNBY3RpdmUpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuZHJvcGRvd24uc2hvdygpO1xuICAgICAgX3RoaXMuY29udGFpbmVyT3V0ZXIub3BlbihfdGhpcy5kcm9wZG93bi5kaXN0YW5jZUZyb21Ub3BXaW5kb3cpO1xuICAgICAgaWYgKCFwcmV2ZW50SW5wdXRGb2N1cyAmJiBfdGhpcy5fY2FuU2VhcmNoKSB7XG4gICAgICAgIF90aGlzLmlucHV0LmZvY3VzKCk7XG4gICAgICB9XG4gICAgICBfdGhpcy5wYXNzZWRFbGVtZW50LnRyaWdnZXJFdmVudChjb25zdGFudHNfMS5FVkVOVFMuc2hvd0Ryb3Bkb3duLCB7fSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIENob2ljZXMucHJvdG90eXBlLmhpZGVEcm9wZG93biA9IGZ1bmN0aW9uIChwcmV2ZW50SW5wdXRCbHVyKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBpZiAoIXRoaXMuZHJvcGRvd24uaXNBY3RpdmUpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuZHJvcGRvd24uaGlkZSgpO1xuICAgICAgX3RoaXMuY29udGFpbmVyT3V0ZXIuY2xvc2UoKTtcbiAgICAgIGlmICghcHJldmVudElucHV0Qmx1ciAmJiBfdGhpcy5fY2FuU2VhcmNoKSB7XG4gICAgICAgIF90aGlzLmlucHV0LnJlbW92ZUFjdGl2ZURlc2NlbmRhbnQoKTtcbiAgICAgICAgX3RoaXMuaW5wdXQuYmx1cigpO1xuICAgICAgfVxuICAgICAgX3RoaXMucGFzc2VkRWxlbWVudC50cmlnZ2VyRXZlbnQoY29uc3RhbnRzXzEuRVZFTlRTLmhpZGVEcm9wZG93biwge30pO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBDaG9pY2VzLnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZU9ubHkpIHtcbiAgICBpZiAodmFsdWVPbmx5ID09PSB2b2lkIDApIHtcbiAgICAgIHZhbHVlT25seSA9IGZhbHNlO1xuICAgIH1cbiAgICB2YXIgdmFsdWVzID0gdGhpcy5fc3RvcmUuYWN0aXZlSXRlbXMucmVkdWNlKGZ1bmN0aW9uIChzZWxlY3RlZEl0ZW1zLCBpdGVtKSB7XG4gICAgICB2YXIgaXRlbVZhbHVlID0gdmFsdWVPbmx5ID8gaXRlbS52YWx1ZSA6IGl0ZW07XG4gICAgICBzZWxlY3RlZEl0ZW1zLnB1c2goaXRlbVZhbHVlKTtcbiAgICAgIHJldHVybiBzZWxlY3RlZEl0ZW1zO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50ID8gdmFsdWVzWzBdIDogdmFsdWVzO1xuICB9O1xuICBDaG9pY2VzLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uIChpdGVtcykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgaWYgKCF0aGlzLmluaXRpYWxpc2VkKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBfdGhpcy5fc2V0Q2hvaWNlT3JJdGVtKHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgQ2hvaWNlcy5wcm90b3R5cGUuc2V0Q2hvaWNlQnlWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgaWYgKCF0aGlzLmluaXRpYWxpc2VkIHx8IHRoaXMuX2lzVGV4dEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvLyBJZiBvbmx5IG9uZSB2YWx1ZSBoYXMgYmVlbiBwYXNzZWQsIGNvbnZlcnQgdG8gYXJyYXlcbiAgICB2YXIgY2hvaWNlVmFsdWUgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcbiAgICAvLyBMb29wIHRocm91Z2ggZWFjaCB2YWx1ZSBhbmRcbiAgICBjaG9pY2VWYWx1ZS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHJldHVybiBfdGhpcy5fZmluZEFuZFNlbGVjdENob2ljZUJ5VmFsdWUodmFsKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgLyoqXG4gICAqIFNldCBjaG9pY2VzIG9mIHNlbGVjdCBpbnB1dCB2aWEgYW4gYXJyYXkgb2Ygb2JqZWN0cyAob3IgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFycmF5IG9mIG9iamVjdCBvciBwcm9taXNlIG9mIGl0KSxcbiAgICogYSB2YWx1ZSBmaWVsZCBuYW1lIGFuZCBhIGxhYmVsIGZpZWxkIG5hbWUuXG4gICAqIFRoaXMgYmVoYXZlcyB0aGUgc2FtZSBhcyBwYXNzaW5nIGl0ZW1zIHZpYSB0aGUgY2hvaWNlcyBvcHRpb24gYnV0IGNhbiBiZSBjYWxsZWQgYWZ0ZXIgaW5pdGlhbGlzaW5nIENob2ljZXMuXG4gICAqIFRoaXMgY2FuIGFsc28gYmUgdXNlZCB0byBhZGQgZ3JvdXBzIG9mIGNob2ljZXMgKHNlZSBleGFtcGxlIDIpOyBPcHRpb25hbGx5IHBhc3MgYSB0cnVlIGByZXBsYWNlQ2hvaWNlc2AgdmFsdWUgdG8gcmVtb3ZlIGFueSBleGlzdGluZyBjaG9pY2VzLlxuICAgKiBPcHRpb25hbGx5IHBhc3MgYSBgY3VzdG9tUHJvcGVydGllc2Agb2JqZWN0IHRvIGFkZCBhZGRpdGlvbmFsIGRhdGEgdG8geW91ciBjaG9pY2VzICh1c2VmdWwgd2hlbiBzZWFyY2hpbmcvZmlsdGVyaW5nIGV0YykuXG4gICAqXG4gICAqICoqSW5wdXQgdHlwZXMgYWZmZWN0ZWQ6Kiogc2VsZWN0LW9uZSwgc2VsZWN0LW11bHRpcGxlXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGpzXG4gICAqIGNvbnN0IGV4YW1wbGUgPSBuZXcgQ2hvaWNlcyhlbGVtZW50KTtcbiAgICpcbiAgICogZXhhbXBsZS5zZXRDaG9pY2VzKFtcbiAgICogICB7dmFsdWU6ICdPbmUnLCBsYWJlbDogJ0xhYmVsIE9uZScsIGRpc2FibGVkOiB0cnVlfSxcbiAgICogICB7dmFsdWU6ICdUd28nLCBsYWJlbDogJ0xhYmVsIFR3bycsIHNlbGVjdGVkOiB0cnVlfSxcbiAgICogICB7dmFsdWU6ICdUaHJlZScsIGxhYmVsOiAnTGFiZWwgVGhyZWUnfSxcbiAgICogXSwgJ3ZhbHVlJywgJ2xhYmVsJywgZmFsc2UpO1xuICAgKiBgYGBcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBganNcbiAgICogY29uc3QgZXhhbXBsZSA9IG5ldyBDaG9pY2VzKGVsZW1lbnQpO1xuICAgKlxuICAgKiBleGFtcGxlLnNldENob2ljZXMoYXN5bmMgKCkgPT4ge1xuICAgKiAgIHRyeSB7XG4gICAqICAgICAgY29uc3QgaXRlbXMgPSBhd2FpdCBmZXRjaCgnL2l0ZW1zJyk7XG4gICAqICAgICAgcmV0dXJuIGl0ZW1zLmpzb24oKVxuICAgKiAgIH0gY2F0Y2goZXJyKSB7XG4gICAqICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAqICAgfVxuICAgKiB9KTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGpzXG4gICAqIGNvbnN0IGV4YW1wbGUgPSBuZXcgQ2hvaWNlcyhlbGVtZW50KTtcbiAgICpcbiAgICogZXhhbXBsZS5zZXRDaG9pY2VzKFt7XG4gICAqICAgbGFiZWw6ICdHcm91cCBvbmUnLFxuICAgKiAgIGlkOiAxLFxuICAgKiAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICogICBjaG9pY2VzOiBbXG4gICAqICAgICB7dmFsdWU6ICdDaGlsZCBPbmUnLCBsYWJlbDogJ0NoaWxkIE9uZScsIHNlbGVjdGVkOiB0cnVlfSxcbiAgICogICAgIHt2YWx1ZTogJ0NoaWxkIFR3bycsIGxhYmVsOiAnQ2hpbGQgVHdvJywgIGRpc2FibGVkOiB0cnVlfSxcbiAgICogICAgIHt2YWx1ZTogJ0NoaWxkIFRocmVlJywgbGFiZWw6ICdDaGlsZCBUaHJlZSd9LFxuICAgKiAgIF1cbiAgICogfSxcbiAgICoge1xuICAgKiAgIGxhYmVsOiAnR3JvdXAgdHdvJyxcbiAgICogICBpZDogMixcbiAgICogICBkaXNhYmxlZDogZmFsc2UsXG4gICAqICAgY2hvaWNlczogW1xuICAgKiAgICAge3ZhbHVlOiAnQ2hpbGQgRm91cicsIGxhYmVsOiAnQ2hpbGQgRm91cicsIGRpc2FibGVkOiB0cnVlfSxcbiAgICogICAgIHt2YWx1ZTogJ0NoaWxkIEZpdmUnLCBsYWJlbDogJ0NoaWxkIEZpdmUnfSxcbiAgICogICAgIHt2YWx1ZTogJ0NoaWxkIFNpeCcsIGxhYmVsOiAnQ2hpbGQgU2l4JywgY3VzdG9tUHJvcGVydGllczoge1xuICAgKiAgICAgICBkZXNjcmlwdGlvbjogJ0N1c3RvbSBkZXNjcmlwdGlvbiBhYm91dCBjaGlsZCBzaXgnLFxuICAgKiAgICAgICByYW5kb206ICdBbm90aGVyIHJhbmRvbSBjdXN0b20gcHJvcGVydHknXG4gICAqICAgICB9fSxcbiAgICogICBdXG4gICAqIH1dLCAndmFsdWUnLCAnbGFiZWwnLCBmYWxzZSk7XG4gICAqIGBgYFxuICAgKi9cbiAgQ2hvaWNlcy5wcm90b3R5cGUuc2V0Q2hvaWNlcyA9IGZ1bmN0aW9uIChjaG9pY2VzQXJyYXlPckZldGNoZXIsIHZhbHVlLCBsYWJlbCwgcmVwbGFjZUNob2ljZXMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIGlmIChjaG9pY2VzQXJyYXlPckZldGNoZXIgPT09IHZvaWQgMCkge1xuICAgICAgY2hvaWNlc0FycmF5T3JGZXRjaGVyID0gW107XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgICB2YWx1ZSA9ICd2YWx1ZSc7XG4gICAgfVxuICAgIGlmIChsYWJlbCA9PT0gdm9pZCAwKSB7XG4gICAgICBsYWJlbCA9ICdsYWJlbCc7XG4gICAgfVxuICAgIGlmIChyZXBsYWNlQ2hvaWNlcyA9PT0gdm9pZCAwKSB7XG4gICAgICByZXBsYWNlQ2hvaWNlcyA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaW5pdGlhbGlzZWQpIHtcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInNldENob2ljZXMgd2FzIGNhbGxlZCBvbiBhIG5vbi1pbml0aWFsaXplZCBpbnN0YW5jZSBvZiBDaG9pY2VzXCIpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX2lzU2VsZWN0RWxlbWVudCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcInNldENob2ljZXMgY2FuJ3QgYmUgdXNlZCB3aXRoIElOUFVUIGJhc2VkIENob2ljZXNcIik7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnIHx8ICF2YWx1ZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcInZhbHVlIHBhcmFtZXRlciBtdXN0IGJlIGEgbmFtZSBvZiAndmFsdWUnIGZpZWxkIGluIHBhc3NlZCBvYmplY3RzXCIpO1xuICAgIH1cbiAgICAvLyBDbGVhciBjaG9pY2VzIGlmIG5lZWRlZFxuICAgIGlmIChyZXBsYWNlQ2hvaWNlcykge1xuICAgICAgdGhpcy5jbGVhckNob2ljZXMoKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBjaG9pY2VzQXJyYXlPckZldGNoZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIGl0J3MgYSBjaG9pY2VzIGZldGNoZXIgZnVuY3Rpb25cbiAgICAgIHZhciBmZXRjaGVyXzEgPSBjaG9pY2VzQXJyYXlPckZldGNoZXIodGhpcyk7XG4gICAgICBpZiAodHlwZW9mIFByb21pc2UgPT09ICdmdW5jdGlvbicgJiYgZmV0Y2hlcl8xIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAvLyB0aGF0J3MgYSBwcm9taXNlXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm9taXNlLWV4ZWN1dG9yLXJldHVyblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlc29sdmUpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuX2hhbmRsZUxvYWRpbmdTdGF0ZSh0cnVlKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGZldGNoZXJfMTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5zZXRDaG9pY2VzKGRhdGEsIHZhbHVlLCBsYWJlbCwgcmVwbGFjZUNob2ljZXMpO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgaWYgKCFfdGhpcy5jb25maWcuc2lsZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuX2hhbmRsZUxvYWRpbmdTdGF0ZShmYWxzZSk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyBmdW5jdGlvbiByZXR1cm5lZCBzb21ldGhpbmcgZWxzZSB0aGFuIHByb21pc2UsIGxldCdzIGNoZWNrIGlmIGl0J3MgYW4gYXJyYXkgb2YgY2hvaWNlc1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGZldGNoZXJfMSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIi5zZXRDaG9pY2VzIGZpcnN0IGFyZ3VtZW50IGZ1bmN0aW9uIG11c3QgcmV0dXJuIGVpdGhlciBhcnJheSBvZiBjaG9pY2VzIG9yIFByb21pc2UsIGdvdDogXCIuY29uY2F0KHR5cGVvZiBmZXRjaGVyXzEpKTtcbiAgICAgIH1cbiAgICAgIC8vIHJlY3Vyc2lvbiB3aXRoIHJlc3VsdHMsIGl0J3Mgc3luYyBhbmQgY2hvaWNlcyB3ZXJlIGNsZWFyZWQgYWxyZWFkeVxuICAgICAgcmV0dXJuIHRoaXMuc2V0Q2hvaWNlcyhmZXRjaGVyXzEsIHZhbHVlLCBsYWJlbCwgZmFsc2UpO1xuICAgIH1cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoY2hvaWNlc0FycmF5T3JGZXRjaGVyKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIi5zZXRDaG9pY2VzIG11c3QgYmUgY2FsbGVkIGVpdGhlciB3aXRoIGFycmF5IG9mIGNob2ljZXMgd2l0aCBhIGZ1bmN0aW9uIHJlc3VsdGluZyBpbnRvIFByb21pc2Ugb2YgYXJyYXkgb2YgY2hvaWNlc1wiKTtcbiAgICB9XG4gICAgdGhpcy5jb250YWluZXJPdXRlci5yZW1vdmVMb2FkaW5nU3RhdGUoKTtcbiAgICB0aGlzLl9zdGFydExvYWRpbmcoKTtcbiAgICBjaG9pY2VzQXJyYXlPckZldGNoZXIuZm9yRWFjaChmdW5jdGlvbiAoZ3JvdXBPckNob2ljZSkge1xuICAgICAgaWYgKGdyb3VwT3JDaG9pY2UuY2hvaWNlcykge1xuICAgICAgICBfdGhpcy5fYWRkR3JvdXAoe1xuICAgICAgICAgIGlkOiBncm91cE9yQ2hvaWNlLmlkID8gcGFyc2VJbnQoXCJcIi5jb25jYXQoZ3JvdXBPckNob2ljZS5pZCksIDEwKSA6IG51bGwsXG4gICAgICAgICAgZ3JvdXA6IGdyb3VwT3JDaG9pY2UsXG4gICAgICAgICAgdmFsdWVLZXk6IHZhbHVlLFxuICAgICAgICAgIGxhYmVsS2V5OiBsYWJlbFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjaG9pY2UgPSBncm91cE9yQ2hvaWNlO1xuICAgICAgICBfdGhpcy5fYWRkQ2hvaWNlKHtcbiAgICAgICAgICB2YWx1ZTogY2hvaWNlW3ZhbHVlXSxcbiAgICAgICAgICBsYWJlbDogY2hvaWNlW2xhYmVsXSxcbiAgICAgICAgICBpc1NlbGVjdGVkOiAhIWNob2ljZS5zZWxlY3RlZCxcbiAgICAgICAgICBpc0Rpc2FibGVkOiAhIWNob2ljZS5kaXNhYmxlZCxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogISFjaG9pY2UucGxhY2Vob2xkZXIsXG4gICAgICAgICAgY3VzdG9tUHJvcGVydGllczogY2hvaWNlLmN1c3RvbVByb3BlcnRpZXNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5fc3RvcExvYWRpbmcoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgQ2hvaWNlcy5wcm90b3R5cGUuY2xlYXJDaG9pY2VzID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKCgwLCBjaG9pY2VzXzEuY2xlYXJDaG9pY2VzKSgpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgQ2hvaWNlcy5wcm90b3R5cGUuY2xlYXJTdG9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCgoMCwgbWlzY18xLmNsZWFyQWxsKSgpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgQ2hvaWNlcy5wcm90b3R5cGUuY2xlYXJJbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2hvdWxkU2V0SW5wdXRXaWR0aCA9ICF0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQ7XG4gICAgdGhpcy5pbnB1dC5jbGVhcihzaG91bGRTZXRJbnB1dFdpZHRoKTtcbiAgICBpZiAoIXRoaXMuX2lzVGV4dEVsZW1lbnQgJiYgdGhpcy5fY2FuU2VhcmNoKSB7XG4gICAgICB0aGlzLl9pc1NlYXJjaGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goKDAsIGNob2ljZXNfMS5hY3RpdmF0ZUNob2ljZXMpKHRydWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIENob2ljZXMucHJvdG90eXBlLl9yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX3N0b3JlLmlzTG9hZGluZygpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2N1cnJlbnRTdGF0ZSA9IHRoaXMuX3N0b3JlLnN0YXRlO1xuICAgIHZhciBzdGF0ZUNoYW5nZWQgPSB0aGlzLl9jdXJyZW50U3RhdGUuY2hvaWNlcyAhPT0gdGhpcy5fcHJldlN0YXRlLmNob2ljZXMgfHwgdGhpcy5fY3VycmVudFN0YXRlLmdyb3VwcyAhPT0gdGhpcy5fcHJldlN0YXRlLmdyb3VwcyB8fCB0aGlzLl9jdXJyZW50U3RhdGUuaXRlbXMgIT09IHRoaXMuX3ByZXZTdGF0ZS5pdGVtcztcbiAgICB2YXIgc2hvdWxkUmVuZGVyQ2hvaWNlcyA9IHRoaXMuX2lzU2VsZWN0RWxlbWVudDtcbiAgICB2YXIgc2hvdWxkUmVuZGVySXRlbXMgPSB0aGlzLl9jdXJyZW50U3RhdGUuaXRlbXMgIT09IHRoaXMuX3ByZXZTdGF0ZS5pdGVtcztcbiAgICBpZiAoIXN0YXRlQ2hhbmdlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc2hvdWxkUmVuZGVyQ2hvaWNlcykge1xuICAgICAgdGhpcy5fcmVuZGVyQ2hvaWNlcygpO1xuICAgIH1cbiAgICBpZiAoc2hvdWxkUmVuZGVySXRlbXMpIHtcbiAgICAgIHRoaXMuX3JlbmRlckl0ZW1zKCk7XG4gICAgfVxuICAgIHRoaXMuX3ByZXZTdGF0ZSA9IHRoaXMuX2N1cnJlbnRTdGF0ZTtcbiAgfTtcbiAgQ2hvaWNlcy5wcm90b3R5cGUuX3JlbmRlckNob2ljZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgX2EgPSB0aGlzLl9zdG9yZSxcbiAgICAgIGFjdGl2ZUdyb3VwcyA9IF9hLmFjdGl2ZUdyb3VwcyxcbiAgICAgIGFjdGl2ZUNob2ljZXMgPSBfYS5hY3RpdmVDaG9pY2VzO1xuICAgIHZhciBjaG9pY2VMaXN0RnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgdGhpcy5jaG9pY2VMaXN0LmNsZWFyKCk7XG4gICAgaWYgKHRoaXMuY29uZmlnLnJlc2V0U2Nyb2xsUG9zaXRpb24pIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5jaG9pY2VMaXN0LnNjcm9sbFRvVG9wKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gSWYgd2UgaGF2ZSBncm91cGVkIG9wdGlvbnNcbiAgICBpZiAoYWN0aXZlR3JvdXBzLmxlbmd0aCA+PSAxICYmICF0aGlzLl9pc1NlYXJjaGluZykge1xuICAgICAgLy8gSWYgd2UgaGF2ZSBhIHBsYWNlaG9sZGVyIGNob2ljZSBhbG9uZyB3aXRoIGdyb3Vwc1xuICAgICAgdmFyIGFjdGl2ZVBsYWNlaG9sZGVycyA9IGFjdGl2ZUNob2ljZXMuZmlsdGVyKGZ1bmN0aW9uIChhY3RpdmVDaG9pY2UpIHtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZUNob2ljZS5wbGFjZWhvbGRlciA9PT0gdHJ1ZSAmJiBhY3RpdmVDaG9pY2UuZ3JvdXBJZCA9PT0gLTE7XG4gICAgICB9KTtcbiAgICAgIGlmIChhY3RpdmVQbGFjZWhvbGRlcnMubGVuZ3RoID49IDEpIHtcbiAgICAgICAgY2hvaWNlTGlzdEZyYWdtZW50ID0gdGhpcy5fY3JlYXRlQ2hvaWNlc0ZyYWdtZW50KGFjdGl2ZVBsYWNlaG9sZGVycywgY2hvaWNlTGlzdEZyYWdtZW50KTtcbiAgICAgIH1cbiAgICAgIGNob2ljZUxpc3RGcmFnbWVudCA9IHRoaXMuX2NyZWF0ZUdyb3Vwc0ZyYWdtZW50KGFjdGl2ZUdyb3VwcywgYWN0aXZlQ2hvaWNlcywgY2hvaWNlTGlzdEZyYWdtZW50KTtcbiAgICB9IGVsc2UgaWYgKGFjdGl2ZUNob2ljZXMubGVuZ3RoID49IDEpIHtcbiAgICAgIGNob2ljZUxpc3RGcmFnbWVudCA9IHRoaXMuX2NyZWF0ZUNob2ljZXNGcmFnbWVudChhY3RpdmVDaG9pY2VzLCBjaG9pY2VMaXN0RnJhZ21lbnQpO1xuICAgIH1cbiAgICAvLyBJZiB3ZSBoYXZlIGNob2ljZXMgdG8gc2hvd1xuICAgIGlmIChjaG9pY2VMaXN0RnJhZ21lbnQuY2hpbGROb2RlcyAmJiBjaG9pY2VMaXN0RnJhZ21lbnQuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgYWN0aXZlSXRlbXMgPSB0aGlzLl9zdG9yZS5hY3RpdmVJdGVtcztcbiAgICAgIHZhciBjYW5BZGRJdGVtID0gdGhpcy5fY2FuQWRkSXRlbShhY3RpdmVJdGVtcywgdGhpcy5pbnB1dC52YWx1ZSk7XG4gICAgICAvLyAuLi5hbmQgd2UgY2FuIHNlbGVjdCB0aGVtXG4gICAgICBpZiAoY2FuQWRkSXRlbS5yZXNwb25zZSkge1xuICAgICAgICAvLyAuLi5hcHBlbmQgdGhlbSBhbmQgaGlnaGxpZ2h0IHRoZSBmaXJzdCBjaG9pY2VcbiAgICAgICAgdGhpcy5jaG9pY2VMaXN0LmFwcGVuZChjaG9pY2VMaXN0RnJhZ21lbnQpO1xuICAgICAgICB0aGlzLl9oaWdobGlnaHRDaG9pY2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBub3RpY2UgPSB0aGlzLl9nZXRUZW1wbGF0ZSgnbm90aWNlJywgY2FuQWRkSXRlbS5ub3RpY2UpO1xuICAgICAgICB0aGlzLmNob2ljZUxpc3QuYXBwZW5kKG5vdGljZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE90aGVyd2lzZSBzaG93IGEgbm90aWNlXG4gICAgICB2YXIgZHJvcGRvd25JdGVtID0gdm9pZCAwO1xuICAgICAgdmFyIG5vdGljZSA9IHZvaWQgMDtcbiAgICAgIGlmICh0aGlzLl9pc1NlYXJjaGluZykge1xuICAgICAgICBub3RpY2UgPSB0eXBlb2YgdGhpcy5jb25maWcubm9SZXN1bHRzVGV4dCA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuY29uZmlnLm5vUmVzdWx0c1RleHQoKSA6IHRoaXMuY29uZmlnLm5vUmVzdWx0c1RleHQ7XG4gICAgICAgIGRyb3Bkb3duSXRlbSA9IHRoaXMuX2dldFRlbXBsYXRlKCdub3RpY2UnLCBub3RpY2UsICduby1yZXN1bHRzJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub3RpY2UgPSB0eXBlb2YgdGhpcy5jb25maWcubm9DaG9pY2VzVGV4dCA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuY29uZmlnLm5vQ2hvaWNlc1RleHQoKSA6IHRoaXMuY29uZmlnLm5vQ2hvaWNlc1RleHQ7XG4gICAgICAgIGRyb3Bkb3duSXRlbSA9IHRoaXMuX2dldFRlbXBsYXRlKCdub3RpY2UnLCBub3RpY2UsICduby1jaG9pY2VzJyk7XG4gICAgICB9XG4gICAgICB0aGlzLmNob2ljZUxpc3QuYXBwZW5kKGRyb3Bkb3duSXRlbSk7XG4gICAgfVxuICB9O1xuICBDaG9pY2VzLnByb3RvdHlwZS5fcmVuZGVySXRlbXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFjdGl2ZUl0ZW1zID0gdGhpcy5fc3RvcmUuYWN0aXZlSXRlbXMgfHwgW107XG4gICAgdGhpcy5pdGVtTGlzdC5jbGVhcigpO1xuICAgIC8vIENyZWF0ZSBhIGZyYWdtZW50IHRvIHN0b3JlIG91ciBsaXN0IGl0ZW1zXG4gICAgLy8gKHNvIHdlIGRvbid0IGhhdmUgdG8gdXBkYXRlIHRoZSBET00gZm9yIGVhY2ggaXRlbSlcbiAgICB2YXIgaXRlbUxpc3RGcmFnbWVudCA9IHRoaXMuX2NyZWF0ZUl0ZW1zRnJhZ21lbnQoYWN0aXZlSXRlbXMpO1xuICAgIC8vIElmIHdlIGhhdmUgaXRlbXMgdG8gYWRkLCBhcHBlbmQgdGhlbVxuICAgIGlmIChpdGVtTGlzdEZyYWdtZW50LmNoaWxkTm9kZXMpIHtcbiAgICAgIHRoaXMuaXRlbUxpc3QuYXBwZW5kKGl0ZW1MaXN0RnJhZ21lbnQpO1xuICAgIH1cbiAgfTtcbiAgQ2hvaWNlcy5wcm90b3R5cGUuX2NyZWF0ZUdyb3Vwc0ZyYWdtZW50ID0gZnVuY3Rpb24gKGdyb3VwcywgY2hvaWNlcywgZnJhZ21lbnQpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIGlmIChmcmFnbWVudCA9PT0gdm9pZCAwKSB7XG4gICAgICBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICB9XG4gICAgdmFyIGdldEdyb3VwQ2hvaWNlcyA9IGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgcmV0dXJuIGNob2ljZXMuZmlsdGVyKGZ1bmN0aW9uIChjaG9pY2UpIHtcbiAgICAgICAgaWYgKF90aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gY2hvaWNlLmdyb3VwSWQgPT09IGdyb3VwLmlkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaG9pY2UuZ3JvdXBJZCA9PT0gZ3JvdXAuaWQgJiYgKF90aGlzLmNvbmZpZy5yZW5kZXJTZWxlY3RlZENob2ljZXMgPT09ICdhbHdheXMnIHx8ICFjaG9pY2Uuc2VsZWN0ZWQpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBJZiBzb3J0aW5nIGlzIGVuYWJsZWQsIGZpbHRlciBncm91cHNcbiAgICBpZiAodGhpcy5jb25maWcuc2hvdWxkU29ydCkge1xuICAgICAgZ3JvdXBzLnNvcnQodGhpcy5jb25maWcuc29ydGVyKTtcbiAgICB9XG4gICAgZ3JvdXBzLmZvckVhY2goZnVuY3Rpb24gKGdyb3VwKSB7XG4gICAgICB2YXIgZ3JvdXBDaG9pY2VzID0gZ2V0R3JvdXBDaG9pY2VzKGdyb3VwKTtcbiAgICAgIGlmIChncm91cENob2ljZXMubGVuZ3RoID49IDEpIHtcbiAgICAgICAgdmFyIGRyb3Bkb3duR3JvdXAgPSBfdGhpcy5fZ2V0VGVtcGxhdGUoJ2Nob2ljZUdyb3VwJywgZ3JvdXApO1xuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChkcm9wZG93bkdyb3VwKTtcbiAgICAgICAgX3RoaXMuX2NyZWF0ZUNob2ljZXNGcmFnbWVudChncm91cENob2ljZXMsIGZyYWdtZW50LCB0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnJhZ21lbnQ7XG4gIH07XG4gIENob2ljZXMucHJvdG90eXBlLl9jcmVhdGVDaG9pY2VzRnJhZ21lbnQgPSBmdW5jdGlvbiAoY2hvaWNlcywgZnJhZ21lbnQsIHdpdGhpbkdyb3VwKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBpZiAoZnJhZ21lbnQgPT09IHZvaWQgMCkge1xuICAgICAgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgfVxuICAgIGlmICh3aXRoaW5Hcm91cCA9PT0gdm9pZCAwKSB7XG4gICAgICB3aXRoaW5Hcm91cCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBDcmVhdGUgYSBmcmFnbWVudCB0byBzdG9yZSBvdXIgbGlzdCBpdGVtcyAoc28gd2UgZG9uJ3QgaGF2ZSB0byB1cGRhdGUgdGhlIERPTSBmb3IgZWFjaCBpdGVtKVxuICAgIHZhciBfYSA9IHRoaXMuY29uZmlnLFxuICAgICAgcmVuZGVyU2VsZWN0ZWRDaG9pY2VzID0gX2EucmVuZGVyU2VsZWN0ZWRDaG9pY2VzLFxuICAgICAgc2VhcmNoUmVzdWx0TGltaXQgPSBfYS5zZWFyY2hSZXN1bHRMaW1pdCxcbiAgICAgIHJlbmRlckNob2ljZUxpbWl0ID0gX2EucmVuZGVyQ2hvaWNlTGltaXQ7XG4gICAgdmFyIGZpbHRlciA9IHRoaXMuX2lzU2VhcmNoaW5nID8gdXRpbHNfMS5zb3J0QnlTY29yZSA6IHRoaXMuY29uZmlnLnNvcnRlcjtcbiAgICB2YXIgYXBwZW5kQ2hvaWNlID0gZnVuY3Rpb24gKGNob2ljZSkge1xuICAgICAgdmFyIHNob3VsZFJlbmRlciA9IHJlbmRlclNlbGVjdGVkQ2hvaWNlcyA9PT0gJ2F1dG8nID8gX3RoaXMuX2lzU2VsZWN0T25lRWxlbWVudCB8fCAhY2hvaWNlLnNlbGVjdGVkIDogdHJ1ZTtcbiAgICAgIGlmIChzaG91bGRSZW5kZXIpIHtcbiAgICAgICAgdmFyIGRyb3Bkb3duSXRlbSA9IF90aGlzLl9nZXRUZW1wbGF0ZSgnY2hvaWNlJywgY2hvaWNlLCBfdGhpcy5jb25maWcuaXRlbVNlbGVjdFRleHQpO1xuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChkcm9wZG93bkl0ZW0pO1xuICAgICAgfVxuICAgIH07XG4gICAgdmFyIHJlbmRlcmVyYWJsZUNob2ljZXMgPSBjaG9pY2VzO1xuICAgIGlmIChyZW5kZXJTZWxlY3RlZENob2ljZXMgPT09ICdhdXRvJyAmJiAhdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50KSB7XG4gICAgICByZW5kZXJlcmFibGVDaG9pY2VzID0gY2hvaWNlcy5maWx0ZXIoZnVuY3Rpb24gKGNob2ljZSkge1xuICAgICAgICByZXR1cm4gIWNob2ljZS5zZWxlY3RlZDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBTcGxpdCBhcnJheSBpbnRvIHBsYWNlaG9sZGVycyBhbmQgXCJub3JtYWxcIiBjaG9pY2VzXG4gICAgdmFyIF9iID0gcmVuZGVyZXJhYmxlQ2hvaWNlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY2hvaWNlKSB7XG4gICAgICAgIGlmIChjaG9pY2UucGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICBhY2MucGxhY2Vob2xkZXJDaG9pY2VzLnB1c2goY2hvaWNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhY2Mubm9ybWFsQ2hvaWNlcy5wdXNoKGNob2ljZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHtcbiAgICAgICAgcGxhY2Vob2xkZXJDaG9pY2VzOiBbXSxcbiAgICAgICAgbm9ybWFsQ2hvaWNlczogW11cbiAgICAgIH0pLFxuICAgICAgcGxhY2Vob2xkZXJDaG9pY2VzID0gX2IucGxhY2Vob2xkZXJDaG9pY2VzLFxuICAgICAgbm9ybWFsQ2hvaWNlcyA9IF9iLm5vcm1hbENob2ljZXM7XG4gICAgLy8gSWYgc29ydGluZyBpcyBlbmFibGVkIG9yIHRoZSB1c2VyIGlzIHNlYXJjaGluZywgZmlsdGVyIGNob2ljZXNcbiAgICBpZiAodGhpcy5jb25maWcuc2hvdWxkU29ydCB8fCB0aGlzLl9pc1NlYXJjaGluZykge1xuICAgICAgbm9ybWFsQ2hvaWNlcy5zb3J0KGZpbHRlcik7XG4gICAgfVxuICAgIHZhciBjaG9pY2VMaW1pdCA9IHJlbmRlcmVyYWJsZUNob2ljZXMubGVuZ3RoO1xuICAgIC8vIFByZXBlbmQgcGxhY2Vob2xlZGVyXG4gICAgdmFyIHNvcnRlZENob2ljZXMgPSB0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQgPyBfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoW10sIHBsYWNlaG9sZGVyQ2hvaWNlcywgdHJ1ZSksIG5vcm1hbENob2ljZXMsIHRydWUpIDogbm9ybWFsQ2hvaWNlcztcbiAgICBpZiAodGhpcy5faXNTZWFyY2hpbmcpIHtcbiAgICAgIGNob2ljZUxpbWl0ID0gc2VhcmNoUmVzdWx0TGltaXQ7XG4gICAgfSBlbHNlIGlmIChyZW5kZXJDaG9pY2VMaW1pdCAmJiByZW5kZXJDaG9pY2VMaW1pdCA+IDAgJiYgIXdpdGhpbkdyb3VwKSB7XG4gICAgICBjaG9pY2VMaW1pdCA9IHJlbmRlckNob2ljZUxpbWl0O1xuICAgIH1cbiAgICAvLyBBZGQgZWFjaCBjaG9pY2UgdG8gZHJvcGRvd24gd2l0aGluIHJhbmdlXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaG9pY2VMaW1pdDsgaSArPSAxKSB7XG4gICAgICBpZiAoc29ydGVkQ2hvaWNlc1tpXSkge1xuICAgICAgICBhcHBlbmRDaG9pY2Uoc29ydGVkQ2hvaWNlc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfTtcbiAgQ2hvaWNlcy5wcm90b3R5cGUuX2NyZWF0ZUl0ZW1zRnJhZ21lbnQgPSBmdW5jdGlvbiAoaXRlbXMsIGZyYWdtZW50KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBpZiAoZnJhZ21lbnQgPT09IHZvaWQgMCkge1xuICAgICAgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgfVxuICAgIC8vIENyZWF0ZSBmcmFnbWVudCB0byBhZGQgZWxlbWVudHMgdG9cbiAgICB2YXIgX2EgPSB0aGlzLmNvbmZpZyxcbiAgICAgIHNob3VsZFNvcnRJdGVtcyA9IF9hLnNob3VsZFNvcnRJdGVtcyxcbiAgICAgIHNvcnRlciA9IF9hLnNvcnRlcixcbiAgICAgIHJlbW92ZUl0ZW1CdXR0b24gPSBfYS5yZW1vdmVJdGVtQnV0dG9uO1xuICAgIC8vIElmIHNvcnRpbmcgaXMgZW5hYmxlZCwgZmlsdGVyIGl0ZW1zXG4gICAgaWYgKHNob3VsZFNvcnRJdGVtcyAmJiAhdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50KSB7XG4gICAgICBpdGVtcy5zb3J0KHNvcnRlcik7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pc1RleHRFbGVtZW50KSB7XG4gICAgICAvLyBVcGRhdGUgdGhlIHZhbHVlIG9mIHRoZSBoaWRkZW4gaW5wdXRcbiAgICAgIHRoaXMucGFzc2VkRWxlbWVudC52YWx1ZSA9IGl0ZW1zLm1hcChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gX2EudmFsdWU7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pLmpvaW4odGhpcy5jb25maWcuZGVsaW1pdGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVXBkYXRlIHRoZSBvcHRpb25zIG9mIHRoZSBoaWRkZW4gaW5wdXRcbiAgICAgIHRoaXMucGFzc2VkRWxlbWVudC5vcHRpb25zID0gaXRlbXM7XG4gICAgfVxuICAgIHZhciBhZGRJdGVtVG9GcmFnbWVudCA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAvLyBDcmVhdGUgbmV3IGxpc3QgZWxlbWVudFxuICAgICAgdmFyIGxpc3RJdGVtID0gX3RoaXMuX2dldFRlbXBsYXRlKCdpdGVtJywgaXRlbSwgcmVtb3ZlSXRlbUJ1dHRvbik7XG4gICAgICAvLyBBcHBlbmQgaXQgdG8gbGlzdFxuICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH07XG4gICAgLy8gQWRkIGVhY2ggbGlzdCBpdGVtIHRvIGxpc3RcbiAgICBpdGVtcy5mb3JFYWNoKGFkZEl0ZW1Ub0ZyYWdtZW50KTtcbiAgICByZXR1cm4gZnJhZ21lbnQ7XG4gIH07XG4gIENob2ljZXMucHJvdG90eXBlLl90cmlnZ2VyQ2hhbmdlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wYXNzZWRFbGVtZW50LnRyaWdnZXJFdmVudChjb25zdGFudHNfMS5FVkVOVFMuY2hhbmdlLCB7XG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9KTtcbiAgfTtcbiAgQ2hvaWNlcy5wcm90b3R5cGUuX3NlbGVjdFBsYWNlaG9sZGVyQ2hvaWNlID0gZnVuY3Rpb24gKHBsYWNlaG9sZGVyQ2hvaWNlKSB7XG4gICAgdGhpcy5fYWRkSXRlbSh7XG4gICAgICB2YWx1ZTogcGxhY2Vob2xkZXJDaG9pY2UudmFsdWUsXG4gICAgICBsYWJlbDogcGxhY2Vob2xkZXJDaG9pY2UubGFiZWwsXG4gICAgICBjaG9pY2VJZDogcGxhY2Vob2xkZXJDaG9pY2UuaWQsXG4gICAgICBncm91cElkOiBwbGFjZWhvbGRlckNob2ljZS5ncm91cElkLFxuICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyQ2hvaWNlLnBsYWNlaG9sZGVyXG4gICAgfSk7XG4gICAgdGhpcy5fdHJpZ2dlckNoYW5nZShwbGFjZWhvbGRlckNob2ljZS52YWx1ZSk7XG4gIH07XG4gIENob2ljZXMucHJvdG90eXBlLl9oYW5kbGVCdXR0b25BY3Rpb24gPSBmdW5jdGlvbiAoYWN0aXZlSXRlbXMsIGVsZW1lbnQpIHtcbiAgICBpZiAoIWFjdGl2ZUl0ZW1zIHx8ICFlbGVtZW50IHx8ICF0aGlzLmNvbmZpZy5yZW1vdmVJdGVtcyB8fCAhdGhpcy5jb25maWcucmVtb3ZlSXRlbUJ1dHRvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgaXRlbUlkID0gZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS5kYXRhc2V0LmlkO1xuICAgIHZhciBpdGVtVG9SZW1vdmUgPSBpdGVtSWQgJiYgYWN0aXZlSXRlbXMuZmluZChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0uaWQgPT09IHBhcnNlSW50KGl0ZW1JZCwgMTApO1xuICAgIH0pO1xuICAgIGlmICghaXRlbVRvUmVtb3ZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFJlbW92ZSBpdGVtIGFzc29jaWF0ZWQgd2l0aCBidXR0b25cbiAgICB0aGlzLl9yZW1vdmVJdGVtKGl0ZW1Ub1JlbW92ZSk7XG4gICAgdGhpcy5fdHJpZ2dlckNoYW5nZShpdGVtVG9SZW1vdmUudmFsdWUpO1xuICAgIGlmICh0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQgJiYgdGhpcy5fc3RvcmUucGxhY2Vob2xkZXJDaG9pY2UpIHtcbiAgICAgIHRoaXMuX3NlbGVjdFBsYWNlaG9sZGVyQ2hvaWNlKHRoaXMuX3N0b3JlLnBsYWNlaG9sZGVyQ2hvaWNlKTtcbiAgICB9XG4gIH07XG4gIENob2ljZXMucHJvdG90eXBlLl9oYW5kbGVJdGVtQWN0aW9uID0gZnVuY3Rpb24gKGFjdGl2ZUl0ZW1zLCBlbGVtZW50LCBoYXNTaGlmdEtleSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgaWYgKGhhc1NoaWZ0S2V5ID09PSB2b2lkIDApIHtcbiAgICAgIGhhc1NoaWZ0S2V5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICghYWN0aXZlSXRlbXMgfHwgIWVsZW1lbnQgfHwgIXRoaXMuY29uZmlnLnJlbW92ZUl0ZW1zIHx8IHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgcGFzc2VkSWQgPSBlbGVtZW50LmRhdGFzZXQuaWQ7XG4gICAgLy8gV2Ugb25seSB3YW50IHRvIHNlbGVjdCBvbmUgaXRlbSB3aXRoIGEgY2xpY2tcbiAgICAvLyBzbyB3ZSBkZXNlbGVjdCBhbnkgaXRlbXMgdGhhdCBhcmVuJ3QgdGhlIHRhcmdldFxuICAgIC8vIHVubGVzcyBzaGlmdCBpcyBiZWluZyBwcmVzc2VkXG4gICAgYWN0aXZlSXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgaWYgKGl0ZW0uaWQgPT09IHBhcnNlSW50KFwiXCIuY29uY2F0KHBhc3NlZElkKSwgMTApICYmICFpdGVtLmhpZ2hsaWdodGVkKSB7XG4gICAgICAgIF90aGlzLmhpZ2hsaWdodEl0ZW0oaXRlbSk7XG4gICAgICB9IGVsc2UgaWYgKCFoYXNTaGlmdEtleSAmJiBpdGVtLmhpZ2hsaWdodGVkKSB7XG4gICAgICAgIF90aGlzLnVuaGlnaGxpZ2h0SXRlbShpdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBGb2N1cyBpbnB1dCBhcyB3aXRob3V0IGZvY3VzLCBhIHVzZXIgY2Fubm90IGRvIGFueXRoaW5nIHdpdGggYVxuICAgIC8vIGhpZ2hsaWdodGVkIGl0ZW1cbiAgICB0aGlzLmlucHV0LmZvY3VzKCk7XG4gIH07XG4gIENob2ljZXMucHJvdG90eXBlLl9oYW5kbGVDaG9pY2VBY3Rpb24gPSBmdW5jdGlvbiAoYWN0aXZlSXRlbXMsIGVsZW1lbnQpIHtcbiAgICBpZiAoIWFjdGl2ZUl0ZW1zIHx8ICFlbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIElmIHdlIGFyZSBjbGlja2luZyBvbiBhbiBvcHRpb25cbiAgICB2YXIgaWQgPSBlbGVtZW50LmRhdGFzZXQuaWQ7XG4gICAgdmFyIGNob2ljZSA9IGlkICYmIHRoaXMuX3N0b3JlLmdldENob2ljZUJ5SWQoaWQpO1xuICAgIGlmICghY2hvaWNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBwYXNzZWRLZXlDb2RlID0gYWN0aXZlSXRlbXNbMF0gJiYgYWN0aXZlSXRlbXNbMF0ua2V5Q29kZSA/IGFjdGl2ZUl0ZW1zWzBdLmtleUNvZGUgOiB1bmRlZmluZWQ7XG4gICAgdmFyIGhhc0FjdGl2ZURyb3Bkb3duID0gdGhpcy5kcm9wZG93bi5pc0FjdGl2ZTtcbiAgICAvLyBVcGRhdGUgY2hvaWNlIGtleUNvZGVcbiAgICBjaG9pY2Uua2V5Q29kZSA9IHBhc3NlZEtleUNvZGU7XG4gICAgdGhpcy5wYXNzZWRFbGVtZW50LnRyaWdnZXJFdmVudChjb25zdGFudHNfMS5FVkVOVFMuY2hvaWNlLCB7XG4gICAgICBjaG9pY2U6IGNob2ljZVxuICAgIH0pO1xuICAgIGlmICghY2hvaWNlLnNlbGVjdGVkICYmICFjaG9pY2UuZGlzYWJsZWQpIHtcbiAgICAgIHZhciBjYW5BZGRJdGVtID0gdGhpcy5fY2FuQWRkSXRlbShhY3RpdmVJdGVtcywgY2hvaWNlLnZhbHVlKTtcbiAgICAgIGlmIChjYW5BZGRJdGVtLnJlc3BvbnNlKSB7XG4gICAgICAgIHRoaXMuX2FkZEl0ZW0oe1xuICAgICAgICAgIHZhbHVlOiBjaG9pY2UudmFsdWUsXG4gICAgICAgICAgbGFiZWw6IGNob2ljZS5sYWJlbCxcbiAgICAgICAgICBjaG9pY2VJZDogY2hvaWNlLmlkLFxuICAgICAgICAgIGdyb3VwSWQ6IGNob2ljZS5ncm91cElkLFxuICAgICAgICAgIGN1c3RvbVByb3BlcnRpZXM6IGNob2ljZS5jdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBjaG9pY2UucGxhY2Vob2xkZXIsXG4gICAgICAgICAga2V5Q29kZTogY2hvaWNlLmtleUNvZGVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJDaGFuZ2UoY2hvaWNlLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jbGVhcklucHV0KCk7XG4gICAgLy8gV2Ugd2FudCB0byBjbG9zZSB0aGUgZHJvcGRvd24gaWYgd2UgYXJlIGRlYWxpbmcgd2l0aCBhIHNpbmdsZSBzZWxlY3QgYm94XG4gICAgaWYgKGhhc0FjdGl2ZURyb3Bkb3duICYmIHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgdGhpcy5oaWRlRHJvcGRvd24odHJ1ZSk7XG4gICAgICB0aGlzLmNvbnRhaW5lck91dGVyLmZvY3VzKCk7XG4gICAgfVxuICB9O1xuICBDaG9pY2VzLnByb3RvdHlwZS5faGFuZGxlQmFja3NwYWNlID0gZnVuY3Rpb24gKGFjdGl2ZUl0ZW1zKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5yZW1vdmVJdGVtcyB8fCAhYWN0aXZlSXRlbXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGxhc3RJdGVtID0gYWN0aXZlSXRlbXNbYWN0aXZlSXRlbXMubGVuZ3RoIC0gMV07XG4gICAgdmFyIGhhc0hpZ2hsaWdodGVkSXRlbXMgPSBhY3RpdmVJdGVtcy5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbS5oaWdobGlnaHRlZDtcbiAgICB9KTtcbiAgICAvLyBJZiBlZGl0aW5nIHRoZSBsYXN0IGl0ZW0gaXMgYWxsb3dlZCBhbmQgdGhlcmUgYXJlIG5vdCBvdGhlciBzZWxlY3RlZCBpdGVtcyxcbiAgICAvLyB3ZSBjYW4gZWRpdCB0aGUgaXRlbSB2YWx1ZS4gT3RoZXJ3aXNlIGlmIHdlIGNhbiByZW1vdmUgaXRlbXMsIHJlbW92ZSBhbGwgc2VsZWN0ZWQgaXRlbXNcbiAgICBpZiAodGhpcy5jb25maWcuZWRpdEl0ZW1zICYmICFoYXNIaWdobGlnaHRlZEl0ZW1zICYmIGxhc3RJdGVtKSB7XG4gICAgICB0aGlzLmlucHV0LnZhbHVlID0gbGFzdEl0ZW0udmFsdWU7XG4gICAgICB0aGlzLmlucHV0LnNldFdpZHRoKCk7XG4gICAgICB0aGlzLl9yZW1vdmVJdGVtKGxhc3RJdGVtKTtcbiAgICAgIHRoaXMuX3RyaWdnZXJDaGFuZ2UobGFzdEl0ZW0udmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWhhc0hpZ2hsaWdodGVkSXRlbXMpIHtcbiAgICAgICAgLy8gSGlnaGxpZ2h0IGxhc3QgaXRlbSBpZiBub25lIGFscmVhZHkgaGlnaGxpZ2h0ZWRcbiAgICAgICAgdGhpcy5oaWdobGlnaHRJdGVtKGxhc3RJdGVtLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlbW92ZUhpZ2hsaWdodGVkSXRlbXModHJ1ZSk7XG4gICAgfVxuICB9O1xuICBDaG9pY2VzLnByb3RvdHlwZS5fc3RhcnRMb2FkaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKCgwLCBtaXNjXzEuc2V0SXNMb2FkaW5nKSh0cnVlKSk7XG4gIH07XG4gIENob2ljZXMucHJvdG90eXBlLl9zdG9wTG9hZGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCgoMCwgbWlzY18xLnNldElzTG9hZGluZykoZmFsc2UpKTtcbiAgfTtcbiAgQ2hvaWNlcy5wcm90b3R5cGUuX2hhbmRsZUxvYWRpbmdTdGF0ZSA9IGZ1bmN0aW9uIChzZXRMb2FkaW5nKSB7XG4gICAgaWYgKHNldExvYWRpbmcgPT09IHZvaWQgMCkge1xuICAgICAgc2V0TG9hZGluZyA9IHRydWU7XG4gICAgfVxuICAgIHZhciBwbGFjZWhvbGRlckl0ZW0gPSB0aGlzLml0ZW1MaXN0LmdldENoaWxkKFwiLlwiLmNvbmNhdCh0aGlzLmNvbmZpZy5jbGFzc05hbWVzLnBsYWNlaG9sZGVyKSk7XG4gICAgaWYgKHNldExvYWRpbmcpIHtcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgICAgdGhpcy5jb250YWluZXJPdXRlci5hZGRMb2FkaW5nU3RhdGUoKTtcbiAgICAgIGlmICh0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFwbGFjZWhvbGRlckl0ZW0pIHtcbiAgICAgICAgICBwbGFjZWhvbGRlckl0ZW0gPSB0aGlzLl9nZXRUZW1wbGF0ZSgncGxhY2Vob2xkZXInLCB0aGlzLmNvbmZpZy5sb2FkaW5nVGV4dCk7XG4gICAgICAgICAgaWYgKHBsYWNlaG9sZGVySXRlbSkge1xuICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5hcHBlbmQocGxhY2Vob2xkZXJJdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGxhY2Vob2xkZXJJdGVtLmlubmVySFRNTCA9IHRoaXMuY29uZmlnLmxvYWRpbmdUZXh0O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlucHV0LnBsYWNlaG9sZGVyID0gdGhpcy5jb25maWcubG9hZGluZ1RleHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW5hYmxlKCk7XG4gICAgICB0aGlzLmNvbnRhaW5lck91dGVyLnJlbW92ZUxvYWRpbmdTdGF0ZSgpO1xuICAgICAgaWYgKHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgICBpZiAocGxhY2Vob2xkZXJJdGVtKSB7XG4gICAgICAgICAgcGxhY2Vob2xkZXJJdGVtLmlubmVySFRNTCA9IHRoaXMuX3BsYWNlaG9sZGVyVmFsdWUgfHwgJyc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaW5wdXQucGxhY2Vob2xkZXIgPSB0aGlzLl9wbGFjZWhvbGRlclZhbHVlIHx8ICcnO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgQ2hvaWNlcy5wcm90b3R5cGUuX2hhbmRsZVNlYXJjaCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICghdGhpcy5pbnB1dC5pc0ZvY3Vzc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBjaG9pY2VzID0gdGhpcy5fc3RvcmUuY2hvaWNlcztcbiAgICB2YXIgX2EgPSB0aGlzLmNvbmZpZyxcbiAgICAgIHNlYXJjaEZsb29yID0gX2Euc2VhcmNoRmxvb3IsXG4gICAgICBzZWFyY2hDaG9pY2VzID0gX2Euc2VhcmNoQ2hvaWNlcztcbiAgICB2YXIgaGFzVW5hY3RpdmVDaG9pY2VzID0gY2hvaWNlcy5zb21lKGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgIHJldHVybiAhb3B0aW9uLmFjdGl2ZTtcbiAgICB9KTtcbiAgICAvLyBDaGVjayB0aGF0IHdlIGhhdmUgYSB2YWx1ZSB0byBzZWFyY2ggYW5kIHRoZSBpbnB1dCB3YXMgYW4gYWxwaGFudW1lcmljIGNoYXJhY3RlclxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlLmxlbmd0aCA+PSBzZWFyY2hGbG9vcikge1xuICAgICAgdmFyIHJlc3VsdENvdW50ID0gc2VhcmNoQ2hvaWNlcyA/IHRoaXMuX3NlYXJjaENob2ljZXModmFsdWUpIDogMDtcbiAgICAgIC8vIFRyaWdnZXIgc2VhcmNoIGV2ZW50XG4gICAgICB0aGlzLnBhc3NlZEVsZW1lbnQudHJpZ2dlckV2ZW50KGNvbnN0YW50c18xLkVWRU5UUy5zZWFyY2gsIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICByZXN1bHRDb3VudDogcmVzdWx0Q291bnRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaGFzVW5hY3RpdmVDaG9pY2VzKSB7XG4gICAgICAvLyBPdGhlcndpc2UgcmVzZXQgY2hvaWNlcyB0byBhY3RpdmVcbiAgICAgIHRoaXMuX2lzU2VhcmNoaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCgoMCwgY2hvaWNlc18xLmFjdGl2YXRlQ2hvaWNlcykodHJ1ZSkpO1xuICAgIH1cbiAgfTtcbiAgQ2hvaWNlcy5wcm90b3R5cGUuX2NhbkFkZEl0ZW0gPSBmdW5jdGlvbiAoYWN0aXZlSXRlbXMsIHZhbHVlKSB7XG4gICAgdmFyIGNhbkFkZEl0ZW0gPSB0cnVlO1xuICAgIHZhciBub3RpY2UgPSB0eXBlb2YgdGhpcy5jb25maWcuYWRkSXRlbVRleHQgPT09ICdmdW5jdGlvbicgPyB0aGlzLmNvbmZpZy5hZGRJdGVtVGV4dCh2YWx1ZSkgOiB0aGlzLmNvbmZpZy5hZGRJdGVtVGV4dDtcbiAgICBpZiAoIXRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgdmFyIGlzRHVwbGljYXRlVmFsdWUgPSAoMCwgdXRpbHNfMS5leGlzdHNJbkFycmF5KShhY3RpdmVJdGVtcywgdmFsdWUpO1xuICAgICAgaWYgKHRoaXMuY29uZmlnLm1heEl0ZW1Db3VudCA+IDAgJiYgdGhpcy5jb25maWcubWF4SXRlbUNvdW50IDw9IGFjdGl2ZUl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIG1heCBlbnRyeSBsaW1pdCBhbmQgd2UgaGF2ZSByZWFjaGVkIHRoYXQgbGltaXRcbiAgICAgICAgLy8gZG9uJ3QgdXBkYXRlXG4gICAgICAgIGNhbkFkZEl0ZW0gPSBmYWxzZTtcbiAgICAgICAgbm90aWNlID0gdHlwZW9mIHRoaXMuY29uZmlnLm1heEl0ZW1UZXh0ID09PSAnZnVuY3Rpb24nID8gdGhpcy5jb25maWcubWF4SXRlbVRleHQodGhpcy5jb25maWcubWF4SXRlbUNvdW50KSA6IHRoaXMuY29uZmlnLm1heEl0ZW1UZXh0O1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmNvbmZpZy5kdXBsaWNhdGVJdGVtc0FsbG93ZWQgJiYgaXNEdXBsaWNhdGVWYWx1ZSAmJiBjYW5BZGRJdGVtKSB7XG4gICAgICAgIGNhbkFkZEl0ZW0gPSBmYWxzZTtcbiAgICAgICAgbm90aWNlID0gdHlwZW9mIHRoaXMuY29uZmlnLnVuaXF1ZUl0ZW1UZXh0ID09PSAnZnVuY3Rpb24nID8gdGhpcy5jb25maWcudW5pcXVlSXRlbVRleHQodmFsdWUpIDogdGhpcy5jb25maWcudW5pcXVlSXRlbVRleHQ7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5faXNUZXh0RWxlbWVudCAmJiB0aGlzLmNvbmZpZy5hZGRJdGVtcyAmJiBjYW5BZGRJdGVtICYmIHR5cGVvZiB0aGlzLmNvbmZpZy5hZGRJdGVtRmlsdGVyID09PSAnZnVuY3Rpb24nICYmICF0aGlzLmNvbmZpZy5hZGRJdGVtRmlsdGVyKHZhbHVlKSkge1xuICAgICAgICBjYW5BZGRJdGVtID0gZmFsc2U7XG4gICAgICAgIG5vdGljZSA9IHR5cGVvZiB0aGlzLmNvbmZpZy5jdXN0b21BZGRJdGVtVGV4dCA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuY29uZmlnLmN1c3RvbUFkZEl0ZW1UZXh0KHZhbHVlKSA6IHRoaXMuY29uZmlnLmN1c3RvbUFkZEl0ZW1UZXh0O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgcmVzcG9uc2U6IGNhbkFkZEl0ZW0sXG4gICAgICBub3RpY2U6IG5vdGljZVxuICAgIH07XG4gIH07XG4gIENob2ljZXMucHJvdG90eXBlLl9zZWFyY2hDaG9pY2VzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIG5ld1ZhbHVlID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlLnRyaW0oKSA6IHZhbHVlO1xuICAgIHZhciBjdXJyZW50VmFsdWUgPSB0eXBlb2YgdGhpcy5fY3VycmVudFZhbHVlID09PSAnc3RyaW5nJyA/IHRoaXMuX2N1cnJlbnRWYWx1ZS50cmltKCkgOiB0aGlzLl9jdXJyZW50VmFsdWU7XG4gICAgaWYgKG5ld1ZhbHVlLmxlbmd0aCA8IDEgJiYgbmV3VmFsdWUgPT09IFwiXCIuY29uY2F0KGN1cnJlbnRWYWx1ZSwgXCIgXCIpKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgLy8gSWYgbmV3IHZhbHVlIG1hdGNoZXMgdGhlIGRlc2lyZWQgbGVuZ3RoIGFuZCBpcyBub3QgdGhlIHNhbWUgYXMgdGhlIGN1cnJlbnQgdmFsdWUgd2l0aCBhIHNwYWNlXG4gICAgdmFyIGhheXN0YWNrID0gdGhpcy5fc3RvcmUuc2VhcmNoYWJsZUNob2ljZXM7XG4gICAgdmFyIG5lZWRsZSA9IG5ld1ZhbHVlO1xuICAgIHZhciBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLmNvbmZpZy5mdXNlT3B0aW9ucywge1xuICAgICAga2V5czogX19zcHJlYWRBcnJheShbXSwgdGhpcy5jb25maWcuc2VhcmNoRmllbGRzLCB0cnVlKSxcbiAgICAgIGluY2x1ZGVNYXRjaGVzOiB0cnVlXG4gICAgfSk7XG4gICAgdmFyIGZ1c2UgPSBuZXcgZnVzZV9qc18xLmRlZmF1bHQoaGF5c3RhY2ssIG9wdGlvbnMpO1xuICAgIHZhciByZXN1bHRzID0gZnVzZS5zZWFyY2gobmVlZGxlKTsgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9rcmlzay9GdXNlL2lzc3Vlcy8zMDNcbiAgICB0aGlzLl9jdXJyZW50VmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB0aGlzLl9oaWdobGlnaHRQb3NpdGlvbiA9IDA7XG4gICAgdGhpcy5faXNTZWFyY2hpbmcgPSB0cnVlO1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKCgwLCBjaG9pY2VzXzEuZmlsdGVyQ2hvaWNlcykocmVzdWx0cykpO1xuICAgIHJldHVybiByZXN1bHRzLmxlbmd0aDtcbiAgfTtcbiAgQ2hvaWNlcy5wcm90b3R5cGUuX2FkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBkb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgLy8gY2FwdHVyZSBldmVudHMgLSBjYW4gY2FuY2VsIGV2ZW50IHByb2Nlc3Npbmcgb3IgcHJvcGFnYXRpb25cbiAgICBkb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLl9vblRvdWNoRW5kLCB0cnVlKTtcbiAgICB0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5RG93biwgdHJ1ZSk7XG4gICAgdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuX29uTW91c2VEb3duLCB0cnVlKTtcbiAgICAvLyBwYXNzaXZlIGV2ZW50cyAtIGRvZXNuJ3QgY2FsbCBgcHJldmVudERlZmF1bHRgIG9yIGBzdG9wUHJvcGFnYXRpb25gXG4gICAgZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fb25DbGljaywge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuICAgIGRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMuZHJvcGRvd24uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLl9vbk1vdXNlT3Zlciwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuICAgIGlmICh0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyT3V0ZXIuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX29uRm9jdXMsIHtcbiAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX29uQmx1ciwge1xuICAgICAgICBwYXNzaXZlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5pbnB1dC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5fb25LZXlVcCwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMuaW5wdXQuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX29uRm9jdXMsIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLmlucHV0LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX29uQmx1ciwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuICAgIGlmICh0aGlzLmlucHV0LmVsZW1lbnQuZm9ybSkge1xuICAgICAgdGhpcy5pbnB1dC5lbGVtZW50LmZvcm0uYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCB0aGlzLl9vbkZvcm1SZXNldCwge1xuICAgICAgICBwYXNzaXZlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVycygpO1xuICB9O1xuICBDaG9pY2VzLnByb3RvdHlwZS5fcmVtb3ZlRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICBkb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLl9vblRvdWNoRW5kLCB0cnVlKTtcbiAgICB0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5RG93biwgdHJ1ZSk7XG4gICAgdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuX29uTW91c2VEb3duLCB0cnVlKTtcbiAgICBkb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vbkNsaWNrKTtcbiAgICBkb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUpO1xuICAgIHRoaXMuZHJvcGRvd24uZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLl9vbk1vdXNlT3Zlcik7XG4gICAgaWYgKHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5fb25Gb2N1cyk7XG4gICAgICB0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX29uQmx1cik7XG4gICAgfVxuICAgIHRoaXMuaW5wdXQuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX29uS2V5VXApO1xuICAgIHRoaXMuaW5wdXQuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX29uRm9jdXMpO1xuICAgIHRoaXMuaW5wdXQuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5fb25CbHVyKTtcbiAgICBpZiAodGhpcy5pbnB1dC5lbGVtZW50LmZvcm0pIHtcbiAgICAgIHRoaXMuaW5wdXQuZWxlbWVudC5mb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2V0JywgdGhpcy5fb25Gb3JtUmVzZXQpO1xuICAgIH1cbiAgICB0aGlzLmlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gIH07XG4gIENob2ljZXMucHJvdG90eXBlLl9vbktleURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG4gICAgdmFyIGFjdGl2ZUl0ZW1zID0gdGhpcy5fc3RvcmUuYWN0aXZlSXRlbXM7XG4gICAgdmFyIGhhc0ZvY3VzZWRJbnB1dCA9IHRoaXMuaW5wdXQuaXNGb2N1c3NlZDtcbiAgICB2YXIgaGFzQWN0aXZlRHJvcGRvd24gPSB0aGlzLmRyb3Bkb3duLmlzQWN0aXZlO1xuICAgIHZhciBoYXNJdGVtcyA9IHRoaXMuaXRlbUxpc3QuaGFzQ2hpbGRyZW4oKTtcbiAgICB2YXIga2V5U3RyaW5nID0gU3RyaW5nLmZyb21DaGFyQ29kZShrZXlDb2RlKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udHJvbC1yZWdleFxuICAgIHZhciB3YXNQcmludGFibGVDaGFyID0gL1teXFx4MDAtXFx4MUZdLy50ZXN0KGtleVN0cmluZyk7XG4gICAgdmFyIEJBQ0tfS0VZID0gY29uc3RhbnRzXzEuS0VZX0NPREVTLkJBQ0tfS0VZLFxuICAgICAgREVMRVRFX0tFWSA9IGNvbnN0YW50c18xLktFWV9DT0RFUy5ERUxFVEVfS0VZLFxuICAgICAgRU5URVJfS0VZID0gY29uc3RhbnRzXzEuS0VZX0NPREVTLkVOVEVSX0tFWSxcbiAgICAgIEFfS0VZID0gY29uc3RhbnRzXzEuS0VZX0NPREVTLkFfS0VZLFxuICAgICAgRVNDX0tFWSA9IGNvbnN0YW50c18xLktFWV9DT0RFUy5FU0NfS0VZLFxuICAgICAgVVBfS0VZID0gY29uc3RhbnRzXzEuS0VZX0NPREVTLlVQX0tFWSxcbiAgICAgIERPV05fS0VZID0gY29uc3RhbnRzXzEuS0VZX0NPREVTLkRPV05fS0VZLFxuICAgICAgUEFHRV9VUF9LRVkgPSBjb25zdGFudHNfMS5LRVlfQ09ERVMuUEFHRV9VUF9LRVksXG4gICAgICBQQUdFX0RPV05fS0VZID0gY29uc3RhbnRzXzEuS0VZX0NPREVTLlBBR0VfRE9XTl9LRVk7XG4gICAgaWYgKCF0aGlzLl9pc1RleHRFbGVtZW50ICYmICFoYXNBY3RpdmVEcm9wZG93biAmJiB3YXNQcmludGFibGVDaGFyKSB7XG4gICAgICB0aGlzLnNob3dEcm9wZG93bigpO1xuICAgICAgaWYgKCF0aGlzLmlucHV0LmlzRm9jdXNzZWQpIHtcbiAgICAgICAgLypcbiAgICAgICAgICBXZSB1cGRhdGUgdGhlIGlucHV0IHZhbHVlIHdpdGggdGhlIHByZXNzZWQga2V5IGFzXG4gICAgICAgICAgdGhlIGlucHV0IHdhcyBub3QgZm9jdXNzZWQgYXQgdGhlIHRpbWUgb2Yga2V5IHByZXNzXG4gICAgICAgICAgdGhlcmVmb3JlIGRvZXMgbm90IGhhdmUgdGhlIHZhbHVlIG9mIHRoZSBrZXkuXG4gICAgICAgICovXG4gICAgICAgIHRoaXMuaW5wdXQudmFsdWUgKz0gZXZlbnQua2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgY2FzZSBBX0tFWTpcbiAgICAgICAgcmV0dXJuIHRoaXMuX29uU2VsZWN0S2V5KGV2ZW50LCBoYXNJdGVtcyk7XG4gICAgICBjYXNlIEVOVEVSX0tFWTpcbiAgICAgICAgcmV0dXJuIHRoaXMuX29uRW50ZXJLZXkoZXZlbnQsIGFjdGl2ZUl0ZW1zLCBoYXNBY3RpdmVEcm9wZG93bik7XG4gICAgICBjYXNlIEVTQ19LRVk6XG4gICAgICAgIHJldHVybiB0aGlzLl9vbkVzY2FwZUtleShoYXNBY3RpdmVEcm9wZG93bik7XG4gICAgICBjYXNlIFVQX0tFWTpcbiAgICAgIGNhc2UgUEFHRV9VUF9LRVk6XG4gICAgICBjYXNlIERPV05fS0VZOlxuICAgICAgY2FzZSBQQUdFX0RPV05fS0VZOlxuICAgICAgICByZXR1cm4gdGhpcy5fb25EaXJlY3Rpb25LZXkoZXZlbnQsIGhhc0FjdGl2ZURyb3Bkb3duKTtcbiAgICAgIGNhc2UgREVMRVRFX0tFWTpcbiAgICAgIGNhc2UgQkFDS19LRVk6XG4gICAgICAgIHJldHVybiB0aGlzLl9vbkRlbGV0ZUtleShldmVudCwgYWN0aXZlSXRlbXMsIGhhc0ZvY3VzZWRJbnB1dCk7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfTtcbiAgQ2hvaWNlcy5wcm90b3R5cGUuX29uS2V5VXAgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgdGFyZ2V0ID0gX2EudGFyZ2V0LFxuICAgICAga2V5Q29kZSA9IF9hLmtleUNvZGU7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZTtcbiAgICB2YXIgYWN0aXZlSXRlbXMgPSB0aGlzLl9zdG9yZS5hY3RpdmVJdGVtcztcbiAgICB2YXIgY2FuQWRkSXRlbSA9IHRoaXMuX2NhbkFkZEl0ZW0oYWN0aXZlSXRlbXMsIHZhbHVlKTtcbiAgICB2YXIgYmFja0tleSA9IGNvbnN0YW50c18xLktFWV9DT0RFUy5CQUNLX0tFWSxcbiAgICAgIGRlbGV0ZUtleSA9IGNvbnN0YW50c18xLktFWV9DT0RFUy5ERUxFVEVfS0VZO1xuICAgIC8vIFdlIGFyZSB0eXBpbmcgaW50byBhIHRleHQgaW5wdXQgYW5kIGhhdmUgYSB2YWx1ZSwgd2Ugd2FudCB0byBzaG93IGEgZHJvcGRvd25cbiAgICAvLyBub3RpY2UuIE90aGVyd2lzZSBoaWRlIHRoZSBkcm9wZG93blxuICAgIGlmICh0aGlzLl9pc1RleHRFbGVtZW50KSB7XG4gICAgICB2YXIgY2FuU2hvd0Ryb3Bkb3duTm90aWNlID0gY2FuQWRkSXRlbS5ub3RpY2UgJiYgdmFsdWU7XG4gICAgICBpZiAoY2FuU2hvd0Ryb3Bkb3duTm90aWNlKSB7XG4gICAgICAgIHZhciBkcm9wZG93bkl0ZW0gPSB0aGlzLl9nZXRUZW1wbGF0ZSgnbm90aWNlJywgY2FuQWRkSXRlbS5ub3RpY2UpO1xuICAgICAgICB0aGlzLmRyb3Bkb3duLmVsZW1lbnQuaW5uZXJIVE1MID0gZHJvcGRvd25JdGVtLm91dGVySFRNTDtcbiAgICAgICAgdGhpcy5zaG93RHJvcGRvd24odHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVEcm9wZG93bih0cnVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHdhc1JlbW92YWxLZXlDb2RlID0ga2V5Q29kZSA9PT0gYmFja0tleSB8fCBrZXlDb2RlID09PSBkZWxldGVLZXk7XG4gICAgICB2YXIgdXNlckhhc1JlbW92ZWRWYWx1ZSA9IHdhc1JlbW92YWxLZXlDb2RlICYmIHRhcmdldCAmJiAhdGFyZ2V0LnZhbHVlO1xuICAgICAgdmFyIGNhblJlYWN0aXZhdGVDaG9pY2VzID0gIXRoaXMuX2lzVGV4dEVsZW1lbnQgJiYgdGhpcy5faXNTZWFyY2hpbmc7XG4gICAgICB2YXIgY2FuU2VhcmNoID0gdGhpcy5fY2FuU2VhcmNoICYmIGNhbkFkZEl0ZW0ucmVzcG9uc2U7XG4gICAgICBpZiAodXNlckhhc1JlbW92ZWRWYWx1ZSAmJiBjYW5SZWFjdGl2YXRlQ2hvaWNlcykge1xuICAgICAgICB0aGlzLl9pc1NlYXJjaGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCgoMCwgY2hvaWNlc18xLmFjdGl2YXRlQ2hvaWNlcykodHJ1ZSkpO1xuICAgICAgfSBlbHNlIGlmIChjYW5TZWFyY2gpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlU2VhcmNoKHRoaXMuaW5wdXQucmF3VmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9jYW5TZWFyY2ggPSB0aGlzLmNvbmZpZy5zZWFyY2hFbmFibGVkO1xuICB9O1xuICBDaG9pY2VzLnByb3RvdHlwZS5fb25TZWxlY3RLZXkgPSBmdW5jdGlvbiAoZXZlbnQsIGhhc0l0ZW1zKSB7XG4gICAgdmFyIGN0cmxLZXkgPSBldmVudC5jdHJsS2V5LFxuICAgICAgbWV0YUtleSA9IGV2ZW50Lm1ldGFLZXk7XG4gICAgdmFyIGhhc0N0cmxEb3duS2V5UHJlc3NlZCA9IGN0cmxLZXkgfHwgbWV0YUtleTtcbiAgICAvLyBJZiBDVFJMICsgQSBvciBDTUQgKyBBIGhhdmUgYmVlbiBwcmVzc2VkIGFuZCB0aGVyZSBhcmUgaXRlbXMgdG8gc2VsZWN0XG4gICAgaWYgKGhhc0N0cmxEb3duS2V5UHJlc3NlZCAmJiBoYXNJdGVtcykge1xuICAgICAgdGhpcy5fY2FuU2VhcmNoID0gZmFsc2U7XG4gICAgICB2YXIgc2hvdWxkSGlnaHRsaWdodEFsbCA9IHRoaXMuY29uZmlnLnJlbW92ZUl0ZW1zICYmICF0aGlzLmlucHV0LnZhbHVlICYmIHRoaXMuaW5wdXQuZWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgIGlmIChzaG91bGRIaWdodGxpZ2h0QWxsKSB7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0QWxsKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBDaG9pY2VzLnByb3RvdHlwZS5fb25FbnRlcktleSA9IGZ1bmN0aW9uIChldmVudCwgYWN0aXZlSXRlbXMsIGhhc0FjdGl2ZURyb3Bkb3duKSB7XG4gICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICB2YXIgZW50ZXJLZXkgPSBjb25zdGFudHNfMS5LRVlfQ09ERVMuRU5URVJfS0VZO1xuICAgIHZhciB0YXJnZXRXYXNCdXR0b24gPSB0YXJnZXQgJiYgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1idXR0b24nKTtcbiAgICBpZiAodGhpcy5faXNUZXh0RWxlbWVudCAmJiB0YXJnZXQgJiYgdGFyZ2V0LnZhbHVlKSB7XG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLmlucHV0LnZhbHVlO1xuICAgICAgdmFyIGNhbkFkZEl0ZW0gPSB0aGlzLl9jYW5BZGRJdGVtKGFjdGl2ZUl0ZW1zLCB2YWx1ZSk7XG4gICAgICBpZiAoY2FuQWRkSXRlbS5yZXNwb25zZSkge1xuICAgICAgICB0aGlzLmhpZGVEcm9wZG93bih0cnVlKTtcbiAgICAgICAgdGhpcy5fYWRkSXRlbSh7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl90cmlnZ2VyQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5jbGVhcklucHV0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0YXJnZXRXYXNCdXR0b24pIHtcbiAgICAgIHRoaXMuX2hhbmRsZUJ1dHRvbkFjdGlvbihhY3RpdmVJdGVtcywgdGFyZ2V0KTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGlmIChoYXNBY3RpdmVEcm9wZG93bikge1xuICAgICAgdmFyIGhpZ2hsaWdodGVkQ2hvaWNlID0gdGhpcy5kcm9wZG93bi5nZXRDaGlsZChcIi5cIi5jb25jYXQodGhpcy5jb25maWcuY2xhc3NOYW1lcy5oaWdobGlnaHRlZFN0YXRlKSk7XG4gICAgICBpZiAoaGlnaGxpZ2h0ZWRDaG9pY2UpIHtcbiAgICAgICAgLy8gYWRkIGVudGVyIGtleUNvZGUgdmFsdWVcbiAgICAgICAgaWYgKGFjdGl2ZUl0ZW1zWzBdKSB7XG4gICAgICAgICAgYWN0aXZlSXRlbXNbMF0ua2V5Q29kZSA9IGVudGVyS2V5OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9oYW5kbGVDaG9pY2VBY3Rpb24oYWN0aXZlSXRlbXMsIGhpZ2hsaWdodGVkQ2hvaWNlKTtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuc2hvd0Ryb3Bkb3duKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfTtcbiAgQ2hvaWNlcy5wcm90b3R5cGUuX29uRXNjYXBlS2V5ID0gZnVuY3Rpb24gKGhhc0FjdGl2ZURyb3Bkb3duKSB7XG4gICAgaWYgKGhhc0FjdGl2ZURyb3Bkb3duKSB7XG4gICAgICB0aGlzLmhpZGVEcm9wZG93bih0cnVlKTtcbiAgICAgIHRoaXMuY29udGFpbmVyT3V0ZXIuZm9jdXMoKTtcbiAgICB9XG4gIH07XG4gIENob2ljZXMucHJvdG90eXBlLl9vbkRpcmVjdGlvbktleSA9IGZ1bmN0aW9uIChldmVudCwgaGFzQWN0aXZlRHJvcGRvd24pIHtcbiAgICB2YXIga2V5Q29kZSA9IGV2ZW50LmtleUNvZGUsXG4gICAgICBtZXRhS2V5ID0gZXZlbnQubWV0YUtleTtcbiAgICB2YXIgZG93bktleSA9IGNvbnN0YW50c18xLktFWV9DT0RFUy5ET1dOX0tFWSxcbiAgICAgIHBhZ2VVcEtleSA9IGNvbnN0YW50c18xLktFWV9DT0RFUy5QQUdFX1VQX0tFWSxcbiAgICAgIHBhZ2VEb3duS2V5ID0gY29uc3RhbnRzXzEuS0VZX0NPREVTLlBBR0VfRE9XTl9LRVk7XG4gICAgLy8gSWYgdXAgb3IgZG93biBrZXkgaXMgcHJlc3NlZCwgdHJhdmVyc2UgdGhyb3VnaCBvcHRpb25zXG4gICAgaWYgKGhhc0FjdGl2ZURyb3Bkb3duIHx8IHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgdGhpcy5zaG93RHJvcGRvd24oKTtcbiAgICAgIHRoaXMuX2NhblNlYXJjaCA9IGZhbHNlO1xuICAgICAgdmFyIGRpcmVjdGlvbkludCA9IGtleUNvZGUgPT09IGRvd25LZXkgfHwga2V5Q29kZSA9PT0gcGFnZURvd25LZXkgPyAxIDogLTE7XG4gICAgICB2YXIgc2tpcEtleSA9IG1ldGFLZXkgfHwga2V5Q29kZSA9PT0gcGFnZURvd25LZXkgfHwga2V5Q29kZSA9PT0gcGFnZVVwS2V5O1xuICAgICAgdmFyIHNlbGVjdGFibGVDaG9pY2VJZGVudGlmaWVyID0gJ1tkYXRhLWNob2ljZS1zZWxlY3RhYmxlXSc7XG4gICAgICB2YXIgbmV4dEVsID0gdm9pZCAwO1xuICAgICAgaWYgKHNraXBLZXkpIHtcbiAgICAgICAgaWYgKGRpcmVjdGlvbkludCA+IDApIHtcbiAgICAgICAgICBuZXh0RWwgPSB0aGlzLmRyb3Bkb3duLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIlwiLmNvbmNhdChzZWxlY3RhYmxlQ2hvaWNlSWRlbnRpZmllciwgXCI6bGFzdC1vZi10eXBlXCIpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0RWwgPSB0aGlzLmRyb3Bkb3duLmVsZW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RhYmxlQ2hvaWNlSWRlbnRpZmllcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjdXJyZW50RWwgPSB0aGlzLmRyb3Bkb3duLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQodGhpcy5jb25maWcuY2xhc3NOYW1lcy5oaWdobGlnaHRlZFN0YXRlKSk7XG4gICAgICAgIGlmIChjdXJyZW50RWwpIHtcbiAgICAgICAgICBuZXh0RWwgPSAoMCwgdXRpbHNfMS5nZXRBZGphY2VudEVsKShjdXJyZW50RWwsIHNlbGVjdGFibGVDaG9pY2VJZGVudGlmaWVyLCBkaXJlY3Rpb25JbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5leHRFbCA9IHRoaXMuZHJvcGRvd24uZWxlbWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdGFibGVDaG9pY2VJZGVudGlmaWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG5leHRFbCkge1xuICAgICAgICAvLyBXZSBwcmV2ZW50IGRlZmF1bHQgdG8gc3RvcCB0aGUgY3Vyc29yIG1vdmluZ1xuICAgICAgICAvLyB3aGVuIHByZXNzaW5nIHRoZSBhcnJvd1xuICAgICAgICBpZiAoISgwLCB1dGlsc18xLmlzU2Nyb2xsZWRJbnRvVmlldykobmV4dEVsLCB0aGlzLmNob2ljZUxpc3QuZWxlbWVudCwgZGlyZWN0aW9uSW50KSkge1xuICAgICAgICAgIHRoaXMuY2hvaWNlTGlzdC5zY3JvbGxUb0NoaWxkRWxlbWVudChuZXh0RWwsIGRpcmVjdGlvbkludCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faGlnaGxpZ2h0Q2hvaWNlKG5leHRFbCk7XG4gICAgICB9XG4gICAgICAvLyBQcmV2ZW50IGRlZmF1bHQgdG8gbWFpbnRhaW4gY3Vyc29yIHBvc2l0aW9uIHdoaWxzdFxuICAgICAgLy8gdHJhdmVyc2luZyBkcm9wZG93biBvcHRpb25zXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfTtcbiAgQ2hvaWNlcy5wcm90b3R5cGUuX29uRGVsZXRlS2V5ID0gZnVuY3Rpb24gKGV2ZW50LCBhY3RpdmVJdGVtcywgaGFzRm9jdXNlZElucHV0KSB7XG4gICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAvLyBJZiBiYWNrc3BhY2Ugb3IgZGVsZXRlIGtleSBpcyBwcmVzc2VkIGFuZCB0aGUgaW5wdXQgaGFzIG5vIHZhbHVlXG4gICAgaWYgKCF0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQgJiYgIXRhcmdldC52YWx1ZSAmJiBoYXNGb2N1c2VkSW5wdXQpIHtcbiAgICAgIHRoaXMuX2hhbmRsZUJhY2tzcGFjZShhY3RpdmVJdGVtcyk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfTtcbiAgQ2hvaWNlcy5wcm90b3R5cGUuX29uVG91Y2hNb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl93YXNUYXApIHtcbiAgICAgIHRoaXMuX3dhc1RhcCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgQ2hvaWNlcy5wcm90b3R5cGUuX29uVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgdGFyZ2V0ID0gKGV2ZW50IHx8IGV2ZW50LnRvdWNoZXNbMF0pLnRhcmdldDtcbiAgICB2YXIgdG91Y2hXYXNXaXRoaW5Db250YWluZXIgPSB0aGlzLl93YXNUYXAgJiYgdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LmNvbnRhaW5zKHRhcmdldCk7XG4gICAgaWYgKHRvdWNoV2FzV2l0aGluQ29udGFpbmVyKSB7XG4gICAgICB2YXIgY29udGFpbmVyV2FzRXhhY3RUYXJnZXQgPSB0YXJnZXQgPT09IHRoaXMuY29udGFpbmVyT3V0ZXIuZWxlbWVudCB8fCB0YXJnZXQgPT09IHRoaXMuY29udGFpbmVySW5uZXIuZWxlbWVudDtcbiAgICAgIGlmIChjb250YWluZXJXYXNFeGFjdFRhcmdldCkge1xuICAgICAgICBpZiAodGhpcy5faXNUZXh0RWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9pc1NlbGVjdE11bHRpcGxlRWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuc2hvd0Ryb3Bkb3duKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIFByZXZlbnRzIGZvY3VzIGV2ZW50IGZpcmluZ1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIHRoaXMuX3dhc1RhcCA9IHRydWU7XG4gIH07XG4gIC8qKlxuICAgKiBIYW5kbGVzIG1vdXNlZG93biBldmVudCBpbiBjYXB0dXJlIG1vZGUgZm9yIGNvbnRhaW5ldE91dGVyLmVsZW1lbnRcbiAgICovXG4gIENob2ljZXMucHJvdG90eXBlLl9vbk1vdXNlRG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIElmIHdlIGhhdmUgb3VyIG1vdXNlIGRvd24gb24gdGhlIHNjcm9sbGJhciBhbmQgYXJlIG9uIElFMTEuLi5cbiAgICBpZiAoSVNfSUUxMSAmJiB0aGlzLmNob2ljZUxpc3QuZWxlbWVudC5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICAvLyBjaGVjayBpZiBjbGljayB3YXMgb24gYSBzY3JvbGxiYXIgYXJlYVxuICAgICAgdmFyIGZpcnN0Q2hvaWNlID0gdGhpcy5jaG9pY2VMaXN0LmVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICB2YXIgaXNPblNjcm9sbGJhciA9IHRoaXMuX2RpcmVjdGlvbiA9PT0gJ2x0cicgPyBldmVudC5vZmZzZXRYID49IGZpcnN0Q2hvaWNlLm9mZnNldFdpZHRoIDogZXZlbnQub2Zmc2V0WCA8IGZpcnN0Q2hvaWNlLm9mZnNldExlZnQ7XG4gICAgICB0aGlzLl9pc1Njcm9sbGluZ09uSWUgPSBpc09uU2Nyb2xsYmFyO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0ID09PSB0aGlzLmlucHV0LmVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGl0ZW0gPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtYnV0dG9uXSxbZGF0YS1pdGVtXSxbZGF0YS1jaG9pY2VdJyk7XG4gICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgdmFyIGhhc1NoaWZ0S2V5ID0gZXZlbnQuc2hpZnRLZXk7XG4gICAgICB2YXIgYWN0aXZlSXRlbXMgPSB0aGlzLl9zdG9yZS5hY3RpdmVJdGVtcztcbiAgICAgIHZhciBkYXRhc2V0ID0gaXRlbS5kYXRhc2V0O1xuICAgICAgaWYgKCdidXR0b24nIGluIGRhdGFzZXQpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlQnV0dG9uQWN0aW9uKGFjdGl2ZUl0ZW1zLCBpdGVtKTtcbiAgICAgIH0gZWxzZSBpZiAoJ2l0ZW0nIGluIGRhdGFzZXQpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlSXRlbUFjdGlvbihhY3RpdmVJdGVtcywgaXRlbSwgaGFzU2hpZnRLZXkpO1xuICAgICAgfSBlbHNlIGlmICgnY2hvaWNlJyBpbiBkYXRhc2V0KSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZUNob2ljZUFjdGlvbihhY3RpdmVJdGVtcywgaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG4gIC8qKlxuICAgKiBIYW5kbGVzIG1vdXNlb3ZlciBldmVudCBvdmVyIHRoaXMuZHJvcGRvd25cbiAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudFxuICAgKi9cbiAgQ2hvaWNlcy5wcm90b3R5cGUuX29uTW91c2VPdmVyID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHRhcmdldCA9IF9hLnRhcmdldDtcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgJ2Nob2ljZScgaW4gdGFyZ2V0LmRhdGFzZXQpIHtcbiAgICAgIHRoaXMuX2hpZ2hsaWdodENob2ljZSh0YXJnZXQpO1xuICAgIH1cbiAgfTtcbiAgQ2hvaWNlcy5wcm90b3R5cGUuX29uQ2xpY2sgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgdGFyZ2V0ID0gX2EudGFyZ2V0O1xuICAgIHZhciBjbGlja1dhc1dpdGhpbkNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyT3V0ZXIuZWxlbWVudC5jb250YWlucyh0YXJnZXQpO1xuICAgIGlmIChjbGlja1dhc1dpdGhpbkNvbnRhaW5lcikge1xuICAgICAgaWYgKCF0aGlzLmRyb3Bkb3duLmlzQWN0aXZlICYmICF0aGlzLmNvbnRhaW5lck91dGVyLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzVGV4dEVsZW1lbnQpIHtcbiAgICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gdGhpcy5pbnB1dC5lbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2hvd0Ryb3Bkb3duKCk7XG4gICAgICAgICAgdGhpcy5jb250YWluZXJPdXRlci5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCAmJiB0YXJnZXQgIT09IHRoaXMuaW5wdXQuZWxlbWVudCAmJiAhdGhpcy5kcm9wZG93bi5lbGVtZW50LmNvbnRhaW5zKHRhcmdldCkpIHtcbiAgICAgICAgdGhpcy5oaWRlRHJvcGRvd24oKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGhhc0hpZ2hsaWdodGVkSXRlbXMgPSB0aGlzLl9zdG9yZS5oaWdobGlnaHRlZEFjdGl2ZUl0ZW1zLmxlbmd0aCA+IDA7XG4gICAgICBpZiAoaGFzSGlnaGxpZ2h0ZWRJdGVtcykge1xuICAgICAgICB0aGlzLnVuaGlnaGxpZ2h0QWxsKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmNvbnRhaW5lck91dGVyLnJlbW92ZUZvY3VzU3RhdGUoKTtcbiAgICAgIHRoaXMuaGlkZURyb3Bkb3duKHRydWUpO1xuICAgIH1cbiAgfTtcbiAgQ2hvaWNlcy5wcm90b3R5cGUuX29uRm9jdXMgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgX2I7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgdGFyZ2V0ID0gX2EudGFyZ2V0O1xuICAgIHZhciBmb2N1c1dhc1dpdGhpbkNvbnRhaW5lciA9IHRhcmdldCAmJiB0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQuY29udGFpbnModGFyZ2V0KTtcbiAgICBpZiAoIWZvY3VzV2FzV2l0aGluQ29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBmb2N1c0FjdGlvbnMgPSAoX2IgPSB7fSwgX2JbY29uc3RhbnRzXzEuVEVYVF9UWVBFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0YXJnZXQgPT09IF90aGlzLmlucHV0LmVsZW1lbnQpIHtcbiAgICAgICAgX3RoaXMuY29udGFpbmVyT3V0ZXIuYWRkRm9jdXNTdGF0ZSgpO1xuICAgICAgfVxuICAgIH0sIF9iW2NvbnN0YW50c18xLlNFTEVDVF9PTkVfVFlQRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5jb250YWluZXJPdXRlci5hZGRGb2N1c1N0YXRlKCk7XG4gICAgICBpZiAodGFyZ2V0ID09PSBfdGhpcy5pbnB1dC5lbGVtZW50KSB7XG4gICAgICAgIF90aGlzLnNob3dEcm9wZG93bih0cnVlKTtcbiAgICAgIH1cbiAgICB9LCBfYltjb25zdGFudHNfMS5TRUxFQ1RfTVVMVElQTEVfVFlQRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGFyZ2V0ID09PSBfdGhpcy5pbnB1dC5lbGVtZW50KSB7XG4gICAgICAgIF90aGlzLnNob3dEcm9wZG93bih0cnVlKTtcbiAgICAgICAgLy8gSWYgZWxlbWVudCBpcyBhIHNlbGVjdCBib3gsIHRoZSBmb2N1c2VkIGVsZW1lbnQgaXMgdGhlIGNvbnRhaW5lciBhbmQgdGhlIGRyb3Bkb3duXG4gICAgICAgIC8vIGlzbid0IGFscmVhZHkgb3BlbiwgZm9jdXMgYW5kIHNob3cgZHJvcGRvd25cbiAgICAgICAgX3RoaXMuY29udGFpbmVyT3V0ZXIuYWRkRm9jdXNTdGF0ZSgpO1xuICAgICAgfVxuICAgIH0sIF9iKTtcbiAgICBmb2N1c0FjdGlvbnNbdGhpcy5wYXNzZWRFbGVtZW50LmVsZW1lbnQudHlwZV0oKTtcbiAgfTtcbiAgQ2hvaWNlcy5wcm90b3R5cGUuX29uQmx1ciA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBfYjtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciB0YXJnZXQgPSBfYS50YXJnZXQ7XG4gICAgdmFyIGJsdXJXYXNXaXRoaW5Db250YWluZXIgPSB0YXJnZXQgJiYgdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LmNvbnRhaW5zKHRhcmdldCk7XG4gICAgaWYgKGJsdXJXYXNXaXRoaW5Db250YWluZXIgJiYgIXRoaXMuX2lzU2Nyb2xsaW5nT25JZSkge1xuICAgICAgdmFyIGFjdGl2ZUl0ZW1zID0gdGhpcy5fc3RvcmUuYWN0aXZlSXRlbXM7XG4gICAgICB2YXIgaGFzSGlnaGxpZ2h0ZWRJdGVtc18xID0gYWN0aXZlSXRlbXMuc29tZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbS5oaWdobGlnaHRlZDtcbiAgICAgIH0pO1xuICAgICAgdmFyIGJsdXJBY3Rpb25zID0gKF9iID0ge30sIF9iW2NvbnN0YW50c18xLlRFWFRfVFlQRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IF90aGlzLmlucHV0LmVsZW1lbnQpIHtcbiAgICAgICAgICBfdGhpcy5jb250YWluZXJPdXRlci5yZW1vdmVGb2N1c1N0YXRlKCk7XG4gICAgICAgICAgaWYgKGhhc0hpZ2hsaWdodGVkSXRlbXNfMSkge1xuICAgICAgICAgICAgX3RoaXMudW5oaWdobGlnaHRBbGwoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgX3RoaXMuaGlkZURyb3Bkb3duKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9LCBfYltjb25zdGFudHNfMS5TRUxFQ1RfT05FX1RZUEVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5jb250YWluZXJPdXRlci5yZW1vdmVGb2N1c1N0YXRlKCk7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IF90aGlzLmlucHV0LmVsZW1lbnQgfHwgdGFyZ2V0ID09PSBfdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50ICYmICFfdGhpcy5fY2FuU2VhcmNoKSB7XG4gICAgICAgICAgX3RoaXMuaGlkZURyb3Bkb3duKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9LCBfYltjb25zdGFudHNfMS5TRUxFQ1RfTVVMVElQTEVfVFlQRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IF90aGlzLmlucHV0LmVsZW1lbnQpIHtcbiAgICAgICAgICBfdGhpcy5jb250YWluZXJPdXRlci5yZW1vdmVGb2N1c1N0YXRlKCk7XG4gICAgICAgICAgX3RoaXMuaGlkZURyb3Bkb3duKHRydWUpO1xuICAgICAgICAgIGlmIChoYXNIaWdobGlnaHRlZEl0ZW1zXzEpIHtcbiAgICAgICAgICAgIF90aGlzLnVuaGlnaGxpZ2h0QWxsKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBfYik7XG4gICAgICBibHVyQWN0aW9uc1t0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudC50eXBlXSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPbiBJRTExLCBjbGlja2luZyB0aGUgc2NvbGxiYXIgYmx1cnMgb3VyIGlucHV0IGFuZCB0aHVzXG4gICAgICAvLyBjbG9zZXMgdGhlIGRyb3Bkb3duLiBUbyBzdG9wIHRoaXMsIHdlIHJlZm9jdXMgb3VyIGlucHV0XG4gICAgICAvLyBpZiB3ZSBrbm93IHdlIGFyZSBvbiBJRSAqYW5kKiBhcmUgc2Nyb2xsaW5nLlxuICAgICAgdGhpcy5faXNTY3JvbGxpbmdPbkllID0gZmFsc2U7XG4gICAgICB0aGlzLmlucHV0LmVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH07XG4gIENob2ljZXMucHJvdG90eXBlLl9vbkZvcm1SZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCgoMCwgbWlzY18xLnJlc2V0VG8pKHRoaXMuX2luaXRpYWxTdGF0ZSkpO1xuICB9O1xuICBDaG9pY2VzLnByb3RvdHlwZS5faGlnaGxpZ2h0Q2hvaWNlID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBpZiAoZWwgPT09IHZvaWQgMCkge1xuICAgICAgZWwgPSBudWxsO1xuICAgIH1cbiAgICB2YXIgY2hvaWNlcyA9IEFycmF5LmZyb20odGhpcy5kcm9wZG93bi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNob2ljZS1zZWxlY3RhYmxlXScpKTtcbiAgICBpZiAoIWNob2ljZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBwYXNzZWRFbCA9IGVsO1xuICAgIHZhciBoaWdobGlnaHRlZENob2ljZXMgPSBBcnJheS5mcm9tKHRoaXMuZHJvcGRvd24uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiLmNvbmNhdCh0aGlzLmNvbmZpZy5jbGFzc05hbWVzLmhpZ2hsaWdodGVkU3RhdGUpKSk7XG4gICAgLy8gUmVtb3ZlIGFueSBoaWdobGlnaHRlZCBjaG9pY2VzXG4gICAgaGlnaGxpZ2h0ZWRDaG9pY2VzLmZvckVhY2goZnVuY3Rpb24gKGNob2ljZSkge1xuICAgICAgY2hvaWNlLmNsYXNzTGlzdC5yZW1vdmUoX3RoaXMuY29uZmlnLmNsYXNzTmFtZXMuaGlnaGxpZ2h0ZWRTdGF0ZSk7XG4gICAgICBjaG9pY2Uuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ2ZhbHNlJyk7XG4gICAgfSk7XG4gICAgaWYgKHBhc3NlZEVsKSB7XG4gICAgICB0aGlzLl9oaWdobGlnaHRQb3NpdGlvbiA9IGNob2ljZXMuaW5kZXhPZihwYXNzZWRFbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEhpZ2hsaWdodCBjaG9pY2UgYmFzZWQgb24gbGFzdCBrbm93biBoaWdobGlnaHQgbG9jYXRpb25cbiAgICAgIGlmIChjaG9pY2VzLmxlbmd0aCA+IHRoaXMuX2hpZ2hsaWdodFBvc2l0aW9uKSB7XG4gICAgICAgIC8vIElmIHdlIGhhdmUgYW4gb3B0aW9uIHRvIGhpZ2hsaWdodFxuICAgICAgICBwYXNzZWRFbCA9IGNob2ljZXNbdGhpcy5faGlnaGxpZ2h0UG9zaXRpb25dO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT3RoZXJ3aXNlIGhpZ2hsaWdodCB0aGUgb3B0aW9uIGJlZm9yZVxuICAgICAgICBwYXNzZWRFbCA9IGNob2ljZXNbY2hvaWNlcy5sZW5ndGggLSAxXTtcbiAgICAgIH1cbiAgICAgIGlmICghcGFzc2VkRWwpIHtcbiAgICAgICAgcGFzc2VkRWwgPSBjaG9pY2VzWzBdO1xuICAgICAgfVxuICAgIH1cbiAgICBwYXNzZWRFbC5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLmNsYXNzTmFtZXMuaGlnaGxpZ2h0ZWRTdGF0ZSk7XG4gICAgcGFzc2VkRWwuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcbiAgICB0aGlzLnBhc3NlZEVsZW1lbnQudHJpZ2dlckV2ZW50KGNvbnN0YW50c18xLkVWRU5UUy5oaWdobGlnaHRDaG9pY2UsIHtcbiAgICAgIGVsOiBwYXNzZWRFbFxuICAgIH0pO1xuICAgIGlmICh0aGlzLmRyb3Bkb3duLmlzQWN0aXZlKSB7XG4gICAgICAvLyBJRTExIGlnbm9yZXMgYXJpYS1sYWJlbCBhbmQgYmxvY2tzIHZpcnR1YWwga2V5Ym9hcmRcbiAgICAgIC8vIGlmIGFyaWEtYWN0aXZlZGVzY2VuZGFudCBpcyBzZXQgd2l0aG91dCBhIGRyb3Bkb3duXG4gICAgICB0aGlzLmlucHV0LnNldEFjdGl2ZURlc2NlbmRhbnQocGFzc2VkRWwuaWQpO1xuICAgICAgdGhpcy5jb250YWluZXJPdXRlci5zZXRBY3RpdmVEZXNjZW5kYW50KHBhc3NlZEVsLmlkKTtcbiAgICB9XG4gIH07XG4gIENob2ljZXMucHJvdG90eXBlLl9hZGRJdGVtID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHZhbHVlID0gX2EudmFsdWUsXG4gICAgICBfYiA9IF9hLmxhYmVsLFxuICAgICAgbGFiZWwgPSBfYiA9PT0gdm9pZCAwID8gbnVsbCA6IF9iLFxuICAgICAgX2MgPSBfYS5jaG9pY2VJZCxcbiAgICAgIGNob2ljZUlkID0gX2MgPT09IHZvaWQgMCA/IC0xIDogX2MsXG4gICAgICBfZCA9IF9hLmdyb3VwSWQsXG4gICAgICBncm91cElkID0gX2QgPT09IHZvaWQgMCA/IC0xIDogX2QsXG4gICAgICBfZSA9IF9hLmN1c3RvbVByb3BlcnRpZXMsXG4gICAgICBjdXN0b21Qcm9wZXJ0aWVzID0gX2UgPT09IHZvaWQgMCA/IHt9IDogX2UsXG4gICAgICBfZiA9IF9hLnBsYWNlaG9sZGVyLFxuICAgICAgcGxhY2Vob2xkZXIgPSBfZiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfZixcbiAgICAgIF9nID0gX2Eua2V5Q29kZSxcbiAgICAgIGtleUNvZGUgPSBfZyA9PT0gdm9pZCAwID8gLTEgOiBfZztcbiAgICB2YXIgcGFzc2VkVmFsdWUgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUudHJpbSgpIDogdmFsdWU7XG4gICAgdmFyIGl0ZW1zID0gdGhpcy5fc3RvcmUuaXRlbXM7XG4gICAgdmFyIHBhc3NlZExhYmVsID0gbGFiZWwgfHwgcGFzc2VkVmFsdWU7XG4gICAgdmFyIHBhc3NlZE9wdGlvbklkID0gY2hvaWNlSWQgfHwgLTE7XG4gICAgdmFyIGdyb3VwID0gZ3JvdXBJZCA+PSAwID8gdGhpcy5fc3RvcmUuZ2V0R3JvdXBCeUlkKGdyb3VwSWQpIDogbnVsbDtcbiAgICB2YXIgaWQgPSBpdGVtcyA/IGl0ZW1zLmxlbmd0aCArIDEgOiAxO1xuICAgIC8vIElmIGEgcHJlcGVuZGVkIHZhbHVlIGhhcyBiZWVuIHBhc3NlZCwgcHJlcGVuZCBpdFxuICAgIGlmICh0aGlzLmNvbmZpZy5wcmVwZW5kVmFsdWUpIHtcbiAgICAgIHBhc3NlZFZhbHVlID0gdGhpcy5jb25maWcucHJlcGVuZFZhbHVlICsgcGFzc2VkVmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgLy8gSWYgYW4gYXBwZW5kZWQgdmFsdWUgaGFzIGJlZW4gcGFzc2VkLCBhcHBlbmQgaXRcbiAgICBpZiAodGhpcy5jb25maWcuYXBwZW5kVmFsdWUpIHtcbiAgICAgIHBhc3NlZFZhbHVlICs9IHRoaXMuY29uZmlnLmFwcGVuZFZhbHVlLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKCgwLCBpdGVtc18xLmFkZEl0ZW0pKHtcbiAgICAgIHZhbHVlOiBwYXNzZWRWYWx1ZSxcbiAgICAgIGxhYmVsOiBwYXNzZWRMYWJlbCxcbiAgICAgIGlkOiBpZCxcbiAgICAgIGNob2ljZUlkOiBwYXNzZWRPcHRpb25JZCxcbiAgICAgIGdyb3VwSWQ6IGdyb3VwSWQsXG4gICAgICBjdXN0b21Qcm9wZXJ0aWVzOiBjdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgICAga2V5Q29kZToga2V5Q29kZVxuICAgIH0pKTtcbiAgICBpZiAodGhpcy5faXNTZWxlY3RPbmVFbGVtZW50KSB7XG4gICAgICB0aGlzLnJlbW92ZUFjdGl2ZUl0ZW1zKGlkKTtcbiAgICB9XG4gICAgLy8gVHJpZ2dlciBjaGFuZ2UgZXZlbnRcbiAgICB0aGlzLnBhc3NlZEVsZW1lbnQudHJpZ2dlckV2ZW50KGNvbnN0YW50c18xLkVWRU5UUy5hZGRJdGVtLCB7XG4gICAgICBpZDogaWQsXG4gICAgICB2YWx1ZTogcGFzc2VkVmFsdWUsXG4gICAgICBsYWJlbDogcGFzc2VkTGFiZWwsXG4gICAgICBjdXN0b21Qcm9wZXJ0aWVzOiBjdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgZ3JvdXBWYWx1ZTogZ3JvdXAgJiYgZ3JvdXAudmFsdWUgPyBncm91cC52YWx1ZSA6IG51bGwsXG4gICAgICBrZXlDb2RlOiBrZXlDb2RlXG4gICAgfSk7XG4gIH07XG4gIENob2ljZXMucHJvdG90eXBlLl9yZW1vdmVJdGVtID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICB2YXIgaWQgPSBpdGVtLmlkLFxuICAgICAgdmFsdWUgPSBpdGVtLnZhbHVlLFxuICAgICAgbGFiZWwgPSBpdGVtLmxhYmVsLFxuICAgICAgY3VzdG9tUHJvcGVydGllcyA9IGl0ZW0uY3VzdG9tUHJvcGVydGllcyxcbiAgICAgIGNob2ljZUlkID0gaXRlbS5jaG9pY2VJZCxcbiAgICAgIGdyb3VwSWQgPSBpdGVtLmdyb3VwSWQ7XG4gICAgdmFyIGdyb3VwID0gZ3JvdXBJZCAmJiBncm91cElkID49IDAgPyB0aGlzLl9zdG9yZS5nZXRHcm91cEJ5SWQoZ3JvdXBJZCkgOiBudWxsO1xuICAgIGlmICghaWQgfHwgIWNob2ljZUlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKCgwLCBpdGVtc18xLnJlbW92ZUl0ZW0pKGlkLCBjaG9pY2VJZCkpO1xuICAgIHRoaXMucGFzc2VkRWxlbWVudC50cmlnZ2VyRXZlbnQoY29uc3RhbnRzXzEuRVZFTlRTLnJlbW92ZUl0ZW0sIHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgIGN1c3RvbVByb3BlcnRpZXM6IGN1c3RvbVByb3BlcnRpZXMsXG4gICAgICBncm91cFZhbHVlOiBncm91cCAmJiBncm91cC52YWx1ZSA/IGdyb3VwLnZhbHVlIDogbnVsbFxuICAgIH0pO1xuICB9O1xuICBDaG9pY2VzLnByb3RvdHlwZS5fYWRkQ2hvaWNlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHZhbHVlID0gX2EudmFsdWUsXG4gICAgICBfYiA9IF9hLmxhYmVsLFxuICAgICAgbGFiZWwgPSBfYiA9PT0gdm9pZCAwID8gbnVsbCA6IF9iLFxuICAgICAgX2MgPSBfYS5pc1NlbGVjdGVkLFxuICAgICAgaXNTZWxlY3RlZCA9IF9jID09PSB2b2lkIDAgPyBmYWxzZSA6IF9jLFxuICAgICAgX2QgPSBfYS5pc0Rpc2FibGVkLFxuICAgICAgaXNEaXNhYmxlZCA9IF9kID09PSB2b2lkIDAgPyBmYWxzZSA6IF9kLFxuICAgICAgX2UgPSBfYS5ncm91cElkLFxuICAgICAgZ3JvdXBJZCA9IF9lID09PSB2b2lkIDAgPyAtMSA6IF9lLFxuICAgICAgX2YgPSBfYS5jdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgY3VzdG9tUHJvcGVydGllcyA9IF9mID09PSB2b2lkIDAgPyB7fSA6IF9mLFxuICAgICAgX2cgPSBfYS5wbGFjZWhvbGRlcixcbiAgICAgIHBsYWNlaG9sZGVyID0gX2cgPT09IHZvaWQgMCA/IGZhbHNlIDogX2csXG4gICAgICBfaCA9IF9hLmtleUNvZGUsXG4gICAgICBrZXlDb2RlID0gX2ggPT09IHZvaWQgMCA/IC0xIDogX2g7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gR2VuZXJhdGUgdW5pcXVlIGlkXG4gICAgdmFyIGNob2ljZXMgPSB0aGlzLl9zdG9yZS5jaG9pY2VzO1xuICAgIHZhciBjaG9pY2VMYWJlbCA9IGxhYmVsIHx8IHZhbHVlO1xuICAgIHZhciBjaG9pY2VJZCA9IGNob2ljZXMgPyBjaG9pY2VzLmxlbmd0aCArIDEgOiAxO1xuICAgIHZhciBjaG9pY2VFbGVtZW50SWQgPSBcIlwiLmNvbmNhdCh0aGlzLl9iYXNlSWQsIFwiLVwiKS5jb25jYXQodGhpcy5faWROYW1lcy5pdGVtQ2hvaWNlLCBcIi1cIikuY29uY2F0KGNob2ljZUlkKTtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCgoMCwgY2hvaWNlc18xLmFkZENob2ljZSkoe1xuICAgICAgaWQ6IGNob2ljZUlkLFxuICAgICAgZ3JvdXBJZDogZ3JvdXBJZCxcbiAgICAgIGVsZW1lbnRJZDogY2hvaWNlRWxlbWVudElkLFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgbGFiZWw6IGNob2ljZUxhYmVsLFxuICAgICAgZGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICBjdXN0b21Qcm9wZXJ0aWVzOiBjdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgICAga2V5Q29kZToga2V5Q29kZVxuICAgIH0pKTtcbiAgICBpZiAoaXNTZWxlY3RlZCkge1xuICAgICAgdGhpcy5fYWRkSXRlbSh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgbGFiZWw6IGNob2ljZUxhYmVsLFxuICAgICAgICBjaG9pY2VJZDogY2hvaWNlSWQsXG4gICAgICAgIGN1c3RvbVByb3BlcnRpZXM6IGN1c3RvbVByb3BlcnRpZXMsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICAgICAga2V5Q29kZToga2V5Q29kZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBDaG9pY2VzLnByb3RvdHlwZS5fYWRkR3JvdXAgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBncm91cCA9IF9hLmdyb3VwLFxuICAgICAgaWQgPSBfYS5pZCxcbiAgICAgIF9iID0gX2EudmFsdWVLZXksXG4gICAgICB2YWx1ZUtleSA9IF9iID09PSB2b2lkIDAgPyAndmFsdWUnIDogX2IsXG4gICAgICBfYyA9IF9hLmxhYmVsS2V5LFxuICAgICAgbGFiZWxLZXkgPSBfYyA9PT0gdm9pZCAwID8gJ2xhYmVsJyA6IF9jO1xuICAgIHZhciBncm91cENob2ljZXMgPSAoMCwgdXRpbHNfMS5pc1R5cGUpKCdPYmplY3QnLCBncm91cCkgPyBncm91cC5jaG9pY2VzIDogQXJyYXkuZnJvbShncm91cC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnT1BUSU9OJykpO1xuICAgIHZhciBncm91cElkID0gaWQgfHwgTWF0aC5mbG9vcihuZXcgRGF0ZSgpLnZhbHVlT2YoKSAqIE1hdGgucmFuZG9tKCkpO1xuICAgIHZhciBpc0Rpc2FibGVkID0gZ3JvdXAuZGlzYWJsZWQgPyBncm91cC5kaXNhYmxlZCA6IGZhbHNlO1xuICAgIGlmIChncm91cENob2ljZXMpIHtcbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKCgwLCBncm91cHNfMS5hZGRHcm91cCkoe1xuICAgICAgICB2YWx1ZTogZ3JvdXAubGFiZWwsXG4gICAgICAgIGlkOiBncm91cElkLFxuICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIGRpc2FibGVkOiBpc0Rpc2FibGVkXG4gICAgICB9KSk7XG4gICAgICB2YXIgYWRkR3JvdXBDaG9pY2VzID0gZnVuY3Rpb24gKGNob2ljZSkge1xuICAgICAgICB2YXIgaXNPcHREaXNhYmxlZCA9IGNob2ljZS5kaXNhYmxlZCB8fCBjaG9pY2UucGFyZW50Tm9kZSAmJiBjaG9pY2UucGFyZW50Tm9kZS5kaXNhYmxlZDtcbiAgICAgICAgX3RoaXMuX2FkZENob2ljZSh7XG4gICAgICAgICAgdmFsdWU6IGNob2ljZVt2YWx1ZUtleV0sXG4gICAgICAgICAgbGFiZWw6ICgwLCB1dGlsc18xLmlzVHlwZSkoJ09iamVjdCcsIGNob2ljZSkgPyBjaG9pY2VbbGFiZWxLZXldIDogY2hvaWNlLmlubmVySFRNTCxcbiAgICAgICAgICBpc1NlbGVjdGVkOiBjaG9pY2Uuc2VsZWN0ZWQsXG4gICAgICAgICAgaXNEaXNhYmxlZDogaXNPcHREaXNhYmxlZCxcbiAgICAgICAgICBncm91cElkOiBncm91cElkLFxuICAgICAgICAgIGN1c3RvbVByb3BlcnRpZXM6IGNob2ljZS5jdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBjaG9pY2UucGxhY2Vob2xkZXJcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgZ3JvdXBDaG9pY2VzLmZvckVhY2goYWRkR3JvdXBDaG9pY2VzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goKDAsIGdyb3Vwc18xLmFkZEdyb3VwKSh7XG4gICAgICAgIHZhbHVlOiBncm91cC5sYWJlbCxcbiAgICAgICAgaWQ6IGdyb3VwLmlkLFxuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICBkaXNhYmxlZDogZ3JvdXAuZGlzYWJsZWRcbiAgICAgIH0pKTtcbiAgICB9XG4gIH07XG4gIENob2ljZXMucHJvdG90eXBlLl9nZXRUZW1wbGF0ZSA9IGZ1bmN0aW9uICh0ZW1wbGF0ZSkge1xuICAgIHZhciBfYTtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICBhcmdzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gKF9hID0gdGhpcy5fdGVtcGxhdGVzW3RlbXBsYXRlXSkuY2FsbC5hcHBseShfYSwgX19zcHJlYWRBcnJheShbdGhpcywgdGhpcy5jb25maWddLCBhcmdzLCBmYWxzZSkpO1xuICB9O1xuICBDaG9pY2VzLnByb3RvdHlwZS5fY3JlYXRlVGVtcGxhdGVzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYWxsYmFja09uQ3JlYXRlVGVtcGxhdGVzID0gdGhpcy5jb25maWcuY2FsbGJhY2tPbkNyZWF0ZVRlbXBsYXRlcztcbiAgICB2YXIgdXNlclRlbXBsYXRlcyA9IHt9O1xuICAgIGlmIChjYWxsYmFja09uQ3JlYXRlVGVtcGxhdGVzICYmIHR5cGVvZiBjYWxsYmFja09uQ3JlYXRlVGVtcGxhdGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB1c2VyVGVtcGxhdGVzID0gY2FsbGJhY2tPbkNyZWF0ZVRlbXBsYXRlcy5jYWxsKHRoaXMsIHV0aWxzXzEuc3RyVG9FbCk7XG4gICAgfVxuICAgIHRoaXMuX3RlbXBsYXRlcyA9ICgwLCBkZWVwbWVyZ2VfMS5kZWZhdWx0KSh0ZW1wbGF0ZXNfMS5kZWZhdWx0LCB1c2VyVGVtcGxhdGVzKTtcbiAgfTtcbiAgQ2hvaWNlcy5wcm90b3R5cGUuX2NyZWF0ZUVsZW1lbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY29udGFpbmVyT3V0ZXIgPSBuZXcgY29tcG9uZW50c18xLkNvbnRhaW5lcih7XG4gICAgICBlbGVtZW50OiB0aGlzLl9nZXRUZW1wbGF0ZSgnY29udGFpbmVyT3V0ZXInLCB0aGlzLl9kaXJlY3Rpb24sIHRoaXMuX2lzU2VsZWN0RWxlbWVudCwgdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50LCB0aGlzLmNvbmZpZy5zZWFyY2hFbmFibGVkLCB0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudC50eXBlLCB0aGlzLmNvbmZpZy5sYWJlbElkKSxcbiAgICAgIGNsYXNzTmFtZXM6IHRoaXMuY29uZmlnLmNsYXNzTmFtZXMsXG4gICAgICB0eXBlOiB0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudC50eXBlLFxuICAgICAgcG9zaXRpb246IHRoaXMuY29uZmlnLnBvc2l0aW9uXG4gICAgfSk7XG4gICAgdGhpcy5jb250YWluZXJJbm5lciA9IG5ldyBjb21wb25lbnRzXzEuQ29udGFpbmVyKHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuX2dldFRlbXBsYXRlKCdjb250YWluZXJJbm5lcicpLFxuICAgICAgY2xhc3NOYW1lczogdGhpcy5jb25maWcuY2xhc3NOYW1lcyxcbiAgICAgIHR5cGU6IHRoaXMucGFzc2VkRWxlbWVudC5lbGVtZW50LnR5cGUsXG4gICAgICBwb3NpdGlvbjogdGhpcy5jb25maWcucG9zaXRpb25cbiAgICB9KTtcbiAgICB0aGlzLmlucHV0ID0gbmV3IGNvbXBvbmVudHNfMS5JbnB1dCh7XG4gICAgICBlbGVtZW50OiB0aGlzLl9nZXRUZW1wbGF0ZSgnaW5wdXQnLCB0aGlzLl9wbGFjZWhvbGRlclZhbHVlKSxcbiAgICAgIGNsYXNzTmFtZXM6IHRoaXMuY29uZmlnLmNsYXNzTmFtZXMsXG4gICAgICB0eXBlOiB0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudC50eXBlLFxuICAgICAgcHJldmVudFBhc3RlOiAhdGhpcy5jb25maWcucGFzdGVcbiAgICB9KTtcbiAgICB0aGlzLmNob2ljZUxpc3QgPSBuZXcgY29tcG9uZW50c18xLkxpc3Qoe1xuICAgICAgZWxlbWVudDogdGhpcy5fZ2V0VGVtcGxhdGUoJ2Nob2ljZUxpc3QnLCB0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpXG4gICAgfSk7XG4gICAgdGhpcy5pdGVtTGlzdCA9IG5ldyBjb21wb25lbnRzXzEuTGlzdCh7XG4gICAgICBlbGVtZW50OiB0aGlzLl9nZXRUZW1wbGF0ZSgnaXRlbUxpc3QnLCB0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpXG4gICAgfSk7XG4gICAgdGhpcy5kcm9wZG93biA9IG5ldyBjb21wb25lbnRzXzEuRHJvcGRvd24oe1xuICAgICAgZWxlbWVudDogdGhpcy5fZ2V0VGVtcGxhdGUoJ2Ryb3Bkb3duJyksXG4gICAgICBjbGFzc05hbWVzOiB0aGlzLmNvbmZpZy5jbGFzc05hbWVzLFxuICAgICAgdHlwZTogdGhpcy5wYXNzZWRFbGVtZW50LmVsZW1lbnQudHlwZVxuICAgIH0pO1xuICB9O1xuICBDaG9pY2VzLnByb3RvdHlwZS5fY3JlYXRlU3RydWN0dXJlID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIEhpZGUgb3JpZ2luYWwgZWxlbWVudFxuICAgIHRoaXMucGFzc2VkRWxlbWVudC5jb25jZWFsKCk7XG4gICAgLy8gV3JhcCBpbnB1dCBpbiBjb250YWluZXIgcHJlc2VydmluZyBET00gb3JkZXJpbmdcbiAgICB0aGlzLmNvbnRhaW5lcklubmVyLndyYXAodGhpcy5wYXNzZWRFbGVtZW50LmVsZW1lbnQpO1xuICAgIC8vIFdyYXBwZXIgaW5uZXIgY29udGFpbmVyIHdpdGggb3V0ZXIgY29udGFpbmVyXG4gICAgdGhpcy5jb250YWluZXJPdXRlci53cmFwKHRoaXMuY29udGFpbmVySW5uZXIuZWxlbWVudCk7XG4gICAgaWYgKHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgdGhpcy5pbnB1dC5wbGFjZWhvbGRlciA9IHRoaXMuY29uZmlnLnNlYXJjaFBsYWNlaG9sZGVyVmFsdWUgfHwgJyc7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9wbGFjZWhvbGRlclZhbHVlKSB7XG4gICAgICB0aGlzLmlucHV0LnBsYWNlaG9sZGVyID0gdGhpcy5fcGxhY2Vob2xkZXJWYWx1ZTtcbiAgICAgIHRoaXMuaW5wdXQuc2V0V2lkdGgoKTtcbiAgICB9XG4gICAgdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVySW5uZXIuZWxlbWVudCk7XG4gICAgdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZHJvcGRvd24uZWxlbWVudCk7XG4gICAgdGhpcy5jb250YWluZXJJbm5lci5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuaXRlbUxpc3QuZWxlbWVudCk7XG4gICAgaWYgKCF0aGlzLl9pc1RleHRFbGVtZW50KSB7XG4gICAgICB0aGlzLmRyb3Bkb3duLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jaG9pY2VMaXN0LmVsZW1lbnQpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgdGhpcy5jb250YWluZXJJbm5lci5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuaW5wdXQuZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbmZpZy5zZWFyY2hFbmFibGVkKSB7XG4gICAgICB0aGlzLmRyb3Bkb3duLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMuaW5wdXQuZWxlbWVudCwgdGhpcy5kcm9wZG93bi5lbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5faXNTZWxlY3RFbGVtZW50KSB7XG4gICAgICB0aGlzLl9oaWdobGlnaHRQb3NpdGlvbiA9IDA7XG4gICAgICB0aGlzLl9pc1NlYXJjaGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5fc3RhcnRMb2FkaW5nKCk7XG4gICAgICBpZiAodGhpcy5fcHJlc2V0R3JvdXBzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9hZGRQcmVkZWZpbmVkR3JvdXBzKHRoaXMuX3ByZXNldEdyb3Vwcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9hZGRQcmVkZWZpbmVkQ2hvaWNlcyh0aGlzLl9wcmVzZXRDaG9pY2VzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3N0b3BMb2FkaW5nKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pc1RleHRFbGVtZW50KSB7XG4gICAgICB0aGlzLl9hZGRQcmVkZWZpbmVkSXRlbXModGhpcy5fcHJlc2V0SXRlbXMpO1xuICAgIH1cbiAgfTtcbiAgQ2hvaWNlcy5wcm90b3R5cGUuX2FkZFByZWRlZmluZWRHcm91cHMgPSBmdW5jdGlvbiAoZ3JvdXBzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAvLyBJZiB3ZSBoYXZlIGEgcGxhY2Vob2xkZXIgb3B0aW9uXG4gICAgdmFyIHBsYWNlaG9sZGVyQ2hvaWNlID0gdGhpcy5wYXNzZWRFbGVtZW50LnBsYWNlaG9sZGVyT3B0aW9uO1xuICAgIGlmIChwbGFjZWhvbGRlckNob2ljZSAmJiBwbGFjZWhvbGRlckNob2ljZS5wYXJlbnROb2RlICYmIHBsYWNlaG9sZGVyQ2hvaWNlLnBhcmVudE5vZGUudGFnTmFtZSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgIHRoaXMuX2FkZENob2ljZSh7XG4gICAgICAgIHZhbHVlOiBwbGFjZWhvbGRlckNob2ljZS52YWx1ZSxcbiAgICAgICAgbGFiZWw6IHBsYWNlaG9sZGVyQ2hvaWNlLmlubmVySFRNTCxcbiAgICAgICAgaXNTZWxlY3RlZDogcGxhY2Vob2xkZXJDaG9pY2Uuc2VsZWN0ZWQsXG4gICAgICAgIGlzRGlzYWJsZWQ6IHBsYWNlaG9sZGVyQ2hvaWNlLmRpc2FibGVkLFxuICAgICAgICBwbGFjZWhvbGRlcjogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICAgIGdyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgcmV0dXJuIF90aGlzLl9hZGRHcm91cCh7XG4gICAgICAgIGdyb3VwOiBncm91cCxcbiAgICAgICAgaWQ6IGdyb3VwLmlkIHx8IG51bGxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICBDaG9pY2VzLnByb3RvdHlwZS5fYWRkUHJlZGVmaW5lZENob2ljZXMgPSBmdW5jdGlvbiAoY2hvaWNlcykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgLy8gSWYgc29ydGluZyBpcyBlbmFibGVkIG9yIHRoZSB1c2VyIGlzIHNlYXJjaGluZywgZmlsdGVyIGNob2ljZXNcbiAgICBpZiAodGhpcy5jb25maWcuc2hvdWxkU29ydCkge1xuICAgICAgY2hvaWNlcy5zb3J0KHRoaXMuY29uZmlnLnNvcnRlcik7XG4gICAgfVxuICAgIHZhciBoYXNTZWxlY3RlZENob2ljZSA9IGNob2ljZXMuc29tZShmdW5jdGlvbiAoY2hvaWNlKSB7XG4gICAgICByZXR1cm4gY2hvaWNlLnNlbGVjdGVkO1xuICAgIH0pO1xuICAgIHZhciBmaXJzdEVuYWJsZWRDaG9pY2VJbmRleCA9IGNob2ljZXMuZmluZEluZGV4KGZ1bmN0aW9uIChjaG9pY2UpIHtcbiAgICAgIHJldHVybiBjaG9pY2UuZGlzYWJsZWQgPT09IHVuZGVmaW5lZCB8fCAhY2hvaWNlLmRpc2FibGVkO1xuICAgIH0pO1xuICAgIGNob2ljZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hvaWNlLCBpbmRleCkge1xuICAgICAgdmFyIF9hID0gY2hvaWNlLnZhbHVlLFxuICAgICAgICB2YWx1ZSA9IF9hID09PSB2b2lkIDAgPyAnJyA6IF9hLFxuICAgICAgICBsYWJlbCA9IGNob2ljZS5sYWJlbCxcbiAgICAgICAgY3VzdG9tUHJvcGVydGllcyA9IGNob2ljZS5jdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgICBwbGFjZWhvbGRlciA9IGNob2ljZS5wbGFjZWhvbGRlcjtcbiAgICAgIGlmIChfdGhpcy5faXNTZWxlY3RFbGVtZW50KSB7XG4gICAgICAgIC8vIElmIHRoZSBjaG9pY2UgaXMgYWN0dWFsbHkgYSBncm91cFxuICAgICAgICBpZiAoY2hvaWNlLmNob2ljZXMpIHtcbiAgICAgICAgICBfdGhpcy5fYWRkR3JvdXAoe1xuICAgICAgICAgICAgZ3JvdXA6IGNob2ljZSxcbiAgICAgICAgICAgIGlkOiBjaG9pY2UuaWQgfHwgbnVsbFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIElmIHRoZXJlIGlzIGEgc2VsZWN0ZWQgY2hvaWNlIGFscmVhZHkgb3IgdGhlIGNob2ljZSBpcyBub3QgdGhlIGZpcnN0IGluXG4gICAgICAgICAgICogdGhlIGFycmF5LCBhZGQgZWFjaCBjaG9pY2Ugbm9ybWFsbHkuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBPdGhlcndpc2Ugd2UgcHJlLXNlbGVjdCB0aGUgZmlyc3QgZW5hYmxlZCBjaG9pY2UgaW4gdGhlIGFycmF5IChcInNlbGVjdC1vbmVcIiBvbmx5KVxuICAgICAgICAgICAqL1xuICAgICAgICAgIHZhciBzaG91bGRQcmVzZWxlY3QgPSBfdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50ICYmICFoYXNTZWxlY3RlZENob2ljZSAmJiBpbmRleCA9PT0gZmlyc3RFbmFibGVkQ2hvaWNlSW5kZXg7XG4gICAgICAgICAgdmFyIGlzU2VsZWN0ZWQgPSBzaG91bGRQcmVzZWxlY3QgPyB0cnVlIDogY2hvaWNlLnNlbGVjdGVkO1xuICAgICAgICAgIHZhciBpc0Rpc2FibGVkID0gY2hvaWNlLmRpc2FibGVkO1xuICAgICAgICAgIF90aGlzLl9hZGRDaG9pY2Uoe1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICAgICAgaXNTZWxlY3RlZDogISFpc1NlbGVjdGVkLFxuICAgICAgICAgICAgaXNEaXNhYmxlZDogISFpc0Rpc2FibGVkLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICEhcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICBjdXN0b21Qcm9wZXJ0aWVzOiBjdXN0b21Qcm9wZXJ0aWVzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLl9hZGRDaG9pY2Uoe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgICAgaXNTZWxlY3RlZDogISFjaG9pY2Uuc2VsZWN0ZWQsXG4gICAgICAgICAgaXNEaXNhYmxlZDogISFjaG9pY2UuZGlzYWJsZWQsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICEhY2hvaWNlLnBsYWNlaG9sZGVyLFxuICAgICAgICAgIGN1c3RvbVByb3BlcnRpZXM6IGN1c3RvbVByb3BlcnRpZXNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIENob2ljZXMucHJvdG90eXBlLl9hZGRQcmVkZWZpbmVkSXRlbXMgPSBmdW5jdGlvbiAoaXRlbXMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgaXRlbS52YWx1ZSkge1xuICAgICAgICBfdGhpcy5fYWRkSXRlbSh7XG4gICAgICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXG4gICAgICAgICAgbGFiZWw6IGl0ZW0ubGFiZWwsXG4gICAgICAgICAgY2hvaWNlSWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgY3VzdG9tUHJvcGVydGllczogaXRlbS5jdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBpdGVtLnBsYWNlaG9sZGVyXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICBfdGhpcy5fYWRkSXRlbSh7XG4gICAgICAgICAgdmFsdWU6IGl0ZW1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIENob2ljZXMucHJvdG90eXBlLl9zZXRDaG9pY2VPckl0ZW0gPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGl0ZW1UeXBlID0gKDAsIHV0aWxzXzEuZ2V0VHlwZSkoaXRlbSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YXIgaGFuZGxlVHlwZSA9IHtcbiAgICAgIG9iamVjdDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWl0ZW0udmFsdWUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgd2UgYXJlIGRlYWxpbmcgd2l0aCBhIHNlbGVjdCBpbnB1dCwgd2UgbmVlZCB0byBjcmVhdGUgYW4gb3B0aW9uIGZpcnN0XG4gICAgICAgIC8vIHRoYXQgaXMgdGhlbiBzZWxlY3RlZC4gRm9yIHRleHQgaW5wdXRzIHdlIGNhbiBqdXN0IGFkZCBpdGVtcyBub3JtYWxseS5cbiAgICAgICAgaWYgKCFfdGhpcy5faXNUZXh0RWxlbWVudCkge1xuICAgICAgICAgIF90aGlzLl9hZGRDaG9pY2Uoe1xuICAgICAgICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXG4gICAgICAgICAgICBsYWJlbDogaXRlbS5sYWJlbCxcbiAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IHRydWUsXG4gICAgICAgICAgICBpc0Rpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGN1c3RvbVByb3BlcnRpZXM6IGl0ZW0uY3VzdG9tUHJvcGVydGllcyxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBpdGVtLnBsYWNlaG9sZGVyXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMuX2FkZEl0ZW0oe1xuICAgICAgICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXG4gICAgICAgICAgICBsYWJlbDogaXRlbS5sYWJlbCxcbiAgICAgICAgICAgIGNob2ljZUlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgY3VzdG9tUHJvcGVydGllczogaXRlbS5jdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGl0ZW0ucGxhY2Vob2xkZXJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHN0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIV90aGlzLl9pc1RleHRFbGVtZW50KSB7XG4gICAgICAgICAgX3RoaXMuX2FkZENob2ljZSh7XG4gICAgICAgICAgICB2YWx1ZTogaXRlbSxcbiAgICAgICAgICAgIGxhYmVsOiBpdGVtLFxuICAgICAgICAgICAgaXNTZWxlY3RlZDogdHJ1ZSxcbiAgICAgICAgICAgIGlzRGlzYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMuX2FkZEl0ZW0oe1xuICAgICAgICAgICAgdmFsdWU6IGl0ZW1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgaGFuZGxlVHlwZVtpdGVtVHlwZV0oKTtcbiAgfTtcbiAgQ2hvaWNlcy5wcm90b3R5cGUuX2ZpbmRBbmRTZWxlY3RDaG9pY2VCeVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgY2hvaWNlcyA9IHRoaXMuX3N0b3JlLmNob2ljZXM7XG4gICAgLy8gQ2hlY2sgJ3ZhbHVlJyBwcm9wZXJ0eSBleGlzdHMgYW5kIHRoZSBjaG9pY2UgaXNuJ3QgYWxyZWFkeSBzZWxlY3RlZFxuICAgIHZhciBmb3VuZENob2ljZSA9IGNob2ljZXMuZmluZChmdW5jdGlvbiAoY2hvaWNlKSB7XG4gICAgICByZXR1cm4gX3RoaXMuY29uZmlnLnZhbHVlQ29tcGFyZXIoY2hvaWNlLnZhbHVlLCB2YWx1ZSk7XG4gICAgfSk7XG4gICAgaWYgKGZvdW5kQ2hvaWNlICYmICFmb3VuZENob2ljZS5zZWxlY3RlZCkge1xuICAgICAgdGhpcy5fYWRkSXRlbSh7XG4gICAgICAgIHZhbHVlOiBmb3VuZENob2ljZS52YWx1ZSxcbiAgICAgICAgbGFiZWw6IGZvdW5kQ2hvaWNlLmxhYmVsLFxuICAgICAgICBjaG9pY2VJZDogZm91bmRDaG9pY2UuaWQsXG4gICAgICAgIGdyb3VwSWQ6IGZvdW5kQ2hvaWNlLmdyb3VwSWQsXG4gICAgICAgIGN1c3RvbVByb3BlcnRpZXM6IGZvdW5kQ2hvaWNlLmN1c3RvbVByb3BlcnRpZXMsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBmb3VuZENob2ljZS5wbGFjZWhvbGRlcixcbiAgICAgICAga2V5Q29kZTogZm91bmRDaG9pY2Uua2V5Q29kZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBDaG9pY2VzLnByb3RvdHlwZS5fZ2VuZXJhdGVQbGFjZWhvbGRlclZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9pc1NlbGVjdEVsZW1lbnQgJiYgdGhpcy5wYXNzZWRFbGVtZW50LnBsYWNlaG9sZGVyT3B0aW9uKSB7XG4gICAgICB2YXIgcGxhY2Vob2xkZXJPcHRpb24gPSB0aGlzLnBhc3NlZEVsZW1lbnQucGxhY2Vob2xkZXJPcHRpb247XG4gICAgICByZXR1cm4gcGxhY2Vob2xkZXJPcHRpb24gPyBwbGFjZWhvbGRlck9wdGlvbi50ZXh0IDogbnVsbDtcbiAgICB9XG4gICAgdmFyIF9hID0gdGhpcy5jb25maWcsXG4gICAgICBwbGFjZWhvbGRlciA9IF9hLnBsYWNlaG9sZGVyLFxuICAgICAgcGxhY2Vob2xkZXJWYWx1ZSA9IF9hLnBsYWNlaG9sZGVyVmFsdWU7XG4gICAgdmFyIGRhdGFzZXQgPSB0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudC5kYXRhc2V0O1xuICAgIGlmIChwbGFjZWhvbGRlcikge1xuICAgICAgaWYgKHBsYWNlaG9sZGVyVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyVmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAoZGF0YXNldC5wbGFjZWhvbGRlcikge1xuICAgICAgICByZXR1cm4gZGF0YXNldC5wbGFjZWhvbGRlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG4gIHJldHVybiBDaG9pY2VzO1xufSgpO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBDaG9pY2VzO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gNjEzOlxuLyoqKi8gKGZ1bmN0aW9uKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsICh7XG4gIHZhbHVlOiB0cnVlXG59KSk7XG52YXIgdXRpbHNfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNzk5KTtcbnZhciBjb25zdGFudHNfMSA9IF9fd2VicGFja19yZXF1aXJlX18oODgzKTtcbnZhciBDb250YWluZXIgPSAvKiogQGNsYXNzICovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDb250YWluZXIoX2EpIHtcbiAgICB2YXIgZWxlbWVudCA9IF9hLmVsZW1lbnQsXG4gICAgICB0eXBlID0gX2EudHlwZSxcbiAgICAgIGNsYXNzTmFtZXMgPSBfYS5jbGFzc05hbWVzLFxuICAgICAgcG9zaXRpb24gPSBfYS5wb3NpdGlvbjtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmlzRmxpcHBlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNGb2N1c3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5fb25Gb2N1cyA9IHRoaXMuX29uRm9jdXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkJsdXIgPSB0aGlzLl9vbkJsdXIuYmluZCh0aGlzKTtcbiAgfVxuICBDb250YWluZXIucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX29uRm9jdXMpO1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5fb25CbHVyKTtcbiAgfTtcbiAgQ29udGFpbmVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9vbkZvY3VzKTtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX29uQmx1cik7XG4gIH07XG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgd2hldGhlciBjb250YWluZXIgc2hvdWxkIGJlIGZsaXBwZWQgYmFzZWQgb24gcGFzc2VkXG4gICAqIGRyb3Bkb3duIHBvc2l0aW9uXG4gICAqL1xuICBDb250YWluZXIucHJvdG90eXBlLnNob3VsZEZsaXAgPSBmdW5jdGlvbiAoZHJvcGRvd25Qb3MpIHtcbiAgICBpZiAodHlwZW9mIGRyb3Bkb3duUG9zICE9PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBJZiBmbGlwIGlzIGVuYWJsZWQgYW5kIHRoZSBkcm9wZG93biBib3R0b20gcG9zaXRpb24gaXNcbiAgICAvLyBncmVhdGVyIHRoYW4gdGhlIHdpbmRvdyBoZWlnaHQgZmxpcCB0aGUgZHJvcGRvd24uXG4gICAgdmFyIHNob3VsZEZsaXAgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5wb3NpdGlvbiA9PT0gJ2F1dG8nKSB7XG4gICAgICBzaG91bGRGbGlwID0gIXdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi1oZWlnaHQ6IFwiLmNvbmNhdChkcm9wZG93blBvcyArIDEsIFwicHgpXCIpKS5tYXRjaGVzO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgIHNob3VsZEZsaXAgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gc2hvdWxkRmxpcDtcbiAgfTtcbiAgQ29udGFpbmVyLnByb3RvdHlwZS5zZXRBY3RpdmVEZXNjZW5kYW50ID0gZnVuY3Rpb24gKGFjdGl2ZURlc2NlbmRhbnRJRCkge1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIGFjdGl2ZURlc2NlbmRhbnRJRCk7XG4gIH07XG4gIENvbnRhaW5lci5wcm90b3R5cGUucmVtb3ZlQWN0aXZlRGVzY2VuZGFudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcbiAgfTtcbiAgQ29udGFpbmVyLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKGRyb3Bkb3duUG9zKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLm9wZW5TdGF0ZSk7XG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgIGlmICh0aGlzLnNob3VsZEZsaXAoZHJvcGRvd25Qb3MpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzTmFtZXMuZmxpcHBlZFN0YXRlKTtcbiAgICAgIHRoaXMuaXNGbGlwcGVkID0gdHJ1ZTtcbiAgICB9XG4gIH07XG4gIENvbnRhaW5lci5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc05hbWVzLm9wZW5TdGF0ZSk7XG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgIHRoaXMucmVtb3ZlQWN0aXZlRGVzY2VuZGFudCgpO1xuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgLy8gQSBkcm9wZG93biBmbGlwcyBpZiBpdCBkb2VzIG5vdCBoYXZlIHNwYWNlIHdpdGhpbiB0aGUgcGFnZVxuICAgIGlmICh0aGlzLmlzRmxpcHBlZCkge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc05hbWVzLmZsaXBwZWRTdGF0ZSk7XG4gICAgICB0aGlzLmlzRmxpcHBlZCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgQ29udGFpbmVyLnByb3RvdHlwZS5mb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuaXNGb2N1c3NlZCkge1xuICAgICAgdGhpcy5lbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9O1xuICBDb250YWluZXIucHJvdG90eXBlLmFkZEZvY3VzU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLmZvY3VzU3RhdGUpO1xuICB9O1xuICBDb250YWluZXIucHJvdG90eXBlLnJlbW92ZUZvY3VzU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc05hbWVzLmZvY3VzU3RhdGUpO1xuICB9O1xuICBDb250YWluZXIucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzTmFtZXMuZGlzYWJsZWRTdGF0ZSk7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcpO1xuICAgIGlmICh0aGlzLnR5cGUgPT09IGNvbnN0YW50c18xLlNFTEVDVF9PTkVfVFlQRSkge1xuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgIH1cbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgfTtcbiAgQ29udGFpbmVyLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NOYW1lcy5kaXNhYmxlZFN0YXRlKTtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICBpZiAodGhpcy50eXBlID09PSBjb25zdGFudHNfMS5TRUxFQ1RfT05FX1RZUEUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgfVxuICAgIHRoaXMuaXNEaXNhYmxlZCA9IHRydWU7XG4gIH07XG4gIENvbnRhaW5lci5wcm90b3R5cGUud3JhcCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgKDAsIHV0aWxzXzEud3JhcCkoZWxlbWVudCwgdGhpcy5lbGVtZW50KTtcbiAgfTtcbiAgQ29udGFpbmVyLnByb3RvdHlwZS51bndyYXAgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgLy8gTW92ZSBwYXNzZWQgZWxlbWVudCBvdXRzaWRlIHRoaXMgZWxlbWVudFxuICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHRoaXMuZWxlbWVudCk7XG4gICAgICAvLyBSZW1vdmUgdGhpcyBlbGVtZW50XG4gICAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbiAgQ29udGFpbmVyLnByb3RvdHlwZS5hZGRMb2FkaW5nU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLmxvYWRpbmdTdGF0ZSk7XG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1idXN5JywgJ3RydWUnKTtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gIH07XG4gIENvbnRhaW5lci5wcm90b3R5cGUucmVtb3ZlTG9hZGluZ1N0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NOYW1lcy5sb2FkaW5nU3RhdGUpO1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYnVzeScpO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gIH07XG4gIENvbnRhaW5lci5wcm90b3R5cGUuX29uRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pc0ZvY3Vzc2VkID0gdHJ1ZTtcbiAgfTtcbiAgQ29udGFpbmVyLnByb3RvdHlwZS5fb25CbHVyID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaXNGb2N1c3NlZCA9IGZhbHNlO1xuICB9O1xuICByZXR1cm4gQ29udGFpbmVyO1xufSgpO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBDb250YWluZXI7XG5cbi8qKiovIH0pLFxuXG4vKioqLyAyMTc6XG4vKioqLyAoZnVuY3Rpb24oX191bnVzZWRfd2VicGFja19tb2R1bGUsIGV4cG9ydHMpIHtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgKHtcbiAgdmFsdWU6IHRydWVcbn0pKTtcbnZhciBEcm9wZG93biA9IC8qKiBAY2xhc3MgKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIERyb3Bkb3duKF9hKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBfYS5lbGVtZW50LFxuICAgICAgdHlwZSA9IF9hLnR5cGUsXG4gICAgICBjbGFzc05hbWVzID0gX2EuY2xhc3NOYW1lcztcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gIH1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KERyb3Bkb3duLnByb3RvdHlwZSwgXCJkaXN0YW5jZUZyb21Ub3BXaW5kb3dcIiwge1xuICAgIC8qKlxuICAgICAqIEJvdHRvbSBwb3NpdGlvbiBvZiBkcm9wZG93biBpbiB2aWV3cG9ydCBjb29yZGluYXRlc1xuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b207XG4gICAgfSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG4gIERyb3Bkb3duLnByb3RvdHlwZS5nZXRDaGlsZCA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH07XG4gIC8qKlxuICAgKiBTaG93IGRyb3Bkb3duIHRvIHVzZXIgYnkgYWRkaW5nIGFjdGl2ZSBzdGF0ZSBjbGFzc1xuICAgKi9cbiAgRHJvcGRvd24ucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLmFjdGl2ZVN0YXRlKTtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgLyoqXG4gICAqIEhpZGUgZHJvcGRvd24gZnJvbSB1c2VyXG4gICAqL1xuICBEcm9wZG93bi5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzTmFtZXMuYWN0aXZlU3RhdGUpO1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJldHVybiBEcm9wZG93bjtcbn0oKTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRHJvcGRvd247XG5cbi8qKiovIH0pLFxuXG4vKioqLyA1MjA6XG4vKioqLyAoZnVuY3Rpb24oX191bnVzZWRfd2VicGFja19tb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXG5cbnZhciBfX2ltcG9ydERlZmF1bHQgPSB0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0IHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgcmV0dXJuIG1vZCAmJiBtb2QuX19lc01vZHVsZSA/IG1vZCA6IHtcbiAgICBcImRlZmF1bHRcIjogbW9kXG4gIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCAoe1xuICB2YWx1ZTogdHJ1ZVxufSkpO1xuZXhwb3J0cy5XcmFwcGVkU2VsZWN0ID0gZXhwb3J0cy5XcmFwcGVkSW5wdXQgPSBleHBvcnRzLkxpc3QgPSBleHBvcnRzLklucHV0ID0gZXhwb3J0cy5Db250YWluZXIgPSBleHBvcnRzLkRyb3Bkb3duID0gdm9pZCAwO1xudmFyIGRyb3Bkb3duXzEgPSBfX2ltcG9ydERlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXygyMTcpKTtcbmV4cG9ydHMuRHJvcGRvd24gPSBkcm9wZG93bl8xLmRlZmF1bHQ7XG52YXIgY29udGFpbmVyXzEgPSBfX2ltcG9ydERlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXyg2MTMpKTtcbmV4cG9ydHMuQ29udGFpbmVyID0gY29udGFpbmVyXzEuZGVmYXVsdDtcbnZhciBpbnB1dF8xID0gX19pbXBvcnREZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oMTEpKTtcbmV4cG9ydHMuSW5wdXQgPSBpbnB1dF8xLmRlZmF1bHQ7XG52YXIgbGlzdF8xID0gX19pbXBvcnREZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oNjI0KSk7XG5leHBvcnRzLkxpc3QgPSBsaXN0XzEuZGVmYXVsdDtcbnZhciB3cmFwcGVkX2lucHV0XzEgPSBfX2ltcG9ydERlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXyg1NDEpKTtcbmV4cG9ydHMuV3JhcHBlZElucHV0ID0gd3JhcHBlZF9pbnB1dF8xLmRlZmF1bHQ7XG52YXIgd3JhcHBlZF9zZWxlY3RfMSA9IF9faW1wb3J0RGVmYXVsdChfX3dlYnBhY2tfcmVxdWlyZV9fKDk4MikpO1xuZXhwb3J0cy5XcmFwcGVkU2VsZWN0ID0gd3JhcHBlZF9zZWxlY3RfMS5kZWZhdWx0O1xuXG4vKioqLyB9KSxcblxuLyoqKi8gMTE6XG4vKioqLyAoZnVuY3Rpb24oX191bnVzZWRfd2VicGFja19tb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgKHtcbiAgdmFsdWU6IHRydWVcbn0pKTtcbnZhciB1dGlsc18xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3OTkpO1xudmFyIGNvbnN0YW50c18xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4ODMpO1xudmFyIElucHV0ID0gLyoqIEBjbGFzcyAqL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSW5wdXQoX2EpIHtcbiAgICB2YXIgZWxlbWVudCA9IF9hLmVsZW1lbnQsXG4gICAgICB0eXBlID0gX2EudHlwZSxcbiAgICAgIGNsYXNzTmFtZXMgPSBfYS5jbGFzc05hbWVzLFxuICAgICAgcHJldmVudFBhc3RlID0gX2EucHJldmVudFBhc3RlO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuICAgIHRoaXMucHJldmVudFBhc3RlID0gcHJldmVudFBhc3RlO1xuICAgIHRoaXMuaXNGb2N1c3NlZCA9IHRoaXMuZWxlbWVudC5pc0VxdWFsTm9kZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBlbGVtZW50LmRpc2FibGVkO1xuICAgIHRoaXMuX29uUGFzdGUgPSB0aGlzLl9vblBhc3RlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25JbnB1dCA9IHRoaXMuX29uSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkZvY3VzID0gdGhpcy5fb25Gb2N1cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uQmx1ciA9IHRoaXMuX29uQmx1ci5iaW5kKHRoaXMpO1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShJbnB1dC5wcm90b3R5cGUsIFwicGxhY2Vob2xkZXJcIiwge1xuICAgIHNldDogZnVuY3Rpb24gKHBsYWNlaG9sZGVyKSB7XG4gICAgICB0aGlzLmVsZW1lbnQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICB9LFxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KElucHV0LnByb3RvdHlwZSwgXCJ2YWx1ZVwiLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gKDAsIHV0aWxzXzEuc2FuaXRpc2UpKHRoaXMuZWxlbWVudC52YWx1ZSk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdGhpcy5lbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgfSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShJbnB1dC5wcm90b3R5cGUsIFwicmF3VmFsdWVcIiwge1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC52YWx1ZTtcbiAgICB9LFxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbiAgSW5wdXQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIHRoaXMuX29uUGFzdGUpO1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuX29uSW5wdXQsIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9vbkZvY3VzLCB7XG4gICAgICBwYXNzaXZlOiB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9vbkJsdXIsIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcbiAgfTtcbiAgSW5wdXQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuX29uSW5wdXQpO1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwYXN0ZScsIHRoaXMuX29uUGFzdGUpO1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX29uRm9jdXMpO1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5fb25CbHVyKTtcbiAgfTtcbiAgSW5wdXQucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGZhbHNlO1xuICB9O1xuICBJbnB1dC5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSB0cnVlO1xuICB9O1xuICBJbnB1dC5wcm90b3R5cGUuZm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLmlzRm9jdXNzZWQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfTtcbiAgSW5wdXQucHJvdG90eXBlLmJsdXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaXNGb2N1c3NlZCkge1xuICAgICAgdGhpcy5lbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gIH07XG4gIElucHV0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uIChzZXRXaWR0aCkge1xuICAgIGlmIChzZXRXaWR0aCA9PT0gdm9pZCAwKSB7XG4gICAgICBzZXRXaWR0aCA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmVsZW1lbnQudmFsdWUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIH1cbiAgICBpZiAoc2V0V2lkdGgpIHtcbiAgICAgIHRoaXMuc2V0V2lkdGgoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIC8qKlxuICAgKiBTZXQgdGhlIGNvcnJlY3QgaW5wdXQgd2lkdGggYmFzZWQgb24gcGxhY2Vob2xkZXJcbiAgICogdmFsdWUgb3IgaW5wdXQgdmFsdWVcbiAgICovXG4gIElucHV0LnByb3RvdHlwZS5zZXRXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBSZXNpemUgaW5wdXQgdG8gY29udGVudHMgb3IgcGxhY2Vob2xkZXJcbiAgICB2YXIgX2EgPSB0aGlzLmVsZW1lbnQsXG4gICAgICBzdHlsZSA9IF9hLnN0eWxlLFxuICAgICAgdmFsdWUgPSBfYS52YWx1ZSxcbiAgICAgIHBsYWNlaG9sZGVyID0gX2EucGxhY2Vob2xkZXI7XG4gICAgc3R5bGUubWluV2lkdGggPSBcIlwiLmNvbmNhdChwbGFjZWhvbGRlci5sZW5ndGggKyAxLCBcImNoXCIpO1xuICAgIHN0eWxlLndpZHRoID0gXCJcIi5jb25jYXQodmFsdWUubGVuZ3RoICsgMSwgXCJjaFwiKTtcbiAgfTtcbiAgSW5wdXQucHJvdG90eXBlLnNldEFjdGl2ZURlc2NlbmRhbnQgPSBmdW5jdGlvbiAoYWN0aXZlRGVzY2VuZGFudElEKSB7XG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JywgYWN0aXZlRGVzY2VuZGFudElEKTtcbiAgfTtcbiAgSW5wdXQucHJvdG90eXBlLnJlbW92ZUFjdGl2ZURlc2NlbmRhbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG4gIH07XG4gIElucHV0LnByb3RvdHlwZS5fb25JbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy50eXBlICE9PSBjb25zdGFudHNfMS5TRUxFQ1RfT05FX1RZUEUpIHtcbiAgICAgIHRoaXMuc2V0V2lkdGgoKTtcbiAgICB9XG4gIH07XG4gIElucHV0LnByb3RvdHlwZS5fb25QYXN0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmICh0aGlzLnByZXZlbnRQYXN0ZSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH07XG4gIElucHV0LnByb3RvdHlwZS5fb25Gb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlzRm9jdXNzZWQgPSB0cnVlO1xuICB9O1xuICBJbnB1dC5wcm90b3R5cGUuX29uQmx1ciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlzRm9jdXNzZWQgPSBmYWxzZTtcbiAgfTtcbiAgcmV0dXJuIElucHV0O1xufSgpO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBJbnB1dDtcblxuLyoqKi8gfSksXG5cbi8qKiovIDYyNDpcbi8qKiovIChmdW5jdGlvbihfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCAoe1xuICB2YWx1ZTogdHJ1ZVxufSkpO1xudmFyIGNvbnN0YW50c18xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4ODMpO1xudmFyIExpc3QgPSAvKiogQGNsYXNzICovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBMaXN0KF9hKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBfYS5lbGVtZW50O1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5zY3JvbGxQb3MgPSB0aGlzLmVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgfVxuICBMaXN0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gIH07XG4gIExpc3QucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICB9O1xuICBMaXN0LnByb3RvdHlwZS5nZXRDaGlsZCA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH07XG4gIExpc3QucHJvdG90eXBlLmhhc0NoaWxkcmVuID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQuaGFzQ2hpbGROb2RlcygpO1xuICB9O1xuICBMaXN0LnByb3RvdHlwZS5zY3JvbGxUb1RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgfTtcbiAgTGlzdC5wcm90b3R5cGUuc2Nyb2xsVG9DaGlsZEVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgZGlyZWN0aW9uKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGxpc3RIZWlnaHQgPSB0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIC8vIFNjcm9sbCBwb3NpdGlvbiBvZiBkcm9wZG93blxuICAgIHZhciBsaXN0U2Nyb2xsUG9zaXRpb24gPSB0aGlzLmVsZW1lbnQuc2Nyb2xsVG9wICsgbGlzdEhlaWdodDtcbiAgICB2YXIgZWxlbWVudEhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIC8vIERpc3RhbmNlIGZyb20gYm90dG9tIG9mIGVsZW1lbnQgdG8gdG9wIG9mIHBhcmVudFxuICAgIHZhciBlbGVtZW50UG9zID0gZWxlbWVudC5vZmZzZXRUb3AgKyBlbGVtZW50SGVpZ2h0O1xuICAgIC8vIERpZmZlcmVuY2UgYmV0d2VlbiB0aGUgZWxlbWVudCBhbmQgc2Nyb2xsIHBvc2l0aW9uXG4gICAgdmFyIGRlc3RpbmF0aW9uID0gZGlyZWN0aW9uID4gMCA/IHRoaXMuZWxlbWVudC5zY3JvbGxUb3AgKyBlbGVtZW50UG9zIC0gbGlzdFNjcm9sbFBvc2l0aW9uIDogZWxlbWVudC5vZmZzZXRUb3A7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLl9hbmltYXRlU2Nyb2xsKGRlc3RpbmF0aW9uLCBkaXJlY3Rpb24pO1xuICAgIH0pO1xuICB9O1xuICBMaXN0LnByb3RvdHlwZS5fc2Nyb2xsRG93biA9IGZ1bmN0aW9uIChzY3JvbGxQb3MsIHN0cmVuZ3RoLCBkZXN0aW5hdGlvbikge1xuICAgIHZhciBlYXNpbmcgPSAoZGVzdGluYXRpb24gLSBzY3JvbGxQb3MpIC8gc3RyZW5ndGg7XG4gICAgdmFyIGRpc3RhbmNlID0gZWFzaW5nID4gMSA/IGVhc2luZyA6IDE7XG4gICAgdGhpcy5lbGVtZW50LnNjcm9sbFRvcCA9IHNjcm9sbFBvcyArIGRpc3RhbmNlO1xuICB9O1xuICBMaXN0LnByb3RvdHlwZS5fc2Nyb2xsVXAgPSBmdW5jdGlvbiAoc2Nyb2xsUG9zLCBzdHJlbmd0aCwgZGVzdGluYXRpb24pIHtcbiAgICB2YXIgZWFzaW5nID0gKHNjcm9sbFBvcyAtIGRlc3RpbmF0aW9uKSAvIHN0cmVuZ3RoO1xuICAgIHZhciBkaXN0YW5jZSA9IGVhc2luZyA+IDEgPyBlYXNpbmcgOiAxO1xuICAgIHRoaXMuZWxlbWVudC5zY3JvbGxUb3AgPSBzY3JvbGxQb3MgLSBkaXN0YW5jZTtcbiAgfTtcbiAgTGlzdC5wcm90b3R5cGUuX2FuaW1hdGVTY3JvbGwgPSBmdW5jdGlvbiAoZGVzdGluYXRpb24sIGRpcmVjdGlvbikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIHN0cmVuZ3RoID0gY29uc3RhbnRzXzEuU0NST0xMSU5HX1NQRUVEO1xuICAgIHZhciBjaG9pY2VMaXN0U2Nyb2xsVG9wID0gdGhpcy5lbGVtZW50LnNjcm9sbFRvcDtcbiAgICB2YXIgY29udGludWVBbmltYXRpb24gPSBmYWxzZTtcbiAgICBpZiAoZGlyZWN0aW9uID4gMCkge1xuICAgICAgdGhpcy5fc2Nyb2xsRG93bihjaG9pY2VMaXN0U2Nyb2xsVG9wLCBzdHJlbmd0aCwgZGVzdGluYXRpb24pO1xuICAgICAgaWYgKGNob2ljZUxpc3RTY3JvbGxUb3AgPCBkZXN0aW5hdGlvbikge1xuICAgICAgICBjb250aW51ZUFuaW1hdGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Njcm9sbFVwKGNob2ljZUxpc3RTY3JvbGxUb3AsIHN0cmVuZ3RoLCBkZXN0aW5hdGlvbik7XG4gICAgICBpZiAoY2hvaWNlTGlzdFNjcm9sbFRvcCA+IGRlc3RpbmF0aW9uKSB7XG4gICAgICAgIGNvbnRpbnVlQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNvbnRpbnVlQW5pbWF0aW9uKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5fYW5pbWF0ZVNjcm9sbChkZXN0aW5hdGlvbiwgZGlyZWN0aW9uKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIExpc3Q7XG59KCk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IExpc3Q7XG5cbi8qKiovIH0pLFxuXG4vKioqLyA3MzA6XG4vKioqLyAoZnVuY3Rpb24oX191bnVzZWRfd2VicGFja19tb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgKHtcbiAgdmFsdWU6IHRydWVcbn0pKTtcbnZhciB1dGlsc18xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3OTkpO1xudmFyIFdyYXBwZWRFbGVtZW50ID0gLyoqIEBjbGFzcyAqL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gV3JhcHBlZEVsZW1lbnQoX2EpIHtcbiAgICB2YXIgZWxlbWVudCA9IF9hLmVsZW1lbnQsXG4gICAgICBjbGFzc05hbWVzID0gX2EuY2xhc3NOYW1lcztcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG4gICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpICYmICEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBlbGVtZW50IHBhc3NlZCcpO1xuICAgIH1cbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV3JhcHBlZEVsZW1lbnQucHJvdG90eXBlLCBcImlzQWN0aXZlXCIsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZGF0YXNldC5jaG9pY2UgPT09ICdhY3RpdmUnO1xuICAgIH0sXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV3JhcHBlZEVsZW1lbnQucHJvdG90eXBlLCBcImRpclwiLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmRpcjtcbiAgICB9LFxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdyYXBwZWRFbGVtZW50LnByb3RvdHlwZSwgXCJ2YWx1ZVwiLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIC8vIHlvdSBtdXN0IGRlZmluZSBzZXR0ZXIgaGVyZSBvdGhlcndpc2UgaXQgd2lsbCBiZSByZWFkb25seSBwcm9wZXJ0eVxuICAgICAgdGhpcy5lbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgfSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG4gIFdyYXBwZWRFbGVtZW50LnByb3RvdHlwZS5jb25jZWFsID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIEhpZGUgcGFzc2VkIGlucHV0XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLmlucHV0KTtcbiAgICB0aGlzLmVsZW1lbnQuaGlkZGVuID0gdHJ1ZTtcbiAgICAvLyBSZW1vdmUgZWxlbWVudCBmcm9tIHRhYiBpbmRleFxuICAgIHRoaXMuZWxlbWVudC50YWJJbmRleCA9IC0xO1xuICAgIC8vIEJhY2t1cCBvcmlnaW5hbCBzdHlsZXMgaWYgYW55XG4gICAgdmFyIG9yaWdTdHlsZSA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgaWYgKG9yaWdTdHlsZSkge1xuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jaG9pY2Utb3JpZy1zdHlsZScsIG9yaWdTdHlsZSk7XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2hvaWNlJywgJ2FjdGl2ZScpO1xuICB9O1xuICBXcmFwcGVkRWxlbWVudC5wcm90b3R5cGUucmV2ZWFsID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFJlaW5zdGF0ZSBwYXNzZWQgZWxlbWVudFxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NOYW1lcy5pbnB1dCk7XG4gICAgdGhpcy5lbGVtZW50LmhpZGRlbiA9IGZhbHNlO1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgLy8gUmVjb3ZlciBvcmlnaW5hbCBzdHlsZXMgaWYgYW55XG4gICAgdmFyIG9yaWdTdHlsZSA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2hvaWNlLW9yaWctc3R5bGUnKTtcbiAgICBpZiAob3JpZ1N0eWxlKSB7XG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWNob2ljZS1vcmlnLXN0eWxlJyk7XG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsIG9yaWdTdHlsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtY2hvaWNlJyk7XG4gICAgLy8gUmUtYXNzaWduIHZhbHVlcyAtIHRoaXMgaXMgd2VpcmQsIEkga25vd1xuICAgIC8vIEB0b2RvIEZpZ3VyZSBvdXQgd2h5IHdlIG5lZWQgdG8gZG8gdGhpc1xuICAgIHRoaXMuZWxlbWVudC52YWx1ZSA9IHRoaXMuZWxlbWVudC52YWx1ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWFzc2lnblxuICB9O1xuXG4gIFdyYXBwZWRFbGVtZW50LnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICB0aGlzLmVsZW1lbnQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgfTtcbiAgV3JhcHBlZEVsZW1lbnQucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XG4gICAgdGhpcy5lbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSB0cnVlO1xuICB9O1xuICBXcmFwcGVkRWxlbWVudC5wcm90b3R5cGUudHJpZ2dlckV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50VHlwZSwgZGF0YSkge1xuICAgICgwLCB1dGlsc18xLmRpc3BhdGNoRXZlbnQpKHRoaXMuZWxlbWVudCwgZXZlbnRUeXBlLCBkYXRhKTtcbiAgfTtcbiAgcmV0dXJuIFdyYXBwZWRFbGVtZW50O1xufSgpO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBXcmFwcGVkRWxlbWVudDtcblxuLyoqKi8gfSksXG5cbi8qKiovIDU0MTpcbi8qKiovIChmdW5jdGlvbihfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cblxudmFyIF9fZXh0ZW5kcyA9IHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKCkge1xuICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCB7XG4gICAgICBfX3Byb3RvX186IFtdXG4gICAgfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICBkLl9fcHJvdG9fXyA9IGI7XG4gICAgfSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTtcbiAgICB9O1xuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICB9O1xuICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICBmdW5jdGlvbiBfXygpIHtcbiAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBkO1xuICAgIH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gIH07XG59KCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gdGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCB8fCBmdW5jdGlvbiAobW9kKSB7XG4gIHJldHVybiBtb2QgJiYgbW9kLl9fZXNNb2R1bGUgPyBtb2QgOiB7XG4gICAgXCJkZWZhdWx0XCI6IG1vZFxuICB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgKHtcbiAgdmFsdWU6IHRydWVcbn0pKTtcbnZhciB3cmFwcGVkX2VsZW1lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChfX3dlYnBhY2tfcmVxdWlyZV9fKDczMCkpO1xudmFyIFdyYXBwZWRJbnB1dCA9IC8qKiBAY2xhc3MgKi9mdW5jdGlvbiAoX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhXcmFwcGVkSW5wdXQsIF9zdXBlcik7XG4gIGZ1bmN0aW9uIFdyYXBwZWRJbnB1dChfYSkge1xuICAgIHZhciBlbGVtZW50ID0gX2EuZWxlbWVudCxcbiAgICAgIGNsYXNzTmFtZXMgPSBfYS5jbGFzc05hbWVzLFxuICAgICAgZGVsaW1pdGVyID0gX2EuZGVsaW1pdGVyO1xuICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHtcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICBjbGFzc05hbWVzOiBjbGFzc05hbWVzXG4gICAgfSkgfHwgdGhpcztcbiAgICBfdGhpcy5kZWxpbWl0ZXIgPSBkZWxpbWl0ZXI7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXcmFwcGVkSW5wdXQucHJvdG90eXBlLCBcInZhbHVlXCIsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQudmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSk7XG4gICAgICB0aGlzLmVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgICB9LFxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbiAgcmV0dXJuIFdyYXBwZWRJbnB1dDtcbn0od3JhcHBlZF9lbGVtZW50XzEuZGVmYXVsdCk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFdyYXBwZWRJbnB1dDtcblxuLyoqKi8gfSksXG5cbi8qKiovIDk4Mjpcbi8qKiovIChmdW5jdGlvbihfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cblxudmFyIF9fZXh0ZW5kcyA9IHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKCkge1xuICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCB7XG4gICAgICBfX3Byb3RvX186IFtdXG4gICAgfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICBkLl9fcHJvdG9fXyA9IGI7XG4gICAgfSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTtcbiAgICB9O1xuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICB9O1xuICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICBmdW5jdGlvbiBfXygpIHtcbiAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBkO1xuICAgIH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gIH07XG59KCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gdGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCB8fCBmdW5jdGlvbiAobW9kKSB7XG4gIHJldHVybiBtb2QgJiYgbW9kLl9fZXNNb2R1bGUgPyBtb2QgOiB7XG4gICAgXCJkZWZhdWx0XCI6IG1vZFxuICB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgKHtcbiAgdmFsdWU6IHRydWVcbn0pKTtcbnZhciB3cmFwcGVkX2VsZW1lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChfX3dlYnBhY2tfcmVxdWlyZV9fKDczMCkpO1xudmFyIFdyYXBwZWRTZWxlY3QgPSAvKiogQGNsYXNzICovZnVuY3Rpb24gKF9zdXBlcikge1xuICBfX2V4dGVuZHMoV3JhcHBlZFNlbGVjdCwgX3N1cGVyKTtcbiAgZnVuY3Rpb24gV3JhcHBlZFNlbGVjdChfYSkge1xuICAgIHZhciBlbGVtZW50ID0gX2EuZWxlbWVudCxcbiAgICAgIGNsYXNzTmFtZXMgPSBfYS5jbGFzc05hbWVzLFxuICAgICAgdGVtcGxhdGUgPSBfYS50ZW1wbGF0ZTtcbiAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB7XG4gICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgY2xhc3NOYW1lczogY2xhc3NOYW1lc1xuICAgIH0pIHx8IHRoaXM7XG4gICAgX3RoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdyYXBwZWRTZWxlY3QucHJvdG90eXBlLCBcInBsYWNlaG9sZGVyT3B0aW9uXCIsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvcignb3B0aW9uW3ZhbHVlPVwiXCJdJykgfHxcbiAgICAgIC8vIEJhY2t3YXJkIGNvbXBhdGliaWxpdHkgbGF5ZXIgZm9yIHRoZSBub24tc3RhbmRhcmQgcGxhY2Vob2xkZXIgYXR0cmlidXRlIHN1cHBvcnRlZCBpbiBvbGRlciB2ZXJzaW9ucy5cbiAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdvcHRpb25bcGxhY2Vob2xkZXJdJyk7XG4gICAgfSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXcmFwcGVkU2VsZWN0LnByb3RvdHlwZSwgXCJvcHRpb25Hcm91cHNcIiwge1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5lbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdPUFRHUk9VUCcpKTtcbiAgICB9LFxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdyYXBwZWRTZWxlY3QucHJvdG90eXBlLCBcIm9wdGlvbnNcIiwge1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5lbGVtZW50Lm9wdGlvbnMpO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgIHZhciBhZGRPcHRpb25Ub0ZyYWdtZW50ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgc3RhbmRhcmQgc2VsZWN0IG9wdGlvblxuICAgICAgICB2YXIgb3B0aW9uID0gX3RoaXMudGVtcGxhdGUoZGF0YSk7XG4gICAgICAgIC8vIEFwcGVuZCBpdCB0byBmcmFnbWVudFxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgfTtcbiAgICAgIC8vIEFkZCBlYWNoIGxpc3QgaXRlbSB0byBsaXN0XG4gICAgICBvcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKG9wdGlvbkRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGFkZE9wdGlvblRvRnJhZ21lbnQob3B0aW9uRGF0YSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYXBwZW5kRG9jRnJhZ21lbnQoZnJhZ21lbnQpO1xuICAgIH0sXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICBXcmFwcGVkU2VsZWN0LnByb3RvdHlwZS5hcHBlbmREb2NGcmFnbWVudCA9IGZ1bmN0aW9uIChmcmFnbWVudCkge1xuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICB9O1xuICByZXR1cm4gV3JhcHBlZFNlbGVjdDtcbn0od3JhcHBlZF9lbGVtZW50XzEuZGVmYXVsdCk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFdyYXBwZWRTZWxlY3Q7XG5cbi8qKiovIH0pLFxuXG4vKioqLyA4ODM6XG4vKioqLyAoZnVuY3Rpb24oX191bnVzZWRfd2VicGFja19tb2R1bGUsIGV4cG9ydHMpIHtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgKHtcbiAgdmFsdWU6IHRydWVcbn0pKTtcbmV4cG9ydHMuU0NST0xMSU5HX1NQRUVEID0gZXhwb3J0cy5TRUxFQ1RfTVVMVElQTEVfVFlQRSA9IGV4cG9ydHMuU0VMRUNUX09ORV9UWVBFID0gZXhwb3J0cy5URVhUX1RZUEUgPSBleHBvcnRzLktFWV9DT0RFUyA9IGV4cG9ydHMuQUNUSU9OX1RZUEVTID0gZXhwb3J0cy5FVkVOVFMgPSB2b2lkIDA7XG5leHBvcnRzLkVWRU5UUyA9IHtcbiAgc2hvd0Ryb3Bkb3duOiAnc2hvd0Ryb3Bkb3duJyxcbiAgaGlkZURyb3Bkb3duOiAnaGlkZURyb3Bkb3duJyxcbiAgY2hhbmdlOiAnY2hhbmdlJyxcbiAgY2hvaWNlOiAnY2hvaWNlJyxcbiAgc2VhcmNoOiAnc2VhcmNoJyxcbiAgYWRkSXRlbTogJ2FkZEl0ZW0nLFxuICByZW1vdmVJdGVtOiAncmVtb3ZlSXRlbScsXG4gIGhpZ2hsaWdodEl0ZW06ICdoaWdobGlnaHRJdGVtJyxcbiAgaGlnaGxpZ2h0Q2hvaWNlOiAnaGlnaGxpZ2h0Q2hvaWNlJyxcbiAgdW5oaWdobGlnaHRJdGVtOiAndW5oaWdobGlnaHRJdGVtJ1xufTtcbmV4cG9ydHMuQUNUSU9OX1RZUEVTID0ge1xuICBBRERfQ0hPSUNFOiAnQUREX0NIT0lDRScsXG4gIEZJTFRFUl9DSE9JQ0VTOiAnRklMVEVSX0NIT0lDRVMnLFxuICBBQ1RJVkFURV9DSE9JQ0VTOiAnQUNUSVZBVEVfQ0hPSUNFUycsXG4gIENMRUFSX0NIT0lDRVM6ICdDTEVBUl9DSE9JQ0VTJyxcbiAgQUREX0dST1VQOiAnQUREX0dST1VQJyxcbiAgQUREX0lURU06ICdBRERfSVRFTScsXG4gIFJFTU9WRV9JVEVNOiAnUkVNT1ZFX0lURU0nLFxuICBISUdITElHSFRfSVRFTTogJ0hJR0hMSUdIVF9JVEVNJyxcbiAgQ0xFQVJfQUxMOiAnQ0xFQVJfQUxMJyxcbiAgUkVTRVRfVE86ICdSRVNFVF9UTycsXG4gIFNFVF9JU19MT0FESU5HOiAnU0VUX0lTX0xPQURJTkcnXG59O1xuZXhwb3J0cy5LRVlfQ09ERVMgPSB7XG4gIEJBQ0tfS0VZOiA0NixcbiAgREVMRVRFX0tFWTogOCxcbiAgRU5URVJfS0VZOiAxMyxcbiAgQV9LRVk6IDY1LFxuICBFU0NfS0VZOiAyNyxcbiAgVVBfS0VZOiAzOCxcbiAgRE9XTl9LRVk6IDQwLFxuICBQQUdFX1VQX0tFWTogMzMsXG4gIFBBR0VfRE9XTl9LRVk6IDM0XG59O1xuZXhwb3J0cy5URVhUX1RZUEUgPSAndGV4dCc7XG5leHBvcnRzLlNFTEVDVF9PTkVfVFlQRSA9ICdzZWxlY3Qtb25lJztcbmV4cG9ydHMuU0VMRUNUX01VTFRJUExFX1RZUEUgPSAnc2VsZWN0LW11bHRpcGxlJztcbmV4cG9ydHMuU0NST0xMSU5HX1NQRUVEID0gNDtcblxuLyoqKi8gfSksXG5cbi8qKiovIDc4OTpcbi8qKiovIChmdW5jdGlvbihfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCAoe1xuICB2YWx1ZTogdHJ1ZVxufSkpO1xuZXhwb3J0cy5ERUZBVUxUX0NPTkZJRyA9IGV4cG9ydHMuREVGQVVMVF9DTEFTU05BTUVTID0gdm9pZCAwO1xudmFyIHV0aWxzXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc5OSk7XG5leHBvcnRzLkRFRkFVTFRfQ0xBU1NOQU1FUyA9IHtcbiAgY29udGFpbmVyT3V0ZXI6ICdjaG9pY2VzJyxcbiAgY29udGFpbmVySW5uZXI6ICdjaG9pY2VzX19pbm5lcicsXG4gIGlucHV0OiAnY2hvaWNlc19faW5wdXQnLFxuICBpbnB1dENsb25lZDogJ2Nob2ljZXNfX2lucHV0LS1jbG9uZWQnLFxuICBsaXN0OiAnY2hvaWNlc19fbGlzdCcsXG4gIGxpc3RJdGVtczogJ2Nob2ljZXNfX2xpc3QtLW11bHRpcGxlJyxcbiAgbGlzdFNpbmdsZTogJ2Nob2ljZXNfX2xpc3QtLXNpbmdsZScsXG4gIGxpc3REcm9wZG93bjogJ2Nob2ljZXNfX2xpc3QtLWRyb3Bkb3duJyxcbiAgaXRlbTogJ2Nob2ljZXNfX2l0ZW0nLFxuICBpdGVtU2VsZWN0YWJsZTogJ2Nob2ljZXNfX2l0ZW0tLXNlbGVjdGFibGUnLFxuICBpdGVtRGlzYWJsZWQ6ICdjaG9pY2VzX19pdGVtLS1kaXNhYmxlZCcsXG4gIGl0ZW1DaG9pY2U6ICdjaG9pY2VzX19pdGVtLS1jaG9pY2UnLFxuICBwbGFjZWhvbGRlcjogJ2Nob2ljZXNfX3BsYWNlaG9sZGVyJyxcbiAgZ3JvdXA6ICdjaG9pY2VzX19ncm91cCcsXG4gIGdyb3VwSGVhZGluZzogJ2Nob2ljZXNfX2hlYWRpbmcnLFxuICBidXR0b246ICdjaG9pY2VzX19idXR0b24nLFxuICBhY3RpdmVTdGF0ZTogJ2lzLWFjdGl2ZScsXG4gIGZvY3VzU3RhdGU6ICdpcy1mb2N1c2VkJyxcbiAgb3BlblN0YXRlOiAnaXMtb3BlbicsXG4gIGRpc2FibGVkU3RhdGU6ICdpcy1kaXNhYmxlZCcsXG4gIGhpZ2hsaWdodGVkU3RhdGU6ICdpcy1oaWdobGlnaHRlZCcsXG4gIHNlbGVjdGVkU3RhdGU6ICdpcy1zZWxlY3RlZCcsXG4gIGZsaXBwZWRTdGF0ZTogJ2lzLWZsaXBwZWQnLFxuICBsb2FkaW5nU3RhdGU6ICdpcy1sb2FkaW5nJyxcbiAgbm9SZXN1bHRzOiAnaGFzLW5vLXJlc3VsdHMnLFxuICBub0Nob2ljZXM6ICdoYXMtbm8tY2hvaWNlcydcbn07XG5leHBvcnRzLkRFRkFVTFRfQ09ORklHID0ge1xuICBpdGVtczogW10sXG4gIGNob2ljZXM6IFtdLFxuICBzaWxlbnQ6IGZhbHNlLFxuICByZW5kZXJDaG9pY2VMaW1pdDogLTEsXG4gIG1heEl0ZW1Db3VudDogLTEsXG4gIGFkZEl0ZW1zOiB0cnVlLFxuICBhZGRJdGVtRmlsdGVyOiBudWxsLFxuICByZW1vdmVJdGVtczogdHJ1ZSxcbiAgcmVtb3ZlSXRlbUJ1dHRvbjogZmFsc2UsXG4gIGVkaXRJdGVtczogZmFsc2UsXG4gIGFsbG93SFRNTDogdHJ1ZSxcbiAgZHVwbGljYXRlSXRlbXNBbGxvd2VkOiB0cnVlLFxuICBkZWxpbWl0ZXI6ICcsJyxcbiAgcGFzdGU6IHRydWUsXG4gIHNlYXJjaEVuYWJsZWQ6IHRydWUsXG4gIHNlYXJjaENob2ljZXM6IHRydWUsXG4gIHNlYXJjaEZsb29yOiAxLFxuICBzZWFyY2hSZXN1bHRMaW1pdDogNCxcbiAgc2VhcmNoRmllbGRzOiBbJ2xhYmVsJywgJ3ZhbHVlJ10sXG4gIHBvc2l0aW9uOiAnYXV0bycsXG4gIHJlc2V0U2Nyb2xsUG9zaXRpb246IHRydWUsXG4gIHNob3VsZFNvcnQ6IHRydWUsXG4gIHNob3VsZFNvcnRJdGVtczogZmFsc2UsXG4gIHNvcnRlcjogdXRpbHNfMS5zb3J0QnlBbHBoYSxcbiAgcGxhY2Vob2xkZXI6IHRydWUsXG4gIHBsYWNlaG9sZGVyVmFsdWU6IG51bGwsXG4gIHNlYXJjaFBsYWNlaG9sZGVyVmFsdWU6IG51bGwsXG4gIHByZXBlbmRWYWx1ZTogbnVsbCxcbiAgYXBwZW5kVmFsdWU6IG51bGwsXG4gIHJlbmRlclNlbGVjdGVkQ2hvaWNlczogJ2F1dG8nLFxuICBsb2FkaW5nVGV4dDogJ0xvYWRpbmcuLi4nLFxuICBub1Jlc3VsdHNUZXh0OiAnTm8gcmVzdWx0cyBmb3VuZCcsXG4gIG5vQ2hvaWNlc1RleHQ6ICdObyBjaG9pY2VzIHRvIGNob29zZSBmcm9tJyxcbiAgaXRlbVNlbGVjdFRleHQ6ICdQcmVzcyB0byBzZWxlY3QnLFxuICB1bmlxdWVJdGVtVGV4dDogJ09ubHkgdW5pcXVlIHZhbHVlcyBjYW4gYmUgYWRkZWQnLFxuICBjdXN0b21BZGRJdGVtVGV4dDogJ09ubHkgdmFsdWVzIG1hdGNoaW5nIHNwZWNpZmljIGNvbmRpdGlvbnMgY2FuIGJlIGFkZGVkJyxcbiAgYWRkSXRlbVRleHQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBcIlByZXNzIEVudGVyIHRvIGFkZCA8Yj5cXFwiXCIuY29uY2F0KCgwLCB1dGlsc18xLnNhbml0aXNlKSh2YWx1ZSksIFwiXFxcIjwvYj5cIik7XG4gIH0sXG4gIG1heEl0ZW1UZXh0OiBmdW5jdGlvbiAobWF4SXRlbUNvdW50KSB7XG4gICAgcmV0dXJuIFwiT25seSBcIi5jb25jYXQobWF4SXRlbUNvdW50LCBcIiB2YWx1ZXMgY2FuIGJlIGFkZGVkXCIpO1xuICB9LFxuICB2YWx1ZUNvbXBhcmVyOiBmdW5jdGlvbiAodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICByZXR1cm4gdmFsdWUxID09PSB2YWx1ZTI7XG4gIH0sXG4gIGZ1c2VPcHRpb25zOiB7XG4gICAgaW5jbHVkZVNjb3JlOiB0cnVlXG4gIH0sXG4gIGxhYmVsSWQ6ICcnLFxuICBjYWxsYmFja09uSW5pdDogbnVsbCxcbiAgY2FsbGJhY2tPbkNyZWF0ZVRlbXBsYXRlczogbnVsbCxcbiAgY2xhc3NOYW1lczogZXhwb3J0cy5ERUZBVUxUX0NMQVNTTkFNRVNcbn07XG5cbi8qKiovIH0pLFxuXG4vKioqLyAxODpcbi8qKiovIChmdW5jdGlvbihfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgZXhwb3J0cykge1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCAoe1xuICB2YWx1ZTogdHJ1ZVxufSkpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gOTc4OlxuLyoqKi8gKGZ1bmN0aW9uKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBleHBvcnRzKSB7XG5cblxuXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsICh7XG4gIHZhbHVlOiB0cnVlXG59KSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyA5NDg6XG4vKioqLyAoZnVuY3Rpb24oX191bnVzZWRfd2VicGFja19tb2R1bGUsIGV4cG9ydHMpIHtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgKHtcbiAgdmFsdWU6IHRydWVcbn0pKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIDM1OTpcbi8qKiovIChmdW5jdGlvbihfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgZXhwb3J0cykge1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCAoe1xuICB2YWx1ZTogdHJ1ZVxufSkpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gMjg1OlxuLyoqKi8gKGZ1bmN0aW9uKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBleHBvcnRzKSB7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsICh7XG4gIHZhbHVlOiB0cnVlXG59KSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyA1MzM6XG4vKioqLyAoZnVuY3Rpb24oX191bnVzZWRfd2VicGFja19tb2R1bGUsIGV4cG9ydHMpIHtcblxuXG5cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgKHtcbiAgdmFsdWU6IHRydWVcbn0pKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIDE4Nzpcbi8qKiovIChmdW5jdGlvbihfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cblxudmFyIF9fY3JlYXRlQmluZGluZyA9IHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcgfHwgKE9iamVjdC5jcmVhdGUgPyBmdW5jdGlvbiAobywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgIGRlc2MgPSB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBtW2tdO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0gOiBmdW5jdGlvbiAobywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgb1trMl0gPSBtW2tdO1xufSk7XG52YXIgX19leHBvcnRTdGFyID0gdGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhciB8fCBmdW5jdGlvbiAobSwgZXhwb3J0cykge1xuICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCAoe1xuICB2YWx1ZTogdHJ1ZVxufSkpO1xuX19leHBvcnRTdGFyKF9fd2VicGFja19yZXF1aXJlX18oMTgpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihfX3dlYnBhY2tfcmVxdWlyZV9fKDk3OCksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKF9fd2VicGFja19yZXF1aXJlX18oOTQ4KSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIoX193ZWJwYWNrX3JlcXVpcmVfXygzNTkpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihfX3dlYnBhY2tfcmVxdWlyZV9fKDI4NSksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKF9fd2VicGFja19yZXF1aXJlX18oNTMzKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIoX193ZWJwYWNrX3JlcXVpcmVfXygyODcpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihfX3dlYnBhY2tfcmVxdWlyZV9fKDEzMiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKF9fd2VicGFja19yZXF1aXJlX18oODM3KSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIoX193ZWJwYWNrX3JlcXVpcmVfXyg1OTgpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihfX3dlYnBhY2tfcmVxdWlyZV9fKDM2OSksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKF9fd2VicGFja19yZXF1aXJlX18oMzcpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihfX3dlYnBhY2tfcmVxdWlyZV9fKDQ3KSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIoX193ZWJwYWNrX3JlcXVpcmVfXyg5MjMpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihfX3dlYnBhY2tfcmVxdWlyZV9fKDg3NiksIGV4cG9ydHMpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gMjg3OlxuLyoqKi8gKGZ1bmN0aW9uKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBleHBvcnRzKSB7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsICh7XG4gIHZhbHVlOiB0cnVlXG59KSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyAxMzI6XG4vKioqLyAoZnVuY3Rpb24oX191bnVzZWRfd2VicGFja19tb2R1bGUsIGV4cG9ydHMpIHtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgKHtcbiAgdmFsdWU6IHRydWVcbn0pKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIDgzNzpcbi8qKiovIChmdW5jdGlvbihfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgZXhwb3J0cykge1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCAoe1xuICB2YWx1ZTogdHJ1ZVxufSkpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gNTk4OlxuLyoqKi8gKGZ1bmN0aW9uKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBleHBvcnRzKSB7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsICh7XG4gIHZhbHVlOiB0cnVlXG59KSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyAzNzpcbi8qKiovIChmdW5jdGlvbihfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgZXhwb3J0cykge1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCAoe1xuICB2YWx1ZTogdHJ1ZVxufSkpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gMzY5OlxuLyoqKi8gKGZ1bmN0aW9uKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBleHBvcnRzKSB7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsICh7XG4gIHZhbHVlOiB0cnVlXG59KSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyA0Nzpcbi8qKiovIChmdW5jdGlvbihfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgZXhwb3J0cykge1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCAoe1xuICB2YWx1ZTogdHJ1ZVxufSkpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gOTIzOlxuLyoqKi8gKGZ1bmN0aW9uKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBleHBvcnRzKSB7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsICh7XG4gIHZhbHVlOiB0cnVlXG59KSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyA4NzY6XG4vKioqLyAoZnVuY3Rpb24oX191bnVzZWRfd2VicGFja19tb2R1bGUsIGV4cG9ydHMpIHtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgKHtcbiAgdmFsdWU6IHRydWVcbn0pKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIDc5OTpcbi8qKiovIChmdW5jdGlvbihfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgZXhwb3J0cykge1xuXG5cblxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCAoe1xuICB2YWx1ZTogdHJ1ZVxufSkpO1xuZXhwb3J0cy5wYXJzZUN1c3RvbVByb3BlcnRpZXMgPSBleHBvcnRzLmRpZmYgPSBleHBvcnRzLmNsb25lT2JqZWN0ID0gZXhwb3J0cy5leGlzdHNJbkFycmF5ID0gZXhwb3J0cy5kaXNwYXRjaEV2ZW50ID0gZXhwb3J0cy5zb3J0QnlTY29yZSA9IGV4cG9ydHMuc29ydEJ5QWxwaGEgPSBleHBvcnRzLnN0clRvRWwgPSBleHBvcnRzLnNhbml0aXNlID0gZXhwb3J0cy5pc1Njcm9sbGVkSW50b1ZpZXcgPSBleHBvcnRzLmdldEFkamFjZW50RWwgPSBleHBvcnRzLndyYXAgPSBleHBvcnRzLmlzVHlwZSA9IGV4cG9ydHMuZ2V0VHlwZSA9IGV4cG9ydHMuZ2VuZXJhdGVJZCA9IGV4cG9ydHMuZ2VuZXJhdGVDaGFycyA9IGV4cG9ydHMuZ2V0UmFuZG9tTnVtYmVyID0gdm9pZCAwO1xudmFyIGdldFJhbmRvbU51bWJlciA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xufTtcbmV4cG9ydHMuZ2V0UmFuZG9tTnVtYmVyID0gZ2V0UmFuZG9tTnVtYmVyO1xudmFyIGdlbmVyYXRlQ2hhcnMgPSBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gIHJldHVybiBBcnJheS5mcm9tKHtcbiAgICBsZW5ndGg6IGxlbmd0aFxuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICgwLCBleHBvcnRzLmdldFJhbmRvbU51bWJlcikoMCwgMzYpLnRvU3RyaW5nKDM2KTtcbiAgfSkuam9pbignJyk7XG59O1xuZXhwb3J0cy5nZW5lcmF0ZUNoYXJzID0gZ2VuZXJhdGVDaGFycztcbnZhciBnZW5lcmF0ZUlkID0gZnVuY3Rpb24gKGVsZW1lbnQsIHByZWZpeCkge1xuICB2YXIgaWQgPSBlbGVtZW50LmlkIHx8IGVsZW1lbnQubmFtZSAmJiBcIlwiLmNvbmNhdChlbGVtZW50Lm5hbWUsIFwiLVwiKS5jb25jYXQoKDAsIGV4cG9ydHMuZ2VuZXJhdGVDaGFycykoMikpIHx8ICgwLCBleHBvcnRzLmdlbmVyYXRlQ2hhcnMpKDQpO1xuICBpZCA9IGlkLnJlcGxhY2UoLyg6fFxcLnxcXFt8XFxdfCwpL2csICcnKTtcbiAgaWQgPSBcIlwiLmNvbmNhdChwcmVmaXgsIFwiLVwiKS5jb25jYXQoaWQpO1xuICByZXR1cm4gaWQ7XG59O1xuZXhwb3J0cy5nZW5lcmF0ZUlkID0gZ2VuZXJhdGVJZDtcbnZhciBnZXRUeXBlID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikuc2xpY2UoOCwgLTEpO1xufTtcbmV4cG9ydHMuZ2V0VHlwZSA9IGdldFR5cGU7XG52YXIgaXNUeXBlID0gZnVuY3Rpb24gKHR5cGUsIG9iaikge1xuICByZXR1cm4gb2JqICE9PSB1bmRlZmluZWQgJiYgb2JqICE9PSBudWxsICYmICgwLCBleHBvcnRzLmdldFR5cGUpKG9iaikgPT09IHR5cGU7XG59O1xuZXhwb3J0cy5pc1R5cGUgPSBpc1R5cGU7XG52YXIgd3JhcCA9IGZ1bmN0aW9uIChlbGVtZW50LCB3cmFwcGVyKSB7XG4gIGlmICh3cmFwcGVyID09PSB2b2lkIDApIHtcbiAgICB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIH1cbiAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgIGlmIChlbGVtZW50Lm5leHRTaWJsaW5nKSB7XG4gICAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGVsZW1lbnQubmV4dFNpYmxpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgfVxuICB9XG4gIHJldHVybiB3cmFwcGVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xufTtcbmV4cG9ydHMud3JhcCA9IHdyYXA7XG52YXIgZ2V0QWRqYWNlbnRFbCA9IGZ1bmN0aW9uIChzdGFydEVsLCBzZWxlY3RvciwgZGlyZWN0aW9uKSB7XG4gIGlmIChkaXJlY3Rpb24gPT09IHZvaWQgMCkge1xuICAgIGRpcmVjdGlvbiA9IDE7XG4gIH1cbiAgdmFyIHByb3AgPSBcIlwiLmNvbmNhdChkaXJlY3Rpb24gPiAwID8gJ25leHQnIDogJ3ByZXZpb3VzJywgXCJFbGVtZW50U2libGluZ1wiKTtcbiAgdmFyIHNpYmxpbmcgPSBzdGFydEVsW3Byb3BdO1xuICB3aGlsZSAoc2libGluZykge1xuICAgIGlmIChzaWJsaW5nLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICByZXR1cm4gc2libGluZztcbiAgICB9XG4gICAgc2libGluZyA9IHNpYmxpbmdbcHJvcF07XG4gIH1cbiAgcmV0dXJuIHNpYmxpbmc7XG59O1xuZXhwb3J0cy5nZXRBZGphY2VudEVsID0gZ2V0QWRqYWNlbnRFbDtcbnZhciBpc1Njcm9sbGVkSW50b1ZpZXcgPSBmdW5jdGlvbiAoZWxlbWVudCwgcGFyZW50LCBkaXJlY3Rpb24pIHtcbiAgaWYgKGRpcmVjdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgZGlyZWN0aW9uID0gMTtcbiAgfVxuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGlzVmlzaWJsZTtcbiAgaWYgKGRpcmVjdGlvbiA+IDApIHtcbiAgICAvLyBJbiB2aWV3IGZyb20gYm90dG9tXG4gICAgaXNWaXNpYmxlID0gcGFyZW50LnNjcm9sbFRvcCArIHBhcmVudC5vZmZzZXRIZWlnaHQgPj0gZWxlbWVudC5vZmZzZXRUb3AgKyBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgfSBlbHNlIHtcbiAgICAvLyBJbiB2aWV3IGZyb20gdG9wXG4gICAgaXNWaXNpYmxlID0gZWxlbWVudC5vZmZzZXRUb3AgPj0gcGFyZW50LnNjcm9sbFRvcDtcbiAgfVxuICByZXR1cm4gaXNWaXNpYmxlO1xufTtcbmV4cG9ydHMuaXNTY3JvbGxlZEludG9WaWV3ID0gaXNTY3JvbGxlZEludG9WaWV3O1xudmFyIHNhbml0aXNlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLz4vZywgJyZndDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xufTtcbmV4cG9ydHMuc2FuaXRpc2UgPSBzYW5pdGlzZTtcbmV4cG9ydHMuc3RyVG9FbCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRtcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyKSB7XG4gICAgdmFyIGNsZWFuZWRJbnB1dCA9IHN0ci50cmltKCk7XG4gICAgdG1wRWwuaW5uZXJIVE1MID0gY2xlYW5lZElucHV0O1xuICAgIHZhciBmaXJsZENoaWxkID0gdG1wRWwuY2hpbGRyZW5bMF07XG4gICAgd2hpbGUgKHRtcEVsLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRtcEVsLnJlbW92ZUNoaWxkKHRtcEVsLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICByZXR1cm4gZmlybGRDaGlsZDtcbiAgfTtcbn0oKTtcbnZhciBzb3J0QnlBbHBoYSA9IGZ1bmN0aW9uIChfYSwgX2IpIHtcbiAgdmFyIHZhbHVlID0gX2EudmFsdWUsXG4gICAgX2MgPSBfYS5sYWJlbCxcbiAgICBsYWJlbCA9IF9jID09PSB2b2lkIDAgPyB2YWx1ZSA6IF9jO1xuICB2YXIgdmFsdWUyID0gX2IudmFsdWUsXG4gICAgX2QgPSBfYi5sYWJlbCxcbiAgICBsYWJlbDIgPSBfZCA9PT0gdm9pZCAwID8gdmFsdWUyIDogX2Q7XG4gIHJldHVybiBsYWJlbC5sb2NhbGVDb21wYXJlKGxhYmVsMiwgW10sIHtcbiAgICBzZW5zaXRpdml0eTogJ2Jhc2UnLFxuICAgIGlnbm9yZVB1bmN0dWF0aW9uOiB0cnVlLFxuICAgIG51bWVyaWM6IHRydWVcbiAgfSk7XG59O1xuZXhwb3J0cy5zb3J0QnlBbHBoYSA9IHNvcnRCeUFscGhhO1xudmFyIHNvcnRCeVNjb3JlID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgdmFyIF9hID0gYS5zY29yZSxcbiAgICBzY29yZUEgPSBfYSA9PT0gdm9pZCAwID8gMCA6IF9hO1xuICB2YXIgX2IgPSBiLnNjb3JlLFxuICAgIHNjb3JlQiA9IF9iID09PSB2b2lkIDAgPyAwIDogX2I7XG4gIHJldHVybiBzY29yZUEgLSBzY29yZUI7XG59O1xuZXhwb3J0cy5zb3J0QnlTY29yZSA9IHNvcnRCeVNjb3JlO1xudmFyIGRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgY3VzdG9tQXJncykge1xuICBpZiAoY3VzdG9tQXJncyA9PT0gdm9pZCAwKSB7XG4gICAgY3VzdG9tQXJncyA9IG51bGw7XG4gIH1cbiAgdmFyIGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KHR5cGUsIHtcbiAgICBkZXRhaWw6IGN1c3RvbUFyZ3MsXG4gICAgYnViYmxlczogdHJ1ZSxcbiAgICBjYW5jZWxhYmxlOiB0cnVlXG4gIH0pO1xuICByZXR1cm4gZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn07XG5leHBvcnRzLmRpc3BhdGNoRXZlbnQgPSBkaXNwYXRjaEV2ZW50O1xudmFyIGV4aXN0c0luQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXksIHZhbHVlLCBrZXkpIHtcbiAgaWYgKGtleSA9PT0gdm9pZCAwKSB7XG4gICAga2V5ID0gJ3ZhbHVlJztcbiAgfVxuICByZXR1cm4gYXJyYXkuc29tZShmdW5jdGlvbiAoaXRlbSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gaXRlbVtrZXldID09PSB2YWx1ZS50cmltKCk7XG4gICAgfVxuICAgIHJldHVybiBpdGVtW2tleV0gPT09IHZhbHVlO1xuICB9KTtcbn07XG5leHBvcnRzLmV4aXN0c0luQXJyYXkgPSBleGlzdHNJbkFycmF5O1xudmFyIGNsb25lT2JqZWN0ID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbn07XG5leHBvcnRzLmNsb25lT2JqZWN0ID0gY2xvbmVPYmplY3Q7XG4vKipcbiAqIFJldHVybnMgYW4gYXJyYXkgb2Yga2V5cyBwcmVzZW50IG9uIHRoZSBmaXJzdCBidXQgbWlzc2luZyBvbiB0aGUgc2Vjb25kIG9iamVjdFxuICovXG52YXIgZGlmZiA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIHZhciBhS2V5cyA9IE9iamVjdC5rZXlzKGEpLnNvcnQoKTtcbiAgdmFyIGJLZXlzID0gT2JqZWN0LmtleXMoYikuc29ydCgpO1xuICByZXR1cm4gYUtleXMuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgcmV0dXJuIGJLZXlzLmluZGV4T2YoaSkgPCAwO1xuICB9KTtcbn07XG5leHBvcnRzLmRpZmYgPSBkaWZmO1xudmFyIHBhcnNlQ3VzdG9tUHJvcGVydGllcyA9IGZ1bmN0aW9uIChjdXN0b21Qcm9wZXJ0aWVzKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tUHJvcGVydGllcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoY3VzdG9tUHJvcGVydGllcyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGN1c3RvbVByb3BlcnRpZXM7XG4gICAgfVxuICB9XG4gIHJldHVybiB7fTtcbn07XG5leHBvcnRzLnBhcnNlQ3VzdG9tUHJvcGVydGllcyA9IHBhcnNlQ3VzdG9tUHJvcGVydGllcztcblxuLyoqKi8gfSksXG5cbi8qKiovIDI3Mzpcbi8qKiovIChmdW5jdGlvbihfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgZXhwb3J0cykge1xuXG5cblxudmFyIF9fc3ByZWFkQXJyYXkgPSB0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSB8fCBmdW5jdGlvbiAodG8sIGZyb20sIHBhY2spIHtcbiAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsICh7XG4gIHZhbHVlOiB0cnVlXG59KSk7XG5leHBvcnRzLmRlZmF1bHRTdGF0ZSA9IHZvaWQgMDtcbmV4cG9ydHMuZGVmYXVsdFN0YXRlID0gW107XG5mdW5jdGlvbiBjaG9pY2VzKHN0YXRlLCBhY3Rpb24pIHtcbiAgaWYgKHN0YXRlID09PSB2b2lkIDApIHtcbiAgICBzdGF0ZSA9IGV4cG9ydHMuZGVmYXVsdFN0YXRlO1xuICB9XG4gIGlmIChhY3Rpb24gPT09IHZvaWQgMCkge1xuICAgIGFjdGlvbiA9IHt9O1xuICB9XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdBRERfQ0hPSUNFJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIGFkZENob2ljZUFjdGlvbiA9IGFjdGlvbjtcbiAgICAgICAgdmFyIGNob2ljZSA9IHtcbiAgICAgICAgICBpZDogYWRkQ2hvaWNlQWN0aW9uLmlkLFxuICAgICAgICAgIGVsZW1lbnRJZDogYWRkQ2hvaWNlQWN0aW9uLmVsZW1lbnRJZCxcbiAgICAgICAgICBncm91cElkOiBhZGRDaG9pY2VBY3Rpb24uZ3JvdXBJZCxcbiAgICAgICAgICB2YWx1ZTogYWRkQ2hvaWNlQWN0aW9uLnZhbHVlLFxuICAgICAgICAgIGxhYmVsOiBhZGRDaG9pY2VBY3Rpb24ubGFiZWwgfHwgYWRkQ2hvaWNlQWN0aW9uLnZhbHVlLFxuICAgICAgICAgIGRpc2FibGVkOiBhZGRDaG9pY2VBY3Rpb24uZGlzYWJsZWQgfHwgZmFsc2UsXG4gICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICBzY29yZTogOTk5OSxcbiAgICAgICAgICBjdXN0b21Qcm9wZXJ0aWVzOiBhZGRDaG9pY2VBY3Rpb24uY3VzdG9tUHJvcGVydGllcyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogYWRkQ2hvaWNlQWN0aW9uLnBsYWNlaG9sZGVyIHx8IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIC8qXG4gICAgICAgICAgQSBkaXNhYmxlZCBjaG9pY2UgYXBwZWFycyBpbiB0aGUgY2hvaWNlIGRyb3Bkb3duIGJ1dCBjYW5ub3QgYmUgc2VsZWN0ZWRcbiAgICAgICAgICBBIHNlbGVjdGVkIGNob2ljZSBoYXMgYmVlbiBhZGRlZCB0byB0aGUgcGFzc2VkIGlucHV0J3MgdmFsdWUgKGFkZGVkIGFzIGFuIGl0ZW0pXG4gICAgICAgICAgQW4gYWN0aXZlIGNob2ljZSBhcHBlYXJzIHdpdGhpbiB0aGUgY2hvaWNlIGRyb3Bkb3duXG4gICAgICAgICovXG4gICAgICAgIHJldHVybiBfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoW10sIHN0YXRlLCB0cnVlKSwgW2Nob2ljZV0sIGZhbHNlKTtcbiAgICAgIH1cbiAgICBjYXNlICdBRERfSVRFTSc6XG4gICAgICB7XG4gICAgICAgIHZhciBhZGRJdGVtQWN0aW9uXzEgPSBhY3Rpb247XG4gICAgICAgIC8vIFdoZW4gYW4gaXRlbSBpcyBhZGRlZCBhbmQgaXQgaGFzIGFuIGFzc29jaWF0ZWQgY2hvaWNlLFxuICAgICAgICAvLyB3ZSB3YW50IHRvIGRpc2FibGUgaXQgc28gaXQgY2FuJ3QgYmUgY2hvc2VuIGFnYWluXG4gICAgICAgIGlmIChhZGRJdGVtQWN0aW9uXzEuY2hvaWNlSWQgPiAtMSkge1xuICAgICAgICAgIHJldHVybiBzdGF0ZS5tYXAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgdmFyIGNob2ljZSA9IG9iajtcbiAgICAgICAgICAgIGlmIChjaG9pY2UuaWQgPT09IHBhcnNlSW50KFwiXCIuY29uY2F0KGFkZEl0ZW1BY3Rpb25fMS5jaG9pY2VJZCksIDEwKSkge1xuICAgICAgICAgICAgICBjaG9pY2Uuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNob2ljZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgY2FzZSAnUkVNT1ZFX0lURU0nOlxuICAgICAge1xuICAgICAgICB2YXIgcmVtb3ZlSXRlbUFjdGlvbl8xID0gYWN0aW9uO1xuICAgICAgICAvLyBXaGVuIGFuIGl0ZW0gaXMgcmVtb3ZlZCBhbmQgaXQgaGFzIGFuIGFzc29jaWF0ZWQgY2hvaWNlLFxuICAgICAgICAvLyB3ZSB3YW50IHRvIHJlLWVuYWJsZSBpdCBzbyBpdCBjYW4gYmUgY2hvc2VuIGFnYWluXG4gICAgICAgIGlmIChyZW1vdmVJdGVtQWN0aW9uXzEuY2hvaWNlSWQgJiYgcmVtb3ZlSXRlbUFjdGlvbl8xLmNob2ljZUlkID4gLTEpIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGUubWFwKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIHZhciBjaG9pY2UgPSBvYmo7XG4gICAgICAgICAgICBpZiAoY2hvaWNlLmlkID09PSBwYXJzZUludChcIlwiLmNvbmNhdChyZW1vdmVJdGVtQWN0aW9uXzEuY2hvaWNlSWQpLCAxMCkpIHtcbiAgICAgICAgICAgICAgY2hvaWNlLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2hvaWNlO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICBjYXNlICdGSUxURVJfQ0hPSUNFUyc6XG4gICAgICB7XG4gICAgICAgIHZhciBmaWx0ZXJDaG9pY2VzQWN0aW9uXzEgPSBhY3Rpb247XG4gICAgICAgIHJldHVybiBzdGF0ZS5tYXAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgIHZhciBjaG9pY2UgPSBvYmo7XG4gICAgICAgICAgLy8gU2V0IGFjdGl2ZSBzdGF0ZSBiYXNlZCBvbiB3aGV0aGVyIGNob2ljZSBpc1xuICAgICAgICAgIC8vIHdpdGhpbiBmaWx0ZXJlZCByZXN1bHRzXG4gICAgICAgICAgY2hvaWNlLmFjdGl2ZSA9IGZpbHRlckNob2ljZXNBY3Rpb25fMS5yZXN1bHRzLnNvbWUoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IF9hLml0ZW0sXG4gICAgICAgICAgICAgIHNjb3JlID0gX2Euc2NvcmU7XG4gICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gY2hvaWNlLmlkKSB7XG4gICAgICAgICAgICAgIGNob2ljZS5zY29yZSA9IHNjb3JlO1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gY2hvaWNlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICBjYXNlICdBQ1RJVkFURV9DSE9JQ0VTJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIGFjdGl2YXRlQ2hvaWNlc0FjdGlvbl8xID0gYWN0aW9uO1xuICAgICAgICByZXR1cm4gc3RhdGUubWFwKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICB2YXIgY2hvaWNlID0gb2JqO1xuICAgICAgICAgIGNob2ljZS5hY3RpdmUgPSBhY3RpdmF0ZUNob2ljZXNBY3Rpb25fMS5hY3RpdmU7XG4gICAgICAgICAgcmV0dXJuIGNob2ljZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgY2FzZSAnQ0xFQVJfQ0hPSUNFUyc6XG4gICAgICB7XG4gICAgICAgIHJldHVybiBleHBvcnRzLmRlZmF1bHRTdGF0ZTtcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gIH1cbn1cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gY2hvaWNlcztcblxuLyoqKi8gfSksXG5cbi8qKiovIDg3MTpcbi8qKiovIChmdW5jdGlvbihfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgZXhwb3J0cykge1xuXG5cblxudmFyIF9fc3ByZWFkQXJyYXkgPSB0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSB8fCBmdW5jdGlvbiAodG8sIGZyb20sIHBhY2spIHtcbiAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsICh7XG4gIHZhbHVlOiB0cnVlXG59KSk7XG5leHBvcnRzLmRlZmF1bHRTdGF0ZSA9IHZvaWQgMDtcbmV4cG9ydHMuZGVmYXVsdFN0YXRlID0gW107XG5mdW5jdGlvbiBncm91cHMoc3RhdGUsIGFjdGlvbikge1xuICBpZiAoc3RhdGUgPT09IHZvaWQgMCkge1xuICAgIHN0YXRlID0gZXhwb3J0cy5kZWZhdWx0U3RhdGU7XG4gIH1cbiAgaWYgKGFjdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgYWN0aW9uID0ge307XG4gIH1cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0FERF9HUk9VUCc6XG4gICAgICB7XG4gICAgICAgIHZhciBhZGRHcm91cEFjdGlvbiA9IGFjdGlvbjtcbiAgICAgICAgcmV0dXJuIF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShbXSwgc3RhdGUsIHRydWUpLCBbe1xuICAgICAgICAgIGlkOiBhZGRHcm91cEFjdGlvbi5pZCxcbiAgICAgICAgICB2YWx1ZTogYWRkR3JvdXBBY3Rpb24udmFsdWUsXG4gICAgICAgICAgYWN0aXZlOiBhZGRHcm91cEFjdGlvbi5hY3RpdmUsXG4gICAgICAgICAgZGlzYWJsZWQ6IGFkZEdyb3VwQWN0aW9uLmRpc2FibGVkXG4gICAgICAgIH1dLCBmYWxzZSk7XG4gICAgICB9XG4gICAgY2FzZSAnQ0xFQVJfQ0hPSUNFUyc6XG4gICAgICB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gIH1cbn1cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZ3JvdXBzO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gNjU1OlxuLyoqKi8gKGZ1bmN0aW9uKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblxuXG52YXIgX19pbXBvcnREZWZhdWx0ID0gdGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCB8fCBmdW5jdGlvbiAobW9kKSB7XG4gIHJldHVybiBtb2QgJiYgbW9kLl9fZXNNb2R1bGUgPyBtb2QgOiB7XG4gICAgXCJkZWZhdWx0XCI6IG1vZFxuICB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgKHtcbiAgdmFsdWU6IHRydWVcbn0pKTtcbmV4cG9ydHMuZGVmYXVsdFN0YXRlID0gdm9pZCAwO1xudmFyIHJlZHV4XzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc5MSk7XG52YXIgaXRlbXNfMSA9IF9faW1wb3J0RGVmYXVsdChfX3dlYnBhY2tfcmVxdWlyZV9fKDUyKSk7XG52YXIgZ3JvdXBzXzEgPSBfX2ltcG9ydERlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXyg4NzEpKTtcbnZhciBjaG9pY2VzXzEgPSBfX2ltcG9ydERlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXygyNzMpKTtcbnZhciBsb2FkaW5nXzEgPSBfX2ltcG9ydERlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXyg1MDIpKTtcbnZhciB1dGlsc18xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3OTkpO1xuZXhwb3J0cy5kZWZhdWx0U3RhdGUgPSB7XG4gIGdyb3VwczogW10sXG4gIGl0ZW1zOiBbXSxcbiAgY2hvaWNlczogW10sXG4gIGxvYWRpbmc6IGZhbHNlXG59O1xudmFyIGFwcFJlZHVjZXIgPSAoMCwgcmVkdXhfMS5jb21iaW5lUmVkdWNlcnMpKHtcbiAgaXRlbXM6IGl0ZW1zXzEuZGVmYXVsdCxcbiAgZ3JvdXBzOiBncm91cHNfMS5kZWZhdWx0LFxuICBjaG9pY2VzOiBjaG9pY2VzXzEuZGVmYXVsdCxcbiAgbG9hZGluZzogbG9hZGluZ18xLmRlZmF1bHRcbn0pO1xudmFyIHJvb3RSZWR1Y2VyID0gZnVuY3Rpb24gKHBhc3NlZFN0YXRlLCBhY3Rpb24pIHtcbiAgdmFyIHN0YXRlID0gcGFzc2VkU3RhdGU7XG4gIC8vIElmIHdlIGFyZSBjbGVhcmluZyBhbGwgaXRlbXMsIGdyb3VwcyBhbmQgb3B0aW9ucyB3ZSByZWFzc2lnblxuICAvLyBzdGF0ZSBhbmQgdGhlbiBwYXNzIHRoYXQgc3RhdGUgdG8gb3VyIHByb3BlciByZWR1Y2VyLiBUaGlzIGlzbid0XG4gIC8vIG11dGF0aW5nIG91ciBhY3R1YWwgc3RhdGVcbiAgLy8gU2VlOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zNTY0MTk5MlxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdDTEVBUl9BTEwnKSB7XG4gICAgc3RhdGUgPSBleHBvcnRzLmRlZmF1bHRTdGF0ZTtcbiAgfSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gJ1JFU0VUX1RPJykge1xuICAgIHJldHVybiAoMCwgdXRpbHNfMS5jbG9uZU9iamVjdCkoYWN0aW9uLnN0YXRlKTtcbiAgfVxuICByZXR1cm4gYXBwUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbn07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHJvb3RSZWR1Y2VyO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gNTI6XG4vKioqLyAoZnVuY3Rpb24oX191bnVzZWRfd2VicGFja19tb2R1bGUsIGV4cG9ydHMpIHtcblxuXG5cbnZhciBfX3NwcmVhZEFycmF5ID0gdGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XG4gIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCAoe1xuICB2YWx1ZTogdHJ1ZVxufSkpO1xuZXhwb3J0cy5kZWZhdWx0U3RhdGUgPSB2b2lkIDA7XG5leHBvcnRzLmRlZmF1bHRTdGF0ZSA9IFtdO1xuZnVuY3Rpb24gaXRlbXMoc3RhdGUsIGFjdGlvbikge1xuICBpZiAoc3RhdGUgPT09IHZvaWQgMCkge1xuICAgIHN0YXRlID0gZXhwb3J0cy5kZWZhdWx0U3RhdGU7XG4gIH1cbiAgaWYgKGFjdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgYWN0aW9uID0ge307XG4gIH1cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0FERF9JVEVNJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIGFkZEl0ZW1BY3Rpb24gPSBhY3Rpb247XG4gICAgICAgIC8vIEFkZCBvYmplY3QgdG8gaXRlbXMgYXJyYXlcbiAgICAgICAgdmFyIG5ld1N0YXRlID0gX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KFtdLCBzdGF0ZSwgdHJ1ZSksIFt7XG4gICAgICAgICAgaWQ6IGFkZEl0ZW1BY3Rpb24uaWQsXG4gICAgICAgICAgY2hvaWNlSWQ6IGFkZEl0ZW1BY3Rpb24uY2hvaWNlSWQsXG4gICAgICAgICAgZ3JvdXBJZDogYWRkSXRlbUFjdGlvbi5ncm91cElkLFxuICAgICAgICAgIHZhbHVlOiBhZGRJdGVtQWN0aW9uLnZhbHVlLFxuICAgICAgICAgIGxhYmVsOiBhZGRJdGVtQWN0aW9uLmxhYmVsLFxuICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICBoaWdobGlnaHRlZDogZmFsc2UsXG4gICAgICAgICAgY3VzdG9tUHJvcGVydGllczogYWRkSXRlbUFjdGlvbi5jdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBhZGRJdGVtQWN0aW9uLnBsYWNlaG9sZGVyIHx8IGZhbHNlLFxuICAgICAgICAgIGtleUNvZGU6IG51bGxcbiAgICAgICAgfV0sIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlLm1hcChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgdmFyIGl0ZW0gPSBvYmo7XG4gICAgICAgICAgaXRlbS5oaWdobGlnaHRlZCA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICBjYXNlICdSRU1PVkVfSVRFTSc6XG4gICAgICB7XG4gICAgICAgIC8vIFNldCBpdGVtIHRvIGluYWN0aXZlXG4gICAgICAgIHJldHVybiBzdGF0ZS5tYXAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgIHZhciBpdGVtID0gb2JqO1xuICAgICAgICAgIGlmIChpdGVtLmlkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICBjYXNlICdISUdITElHSFRfSVRFTSc6XG4gICAgICB7XG4gICAgICAgIHZhciBoaWdobGlnaHRJdGVtQWN0aW9uXzEgPSBhY3Rpb247XG4gICAgICAgIHJldHVybiBzdGF0ZS5tYXAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgIHZhciBpdGVtID0gb2JqO1xuICAgICAgICAgIGlmIChpdGVtLmlkID09PSBoaWdobGlnaHRJdGVtQWN0aW9uXzEuaWQpIHtcbiAgICAgICAgICAgIGl0ZW0uaGlnaGxpZ2h0ZWQgPSBoaWdobGlnaHRJdGVtQWN0aW9uXzEuaGlnaGxpZ2h0ZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gIH1cbn1cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gaXRlbXM7XG5cbi8qKiovIH0pLFxuXG4vKioqLyA1MDI6XG4vKioqLyAoZnVuY3Rpb24oX191bnVzZWRfd2VicGFja19tb2R1bGUsIGV4cG9ydHMpIHtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgKHtcbiAgdmFsdWU6IHRydWVcbn0pKTtcbmV4cG9ydHMuZGVmYXVsdFN0YXRlID0gdm9pZCAwO1xuZXhwb3J0cy5kZWZhdWx0U3RhdGUgPSBmYWxzZTtcbnZhciBnZW5lcmFsID0gZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgaWYgKHN0YXRlID09PSB2b2lkIDApIHtcbiAgICBzdGF0ZSA9IGV4cG9ydHMuZGVmYXVsdFN0YXRlO1xuICB9XG4gIGlmIChhY3Rpb24gPT09IHZvaWQgMCkge1xuICAgIGFjdGlvbiA9IHt9O1xuICB9XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdTRVRfSVNfTE9BRElORyc6XG4gICAgICB7XG4gICAgICAgIHJldHVybiBhY3Rpb24uaXNMb2FkaW5nO1xuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgfVxufTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZ2VuZXJhbDtcblxuLyoqKi8gfSksXG5cbi8qKiovIDc0NDpcbi8qKiovIChmdW5jdGlvbihfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cblxudmFyIF9fc3ByZWFkQXJyYXkgPSB0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSB8fCBmdW5jdGlvbiAodG8sIGZyb20sIHBhY2spIHtcbiAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gdGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCB8fCBmdW5jdGlvbiAobW9kKSB7XG4gIHJldHVybiBtb2QgJiYgbW9kLl9fZXNNb2R1bGUgPyBtb2QgOiB7XG4gICAgXCJkZWZhdWx0XCI6IG1vZFxuICB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgKHtcbiAgdmFsdWU6IHRydWVcbn0pKTtcbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbnZhciByZWR1eF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3OTEpO1xudmFyIGluZGV4XzEgPSBfX2ltcG9ydERlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXyg2NTUpKTtcbnZhciBTdG9yZSA9IC8qKiBAY2xhc3MgKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0b3JlKCkge1xuICAgIHRoaXMuX3N0b3JlID0gKDAsIHJlZHV4XzEuY3JlYXRlU3RvcmUpKGluZGV4XzEuZGVmYXVsdCwgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18oKSk7XG4gIH1cbiAgLyoqXG4gICAqIFN1YnNjcmliZSBzdG9yZSB0byBmdW5jdGlvbiBjYWxsICh3cmFwcGVkIFJlZHV4IG1ldGhvZClcbiAgICovXG4gIFN0b3JlLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAob25DaGFuZ2UpIHtcbiAgICB0aGlzLl9zdG9yZS5zdWJzY3JpYmUob25DaGFuZ2UpO1xuICB9O1xuICAvKipcbiAgICogRGlzcGF0Y2ggZXZlbnQgdG8gc3RvcmUgKHdyYXBwZWQgUmVkdXggbWV0aG9kKVxuICAgKi9cbiAgU3RvcmUucHJvdG90eXBlLmRpc3BhdGNoID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG4gIH07XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdG9yZS5wcm90b3R5cGUsIFwic3RhdGVcIiwge1xuICAgIC8qKlxuICAgICAqIEdldCBzdG9yZSBvYmplY3QgKHdyYXBwaW5nIFJlZHV4IG1ldGhvZClcbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdG9yZS5nZXRTdGF0ZSgpO1xuICAgIH0sXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RvcmUucHJvdG90eXBlLCBcIml0ZW1zXCIsIHtcbiAgICAvKipcbiAgICAgKiBHZXQgaXRlbXMgZnJvbSBzdG9yZVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXRlbXM7XG4gICAgfSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdG9yZS5wcm90b3R5cGUsIFwiYWN0aXZlSXRlbXNcIiwge1xuICAgIC8qKlxuICAgICAqIEdldCBhY3RpdmUgaXRlbXMgZnJvbSBzdG9yZVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtLmFjdGl2ZSA9PT0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RvcmUucHJvdG90eXBlLCBcImhpZ2hsaWdodGVkQWN0aXZlSXRlbXNcIiwge1xuICAgIC8qKlxuICAgICAqIEdldCBoaWdobGlnaHRlZCBpdGVtcyBmcm9tIHN0b3JlXG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uYWN0aXZlICYmIGl0ZW0uaGlnaGxpZ2h0ZWQ7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0b3JlLnByb3RvdHlwZSwgXCJjaG9pY2VzXCIsIHtcbiAgICAvKipcbiAgICAgKiBHZXQgY2hvaWNlcyBmcm9tIHN0b3JlXG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5jaG9pY2VzO1xuICAgIH0sXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RvcmUucHJvdG90eXBlLCBcImFjdGl2ZUNob2ljZXNcIiwge1xuICAgIC8qKlxuICAgICAqIEdldCBhY3RpdmUgY2hvaWNlcyBmcm9tIHN0b3JlXG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jaG9pY2VzLmZpbHRlcihmdW5jdGlvbiAoY2hvaWNlKSB7XG4gICAgICAgIHJldHVybiBjaG9pY2UuYWN0aXZlID09PSB0cnVlO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdG9yZS5wcm90b3R5cGUsIFwic2VsZWN0YWJsZUNob2ljZXNcIiwge1xuICAgIC8qKlxuICAgICAqIEdldCBzZWxlY3RhYmxlIGNob2ljZXMgZnJvbSBzdG9yZVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2hvaWNlcy5maWx0ZXIoZnVuY3Rpb24gKGNob2ljZSkge1xuICAgICAgICByZXR1cm4gY2hvaWNlLmRpc2FibGVkICE9PSB0cnVlO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdG9yZS5wcm90b3R5cGUsIFwic2VhcmNoYWJsZUNob2ljZXNcIiwge1xuICAgIC8qKlxuICAgICAqIEdldCBjaG9pY2VzIHRoYXQgY2FuIGJlIHNlYXJjaGVkIChleGNsdWRpbmcgcGxhY2Vob2xkZXJzKVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0YWJsZUNob2ljZXMuZmlsdGVyKGZ1bmN0aW9uIChjaG9pY2UpIHtcbiAgICAgICAgcmV0dXJuIGNob2ljZS5wbGFjZWhvbGRlciAhPT0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RvcmUucHJvdG90eXBlLCBcInBsYWNlaG9sZGVyQ2hvaWNlXCIsIHtcbiAgICAvKipcbiAgICAgKiBHZXQgcGxhY2Vob2xkZXIgY2hvaWNlIGZyb20gc3RvcmVcbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfX3NwcmVhZEFycmF5KFtdLCB0aGlzLmNob2ljZXMsIHRydWUpLnJldmVyc2UoKS5maW5kKGZ1bmN0aW9uIChjaG9pY2UpIHtcbiAgICAgICAgcmV0dXJuIGNob2ljZS5wbGFjZWhvbGRlciA9PT0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RvcmUucHJvdG90eXBlLCBcImdyb3Vwc1wiLCB7XG4gICAgLyoqXG4gICAgICogR2V0IGdyb3VwcyBmcm9tIHN0b3JlXG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5ncm91cHM7XG4gICAgfSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdG9yZS5wcm90b3R5cGUsIFwiYWN0aXZlR3JvdXBzXCIsIHtcbiAgICAvKipcbiAgICAgKiBHZXQgYWN0aXZlIGdyb3VwcyBmcm9tIHN0b3JlXG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2EgPSB0aGlzLFxuICAgICAgICBncm91cHMgPSBfYS5ncm91cHMsXG4gICAgICAgIGNob2ljZXMgPSBfYS5jaG9pY2VzO1xuICAgICAgcmV0dXJuIGdyb3Vwcy5maWx0ZXIoZnVuY3Rpb24gKGdyb3VwKSB7XG4gICAgICAgIHZhciBpc0FjdGl2ZSA9IGdyb3VwLmFjdGl2ZSA9PT0gdHJ1ZSAmJiBncm91cC5kaXNhYmxlZCA9PT0gZmFsc2U7XG4gICAgICAgIHZhciBoYXNBY3RpdmVPcHRpb25zID0gY2hvaWNlcy5zb21lKGZ1bmN0aW9uIChjaG9pY2UpIHtcbiAgICAgICAgICByZXR1cm4gY2hvaWNlLmFjdGl2ZSA9PT0gdHJ1ZSAmJiBjaG9pY2UuZGlzYWJsZWQgPT09IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGlzQWN0aXZlICYmIGhhc0FjdGl2ZU9wdGlvbnM7XG4gICAgICB9LCBbXSk7XG4gICAgfSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG4gIC8qKlxuICAgKiBHZXQgbG9hZGluZyBzdGF0ZSBmcm9tIHN0b3JlXG4gICAqL1xuICBTdG9yZS5wcm90b3R5cGUuaXNMb2FkaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmc7XG4gIH07XG4gIC8qKlxuICAgKiBHZXQgc2luZ2xlIGNob2ljZSBieSBpdCdzIElEXG4gICAqL1xuICBTdG9yZS5wcm90b3R5cGUuZ2V0Q2hvaWNlQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUNob2ljZXMuZmluZChmdW5jdGlvbiAoY2hvaWNlKSB7XG4gICAgICByZXR1cm4gY2hvaWNlLmlkID09PSBwYXJzZUludChpZCwgMTApO1xuICAgIH0pO1xuICB9O1xuICAvKipcbiAgICogR2V0IGdyb3VwIGJ5IGdyb3VwIGlkXG4gICAqL1xuICBTdG9yZS5wcm90b3R5cGUuZ2V0R3JvdXBCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuZ3JvdXBzLmZpbmQoZnVuY3Rpb24gKGdyb3VwKSB7XG4gICAgICByZXR1cm4gZ3JvdXAuaWQgPT09IGlkO1xuICAgIH0pO1xuICB9O1xuICByZXR1cm4gU3RvcmU7XG59KCk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFN0b3JlO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gNjg2OlxuLyoqKi8gKGZ1bmN0aW9uKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBleHBvcnRzKSB7XG5cblxuXG4vKipcbiAqIEhlbHBlcnMgdG8gY3JlYXRlIEhUTUwgZWxlbWVudHMgdXNlZCBieSBDaG9pY2VzXG4gKiBDYW4gYmUgb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgYGNhbGxiYWNrT25DcmVhdGVUZW1wbGF0ZXNgIG9wdGlvblxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsICh7XG4gIHZhbHVlOiB0cnVlXG59KSk7XG52YXIgdGVtcGxhdGVzID0ge1xuICBjb250YWluZXJPdXRlcjogZnVuY3Rpb24gKF9hLCBkaXIsIGlzU2VsZWN0RWxlbWVudCwgaXNTZWxlY3RPbmVFbGVtZW50LCBzZWFyY2hFbmFibGVkLCBwYXNzZWRFbGVtZW50VHlwZSwgbGFiZWxJZCkge1xuICAgIHZhciBjb250YWluZXJPdXRlciA9IF9hLmNsYXNzTmFtZXMuY29udGFpbmVyT3V0ZXI7XG4gICAgdmFyIGRpdiA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHtcbiAgICAgIGNsYXNzTmFtZTogY29udGFpbmVyT3V0ZXJcbiAgICB9KTtcbiAgICBkaXYuZGF0YXNldC50eXBlID0gcGFzc2VkRWxlbWVudFR5cGU7XG4gICAgaWYgKGRpcikge1xuICAgICAgZGl2LmRpciA9IGRpcjtcbiAgICB9XG4gICAgaWYgKGlzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgZGl2LnRhYkluZGV4ID0gMDtcbiAgICB9XG4gICAgaWYgKGlzU2VsZWN0RWxlbWVudCkge1xuICAgICAgZGl2LnNldEF0dHJpYnV0ZSgncm9sZScsIHNlYXJjaEVuYWJsZWQgPyAnY29tYm9ib3gnIDogJ2xpc3Rib3gnKTtcbiAgICAgIGlmIChzZWFyY2hFbmFibGVkKSB7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtYXV0b2NvbXBsZXRlJywgJ2xpc3QnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnYXJpYS1oYXNwb3B1cCcsICd0cnVlJyk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgIGlmIChsYWJlbElkKSB7XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCBsYWJlbElkKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpdjtcbiAgfSxcbiAgY29udGFpbmVySW5uZXI6IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBjb250YWluZXJJbm5lciA9IF9hLmNsYXNzTmFtZXMuY29udGFpbmVySW5uZXI7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHtcbiAgICAgIGNsYXNzTmFtZTogY29udGFpbmVySW5uZXJcbiAgICB9KTtcbiAgfSxcbiAgaXRlbUxpc3Q6IGZ1bmN0aW9uIChfYSwgaXNTZWxlY3RPbmVFbGVtZW50KSB7XG4gICAgdmFyIF9iID0gX2EuY2xhc3NOYW1lcyxcbiAgICAgIGxpc3QgPSBfYi5saXN0LFxuICAgICAgbGlzdFNpbmdsZSA9IF9iLmxpc3RTaW5nbGUsXG4gICAgICBsaXN0SXRlbXMgPSBfYi5saXN0SXRlbXM7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQobGlzdCwgXCIgXCIpLmNvbmNhdChpc1NlbGVjdE9uZUVsZW1lbnQgPyBsaXN0U2luZ2xlIDogbGlzdEl0ZW1zKVxuICAgIH0pO1xuICB9LFxuICBwbGFjZWhvbGRlcjogZnVuY3Rpb24gKF9hLCB2YWx1ZSkge1xuICAgIHZhciBfYjtcbiAgICB2YXIgYWxsb3dIVE1MID0gX2EuYWxsb3dIVE1MLFxuICAgICAgcGxhY2Vob2xkZXIgPSBfYS5jbGFzc05hbWVzLnBsYWNlaG9sZGVyO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAoX2IgPSB7XG4gICAgICBjbGFzc05hbWU6IHBsYWNlaG9sZGVyXG4gICAgfSwgX2JbYWxsb3dIVE1MID8gJ2lubmVySFRNTCcgOiAnaW5uZXJUZXh0J10gPSB2YWx1ZSwgX2IpKTtcbiAgfSxcbiAgaXRlbTogZnVuY3Rpb24gKF9hLCBfYiwgcmVtb3ZlSXRlbUJ1dHRvbikge1xuICAgIHZhciBfYywgX2Q7XG4gICAgdmFyIGFsbG93SFRNTCA9IF9hLmFsbG93SFRNTCxcbiAgICAgIF9lID0gX2EuY2xhc3NOYW1lcyxcbiAgICAgIGl0ZW0gPSBfZS5pdGVtLFxuICAgICAgYnV0dG9uID0gX2UuYnV0dG9uLFxuICAgICAgaGlnaGxpZ2h0ZWRTdGF0ZSA9IF9lLmhpZ2hsaWdodGVkU3RhdGUsXG4gICAgICBpdGVtU2VsZWN0YWJsZSA9IF9lLml0ZW1TZWxlY3RhYmxlLFxuICAgICAgcGxhY2Vob2xkZXIgPSBfZS5wbGFjZWhvbGRlcjtcbiAgICB2YXIgaWQgPSBfYi5pZCxcbiAgICAgIHZhbHVlID0gX2IudmFsdWUsXG4gICAgICBsYWJlbCA9IF9iLmxhYmVsLFxuICAgICAgY3VzdG9tUHJvcGVydGllcyA9IF9iLmN1c3RvbVByb3BlcnRpZXMsXG4gICAgICBhY3RpdmUgPSBfYi5hY3RpdmUsXG4gICAgICBkaXNhYmxlZCA9IF9iLmRpc2FibGVkLFxuICAgICAgaGlnaGxpZ2h0ZWQgPSBfYi5oaWdobGlnaHRlZCxcbiAgICAgIGlzUGxhY2Vob2xkZXIgPSBfYi5wbGFjZWhvbGRlcjtcbiAgICB2YXIgZGl2ID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwgKF9jID0ge1xuICAgICAgY2xhc3NOYW1lOiBpdGVtXG4gICAgfSwgX2NbYWxsb3dIVE1MID8gJ2lubmVySFRNTCcgOiAnaW5uZXJUZXh0J10gPSBsYWJlbCwgX2MpKTtcbiAgICBPYmplY3QuYXNzaWduKGRpdi5kYXRhc2V0LCB7XG4gICAgICBpdGVtOiAnJyxcbiAgICAgIGlkOiBpZCxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGN1c3RvbVByb3BlcnRpZXM6IGN1c3RvbVByb3BlcnRpZXNcbiAgICB9KTtcbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcbiAgICB9XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICB9XG4gICAgaWYgKGlzUGxhY2Vob2xkZXIpIHtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKHBsYWNlaG9sZGVyKTtcbiAgICB9XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoaGlnaGxpZ2h0ZWQgPyBoaWdobGlnaHRlZFN0YXRlIDogaXRlbVNlbGVjdGFibGUpO1xuICAgIGlmIChyZW1vdmVJdGVtQnV0dG9uKSB7XG4gICAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoaXRlbVNlbGVjdGFibGUpO1xuICAgICAgfVxuICAgICAgZGl2LmRhdGFzZXQuZGVsZXRhYmxlID0gJyc7XG4gICAgICAvKiogQHRvZG8gVGhpcyBNVVNUIGJlIGxvY2FsaXphYmxlLCBub3QgaGFyZGNvZGVkISAqL1xuICAgICAgdmFyIFJFTU9WRV9JVEVNX1RFWFQgPSAnUmVtb3ZlIGl0ZW0nO1xuICAgICAgdmFyIHJlbW92ZUJ1dHRvbiA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksIChfZCA9IHtcbiAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgIGNsYXNzTmFtZTogYnV0dG9uXG4gICAgICB9LCBfZFthbGxvd0hUTUwgPyAnaW5uZXJIVE1MJyA6ICdpbm5lclRleHQnXSA9IFJFTU9WRV9JVEVNX1RFWFQsIF9kKSk7XG4gICAgICByZW1vdmVCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgXCJcIi5jb25jYXQoUkVNT1ZFX0lURU1fVEVYVCwgXCI6ICdcIikuY29uY2F0KHZhbHVlLCBcIidcIikpO1xuICAgICAgcmVtb3ZlQnV0dG9uLmRhdGFzZXQuYnV0dG9uID0gJyc7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQocmVtb3ZlQnV0dG9uKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpdjtcbiAgfSxcbiAgY2hvaWNlTGlzdDogZnVuY3Rpb24gKF9hLCBpc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICB2YXIgbGlzdCA9IF9hLmNsYXNzTmFtZXMubGlzdDtcbiAgICB2YXIgZGl2ID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwge1xuICAgICAgY2xhc3NOYW1lOiBsaXN0XG4gICAgfSk7XG4gICAgaWYgKCFpc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbXVsdGlzZWxlY3RhYmxlJywgJ3RydWUnKTtcbiAgICB9XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgncm9sZScsICdsaXN0Ym94Jyk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfSxcbiAgY2hvaWNlR3JvdXA6IGZ1bmN0aW9uIChfYSwgX2IpIHtcbiAgICB2YXIgX2M7XG4gICAgdmFyIGFsbG93SFRNTCA9IF9hLmFsbG93SFRNTCxcbiAgICAgIF9kID0gX2EuY2xhc3NOYW1lcyxcbiAgICAgIGdyb3VwID0gX2QuZ3JvdXAsXG4gICAgICBncm91cEhlYWRpbmcgPSBfZC5ncm91cEhlYWRpbmcsXG4gICAgICBpdGVtRGlzYWJsZWQgPSBfZC5pdGVtRGlzYWJsZWQ7XG4gICAgdmFyIGlkID0gX2IuaWQsXG4gICAgICB2YWx1ZSA9IF9iLnZhbHVlLFxuICAgICAgZGlzYWJsZWQgPSBfYi5kaXNhYmxlZDtcbiAgICB2YXIgZGl2ID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChncm91cCwgXCIgXCIpLmNvbmNhdChkaXNhYmxlZCA/IGl0ZW1EaXNhYmxlZCA6ICcnKVxuICAgIH0pO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZ3JvdXAnKTtcbiAgICBPYmplY3QuYXNzaWduKGRpdi5kYXRhc2V0LCB7XG4gICAgICBncm91cDogJycsXG4gICAgICBpZDogaWQsXG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9KTtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgIH1cbiAgICBkaXYuYXBwZW5kQ2hpbGQoT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwgKF9jID0ge1xuICAgICAgY2xhc3NOYW1lOiBncm91cEhlYWRpbmdcbiAgICB9LCBfY1thbGxvd0hUTUwgPyAnaW5uZXJIVE1MJyA6ICdpbm5lclRleHQnXSA9IHZhbHVlLCBfYykpKTtcbiAgICByZXR1cm4gZGl2O1xuICB9LFxuICBjaG9pY2U6IGZ1bmN0aW9uIChfYSwgX2IsIHNlbGVjdFRleHQpIHtcbiAgICB2YXIgX2M7XG4gICAgdmFyIGFsbG93SFRNTCA9IF9hLmFsbG93SFRNTCxcbiAgICAgIF9kID0gX2EuY2xhc3NOYW1lcyxcbiAgICAgIGl0ZW0gPSBfZC5pdGVtLFxuICAgICAgaXRlbUNob2ljZSA9IF9kLml0ZW1DaG9pY2UsXG4gICAgICBpdGVtU2VsZWN0YWJsZSA9IF9kLml0ZW1TZWxlY3RhYmxlLFxuICAgICAgc2VsZWN0ZWRTdGF0ZSA9IF9kLnNlbGVjdGVkU3RhdGUsXG4gICAgICBpdGVtRGlzYWJsZWQgPSBfZC5pdGVtRGlzYWJsZWQsXG4gICAgICBwbGFjZWhvbGRlciA9IF9kLnBsYWNlaG9sZGVyO1xuICAgIHZhciBpZCA9IF9iLmlkLFxuICAgICAgdmFsdWUgPSBfYi52YWx1ZSxcbiAgICAgIGxhYmVsID0gX2IubGFiZWwsXG4gICAgICBncm91cElkID0gX2IuZ3JvdXBJZCxcbiAgICAgIGVsZW1lbnRJZCA9IF9iLmVsZW1lbnRJZCxcbiAgICAgIGlzRGlzYWJsZWQgPSBfYi5kaXNhYmxlZCxcbiAgICAgIGlzU2VsZWN0ZWQgPSBfYi5zZWxlY3RlZCxcbiAgICAgIGlzUGxhY2Vob2xkZXIgPSBfYi5wbGFjZWhvbGRlcjtcbiAgICB2YXIgZGl2ID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwgKF9jID0ge1xuICAgICAgaWQ6IGVsZW1lbnRJZFxuICAgIH0sIF9jW2FsbG93SFRNTCA/ICdpbm5lckhUTUwnIDogJ2lubmVyVGV4dCddID0gbGFiZWwsIF9jLmNsYXNzTmFtZSA9IFwiXCIuY29uY2F0KGl0ZW0sIFwiIFwiKS5jb25jYXQoaXRlbUNob2ljZSksIF9jKSk7XG4gICAgaWYgKGlzU2VsZWN0ZWQpIHtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKHNlbGVjdGVkU3RhdGUpO1xuICAgIH1cbiAgICBpZiAoaXNQbGFjZWhvbGRlcikge1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQocGxhY2Vob2xkZXIpO1xuICAgIH1cbiAgICBkaXYuc2V0QXR0cmlidXRlKCdyb2xlJywgZ3JvdXBJZCAmJiBncm91cElkID4gMCA/ICd0cmVlaXRlbScgOiAnb3B0aW9uJyk7XG4gICAgT2JqZWN0LmFzc2lnbihkaXYuZGF0YXNldCwge1xuICAgICAgY2hvaWNlOiAnJyxcbiAgICAgIGlkOiBpZCxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHNlbGVjdFRleHQ6IHNlbGVjdFRleHRcbiAgICB9KTtcbiAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoaXRlbURpc2FibGVkKTtcbiAgICAgIGRpdi5kYXRhc2V0LmNob2ljZURpc2FibGVkID0gJyc7XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoaXRlbVNlbGVjdGFibGUpO1xuICAgICAgZGl2LmRhdGFzZXQuY2hvaWNlU2VsZWN0YWJsZSA9ICcnO1xuICAgIH1cbiAgICByZXR1cm4gZGl2O1xuICB9LFxuICBpbnB1dDogZnVuY3Rpb24gKF9hLCBwbGFjZWhvbGRlclZhbHVlKSB7XG4gICAgdmFyIF9iID0gX2EuY2xhc3NOYW1lcyxcbiAgICAgIGlucHV0ID0gX2IuaW5wdXQsXG4gICAgICBpbnB1dENsb25lZCA9IF9iLmlucHV0Q2xvbmVkO1xuICAgIHZhciBpbnAgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JyksIHtcbiAgICAgIHR5cGU6ICdzZWFyY2gnLFxuICAgICAgbmFtZTogJ3NlYXJjaF90ZXJtcycsXG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGlucHV0LCBcIiBcIikuY29uY2F0KGlucHV0Q2xvbmVkKSxcbiAgICAgIGF1dG9jb21wbGV0ZTogJ29mZicsXG4gICAgICBhdXRvY2FwaXRhbGl6ZTogJ29mZicsXG4gICAgICBzcGVsbGNoZWNrOiBmYWxzZVxuICAgIH0pO1xuICAgIGlucC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAndGV4dGJveCcpO1xuICAgIGlucC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYXV0b2NvbXBsZXRlJywgJ2xpc3QnKTtcbiAgICBpbnAuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgcGxhY2Vob2xkZXJWYWx1ZSk7XG4gICAgcmV0dXJuIGlucDtcbiAgfSxcbiAgZHJvcGRvd246IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBfYiA9IF9hLmNsYXNzTmFtZXMsXG4gICAgICBsaXN0ID0gX2IubGlzdCxcbiAgICAgIGxpc3REcm9wZG93biA9IF9iLmxpc3REcm9wZG93bjtcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQobGlzdCwgbGlzdERyb3Bkb3duKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfSxcbiAgbm90aWNlOiBmdW5jdGlvbiAoX2EsIGlubmVyVGV4dCwgdHlwZSkge1xuICAgIHZhciBfYjtcbiAgICB2YXIgYWxsb3dIVE1MID0gX2EuYWxsb3dIVE1MLFxuICAgICAgX2MgPSBfYS5jbGFzc05hbWVzLFxuICAgICAgaXRlbSA9IF9jLml0ZW0sXG4gICAgICBpdGVtQ2hvaWNlID0gX2MuaXRlbUNob2ljZSxcbiAgICAgIG5vUmVzdWx0cyA9IF9jLm5vUmVzdWx0cyxcbiAgICAgIG5vQ2hvaWNlcyA9IF9jLm5vQ2hvaWNlcztcbiAgICBpZiAodHlwZSA9PT0gdm9pZCAwKSB7XG4gICAgICB0eXBlID0gJyc7XG4gICAgfVxuICAgIHZhciBjbGFzc2VzID0gW2l0ZW0sIGl0ZW1DaG9pY2VdO1xuICAgIGlmICh0eXBlID09PSAnbm8tY2hvaWNlcycpIHtcbiAgICAgIGNsYXNzZXMucHVzaChub0Nob2ljZXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ25vLXJlc3VsdHMnKSB7XG4gICAgICBjbGFzc2VzLnB1c2gobm9SZXN1bHRzKTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIChfYiA9IHt9LCBfYlthbGxvd0hUTUwgPyAnaW5uZXJIVE1MJyA6ICdpbm5lclRleHQnXSA9IGlubmVyVGV4dCwgX2IuY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKCcgJyksIF9iKSk7XG4gIH0sXG4gIG9wdGlvbjogZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGxhYmVsID0gX2EubGFiZWwsXG4gICAgICB2YWx1ZSA9IF9hLnZhbHVlLFxuICAgICAgY3VzdG9tUHJvcGVydGllcyA9IF9hLmN1c3RvbVByb3BlcnRpZXMsXG4gICAgICBhY3RpdmUgPSBfYS5hY3RpdmUsXG4gICAgICBkaXNhYmxlZCA9IF9hLmRpc2FibGVkO1xuICAgIHZhciBvcHQgPSBuZXcgT3B0aW9uKGxhYmVsLCB2YWx1ZSwgZmFsc2UsIGFjdGl2ZSk7XG4gICAgaWYgKGN1c3RvbVByb3BlcnRpZXMpIHtcbiAgICAgIG9wdC5kYXRhc2V0LmN1c3RvbVByb3BlcnRpZXMgPSBcIlwiLmNvbmNhdChjdXN0b21Qcm9wZXJ0aWVzKTtcbiAgICB9XG4gICAgb3B0LmRpc2FibGVkID0gISFkaXNhYmxlZDtcbiAgICByZXR1cm4gb3B0O1xuICB9XG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB0ZW1wbGF0ZXM7XG5cbi8qKiovIH0pLFxuXG4vKioqLyA5OTY6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlKSB7XG5cblxuXG52YXIgaXNNZXJnZWFibGVPYmplY3QgPSBmdW5jdGlvbiBpc01lcmdlYWJsZU9iamVjdCh2YWx1ZSkge1xuXHRyZXR1cm4gaXNOb25OdWxsT2JqZWN0KHZhbHVlKVxuXHRcdCYmICFpc1NwZWNpYWwodmFsdWUpXG59O1xuXG5mdW5jdGlvbiBpc05vbk51bGxPYmplY3QodmFsdWUpIHtcblx0cmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG5mdW5jdGlvbiBpc1NwZWNpYWwodmFsdWUpIHtcblx0dmFyIHN0cmluZ1ZhbHVlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcblxuXHRyZXR1cm4gc3RyaW5nVmFsdWUgPT09ICdbb2JqZWN0IFJlZ0V4cF0nXG5cdFx0fHwgc3RyaW5nVmFsdWUgPT09ICdbb2JqZWN0IERhdGVdJ1xuXHRcdHx8IGlzUmVhY3RFbGVtZW50KHZhbHVlKVxufVxuXG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvYjVhYzk2M2ZiNzkxZDEyOThlN2YzOTYyMzYzODNiYzk1NWY5MTZjMS9zcmMvaXNvbW9ycGhpYy9jbGFzc2ljL2VsZW1lbnQvUmVhY3RFbGVtZW50LmpzI0wyMS1MMjVcbnZhciBjYW5Vc2VTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gY2FuVXNlU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xuXG5mdW5jdGlvbiBpc1JlYWN0RWxlbWVudCh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRVxufVxuXG5mdW5jdGlvbiBlbXB0eVRhcmdldCh2YWwpIHtcblx0cmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKSA/IFtdIDoge31cbn1cblxuZnVuY3Rpb24gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQodmFsdWUsIG9wdGlvbnMpIHtcblx0cmV0dXJuIChvcHRpb25zLmNsb25lICE9PSBmYWxzZSAmJiBvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHZhbHVlKSlcblx0XHQ/IGRlZXBtZXJnZShlbXB0eVRhcmdldCh2YWx1ZSksIHZhbHVlLCBvcHRpb25zKVxuXHRcdDogdmFsdWVcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcblx0cmV0dXJuIHRhcmdldC5jb25jYXQoc291cmNlKS5tYXAoZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdHJldHVybiBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZChlbGVtZW50LCBvcHRpb25zKVxuXHR9KVxufVxuXG5mdW5jdGlvbiBnZXRNZXJnZUZ1bmN0aW9uKGtleSwgb3B0aW9ucykge1xuXHRpZiAoIW9wdGlvbnMuY3VzdG9tTWVyZ2UpIHtcblx0XHRyZXR1cm4gZGVlcG1lcmdlXG5cdH1cblx0dmFyIGN1c3RvbU1lcmdlID0gb3B0aW9ucy5jdXN0b21NZXJnZShrZXkpO1xuXHRyZXR1cm4gdHlwZW9mIGN1c3RvbU1lcmdlID09PSAnZnVuY3Rpb24nID8gY3VzdG9tTWVyZ2UgOiBkZWVwbWVyZ2Vcbn1cblxuZnVuY3Rpb24gZ2V0RW51bWVyYWJsZU93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpIHtcblx0cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHNcblx0XHQ/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KS5maWx0ZXIoZnVuY3Rpb24oc3ltYm9sKSB7XG5cdFx0XHRyZXR1cm4gdGFyZ2V0LnByb3BlcnR5SXNFbnVtZXJhYmxlKHN5bWJvbClcblx0XHR9KVxuXHRcdDogW11cbn1cblxuZnVuY3Rpb24gZ2V0S2V5cyh0YXJnZXQpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKHRhcmdldCkuY29uY2F0KGdldEVudW1lcmFibGVPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSlcbn1cblxuZnVuY3Rpb24gcHJvcGVydHlJc09uT2JqZWN0KG9iamVjdCwgcHJvcGVydHkpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gcHJvcGVydHkgaW4gb2JqZWN0XG5cdH0gY2F0Y2goXykge1xuXHRcdHJldHVybiBmYWxzZVxuXHR9XG59XG5cbi8vIFByb3RlY3RzIGZyb20gcHJvdG90eXBlIHBvaXNvbmluZyBhbmQgdW5leHBlY3RlZCBtZXJnaW5nIHVwIHRoZSBwcm90b3R5cGUgY2hhaW4uXG5mdW5jdGlvbiBwcm9wZXJ0eUlzVW5zYWZlKHRhcmdldCwga2V5KSB7XG5cdHJldHVybiBwcm9wZXJ0eUlzT25PYmplY3QodGFyZ2V0LCBrZXkpIC8vIFByb3BlcnRpZXMgYXJlIHNhZmUgdG8gbWVyZ2UgaWYgdGhleSBkb24ndCBleGlzdCBpbiB0aGUgdGFyZ2V0IHlldCxcblx0XHQmJiAhKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwga2V5KSAvLyB1bnNhZmUgaWYgdGhleSBleGlzdCB1cCB0aGUgcHJvdG90eXBlIGNoYWluLFxuXHRcdFx0JiYgT2JqZWN0LnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodGFyZ2V0LCBrZXkpKSAvLyBhbmQgYWxzbyB1bnNhZmUgaWYgdGhleSdyZSBub25lbnVtZXJhYmxlLlxufVxuXG5mdW5jdGlvbiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuXHR2YXIgZGVzdGluYXRpb24gPSB7fTtcblx0aWYgKG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QodGFyZ2V0KSkge1xuXHRcdGdldEtleXModGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuXHRcdFx0ZGVzdGluYXRpb25ba2V5XSA9IGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHRhcmdldFtrZXldLCBvcHRpb25zKTtcblx0XHR9KTtcblx0fVxuXHRnZXRLZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcblx0XHRpZiAocHJvcGVydHlJc1Vuc2FmZSh0YXJnZXQsIGtleSkpIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGlmIChwcm9wZXJ0eUlzT25PYmplY3QodGFyZ2V0LCBrZXkpICYmIG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3Qoc291cmNlW2tleV0pKSB7XG5cdFx0XHRkZXN0aW5hdGlvbltrZXldID0gZ2V0TWVyZ2VGdW5jdGlvbihrZXksIG9wdGlvbnMpKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSwgb3B0aW9ucyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZChzb3VyY2Vba2V5XSwgb3B0aW9ucyk7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIGRlc3RpbmF0aW9uXG59XG5cbmZ1bmN0aW9uIGRlZXBtZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0b3B0aW9ucy5hcnJheU1lcmdlID0gb3B0aW9ucy5hcnJheU1lcmdlIHx8IGRlZmF1bHRBcnJheU1lcmdlO1xuXHRvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0ID0gb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCB8fCBpc01lcmdlYWJsZU9iamVjdDtcblx0Ly8gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQgaXMgYWRkZWQgdG8gYG9wdGlvbnNgIHNvIHRoYXQgY3VzdG9tIGFycmF5TWVyZ2UoKVxuXHQvLyBpbXBsZW1lbnRhdGlvbnMgY2FuIHVzZSBpdC4gVGhlIGNhbGxlciBtYXkgbm90IHJlcGxhY2UgaXQuXG5cdG9wdGlvbnMuY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQgPSBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZDtcblxuXHR2YXIgc291cmNlSXNBcnJheSA9IEFycmF5LmlzQXJyYXkoc291cmNlKTtcblx0dmFyIHRhcmdldElzQXJyYXkgPSBBcnJheS5pc0FycmF5KHRhcmdldCk7XG5cdHZhciBzb3VyY2VBbmRUYXJnZXRUeXBlc01hdGNoID0gc291cmNlSXNBcnJheSA9PT0gdGFyZ2V0SXNBcnJheTtcblxuXHRpZiAoIXNvdXJjZUFuZFRhcmdldFR5cGVzTWF0Y2gpIHtcblx0XHRyZXR1cm4gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoc291cmNlLCBvcHRpb25zKVxuXHR9IGVsc2UgaWYgKHNvdXJjZUlzQXJyYXkpIHtcblx0XHRyZXR1cm4gb3B0aW9ucy5hcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucylcblx0fVxufVxuXG5kZWVwbWVyZ2UuYWxsID0gZnVuY3Rpb24gZGVlcG1lcmdlQWxsKGFycmF5LCBvcHRpb25zKSB7XG5cdGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2ZpcnN0IGFyZ3VtZW50IHNob3VsZCBiZSBhbiBhcnJheScpXG5cdH1cblxuXHRyZXR1cm4gYXJyYXkucmVkdWNlKGZ1bmN0aW9uKHByZXYsIG5leHQpIHtcblx0XHRyZXR1cm4gZGVlcG1lcmdlKHByZXYsIG5leHQsIG9wdGlvbnMpXG5cdH0sIHt9KVxufTtcblxudmFyIGRlZXBtZXJnZV8xID0gZGVlcG1lcmdlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZXBtZXJnZV8xO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyAyMjE6XG4vKioqLyAoZnVuY3Rpb24oX191bnVzZWRfd2VicGFja19tb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIHtcbi8qIGhhcm1vbnkgZXhwb3J0ICovICAgXCJkZWZhdWx0XCI6IGZ1bmN0aW9uKCkgeyByZXR1cm4gLyogYmluZGluZyAqLyBGdXNlOyB9XG4vKiBoYXJtb255IGV4cG9ydCAqLyB9KTtcbi8qKlxuICogRnVzZS5qcyB2Ni42LjIgLSBMaWdodHdlaWdodCBmdXp6eS1zZWFyY2ggKGh0dHA6Ly9mdXNlanMuaW8pXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDIyIEtpcm8gUmlzayAoaHR0cDovL2tpcm8ubWUpXG4gKiBBbGwgUmlnaHRzIFJlc2VydmVkLiBBcGFjaGUgU29mdHdhcmUgTGljZW5zZSAyLjBcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqL1xuXG5mdW5jdGlvbiBpc0FycmF5KHZhbHVlKSB7XG4gIHJldHVybiAhQXJyYXkuaXNBcnJheVxuICAgID8gZ2V0VGFnKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJ1xuICAgIDogQXJyYXkuaXNBcnJheSh2YWx1ZSlcbn1cblxuLy8gQWRhcHRlZCBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vbG9kYXNoL2xvZGFzaC9ibG9iL21hc3Rlci8uaW50ZXJuYWwvYmFzZVRvU3RyaW5nLmpzXG5jb25zdCBJTkZJTklUWSA9IDEgLyAwO1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuICBsZXQgcmVzdWx0ID0gdmFsdWUgKyAnJztcbiAgcmV0dXJuIHJlc3VsdCA9PSAnMCcgJiYgMSAvIHZhbHVlID09IC1JTkZJTklUWSA/ICctMCcgOiByZXN1bHRcbn1cblxuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSlcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcidcbn1cblxuLy8gQWRhcHRlZCBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vbG9kYXNoL2xvZGFzaC9ibG9iL21hc3Rlci9pc0Jvb2xlYW4uanNcbmZ1bmN0aW9uIGlzQm9vbGVhbih2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHZhbHVlID09PSB0cnVlIHx8XG4gICAgdmFsdWUgPT09IGZhbHNlIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgZ2V0VGFnKHZhbHVlKSA9PSAnW29iamVjdCBCb29sZWFuXScpXG4gIClcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbn1cblxuLy8gQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSAmJiB2YWx1ZSAhPT0gbnVsbFxufVxuXG5mdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGxcbn1cblxuZnVuY3Rpb24gaXNCbGFuayh2YWx1ZSkge1xuICByZXR1cm4gIXZhbHVlLnRyaW0oKS5sZW5ndGhcbn1cblxuLy8gR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuLy8gQWRhcHRlZCBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vbG9kYXNoL2xvZGFzaC9ibG9iL21hc3Rlci8uaW50ZXJuYWwvZ2V0VGFnLmpzXG5mdW5jdGlvbiBnZXRUYWcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGxcbiAgICA/IHZhbHVlID09PSB1bmRlZmluZWRcbiAgICAgID8gJ1tvYmplY3QgVW5kZWZpbmVkXSdcbiAgICAgIDogJ1tvYmplY3QgTnVsbF0nXG4gICAgOiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpXG59XG5cbmNvbnN0IEVYVEVOREVEX1NFQVJDSF9VTkFWQUlMQUJMRSA9ICdFeHRlbmRlZCBzZWFyY2ggaXMgbm90IGF2YWlsYWJsZSc7XG5cbmNvbnN0IElOQ09SUkVDVF9JTkRFWF9UWVBFID0gXCJJbmNvcnJlY3QgJ2luZGV4JyB0eXBlXCI7XG5cbmNvbnN0IExPR0lDQUxfU0VBUkNIX0lOVkFMSURfUVVFUllfRk9SX0tFWSA9IChrZXkpID0+XG4gIGBJbnZhbGlkIHZhbHVlIGZvciBrZXkgJHtrZXl9YDtcblxuY29uc3QgUEFUVEVSTl9MRU5HVEhfVE9PX0xBUkdFID0gKG1heCkgPT5cbiAgYFBhdHRlcm4gbGVuZ3RoIGV4Y2VlZHMgbWF4IG9mICR7bWF4fS5gO1xuXG5jb25zdCBNSVNTSU5HX0tFWV9QUk9QRVJUWSA9IChuYW1lKSA9PiBgTWlzc2luZyAke25hbWV9IHByb3BlcnR5IGluIGtleWA7XG5cbmNvbnN0IElOVkFMSURfS0VZX1dFSUdIVF9WQUxVRSA9IChrZXkpID0+XG4gIGBQcm9wZXJ0eSAnd2VpZ2h0JyBpbiBrZXkgJyR7a2V5fScgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXJgO1xuXG5jb25zdCBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5jbGFzcyBLZXlTdG9yZSB7XG4gIGNvbnN0cnVjdG9yKGtleXMpIHtcbiAgICB0aGlzLl9rZXlzID0gW107XG4gICAgdGhpcy5fa2V5TWFwID0ge307XG5cbiAgICBsZXQgdG90YWxXZWlnaHQgPSAwO1xuXG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGxldCBvYmogPSBjcmVhdGVLZXkoa2V5KTtcblxuICAgICAgdG90YWxXZWlnaHQgKz0gb2JqLndlaWdodDtcblxuICAgICAgdGhpcy5fa2V5cy5wdXNoKG9iaik7XG4gICAgICB0aGlzLl9rZXlNYXBbb2JqLmlkXSA9IG9iajtcblxuICAgICAgdG90YWxXZWlnaHQgKz0gb2JqLndlaWdodDtcbiAgICB9KTtcblxuICAgIC8vIE5vcm1hbGl6ZSB3ZWlnaHRzIHNvIHRoYXQgdGhlaXIgc3VtIGlzIGVxdWFsIHRvIDFcbiAgICB0aGlzLl9rZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAga2V5LndlaWdodCAvPSB0b3RhbFdlaWdodDtcbiAgICB9KTtcbiAgfVxuICBnZXQoa2V5SWQpIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5TWFwW2tleUlkXVxuICB9XG4gIGtleXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tleXNcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuX2tleXMpXG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlS2V5KGtleSkge1xuICBsZXQgcGF0aCA9IG51bGw7XG4gIGxldCBpZCA9IG51bGw7XG4gIGxldCBzcmMgPSBudWxsO1xuICBsZXQgd2VpZ2h0ID0gMTtcbiAgbGV0IGdldEZuID0gbnVsbDtcblxuICBpZiAoaXNTdHJpbmcoa2V5KSB8fCBpc0FycmF5KGtleSkpIHtcbiAgICBzcmMgPSBrZXk7XG4gICAgcGF0aCA9IGNyZWF0ZUtleVBhdGgoa2V5KTtcbiAgICBpZCA9IGNyZWF0ZUtleUlkKGtleSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFoYXNPd24uY2FsbChrZXksICduYW1lJykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihNSVNTSU5HX0tFWV9QUk9QRVJUWSgnbmFtZScpKVxuICAgIH1cblxuICAgIGNvbnN0IG5hbWUgPSBrZXkubmFtZTtcbiAgICBzcmMgPSBuYW1lO1xuXG4gICAgaWYgKGhhc093bi5jYWxsKGtleSwgJ3dlaWdodCcpKSB7XG4gICAgICB3ZWlnaHQgPSBrZXkud2VpZ2h0O1xuXG4gICAgICBpZiAod2VpZ2h0IDw9IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKElOVkFMSURfS0VZX1dFSUdIVF9WQUxVRShuYW1lKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXRoID0gY3JlYXRlS2V5UGF0aChuYW1lKTtcbiAgICBpZCA9IGNyZWF0ZUtleUlkKG5hbWUpO1xuICAgIGdldEZuID0ga2V5LmdldEZuO1xuICB9XG5cbiAgcmV0dXJuIHsgcGF0aCwgaWQsIHdlaWdodCwgc3JjLCBnZXRGbiB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUtleVBhdGgoa2V5KSB7XG4gIHJldHVybiBpc0FycmF5KGtleSkgPyBrZXkgOiBrZXkuc3BsaXQoJy4nKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVLZXlJZChrZXkpIHtcbiAgcmV0dXJuIGlzQXJyYXkoa2V5KSA/IGtleS5qb2luKCcuJykgOiBrZXlcbn1cblxuZnVuY3Rpb24gZ2V0KG9iaiwgcGF0aCkge1xuICBsZXQgbGlzdCA9IFtdO1xuICBsZXQgYXJyID0gZmFsc2U7XG5cbiAgY29uc3QgZGVlcEdldCA9IChvYmosIHBhdGgsIGluZGV4KSA9PiB7XG4gICAgaWYgKCFpc0RlZmluZWQob2JqKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICghcGF0aFtpbmRleF0pIHtcbiAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gcGF0aCBsZWZ0LCB3ZSd2ZSBhcnJpdmVkIGF0IHRoZSBvYmplY3Qgd2UgY2FyZSBhYm91dC5cbiAgICAgIGxpc3QucHVzaChvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQga2V5ID0gcGF0aFtpbmRleF07XG5cbiAgICAgIGNvbnN0IHZhbHVlID0gb2JqW2tleV07XG5cbiAgICAgIGlmICghaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gSWYgd2UncmUgYXQgdGhlIGxhc3QgdmFsdWUgaW4gdGhlIHBhdGgsIGFuZCBpZiBpdCdzIGEgc3RyaW5nL251bWJlci9ib29sLFxuICAgICAgLy8gYWRkIGl0IHRvIHRoZSBsaXN0XG4gICAgICBpZiAoXG4gICAgICAgIGluZGV4ID09PSBwYXRoLmxlbmd0aCAtIDEgJiZcbiAgICAgICAgKGlzU3RyaW5nKHZhbHVlKSB8fCBpc051bWJlcih2YWx1ZSkgfHwgaXNCb29sZWFuKHZhbHVlKSlcbiAgICAgICkge1xuICAgICAgICBsaXN0LnB1c2godG9TdHJpbmcodmFsdWUpKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgYXJyID0gdHJ1ZTtcbiAgICAgICAgLy8gU2VhcmNoIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICAgIGRlZXBHZXQodmFsdWVbaV0sIHBhdGgsIGluZGV4ICsgMSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGF0aC5sZW5ndGgpIHtcbiAgICAgICAgLy8gQW4gb2JqZWN0LiBSZWN1cnNlIGZ1cnRoZXIuXG4gICAgICAgIGRlZXBHZXQodmFsdWUsIHBhdGgsIGluZGV4ICsgMSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIEJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IChzaW5jZSBwYXRoIHVzZWQgdG8gYmUgYSBzdHJpbmcpXG4gIGRlZXBHZXQob2JqLCBpc1N0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGgsIDApO1xuXG4gIHJldHVybiBhcnIgPyBsaXN0IDogbGlzdFswXVxufVxuXG5jb25zdCBNYXRjaE9wdGlvbnMgPSB7XG4gIC8vIFdoZXRoZXIgdGhlIG1hdGNoZXMgc2hvdWxkIGJlIGluY2x1ZGVkIGluIHRoZSByZXN1bHQgc2V0LiBXaGVuIGB0cnVlYCwgZWFjaCByZWNvcmQgaW4gdGhlIHJlc3VsdFxuICAvLyBzZXQgd2lsbCBpbmNsdWRlIHRoZSBpbmRpY2VzIG9mIHRoZSBtYXRjaGVkIGNoYXJhY3RlcnMuXG4gIC8vIFRoZXNlIGNhbiBjb25zZXF1ZW50bHkgYmUgdXNlZCBmb3IgaGlnaGxpZ2h0aW5nIHB1cnBvc2VzLlxuICBpbmNsdWRlTWF0Y2hlczogZmFsc2UsXG4gIC8vIFdoZW4gYHRydWVgLCB0aGUgbWF0Y2hpbmcgZnVuY3Rpb24gd2lsbCBjb250aW51ZSB0byB0aGUgZW5kIG9mIGEgc2VhcmNoIHBhdHRlcm4gZXZlbiBpZlxuICAvLyBhIHBlcmZlY3QgbWF0Y2ggaGFzIGFscmVhZHkgYmVlbiBsb2NhdGVkIGluIHRoZSBzdHJpbmcuXG4gIGZpbmRBbGxNYXRjaGVzOiBmYWxzZSxcbiAgLy8gTWluaW11bSBudW1iZXIgb2YgY2hhcmFjdGVycyB0aGF0IG11c3QgYmUgbWF0Y2hlZCBiZWZvcmUgYSByZXN1bHQgaXMgY29uc2lkZXJlZCBhIG1hdGNoXG4gIG1pbk1hdGNoQ2hhckxlbmd0aDogMVxufTtcblxuY29uc3QgQmFzaWNPcHRpb25zID0ge1xuICAvLyBXaGVuIGB0cnVlYCwgdGhlIGFsZ29yaXRobSBjb250aW51ZXMgc2VhcmNoaW5nIHRvIHRoZSBlbmQgb2YgdGhlIGlucHV0IGV2ZW4gaWYgYSBwZXJmZWN0XG4gIC8vIG1hdGNoIGlzIGZvdW5kIGJlZm9yZSB0aGUgZW5kIG9mIHRoZSBzYW1lIGlucHV0LlxuICBpc0Nhc2VTZW5zaXRpdmU6IGZhbHNlLFxuICAvLyBXaGVuIHRydWUsIHRoZSBtYXRjaGluZyBmdW5jdGlvbiB3aWxsIGNvbnRpbnVlIHRvIHRoZSBlbmQgb2YgYSBzZWFyY2ggcGF0dGVybiBldmVuIGlmXG4gIGluY2x1ZGVTY29yZTogZmFsc2UsXG4gIC8vIExpc3Qgb2YgcHJvcGVydGllcyB0aGF0IHdpbGwgYmUgc2VhcmNoZWQuIFRoaXMgYWxzbyBzdXBwb3J0cyBuZXN0ZWQgcHJvcGVydGllcy5cbiAga2V5czogW10sXG4gIC8vIFdoZXRoZXIgdG8gc29ydCB0aGUgcmVzdWx0IGxpc3QsIGJ5IHNjb3JlXG4gIHNob3VsZFNvcnQ6IHRydWUsXG4gIC8vIERlZmF1bHQgc29ydCBmdW5jdGlvbjogc29ydCBieSBhc2NlbmRpbmcgc2NvcmUsIGFzY2VuZGluZyBpbmRleFxuICBzb3J0Rm46IChhLCBiKSA9PlxuICAgIGEuc2NvcmUgPT09IGIuc2NvcmUgPyAoYS5pZHggPCBiLmlkeCA/IC0xIDogMSkgOiBhLnNjb3JlIDwgYi5zY29yZSA/IC0xIDogMVxufTtcblxuY29uc3QgRnV6enlPcHRpb25zID0ge1xuICAvLyBBcHByb3hpbWF0ZWx5IHdoZXJlIGluIHRoZSB0ZXh0IGlzIHRoZSBwYXR0ZXJuIGV4cGVjdGVkIHRvIGJlIGZvdW5kP1xuICBsb2NhdGlvbjogMCxcbiAgLy8gQXQgd2hhdCBwb2ludCBkb2VzIHRoZSBtYXRjaCBhbGdvcml0aG0gZ2l2ZSB1cC4gQSB0aHJlc2hvbGQgb2YgJzAuMCcgcmVxdWlyZXMgYSBwZXJmZWN0IG1hdGNoXG4gIC8vIChvZiBib3RoIGxldHRlcnMgYW5kIGxvY2F0aW9uKSwgYSB0aHJlc2hvbGQgb2YgJzEuMCcgd291bGQgbWF0Y2ggYW55dGhpbmcuXG4gIHRocmVzaG9sZDogMC42LFxuICAvLyBEZXRlcm1pbmVzIGhvdyBjbG9zZSB0aGUgbWF0Y2ggbXVzdCBiZSB0byB0aGUgZnV6enkgbG9jYXRpb24gKHNwZWNpZmllZCBhYm92ZSkuXG4gIC8vIEFuIGV4YWN0IGxldHRlciBtYXRjaCB3aGljaCBpcyAnZGlzdGFuY2UnIGNoYXJhY3RlcnMgYXdheSBmcm9tIHRoZSBmdXp6eSBsb2NhdGlvblxuICAvLyB3b3VsZCBzY29yZSBhcyBhIGNvbXBsZXRlIG1pc21hdGNoLiBBIGRpc3RhbmNlIG9mICcwJyByZXF1aXJlcyB0aGUgbWF0Y2ggYmUgYXRcbiAgLy8gdGhlIGV4YWN0IGxvY2F0aW9uIHNwZWNpZmllZCwgYSB0aHJlc2hvbGQgb2YgJzEwMDAnIHdvdWxkIHJlcXVpcmUgYSBwZXJmZWN0IG1hdGNoXG4gIC8vIHRvIGJlIHdpdGhpbiA4MDAgY2hhcmFjdGVycyBvZiB0aGUgZnV6enkgbG9jYXRpb24gdG8gYmUgZm91bmQgdXNpbmcgYSAwLjggdGhyZXNob2xkLlxuICBkaXN0YW5jZTogMTAwXG59O1xuXG5jb25zdCBBZHZhbmNlZE9wdGlvbnMgPSB7XG4gIC8vIFdoZW4gYHRydWVgLCBpdCBlbmFibGVzIHRoZSB1c2Ugb2YgdW5peC1saWtlIHNlYXJjaCBjb21tYW5kc1xuICB1c2VFeHRlbmRlZFNlYXJjaDogZmFsc2UsXG4gIC8vIFRoZSBnZXQgZnVuY3Rpb24gdG8gdXNlIHdoZW4gZmV0Y2hpbmcgYW4gb2JqZWN0J3MgcHJvcGVydGllcy5cbiAgLy8gVGhlIGRlZmF1bHQgd2lsbCBzZWFyY2ggbmVzdGVkIHBhdGhzICppZSBmb28uYmFyLmJheipcbiAgZ2V0Rm46IGdldCxcbiAgLy8gV2hlbiBgdHJ1ZWAsIHNlYXJjaCB3aWxsIGlnbm9yZSBgbG9jYXRpb25gIGFuZCBgZGlzdGFuY2VgLCBzbyBpdCB3b24ndCBtYXR0ZXJcbiAgLy8gd2hlcmUgaW4gdGhlIHN0cmluZyB0aGUgcGF0dGVybiBhcHBlYXJzLlxuICAvLyBNb3JlIGluZm86IGh0dHBzOi8vZnVzZWpzLmlvL2NvbmNlcHRzL3Njb3JpbmctdGhlb3J5Lmh0bWwjZnV6emluZXNzLXNjb3JlXG4gIGlnbm9yZUxvY2F0aW9uOiBmYWxzZSxcbiAgLy8gV2hlbiBgdHJ1ZWAsIHRoZSBjYWxjdWxhdGlvbiBmb3IgdGhlIHJlbGV2YW5jZSBzY29yZSAodXNlZCBmb3Igc29ydGluZykgd2lsbFxuICAvLyBpZ25vcmUgdGhlIGZpZWxkLWxlbmd0aCBub3JtLlxuICAvLyBNb3JlIGluZm86IGh0dHBzOi8vZnVzZWpzLmlvL2NvbmNlcHRzL3Njb3JpbmctdGhlb3J5Lmh0bWwjZmllbGQtbGVuZ3RoLW5vcm1cbiAgaWdub3JlRmllbGROb3JtOiBmYWxzZSxcbiAgLy8gVGhlIHdlaWdodCB0byBkZXRlcm1pbmUgaG93IG11Y2ggZmllbGQgbGVuZ3RoIG5vcm0gZWZmZWN0cyBzY29yaW5nLlxuICBmaWVsZE5vcm1XZWlnaHQ6IDFcbn07XG5cbnZhciBDb25maWcgPSB7XG4gIC4uLkJhc2ljT3B0aW9ucyxcbiAgLi4uTWF0Y2hPcHRpb25zLFxuICAuLi5GdXp6eU9wdGlvbnMsXG4gIC4uLkFkdmFuY2VkT3B0aW9uc1xufTtcblxuY29uc3QgU1BBQ0UgPSAvW14gXSsvZztcblxuLy8gRmllbGQtbGVuZ3RoIG5vcm06IHRoZSBzaG9ydGVyIHRoZSBmaWVsZCwgdGhlIGhpZ2hlciB0aGUgd2VpZ2h0LlxuLy8gU2V0IHRvIDMgZGVjaW1hbHMgdG8gcmVkdWNlIGluZGV4IHNpemUuXG5mdW5jdGlvbiBub3JtKHdlaWdodCA9IDEsIG1hbnRpc3NhID0gMykge1xuICBjb25zdCBjYWNoZSA9IG5ldyBNYXAoKTtcbiAgY29uc3QgbSA9IE1hdGgucG93KDEwLCBtYW50aXNzYSk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQodmFsdWUpIHtcbiAgICAgIGNvbnN0IG51bVRva2VucyA9IHZhbHVlLm1hdGNoKFNQQUNFKS5sZW5ndGg7XG5cbiAgICAgIGlmIChjYWNoZS5oYXMobnVtVG9rZW5zKSkge1xuICAgICAgICByZXR1cm4gY2FjaGUuZ2V0KG51bVRva2VucylcbiAgICAgIH1cblxuICAgICAgLy8gRGVmYXVsdCBmdW5jdGlvbiBpcyAxL3NxcnQoeCksIHdlaWdodCBtYWtlcyB0aGF0IHZhcmlhYmxlXG4gICAgICBjb25zdCBub3JtID0gMSAvIE1hdGgucG93KG51bVRva2VucywgMC41ICogd2VpZ2h0KTtcblxuICAgICAgLy8gSW4gcGxhY2Ugb2YgYHRvRml4ZWQobWFudGlzc2EpYCwgZm9yIGZhc3RlciBjb21wdXRhdGlvblxuICAgICAgY29uc3QgbiA9IHBhcnNlRmxvYXQoTWF0aC5yb3VuZChub3JtICogbSkgLyBtKTtcblxuICAgICAgY2FjaGUuc2V0KG51bVRva2Vucywgbik7XG5cbiAgICAgIHJldHVybiBuXG4gICAgfSxcbiAgICBjbGVhcigpIHtcbiAgICAgIGNhY2hlLmNsZWFyKCk7XG4gICAgfVxuICB9XG59XG5cbmNsYXNzIEZ1c2VJbmRleCB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBnZXRGbiA9IENvbmZpZy5nZXRGbixcbiAgICBmaWVsZE5vcm1XZWlnaHQgPSBDb25maWcuZmllbGROb3JtV2VpZ2h0XG4gIH0gPSB7fSkge1xuICAgIHRoaXMubm9ybSA9IG5vcm0oZmllbGROb3JtV2VpZ2h0LCAzKTtcbiAgICB0aGlzLmdldEZuID0gZ2V0Rm47XG4gICAgdGhpcy5pc0NyZWF0ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuc2V0SW5kZXhSZWNvcmRzKCk7XG4gIH1cbiAgc2V0U291cmNlcyhkb2NzID0gW10pIHtcbiAgICB0aGlzLmRvY3MgPSBkb2NzO1xuICB9XG4gIHNldEluZGV4UmVjb3JkcyhyZWNvcmRzID0gW10pIHtcbiAgICB0aGlzLnJlY29yZHMgPSByZWNvcmRzO1xuICB9XG4gIHNldEtleXMoa2V5cyA9IFtdKSB7XG4gICAgdGhpcy5rZXlzID0ga2V5cztcbiAgICB0aGlzLl9rZXlzTWFwID0ge307XG4gICAga2V5cy5mb3JFYWNoKChrZXksIGlkeCkgPT4ge1xuICAgICAgdGhpcy5fa2V5c01hcFtrZXkuaWRdID0gaWR4O1xuICAgIH0pO1xuICB9XG4gIGNyZWF0ZSgpIHtcbiAgICBpZiAodGhpcy5pc0NyZWF0ZWQgfHwgIXRoaXMuZG9jcy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuaXNDcmVhdGVkID0gdHJ1ZTtcblxuICAgIC8vIExpc3QgaXMgQXJyYXk8U3RyaW5nPlxuICAgIGlmIChpc1N0cmluZyh0aGlzLmRvY3NbMF0pKSB7XG4gICAgICB0aGlzLmRvY3MuZm9yRWFjaCgoZG9jLCBkb2NJbmRleCkgPT4ge1xuICAgICAgICB0aGlzLl9hZGRTdHJpbmcoZG9jLCBkb2NJbmRleCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTGlzdCBpcyBBcnJheTxPYmplY3Q+XG4gICAgICB0aGlzLmRvY3MuZm9yRWFjaCgoZG9jLCBkb2NJbmRleCkgPT4ge1xuICAgICAgICB0aGlzLl9hZGRPYmplY3QoZG9jLCBkb2NJbmRleCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLm5vcm0uY2xlYXIoKTtcbiAgfVxuICAvLyBBZGRzIGEgZG9jIHRvIHRoZSBlbmQgb2YgdGhlIGluZGV4XG4gIGFkZChkb2MpIHtcbiAgICBjb25zdCBpZHggPSB0aGlzLnNpemUoKTtcblxuICAgIGlmIChpc1N0cmluZyhkb2MpKSB7XG4gICAgICB0aGlzLl9hZGRTdHJpbmcoZG9jLCBpZHgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hZGRPYmplY3QoZG9jLCBpZHgpO1xuICAgIH1cbiAgfVxuICAvLyBSZW1vdmVzIHRoZSBkb2MgYXQgdGhlIHNwZWNpZmllZCBpbmRleCBvZiB0aGUgaW5kZXhcbiAgcmVtb3ZlQXQoaWR4KSB7XG4gICAgdGhpcy5yZWNvcmRzLnNwbGljZShpZHgsIDEpO1xuXG4gICAgLy8gQ2hhbmdlIHJlZiBpbmRleCBvZiBldmVyeSBzdWJzcXVlbnQgZG9jXG4gICAgZm9yIChsZXQgaSA9IGlkeCwgbGVuID0gdGhpcy5zaXplKCk7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgdGhpcy5yZWNvcmRzW2ldLmkgLT0gMTtcbiAgICB9XG4gIH1cbiAgZ2V0VmFsdWVGb3JJdGVtQXRLZXlJZChpdGVtLCBrZXlJZCkge1xuICAgIHJldHVybiBpdGVtW3RoaXMuX2tleXNNYXBba2V5SWRdXVxuICB9XG4gIHNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVjb3Jkcy5sZW5ndGhcbiAgfVxuICBfYWRkU3RyaW5nKGRvYywgZG9jSW5kZXgpIHtcbiAgICBpZiAoIWlzRGVmaW5lZChkb2MpIHx8IGlzQmxhbmsoZG9jKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHJlY29yZCA9IHtcbiAgICAgIHY6IGRvYyxcbiAgICAgIGk6IGRvY0luZGV4LFxuICAgICAgbjogdGhpcy5ub3JtLmdldChkb2MpXG4gICAgfTtcblxuICAgIHRoaXMucmVjb3Jkcy5wdXNoKHJlY29yZCk7XG4gIH1cbiAgX2FkZE9iamVjdChkb2MsIGRvY0luZGV4KSB7XG4gICAgbGV0IHJlY29yZCA9IHsgaTogZG9jSW5kZXgsICQ6IHt9IH07XG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgZXZlcnkga2V5IChpLmUsIHBhdGgpLCBhbmQgZmV0Y2ggdGhlIHZhbHVlIGF0IHRoYXQga2V5XG4gICAgdGhpcy5rZXlzLmZvckVhY2goKGtleSwga2V5SW5kZXgpID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGtleS5nZXRGbiA/IGtleS5nZXRGbihkb2MpIDogdGhpcy5nZXRGbihkb2MsIGtleS5wYXRoKTtcblxuICAgICAgaWYgKCFpc0RlZmluZWQodmFsdWUpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgbGV0IHN1YlJlY29yZHMgPSBbXTtcbiAgICAgICAgY29uc3Qgc3RhY2sgPSBbeyBuZXN0ZWRBcnJJbmRleDogLTEsIHZhbHVlIH1dO1xuXG4gICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCB7IG5lc3RlZEFyckluZGV4LCB2YWx1ZSB9ID0gc3RhY2sucG9wKCk7XG5cbiAgICAgICAgICBpZiAoIWlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiAhaXNCbGFuayh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGxldCBzdWJSZWNvcmQgPSB7XG4gICAgICAgICAgICAgIHY6IHZhbHVlLFxuICAgICAgICAgICAgICBpOiBuZXN0ZWRBcnJJbmRleCxcbiAgICAgICAgICAgICAgbjogdGhpcy5ub3JtLmdldCh2YWx1ZSlcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHN1YlJlY29yZHMucHVzaChzdWJSZWNvcmQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0sIGspID0+IHtcbiAgICAgICAgICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgICAgICAgICAgbmVzdGVkQXJySW5kZXg6IGssXG4gICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgO1xuICAgICAgICB9XG4gICAgICAgIHJlY29yZC4kW2tleUluZGV4XSA9IHN1YlJlY29yZHM7XG4gICAgICB9IGVsc2UgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiAhaXNCbGFuayh2YWx1ZSkpIHtcbiAgICAgICAgbGV0IHN1YlJlY29yZCA9IHtcbiAgICAgICAgICB2OiB2YWx1ZSxcbiAgICAgICAgICBuOiB0aGlzLm5vcm0uZ2V0KHZhbHVlKVxuICAgICAgICB9O1xuXG4gICAgICAgIHJlY29yZC4kW2tleUluZGV4XSA9IHN1YlJlY29yZDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMucmVjb3Jkcy5wdXNoKHJlY29yZCk7XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICBrZXlzOiB0aGlzLmtleXMsXG4gICAgICByZWNvcmRzOiB0aGlzLnJlY29yZHNcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5kZXgoXG4gIGtleXMsXG4gIGRvY3MsXG4gIHsgZ2V0Rm4gPSBDb25maWcuZ2V0Rm4sIGZpZWxkTm9ybVdlaWdodCA9IENvbmZpZy5maWVsZE5vcm1XZWlnaHQgfSA9IHt9XG4pIHtcbiAgY29uc3QgbXlJbmRleCA9IG5ldyBGdXNlSW5kZXgoeyBnZXRGbiwgZmllbGROb3JtV2VpZ2h0IH0pO1xuICBteUluZGV4LnNldEtleXMoa2V5cy5tYXAoY3JlYXRlS2V5KSk7XG4gIG15SW5kZXguc2V0U291cmNlcyhkb2NzKTtcbiAgbXlJbmRleC5jcmVhdGUoKTtcbiAgcmV0dXJuIG15SW5kZXhcbn1cblxuZnVuY3Rpb24gcGFyc2VJbmRleChcbiAgZGF0YSxcbiAgeyBnZXRGbiA9IENvbmZpZy5nZXRGbiwgZmllbGROb3JtV2VpZ2h0ID0gQ29uZmlnLmZpZWxkTm9ybVdlaWdodCB9ID0ge31cbikge1xuICBjb25zdCB7IGtleXMsIHJlY29yZHMgfSA9IGRhdGE7XG4gIGNvbnN0IG15SW5kZXggPSBuZXcgRnVzZUluZGV4KHsgZ2V0Rm4sIGZpZWxkTm9ybVdlaWdodCB9KTtcbiAgbXlJbmRleC5zZXRLZXlzKGtleXMpO1xuICBteUluZGV4LnNldEluZGV4UmVjb3JkcyhyZWNvcmRzKTtcbiAgcmV0dXJuIG15SW5kZXhcbn1cblxuZnVuY3Rpb24gY29tcHV0ZVNjb3JlJDEoXG4gIHBhdHRlcm4sXG4gIHtcbiAgICBlcnJvcnMgPSAwLFxuICAgIGN1cnJlbnRMb2NhdGlvbiA9IDAsXG4gICAgZXhwZWN0ZWRMb2NhdGlvbiA9IDAsXG4gICAgZGlzdGFuY2UgPSBDb25maWcuZGlzdGFuY2UsXG4gICAgaWdub3JlTG9jYXRpb24gPSBDb25maWcuaWdub3JlTG9jYXRpb25cbiAgfSA9IHt9XG4pIHtcbiAgY29uc3QgYWNjdXJhY3kgPSBlcnJvcnMgLyBwYXR0ZXJuLmxlbmd0aDtcblxuICBpZiAoaWdub3JlTG9jYXRpb24pIHtcbiAgICByZXR1cm4gYWNjdXJhY3lcbiAgfVxuXG4gIGNvbnN0IHByb3hpbWl0eSA9IE1hdGguYWJzKGV4cGVjdGVkTG9jYXRpb24gLSBjdXJyZW50TG9jYXRpb24pO1xuXG4gIGlmICghZGlzdGFuY2UpIHtcbiAgICAvLyBEb2RnZSBkaXZpZGUgYnkgemVybyBlcnJvci5cbiAgICByZXR1cm4gcHJveGltaXR5ID8gMS4wIDogYWNjdXJhY3lcbiAgfVxuXG4gIHJldHVybiBhY2N1cmFjeSArIHByb3hpbWl0eSAvIGRpc3RhbmNlXG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRNYXNrVG9JbmRpY2VzKFxuICBtYXRjaG1hc2sgPSBbXSxcbiAgbWluTWF0Y2hDaGFyTGVuZ3RoID0gQ29uZmlnLm1pbk1hdGNoQ2hhckxlbmd0aFxuKSB7XG4gIGxldCBpbmRpY2VzID0gW107XG4gIGxldCBzdGFydCA9IC0xO1xuICBsZXQgZW5kID0gLTE7XG4gIGxldCBpID0gMDtcblxuICBmb3IgKGxldCBsZW4gPSBtYXRjaG1hc2subGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBsZXQgbWF0Y2ggPSBtYXRjaG1hc2tbaV07XG4gICAgaWYgKG1hdGNoICYmIHN0YXJ0ID09PSAtMSkge1xuICAgICAgc3RhcnQgPSBpO1xuICAgIH0gZWxzZSBpZiAoIW1hdGNoICYmIHN0YXJ0ICE9PSAtMSkge1xuICAgICAgZW5kID0gaSAtIDE7XG4gICAgICBpZiAoZW5kIC0gc3RhcnQgKyAxID49IG1pbk1hdGNoQ2hhckxlbmd0aCkge1xuICAgICAgICBpbmRpY2VzLnB1c2goW3N0YXJ0LCBlbmRdKTtcbiAgICAgIH1cbiAgICAgIHN0YXJ0ID0gLTE7XG4gICAgfVxuICB9XG5cbiAgLy8gKGktMSAtIHN0YXJ0KSArIDEgPT4gaSAtIHN0YXJ0XG4gIGlmIChtYXRjaG1hc2tbaSAtIDFdICYmIGkgLSBzdGFydCA+PSBtaW5NYXRjaENoYXJMZW5ndGgpIHtcbiAgICBpbmRpY2VzLnB1c2goW3N0YXJ0LCBpIC0gMV0pO1xuICB9XG5cbiAgcmV0dXJuIGluZGljZXNcbn1cblxuLy8gTWFjaGluZSB3b3JkIHNpemVcbmNvbnN0IE1BWF9CSVRTID0gMzI7XG5cbmZ1bmN0aW9uIHNlYXJjaChcbiAgdGV4dCxcbiAgcGF0dGVybixcbiAgcGF0dGVybkFscGhhYmV0LFxuICB7XG4gICAgbG9jYXRpb24gPSBDb25maWcubG9jYXRpb24sXG4gICAgZGlzdGFuY2UgPSBDb25maWcuZGlzdGFuY2UsXG4gICAgdGhyZXNob2xkID0gQ29uZmlnLnRocmVzaG9sZCxcbiAgICBmaW5kQWxsTWF0Y2hlcyA9IENvbmZpZy5maW5kQWxsTWF0Y2hlcyxcbiAgICBtaW5NYXRjaENoYXJMZW5ndGggPSBDb25maWcubWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgIGluY2x1ZGVNYXRjaGVzID0gQ29uZmlnLmluY2x1ZGVNYXRjaGVzLFxuICAgIGlnbm9yZUxvY2F0aW9uID0gQ29uZmlnLmlnbm9yZUxvY2F0aW9uXG4gIH0gPSB7fVxuKSB7XG4gIGlmIChwYXR0ZXJuLmxlbmd0aCA+IE1BWF9CSVRTKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFBBVFRFUk5fTEVOR1RIX1RPT19MQVJHRShNQVhfQklUUykpXG4gIH1cblxuICBjb25zdCBwYXR0ZXJuTGVuID0gcGF0dGVybi5sZW5ndGg7XG4gIC8vIFNldCBzdGFydGluZyBsb2NhdGlvbiBhdCBiZWdpbm5pbmcgdGV4dCBhbmQgaW5pdGlhbGl6ZSB0aGUgYWxwaGFiZXQuXG4gIGNvbnN0IHRleHRMZW4gPSB0ZXh0Lmxlbmd0aDtcbiAgLy8gSGFuZGxlIHRoZSBjYXNlIHdoZW4gbG9jYXRpb24gPiB0ZXh0Lmxlbmd0aFxuICBjb25zdCBleHBlY3RlZExvY2F0aW9uID0gTWF0aC5tYXgoMCwgTWF0aC5taW4obG9jYXRpb24sIHRleHRMZW4pKTtcbiAgLy8gSGlnaGVzdCBzY29yZSBiZXlvbmQgd2hpY2ggd2UgZ2l2ZSB1cC5cbiAgbGV0IGN1cnJlbnRUaHJlc2hvbGQgPSB0aHJlc2hvbGQ7XG4gIC8vIElzIHRoZXJlIGEgbmVhcmJ5IGV4YWN0IG1hdGNoPyAoc3BlZWR1cClcbiAgbGV0IGJlc3RMb2NhdGlvbiA9IGV4cGVjdGVkTG9jYXRpb247XG5cbiAgLy8gUGVyZm9ybWFuY2U6IG9ubHkgY29tcHV0ZXIgbWF0Y2hlcyB3aGVuIHRoZSBtaW5NYXRjaENoYXJMZW5ndGggPiAxXG4gIC8vIE9SIGlmIGBpbmNsdWRlTWF0Y2hlc2AgaXMgdHJ1ZS5cbiAgY29uc3QgY29tcHV0ZU1hdGNoZXMgPSBtaW5NYXRjaENoYXJMZW5ndGggPiAxIHx8IGluY2x1ZGVNYXRjaGVzO1xuICAvLyBBIG1hc2sgb2YgdGhlIG1hdGNoZXMsIHVzZWQgZm9yIGJ1aWxkaW5nIHRoZSBpbmRpY2VzXG4gIGNvbnN0IG1hdGNoTWFzayA9IGNvbXB1dGVNYXRjaGVzID8gQXJyYXkodGV4dExlbikgOiBbXTtcblxuICBsZXQgaW5kZXg7XG5cbiAgLy8gR2V0IGFsbCBleGFjdCBtYXRjaGVzLCBoZXJlIGZvciBzcGVlZCB1cFxuICB3aGlsZSAoKGluZGV4ID0gdGV4dC5pbmRleE9mKHBhdHRlcm4sIGJlc3RMb2NhdGlvbikpID4gLTEpIHtcbiAgICBsZXQgc2NvcmUgPSBjb21wdXRlU2NvcmUkMShwYXR0ZXJuLCB7XG4gICAgICBjdXJyZW50TG9jYXRpb246IGluZGV4LFxuICAgICAgZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgaWdub3JlTG9jYXRpb25cbiAgICB9KTtcblxuICAgIGN1cnJlbnRUaHJlc2hvbGQgPSBNYXRoLm1pbihzY29yZSwgY3VycmVudFRocmVzaG9sZCk7XG4gICAgYmVzdExvY2F0aW9uID0gaW5kZXggKyBwYXR0ZXJuTGVuO1xuXG4gICAgaWYgKGNvbXB1dGVNYXRjaGVzKSB7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICB3aGlsZSAoaSA8IHBhdHRlcm5MZW4pIHtcbiAgICAgICAgbWF0Y2hNYXNrW2luZGV4ICsgaV0gPSAxO1xuICAgICAgICBpICs9IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUmVzZXQgdGhlIGJlc3QgbG9jYXRpb25cbiAgYmVzdExvY2F0aW9uID0gLTE7XG5cbiAgbGV0IGxhc3RCaXRBcnIgPSBbXTtcbiAgbGV0IGZpbmFsU2NvcmUgPSAxO1xuICBsZXQgYmluTWF4ID0gcGF0dGVybkxlbiArIHRleHRMZW47XG5cbiAgY29uc3QgbWFzayA9IDEgPDwgKHBhdHRlcm5MZW4gLSAxKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdHRlcm5MZW47IGkgKz0gMSkge1xuICAgIC8vIFNjYW4gZm9yIHRoZSBiZXN0IG1hdGNoOyBlYWNoIGl0ZXJhdGlvbiBhbGxvd3MgZm9yIG9uZSBtb3JlIGVycm9yLlxuICAgIC8vIFJ1biBhIGJpbmFyeSBzZWFyY2ggdG8gZGV0ZXJtaW5lIGhvdyBmYXIgZnJvbSB0aGUgbWF0Y2ggbG9jYXRpb24gd2UgY2FuIHN0cmF5XG4gICAgLy8gYXQgdGhpcyBlcnJvciBsZXZlbC5cbiAgICBsZXQgYmluTWluID0gMDtcbiAgICBsZXQgYmluTWlkID0gYmluTWF4O1xuXG4gICAgd2hpbGUgKGJpbk1pbiA8IGJpbk1pZCkge1xuICAgICAgY29uc3Qgc2NvcmUgPSBjb21wdXRlU2NvcmUkMShwYXR0ZXJuLCB7XG4gICAgICAgIGVycm9yczogaSxcbiAgICAgICAgY3VycmVudExvY2F0aW9uOiBleHBlY3RlZExvY2F0aW9uICsgYmluTWlkLFxuICAgICAgICBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgICBkaXN0YW5jZSxcbiAgICAgICAgaWdub3JlTG9jYXRpb25cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc2NvcmUgPD0gY3VycmVudFRocmVzaG9sZCkge1xuICAgICAgICBiaW5NaW4gPSBiaW5NaWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiaW5NYXggPSBiaW5NaWQ7XG4gICAgICB9XG5cbiAgICAgIGJpbk1pZCA9IE1hdGguZmxvb3IoKGJpbk1heCAtIGJpbk1pbikgLyAyICsgYmluTWluKTtcbiAgICB9XG5cbiAgICAvLyBVc2UgdGhlIHJlc3VsdCBmcm9tIHRoaXMgaXRlcmF0aW9uIGFzIHRoZSBtYXhpbXVtIGZvciB0aGUgbmV4dC5cbiAgICBiaW5NYXggPSBiaW5NaWQ7XG5cbiAgICBsZXQgc3RhcnQgPSBNYXRoLm1heCgxLCBleHBlY3RlZExvY2F0aW9uIC0gYmluTWlkICsgMSk7XG4gICAgbGV0IGZpbmlzaCA9IGZpbmRBbGxNYXRjaGVzXG4gICAgICA/IHRleHRMZW5cbiAgICAgIDogTWF0aC5taW4oZXhwZWN0ZWRMb2NhdGlvbiArIGJpbk1pZCwgdGV4dExlbikgKyBwYXR0ZXJuTGVuO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgYml0IGFycmF5XG4gICAgbGV0IGJpdEFyciA9IEFycmF5KGZpbmlzaCArIDIpO1xuXG4gICAgYml0QXJyW2ZpbmlzaCArIDFdID0gKDEgPDwgaSkgLSAxO1xuXG4gICAgZm9yIChsZXQgaiA9IGZpbmlzaDsgaiA+PSBzdGFydDsgaiAtPSAxKSB7XG4gICAgICBsZXQgY3VycmVudExvY2F0aW9uID0gaiAtIDE7XG4gICAgICBsZXQgY2hhck1hdGNoID0gcGF0dGVybkFscGhhYmV0W3RleHQuY2hhckF0KGN1cnJlbnRMb2NhdGlvbildO1xuXG4gICAgICBpZiAoY29tcHV0ZU1hdGNoZXMpIHtcbiAgICAgICAgLy8gU3BlZWQgdXA6IHF1aWNrIGJvb2wgdG8gaW50IGNvbnZlcnNpb24gKGkuZSwgYGNoYXJNYXRjaCA/IDEgOiAwYClcbiAgICAgICAgbWF0Y2hNYXNrW2N1cnJlbnRMb2NhdGlvbl0gPSArISFjaGFyTWF0Y2g7XG4gICAgICB9XG5cbiAgICAgIC8vIEZpcnN0IHBhc3M6IGV4YWN0IG1hdGNoXG4gICAgICBiaXRBcnJbal0gPSAoKGJpdEFycltqICsgMV0gPDwgMSkgfCAxKSAmIGNoYXJNYXRjaDtcblxuICAgICAgLy8gU3Vic2VxdWVudCBwYXNzZXM6IGZ1enp5IG1hdGNoXG4gICAgICBpZiAoaSkge1xuICAgICAgICBiaXRBcnJbal0gfD1cbiAgICAgICAgICAoKGxhc3RCaXRBcnJbaiArIDFdIHwgbGFzdEJpdEFycltqXSkgPDwgMSkgfCAxIHwgbGFzdEJpdEFycltqICsgMV07XG4gICAgICB9XG5cbiAgICAgIGlmIChiaXRBcnJbal0gJiBtYXNrKSB7XG4gICAgICAgIGZpbmFsU2NvcmUgPSBjb21wdXRlU2NvcmUkMShwYXR0ZXJuLCB7XG4gICAgICAgICAgZXJyb3JzOiBpLFxuICAgICAgICAgIGN1cnJlbnRMb2NhdGlvbixcbiAgICAgICAgICBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgICAgIGRpc3RhbmNlLFxuICAgICAgICAgIGlnbm9yZUxvY2F0aW9uXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFRoaXMgbWF0Y2ggd2lsbCBhbG1vc3QgY2VydGFpbmx5IGJlIGJldHRlciB0aGFuIGFueSBleGlzdGluZyBtYXRjaC5cbiAgICAgICAgLy8gQnV0IGNoZWNrIGFueXdheS5cbiAgICAgICAgaWYgKGZpbmFsU2NvcmUgPD0gY3VycmVudFRocmVzaG9sZCkge1xuICAgICAgICAgIC8vIEluZGVlZCBpdCBpc1xuICAgICAgICAgIGN1cnJlbnRUaHJlc2hvbGQgPSBmaW5hbFNjb3JlO1xuICAgICAgICAgIGJlc3RMb2NhdGlvbiA9IGN1cnJlbnRMb2NhdGlvbjtcblxuICAgICAgICAgIC8vIEFscmVhZHkgcGFzc2VkIGBsb2NgLCBkb3duaGlsbCBmcm9tIGhlcmUgb24gaW4uXG4gICAgICAgICAgaWYgKGJlc3RMb2NhdGlvbiA8PSBleHBlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFdoZW4gcGFzc2luZyBgYmVzdExvY2F0aW9uYCwgZG9uJ3QgZXhjZWVkIG91ciBjdXJyZW50IGRpc3RhbmNlIGZyb20gYGV4cGVjdGVkTG9jYXRpb25gLlxuICAgICAgICAgIHN0YXJ0ID0gTWF0aC5tYXgoMSwgMiAqIGV4cGVjdGVkTG9jYXRpb24gLSBiZXN0TG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTm8gaG9wZSBmb3IgYSAoYmV0dGVyKSBtYXRjaCBhdCBncmVhdGVyIGVycm9yIGxldmVscy5cbiAgICBjb25zdCBzY29yZSA9IGNvbXB1dGVTY29yZSQxKHBhdHRlcm4sIHtcbiAgICAgIGVycm9yczogaSArIDEsXG4gICAgICBjdXJyZW50TG9jYXRpb246IGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgZGlzdGFuY2UsXG4gICAgICBpZ25vcmVMb2NhdGlvblxuICAgIH0pO1xuXG4gICAgaWYgKHNjb3JlID4gY3VycmVudFRocmVzaG9sZCkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBsYXN0Qml0QXJyID0gYml0QXJyO1xuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIGlzTWF0Y2g6IGJlc3RMb2NhdGlvbiA+PSAwLFxuICAgIC8vIENvdW50IGV4YWN0IG1hdGNoZXMgKHRob3NlIHdpdGggYSBzY29yZSBvZiAwKSB0byBiZSBcImFsbW9zdFwiIGV4YWN0XG4gICAgc2NvcmU6IE1hdGgubWF4KDAuMDAxLCBmaW5hbFNjb3JlKVxuICB9O1xuXG4gIGlmIChjb21wdXRlTWF0Y2hlcykge1xuICAgIGNvbnN0IGluZGljZXMgPSBjb252ZXJ0TWFza1RvSW5kaWNlcyhtYXRjaE1hc2ssIG1pbk1hdGNoQ2hhckxlbmd0aCk7XG4gICAgaWYgKCFpbmRpY2VzLmxlbmd0aCkge1xuICAgICAgcmVzdWx0LmlzTWF0Y2ggPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICByZXN1bHQuaW5kaWNlcyA9IGluZGljZXM7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBjcmVhdGVQYXR0ZXJuQWxwaGFiZXQocGF0dGVybikge1xuICBsZXQgbWFzayA9IHt9O1xuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBwYXR0ZXJuLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgY29uc3QgY2hhciA9IHBhdHRlcm4uY2hhckF0KGkpO1xuICAgIG1hc2tbY2hhcl0gPSAobWFza1tjaGFyXSB8fCAwKSB8ICgxIDw8IChsZW4gLSBpIC0gMSkpO1xuICB9XG5cbiAgcmV0dXJuIG1hc2tcbn1cblxuY2xhc3MgQml0YXBTZWFyY2gge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwYXR0ZXJuLFxuICAgIHtcbiAgICAgIGxvY2F0aW9uID0gQ29uZmlnLmxvY2F0aW9uLFxuICAgICAgdGhyZXNob2xkID0gQ29uZmlnLnRocmVzaG9sZCxcbiAgICAgIGRpc3RhbmNlID0gQ29uZmlnLmRpc3RhbmNlLFxuICAgICAgaW5jbHVkZU1hdGNoZXMgPSBDb25maWcuaW5jbHVkZU1hdGNoZXMsXG4gICAgICBmaW5kQWxsTWF0Y2hlcyA9IENvbmZpZy5maW5kQWxsTWF0Y2hlcyxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCA9IENvbmZpZy5taW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICBpc0Nhc2VTZW5zaXRpdmUgPSBDb25maWcuaXNDYXNlU2Vuc2l0aXZlLFxuICAgICAgaWdub3JlTG9jYXRpb24gPSBDb25maWcuaWdub3JlTG9jYXRpb25cbiAgICB9ID0ge31cbiAgKSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgbG9jYXRpb24sXG4gICAgICB0aHJlc2hvbGQsXG4gICAgICBkaXN0YW5jZSxcbiAgICAgIGluY2x1ZGVNYXRjaGVzLFxuICAgICAgZmluZEFsbE1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICBpc0Nhc2VTZW5zaXRpdmUsXG4gICAgICBpZ25vcmVMb2NhdGlvblxuICAgIH07XG5cbiAgICB0aGlzLnBhdHRlcm4gPSBpc0Nhc2VTZW5zaXRpdmUgPyBwYXR0ZXJuIDogcGF0dGVybi50b0xvd2VyQ2FzZSgpO1xuXG4gICAgdGhpcy5jaHVua3MgPSBbXTtcblxuICAgIGlmICghdGhpcy5wYXR0ZXJuLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgYWRkQ2h1bmsgPSAocGF0dGVybiwgc3RhcnRJbmRleCkgPT4ge1xuICAgICAgdGhpcy5jaHVua3MucHVzaCh7XG4gICAgICAgIHBhdHRlcm4sXG4gICAgICAgIGFscGhhYmV0OiBjcmVhdGVQYXR0ZXJuQWxwaGFiZXQocGF0dGVybiksXG4gICAgICAgIHN0YXJ0SW5kZXhcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBsZW4gPSB0aGlzLnBhdHRlcm4ubGVuZ3RoO1xuXG4gICAgaWYgKGxlbiA+IE1BWF9CSVRTKSB7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBjb25zdCByZW1haW5kZXIgPSBsZW4gJSBNQVhfQklUUztcbiAgICAgIGNvbnN0IGVuZCA9IGxlbiAtIHJlbWFpbmRlcjtcblxuICAgICAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICAgICAgYWRkQ2h1bmsodGhpcy5wYXR0ZXJuLnN1YnN0cihpLCBNQVhfQklUUyksIGkpO1xuICAgICAgICBpICs9IE1BWF9CSVRTO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVtYWluZGVyKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBsZW4gLSBNQVhfQklUUztcbiAgICAgICAgYWRkQ2h1bmsodGhpcy5wYXR0ZXJuLnN1YnN0cihzdGFydEluZGV4KSwgc3RhcnRJbmRleCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZENodW5rKHRoaXMucGF0dGVybiwgMCk7XG4gICAgfVxuICB9XG5cbiAgc2VhcmNoSW4odGV4dCkge1xuICAgIGNvbnN0IHsgaXNDYXNlU2Vuc2l0aXZlLCBpbmNsdWRlTWF0Y2hlcyB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgaWYgKCFpc0Nhc2VTZW5zaXRpdmUpIHtcbiAgICAgIHRleHQgPSB0ZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgLy8gRXhhY3QgbWF0Y2hcbiAgICBpZiAodGhpcy5wYXR0ZXJuID09PSB0ZXh0KSB7XG4gICAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgICBpc01hdGNoOiB0cnVlLFxuICAgICAgICBzY29yZTogMFxuICAgICAgfTtcblxuICAgICAgaWYgKGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICAgIHJlc3VsdC5pbmRpY2VzID0gW1swLCB0ZXh0Lmxlbmd0aCAtIDFdXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSwgdXNlIEJpdGFwIGFsZ29yaXRobVxuICAgIGNvbnN0IHtcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgZGlzdGFuY2UsXG4gICAgICB0aHJlc2hvbGQsXG4gICAgICBmaW5kQWxsTWF0Y2hlcyxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIGlnbm9yZUxvY2F0aW9uXG4gICAgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIGxldCBhbGxJbmRpY2VzID0gW107XG4gICAgbGV0IHRvdGFsU2NvcmUgPSAwO1xuICAgIGxldCBoYXNNYXRjaGVzID0gZmFsc2U7XG5cbiAgICB0aGlzLmNodW5rcy5mb3JFYWNoKCh7IHBhdHRlcm4sIGFscGhhYmV0LCBzdGFydEluZGV4IH0pID0+IHtcbiAgICAgIGNvbnN0IHsgaXNNYXRjaCwgc2NvcmUsIGluZGljZXMgfSA9IHNlYXJjaCh0ZXh0LCBwYXR0ZXJuLCBhbHBoYWJldCwge1xuICAgICAgICBsb2NhdGlvbjogbG9jYXRpb24gKyBzdGFydEluZGV4LFxuICAgICAgICBkaXN0YW5jZSxcbiAgICAgICAgdGhyZXNob2xkLFxuICAgICAgICBmaW5kQWxsTWF0Y2hlcyxcbiAgICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgICBpbmNsdWRlTWF0Y2hlcyxcbiAgICAgICAgaWdub3JlTG9jYXRpb25cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaXNNYXRjaCkge1xuICAgICAgICBoYXNNYXRjaGVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdG90YWxTY29yZSArPSBzY29yZTtcblxuICAgICAgaWYgKGlzTWF0Y2ggJiYgaW5kaWNlcykge1xuICAgICAgICBhbGxJbmRpY2VzID0gWy4uLmFsbEluZGljZXMsIC4uLmluZGljZXNdO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgIGlzTWF0Y2g6IGhhc01hdGNoZXMsXG4gICAgICBzY29yZTogaGFzTWF0Y2hlcyA/IHRvdGFsU2NvcmUgLyB0aGlzLmNodW5rcy5sZW5ndGggOiAxXG4gICAgfTtcblxuICAgIGlmIChoYXNNYXRjaGVzICYmIGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICByZXN1bHQuaW5kaWNlcyA9IGFsbEluZGljZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmNsYXNzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICB0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuO1xuICB9XG4gIHN0YXRpYyBpc011bHRpTWF0Y2gocGF0dGVybikge1xuICAgIHJldHVybiBnZXRNYXRjaChwYXR0ZXJuLCB0aGlzLm11bHRpUmVnZXgpXG4gIH1cbiAgc3RhdGljIGlzU2luZ2xlTWF0Y2gocGF0dGVybikge1xuICAgIHJldHVybiBnZXRNYXRjaChwYXR0ZXJuLCB0aGlzLnNpbmdsZVJlZ2V4KVxuICB9XG4gIHNlYXJjaCgvKnRleHQqLykge31cbn1cblxuZnVuY3Rpb24gZ2V0TWF0Y2gocGF0dGVybiwgZXhwKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBwYXR0ZXJuLm1hdGNoKGV4cCk7XG4gIHJldHVybiBtYXRjaGVzID8gbWF0Y2hlc1sxXSA6IG51bGxcbn1cblxuLy8gVG9rZW46ICdmaWxlXG5cbmNsYXNzIEV4YWN0TWF0Y2ggZXh0ZW5kcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgc3VwZXIocGF0dGVybik7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnZXhhY3QnXG4gIH1cbiAgc3RhdGljIGdldCBtdWx0aVJlZ2V4KCkge1xuICAgIHJldHVybiAvXj1cIiguKilcIiQvXG4gIH1cbiAgc3RhdGljIGdldCBzaW5nbGVSZWdleCgpIHtcbiAgICByZXR1cm4gL149KC4qKSQvXG4gIH1cbiAgc2VhcmNoKHRleHQpIHtcbiAgICBjb25zdCBpc01hdGNoID0gdGV4dCA9PT0gdGhpcy5wYXR0ZXJuO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTWF0Y2gsXG4gICAgICBzY29yZTogaXNNYXRjaCA/IDAgOiAxLFxuICAgICAgaW5kaWNlczogWzAsIHRoaXMucGF0dGVybi5sZW5ndGggLSAxXVxuICAgIH1cbiAgfVxufVxuXG4vLyBUb2tlbjogIWZpcmVcblxuY2xhc3MgSW52ZXJzZUV4YWN0TWF0Y2ggZXh0ZW5kcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgc3VwZXIocGF0dGVybik7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnaW52ZXJzZS1leGFjdCdcbiAgfVxuICBzdGF0aWMgZ2V0IG11bHRpUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eIVwiKC4qKVwiJC9cbiAgfVxuICBzdGF0aWMgZ2V0IHNpbmdsZVJlZ2V4KCkge1xuICAgIHJldHVybiAvXiEoLiopJC9cbiAgfVxuICBzZWFyY2godGV4dCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGV4dC5pbmRleE9mKHRoaXMucGF0dGVybik7XG4gICAgY29uc3QgaXNNYXRjaCA9IGluZGV4ID09PSAtMTtcblxuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoLFxuICAgICAgc2NvcmU6IGlzTWF0Y2ggPyAwIDogMSxcbiAgICAgIGluZGljZXM6IFswLCB0ZXh0Lmxlbmd0aCAtIDFdXG4gICAgfVxuICB9XG59XG5cbi8vIFRva2VuOiBeZmlsZVxuXG5jbGFzcyBQcmVmaXhFeGFjdE1hdGNoIGV4dGVuZHMgQmFzZU1hdGNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybikge1xuICAgIHN1cGVyKHBhdHRlcm4pO1xuICB9XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ3ByZWZpeC1leGFjdCdcbiAgfVxuICBzdGF0aWMgZ2V0IG11bHRpUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eXFxeXCIoLiopXCIkL1xuICB9XG4gIHN0YXRpYyBnZXQgc2luZ2xlUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eXFxeKC4qKSQvXG4gIH1cbiAgc2VhcmNoKHRleHQpIHtcbiAgICBjb25zdCBpc01hdGNoID0gdGV4dC5zdGFydHNXaXRoKHRoaXMucGF0dGVybik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXNNYXRjaCxcbiAgICAgIHNjb3JlOiBpc01hdGNoID8gMCA6IDEsXG4gICAgICBpbmRpY2VzOiBbMCwgdGhpcy5wYXR0ZXJuLmxlbmd0aCAtIDFdXG4gICAgfVxuICB9XG59XG5cbi8vIFRva2VuOiAhXmZpcmVcblxuY2xhc3MgSW52ZXJzZVByZWZpeEV4YWN0TWF0Y2ggZXh0ZW5kcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgc3VwZXIocGF0dGVybik7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnaW52ZXJzZS1wcmVmaXgtZXhhY3QnXG4gIH1cbiAgc3RhdGljIGdldCBtdWx0aVJlZ2V4KCkge1xuICAgIHJldHVybiAvXiFcXF5cIiguKilcIiQvXG4gIH1cbiAgc3RhdGljIGdldCBzaW5nbGVSZWdleCgpIHtcbiAgICByZXR1cm4gL14hXFxeKC4qKSQvXG4gIH1cbiAgc2VhcmNoKHRleHQpIHtcbiAgICBjb25zdCBpc01hdGNoID0gIXRleHQuc3RhcnRzV2l0aCh0aGlzLnBhdHRlcm4pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTWF0Y2gsXG4gICAgICBzY29yZTogaXNNYXRjaCA/IDAgOiAxLFxuICAgICAgaW5kaWNlczogWzAsIHRleHQubGVuZ3RoIC0gMV1cbiAgICB9XG4gIH1cbn1cblxuLy8gVG9rZW46IC5maWxlJFxuXG5jbGFzcyBTdWZmaXhFeGFjdE1hdGNoIGV4dGVuZHMgQmFzZU1hdGNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybikge1xuICAgIHN1cGVyKHBhdHRlcm4pO1xuICB9XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ3N1ZmZpeC1leGFjdCdcbiAgfVxuICBzdGF0aWMgZ2V0IG11bHRpUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eXCIoLiopXCJcXCQkL1xuICB9XG4gIHN0YXRpYyBnZXQgc2luZ2xlUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eKC4qKVxcJCQvXG4gIH1cbiAgc2VhcmNoKHRleHQpIHtcbiAgICBjb25zdCBpc01hdGNoID0gdGV4dC5lbmRzV2l0aCh0aGlzLnBhdHRlcm4pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTWF0Y2gsXG4gICAgICBzY29yZTogaXNNYXRjaCA/IDAgOiAxLFxuICAgICAgaW5kaWNlczogW3RleHQubGVuZ3RoIC0gdGhpcy5wYXR0ZXJuLmxlbmd0aCwgdGV4dC5sZW5ndGggLSAxXVxuICAgIH1cbiAgfVxufVxuXG4vLyBUb2tlbjogIS5maWxlJFxuXG5jbGFzcyBJbnZlcnNlU3VmZml4RXhhY3RNYXRjaCBleHRlbmRzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICBzdXBlcihwYXR0ZXJuKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdpbnZlcnNlLXN1ZmZpeC1leGFjdCdcbiAgfVxuICBzdGF0aWMgZ2V0IG11bHRpUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eIVwiKC4qKVwiXFwkJC9cbiAgfVxuICBzdGF0aWMgZ2V0IHNpbmdsZVJlZ2V4KCkge1xuICAgIHJldHVybiAvXiEoLiopXFwkJC9cbiAgfVxuICBzZWFyY2godGV4dCkge1xuICAgIGNvbnN0IGlzTWF0Y2ggPSAhdGV4dC5lbmRzV2l0aCh0aGlzLnBhdHRlcm4pO1xuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoLFxuICAgICAgc2NvcmU6IGlzTWF0Y2ggPyAwIDogMSxcbiAgICAgIGluZGljZXM6IFswLCB0ZXh0Lmxlbmd0aCAtIDFdXG4gICAgfVxuICB9XG59XG5cbmNsYXNzIEZ1enp5TWF0Y2ggZXh0ZW5kcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwYXR0ZXJuLFxuICAgIHtcbiAgICAgIGxvY2F0aW9uID0gQ29uZmlnLmxvY2F0aW9uLFxuICAgICAgdGhyZXNob2xkID0gQ29uZmlnLnRocmVzaG9sZCxcbiAgICAgIGRpc3RhbmNlID0gQ29uZmlnLmRpc3RhbmNlLFxuICAgICAgaW5jbHVkZU1hdGNoZXMgPSBDb25maWcuaW5jbHVkZU1hdGNoZXMsXG4gICAgICBmaW5kQWxsTWF0Y2hlcyA9IENvbmZpZy5maW5kQWxsTWF0Y2hlcyxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCA9IENvbmZpZy5taW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICBpc0Nhc2VTZW5zaXRpdmUgPSBDb25maWcuaXNDYXNlU2Vuc2l0aXZlLFxuICAgICAgaWdub3JlTG9jYXRpb24gPSBDb25maWcuaWdub3JlTG9jYXRpb25cbiAgICB9ID0ge31cbiAgKSB7XG4gICAgc3VwZXIocGF0dGVybik7XG4gICAgdGhpcy5fYml0YXBTZWFyY2ggPSBuZXcgQml0YXBTZWFyY2gocGF0dGVybiwge1xuICAgICAgbG9jYXRpb24sXG4gICAgICB0aHJlc2hvbGQsXG4gICAgICBkaXN0YW5jZSxcbiAgICAgIGluY2x1ZGVNYXRjaGVzLFxuICAgICAgZmluZEFsbE1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICBpc0Nhc2VTZW5zaXRpdmUsXG4gICAgICBpZ25vcmVMb2NhdGlvblxuICAgIH0pO1xuICB9XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2Z1enp5J1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL15cIiguKilcIiQvXG4gIH1cbiAgc3RhdGljIGdldCBzaW5nbGVSZWdleCgpIHtcbiAgICByZXR1cm4gL14oLiopJC9cbiAgfVxuICBzZWFyY2godGV4dCkge1xuICAgIHJldHVybiB0aGlzLl9iaXRhcFNlYXJjaC5zZWFyY2hJbih0ZXh0KVxuICB9XG59XG5cbi8vIFRva2VuOiAnZmlsZVxuXG5jbGFzcyBJbmNsdWRlTWF0Y2ggZXh0ZW5kcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgc3VwZXIocGF0dGVybik7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnaW5jbHVkZSdcbiAgfVxuICBzdGF0aWMgZ2V0IG11bHRpUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eJ1wiKC4qKVwiJC9cbiAgfVxuICBzdGF0aWMgZ2V0IHNpbmdsZVJlZ2V4KCkge1xuICAgIHJldHVybiAvXicoLiopJC9cbiAgfVxuICBzZWFyY2godGV4dCkge1xuICAgIGxldCBsb2NhdGlvbiA9IDA7XG4gICAgbGV0IGluZGV4O1xuXG4gICAgY29uc3QgaW5kaWNlcyA9IFtdO1xuICAgIGNvbnN0IHBhdHRlcm5MZW4gPSB0aGlzLnBhdHRlcm4ubGVuZ3RoO1xuXG4gICAgLy8gR2V0IGFsbCBleGFjdCBtYXRjaGVzXG4gICAgd2hpbGUgKChpbmRleCA9IHRleHQuaW5kZXhPZih0aGlzLnBhdHRlcm4sIGxvY2F0aW9uKSkgPiAtMSkge1xuICAgICAgbG9jYXRpb24gPSBpbmRleCArIHBhdHRlcm5MZW47XG4gICAgICBpbmRpY2VzLnB1c2goW2luZGV4LCBsb2NhdGlvbiAtIDFdKTtcbiAgICB9XG5cbiAgICBjb25zdCBpc01hdGNoID0gISFpbmRpY2VzLmxlbmd0aDtcblxuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoLFxuICAgICAgc2NvcmU6IGlzTWF0Y2ggPyAwIDogMSxcbiAgICAgIGluZGljZXNcbiAgICB9XG4gIH1cbn1cblxuLy8g4p2XT3JkZXIgaXMgaW1wb3J0YW50LiBETyBOT1QgQ0hBTkdFLlxuY29uc3Qgc2VhcmNoZXJzID0gW1xuICBFeGFjdE1hdGNoLFxuICBJbmNsdWRlTWF0Y2gsXG4gIFByZWZpeEV4YWN0TWF0Y2gsXG4gIEludmVyc2VQcmVmaXhFeGFjdE1hdGNoLFxuICBJbnZlcnNlU3VmZml4RXhhY3RNYXRjaCxcbiAgU3VmZml4RXhhY3RNYXRjaCxcbiAgSW52ZXJzZUV4YWN0TWF0Y2gsXG4gIEZ1enp5TWF0Y2hcbl07XG5cbmNvbnN0IHNlYXJjaGVyc0xlbiA9IHNlYXJjaGVycy5sZW5ndGg7XG5cbi8vIFJlZ2V4IHRvIHNwbGl0IGJ5IHNwYWNlcywgYnV0IGtlZXAgYW55dGhpbmcgaW4gcXVvdGVzIHRvZ2V0aGVyXG5jb25zdCBTUEFDRV9SRSA9IC8gKyg/PSg/OlteXFxcIl0qXFxcIlteXFxcIl0qXFxcIikqW15cXFwiXSokKS87XG5jb25zdCBPUl9UT0tFTiA9ICd8JztcblxuLy8gUmV0dXJuIGEgMkQgYXJyYXkgcmVwcmVzZW50YXRpb24gb2YgdGhlIHF1ZXJ5LCBmb3Igc2ltcGxlciBwYXJzaW5nLlxuLy8gRXhhbXBsZTpcbi8vIFwiXmNvcmUgZ28kIHwgcmIkIHwgcHkkIHh5JFwiID0+IFtbXCJeY29yZVwiLCBcImdvJFwiXSwgW1wicmIkXCJdLCBbXCJweSRcIiwgXCJ4eSRcIl1dXG5mdW5jdGlvbiBwYXJzZVF1ZXJ5KHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICByZXR1cm4gcGF0dGVybi5zcGxpdChPUl9UT0tFTikubWFwKChpdGVtKSA9PiB7XG4gICAgbGV0IHF1ZXJ5ID0gaXRlbVxuICAgICAgLnRyaW0oKVxuICAgICAgLnNwbGl0KFNQQUNFX1JFKVxuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAmJiAhIWl0ZW0udHJpbSgpKTtcblxuICAgIGxldCByZXN1bHRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHF1ZXJ5Lmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBjb25zdCBxdWVyeUl0ZW0gPSBxdWVyeVtpXTtcblxuICAgICAgLy8gMS4gSGFuZGxlIG11bHRpcGxlIHF1ZXJ5IG1hdGNoIChpLmUsIG9uY2UgdGhhdCBhcmUgcXVvdGVkLCBsaWtlIGBcImhlbGxvIHdvcmxkXCJgKVxuICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICBsZXQgaWR4ID0gLTE7XG4gICAgICB3aGlsZSAoIWZvdW5kICYmICsraWR4IDwgc2VhcmNoZXJzTGVuKSB7XG4gICAgICAgIGNvbnN0IHNlYXJjaGVyID0gc2VhcmNoZXJzW2lkeF07XG4gICAgICAgIGxldCB0b2tlbiA9IHNlYXJjaGVyLmlzTXVsdGlNYXRjaChxdWVyeUl0ZW0pO1xuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2gobmV3IHNlYXJjaGVyKHRva2VuLCBvcHRpb25zKSk7XG4gICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyAyLiBIYW5kbGUgc2luZ2xlIHF1ZXJ5IG1hdGNoZXMgKGkuZSwgb25jZSB0aGF0IGFyZSAqbm90KiBxdW90ZWQpXG4gICAgICBpZHggPSAtMTtcbiAgICAgIHdoaWxlICgrK2lkeCA8IHNlYXJjaGVyc0xlbikge1xuICAgICAgICBjb25zdCBzZWFyY2hlciA9IHNlYXJjaGVyc1tpZHhdO1xuICAgICAgICBsZXQgdG9rZW4gPSBzZWFyY2hlci5pc1NpbmdsZU1hdGNoKHF1ZXJ5SXRlbSk7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChuZXcgc2VhcmNoZXIodG9rZW4sIG9wdGlvbnMpKTtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfSlcbn1cblxuLy8gVGhlc2UgZXh0ZW5kZWQgbWF0Y2hlcnMgY2FuIHJldHVybiBhbiBhcnJheSBvZiBtYXRjaGVzLCBhcyBvcHBvc2VkXG4vLyB0byBhIHNpbmdsIG1hdGNoXG5jb25zdCBNdWx0aU1hdGNoU2V0ID0gbmV3IFNldChbRnV6enlNYXRjaC50eXBlLCBJbmNsdWRlTWF0Y2gudHlwZV0pO1xuXG4vKipcbiAqIENvbW1hbmQtbGlrZSBzZWFyY2hpbmdcbiAqID09PT09PT09PT09PT09PT09PT09PT1cbiAqXG4gKiBHaXZlbiBtdWx0aXBsZSBzZWFyY2ggdGVybXMgZGVsaW1pdGVkIGJ5IHNwYWNlcy5lLmcuIGBeanNjcmlwdCAucHl0aG9uJCBydWJ5ICFqYXZhYCxcbiAqIHNlYXJjaCBpbiBhIGdpdmVuIHRleHQuXG4gKlxuICogU2VhcmNoIHN5bnRheDpcbiAqXG4gKiB8IFRva2VuICAgICAgIHwgTWF0Y2ggdHlwZSAgICAgICAgICAgICAgICAgfCBEZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IC0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8XG4gKiB8IGBqc2NyaXB0YCAgIHwgZnV6enktbWF0Y2ggICAgICAgICAgICAgICAgfCBJdGVtcyB0aGF0IGZ1enp5IG1hdGNoIGBqc2NyaXB0YCAgICAgICB8XG4gKiB8IGA9c2NoZW1lYCAgIHwgZXhhY3QtbWF0Y2ggICAgICAgICAgICAgICAgfCBJdGVtcyB0aGF0IGFyZSBgc2NoZW1lYCAgICAgICAgICAgICAgICB8XG4gKiB8IGAncHl0aG9uYCAgIHwgaW5jbHVkZS1tYXRjaCAgICAgICAgICAgICAgfCBJdGVtcyB0aGF0IGluY2x1ZGUgYHB5dGhvbmAgICAgICAgICAgICB8XG4gKiB8IGAhcnVieWAgICAgIHwgaW52ZXJzZS1leGFjdC1tYXRjaCAgICAgICAgfCBJdGVtcyB0aGF0IGRvIG5vdCBpbmNsdWRlIGBydWJ5YCAgICAgICB8XG4gKiB8IGBeamF2YWAgICAgIHwgcHJlZml4LWV4YWN0LW1hdGNoICAgICAgICAgfCBJdGVtcyB0aGF0IHN0YXJ0IHdpdGggYGphdmFgICAgICAgICAgICB8XG4gKiB8IGAhXmVhcmxhbmdgIHwgaW52ZXJzZS1wcmVmaXgtZXhhY3QtbWF0Y2ggfCBJdGVtcyB0aGF0IGRvIG5vdCBzdGFydCB3aXRoIGBlYXJsYW5nYCB8XG4gKiB8IGAuanMkYCAgICAgIHwgc3VmZml4LWV4YWN0LW1hdGNoICAgICAgICAgfCBJdGVtcyB0aGF0IGVuZCB3aXRoIGAuanNgICAgICAgICAgICAgICB8XG4gKiB8IGAhLmdvJGAgICAgIHwgaW52ZXJzZS1zdWZmaXgtZXhhY3QtbWF0Y2ggfCBJdGVtcyB0aGF0IGRvIG5vdCBlbmQgd2l0aCBgLmdvYCAgICAgICB8XG4gKlxuICogQSBzaW5nbGUgcGlwZSBjaGFyYWN0ZXIgYWN0cyBhcyBhbiBPUiBvcGVyYXRvci4gRm9yIGV4YW1wbGUsIHRoZSBmb2xsb3dpbmdcbiAqIHF1ZXJ5IG1hdGNoZXMgZW50cmllcyB0aGF0IHN0YXJ0IHdpdGggYGNvcmVgIGFuZCBlbmQgd2l0aCBlaXRoZXJgZ29gLCBgcmJgLFxuICogb3JgcHlgLlxuICpcbiAqIGBgYFxuICogXmNvcmUgZ28kIHwgcmIkIHwgcHkkXG4gKiBgYGBcbiAqL1xuY2xhc3MgRXh0ZW5kZWRTZWFyY2gge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwYXR0ZXJuLFxuICAgIHtcbiAgICAgIGlzQ2FzZVNlbnNpdGl2ZSA9IENvbmZpZy5pc0Nhc2VTZW5zaXRpdmUsXG4gICAgICBpbmNsdWRlTWF0Y2hlcyA9IENvbmZpZy5pbmNsdWRlTWF0Y2hlcyxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCA9IENvbmZpZy5taW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICBpZ25vcmVMb2NhdGlvbiA9IENvbmZpZy5pZ25vcmVMb2NhdGlvbixcbiAgICAgIGZpbmRBbGxNYXRjaGVzID0gQ29uZmlnLmZpbmRBbGxNYXRjaGVzLFxuICAgICAgbG9jYXRpb24gPSBDb25maWcubG9jYXRpb24sXG4gICAgICB0aHJlc2hvbGQgPSBDb25maWcudGhyZXNob2xkLFxuICAgICAgZGlzdGFuY2UgPSBDb25maWcuZGlzdGFuY2VcbiAgICB9ID0ge31cbiAgKSB7XG4gICAgdGhpcy5xdWVyeSA9IG51bGw7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgaXNDYXNlU2Vuc2l0aXZlLFxuICAgICAgaW5jbHVkZU1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICBmaW5kQWxsTWF0Y2hlcyxcbiAgICAgIGlnbm9yZUxvY2F0aW9uLFxuICAgICAgbG9jYXRpb24sXG4gICAgICB0aHJlc2hvbGQsXG4gICAgICBkaXN0YW5jZVxuICAgIH07XG5cbiAgICB0aGlzLnBhdHRlcm4gPSBpc0Nhc2VTZW5zaXRpdmUgPyBwYXR0ZXJuIDogcGF0dGVybi50b0xvd2VyQ2FzZSgpO1xuICAgIHRoaXMucXVlcnkgPSBwYXJzZVF1ZXJ5KHRoaXMucGF0dGVybiwgdGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIHN0YXRpYyBjb25kaXRpb24oXywgb3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zLnVzZUV4dGVuZGVkU2VhcmNoXG4gIH1cblxuICBzZWFyY2hJbih0ZXh0KSB7XG4gICAgY29uc3QgcXVlcnkgPSB0aGlzLnF1ZXJ5O1xuXG4gICAgaWYgKCFxdWVyeSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNNYXRjaDogZmFsc2UsXG4gICAgICAgIHNjb3JlOiAxXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgeyBpbmNsdWRlTWF0Y2hlcywgaXNDYXNlU2Vuc2l0aXZlIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICB0ZXh0ID0gaXNDYXNlU2Vuc2l0aXZlID8gdGV4dCA6IHRleHQudG9Mb3dlckNhc2UoKTtcblxuICAgIGxldCBudW1NYXRjaGVzID0gMDtcbiAgICBsZXQgYWxsSW5kaWNlcyA9IFtdO1xuICAgIGxldCB0b3RhbFNjb3JlID0gMDtcblxuICAgIC8vIE9Sc1xuICAgIGZvciAobGV0IGkgPSAwLCBxTGVuID0gcXVlcnkubGVuZ3RoOyBpIDwgcUxlbjsgaSArPSAxKSB7XG4gICAgICBjb25zdCBzZWFyY2hlcnMgPSBxdWVyeVtpXTtcblxuICAgICAgLy8gUmVzZXQgaW5kaWNlc1xuICAgICAgYWxsSW5kaWNlcy5sZW5ndGggPSAwO1xuICAgICAgbnVtTWF0Y2hlcyA9IDA7XG5cbiAgICAgIC8vIEFORHNcbiAgICAgIGZvciAobGV0IGogPSAwLCBwTGVuID0gc2VhcmNoZXJzLmxlbmd0aDsgaiA8IHBMZW47IGogKz0gMSkge1xuICAgICAgICBjb25zdCBzZWFyY2hlciA9IHNlYXJjaGVyc1tqXTtcbiAgICAgICAgY29uc3QgeyBpc01hdGNoLCBpbmRpY2VzLCBzY29yZSB9ID0gc2VhcmNoZXIuc2VhcmNoKHRleHQpO1xuXG4gICAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgICAgbnVtTWF0Y2hlcyArPSAxO1xuICAgICAgICAgIHRvdGFsU2NvcmUgKz0gc2NvcmU7XG4gICAgICAgICAgaWYgKGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gc2VhcmNoZXIuY29uc3RydWN0b3IudHlwZTtcbiAgICAgICAgICAgIGlmIChNdWx0aU1hdGNoU2V0Lmhhcyh0eXBlKSkge1xuICAgICAgICAgICAgICBhbGxJbmRpY2VzID0gWy4uLmFsbEluZGljZXMsIC4uLmluZGljZXNdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYWxsSW5kaWNlcy5wdXNoKGluZGljZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b3RhbFNjb3JlID0gMDtcbiAgICAgICAgICBudW1NYXRjaGVzID0gMDtcbiAgICAgICAgICBhbGxJbmRpY2VzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPUiBjb25kaXRpb24sIHNvIGlmIFRSVUUsIHJldHVyblxuICAgICAgaWYgKG51bU1hdGNoZXMpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgICAgICBpc01hdGNoOiB0cnVlLFxuICAgICAgICAgIHNjb3JlOiB0b3RhbFNjb3JlIC8gbnVtTWF0Y2hlc1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChpbmNsdWRlTWF0Y2hlcykge1xuICAgICAgICAgIHJlc3VsdC5pbmRpY2VzID0gYWxsSW5kaWNlcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOb3RoaW5nIHdhcyBtYXRjaGVkXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTWF0Y2g6IGZhbHNlLFxuICAgICAgc2NvcmU6IDFcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgcmVnaXN0ZXJlZFNlYXJjaGVycyA9IFtdO1xuXG5mdW5jdGlvbiByZWdpc3RlciguLi5hcmdzKSB7XG4gIHJlZ2lzdGVyZWRTZWFyY2hlcnMucHVzaCguLi5hcmdzKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2VhcmNoZXIocGF0dGVybiwgb3B0aW9ucykge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0gcmVnaXN0ZXJlZFNlYXJjaGVycy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIGxldCBzZWFyY2hlckNsYXNzID0gcmVnaXN0ZXJlZFNlYXJjaGVyc1tpXTtcbiAgICBpZiAoc2VhcmNoZXJDbGFzcy5jb25kaXRpb24ocGF0dGVybiwgb3B0aW9ucykpIHtcbiAgICAgIHJldHVybiBuZXcgc2VhcmNoZXJDbGFzcyhwYXR0ZXJuLCBvcHRpb25zKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgQml0YXBTZWFyY2gocGF0dGVybiwgb3B0aW9ucylcbn1cblxuY29uc3QgTG9naWNhbE9wZXJhdG9yID0ge1xuICBBTkQ6ICckYW5kJyxcbiAgT1I6ICckb3InXG59O1xuXG5jb25zdCBLZXlUeXBlID0ge1xuICBQQVRIOiAnJHBhdGgnLFxuICBQQVRURVJOOiAnJHZhbCdcbn07XG5cbmNvbnN0IGlzRXhwcmVzc2lvbiA9IChxdWVyeSkgPT5cbiAgISEocXVlcnlbTG9naWNhbE9wZXJhdG9yLkFORF0gfHwgcXVlcnlbTG9naWNhbE9wZXJhdG9yLk9SXSk7XG5cbmNvbnN0IGlzUGF0aCA9IChxdWVyeSkgPT4gISFxdWVyeVtLZXlUeXBlLlBBVEhdO1xuXG5jb25zdCBpc0xlYWYgPSAocXVlcnkpID0+XG4gICFpc0FycmF5KHF1ZXJ5KSAmJiBpc09iamVjdChxdWVyeSkgJiYgIWlzRXhwcmVzc2lvbihxdWVyeSk7XG5cbmNvbnN0IGNvbnZlcnRUb0V4cGxpY2l0ID0gKHF1ZXJ5KSA9PiAoe1xuICBbTG9naWNhbE9wZXJhdG9yLkFORF06IE9iamVjdC5rZXlzKHF1ZXJ5KS5tYXAoKGtleSkgPT4gKHtcbiAgICBba2V5XTogcXVlcnlba2V5XVxuICB9KSlcbn0pO1xuXG4vLyBXaGVuIGBhdXRvYCBpcyBgdHJ1ZWAsIHRoZSBwYXJzZSBmdW5jdGlvbiB3aWxsIGluZmVyIGFuZCBpbml0aWFsaXplIGFuZCBhZGRcbi8vIHRoZSBhcHByb3ByaWF0ZSBgU2VhcmNoZXJgIGluc3RhbmNlXG5mdW5jdGlvbiBwYXJzZShxdWVyeSwgb3B0aW9ucywgeyBhdXRvID0gdHJ1ZSB9ID0ge30pIHtcbiAgY29uc3QgbmV4dCA9IChxdWVyeSkgPT4ge1xuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMocXVlcnkpO1xuXG4gICAgY29uc3QgaXNRdWVyeVBhdGggPSBpc1BhdGgocXVlcnkpO1xuXG4gICAgaWYgKCFpc1F1ZXJ5UGF0aCAmJiBrZXlzLmxlbmd0aCA+IDEgJiYgIWlzRXhwcmVzc2lvbihxdWVyeSkpIHtcbiAgICAgIHJldHVybiBuZXh0KGNvbnZlcnRUb0V4cGxpY2l0KHF1ZXJ5KSlcbiAgICB9XG5cbiAgICBpZiAoaXNMZWFmKHF1ZXJ5KSkge1xuICAgICAgY29uc3Qga2V5ID0gaXNRdWVyeVBhdGggPyBxdWVyeVtLZXlUeXBlLlBBVEhdIDoga2V5c1swXTtcblxuICAgICAgY29uc3QgcGF0dGVybiA9IGlzUXVlcnlQYXRoID8gcXVlcnlbS2V5VHlwZS5QQVRURVJOXSA6IHF1ZXJ5W2tleV07XG5cbiAgICAgIGlmICghaXNTdHJpbmcocGF0dGVybikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKExPR0lDQUxfU0VBUkNIX0lOVkFMSURfUVVFUllfRk9SX0tFWShrZXkpKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgIGtleUlkOiBjcmVhdGVLZXlJZChrZXkpLFxuICAgICAgICBwYXR0ZXJuXG4gICAgICB9O1xuXG4gICAgICBpZiAoYXV0bykge1xuICAgICAgICBvYmouc2VhcmNoZXIgPSBjcmVhdGVTZWFyY2hlcihwYXR0ZXJuLCBvcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9ialxuICAgIH1cblxuICAgIGxldCBub2RlID0ge1xuICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgb3BlcmF0b3I6IGtleXNbMF1cbiAgICB9O1xuXG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gcXVlcnlba2V5XTtcblxuICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBub2RlLmNoaWxkcmVuLnB1c2gobmV4dChpdGVtKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vZGVcbiAgfTtcblxuICBpZiAoIWlzRXhwcmVzc2lvbihxdWVyeSkpIHtcbiAgICBxdWVyeSA9IGNvbnZlcnRUb0V4cGxpY2l0KHF1ZXJ5KTtcbiAgfVxuXG4gIHJldHVybiBuZXh0KHF1ZXJ5KVxufVxuXG4vLyBQcmFjdGljYWwgc2NvcmluZyBmdW5jdGlvblxuZnVuY3Rpb24gY29tcHV0ZVNjb3JlKFxuICByZXN1bHRzLFxuICB7IGlnbm9yZUZpZWxkTm9ybSA9IENvbmZpZy5pZ25vcmVGaWVsZE5vcm0gfVxuKSB7XG4gIHJlc3VsdHMuZm9yRWFjaCgocmVzdWx0KSA9PiB7XG4gICAgbGV0IHRvdGFsU2NvcmUgPSAxO1xuXG4gICAgcmVzdWx0Lm1hdGNoZXMuZm9yRWFjaCgoeyBrZXksIG5vcm0sIHNjb3JlIH0pID0+IHtcbiAgICAgIGNvbnN0IHdlaWdodCA9IGtleSA/IGtleS53ZWlnaHQgOiBudWxsO1xuXG4gICAgICB0b3RhbFNjb3JlICo9IE1hdGgucG93KFxuICAgICAgICBzY29yZSA9PT0gMCAmJiB3ZWlnaHQgPyBOdW1iZXIuRVBTSUxPTiA6IHNjb3JlLFxuICAgICAgICAod2VpZ2h0IHx8IDEpICogKGlnbm9yZUZpZWxkTm9ybSA/IDEgOiBub3JtKVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJlc3VsdC5zY29yZSA9IHRvdGFsU2NvcmU7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1NYXRjaGVzKHJlc3VsdCwgZGF0YSkge1xuICBjb25zdCBtYXRjaGVzID0gcmVzdWx0Lm1hdGNoZXM7XG4gIGRhdGEubWF0Y2hlcyA9IFtdO1xuXG4gIGlmICghaXNEZWZpbmVkKG1hdGNoZXMpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBtYXRjaGVzLmZvckVhY2goKG1hdGNoKSA9PiB7XG4gICAgaWYgKCFpc0RlZmluZWQobWF0Y2guaW5kaWNlcykgfHwgIW1hdGNoLmluZGljZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IGluZGljZXMsIHZhbHVlIH0gPSBtYXRjaDtcblxuICAgIGxldCBvYmogPSB7XG4gICAgICBpbmRpY2VzLFxuICAgICAgdmFsdWVcbiAgICB9O1xuXG4gICAgaWYgKG1hdGNoLmtleSkge1xuICAgICAgb2JqLmtleSA9IG1hdGNoLmtleS5zcmM7XG4gICAgfVxuXG4gICAgaWYgKG1hdGNoLmlkeCA+IC0xKSB7XG4gICAgICBvYmoucmVmSW5kZXggPSBtYXRjaC5pZHg7XG4gICAgfVxuXG4gICAgZGF0YS5tYXRjaGVzLnB1c2gob2JqKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVNjb3JlKHJlc3VsdCwgZGF0YSkge1xuICBkYXRhLnNjb3JlID0gcmVzdWx0LnNjb3JlO1xufVxuXG5mdW5jdGlvbiBmb3JtYXQoXG4gIHJlc3VsdHMsXG4gIGRvY3MsXG4gIHtcbiAgICBpbmNsdWRlTWF0Y2hlcyA9IENvbmZpZy5pbmNsdWRlTWF0Y2hlcyxcbiAgICBpbmNsdWRlU2NvcmUgPSBDb25maWcuaW5jbHVkZVNjb3JlXG4gIH0gPSB7fVxuKSB7XG4gIGNvbnN0IHRyYW5zZm9ybWVycyA9IFtdO1xuXG4gIGlmIChpbmNsdWRlTWF0Y2hlcykgdHJhbnNmb3JtZXJzLnB1c2godHJhbnNmb3JtTWF0Y2hlcyk7XG4gIGlmIChpbmNsdWRlU2NvcmUpIHRyYW5zZm9ybWVycy5wdXNoKHRyYW5zZm9ybVNjb3JlKTtcblxuICByZXR1cm4gcmVzdWx0cy5tYXAoKHJlc3VsdCkgPT4ge1xuICAgIGNvbnN0IHsgaWR4IH0gPSByZXN1bHQ7XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgaXRlbTogZG9jc1tpZHhdLFxuICAgICAgcmVmSW5kZXg6IGlkeFxuICAgIH07XG5cbiAgICBpZiAodHJhbnNmb3JtZXJzLmxlbmd0aCkge1xuICAgICAgdHJhbnNmb3JtZXJzLmZvckVhY2goKHRyYW5zZm9ybWVyKSA9PiB7XG4gICAgICAgIHRyYW5zZm9ybWVyKHJlc3VsdCwgZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YVxuICB9KVxufVxuXG5jbGFzcyBGdXNlIHtcbiAgY29uc3RydWN0b3IoZG9jcywgb3B0aW9ucyA9IHt9LCBpbmRleCkge1xuICAgIHRoaXMub3B0aW9ucyA9IHsgLi4uQ29uZmlnLCAuLi5vcHRpb25zIH07XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLm9wdGlvbnMudXNlRXh0ZW5kZWRTZWFyY2ggJiZcbiAgICAgICF0cnVlXG4gICAgKSB7fVxuXG4gICAgdGhpcy5fa2V5U3RvcmUgPSBuZXcgS2V5U3RvcmUodGhpcy5vcHRpb25zLmtleXMpO1xuXG4gICAgdGhpcy5zZXRDb2xsZWN0aW9uKGRvY3MsIGluZGV4KTtcbiAgfVxuXG4gIHNldENvbGxlY3Rpb24oZG9jcywgaW5kZXgpIHtcbiAgICB0aGlzLl9kb2NzID0gZG9jcztcblxuICAgIGlmIChpbmRleCAmJiAhKGluZGV4IGluc3RhbmNlb2YgRnVzZUluZGV4KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKElOQ09SUkVDVF9JTkRFWF9UWVBFKVxuICAgIH1cblxuICAgIHRoaXMuX215SW5kZXggPVxuICAgICAgaW5kZXggfHxcbiAgICAgIGNyZWF0ZUluZGV4KHRoaXMub3B0aW9ucy5rZXlzLCB0aGlzLl9kb2NzLCB7XG4gICAgICAgIGdldEZuOiB0aGlzLm9wdGlvbnMuZ2V0Rm4sXG4gICAgICAgIGZpZWxkTm9ybVdlaWdodDogdGhpcy5vcHRpb25zLmZpZWxkTm9ybVdlaWdodFxuICAgICAgfSk7XG4gIH1cblxuICBhZGQoZG9jKSB7XG4gICAgaWYgKCFpc0RlZmluZWQoZG9jKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZG9jcy5wdXNoKGRvYyk7XG4gICAgdGhpcy5fbXlJbmRleC5hZGQoZG9jKTtcbiAgfVxuXG4gIHJlbW92ZShwcmVkaWNhdGUgPSAoLyogZG9jLCBpZHggKi8pID0+IGZhbHNlKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMuX2RvY3MubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGRvYyA9IHRoaXMuX2RvY3NbaV07XG4gICAgICBpZiAocHJlZGljYXRlKGRvYywgaSkpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVBdChpKTtcbiAgICAgICAgaSAtPSAxO1xuICAgICAgICBsZW4gLT0gMTtcblxuICAgICAgICByZXN1bHRzLnB1c2goZG9jKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG5cbiAgcmVtb3ZlQXQoaWR4KSB7XG4gICAgdGhpcy5fZG9jcy5zcGxpY2UoaWR4LCAxKTtcbiAgICB0aGlzLl9teUluZGV4LnJlbW92ZUF0KGlkeCk7XG4gIH1cblxuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbXlJbmRleFxuICB9XG5cbiAgc2VhcmNoKHF1ZXJ5LCB7IGxpbWl0ID0gLTEgfSA9IHt9KSB7XG4gICAgY29uc3Qge1xuICAgICAgaW5jbHVkZU1hdGNoZXMsXG4gICAgICBpbmNsdWRlU2NvcmUsXG4gICAgICBzaG91bGRTb3J0LFxuICAgICAgc29ydEZuLFxuICAgICAgaWdub3JlRmllbGROb3JtXG4gICAgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIGxldCByZXN1bHRzID0gaXNTdHJpbmcocXVlcnkpXG4gICAgICA/IGlzU3RyaW5nKHRoaXMuX2RvY3NbMF0pXG4gICAgICAgID8gdGhpcy5fc2VhcmNoU3RyaW5nTGlzdChxdWVyeSlcbiAgICAgICAgOiB0aGlzLl9zZWFyY2hPYmplY3RMaXN0KHF1ZXJ5KVxuICAgICAgOiB0aGlzLl9zZWFyY2hMb2dpY2FsKHF1ZXJ5KTtcblxuICAgIGNvbXB1dGVTY29yZShyZXN1bHRzLCB7IGlnbm9yZUZpZWxkTm9ybSB9KTtcblxuICAgIGlmIChzaG91bGRTb3J0KSB7XG4gICAgICByZXN1bHRzLnNvcnQoc29ydEZuKTtcbiAgICB9XG5cbiAgICBpZiAoaXNOdW1iZXIobGltaXQpICYmIGxpbWl0ID4gLTEpIHtcbiAgICAgIHJlc3VsdHMgPSByZXN1bHRzLnNsaWNlKDAsIGxpbWl0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybWF0KHJlc3VsdHMsIHRoaXMuX2RvY3MsIHtcbiAgICAgIGluY2x1ZGVNYXRjaGVzLFxuICAgICAgaW5jbHVkZVNjb3JlXG4gICAgfSlcbiAgfVxuXG4gIF9zZWFyY2hTdHJpbmdMaXN0KHF1ZXJ5KSB7XG4gICAgY29uc3Qgc2VhcmNoZXIgPSBjcmVhdGVTZWFyY2hlcihxdWVyeSwgdGhpcy5vcHRpb25zKTtcbiAgICBjb25zdCB7IHJlY29yZHMgfSA9IHRoaXMuX215SW5kZXg7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIGV2ZXJ5IHN0cmluZyBpbiB0aGUgaW5kZXhcbiAgICByZWNvcmRzLmZvckVhY2goKHsgdjogdGV4dCwgaTogaWR4LCBuOiBub3JtIH0pID0+IHtcbiAgICAgIGlmICghaXNEZWZpbmVkKHRleHQpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IGlzTWF0Y2gsIHNjb3JlLCBpbmRpY2VzIH0gPSBzZWFyY2hlci5zZWFyY2hJbih0ZXh0KTtcblxuICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgICBpdGVtOiB0ZXh0LFxuICAgICAgICAgIGlkeCxcbiAgICAgICAgICBtYXRjaGVzOiBbeyBzY29yZSwgdmFsdWU6IHRleHQsIG5vcm0sIGluZGljZXMgfV1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG5cbiAgX3NlYXJjaExvZ2ljYWwocXVlcnkpIHtcblxuICAgIGNvbnN0IGV4cHJlc3Npb24gPSBwYXJzZShxdWVyeSwgdGhpcy5vcHRpb25zKTtcblxuICAgIGNvbnN0IGV2YWx1YXRlID0gKG5vZGUsIGl0ZW0sIGlkeCkgPT4ge1xuICAgICAgaWYgKCFub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgIGNvbnN0IHsga2V5SWQsIHNlYXJjaGVyIH0gPSBub2RlO1xuXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0aGlzLl9maW5kTWF0Y2hlcyh7XG4gICAgICAgICAga2V5OiB0aGlzLl9rZXlTdG9yZS5nZXQoa2V5SWQpLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLl9teUluZGV4LmdldFZhbHVlRm9ySXRlbUF0S2V5SWQoaXRlbSwga2V5SWQpLFxuICAgICAgICAgIHNlYXJjaGVyXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWR4LFxuICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICBtYXRjaGVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtdXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgY2hpbGQgPSBub2RlLmNoaWxkcmVuW2ldO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBldmFsdWF0ZShjaGlsZCwgaXRlbSwgaWR4KTtcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICByZXMucHVzaCguLi5yZXN1bHQpO1xuICAgICAgICB9IGVsc2UgaWYgKG5vZGUub3BlcmF0b3IgPT09IExvZ2ljYWxPcGVyYXRvci5BTkQpIHtcbiAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc1xuICAgIH07XG5cbiAgICBjb25zdCByZWNvcmRzID0gdGhpcy5fbXlJbmRleC5yZWNvcmRzO1xuICAgIGNvbnN0IHJlc3VsdE1hcCA9IHt9O1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcblxuICAgIHJlY29yZHMuZm9yRWFjaCgoeyAkOiBpdGVtLCBpOiBpZHggfSkgPT4ge1xuICAgICAgaWYgKGlzRGVmaW5lZChpdGVtKSkge1xuICAgICAgICBsZXQgZXhwUmVzdWx0cyA9IGV2YWx1YXRlKGV4cHJlc3Npb24sIGl0ZW0sIGlkeCk7XG5cbiAgICAgICAgaWYgKGV4cFJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICAgICAgLy8gRGVkdXBlIHdoZW4gYWRkaW5nXG4gICAgICAgICAgaWYgKCFyZXN1bHRNYXBbaWR4XSkge1xuICAgICAgICAgICAgcmVzdWx0TWFwW2lkeF0gPSB7IGlkeCwgaXRlbSwgbWF0Y2hlczogW10gfTtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHRNYXBbaWR4XSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGV4cFJlc3VsdHMuZm9yRWFjaCgoeyBtYXRjaGVzIH0pID0+IHtcbiAgICAgICAgICAgIHJlc3VsdE1hcFtpZHhdLm1hdGNoZXMucHVzaCguLi5tYXRjaGVzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfVxuXG4gIF9zZWFyY2hPYmplY3RMaXN0KHF1ZXJ5KSB7XG4gICAgY29uc3Qgc2VhcmNoZXIgPSBjcmVhdGVTZWFyY2hlcihxdWVyeSwgdGhpcy5vcHRpb25zKTtcbiAgICBjb25zdCB7IGtleXMsIHJlY29yZHMgfSA9IHRoaXMuX215SW5kZXg7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuXG4gICAgLy8gTGlzdCBpcyBBcnJheTxPYmplY3Q+XG4gICAgcmVjb3Jkcy5mb3JFYWNoKCh7ICQ6IGl0ZW0sIGk6IGlkeCB9KSA9PiB7XG4gICAgICBpZiAoIWlzRGVmaW5lZChpdGVtKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGV0IG1hdGNoZXMgPSBbXTtcblxuICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV2ZXJ5IGtleSAoaS5lLCBwYXRoKSwgYW5kIGZldGNoIHRoZSB2YWx1ZSBhdCB0aGF0IGtleVxuICAgICAga2V5cy5mb3JFYWNoKChrZXksIGtleUluZGV4KSA9PiB7XG4gICAgICAgIG1hdGNoZXMucHVzaChcbiAgICAgICAgICAuLi50aGlzLl9maW5kTWF0Y2hlcyh7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICB2YWx1ZTogaXRlbVtrZXlJbmRleF0sXG4gICAgICAgICAgICBzZWFyY2hlclxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgaWR4LFxuICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgbWF0Y2hlc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHRzXG4gIH1cbiAgX2ZpbmRNYXRjaGVzKHsga2V5LCB2YWx1ZSwgc2VhcmNoZXIgfSkge1xuICAgIGlmICghaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgbGV0IG1hdGNoZXMgPSBbXTtcblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoeyB2OiB0ZXh0LCBpOiBpZHgsIG46IG5vcm0gfSkgPT4ge1xuICAgICAgICBpZiAoIWlzRGVmaW5lZCh0ZXh0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBpc01hdGNoLCBzY29yZSwgaW5kaWNlcyB9ID0gc2VhcmNoZXIuc2VhcmNoSW4odGV4dCk7XG5cbiAgICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgICBtYXRjaGVzLnB1c2goe1xuICAgICAgICAgICAgc2NvcmUsXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICB2YWx1ZTogdGV4dCxcbiAgICAgICAgICAgIGlkeCxcbiAgICAgICAgICAgIG5vcm0sXG4gICAgICAgICAgICBpbmRpY2VzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7IHY6IHRleHQsIG46IG5vcm0gfSA9IHZhbHVlO1xuXG4gICAgICBjb25zdCB7IGlzTWF0Y2gsIHNjb3JlLCBpbmRpY2VzIH0gPSBzZWFyY2hlci5zZWFyY2hJbih0ZXh0KTtcblxuICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgbWF0Y2hlcy5wdXNoKHsgc2NvcmUsIGtleSwgdmFsdWU6IHRleHQsIG5vcm0sIGluZGljZXMgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXNcbiAgfVxufVxuXG5GdXNlLnZlcnNpb24gPSAnNi42LjInO1xuRnVzZS5jcmVhdGVJbmRleCA9IGNyZWF0ZUluZGV4O1xuRnVzZS5wYXJzZUluZGV4ID0gcGFyc2VJbmRleDtcbkZ1c2UuY29uZmlnID0gQ29uZmlnO1xuXG57XG4gIEZ1c2UucGFyc2VRdWVyeSA9IHBhcnNlO1xufVxuXG57XG4gIHJlZ2lzdGVyKEV4dGVuZGVkU2VhcmNoKTtcbn1cblxuXG5cblxuLyoqKi8gfSksXG5cbi8qKiovIDc5MTpcbi8qKiovIChmdW5jdGlvbihfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyBFU00gQ09NUEFUIEZMQUdcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcblxuLy8gRVhQT1JUU1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIHtcbiAgXCJfX0RPX05PVF9VU0VfX0FjdGlvblR5cGVzXCI6IGZ1bmN0aW9uKCkgeyByZXR1cm4gLyogYmluZGluZyAqLyBBY3Rpb25UeXBlczsgfSxcbiAgXCJhcHBseU1pZGRsZXdhcmVcIjogZnVuY3Rpb24oKSB7IHJldHVybiAvKiBiaW5kaW5nICovIGFwcGx5TWlkZGxld2FyZTsgfSxcbiAgXCJiaW5kQWN0aW9uQ3JlYXRvcnNcIjogZnVuY3Rpb24oKSB7IHJldHVybiAvKiBiaW5kaW5nICovIGJpbmRBY3Rpb25DcmVhdG9yczsgfSxcbiAgXCJjb21iaW5lUmVkdWNlcnNcIjogZnVuY3Rpb24oKSB7IHJldHVybiAvKiBiaW5kaW5nICovIGNvbWJpbmVSZWR1Y2VyczsgfSxcbiAgXCJjb21wb3NlXCI6IGZ1bmN0aW9uKCkgeyByZXR1cm4gLyogYmluZGluZyAqLyBjb21wb3NlOyB9LFxuICBcImNyZWF0ZVN0b3JlXCI6IGZ1bmN0aW9uKCkgeyByZXR1cm4gLyogYmluZGluZyAqLyBjcmVhdGVTdG9yZTsgfSxcbiAgXCJsZWdhY3lfY3JlYXRlU3RvcmVcIjogZnVuY3Rpb24oKSB7IHJldHVybiAvKiBiaW5kaW5nICovIGxlZ2FjeV9jcmVhdGVTdG9yZTsgfVxufSk7XG5cbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanNcbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9QcmltaXRpdmUuanNcblxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7XG4gIGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0O1xuICB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gIGlmIChwcmltICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTtcbiAgICBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTtcbn1cbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1Byb3BlcnR5S2V5LmpzXG5cblxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7XG4gIHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xufVxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzXG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyLmpzXG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuICByZXR1cm4ga2V5cztcbn1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvcmVkdXguanNcblxuXG4vKipcbiAqIEFkYXB0ZWQgZnJvbSBSZWFjdDogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvbWFzdGVyL3BhY2thZ2VzL3NoYXJlZC9mb3JtYXRQcm9kRXJyb3JNZXNzYWdlLmpzXG4gKlxuICogRG8gbm90IHJlcXVpcmUgdGhpcyBtb2R1bGUgZGlyZWN0bHkhIFVzZSBub3JtYWwgdGhyb3cgZXJyb3IgY2FsbHMuIFRoZXNlIG1lc3NhZ2VzIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBlcnJvciBjb2Rlc1xuICogZHVyaW5nIGJ1aWxkLlxuICogQHBhcmFtIHtudW1iZXJ9IGNvZGVcbiAqL1xuZnVuY3Rpb24gZm9ybWF0UHJvZEVycm9yTWVzc2FnZShjb2RlKSB7XG4gIHJldHVybiBcIk1pbmlmaWVkIFJlZHV4IGVycm9yICNcIiArIGNvZGUgKyBcIjsgdmlzaXQgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvRXJyb3JzP2NvZGU9XCIgKyBjb2RlICsgXCIgZm9yIHRoZSBmdWxsIG1lc3NhZ2Ugb3IgXCIgKyAndXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50IGZvciBmdWxsIGVycm9ycy4gJztcbn1cblxuLy8gSW5saW5lZCB2ZXJzaW9uIG9mIHRoZSBgc3ltYm9sLW9ic2VydmFibGVgIHBvbHlmaWxsXG52YXIgJCRvYnNlcnZhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLm9ic2VydmFibGUgfHwgJ0BAb2JzZXJ2YWJsZSc7XG59KSgpO1xuXG4vKipcbiAqIFRoZXNlIGFyZSBwcml2YXRlIGFjdGlvbiB0eXBlcyByZXNlcnZlZCBieSBSZWR1eC5cbiAqIEZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB5b3UgbXVzdCByZXR1cm4gdGhlIGN1cnJlbnQgc3RhdGUuXG4gKiBJZiB0aGUgY3VycmVudCBzdGF0ZSBpcyB1bmRlZmluZWQsIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS5cbiAqIERvIG5vdCByZWZlcmVuY2UgdGhlc2UgYWN0aW9uIHR5cGVzIGRpcmVjdGx5IGluIHlvdXIgY29kZS5cbiAqL1xudmFyIHJhbmRvbVN0cmluZyA9IGZ1bmN0aW9uIHJhbmRvbVN0cmluZygpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KS5zcGxpdCgnJykuam9pbignLicpO1xufTtcblxudmFyIEFjdGlvblR5cGVzID0ge1xuICBJTklUOiBcIkBAcmVkdXgvSU5JVFwiICsgcmFuZG9tU3RyaW5nKCksXG4gIFJFUExBQ0U6IFwiQEByZWR1eC9SRVBMQUNFXCIgKyByYW5kb21TdHJpbmcoKSxcbiAgUFJPQkVfVU5LTk9XTl9BQ1RJT046IGZ1bmN0aW9uIFBST0JFX1VOS05PV05fQUNUSU9OKCkge1xuICAgIHJldHVybiBcIkBAcmVkdXgvUFJPQkVfVU5LTk9XTl9BQ1RJT05cIiArIHJhbmRvbVN0cmluZygpO1xuICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7YW55fSBvYmogVGhlIG9iamVjdCB0byBpbnNwZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIGFyZ3VtZW50IGFwcGVhcnMgdG8gYmUgYSBwbGFpbiBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgdmFyIHByb3RvID0gb2JqO1xuXG4gIHdoaWxlIChPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pICE9PSBudWxsKSB7XG4gICAgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopID09PSBwcm90bztcbn1cblxuLy8gSW5saW5lZCAvIHNob3J0ZW5lZCB2ZXJzaW9uIG9mIGBraW5kT2ZgIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQva2luZC1vZlxuZnVuY3Rpb24gbWluaUtpbmRPZih2YWwpIHtcbiAgaWYgKHZhbCA9PT0gdm9pZCAwKSByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gIGlmICh2YWwgPT09IG51bGwpIHJldHVybiAnbnVsbCc7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgY2FzZSAnc3ltYm9sJzpcbiAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICB7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfVxuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkgcmV0dXJuICdhcnJheSc7XG4gIGlmIChpc0RhdGUodmFsKSkgcmV0dXJuICdkYXRlJztcbiAgaWYgKGlzRXJyb3IodmFsKSkgcmV0dXJuICdlcnJvcic7XG4gIHZhciBjb25zdHJ1Y3Rvck5hbWUgPSBjdG9yTmFtZSh2YWwpO1xuXG4gIHN3aXRjaCAoY29uc3RydWN0b3JOYW1lKSB7XG4gICAgY2FzZSAnU3ltYm9sJzpcbiAgICBjYXNlICdQcm9taXNlJzpcbiAgICBjYXNlICdXZWFrTWFwJzpcbiAgICBjYXNlICdXZWFrU2V0JzpcbiAgICBjYXNlICdNYXAnOlxuICAgIGNhc2UgJ1NldCc6XG4gICAgICByZXR1cm4gY29uc3RydWN0b3JOYW1lO1xuICB9IC8vIG90aGVyXG5cblxuICByZXR1cm4gdHlwZS5zbGljZSg4LCAtMSkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMvZywgJycpO1xufVxuXG5mdW5jdGlvbiBjdG9yTmFtZSh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwuY29uc3RydWN0b3IgPT09ICdmdW5jdGlvbicgPyB2YWwuY29uc3RydWN0b3IubmFtZSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzRXJyb3IodmFsKSB7XG4gIHJldHVybiB2YWwgaW5zdGFuY2VvZiBFcnJvciB8fCB0eXBlb2YgdmFsLm1lc3NhZ2UgPT09ICdzdHJpbmcnICYmIHZhbC5jb25zdHJ1Y3RvciAmJiB0eXBlb2YgdmFsLmNvbnN0cnVjdG9yLnN0YWNrVHJhY2VMaW1pdCA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIERhdGUpIHJldHVybiB0cnVlO1xuICByZXR1cm4gdHlwZW9mIHZhbC50b0RhdGVTdHJpbmcgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbC5nZXREYXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWwuc2V0RGF0ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24ga2luZE9mKHZhbCkge1xuICB2YXIgdHlwZU9mVmFsID0gdHlwZW9mIHZhbDtcblxuICBpZiAoZmFsc2UpIHt9XG5cbiAgcmV0dXJuIHR5cGVPZlZhbDtcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICpcbiAqICoqV2UgcmVjb21tZW5kIHVzaW5nIHRoZSBgY29uZmlndXJlU3RvcmVgIG1ldGhvZFxuICogb2YgdGhlIGBAcmVkdXhqcy90b29sa2l0YCBwYWNrYWdlKiosIHdoaWNoIHJlcGxhY2VzIGBjcmVhdGVTdG9yZWAuXG4gKlxuICogUmVkdXggVG9vbGtpdCBpcyBvdXIgcmVjb21tZW5kZWQgYXBwcm9hY2ggZm9yIHdyaXRpbmcgUmVkdXggbG9naWMgdG9kYXksXG4gKiBpbmNsdWRpbmcgc3RvcmUgc2V0dXAsIHJlZHVjZXJzLCBkYXRhIGZldGNoaW5nLCBhbmQgbW9yZS5cbiAqXG4gKiAqKkZvciBtb3JlIGRldGFpbHMsIHBsZWFzZSByZWFkIHRoaXMgUmVkdXggZG9jcyBwYWdlOioqXG4gKiAqKmh0dHBzOi8vcmVkdXguanMub3JnL2ludHJvZHVjdGlvbi93aHktcnRrLWlzLXJlZHV4LXRvZGF5KipcbiAqXG4gKiBgY29uZmlndXJlU3RvcmVgIGZyb20gUmVkdXggVG9vbGtpdCBpcyBhbiBpbXByb3ZlZCB2ZXJzaW9uIG9mIGBjcmVhdGVTdG9yZWAgdGhhdFxuICogc2ltcGxpZmllcyBzZXR1cCBhbmQgaGVscHMgYXZvaWQgY29tbW9uIGJ1Z3MuXG4gKlxuICogWW91IHNob3VsZCBub3QgYmUgdXNpbmcgdGhlIGByZWR1eGAgY29yZSBwYWNrYWdlIGJ5IGl0c2VsZiB0b2RheSwgZXhjZXB0IGZvciBsZWFybmluZyBwdXJwb3Nlcy5cbiAqIFRoZSBgY3JlYXRlU3RvcmVgIG1ldGhvZCBmcm9tIHRoZSBjb3JlIGByZWR1eGAgcGFja2FnZSB3aWxsIG5vdCBiZSByZW1vdmVkLCBidXQgd2UgZW5jb3VyYWdlXG4gKiBhbGwgdXNlcnMgdG8gbWlncmF0ZSB0byB1c2luZyBSZWR1eCBUb29sa2l0IGZvciBhbGwgUmVkdXggY29kZS5cbiAqXG4gKiBJZiB5b3Ugd2FudCB0byB1c2UgYGNyZWF0ZVN0b3JlYCB3aXRob3V0IHRoaXMgdmlzdWFsIGRlcHJlY2F0aW9uIHdhcm5pbmcsIHVzZVxuICogdGhlIGBsZWdhY3lfY3JlYXRlU3RvcmVgIGltcG9ydCBpbnN0ZWFkOlxuICpcbiAqIGBpbXBvcnQgeyBsZWdhY3lfY3JlYXRlU3RvcmUgYXMgY3JlYXRlU3RvcmV9IGZyb20gJ3JlZHV4J2BcbiAqXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKSB7XG4gIHZhciBfcmVmMjtcblxuICBpZiAodHlwZW9mIHByZWxvYWRlZFN0YXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgZW5oYW5jZXIgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGFyZ3VtZW50c1szXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvciggdHJ1ZSA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMCkgOiAwKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcHJlbG9hZGVkU3RhdGUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGVuaGFuY2VyID09PSAndW5kZWZpbmVkJykge1xuICAgIGVuaGFuY2VyID0gcHJlbG9hZGVkU3RhdGU7XG4gICAgcHJlbG9hZGVkU3RhdGUgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvciggdHJ1ZSA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMSkgOiAwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5oYW5jZXIoY3JlYXRlU3RvcmUpKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvciggdHJ1ZSA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMikgOiAwKTtcbiAgfVxuXG4gIHZhciBjdXJyZW50UmVkdWNlciA9IHJlZHVjZXI7XG4gIHZhciBjdXJyZW50U3RhdGUgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgdmFyIGN1cnJlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzO1xuICB2YXIgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAvKipcbiAgICogVGhpcyBtYWtlcyBhIHNoYWxsb3cgY29weSBvZiBjdXJyZW50TGlzdGVuZXJzIHNvIHdlIGNhbiB1c2VcbiAgICogbmV4dExpc3RlbmVycyBhcyBhIHRlbXBvcmFyeSBsaXN0IHdoaWxlIGRpc3BhdGNoaW5nLlxuICAgKlxuICAgKiBUaGlzIHByZXZlbnRzIGFueSBidWdzIGFyb3VuZCBjb25zdW1lcnMgY2FsbGluZ1xuICAgKiBzdWJzY3JpYmUvdW5zdWJzY3JpYmUgaW4gdGhlIG1pZGRsZSBvZiBhIGRpc3BhdGNoLlxuICAgKi9cblxuICBmdW5jdGlvbiBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCkge1xuICAgIGlmIChuZXh0TGlzdGVuZXJzID09PSBjdXJyZW50TGlzdGVuZXJzKSB7XG4gICAgICBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycy5zbGljZSgpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmVhZHMgdGhlIHN0YXRlIHRyZWUgbWFuYWdlZCBieSB0aGUgc3RvcmUuXG4gICAqXG4gICAqIEByZXR1cm5zIHthbnl9IFRoZSBjdXJyZW50IHN0YXRlIHRyZWUgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAgICovXG5cblxuICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCB0cnVlID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgzKSA6IDApO1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50U3RhdGU7XG4gIH1cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGFuZ2UgbGlzdGVuZXIuIEl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLFxuICAgKiBhbmQgc29tZSBwYXJ0IG9mIHRoZSBzdGF0ZSB0cmVlIG1heSBwb3RlbnRpYWxseSBoYXZlIGNoYW5nZWQuIFlvdSBtYXkgdGhlblxuICAgKiBjYWxsIGBnZXRTdGF0ZSgpYCB0byByZWFkIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgaW5zaWRlIHRoZSBjYWxsYmFjay5cbiAgICpcbiAgICogWW91IG1heSBjYWxsIGBkaXNwYXRjaCgpYCBmcm9tIGEgY2hhbmdlIGxpc3RlbmVyLCB3aXRoIHRoZSBmb2xsb3dpbmdcbiAgICogY2F2ZWF0czpcbiAgICpcbiAgICogMS4gVGhlIHN1YnNjcmlwdGlvbnMgYXJlIHNuYXBzaG90dGVkIGp1c3QgYmVmb3JlIGV2ZXJ5IGBkaXNwYXRjaCgpYCBjYWxsLlxuICAgKiBJZiB5b3Ugc3Vic2NyaWJlIG9yIHVuc3Vic2NyaWJlIHdoaWxlIHRoZSBsaXN0ZW5lcnMgYXJlIGJlaW5nIGludm9rZWQsIHRoaXNcbiAgICogd2lsbCBub3QgaGF2ZSBhbnkgZWZmZWN0IG9uIHRoZSBgZGlzcGF0Y2goKWAgdGhhdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3MuXG4gICAqIEhvd2V2ZXIsIHRoZSBuZXh0IGBkaXNwYXRjaCgpYCBjYWxsLCB3aGV0aGVyIG5lc3RlZCBvciBub3QsIHdpbGwgdXNlIGEgbW9yZVxuICAgKiByZWNlbnQgc25hcHNob3Qgb2YgdGhlIHN1YnNjcmlwdGlvbiBsaXN0LlxuICAgKlxuICAgKiAyLiBUaGUgbGlzdGVuZXIgc2hvdWxkIG5vdCBleHBlY3QgdG8gc2VlIGFsbCBzdGF0ZSBjaGFuZ2VzLCBhcyB0aGUgc3RhdGVcbiAgICogbWlnaHQgaGF2ZSBiZWVuIHVwZGF0ZWQgbXVsdGlwbGUgdGltZXMgZHVyaW5nIGEgbmVzdGVkIGBkaXNwYXRjaCgpYCBiZWZvcmVcbiAgICogdGhlIGxpc3RlbmVyIGlzIGNhbGxlZC4gSXQgaXMsIGhvd2V2ZXIsIGd1YXJhbnRlZWQgdGhhdCBhbGwgc3Vic2NyaWJlcnNcbiAgICogcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGBkaXNwYXRjaCgpYCBzdGFydGVkIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGxhdGVzdFxuICAgKiBzdGF0ZSBieSB0aGUgdGltZSBpdCBleGl0cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgQSBjYWxsYmFjayB0byBiZSBpbnZva2VkIG9uIGV2ZXJ5IGRpc3BhdGNoLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoaXMgY2hhbmdlIGxpc3RlbmVyLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvciggdHJ1ZSA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoNCkgOiAwKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCB0cnVlID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSg1KSA6IDApO1xuICAgIH1cblxuICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICBuZXh0TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIGlmICghaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCB0cnVlID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSg2KSA6IDApO1xuICAgICAgfVxuXG4gICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICAgIHZhciBpbmRleCA9IG5leHRMaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICBuZXh0TGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICBjdXJyZW50TGlzdGVuZXJzID0gbnVsbDtcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBEaXNwYXRjaGVzIGFuIGFjdGlvbi4gSXQgaXMgdGhlIG9ubHkgd2F5IHRvIHRyaWdnZXIgYSBzdGF0ZSBjaGFuZ2UuXG4gICAqXG4gICAqIFRoZSBgcmVkdWNlcmAgZnVuY3Rpb24sIHVzZWQgdG8gY3JlYXRlIHRoZSBzdG9yZSwgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGVcbiAgICogY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgZ2l2ZW4gYGFjdGlvbmAuIEl0cyByZXR1cm4gdmFsdWUgd2lsbFxuICAgKiBiZSBjb25zaWRlcmVkIHRoZSAqKm5leHQqKiBzdGF0ZSBvZiB0aGUgdHJlZSwgYW5kIHRoZSBjaGFuZ2UgbGlzdGVuZXJzXG4gICAqIHdpbGwgYmUgbm90aWZpZWQuXG4gICAqXG4gICAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9ubHkgc3VwcG9ydHMgcGxhaW4gb2JqZWN0IGFjdGlvbnMuIElmIHlvdSB3YW50IHRvXG4gICAqIGRpc3BhdGNoIGEgUHJvbWlzZSwgYW4gT2JzZXJ2YWJsZSwgYSB0aHVuaywgb3Igc29tZXRoaW5nIGVsc2UsIHlvdSBuZWVkIHRvXG4gICAqIHdyYXAgeW91ciBzdG9yZSBjcmVhdGluZyBmdW5jdGlvbiBpbnRvIHRoZSBjb3JyZXNwb25kaW5nIG1pZGRsZXdhcmUuIEZvclxuICAgKiBleGFtcGxlLCBzZWUgdGhlIGRvY3VtZW50YXRpb24gZm9yIHRoZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UuIEV2ZW4gdGhlXG4gICAqIG1pZGRsZXdhcmUgd2lsbCBldmVudHVhbGx5IGRpc3BhdGNoIHBsYWluIG9iamVjdCBhY3Rpb25zIHVzaW5nIHRoaXMgbWV0aG9kLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIEEgcGxhaW4gb2JqZWN0IHJlcHJlc2VudGluZyDigJx3aGF0IGNoYW5nZWTigJ0uIEl0IGlzXG4gICAqIGEgZ29vZCBpZGVhIHRvIGtlZXAgYWN0aW9ucyBzZXJpYWxpemFibGUgc28geW91IGNhbiByZWNvcmQgYW5kIHJlcGxheSB1c2VyXG4gICAqIHNlc3Npb25zLCBvciB1c2UgdGhlIHRpbWUgdHJhdmVsbGluZyBgcmVkdXgtZGV2dG9vbHNgLiBBbiBhY3Rpb24gbXVzdCBoYXZlXG4gICAqIGEgYHR5cGVgIHByb3BlcnR5IHdoaWNoIG1heSBub3QgYmUgYHVuZGVmaW5lZGAuIEl0IGlzIGEgZ29vZCBpZGVhIHRvIHVzZVxuICAgKiBzdHJpbmcgY29uc3RhbnRzIGZvciBhY3Rpb24gdHlwZXMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IEZvciBjb252ZW5pZW5jZSwgdGhlIHNhbWUgYWN0aW9uIG9iamVjdCB5b3UgZGlzcGF0Y2hlZC5cbiAgICpcbiAgICogTm90ZSB0aGF0LCBpZiB5b3UgdXNlIGEgY3VzdG9tIG1pZGRsZXdhcmUsIGl0IG1heSB3cmFwIGBkaXNwYXRjaCgpYCB0b1xuICAgKiByZXR1cm4gc29tZXRoaW5nIGVsc2UgKGZvciBleGFtcGxlLCBhIFByb21pc2UgeW91IGNhbiBhd2FpdCkuXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KGFjdGlvbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvciggdHJ1ZSA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoNykgOiAwKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGFjdGlvbi50eXBlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCB0cnVlID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSg4KSA6IDApO1xuICAgIH1cblxuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoIHRydWUgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDkpIDogMCk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSB0cnVlO1xuICAgICAgY3VycmVudFN0YXRlID0gY3VycmVudFJlZHVjZXIoY3VycmVudFN0YXRlLCBhY3Rpb24pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGxpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMgPSBuZXh0TGlzdGVuZXJzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGlvbjtcbiAgfVxuICAvKipcbiAgICogUmVwbGFjZXMgdGhlIHJlZHVjZXIgY3VycmVudGx5IHVzZWQgYnkgdGhlIHN0b3JlIHRvIGNhbGN1bGF0ZSB0aGUgc3RhdGUuXG4gICAqXG4gICAqIFlvdSBtaWdodCBuZWVkIHRoaXMgaWYgeW91ciBhcHAgaW1wbGVtZW50cyBjb2RlIHNwbGl0dGluZyBhbmQgeW91IHdhbnQgdG9cbiAgICogbG9hZCBzb21lIG9mIHRoZSByZWR1Y2VycyBkeW5hbWljYWxseS4gWW91IG1pZ2h0IGFsc28gbmVlZCB0aGlzIGlmIHlvdVxuICAgKiBpbXBsZW1lbnQgYSBob3QgcmVsb2FkaW5nIG1lY2hhbmlzbSBmb3IgUmVkdXguXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHRSZWR1Y2VyIFRoZSByZWR1Y2VyIGZvciB0aGUgc3RvcmUgdG8gdXNlIGluc3RlYWQuXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHJlcGxhY2VSZWR1Y2VyKG5leHRSZWR1Y2VyKSB7XG4gICAgaWYgKHR5cGVvZiBuZXh0UmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCB0cnVlID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxMCkgOiAwKTtcbiAgICB9XG5cbiAgICBjdXJyZW50UmVkdWNlciA9IG5leHRSZWR1Y2VyOyAvLyBUaGlzIGFjdGlvbiBoYXMgYSBzaW1pbGlhciBlZmZlY3QgdG8gQWN0aW9uVHlwZXMuSU5JVC5cbiAgICAvLyBBbnkgcmVkdWNlcnMgdGhhdCBleGlzdGVkIGluIGJvdGggdGhlIG5ldyBhbmQgb2xkIHJvb3RSZWR1Y2VyXG4gICAgLy8gd2lsbCByZWNlaXZlIHRoZSBwcmV2aW91cyBzdGF0ZS4gVGhpcyBlZmZlY3RpdmVseSBwb3B1bGF0ZXNcbiAgICAvLyB0aGUgbmV3IHN0YXRlIHRyZWUgd2l0aCBhbnkgcmVsZXZhbnQgZGF0YSBmcm9tIHRoZSBvbGQgb25lLlxuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQWN0aW9uVHlwZXMuUkVQTEFDRVxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBJbnRlcm9wZXJhYmlsaXR5IHBvaW50IGZvciBvYnNlcnZhYmxlL3JlYWN0aXZlIGxpYnJhcmllcy5cbiAgICogQHJldHVybnMge29ic2VydmFibGV9IEEgbWluaW1hbCBvYnNlcnZhYmxlIG9mIHN0YXRlIGNoYW5nZXMuXG4gICAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgdGhlIG9ic2VydmFibGUgcHJvcG9zYWw6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9ic2VydmFibGVcbiAgICovXG5cblxuICBmdW5jdGlvbiBvYnNlcnZhYmxlKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIG91dGVyU3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgIHJldHVybiBfcmVmID0ge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbWluaW1hbCBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvbiBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JzZXJ2ZXIgQW55IG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIGFzIGFuIG9ic2VydmVyLlxuICAgICAgICogVGhlIG9ic2VydmVyIG9iamVjdCBzaG91bGQgaGF2ZSBhIGBuZXh0YCBtZXRob2QuXG4gICAgICAgKiBAcmV0dXJucyB7c3Vic2NyaXB0aW9ufSBBbiBvYmplY3Qgd2l0aCBhbiBgdW5zdWJzY3JpYmVgIG1ldGhvZCB0aGF0IGNhblxuICAgICAgICogYmUgdXNlZCB0byB1bnN1YnNjcmliZSB0aGUgb2JzZXJ2YWJsZSBmcm9tIHRoZSBzdG9yZSwgYW5kIHByZXZlbnQgZnVydGhlclxuICAgICAgICogZW1pc3Npb24gb2YgdmFsdWVzIGZyb20gdGhlIG9ic2VydmFibGUuXG4gICAgICAgKi9cbiAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JzZXJ2ZXIgIT09ICdvYmplY3QnIHx8IG9ic2VydmVyID09PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCB0cnVlID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxMSkgOiAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9ic2VydmVTdGF0ZSgpIHtcbiAgICAgICAgICBpZiAob2JzZXJ2ZXIubmV4dCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChnZXRTdGF0ZSgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvYnNlcnZlU3RhdGUoKTtcbiAgICAgICAgdmFyIHVuc3Vic2NyaWJlID0gb3V0ZXJTdWJzY3JpYmUob2JzZXJ2ZVN0YXRlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1bnN1YnNjcmliZTogdW5zdWJzY3JpYmVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LCBfcmVmWyQkb2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LCBfcmVmO1xuICB9IC8vIFdoZW4gYSBzdG9yZSBpcyBjcmVhdGVkLCBhbiBcIklOSVRcIiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCBzbyB0aGF0IGV2ZXJ5XG4gIC8vIHJlZHVjZXIgcmV0dXJucyB0aGVpciBpbml0aWFsIHN0YXRlLiBUaGlzIGVmZmVjdGl2ZWx5IHBvcHVsYXRlc1xuICAvLyB0aGUgaW5pdGlhbCBzdGF0ZSB0cmVlLlxuXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLklOSVRcbiAgfSk7XG4gIHJldHVybiBfcmVmMiA9IHtcbiAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgZ2V0U3RhdGU6IGdldFN0YXRlLFxuICAgIHJlcGxhY2VSZWR1Y2VyOiByZXBsYWNlUmVkdWNlclxuICB9LCBfcmVmMlskJG9ic2VydmFibGVdID0gb2JzZXJ2YWJsZSwgX3JlZjI7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBSZWR1eCBzdG9yZSB0aGF0IGhvbGRzIHRoZSBzdGF0ZSB0cmVlLlxuICpcbiAqICoqV2UgcmVjb21tZW5kIHVzaW5nIGBjb25maWd1cmVTdG9yZWAgZnJvbSB0aGVcbiAqIGBAcmVkdXhqcy90b29sa2l0YCBwYWNrYWdlKiosIHdoaWNoIHJlcGxhY2VzIGBjcmVhdGVTdG9yZWA6XG4gKiAqKmh0dHBzOi8vcmVkdXguanMub3JnL2ludHJvZHVjdGlvbi93aHktcnRrLWlzLXJlZHV4LXRvZGF5KipcbiAqXG4gKiBUaGUgb25seSB3YXkgdG8gY2hhbmdlIHRoZSBkYXRhIGluIHRoZSBzdG9yZSBpcyB0byBjYWxsIGBkaXNwYXRjaCgpYCBvbiBpdC5cbiAqXG4gKiBUaGVyZSBzaG91bGQgb25seSBiZSBhIHNpbmdsZSBzdG9yZSBpbiB5b3VyIGFwcC4gVG8gc3BlY2lmeSBob3cgZGlmZmVyZW50XG4gKiBwYXJ0cyBvZiB0aGUgc3RhdGUgdHJlZSByZXNwb25kIHRvIGFjdGlvbnMsIHlvdSBtYXkgY29tYmluZSBzZXZlcmFsIHJlZHVjZXJzXG4gKiBpbnRvIGEgc2luZ2xlIHJlZHVjZXIgZnVuY3Rpb24gYnkgdXNpbmcgYGNvbWJpbmVSZWR1Y2Vyc2AuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVkdWNlciBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbmV4dCBzdGF0ZSB0cmVlLCBnaXZlblxuICogdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGFjdGlvbiB0byBoYW5kbGUuXG4gKlxuICogQHBhcmFtIHthbnl9IFtwcmVsb2FkZWRTdGF0ZV0gVGhlIGluaXRpYWwgc3RhdGUuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBoeWRyYXRlIHRoZSBzdGF0ZSBmcm9tIHRoZSBzZXJ2ZXIgaW4gdW5pdmVyc2FsIGFwcHMsIG9yIHRvIHJlc3RvcmUgYVxuICogcHJldmlvdXNseSBzZXJpYWxpemVkIHVzZXIgc2Vzc2lvbi5cbiAqIElmIHlvdSB1c2UgYGNvbWJpbmVSZWR1Y2Vyc2AgdG8gcHJvZHVjZSB0aGUgcm9vdCByZWR1Y2VyIGZ1bmN0aW9uLCB0aGlzIG11c3QgYmVcbiAqIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlIGFzIGBjb21iaW5lUmVkdWNlcnNgIGtleXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2VuaGFuY2VyXSBUaGUgc3RvcmUgZW5oYW5jZXIuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBlbmhhbmNlIHRoZSBzdG9yZSB3aXRoIHRoaXJkLXBhcnR5IGNhcGFiaWxpdGllcyBzdWNoIGFzIG1pZGRsZXdhcmUsXG4gKiB0aW1lIHRyYXZlbCwgcGVyc2lzdGVuY2UsIGV0Yy4gVGhlIG9ubHkgc3RvcmUgZW5oYW5jZXIgdGhhdCBzaGlwcyB3aXRoIFJlZHV4XG4gKiBpcyBgYXBwbHlNaWRkbGV3YXJlKClgLlxuICpcbiAqIEByZXR1cm5zIHtTdG9yZX0gQSBSZWR1eCBzdG9yZSB0aGF0IGxldHMgeW91IHJlYWQgdGhlIHN0YXRlLCBkaXNwYXRjaCBhY3Rpb25zXG4gKiBhbmQgc3Vic2NyaWJlIHRvIGNoYW5nZXMuXG4gKi9cblxudmFyIGxlZ2FjeV9jcmVhdGVTdG9yZSA9IGNyZWF0ZVN0b3JlO1xuXG4vKipcbiAqIFByaW50cyBhIHdhcm5pbmcgaW4gdGhlIGNvbnNvbGUgaWYgaXQgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSB3YXJuaW5nIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG5cblxuICB0cnkge1xuICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgaWYgeW91IGVuYWJsZVxuICAgIC8vIFwiYnJlYWsgb24gYWxsIGV4Y2VwdGlvbnNcIiBpbiB5b3VyIGNvbnNvbGUsXG4gICAgLy8gaXQgd291bGQgcGF1c2UgdGhlIGV4ZWN1dGlvbiBhdCB0aGlzIGxpbmUuXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9IGNhdGNoIChlKSB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWVtcHR5XG5cbn1cblxuZnVuY3Rpb24gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShpbnB1dFN0YXRlLCByZWR1Y2VycywgYWN0aW9uLCB1bmV4cGVjdGVkS2V5Q2FjaGUpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgYXJndW1lbnROYW1lID0gYWN0aW9uICYmIGFjdGlvbi50eXBlID09PSBBY3Rpb25UeXBlcy5JTklUID8gJ3ByZWxvYWRlZFN0YXRlIGFyZ3VtZW50IHBhc3NlZCB0byBjcmVhdGVTdG9yZScgOiAncHJldmlvdXMgc3RhdGUgcmVjZWl2ZWQgYnkgdGhlIHJlZHVjZXInO1xuXG4gIGlmIChyZWR1Y2VyS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJ1N0b3JlIGRvZXMgbm90IGhhdmUgYSB2YWxpZCByZWR1Y2VyLiBNYWtlIHN1cmUgdGhlIGFyZ3VtZW50IHBhc3NlZCAnICsgJ3RvIGNvbWJpbmVSZWR1Y2VycyBpcyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSByZWR1Y2Vycy4nO1xuICB9XG5cbiAgaWYgKCFpc1BsYWluT2JqZWN0KGlucHV0U3RhdGUpKSB7XG4gICAgcmV0dXJuIFwiVGhlIFwiICsgYXJndW1lbnROYW1lICsgXCIgaGFzIHVuZXhwZWN0ZWQgdHlwZSBvZiBcXFwiXCIgKyBraW5kT2YoaW5wdXRTdGF0ZSkgKyBcIlxcXCIuIEV4cGVjdGVkIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgXCIgKyAoXCJrZXlzOiBcXFwiXCIgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHZhciB1bmV4cGVjdGVkS2V5cyA9IE9iamVjdC5rZXlzKGlucHV0U3RhdGUpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuICFyZWR1Y2Vycy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF1bmV4cGVjdGVkS2V5Q2FjaGVba2V5XTtcbiAgfSk7XG4gIHVuZXhwZWN0ZWRLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHVuZXhwZWN0ZWRLZXlDYWNoZVtrZXldID0gdHJ1ZTtcbiAgfSk7XG4gIGlmIChhY3Rpb24gJiYgYWN0aW9uLnR5cGUgPT09IEFjdGlvblR5cGVzLlJFUExBQ0UpIHJldHVybjtcblxuICBpZiAodW5leHBlY3RlZEtleXMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBcIlVuZXhwZWN0ZWQgXCIgKyAodW5leHBlY3RlZEtleXMubGVuZ3RoID4gMSA/ICdrZXlzJyA6ICdrZXknKSArIFwiIFwiICsgKFwiXFxcIlwiICsgdW5leHBlY3RlZEtleXMuam9pbignXCIsIFwiJykgKyBcIlxcXCIgZm91bmQgaW4gXCIgKyBhcmd1bWVudE5hbWUgKyBcIi4gXCIpICsgXCJFeHBlY3RlZCB0byBmaW5kIG9uZSBvZiB0aGUga25vd24gcmVkdWNlciBrZXlzIGluc3RlYWQ6IFwiICsgKFwiXFxcIlwiICsgcmVkdWNlcktleXMuam9pbignXCIsIFwiJykgKyBcIlxcXCIuIFVuZXhwZWN0ZWQga2V5cyB3aWxsIGJlIGlnbm9yZWQuXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFJlZHVjZXJTaGFwZShyZWR1Y2Vycykge1xuICBPYmplY3Qua2V5cyhyZWR1Y2VycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHJlZHVjZXIgPSByZWR1Y2Vyc1trZXldO1xuICAgIHZhciBpbml0aWFsU3RhdGUgPSByZWR1Y2VyKHVuZGVmaW5lZCwge1xuICAgICAgdHlwZTogQWN0aW9uVHlwZXMuSU5JVFxuICAgIH0pO1xuXG4gICAgaWYgKHR5cGVvZiBpbml0aWFsU3RhdGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoIHRydWUgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDEyKSA6IDApO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVkdWNlcih1bmRlZmluZWQsIHtcbiAgICAgIHR5cGU6IEFjdGlvblR5cGVzLlBST0JFX1VOS05PV05fQUNUSU9OKClcbiAgICB9KSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvciggdHJ1ZSA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTMpIDogMCk7XG4gICAgfVxuICB9KTtcbn1cbi8qKlxuICogVHVybnMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgZGlmZmVyZW50IHJlZHVjZXIgZnVuY3Rpb25zLCBpbnRvIGEgc2luZ2xlXG4gKiByZWR1Y2VyIGZ1bmN0aW9uLiBJdCB3aWxsIGNhbGwgZXZlcnkgY2hpbGQgcmVkdWNlciwgYW5kIGdhdGhlciB0aGVpciByZXN1bHRzXG4gKiBpbnRvIGEgc2luZ2xlIHN0YXRlIG9iamVjdCwgd2hvc2Uga2V5cyBjb3JyZXNwb25kIHRvIHRoZSBrZXlzIG9mIHRoZSBwYXNzZWRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWR1Y2VycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGNvcnJlc3BvbmQgdG8gZGlmZmVyZW50XG4gKiByZWR1Y2VyIGZ1bmN0aW9ucyB0aGF0IG5lZWQgdG8gYmUgY29tYmluZWQgaW50byBvbmUuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluXG4gKiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhcyByZWR1Y2Vyc2Agc3ludGF4LiBUaGUgcmVkdWNlcnMgbWF5IG5ldmVyIHJldHVyblxuICogdW5kZWZpbmVkIGZvciBhbnkgYWN0aW9uLiBJbnN0ZWFkLCB0aGV5IHNob3VsZCByZXR1cm4gdGhlaXIgaW5pdGlhbCBzdGF0ZVxuICogaWYgdGhlIHN0YXRlIHBhc3NlZCB0byB0aGVtIHdhcyB1bmRlZmluZWQsIGFuZCB0aGUgY3VycmVudCBzdGF0ZSBmb3IgYW55XG4gKiB1bnJlY29nbml6ZWQgYWN0aW9uLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSByZWR1Y2VyIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBldmVyeSByZWR1Y2VyIGluc2lkZSB0aGVcbiAqIHBhc3NlZCBvYmplY3QsIGFuZCBidWlsZHMgYSBzdGF0ZSBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2Vycykge1xuICB2YXIgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIHZhciBmaW5hbFJlZHVjZXJzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWR1Y2VyS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSByZWR1Y2VyS2V5c1tpXTtcblxuICAgIGlmIChmYWxzZSkge31cblxuICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZmluYWxSZWR1Y2Vyc1trZXldID0gcmVkdWNlcnNba2V5XTtcbiAgICB9XG4gIH1cblxuICB2YXIgZmluYWxSZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKGZpbmFsUmVkdWNlcnMpOyAvLyBUaGlzIGlzIHVzZWQgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHdhcm4gYWJvdXQgdGhlIHNhbWVcbiAgLy8ga2V5cyBtdWx0aXBsZSB0aW1lcy5cblxuICB2YXIgdW5leHBlY3RlZEtleUNhY2hlO1xuXG4gIGlmIChmYWxzZSkge31cblxuICB2YXIgc2hhcGVBc3NlcnRpb25FcnJvcjtcblxuICB0cnkge1xuICAgIGFzc2VydFJlZHVjZXJTaGFwZShmaW5hbFJlZHVjZXJzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHNoYXBlQXNzZXJ0aW9uRXJyb3IgPSBlO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbWJpbmF0aW9uKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBpZiAoc3RhdGUgPT09IHZvaWQgMCkge1xuICAgICAgc3RhdGUgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoc2hhcGVBc3NlcnRpb25FcnJvcikge1xuICAgICAgdGhyb3cgc2hhcGVBc3NlcnRpb25FcnJvcjtcbiAgICB9XG5cbiAgICBpZiAoZmFsc2UpIHsgdmFyIHdhcm5pbmdNZXNzYWdlOyB9XG5cbiAgICB2YXIgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIHZhciBuZXh0U3RhdGUgPSB7fTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBmaW5hbFJlZHVjZXJLZXlzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9rZXkgPSBmaW5hbFJlZHVjZXJLZXlzW19pXTtcbiAgICAgIHZhciByZWR1Y2VyID0gZmluYWxSZWR1Y2Vyc1tfa2V5XTtcbiAgICAgIHZhciBwcmV2aW91c1N0YXRlRm9yS2V5ID0gc3RhdGVbX2tleV07XG4gICAgICB2YXIgbmV4dFN0YXRlRm9yS2V5ID0gcmVkdWNlcihwcmV2aW91c1N0YXRlRm9yS2V5LCBhY3Rpb24pO1xuXG4gICAgICBpZiAodHlwZW9mIG5leHRTdGF0ZUZvcktleSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIGFjdGlvblR5cGUgPSBhY3Rpb24gJiYgYWN0aW9uLnR5cGU7XG4gICAgICAgIHRocm93IG5ldyBFcnJvciggdHJ1ZSA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTQpIDogMCk7XG4gICAgICB9XG5cbiAgICAgIG5leHRTdGF0ZVtfa2V5XSA9IG5leHRTdGF0ZUZvcktleTtcbiAgICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IG5leHRTdGF0ZUZvcktleSAhPT0gcHJldmlvdXNTdGF0ZUZvcktleTtcbiAgICB9XG5cbiAgICBoYXNDaGFuZ2VkID0gaGFzQ2hhbmdlZCB8fCBmaW5hbFJlZHVjZXJLZXlzLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMoc3RhdGUpLmxlbmd0aDtcbiAgICByZXR1cm4gaGFzQ2hhbmdlZCA/IG5leHRTdGF0ZSA6IHN0YXRlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkaXNwYXRjaChhY3Rpb25DcmVhdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb24gY3JlYXRvcnMsIGludG8gYW4gb2JqZWN0IHdpdGggdGhlXG4gKiBzYW1lIGtleXMsIGJ1dCB3aXRoIGV2ZXJ5IGZ1bmN0aW9uIHdyYXBwZWQgaW50byBhIGBkaXNwYXRjaGAgY2FsbCBzbyB0aGV5XG4gKiBtYXkgYmUgaW52b2tlZCBkaXJlY3RseS4gVGhpcyBpcyBqdXN0IGEgY29udmVuaWVuY2UgbWV0aG9kLCBhcyB5b3UgY2FuIGNhbGxcbiAqIGBzdG9yZS5kaXNwYXRjaChNeUFjdGlvbkNyZWF0b3JzLmRvU29tZXRoaW5nKCkpYCB5b3Vyc2VsZiBqdXN0IGZpbmUuXG4gKlxuICogRm9yIGNvbnZlbmllbmNlLCB5b3UgY2FuIGFsc28gcGFzcyBhbiBhY3Rpb24gY3JlYXRvciBhcyB0aGUgZmlyc3QgYXJndW1lbnQsXG4gKiBhbmQgZ2V0IGEgZGlzcGF0Y2ggd3JhcHBlZCBmdW5jdGlvbiBpbiByZXR1cm4uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R9IGFjdGlvbkNyZWF0b3JzIEFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGFjdGlvblxuICogY3JlYXRvciBmdW5jdGlvbnMuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzYFxuICogc3ludGF4LiBZb3UgbWF5IGFsc28gcGFzcyBhIHNpbmdsZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNwYXRjaCBUaGUgYGRpc3BhdGNoYCBmdW5jdGlvbiBhdmFpbGFibGUgb24geW91ciBSZWR1eFxuICogc3RvcmUuXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufE9iamVjdH0gVGhlIG9iamVjdCBtaW1pY2tpbmcgdGhlIG9yaWdpbmFsIG9iamVjdCwgYnV0IHdpdGhcbiAqIGV2ZXJ5IGFjdGlvbiBjcmVhdG9yIHdyYXBwZWQgaW50byB0aGUgYGRpc3BhdGNoYCBjYWxsLiBJZiB5b3UgcGFzc2VkIGFcbiAqIGZ1bmN0aW9uIGFzIGBhY3Rpb25DcmVhdG9yc2AsIHRoZSByZXR1cm4gdmFsdWUgd2lsbCBhbHNvIGJlIGEgc2luZ2xlXG4gKiBmdW5jdGlvbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIHtcbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyAhPT0gJ29iamVjdCcgfHwgYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoIHRydWUgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDE2KSA6IDApO1xuICB9XG5cbiAgdmFyIGJvdW5kQWN0aW9uQ3JlYXRvcnMgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gYWN0aW9uQ3JlYXRvcnMpIHtcbiAgICB2YXIgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JzW2tleV07XG5cbiAgICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGJvdW5kQWN0aW9uQ3JlYXRvcnNba2V5XSA9IGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYm91bmRBY3Rpb25DcmVhdG9ycztcbn1cblxuLyoqXG4gKiBDb21wb3NlcyBzaW5nbGUtYXJndW1lbnQgZnVuY3Rpb25zIGZyb20gcmlnaHQgdG8gbGVmdC4gVGhlIHJpZ2h0bW9zdFxuICogZnVuY3Rpb24gY2FuIHRha2UgbXVsdGlwbGUgYXJndW1lbnRzIGFzIGl0IHByb3ZpZGVzIHRoZSBzaWduYXR1cmUgZm9yXG4gKiB0aGUgcmVzdWx0aW5nIGNvbXBvc2l0ZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBmdW5jcyBUaGUgZnVuY3Rpb25zIHRvIGNvbXBvc2UuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gb2J0YWluZWQgYnkgY29tcG9zaW5nIHRoZSBhcmd1bWVudCBmdW5jdGlvbnNcbiAqIGZyb20gcmlnaHQgdG8gbGVmdC4gRm9yIGV4YW1wbGUsIGNvbXBvc2UoZiwgZywgaCkgaXMgaWRlbnRpY2FsIHRvIGRvaW5nXG4gKiAoLi4uYXJncykgPT4gZihnKGgoLi4uYXJncykpKS5cbiAqL1xuZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZ1bmNzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICByZXR1cm4gYXJnO1xuICAgIH07XG4gIH1cblxuICBpZiAoZnVuY3MubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGZ1bmNzWzBdO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmNzLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYShiLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKSk7XG4gICAgfTtcbiAgfSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0b3JlIGVuaGFuY2VyIHRoYXQgYXBwbGllcyBtaWRkbGV3YXJlIHRvIHRoZSBkaXNwYXRjaCBtZXRob2RcbiAqIG9mIHRoZSBSZWR1eCBzdG9yZS4gVGhpcyBpcyBoYW5keSBmb3IgYSB2YXJpZXR5IG9mIHRhc2tzLCBzdWNoIGFzIGV4cHJlc3NpbmdcbiAqIGFzeW5jaHJvbm91cyBhY3Rpb25zIGluIGEgY29uY2lzZSBtYW5uZXIsIG9yIGxvZ2dpbmcgZXZlcnkgYWN0aW9uIHBheWxvYWQuXG4gKlxuICogU2VlIGByZWR1eC10aHVua2AgcGFja2FnZSBhcyBhbiBleGFtcGxlIG9mIHRoZSBSZWR1eCBtaWRkbGV3YXJlLlxuICpcbiAqIEJlY2F1c2UgbWlkZGxld2FyZSBpcyBwb3RlbnRpYWxseSBhc3luY2hyb25vdXMsIHRoaXMgc2hvdWxkIGJlIHRoZSBmaXJzdFxuICogc3RvcmUgZW5oYW5jZXIgaW4gdGhlIGNvbXBvc2l0aW9uIGNoYWluLlxuICpcbiAqIE5vdGUgdGhhdCBlYWNoIG1pZGRsZXdhcmUgd2lsbCBiZSBnaXZlbiB0aGUgYGRpc3BhdGNoYCBhbmQgYGdldFN0YXRlYCBmdW5jdGlvbnNcbiAqIGFzIG5hbWVkIGFyZ3VtZW50cy5cbiAqXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBtaWRkbGV3YXJlcyBUaGUgbWlkZGxld2FyZSBjaGFpbiB0byBiZSBhcHBsaWVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIHN0b3JlIGVuaGFuY2VyIGFwcGx5aW5nIHRoZSBtaWRkbGV3YXJlLlxuICovXG5cbmZ1bmN0aW9uIGFwcGx5TWlkZGxld2FyZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG1pZGRsZXdhcmVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIG1pZGRsZXdhcmVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChjcmVhdGVTdG9yZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3RvcmUgPSBjcmVhdGVTdG9yZS5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG5cbiAgICAgIHZhciBfZGlzcGF0Y2ggPSBmdW5jdGlvbiBkaXNwYXRjaCgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCB0cnVlID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxNSkgOiAwKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBtaWRkbGV3YXJlQVBJID0ge1xuICAgICAgICBnZXRTdGF0ZTogc3RvcmUuZ2V0U3RhdGUsXG4gICAgICAgIGRpc3BhdGNoOiBmdW5jdGlvbiBkaXNwYXRjaCgpIHtcbiAgICAgICAgICByZXR1cm4gX2Rpc3BhdGNoLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHZhciBjaGFpbiA9IG1pZGRsZXdhcmVzLm1hcChmdW5jdGlvbiAobWlkZGxld2FyZSkge1xuICAgICAgICByZXR1cm4gbWlkZGxld2FyZShtaWRkbGV3YXJlQVBJKTtcbiAgICAgIH0pO1xuICAgICAgX2Rpc3BhdGNoID0gY29tcG9zZS5hcHBseSh2b2lkIDAsIGNoYWluKShzdG9yZS5kaXNwYXRjaCk7XG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIHN0b3JlKSwge30sIHtcbiAgICAgICAgZGlzcGF0Y2g6IF9kaXNwYXRjaFxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuLypcbiAqIFRoaXMgaXMgYSBkdW1teSBmdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgZnVuY3Rpb24gbmFtZSBoYXMgYmVlbiBhbHRlcmVkIGJ5IG1pbmlmaWNhdGlvbi5cbiAqIElmIHRoZSBmdW5jdGlvbiBoYXMgYmVlbiBtaW5pZmllZCBhbmQgTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJywgd2FybiB0aGUgdXNlci5cbiAqL1xuXG5mdW5jdGlvbiBpc0NydXNoZWQoKSB7fVxuXG5pZiAoZmFsc2UpIHt9XG5cblxuXG5cbi8qKiovIH0pXG5cbi8qKioqKiovIFx0fSk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0ICovXG4vKioqKioqLyBcdCFmdW5jdGlvbigpIHtcbi8qKioqKiovIFx0XHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHR9KCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMgKi9cbi8qKioqKiovIFx0IWZ1bmN0aW9uKCkge1xuLyoqKioqKi8gXHRcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG4vKioqKioqLyBcdFx0XHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG4vKioqKioqLyBcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHR9KCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kICovXG4vKioqKioqLyBcdCFmdW5jdGlvbigpIHtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9XG4vKioqKioqLyBcdH0oKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QgKi9cbi8qKioqKiovIFx0IWZ1bmN0aW9uKCkge1xuLyoqKioqKi8gXHRcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdH0oKTtcbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbi8vIFRoaXMgZW50cnkgbmVlZCB0byBiZSB3cmFwcGVkIGluIGFuIElJRkUgYmVjYXVzZSBpdCBuZWVkIHRvIGJlIGlzb2xhdGVkIGFnYWluc3Qgb3RoZXIgbW9kdWxlcyBpbiB0aGUgY2h1bmsuXG4hZnVuY3Rpb24oKSB7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3NjcmlwdHNfY2hvaWNlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNzMpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9zY3JpcHRzX2Nob2ljZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihfc2NyaXB0c19jaG9pY2VzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9zY3JpcHRzX2ludGVyZmFjZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMTg3KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfc2NyaXB0c19pbnRlcmZhY2VzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oX3NjcmlwdHNfaW50ZXJmYWNlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfc2NyaXB0c19jb25zdGFudHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oODgzKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfc2NyaXB0c19kZWZhdWx0c19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3ODkpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9zY3JpcHRzX3RlbXBsYXRlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2ODYpO1xuXG5cblxuXG5cblxuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKChfc2NyaXB0c19jaG9pY2VzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdCgpKSk7XG5cbn0oKTtcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXTtcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19leHBvcnRzX187XG4vKioqKioqLyB9KSgpXG47XG59KTtcbn0se31dLDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLyohXG4qIGZvY3VzLXRyYXAgNi45LjRcbiogQGxpY2Vuc2UgTUlULCBodHRwczovL2dpdGh1Yi5jb20vZm9jdXMtdHJhcC9mb2N1cy10cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciB0YWJiYWJsZSA9IHJlcXVpcmUoJ3RhYmJhYmxlJyk7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgIH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbnZhciBhY3RpdmVGb2N1c1RyYXBzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdHJhcFF1ZXVlID0gW107XG4gIHJldHVybiB7XG4gICAgYWN0aXZhdGVUcmFwOiBmdW5jdGlvbiBhY3RpdmF0ZVRyYXAodHJhcCkge1xuICAgICAgaWYgKHRyYXBRdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBhY3RpdmVUcmFwID0gdHJhcFF1ZXVlW3RyYXBRdWV1ZS5sZW5ndGggLSAxXTtcblxuICAgICAgICBpZiAoYWN0aXZlVHJhcCAhPT0gdHJhcCkge1xuICAgICAgICAgIGFjdGl2ZVRyYXAucGF1c2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdHJhcEluZGV4ID0gdHJhcFF1ZXVlLmluZGV4T2YodHJhcCk7XG5cbiAgICAgIGlmICh0cmFwSW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRyYXBRdWV1ZS5wdXNoKHRyYXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbW92ZSB0aGlzIGV4aXN0aW5nIHRyYXAgdG8gdGhlIGZyb250IG9mIHRoZSBxdWV1ZVxuICAgICAgICB0cmFwUXVldWUuc3BsaWNlKHRyYXBJbmRleCwgMSk7XG4gICAgICAgIHRyYXBRdWV1ZS5wdXNoKHRyYXApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVhY3RpdmF0ZVRyYXA6IGZ1bmN0aW9uIGRlYWN0aXZhdGVUcmFwKHRyYXApIHtcbiAgICAgIHZhciB0cmFwSW5kZXggPSB0cmFwUXVldWUuaW5kZXhPZih0cmFwKTtcblxuICAgICAgaWYgKHRyYXBJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdHJhcFF1ZXVlLnNwbGljZSh0cmFwSW5kZXgsIDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHJhcFF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdHJhcFF1ZXVlW3RyYXBRdWV1ZS5sZW5ndGggLSAxXS51bnBhdXNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufSgpO1xuXG52YXIgaXNTZWxlY3RhYmxlSW5wdXQgPSBmdW5jdGlvbiBpc1NlbGVjdGFibGVJbnB1dChub2RlKSB7XG4gIHJldHVybiBub2RlLnRhZ05hbWUgJiYgbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcgJiYgdHlwZW9mIG5vZGUuc2VsZWN0ID09PSAnZnVuY3Rpb24nO1xufTtcblxudmFyIGlzRXNjYXBlRXZlbnQgPSBmdW5jdGlvbiBpc0VzY2FwZUV2ZW50KGUpIHtcbiAgcmV0dXJuIGUua2V5ID09PSAnRXNjYXBlJyB8fCBlLmtleSA9PT0gJ0VzYycgfHwgZS5rZXlDb2RlID09PSAyNztcbn07XG5cbnZhciBpc1RhYkV2ZW50ID0gZnVuY3Rpb24gaXNUYWJFdmVudChlKSB7XG4gIHJldHVybiBlLmtleSA9PT0gJ1RhYicgfHwgZS5rZXlDb2RlID09PSA5O1xufTtcblxudmFyIGRlbGF5ID0gZnVuY3Rpb24gZGVsYXkoZm4pIHtcbiAgcmV0dXJuIHNldFRpbWVvdXQoZm4sIDApO1xufTsgLy8gQXJyYXkuZmluZC9maW5kSW5kZXgoKSBhcmUgbm90IHN1cHBvcnRlZCBvbiBJRTsgdGhpcyByZXBsaWNhdGVzIGVub3VnaFxuLy8gIG9mIEFycmF5LmZpbmRJbmRleCgpIGZvciBvdXIgbmVlZHNcblxuXG52YXIgZmluZEluZGV4ID0gZnVuY3Rpb24gZmluZEluZGV4KGFyciwgZm4pIHtcbiAgdmFyIGlkeCA9IC0xO1xuICBhcnIuZXZlcnkoZnVuY3Rpb24gKHZhbHVlLCBpKSB7XG4gICAgaWYgKGZuKHZhbHVlKSkge1xuICAgICAgaWR4ID0gaTtcbiAgICAgIHJldHVybiBmYWxzZTsgLy8gYnJlYWtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTsgLy8gbmV4dFxuICB9KTtcbiAgcmV0dXJuIGlkeDtcbn07XG4vKipcbiAqIEdldCBhbiBvcHRpb24ncyB2YWx1ZSB3aGVuIGl0IGNvdWxkIGJlIGEgcGxhaW4gdmFsdWUsIG9yIGEgaGFuZGxlciB0aGF0IHByb3ZpZGVzXG4gKiAgdGhlIHZhbHVlLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBPcHRpb24ncyB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7Li4uKn0gW3BhcmFtc10gQW55IHBhcmFtZXRlcnMgdG8gcGFzcyB0byB0aGUgaGFuZGxlciwgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLlxuICogQHJldHVybnMgeyp9IFRoZSBgdmFsdWVgLCBvciB0aGUgaGFuZGxlcidzIHJldHVybmVkIHZhbHVlLlxuICovXG5cblxudmFyIHZhbHVlT3JIYW5kbGVyID0gZnVuY3Rpb24gdmFsdWVPckhhbmRsZXIodmFsdWUpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcGFyYW1zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyB2YWx1ZS5hcHBseSh2b2lkIDAsIHBhcmFtcykgOiB2YWx1ZTtcbn07XG5cbnZhciBnZXRBY3R1YWxUYXJnZXQgPSBmdW5jdGlvbiBnZXRBY3R1YWxUYXJnZXQoZXZlbnQpIHtcbiAgLy8gTk9URTogSWYgdGhlIHRyYXAgaXMgX2luc2lkZV8gYSBzaGFkb3cgRE9NLCBldmVudC50YXJnZXQgd2lsbCBhbHdheXMgYmUgdGhlXG4gIC8vICBzaGFkb3cgaG9zdC4gSG93ZXZlciwgZXZlbnQudGFyZ2V0LmNvbXBvc2VkUGF0aCgpIHdpbGwgYmUgYW4gYXJyYXkgb2ZcbiAgLy8gIG5vZGVzIFwiY2xpY2tlZFwiIGZyb20gaW5uZXItbW9zdCAodGhlIGFjdHVhbCBlbGVtZW50IGluc2lkZSB0aGUgc2hhZG93KSB0b1xuICAvLyAgb3V0ZXItbW9zdCAodGhlIGhvc3QgSFRNTCBkb2N1bWVudCkuIElmIHdlIGhhdmUgYWNjZXNzIHRvIGNvbXBvc2VkUGF0aCgpLFxuICAvLyAgdGhlbiB1c2UgaXRzIGZpcnN0IGVsZW1lbnQ7IG90aGVyd2lzZSwgZmFsbCBiYWNrIHRvIGV2ZW50LnRhcmdldCAoYW5kXG4gIC8vICB0aGlzIG9ubHkgd29ya3MgZm9yIGFuIF9vcGVuXyBzaGFkb3cgRE9NOyBvdGhlcndpc2UsXG4gIC8vICBjb21wb3NlZFBhdGgoKVswXSA9PT0gZXZlbnQudGFyZ2V0IGFsd2F5cykuXG4gIHJldHVybiBldmVudC50YXJnZXQuc2hhZG93Um9vdCAmJiB0eXBlb2YgZXZlbnQuY29tcG9zZWRQYXRoID09PSAnZnVuY3Rpb24nID8gZXZlbnQuY29tcG9zZWRQYXRoKClbMF0gOiBldmVudC50YXJnZXQ7XG59O1xuXG52YXIgY3JlYXRlRm9jdXNUcmFwID0gZnVuY3Rpb24gY3JlYXRlRm9jdXNUcmFwKGVsZW1lbnRzLCB1c2VyT3B0aW9ucykge1xuICAvLyBTU1I6IGEgbGl2ZSB0cmFwIHNob3VsZG4ndCBiZSBjcmVhdGVkIGluIHRoaXMgdHlwZSBvZiBlbnZpcm9ubWVudCBzbyB0aGlzXG4gIC8vICBzaG91bGQgYmUgc2FmZSBjb2RlIHRvIGV4ZWN1dGUgaWYgdGhlIGBkb2N1bWVudGAgb3B0aW9uIGlzbid0IHNwZWNpZmllZFxuICB2YXIgZG9jID0gKHVzZXJPcHRpb25zID09PSBudWxsIHx8IHVzZXJPcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiB1c2VyT3B0aW9ucy5kb2N1bWVudCkgfHwgZG9jdW1lbnQ7XG5cbiAgdmFyIGNvbmZpZyA9IF9vYmplY3RTcHJlYWQyKHtcbiAgICByZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZTogdHJ1ZSxcbiAgICBlc2NhcGVEZWFjdGl2YXRlczogdHJ1ZSxcbiAgICBkZWxheUluaXRpYWxGb2N1czogdHJ1ZVxuICB9LCB1c2VyT3B0aW9ucyk7XG5cbiAgdmFyIHN0YXRlID0ge1xuICAgIC8vIGNvbnRhaW5lcnMgZ2l2ZW4gdG8gY3JlYXRlRm9jdXNUcmFwKClcbiAgICAvLyBAdHlwZSB7QXJyYXk8SFRNTEVsZW1lbnQ+fVxuICAgIGNvbnRhaW5lcnM6IFtdLFxuICAgIC8vIGxpc3Qgb2Ygb2JqZWN0cyBpZGVudGlmeWluZyB0YWJiYWJsZSBub2RlcyBpbiBgY29udGFpbmVyc2AgaW4gdGhlIHRyYXBcbiAgICAvLyBOT1RFOiBpdCdzIHBvc3NpYmxlIHRoYXQgYSBncm91cCBoYXMgbm8gdGFiYmFibGUgbm9kZXMgaWYgbm9kZXMgZ2V0IHJlbW92ZWQgd2hpbGUgdGhlIHRyYXBcbiAgICAvLyAgaXMgYWN0aXZlLCBidXQgdGhlIHRyYXAgc2hvdWxkIG5ldmVyIGdldCB0byBhIHN0YXRlIHdoZXJlIHRoZXJlIGlzbid0IGF0IGxlYXN0IG9uZSBncm91cFxuICAgIC8vICB3aXRoIGF0IGxlYXN0IG9uZSB0YWJiYWJsZSBub2RlIGluIGl0ICh0aGF0IHdvdWxkIGxlYWQgdG8gYW4gZXJyb3IgY29uZGl0aW9uIHRoYXQgd291bGRcbiAgICAvLyAgcmVzdWx0IGluIGFuIGVycm9yIGJlaW5nIHRocm93bilcbiAgICAvLyBAdHlwZSB7QXJyYXk8e1xuICAgIC8vICAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICAvLyAgIHRhYmJhYmxlTm9kZXM6IEFycmF5PEhUTUxFbGVtZW50PiwgLy8gZW1wdHkgaWYgbm9uZVxuICAgIC8vICAgZm9jdXNhYmxlTm9kZXM6IEFycmF5PEhUTUxFbGVtZW50PiwgLy8gZW1wdHkgaWYgbm9uZVxuICAgIC8vICAgZmlyc3RUYWJiYWJsZU5vZGU6IEhUTUxFbGVtZW50fG51bGwsXG4gICAgLy8gICBsYXN0VGFiYmFibGVOb2RlOiBIVE1MRWxlbWVudHxudWxsLFxuICAgIC8vICAgbmV4dFRhYmJhYmxlTm9kZTogKG5vZGU6IEhUTUxFbGVtZW50LCBmb3J3YXJkOiBib29sZWFuKSA9PiBIVE1MRWxlbWVudHx1bmRlZmluZWRcbiAgICAvLyB9Pn1cbiAgICBjb250YWluZXJHcm91cHM6IFtdLFxuICAgIC8vIHNhbWUgb3JkZXIvbGVuZ3RoIGFzIGBjb250YWluZXJzYCBsaXN0XG4gICAgLy8gcmVmZXJlbmNlcyB0byBvYmplY3RzIGluIGBjb250YWluZXJHcm91cHNgLCBidXQgb25seSB0aG9zZSB0aGF0IGFjdHVhbGx5IGhhdmVcbiAgICAvLyAgdGFiYmFibGUgbm9kZXMgaW4gdGhlbVxuICAgIC8vIE5PVEU6IHNhbWUgb3JkZXIgYXMgYGNvbnRhaW5lcnNgIGFuZCBgY29udGFpbmVyR3JvdXBzYCwgYnV0IF9fbm90IG5lY2Vzc2FyaWx5X19cbiAgICAvLyAgdGhlIHNhbWUgbGVuZ3RoXG4gICAgdGFiYmFibGVHcm91cHM6IFtdLFxuICAgIG5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbjogbnVsbCxcbiAgICBtb3N0UmVjZW50bHlGb2N1c2VkTm9kZTogbnVsbCxcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIHBhdXNlZDogZmFsc2UsXG4gICAgLy8gdGltZXIgSUQgZm9yIHdoZW4gZGVsYXlJbml0aWFsRm9jdXMgaXMgdHJ1ZSBhbmQgaW5pdGlhbCBmb2N1cyBpbiB0aGlzIHRyYXBcbiAgICAvLyAgaGFzIGJlZW4gZGVsYXllZCBkdXJpbmcgYWN0aXZhdGlvblxuICAgIGRlbGF5SW5pdGlhbEZvY3VzVGltZXI6IHVuZGVmaW5lZFxuICB9O1xuICB2YXIgdHJhcDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItY29uc3QgLS0gc29tZSBwcml2YXRlIGZ1bmN0aW9ucyByZWZlcmVuY2UgaXQsIGFuZCBpdHMgbWV0aG9kcyByZWZlcmVuY2UgcHJpdmF0ZSBmdW5jdGlvbnMsIHNvIHdlIG11c3QgZGVjbGFyZSBoZXJlIGFuZCBkZWZpbmUgbGF0ZXJcblxuICAvKipcbiAgICogR2V0cyBhIGNvbmZpZ3VyYXRpb24gb3B0aW9uIHZhbHVlLlxuICAgKiBAcGFyYW0ge09iamVjdHx1bmRlZmluZWR9IGNvbmZpZ092ZXJyaWRlT3B0aW9ucyBJZiB0cnVlLCBhbmQgb3B0aW9uIGlzIGRlZmluZWQgaW4gdGhpcyBzZXQsXG4gICAqICB2YWx1ZSB3aWxsIGJlIHRha2VuIGZyb20gdGhpcyBvYmplY3QuIE90aGVyd2lzZSwgdmFsdWUgd2lsbCBiZSB0YWtlbiBmcm9tIGJhc2UgY29uZmlndXJhdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbk5hbWUgTmFtZSBvZiB0aGUgb3B0aW9uIHdob3NlIHZhbHVlIGlzIHNvdWdodC5cbiAgICogQHBhcmFtIHtzdHJpbmd8dW5kZWZpbmVkfSBbY29uZmlnT3B0aW9uTmFtZV0gTmFtZSBvZiBvcHRpb24gdG8gdXNlIF9faW5zdGVhZCBvZl9fIGBvcHRpb25OYW1lYFxuICAgKiAgSUlGIGBjb25maWdPdmVycmlkZU9wdGlvbnNgIGlzIG5vdCBkZWZpbmVkLiBPdGhlcndpc2UsIGBvcHRpb25OYW1lYCBpcyB1c2VkLlxuICAgKi9cblxuICB2YXIgZ2V0T3B0aW9uID0gZnVuY3Rpb24gZ2V0T3B0aW9uKGNvbmZpZ092ZXJyaWRlT3B0aW9ucywgb3B0aW9uTmFtZSwgY29uZmlnT3B0aW9uTmFtZSkge1xuICAgIHJldHVybiBjb25maWdPdmVycmlkZU9wdGlvbnMgJiYgY29uZmlnT3ZlcnJpZGVPcHRpb25zW29wdGlvbk5hbWVdICE9PSB1bmRlZmluZWQgPyBjb25maWdPdmVycmlkZU9wdGlvbnNbb3B0aW9uTmFtZV0gOiBjb25maWdbY29uZmlnT3B0aW9uTmFtZSB8fCBvcHRpb25OYW1lXTtcbiAgfTtcbiAgLyoqXG4gICAqIEZpbmRzIHRoZSBpbmRleCBvZiB0aGUgY29udGFpbmVyIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHJldHVybnMge251bWJlcn0gSW5kZXggb2YgdGhlIGNvbnRhaW5lciBpbiBlaXRoZXIgYHN0YXRlLmNvbnRhaW5lcnNgIG9yXG4gICAqICBgc3RhdGUuY29udGFpbmVyR3JvdXBzYCAodGhlIG9yZGVyL2xlbmd0aCBvZiB0aGVzZSBsaXN0cyBhcmUgdGhlIHNhbWUpOyAtMVxuICAgKiAgaWYgdGhlIGVsZW1lbnQgaXNuJ3QgZm91bmQuXG4gICAqL1xuXG5cbiAgdmFyIGZpbmRDb250YWluZXJJbmRleCA9IGZ1bmN0aW9uIGZpbmRDb250YWluZXJJbmRleChlbGVtZW50KSB7XG4gICAgLy8gTk9URTogc2VhcmNoIGBjb250YWluZXJHcm91cHNgIGJlY2F1c2UgaXQncyBwb3NzaWJsZSBhIGdyb3VwIGNvbnRhaW5zIG5vIHRhYmJhYmxlXG4gICAgLy8gIG5vZGVzLCBidXQgc3RpbGwgY29udGFpbnMgZm9jdXNhYmxlIG5vZGVzIChlLmcuIGlmIHRoZXkgYWxsIGhhdmUgYHRhYmluZGV4PS0xYClcbiAgICAvLyAgYW5kIHdlIHN0aWxsIG5lZWQgdG8gZmluZCB0aGUgZWxlbWVudCBpbiB0aGVyZVxuICAgIHJldHVybiBzdGF0ZS5jb250YWluZXJHcm91cHMuZmluZEluZGV4KGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgY29udGFpbmVyID0gX3JlZi5jb250YWluZXIsXG4gICAgICAgICAgdGFiYmFibGVOb2RlcyA9IF9yZWYudGFiYmFibGVOb2RlcztcbiAgICAgIHJldHVybiBjb250YWluZXIuY29udGFpbnMoZWxlbWVudCkgfHwgLy8gZmFsbCBiYWNrIHRvIGV4cGxpY2l0IHRhYmJhYmxlIHNlYXJjaCB3aGljaCB3aWxsIHRha2UgaW50byBjb25zaWRlcmF0aW9uIGFueVxuICAgICAgLy8gIHdlYiBjb21wb25lbnRzIGlmIHRoZSBgdGFiYmFibGVPcHRpb25zLmdldFNoYWRvd1Jvb3RgIG9wdGlvbiB3YXMgdXNlZCBmb3JcbiAgICAgIC8vICB0aGUgdHJhcCwgZW5hYmxpbmcgc2hhZG93IERPTSBzdXBwb3J0IGluIHRhYmJhYmxlIChgTm9kZS5jb250YWlucygpYCBkb2Vzbid0XG4gICAgICAvLyAgbG9vayBpbnNpZGUgd2ViIGNvbXBvbmVudHMgZXZlbiBpZiBvcGVuKVxuICAgICAgdGFiYmFibGVOb2Rlcy5maW5kKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHJldHVybiBub2RlID09PSBlbGVtZW50O1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIC8qKlxuICAgKiBHZXRzIHRoZSBub2RlIGZvciB0aGUgZ2l2ZW4gb3B0aW9uLCB3aGljaCBpcyBleHBlY3RlZCB0byBiZSBhbiBvcHRpb24gdGhhdFxuICAgKiAgY2FuIGJlIGVpdGhlciBhIERPTSBub2RlLCBhIHN0cmluZyB0aGF0IGlzIGEgc2VsZWN0b3IgdG8gZ2V0IGEgbm9kZSwgYGZhbHNlYFxuICAgKiAgKGlmIGEgbm9kZSBpcyBleHBsaWNpdGx5IE5PVCBnaXZlbiksIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFueSBvZiB0aGVzZVxuICAgKiAgdmFsdWVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9uTmFtZVxuICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkIHwgZmFsc2UgfCBIVE1MRWxlbWVudCB8IFNWR0VsZW1lbnR9IFJldHVybnNcbiAgICogIGB1bmRlZmluZWRgIGlmIHRoZSBvcHRpb24gaXMgbm90IHNwZWNpZmllZDsgYGZhbHNlYCBpZiB0aGUgb3B0aW9uXG4gICAqICByZXNvbHZlZCB0byBgZmFsc2VgIChub2RlIGV4cGxpY2l0bHkgbm90IGdpdmVuKTsgb3RoZXJ3aXNlLCB0aGUgcmVzb2x2ZWRcbiAgICogIERPTSBub2RlLlxuICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIG9wdGlvbiBpcyBzZXQsIG5vdCBgZmFsc2VgLCBhbmQgaXMgbm90LCBvciBkb2VzIG5vdFxuICAgKiAgcmVzb2x2ZSB0byBhIG5vZGUuXG4gICAqL1xuXG5cbiAgdmFyIGdldE5vZGVGb3JPcHRpb24gPSBmdW5jdGlvbiBnZXROb2RlRm9yT3B0aW9uKG9wdGlvbk5hbWUpIHtcbiAgICB2YXIgb3B0aW9uVmFsdWUgPSBjb25maWdbb3B0aW9uTmFtZV07XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvblZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIHBhcmFtc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9uVmFsdWUgPSBvcHRpb25WYWx1ZS5hcHBseSh2b2lkIDAsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvblZhbHVlID09PSB0cnVlKSB7XG4gICAgICBvcHRpb25WYWx1ZSA9IHVuZGVmaW5lZDsgLy8gdXNlIGRlZmF1bHQgdmFsdWVcbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvblZhbHVlKSB7XG4gICAgICBpZiAob3B0aW9uVmFsdWUgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25WYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvblZhbHVlO1xuICAgICAgfSAvLyBlbHNlLCBlbXB0eSBzdHJpbmcgKGludmFsaWQpLCBudWxsIChpbnZhbGlkKSwgMCAoaW52YWxpZClcblxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJgXCIuY29uY2F0KG9wdGlvbk5hbWUsIFwiYCB3YXMgc3BlY2lmaWVkIGJ1dCB3YXMgbm90IGEgbm9kZSwgb3IgZGlkIG5vdCByZXR1cm4gYSBub2RlXCIpKTtcbiAgICB9XG5cbiAgICB2YXIgbm9kZSA9IG9wdGlvblZhbHVlOyAvLyBjb3VsZCBiZSBIVE1MRWxlbWVudCwgU1ZHRWxlbWVudCwgb3Igbm9uLWVtcHR5IHN0cmluZyBhdCB0aGlzIHBvaW50XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgbm9kZSA9IGRvYy5xdWVyeVNlbGVjdG9yKG9wdGlvblZhbHVlKTsgLy8gcmVzb2x2ZSB0byBub2RlLCBvciBudWxsIGlmIGZhaWxzXG5cbiAgICAgIGlmICghbm9kZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJgXCIuY29uY2F0KG9wdGlvbk5hbWUsIFwiYCBhcyBzZWxlY3RvciByZWZlcnMgdG8gbm8ga25vd24gbm9kZVwiKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG5cbiAgdmFyIGdldEluaXRpYWxGb2N1c05vZGUgPSBmdW5jdGlvbiBnZXRJbml0aWFsRm9jdXNOb2RlKCkge1xuICAgIHZhciBub2RlID0gZ2V0Tm9kZUZvck9wdGlvbignaW5pdGlhbEZvY3VzJyk7IC8vIGZhbHNlIGV4cGxpY2l0bHkgaW5kaWNhdGVzIHdlIHdhbnQgbm8gaW5pdGlhbEZvY3VzIGF0IGFsbFxuXG4gICAgaWYgKG5vZGUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gb3B0aW9uIG5vdCBzcGVjaWZpZWQ6IHVzZSBmYWxsYmFjayBvcHRpb25zXG4gICAgICBpZiAoZmluZENvbnRhaW5lckluZGV4KGRvYy5hY3RpdmVFbGVtZW50KSA+PSAwKSB7XG4gICAgICAgIG5vZGUgPSBkb2MuYWN0aXZlRWxlbWVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBmaXJzdFRhYmJhYmxlR3JvdXAgPSBzdGF0ZS50YWJiYWJsZUdyb3Vwc1swXTtcbiAgICAgICAgdmFyIGZpcnN0VGFiYmFibGVOb2RlID0gZmlyc3RUYWJiYWJsZUdyb3VwICYmIGZpcnN0VGFiYmFibGVHcm91cC5maXJzdFRhYmJhYmxlTm9kZTsgLy8gTk9URTogYGZhbGxiYWNrRm9jdXNgIG9wdGlvbiBmdW5jdGlvbiBjYW5ub3QgcmV0dXJuIGBmYWxzZWAgKG5vdCBzdXBwb3J0ZWQpXG5cbiAgICAgICAgbm9kZSA9IGZpcnN0VGFiYmFibGVOb2RlIHx8IGdldE5vZGVGb3JPcHRpb24oJ2ZhbGxiYWNrRm9jdXMnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91ciBmb2N1cy10cmFwIG5lZWRzIHRvIGhhdmUgYXQgbGVhc3Qgb25lIGZvY3VzYWJsZSBlbGVtZW50Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG5cbiAgdmFyIHVwZGF0ZVRhYmJhYmxlTm9kZXMgPSBmdW5jdGlvbiB1cGRhdGVUYWJiYWJsZU5vZGVzKCkge1xuICAgIHN0YXRlLmNvbnRhaW5lckdyb3VwcyA9IHN0YXRlLmNvbnRhaW5lcnMubWFwKGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgICAgIHZhciB0YWJiYWJsZU5vZGVzID0gdGFiYmFibGUudGFiYmFibGUoY29udGFpbmVyLCBjb25maWcudGFiYmFibGVPcHRpb25zKTsgLy8gTk9URTogaWYgd2UgaGF2ZSB0YWJiYWJsZSBub2Rlcywgd2UgbXVzdCBoYXZlIGZvY3VzYWJsZSBub2RlczsgZm9jdXNhYmxlIG5vZGVzXG4gICAgICAvLyAgYXJlIGEgc3VwZXJzZXQgb2YgdGFiYmFibGUgbm9kZXNcblxuICAgICAgdmFyIGZvY3VzYWJsZU5vZGVzID0gdGFiYmFibGUuZm9jdXNhYmxlKGNvbnRhaW5lciwgY29uZmlnLnRhYmJhYmxlT3B0aW9ucyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgICAgdGFiYmFibGVOb2RlczogdGFiYmFibGVOb2RlcyxcbiAgICAgICAgZm9jdXNhYmxlTm9kZXM6IGZvY3VzYWJsZU5vZGVzLFxuICAgICAgICBmaXJzdFRhYmJhYmxlTm9kZTogdGFiYmFibGVOb2Rlcy5sZW5ndGggPiAwID8gdGFiYmFibGVOb2Rlc1swXSA6IG51bGwsXG4gICAgICAgIGxhc3RUYWJiYWJsZU5vZGU6IHRhYmJhYmxlTm9kZXMubGVuZ3RoID4gMCA/IHRhYmJhYmxlTm9kZXNbdGFiYmFibGVOb2Rlcy5sZW5ndGggLSAxXSA6IG51bGwsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpbmRzIHRoZSBfX3RhYmJhYmxlX18gbm9kZSB0aGF0IGZvbGxvd3MgdGhlIGdpdmVuIG5vZGUgaW4gdGhlIHNwZWNpZmllZCBkaXJlY3Rpb24sXG4gICAgICAgICAqICBpbiB0aGlzIGNvbnRhaW5lciwgaWYgYW55LlxuICAgICAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcndhcmRdIFRydWUgaWYgZ29pbmcgaW4gZm9yd2FyZCB0YWIgb3JkZXI7IGZhbHNlIGlmIGdvaW5nXG4gICAgICAgICAqICBpbiByZXZlcnNlLlxuICAgICAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR8dW5kZWZpbmVkfSBUaGUgbmV4dCB0YWJiYWJsZSBub2RlLCBpZiBhbnkuXG4gICAgICAgICAqL1xuICAgICAgICBuZXh0VGFiYmFibGVOb2RlOiBmdW5jdGlvbiBuZXh0VGFiYmFibGVOb2RlKG5vZGUpIHtcbiAgICAgICAgICB2YXIgZm9yd2FyZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdHJ1ZTtcbiAgICAgICAgICAvLyBOT1RFOiBJZiB0YWJpbmRleCBpcyBwb3NpdGl2ZSAoaW4gb3JkZXIgdG8gbWFuaXB1bGF0ZSB0aGUgdGFiIG9yZGVyIHNlcGFyYXRlXG4gICAgICAgICAgLy8gIGZyb20gdGhlIERPTSBvcmRlciksIHRoaXMgX193aWxsIG5vdCB3b3JrX18gYmVjYXVzZSB0aGUgbGlzdCBvZiBmb2N1c2FibGVOb2RlcyxcbiAgICAgICAgICAvLyAgd2hpbGUgaXQgY29udGFpbnMgdGFiYmFibGUgbm9kZXMsIGRvZXMgbm90IHNvcnQgaXRzIG5vZGVzIGluIGFueSBvcmRlciBvdGhlclxuICAgICAgICAgIC8vICB0aGFuIERPTSBvcmRlciwgYmVjYXVzZSBpdCBjYW4ndDogV2hlcmUgd291bGQgeW91IHBsYWNlIGZvY3VzYWJsZSAoYnV0IG5vdFxuICAgICAgICAgIC8vICB0YWJiYWJsZSkgbm9kZXMgaW4gdGhhdCBvcmRlcj8gVGhleSBoYXZlIG5vIG9yZGVyLCBiZWNhdXNlIHRoZXkgYXJlbid0IHRhYmJhbGUuLi5cbiAgICAgICAgICAvLyBTdXBwb3J0IGZvciBwb3NpdGl2ZSB0YWJpbmRleCBpcyBhbHJlYWR5IGJyb2tlbiBhbmQgaGFyZCB0byBtYW5hZ2UgKHBvc3NpYmx5XG4gICAgICAgICAgLy8gIG5vdCBzdXBwb3J0YWJsZSwgVEJEKSwgc28gdGhpcyBpc24ndCBnb2luZyB0byBtYWtlIHRoaW5ncyB3b3JzZSB0aGFuIHRoZXlcbiAgICAgICAgICAvLyAgYWxyZWFkeSBhcmUsIGFuZCBhdCBsZWFzdCBtYWtlcyB0aGluZ3MgYmV0dGVyIGZvciB0aGUgbWFqb3JpdHkgb2YgY2FzZXMgd2hlcmVcbiAgICAgICAgICAvLyAgdGFiaW5kZXggaXMgZWl0aGVyIDAvdW5zZXQgb3IgbmVnYXRpdmUuXG4gICAgICAgICAgLy8gRllJLCBwb3NpdGl2ZSB0YWJpbmRleCBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZvY3VzLXRyYXAvZm9jdXMtdHJhcC9pc3N1ZXMvMzc1XG4gICAgICAgICAgdmFyIG5vZGVJZHggPSBmb2N1c2FibGVOb2Rlcy5maW5kSW5kZXgoZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgIHJldHVybiBuID09PSBub2RlO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKG5vZGVJZHggPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChmb3J3YXJkKSB7XG4gICAgICAgICAgICByZXR1cm4gZm9jdXNhYmxlTm9kZXMuc2xpY2Uobm9kZUlkeCArIDEpLmZpbmQoZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRhYmJhYmxlLmlzVGFiYmFibGUobiwgY29uZmlnLnRhYmJhYmxlT3B0aW9ucyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZm9jdXNhYmxlTm9kZXMuc2xpY2UoMCwgbm9kZUlkeCkucmV2ZXJzZSgpLmZpbmQoZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgIHJldHVybiB0YWJiYWJsZS5pc1RhYmJhYmxlKG4sIGNvbmZpZy50YWJiYWJsZU9wdGlvbnMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICAgIHN0YXRlLnRhYmJhYmxlR3JvdXBzID0gc3RhdGUuY29udGFpbmVyR3JvdXBzLmZpbHRlcihmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgIHJldHVybiBncm91cC50YWJiYWJsZU5vZGVzLmxlbmd0aCA+IDA7XG4gICAgfSk7IC8vIHRocm93IGlmIG5vIGdyb3VwcyBoYXZlIHRhYmJhYmxlIG5vZGVzIGFuZCB3ZSBkb24ndCBoYXZlIGEgZmFsbGJhY2sgZm9jdXMgbm9kZSBlaXRoZXJcblxuICAgIGlmIChzdGF0ZS50YWJiYWJsZUdyb3Vwcy5sZW5ndGggPD0gMCAmJiAhZ2V0Tm9kZUZvck9wdGlvbignZmFsbGJhY2tGb2N1cycpIC8vIHJldHVybmluZyBmYWxzZSBub3Qgc3VwcG9ydGVkIGZvciB0aGlzIG9wdGlvblxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3VyIGZvY3VzLXRyYXAgbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBjb250YWluZXIgd2l0aCBhdCBsZWFzdCBvbmUgdGFiYmFibGUgbm9kZSBpbiBpdCBhdCBhbGwgdGltZXMnKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHRyeUZvY3VzID0gZnVuY3Rpb24gdHJ5Rm9jdXMobm9kZSkge1xuICAgIGlmIChub2RlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChub2RlID09PSBkb2MuYWN0aXZlRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghbm9kZSB8fCAhbm9kZS5mb2N1cykge1xuICAgICAgdHJ5Rm9jdXMoZ2V0SW5pdGlhbEZvY3VzTm9kZSgpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBub2RlLmZvY3VzKHtcbiAgICAgIHByZXZlbnRTY3JvbGw6ICEhY29uZmlnLnByZXZlbnRTY3JvbGxcbiAgICB9KTtcbiAgICBzdGF0ZS5tb3N0UmVjZW50bHlGb2N1c2VkTm9kZSA9IG5vZGU7XG5cbiAgICBpZiAoaXNTZWxlY3RhYmxlSW5wdXQobm9kZSkpIHtcbiAgICAgIG5vZGUuc2VsZWN0KCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBnZXRSZXR1cm5Gb2N1c05vZGUgPSBmdW5jdGlvbiBnZXRSZXR1cm5Gb2N1c05vZGUocHJldmlvdXNBY3RpdmVFbGVtZW50KSB7XG4gICAgdmFyIG5vZGUgPSBnZXROb2RlRm9yT3B0aW9uKCdzZXRSZXR1cm5Gb2N1cycsIHByZXZpb3VzQWN0aXZlRWxlbWVudCk7XG4gICAgcmV0dXJuIG5vZGUgPyBub2RlIDogbm9kZSA9PT0gZmFsc2UgPyBmYWxzZSA6IHByZXZpb3VzQWN0aXZlRWxlbWVudDtcbiAgfTsgLy8gVGhpcyBuZWVkcyB0byBiZSBkb25lIG9uIG1vdXNlZG93biBhbmQgdG91Y2hzdGFydCBpbnN0ZWFkIG9mIGNsaWNrXG4gIC8vIHNvIHRoYXQgaXQgcHJlY2VkZXMgdGhlIGZvY3VzIGV2ZW50LlxuXG5cbiAgdmFyIGNoZWNrUG9pbnRlckRvd24gPSBmdW5jdGlvbiBjaGVja1BvaW50ZXJEb3duKGUpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0QWN0dWFsVGFyZ2V0KGUpO1xuXG4gICAgaWYgKGZpbmRDb250YWluZXJJbmRleCh0YXJnZXQpID49IDApIHtcbiAgICAgIC8vIGFsbG93IHRoZSBjbGljayBzaW5jZSBpdCBvY3VycmVkIGluc2lkZSB0aGUgdHJhcFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZU9ySGFuZGxlcihjb25maWcuY2xpY2tPdXRzaWRlRGVhY3RpdmF0ZXMsIGUpKSB7XG4gICAgICAvLyBpbW1lZGlhdGVseSBkZWFjdGl2YXRlIHRoZSB0cmFwXG4gICAgICB0cmFwLmRlYWN0aXZhdGUoe1xuICAgICAgICAvLyBpZiwgb24gZGVhY3RpdmF0aW9uLCB3ZSBzaG91bGQgcmV0dXJuIGZvY3VzIHRvIHRoZSBub2RlIG9yaWdpbmFsbHktZm9jdXNlZFxuICAgICAgICAvLyAgd2hlbiB0aGUgdHJhcCB3YXMgYWN0aXZhdGVkIChvciB0aGUgY29uZmlndXJlZCBgc2V0UmV0dXJuRm9jdXNgIG5vZGUpLFxuICAgICAgICAvLyAgdGhlbiBhc3N1bWUgaXQncyBhbHNvIE9LIHRvIHJldHVybiBmb2N1cyB0byB0aGUgb3V0c2lkZSBub2RlIHRoYXQgd2FzXG4gICAgICAgIC8vICBqdXN0IGNsaWNrZWQsIGNhdXNpbmcgZGVhY3RpdmF0aW9uLCBhcyBsb25nIGFzIHRoYXQgbm9kZSBpcyBmb2N1c2FibGU7XG4gICAgICAgIC8vICBpZiBpdCBpc24ndCBmb2N1c2FibGUsIHRoZW4gcmV0dXJuIGZvY3VzIHRvIHRoZSBvcmlnaW5hbCBub2RlIGZvY3VzZWRcbiAgICAgICAgLy8gIG9uIGFjdGl2YXRpb24gKG9yIHRoZSBjb25maWd1cmVkIGBzZXRSZXR1cm5Gb2N1c2Agbm9kZSlcbiAgICAgICAgLy8gTk9URTogYnkgc2V0dGluZyBgcmV0dXJuRm9jdXM6IGZhbHNlYCwgZGVhY3RpdmF0ZSgpIHdpbGwgZG8gbm90aGluZyxcbiAgICAgICAgLy8gIHdoaWNoIHdpbGwgcmVzdWx0IGluIHRoZSBvdXRzaWRlIGNsaWNrIHNldHRpbmcgZm9jdXMgdG8gdGhlIG5vZGVcbiAgICAgICAgLy8gIHRoYXQgd2FzIGNsaWNrZWQsIHdoZXRoZXIgaXQncyBmb2N1c2FibGUgb3Igbm90OyBieSBzZXR0aW5nXG4gICAgICAgIC8vICBgcmV0dXJuRm9jdXM6IHRydWVgLCB3ZSdsbCBhdHRlbXB0IHRvIHJlLWZvY3VzIHRoZSBub2RlIG9yaWdpbmFsbHktZm9jdXNlZFxuICAgICAgICAvLyAgb24gYWN0aXZhdGlvbiAob3IgdGhlIGNvbmZpZ3VyZWQgYHNldFJldHVybkZvY3VzYCBub2RlKVxuICAgICAgICByZXR1cm5Gb2N1czogY29uZmlnLnJldHVybkZvY3VzT25EZWFjdGl2YXRlICYmICF0YWJiYWJsZS5pc0ZvY3VzYWJsZSh0YXJnZXQsIGNvbmZpZy50YWJiYWJsZU9wdGlvbnMpXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFRoaXMgaXMgbmVlZGVkIGZvciBtb2JpbGUgZGV2aWNlcy5cbiAgICAvLyAoSWYgd2UnbGwgb25seSBsZXQgYGNsaWNrYCBldmVudHMgdGhyb3VnaCxcbiAgICAvLyB0aGVuIG9uIG1vYmlsZSB0aGV5IHdpbGwgYmUgYmxvY2tlZCBhbnl3YXlzIGlmIGB0b3VjaHN0YXJ0YCBpcyBibG9ja2VkLilcblxuXG4gICAgaWYgKHZhbHVlT3JIYW5kbGVyKGNvbmZpZy5hbGxvd091dHNpZGVDbGljaywgZSkpIHtcbiAgICAgIC8vIGFsbG93IHRoZSBjbGljayBvdXRzaWRlIHRoZSB0cmFwIHRvIHRha2UgcGxhY2VcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIG90aGVyd2lzZSwgcHJldmVudCB0aGUgY2xpY2tcblxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9OyAvLyBJbiBjYXNlIGZvY3VzIGVzY2FwZXMgdGhlIHRyYXAgZm9yIHNvbWUgc3RyYW5nZSByZWFzb24sIHB1bGwgaXQgYmFjayBpbi5cblxuXG4gIHZhciBjaGVja0ZvY3VzSW4gPSBmdW5jdGlvbiBjaGVja0ZvY3VzSW4oZSkge1xuICAgIHZhciB0YXJnZXQgPSBnZXRBY3R1YWxUYXJnZXQoZSk7XG4gICAgdmFyIHRhcmdldENvbnRhaW5lZCA9IGZpbmRDb250YWluZXJJbmRleCh0YXJnZXQpID49IDA7IC8vIEluIEZpcmVmb3ggd2hlbiB5b3UgVGFiIG91dCBvZiBhbiBpZnJhbWUgdGhlIERvY3VtZW50IGlzIGJyaWVmbHkgZm9jdXNlZC5cblxuICAgIGlmICh0YXJnZXRDb250YWluZWQgfHwgdGFyZ2V0IGluc3RhbmNlb2YgRG9jdW1lbnQpIHtcbiAgICAgIGlmICh0YXJnZXRDb250YWluZWQpIHtcbiAgICAgICAgc3RhdGUubW9zdFJlY2VudGx5Rm9jdXNlZE5vZGUgPSB0YXJnZXQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVzY2FwZWQhIHB1bGwgaXQgYmFjayBpbiB0byB3aGVyZSBpdCBqdXN0IGxlZnRcbiAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICB0cnlGb2N1cyhzdGF0ZS5tb3N0UmVjZW50bHlGb2N1c2VkTm9kZSB8fCBnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICAgIH1cbiAgfTsgLy8gSGlqYWNrIFRhYiBldmVudHMgb24gdGhlIGZpcnN0IGFuZCBsYXN0IGZvY3VzYWJsZSBub2RlcyBvZiB0aGUgdHJhcCxcbiAgLy8gaW4gb3JkZXIgdG8gcHJldmVudCBmb2N1cyBmcm9tIGVzY2FwaW5nLiBJZiBpdCBlc2NhcGVzIGZvciBldmVuIGFcbiAgLy8gbW9tZW50IGl0IGNhbiBlbmQgdXAgc2Nyb2xsaW5nIHRoZSBwYWdlIGFuZCBjYXVzaW5nIGNvbmZ1c2lvbiBzbyB3ZVxuICAvLyBraW5kIG9mIG5lZWQgdG8gY2FwdHVyZSB0aGUgYWN0aW9uIGF0IHRoZSBrZXlkb3duIHBoYXNlLlxuXG5cbiAgdmFyIGNoZWNrVGFiID0gZnVuY3Rpb24gY2hlY2tUYWIoZSkge1xuICAgIHZhciB0YXJnZXQgPSBnZXRBY3R1YWxUYXJnZXQoZSk7XG4gICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgIHZhciBkZXN0aW5hdGlvbk5vZGUgPSBudWxsO1xuXG4gICAgaWYgKHN0YXRlLnRhYmJhYmxlR3JvdXBzLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSB0aGUgdGFyZ2V0IGlzIGFjdHVhbGx5IGNvbnRhaW5lZCBpbiBhIGdyb3VwXG4gICAgICAvLyBOT1RFOiB0aGUgdGFyZ2V0IG1heSBhbHNvIGJlIHRoZSBjb250YWluZXIgaXRzZWxmIGlmIGl0J3MgZm9jdXNhYmxlXG4gICAgICAvLyAgd2l0aCB0YWJJbmRleD0nLTEnIGFuZCB3YXMgZ2l2ZW4gaW5pdGlhbCBmb2N1c1xuICAgICAgdmFyIGNvbnRhaW5lckluZGV4ID0gZmluZENvbnRhaW5lckluZGV4KHRhcmdldCk7XG4gICAgICB2YXIgY29udGFpbmVyR3JvdXAgPSBjb250YWluZXJJbmRleCA+PSAwID8gc3RhdGUuY29udGFpbmVyR3JvdXBzW2NvbnRhaW5lckluZGV4XSA6IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKGNvbnRhaW5lckluZGV4IDwgMCkge1xuICAgICAgICAvLyB0YXJnZXQgbm90IGZvdW5kIGluIGFueSBncm91cDogcXVpdGUgcG9zc2libGUgZm9jdXMgaGFzIGVzY2FwZWQgdGhlIHRyYXAsXG4gICAgICAgIC8vICBzbyBicmluZyBpdCBiYWNrIGluIHRvLi4uXG4gICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgLy8gLi4udGhlIGxhc3Qgbm9kZSBpbiB0aGUgbGFzdCBncm91cFxuICAgICAgICAgIGRlc3RpbmF0aW9uTm9kZSA9IHN0YXRlLnRhYmJhYmxlR3JvdXBzW3N0YXRlLnRhYmJhYmxlR3JvdXBzLmxlbmd0aCAtIDFdLmxhc3RUYWJiYWJsZU5vZGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gLi4udGhlIGZpcnN0IG5vZGUgaW4gdGhlIGZpcnN0IGdyb3VwXG4gICAgICAgICAgZGVzdGluYXRpb25Ob2RlID0gc3RhdGUudGFiYmFibGVHcm91cHNbMF0uZmlyc3RUYWJiYWJsZU5vZGU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICAvLyBSRVZFUlNFXG4gICAgICAgIC8vIGlzIHRoZSB0YXJnZXQgdGhlIGZpcnN0IHRhYmJhYmxlIG5vZGUgaW4gYSBncm91cD9cbiAgICAgICAgdmFyIHN0YXJ0T2ZHcm91cEluZGV4ID0gZmluZEluZGV4KHN0YXRlLnRhYmJhYmxlR3JvdXBzLCBmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgICB2YXIgZmlyc3RUYWJiYWJsZU5vZGUgPSBfcmVmMi5maXJzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0ID09PSBmaXJzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHN0YXJ0T2ZHcm91cEluZGV4IDwgMCAmJiAoY29udGFpbmVyR3JvdXAuY29udGFpbmVyID09PSB0YXJnZXQgfHwgdGFiYmFibGUuaXNGb2N1c2FibGUodGFyZ2V0LCBjb25maWcudGFiYmFibGVPcHRpb25zKSAmJiAhdGFiYmFibGUuaXNUYWJiYWJsZSh0YXJnZXQsIGNvbmZpZy50YWJiYWJsZU9wdGlvbnMpICYmICFjb250YWluZXJHcm91cC5uZXh0VGFiYmFibGVOb2RlKHRhcmdldCwgZmFsc2UpKSkge1xuICAgICAgICAgIC8vIGFuIGV4Y2VwdGlvbiBjYXNlIHdoZXJlIHRoZSB0YXJnZXQgaXMgZWl0aGVyIHRoZSBjb250YWluZXIgaXRzZWxmLCBvclxuICAgICAgICAgIC8vICBhIG5vbi10YWJiYWJsZSBub2RlIHRoYXQgd2FzIGdpdmVuIGZvY3VzIChpLmUuIHRhYmluZGV4IGlzIG5lZ2F0aXZlXG4gICAgICAgICAgLy8gIGFuZCB1c2VyIGNsaWNrZWQgb24gaXQgb3Igbm9kZSB3YXMgcHJvZ3JhbW1hdGljYWxseSBnaXZlbiBmb2N1cylcbiAgICAgICAgICAvLyAgYW5kIGlzIG5vdCBmb2xsb3dlZCBieSBhbnkgb3RoZXIgdGFiYmFibGUgbm9kZSwgaW4gd2hpY2hcbiAgICAgICAgICAvLyAgY2FzZSwgd2Ugc2hvdWxkIGhhbmRsZSBzaGlmdCt0YWIgYXMgaWYgZm9jdXMgd2VyZSBvbiB0aGUgY29udGFpbmVyJ3NcbiAgICAgICAgICAvLyAgZmlyc3QgdGFiYmFibGUgbm9kZSwgYW5kIGdvIHRvIHRoZSBsYXN0IHRhYmJhYmxlIG5vZGUgb2YgdGhlIExBU1QgZ3JvdXBcbiAgICAgICAgICBzdGFydE9mR3JvdXBJbmRleCA9IGNvbnRhaW5lckluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXJ0T2ZHcm91cEluZGV4ID49IDApIHtcbiAgICAgICAgICAvLyBZRVM6IHRoZW4gc2hpZnQrdGFiIHNob3VsZCBnbyB0byB0aGUgbGFzdCB0YWJiYWJsZSBub2RlIGluIHRoZVxuICAgICAgICAgIC8vICBwcmV2aW91cyBncm91cCAoYW5kIHdyYXAgYXJvdW5kIHRvIHRoZSBsYXN0IHRhYmJhYmxlIG5vZGUgb2ZcbiAgICAgICAgICAvLyAgdGhlIExBU1QgZ3JvdXAgaWYgaXQncyB0aGUgZmlyc3QgdGFiYmFibGUgbm9kZSBvZiB0aGUgRklSU1QgZ3JvdXApXG4gICAgICAgICAgdmFyIGRlc3RpbmF0aW9uR3JvdXBJbmRleCA9IHN0YXJ0T2ZHcm91cEluZGV4ID09PSAwID8gc3RhdGUudGFiYmFibGVHcm91cHMubGVuZ3RoIC0gMSA6IHN0YXJ0T2ZHcm91cEluZGV4IC0gMTtcbiAgICAgICAgICB2YXIgZGVzdGluYXRpb25Hcm91cCA9IHN0YXRlLnRhYmJhYmxlR3JvdXBzW2Rlc3RpbmF0aW9uR3JvdXBJbmRleF07XG4gICAgICAgICAgZGVzdGluYXRpb25Ob2RlID0gZGVzdGluYXRpb25Hcm91cC5sYXN0VGFiYmFibGVOb2RlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGT1JXQVJEXG4gICAgICAgIC8vIGlzIHRoZSB0YXJnZXQgdGhlIGxhc3QgdGFiYmFibGUgbm9kZSBpbiBhIGdyb3VwP1xuICAgICAgICB2YXIgbGFzdE9mR3JvdXBJbmRleCA9IGZpbmRJbmRleChzdGF0ZS50YWJiYWJsZUdyb3VwcywgZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICAgICAgdmFyIGxhc3RUYWJiYWJsZU5vZGUgPSBfcmVmMy5sYXN0VGFiYmFibGVOb2RlO1xuICAgICAgICAgIHJldHVybiB0YXJnZXQgPT09IGxhc3RUYWJiYWJsZU5vZGU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChsYXN0T2ZHcm91cEluZGV4IDwgMCAmJiAoY29udGFpbmVyR3JvdXAuY29udGFpbmVyID09PSB0YXJnZXQgfHwgdGFiYmFibGUuaXNGb2N1c2FibGUodGFyZ2V0LCBjb25maWcudGFiYmFibGVPcHRpb25zKSAmJiAhdGFiYmFibGUuaXNUYWJiYWJsZSh0YXJnZXQsIGNvbmZpZy50YWJiYWJsZU9wdGlvbnMpICYmICFjb250YWluZXJHcm91cC5uZXh0VGFiYmFibGVOb2RlKHRhcmdldCkpKSB7XG4gICAgICAgICAgLy8gYW4gZXhjZXB0aW9uIGNhc2Ugd2hlcmUgdGhlIHRhcmdldCBpcyB0aGUgY29udGFpbmVyIGl0c2VsZiwgb3JcbiAgICAgICAgICAvLyAgYSBub24tdGFiYmFibGUgbm9kZSB0aGF0IHdhcyBnaXZlbiBmb2N1cyAoaS5lLiB0YWJpbmRleCBpcyBuZWdhdGl2ZVxuICAgICAgICAgIC8vICBhbmQgdXNlciBjbGlja2VkIG9uIGl0IG9yIG5vZGUgd2FzIHByb2dyYW1tYXRpY2FsbHkgZ2l2ZW4gZm9jdXMpXG4gICAgICAgICAgLy8gIGFuZCBpcyBub3QgZm9sbG93ZWQgYnkgYW55IG90aGVyIHRhYmJhYmxlIG5vZGUsIGluIHdoaWNoXG4gICAgICAgICAgLy8gIGNhc2UsIHdlIHNob3VsZCBoYW5kbGUgdGFiIGFzIGlmIGZvY3VzIHdlcmUgb24gdGhlIGNvbnRhaW5lcidzXG4gICAgICAgICAgLy8gIGxhc3QgdGFiYmFibGUgbm9kZSwgYW5kIGdvIHRvIHRoZSBmaXJzdCB0YWJiYWJsZSBub2RlIG9mIHRoZSBGSVJTVCBncm91cFxuICAgICAgICAgIGxhc3RPZkdyb3VwSW5kZXggPSBjb250YWluZXJJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsYXN0T2ZHcm91cEluZGV4ID49IDApIHtcbiAgICAgICAgICAvLyBZRVM6IHRoZW4gdGFiIHNob3VsZCBnbyB0byB0aGUgZmlyc3QgdGFiYmFibGUgbm9kZSBpbiB0aGUgbmV4dFxuICAgICAgICAgIC8vICBncm91cCAoYW5kIHdyYXAgYXJvdW5kIHRvIHRoZSBmaXJzdCB0YWJiYWJsZSBub2RlIG9mIHRoZSBGSVJTVFxuICAgICAgICAgIC8vICBncm91cCBpZiBpdCdzIHRoZSBsYXN0IHRhYmJhYmxlIG5vZGUgb2YgdGhlIExBU1QgZ3JvdXApXG4gICAgICAgICAgdmFyIF9kZXN0aW5hdGlvbkdyb3VwSW5kZXggPSBsYXN0T2ZHcm91cEluZGV4ID09PSBzdGF0ZS50YWJiYWJsZUdyb3Vwcy5sZW5ndGggLSAxID8gMCA6IGxhc3RPZkdyb3VwSW5kZXggKyAxO1xuXG4gICAgICAgICAgdmFyIF9kZXN0aW5hdGlvbkdyb3VwID0gc3RhdGUudGFiYmFibGVHcm91cHNbX2Rlc3RpbmF0aW9uR3JvdXBJbmRleF07XG4gICAgICAgICAgZGVzdGluYXRpb25Ob2RlID0gX2Rlc3RpbmF0aW9uR3JvdXAuZmlyc3RUYWJiYWJsZU5vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTk9URTogdGhlIGZhbGxiYWNrRm9jdXMgb3B0aW9uIGRvZXMgbm90IHN1cHBvcnQgcmV0dXJuaW5nIGZhbHNlIHRvIG9wdC1vdXRcbiAgICAgIGRlc3RpbmF0aW9uTm9kZSA9IGdldE5vZGVGb3JPcHRpb24oJ2ZhbGxiYWNrRm9jdXMnKTtcbiAgICB9XG5cbiAgICBpZiAoZGVzdGluYXRpb25Ob2RlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0cnlGb2N1cyhkZXN0aW5hdGlvbk5vZGUpO1xuICAgIH0gLy8gZWxzZSwgbGV0IHRoZSBicm93c2VyIHRha2UgY2FyZSBvZiBbc2hpZnQrXXRhYiBhbmQgbW92ZSB0aGUgZm9jdXNcblxuICB9O1xuXG4gIHZhciBjaGVja0tleSA9IGZ1bmN0aW9uIGNoZWNrS2V5KGUpIHtcbiAgICBpZiAoaXNFc2NhcGVFdmVudChlKSAmJiB2YWx1ZU9ySGFuZGxlcihjb25maWcuZXNjYXBlRGVhY3RpdmF0ZXMsIGUpICE9PSBmYWxzZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdHJhcC5kZWFjdGl2YXRlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzVGFiRXZlbnQoZSkpIHtcbiAgICAgIGNoZWNrVGFiKGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfTtcblxuICB2YXIgY2hlY2tDbGljayA9IGZ1bmN0aW9uIGNoZWNrQ2xpY2soZSkge1xuICAgIHZhciB0YXJnZXQgPSBnZXRBY3R1YWxUYXJnZXQoZSk7XG5cbiAgICBpZiAoZmluZENvbnRhaW5lckluZGV4KHRhcmdldCkgPj0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZU9ySGFuZGxlcihjb25maWcuY2xpY2tPdXRzaWRlRGVhY3RpdmF0ZXMsIGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlT3JIYW5kbGVyKGNvbmZpZy5hbGxvd091dHNpZGVDbGljaywgZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfTsgLy9cbiAgLy8gRVZFTlQgTElTVEVORVJTXG4gIC8vXG5cblxuICB2YXIgYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuICAgIGlmICghc3RhdGUuYWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBUaGVyZSBjYW4gYmUgb25seSBvbmUgbGlzdGVuaW5nIGZvY3VzIHRyYXAgYXQgYSB0aW1lXG5cblxuICAgIGFjdGl2ZUZvY3VzVHJhcHMuYWN0aXZhdGVUcmFwKHRyYXApOyAvLyBEZWxheSBlbnN1cmVzIHRoYXQgdGhlIGZvY3VzZWQgZWxlbWVudCBkb2Vzbid0IGNhcHR1cmUgdGhlIGV2ZW50XG4gICAgLy8gdGhhdCBjYXVzZWQgdGhlIGZvY3VzIHRyYXAgYWN0aXZhdGlvbi5cblxuICAgIHN0YXRlLmRlbGF5SW5pdGlhbEZvY3VzVGltZXIgPSBjb25maWcuZGVsYXlJbml0aWFsRm9jdXMgPyBkZWxheShmdW5jdGlvbiAoKSB7XG4gICAgICB0cnlGb2N1cyhnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICAgIH0pIDogdHJ5Rm9jdXMoZ2V0SW5pdGlhbEZvY3VzTm9kZSgpKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIGNoZWNrRm9jdXNJbiwgdHJ1ZSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNoZWNrUG9pbnRlckRvd24sIHtcbiAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2hlY2tQb2ludGVyRG93biwge1xuICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tDbGljaywge1xuICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjaGVja0tleSwge1xuICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gICAgcmV0dXJuIHRyYXA7XG4gIH07XG5cbiAgdmFyIHJlbW92ZUxpc3RlbmVycyA9IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICBpZiAoIXN0YXRlLmFjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgY2hlY2tGb2N1c0luLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2hlY2tQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjaGVja1BvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0NsaWNrLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNoZWNrS2V5LCB0cnVlKTtcbiAgICByZXR1cm4gdHJhcDtcbiAgfTsgLy9cbiAgLy8gVFJBUCBERUZJTklUSU9OXG4gIC8vXG5cblxuICB0cmFwID0ge1xuICAgIGdldCBhY3RpdmUoKSB7XG4gICAgICByZXR1cm4gc3RhdGUuYWN0aXZlO1xuICAgIH0sXG5cbiAgICBnZXQgcGF1c2VkKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLnBhdXNlZDtcbiAgICB9LFxuXG4gICAgYWN0aXZhdGU6IGZ1bmN0aW9uIGFjdGl2YXRlKGFjdGl2YXRlT3B0aW9ucykge1xuICAgICAgaWYgKHN0YXRlLmFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgdmFyIG9uQWN0aXZhdGUgPSBnZXRPcHRpb24oYWN0aXZhdGVPcHRpb25zLCAnb25BY3RpdmF0ZScpO1xuICAgICAgdmFyIG9uUG9zdEFjdGl2YXRlID0gZ2V0T3B0aW9uKGFjdGl2YXRlT3B0aW9ucywgJ29uUG9zdEFjdGl2YXRlJyk7XG4gICAgICB2YXIgY2hlY2tDYW5Gb2N1c1RyYXAgPSBnZXRPcHRpb24oYWN0aXZhdGVPcHRpb25zLCAnY2hlY2tDYW5Gb2N1c1RyYXAnKTtcblxuICAgICAgaWYgKCFjaGVja0NhbkZvY3VzVHJhcCkge1xuICAgICAgICB1cGRhdGVUYWJiYWJsZU5vZGVzKCk7XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcbiAgICAgIHN0YXRlLm5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbiA9IGRvYy5hY3RpdmVFbGVtZW50O1xuXG4gICAgICBpZiAob25BY3RpdmF0ZSkge1xuICAgICAgICBvbkFjdGl2YXRlKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBmaW5pc2hBY3RpdmF0aW9uID0gZnVuY3Rpb24gZmluaXNoQWN0aXZhdGlvbigpIHtcbiAgICAgICAgaWYgKGNoZWNrQ2FuRm9jdXNUcmFwKSB7XG4gICAgICAgICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgYWRkTGlzdGVuZXJzKCk7XG5cbiAgICAgICAgaWYgKG9uUG9zdEFjdGl2YXRlKSB7XG4gICAgICAgICAgb25Qb3N0QWN0aXZhdGUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKGNoZWNrQ2FuRm9jdXNUcmFwKSB7XG4gICAgICAgIGNoZWNrQ2FuRm9jdXNUcmFwKHN0YXRlLmNvbnRhaW5lcnMuY29uY2F0KCkpLnRoZW4oZmluaXNoQWN0aXZhdGlvbiwgZmluaXNoQWN0aXZhdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBmaW5pc2hBY3RpdmF0aW9uKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGRlYWN0aXZhdGU6IGZ1bmN0aW9uIGRlYWN0aXZhdGUoZGVhY3RpdmF0ZU9wdGlvbnMpIHtcbiAgICAgIGlmICghc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgb3B0aW9ucyA9IF9vYmplY3RTcHJlYWQyKHtcbiAgICAgICAgb25EZWFjdGl2YXRlOiBjb25maWcub25EZWFjdGl2YXRlLFxuICAgICAgICBvblBvc3REZWFjdGl2YXRlOiBjb25maWcub25Qb3N0RGVhY3RpdmF0ZSxcbiAgICAgICAgY2hlY2tDYW5SZXR1cm5Gb2N1czogY29uZmlnLmNoZWNrQ2FuUmV0dXJuRm9jdXNcbiAgICAgIH0sIGRlYWN0aXZhdGVPcHRpb25zKTtcblxuICAgICAgY2xlYXJUaW1lb3V0KHN0YXRlLmRlbGF5SW5pdGlhbEZvY3VzVGltZXIpOyAvLyBub29wIGlmIHVuZGVmaW5lZFxuXG4gICAgICBzdGF0ZS5kZWxheUluaXRpYWxGb2N1c1RpbWVyID0gdW5kZWZpbmVkO1xuICAgICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICBzdGF0ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgYWN0aXZlRm9jdXNUcmFwcy5kZWFjdGl2YXRlVHJhcCh0cmFwKTtcbiAgICAgIHZhciBvbkRlYWN0aXZhdGUgPSBnZXRPcHRpb24ob3B0aW9ucywgJ29uRGVhY3RpdmF0ZScpO1xuICAgICAgdmFyIG9uUG9zdERlYWN0aXZhdGUgPSBnZXRPcHRpb24ob3B0aW9ucywgJ29uUG9zdERlYWN0aXZhdGUnKTtcbiAgICAgIHZhciBjaGVja0NhblJldHVybkZvY3VzID0gZ2V0T3B0aW9uKG9wdGlvbnMsICdjaGVja0NhblJldHVybkZvY3VzJyk7XG4gICAgICB2YXIgcmV0dXJuRm9jdXMgPSBnZXRPcHRpb24ob3B0aW9ucywgJ3JldHVybkZvY3VzJywgJ3JldHVybkZvY3VzT25EZWFjdGl2YXRlJyk7XG5cbiAgICAgIGlmIChvbkRlYWN0aXZhdGUpIHtcbiAgICAgICAgb25EZWFjdGl2YXRlKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBmaW5pc2hEZWFjdGl2YXRpb24gPSBmdW5jdGlvbiBmaW5pc2hEZWFjdGl2YXRpb24oKSB7XG4gICAgICAgIGRlbGF5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAocmV0dXJuRm9jdXMpIHtcbiAgICAgICAgICAgIHRyeUZvY3VzKGdldFJldHVybkZvY3VzTm9kZShzdGF0ZS5ub2RlRm9jdXNlZEJlZm9yZUFjdGl2YXRpb24pKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAob25Qb3N0RGVhY3RpdmF0ZSkge1xuICAgICAgICAgICAgb25Qb3N0RGVhY3RpdmF0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBpZiAocmV0dXJuRm9jdXMgJiYgY2hlY2tDYW5SZXR1cm5Gb2N1cykge1xuICAgICAgICBjaGVja0NhblJldHVybkZvY3VzKGdldFJldHVybkZvY3VzTm9kZShzdGF0ZS5ub2RlRm9jdXNlZEJlZm9yZUFjdGl2YXRpb24pKS50aGVuKGZpbmlzaERlYWN0aXZhdGlvbiwgZmluaXNoRGVhY3RpdmF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGZpbmlzaERlYWN0aXZhdGlvbigpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBwYXVzZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICBpZiAoc3RhdGUucGF1c2VkIHx8ICFzdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLnBhdXNlZCA9IHRydWU7XG4gICAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgdW5wYXVzZTogZnVuY3Rpb24gdW5wYXVzZSgpIHtcbiAgICAgIGlmICghc3RhdGUucGF1c2VkIHx8ICFzdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgICAgYWRkTGlzdGVuZXJzKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHVwZGF0ZUNvbnRhaW5lckVsZW1lbnRzOiBmdW5jdGlvbiB1cGRhdGVDb250YWluZXJFbGVtZW50cyhjb250YWluZXJFbGVtZW50cykge1xuICAgICAgdmFyIGVsZW1lbnRzQXNBcnJheSA9IFtdLmNvbmNhdChjb250YWluZXJFbGVtZW50cykuZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgc3RhdGUuY29udGFpbmVycyA9IGVsZW1lbnRzQXNBcnJheS5tYXAoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyA/IGRvYy5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpIDogZWxlbWVudDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9OyAvLyBpbml0aWFsaXplIGNvbnRhaW5lciBlbGVtZW50c1xuXG4gIHRyYXAudXBkYXRlQ29udGFpbmVyRWxlbWVudHMoZWxlbWVudHMpO1xuICByZXR1cm4gdHJhcDtcbn07XG5cbmV4cG9ydHMuY3JlYXRlRm9jdXNUcmFwID0gY3JlYXRlRm9jdXNUcmFwO1xuXG5cbn0se1widGFiYmFibGVcIjo1fV0sMzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBBcHBsaWVzIHRoZSA6Zm9jdXMtdmlzaWJsZSBwb2x5ZmlsbCBhdCB0aGUgZ2l2ZW4gc2NvcGUuXG4gICAqIEEgc2NvcGUgaW4gdGhpcyBjYXNlIGlzIGVpdGhlciB0aGUgdG9wLWxldmVsIERvY3VtZW50IG9yIGEgU2hhZG93IFJvb3QuXG4gICAqXG4gICAqIEBwYXJhbSB7KERvY3VtZW50fFNoYWRvd1Jvb3QpfSBzY29wZVxuICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL2ZvY3VzLXZpc2libGVcbiAgICovXG4gIGZ1bmN0aW9uIGFwcGx5Rm9jdXNWaXNpYmxlUG9seWZpbGwoc2NvcGUpIHtcbiAgICB2YXIgaGFkS2V5Ym9hcmRFdmVudCA9IHRydWU7XG4gICAgdmFyIGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5ID0gZmFsc2U7XG4gICAgdmFyIGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5VGltZW91dCA9IG51bGw7XG5cbiAgICB2YXIgaW5wdXRUeXBlc0FsbG93bGlzdCA9IHtcbiAgICAgIHRleHQ6IHRydWUsXG4gICAgICBzZWFyY2g6IHRydWUsXG4gICAgICB1cmw6IHRydWUsXG4gICAgICB0ZWw6IHRydWUsXG4gICAgICBlbWFpbDogdHJ1ZSxcbiAgICAgIHBhc3N3b3JkOiB0cnVlLFxuICAgICAgbnVtYmVyOiB0cnVlLFxuICAgICAgZGF0ZTogdHJ1ZSxcbiAgICAgIG1vbnRoOiB0cnVlLFxuICAgICAgd2VlazogdHJ1ZSxcbiAgICAgIHRpbWU6IHRydWUsXG4gICAgICBkYXRldGltZTogdHJ1ZSxcbiAgICAgICdkYXRldGltZS1sb2NhbCc6IHRydWVcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIGZvciBsZWdhY3kgYnJvd3NlcnMgYW5kIGlmcmFtZXMgd2hpY2ggc29tZXRpbWVzIGZvY3VzXG4gICAgICogZWxlbWVudHMgbGlrZSBkb2N1bWVudCwgYm9keSwgYW5kIG5vbi1pbnRlcmFjdGl2ZSBTVkcuXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzVmFsaWRGb2N1c1RhcmdldChlbCkge1xuICAgICAgaWYgKFxuICAgICAgICBlbCAmJlxuICAgICAgICBlbCAhPT0gZG9jdW1lbnQgJiZcbiAgICAgICAgZWwubm9kZU5hbWUgIT09ICdIVE1MJyAmJlxuICAgICAgICBlbC5ub2RlTmFtZSAhPT0gJ0JPRFknICYmXG4gICAgICAgICdjbGFzc0xpc3QnIGluIGVsICYmXG4gICAgICAgICdjb250YWlucycgaW4gZWwuY2xhc3NMaXN0XG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBzaG91bGQgYXV0b21hdGljYWxseSB0cmlnZ2VyIHRoZVxuICAgICAqIGBmb2N1cy12aXNpYmxlYCBjbGFzcyBiZWluZyBhZGRlZCwgaS5lLiB3aGV0aGVyIGl0IHNob3VsZCBhbHdheXMgbWF0Y2hcbiAgICAgKiBgOmZvY3VzLXZpc2libGVgIHdoZW4gZm9jdXNlZC5cbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBmb2N1c1RyaWdnZXJzS2V5Ym9hcmRNb2RhbGl0eShlbCkge1xuICAgICAgdmFyIHR5cGUgPSBlbC50eXBlO1xuICAgICAgdmFyIHRhZ05hbWUgPSBlbC50YWdOYW1lO1xuXG4gICAgICBpZiAodGFnTmFtZSA9PT0gJ0lOUFVUJyAmJiBpbnB1dFR5cGVzQWxsb3dsaXN0W3R5cGVdICYmICFlbC5yZWFkT25seSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRhZ05hbWUgPT09ICdURVhUQVJFQScgJiYgIWVsLnJlYWRPbmx5KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWwuaXNDb250ZW50RWRpdGFibGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgdGhlIGBmb2N1cy12aXNpYmxlYCBjbGFzcyB0byB0aGUgZ2l2ZW4gZWxlbWVudCBpZiBpdCB3YXMgbm90IGFkZGVkIGJ5XG4gICAgICogdGhlIGF1dGhvci5cbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkRm9jdXNWaXNpYmxlQ2xhc3MoZWwpIHtcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZvY3VzLXZpc2libGUnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKCdmb2N1cy12aXNpYmxlJyk7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZm9jdXMtdmlzaWJsZS1hZGRlZCcsICcnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgdGhlIGBmb2N1cy12aXNpYmxlYCBjbGFzcyBmcm9tIHRoZSBnaXZlbiBlbGVtZW50IGlmIGl0IHdhcyBub3RcbiAgICAgKiBvcmlnaW5hbGx5IGFkZGVkIGJ5IHRoZSBhdXRob3IuXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJlbW92ZUZvY3VzVmlzaWJsZUNsYXNzKGVsKSB7XG4gICAgICBpZiAoIWVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1mb2N1cy12aXNpYmxlLWFkZGVkJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMtdmlzaWJsZScpO1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWZvY3VzLXZpc2libGUtYWRkZWQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGUgbW9zdCByZWNlbnQgdXNlciBpbnRlcmFjdGlvbiB3YXMgdmlhIHRoZSBrZXlib2FyZDtcbiAgICAgKiBhbmQgdGhlIGtleSBwcmVzcyBkaWQgbm90IGluY2x1ZGUgYSBtZXRhLCBhbHQvb3B0aW9uLCBvciBjb250cm9sIGtleTtcbiAgICAgKiB0aGVuIHRoZSBtb2RhbGl0eSBpcyBrZXlib2FyZC4gT3RoZXJ3aXNlLCB0aGUgbW9kYWxpdHkgaXMgbm90IGtleWJvYXJkLlxuICAgICAqIEFwcGx5IGBmb2N1cy12aXNpYmxlYCB0byBhbnkgY3VycmVudCBhY3RpdmUgZWxlbWVudCBhbmQga2VlcCB0cmFja1xuICAgICAqIG9mIG91ciBrZXlib2FyZCBtb2RhbGl0eSBzdGF0ZSB3aXRoIGBoYWRLZXlib2FyZEV2ZW50YC5cbiAgICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBvbktleURvd24oZSkge1xuICAgICAgaWYgKGUubWV0YUtleSB8fCBlLmFsdEtleSB8fCBlLmN0cmxLZXkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNWYWxpZEZvY3VzVGFyZ2V0KHNjb3BlLmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgIGFkZEZvY3VzVmlzaWJsZUNsYXNzKHNjb3BlLmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBoYWRLZXlib2FyZEV2ZW50ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiBhdCBhbnkgcG9pbnQgYSB1c2VyIGNsaWNrcyB3aXRoIGEgcG9pbnRpbmcgZGV2aWNlLCBlbnN1cmUgdGhhdCB3ZSBjaGFuZ2VcbiAgICAgKiB0aGUgbW9kYWxpdHkgYXdheSBmcm9tIGtleWJvYXJkLlxuICAgICAqIFRoaXMgYXZvaWRzIHRoZSBzaXR1YXRpb24gd2hlcmUgYSB1c2VyIHByZXNzZXMgYSBrZXkgb24gYW4gYWxyZWFkeSBmb2N1c2VkXG4gICAgICogZWxlbWVudCwgYW5kIHRoZW4gY2xpY2tzIG9uIGEgZGlmZmVyZW50IGVsZW1lbnQsIGZvY3VzaW5nIGl0IHdpdGggYVxuICAgICAqIHBvaW50aW5nIGRldmljZSwgd2hpbGUgd2Ugc3RpbGwgdGhpbmsgd2UncmUgaW4ga2V5Ym9hcmQgbW9kYWxpdHkuXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9uUG9pbnRlckRvd24oZSkge1xuICAgICAgaGFkS2V5Ym9hcmRFdmVudCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIGBmb2N1c2AsIGFkZCB0aGUgYGZvY3VzLXZpc2libGVgIGNsYXNzIHRvIHRoZSB0YXJnZXQgaWY6XG4gICAgICogLSB0aGUgdGFyZ2V0IHJlY2VpdmVkIGZvY3VzIGFzIGEgcmVzdWx0IG9mIGtleWJvYXJkIG5hdmlnYXRpb24sIG9yXG4gICAgICogLSB0aGUgZXZlbnQgdGFyZ2V0IGlzIGFuIGVsZW1lbnQgdGhhdCB3aWxsIGxpa2VseSByZXF1aXJlIGludGVyYWN0aW9uXG4gICAgICogICB2aWEgdGhlIGtleWJvYXJkIChlLmcuIGEgdGV4dCBib3gpXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9uRm9jdXMoZSkge1xuICAgICAgLy8gUHJldmVudCBJRSBmcm9tIGZvY3VzaW5nIHRoZSBkb2N1bWVudCBvciBIVE1MIGVsZW1lbnQuXG4gICAgICBpZiAoIWlzVmFsaWRGb2N1c1RhcmdldChlLnRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaGFkS2V5Ym9hcmRFdmVudCB8fCBmb2N1c1RyaWdnZXJzS2V5Ym9hcmRNb2RhbGl0eShlLnRhcmdldCkpIHtcbiAgICAgICAgYWRkRm9jdXNWaXNpYmxlQ2xhc3MoZS50YXJnZXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIGBibHVyYCwgcmVtb3ZlIHRoZSBgZm9jdXMtdmlzaWJsZWAgY2xhc3MgZnJvbSB0aGUgdGFyZ2V0LlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBvbkJsdXIoZSkge1xuICAgICAgaWYgKCFpc1ZhbGlkRm9jdXNUYXJnZXQoZS50YXJnZXQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZvY3VzLXZpc2libGUnKSB8fFxuICAgICAgICBlLnRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RhdGEtZm9jdXMtdmlzaWJsZS1hZGRlZCcpXG4gICAgICApIHtcbiAgICAgICAgLy8gVG8gZGV0ZWN0IGEgdGFiL3dpbmRvdyBzd2l0Y2gsIHdlIGxvb2sgZm9yIGEgYmx1ciBldmVudCBmb2xsb3dlZFxuICAgICAgICAvLyByYXBpZGx5IGJ5IGEgdmlzaWJpbGl0eSBjaGFuZ2UuXG4gICAgICAgIC8vIElmIHdlIGRvbid0IHNlZSBhIHZpc2liaWxpdHkgY2hhbmdlIHdpdGhpbiAxMDBtcywgaXQncyBwcm9iYWJseSBhXG4gICAgICAgIC8vIHJlZ3VsYXIgZm9jdXMgY2hhbmdlLlxuICAgICAgICBoYWRGb2N1c1Zpc2libGVSZWNlbnRseSA9IHRydWU7XG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoaGFkRm9jdXNWaXNpYmxlUmVjZW50bHlUaW1lb3V0KTtcbiAgICAgICAgaGFkRm9jdXNWaXNpYmxlUmVjZW50bHlUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaGFkRm9jdXNWaXNpYmxlUmVjZW50bHkgPSBmYWxzZTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgcmVtb3ZlRm9jdXNWaXNpYmxlQ2xhc3MoZS50YXJnZXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSB1c2VyIGNoYW5nZXMgdGFicywga2VlcCB0cmFjayBvZiB3aGV0aGVyIG9yIG5vdCB0aGUgcHJldmlvdXNseVxuICAgICAqIGZvY3VzZWQgZWxlbWVudCBoYWQgLmZvY3VzLXZpc2libGUuXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9uVmlzaWJpbGl0eUNoYW5nZShlKSB7XG4gICAgICBpZiAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSAnaGlkZGVuJykge1xuICAgICAgICAvLyBJZiB0aGUgdGFiIGJlY29tZXMgYWN0aXZlIGFnYWluLCB0aGUgYnJvd3NlciB3aWxsIGhhbmRsZSBjYWxsaW5nIGZvY3VzXG4gICAgICAgIC8vIG9uIHRoZSBlbGVtZW50IChTYWZhcmkgYWN0dWFsbHkgY2FsbHMgaXQgdHdpY2UpLlxuICAgICAgICAvLyBJZiB0aGlzIHRhYiBjaGFuZ2UgY2F1c2VkIGEgYmx1ciBvbiBhbiBlbGVtZW50IHdpdGggZm9jdXMtdmlzaWJsZSxcbiAgICAgICAgLy8gcmUtYXBwbHkgdGhlIGNsYXNzIHdoZW4gdGhlIHVzZXIgc3dpdGNoZXMgYmFjayB0byB0aGUgdGFiLlxuICAgICAgICBpZiAoaGFkRm9jdXNWaXNpYmxlUmVjZW50bHkpIHtcbiAgICAgICAgICBoYWRLZXlib2FyZEV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBhZGRJbml0aWFsUG9pbnRlck1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBncm91cCBvZiBsaXN0ZW5lcnMgdG8gZGV0ZWN0IHVzYWdlIG9mIGFueSBwb2ludGluZyBkZXZpY2VzLlxuICAgICAqIFRoZXNlIGxpc3RlbmVycyB3aWxsIGJlIGFkZGVkIHdoZW4gdGhlIHBvbHlmaWxsIGZpcnN0IGxvYWRzLCBhbmQgYW55dGltZVxuICAgICAqIHRoZSB3aW5kb3cgaXMgYmx1cnJlZCwgc28gdGhhdCB0aGV5IGFyZSBhY3RpdmUgd2hlbiB0aGUgd2luZG93IHJlZ2FpbnNcbiAgICAgKiBmb2N1cy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGRJbml0aWFsUG9pbnRlck1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVJbml0aWFsUG9pbnRlck1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSBwb2xmeWlsbCBmaXJzdCBsb2FkcywgYXNzdW1lIHRoZSB1c2VyIGlzIGluIGtleWJvYXJkIG1vZGFsaXR5LlxuICAgICAqIElmIGFueSBldmVudCBpcyByZWNlaXZlZCBmcm9tIGEgcG9pbnRpbmcgZGV2aWNlIChlLmcuIG1vdXNlLCBwb2ludGVyLFxuICAgICAqIHRvdWNoKSwgdHVybiBvZmYga2V5Ym9hcmQgbW9kYWxpdHkuXG4gICAgICogVGhpcyBhY2NvdW50cyBmb3Igc2l0dWF0aW9ucyB3aGVyZSBmb2N1cyBlbnRlcnMgdGhlIHBhZ2UgZnJvbSB0aGUgVVJMIGJhci5cbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgZnVuY3Rpb24gb25Jbml0aWFsUG9pbnRlck1vdmUoZSkge1xuICAgICAgLy8gV29yayBhcm91bmQgYSBTYWZhcmkgcXVpcmsgdGhhdCBmaXJlcyBhIG1vdXNlbW92ZSBvbiA8aHRtbD4gd2hlbmV2ZXIgdGhlXG4gICAgICAvLyB3aW5kb3cgYmx1cnMsIGV2ZW4gaWYgeW91J3JlIHRhYmJpbmcgb3V0IG9mIHRoZSBwYWdlLiDCr1xcXyjjg4QpXy/Cr1xuICAgICAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lICYmIGUudGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdodG1sJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGhhZEtleWJvYXJkRXZlbnQgPSBmYWxzZTtcbiAgICAgIHJlbW92ZUluaXRpYWxQb2ludGVyTW92ZUxpc3RlbmVycygpO1xuICAgIH1cblxuICAgIC8vIEZvciBzb21lIGtpbmRzIG9mIHN0YXRlLCB3ZSBhcmUgaW50ZXJlc3RlZCBpbiBjaGFuZ2VzIGF0IHRoZSBnbG9iYWwgc2NvcGVcbiAgICAvLyBvbmx5LiBGb3IgZXhhbXBsZSwgZ2xvYmFsIHBvaW50ZXIgaW5wdXQsIGdsb2JhbCBrZXkgcHJlc3NlcyBhbmQgZ2xvYmFsXG4gICAgLy8gdmlzaWJpbGl0eSBjaGFuZ2Ugc2hvdWxkIGFmZmVjdCB0aGUgc3RhdGUgYXQgZXZlcnkgc2NvcGU6XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93biwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Qb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBvblBvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Qb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIG9uVmlzaWJpbGl0eUNoYW5nZSwgdHJ1ZSk7XG5cbiAgICBhZGRJbml0aWFsUG9pbnRlck1vdmVMaXN0ZW5lcnMoKTtcblxuICAgIC8vIEZvciBmb2N1cyBhbmQgYmx1ciwgd2Ugc3BlY2lmaWNhbGx5IGNhcmUgYWJvdXQgc3RhdGUgY2hhbmdlcyBpbiB0aGUgbG9jYWxcbiAgICAvLyBzY29wZS4gVGhpcyBpcyBiZWNhdXNlIGZvY3VzIC8gYmx1ciBldmVudHMgdGhhdCBvcmlnaW5hdGUgZnJvbSB3aXRoaW4gYVxuICAgIC8vIHNoYWRvdyByb290IGFyZSBub3QgcmUtZGlzcGF0Y2hlZCBmcm9tIHRoZSBob3N0IGVsZW1lbnQgaWYgaXQgd2FzIGFscmVhZHlcbiAgICAvLyB0aGUgYWN0aXZlIGVsZW1lbnQgaW4gaXRzIG93biBzY29wZTpcbiAgICBzY29wZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIG9uRm9jdXMsIHRydWUpO1xuICAgIHNjb3BlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIsIHRydWUpO1xuXG4gICAgLy8gV2UgZGV0ZWN0IHRoYXQgYSBub2RlIGlzIGEgU2hhZG93Um9vdCBieSBlbnN1cmluZyB0aGF0IGl0IGlzIGFcbiAgICAvLyBEb2N1bWVudEZyYWdtZW50IGFuZCBhbHNvIGhhcyBhIGhvc3QgcHJvcGVydHkuIFRoaXMgY2hlY2sgY292ZXJzIG5hdGl2ZVxuICAgIC8vIGltcGxlbWVudGF0aW9uIGFuZCBwb2x5ZmlsbCBpbXBsZW1lbnRhdGlvbiB0cmFuc3BhcmVudGx5LiBJZiB3ZSBvbmx5IGNhcmVkXG4gICAgLy8gYWJvdXQgdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiwgd2UgY291bGQganVzdCBjaGVjayBpZiB0aGUgc2NvcGUgd2FzXG4gICAgLy8gYW4gaW5zdGFuY2Ugb2YgYSBTaGFkb3dSb290LlxuICAgIGlmIChzY29wZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFICYmIHNjb3BlLmhvc3QpIHtcbiAgICAgIC8vIFNpbmNlIGEgU2hhZG93Um9vdCBpcyBhIHNwZWNpYWwga2luZCBvZiBEb2N1bWVudEZyYWdtZW50LCBpdCBkb2VzIG5vdFxuICAgICAgLy8gaGF2ZSBhIHJvb3QgZWxlbWVudCB0byBhZGQgYSBjbGFzcyB0by4gU28sIHdlIGFkZCB0aGlzIGF0dHJpYnV0ZSB0byB0aGVcbiAgICAgIC8vIGhvc3QgZWxlbWVudCBpbnN0ZWFkOlxuICAgICAgc2NvcGUuaG9zdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtanMtZm9jdXMtdmlzaWJsZScsICcnKTtcbiAgICB9IGVsc2UgaWYgKHNjb3BlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX05PREUpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdqcy1mb2N1cy12aXNpYmxlJyk7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWpzLWZvY3VzLXZpc2libGUnLCAnJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gSXQgaXMgaW1wb3J0YW50IHRvIHdyYXAgYWxsIHJlZmVyZW5jZXMgdG8gZ2xvYmFsIHdpbmRvdyBhbmQgZG9jdW1lbnQgaW5cbiAgLy8gdGhlc2UgY2hlY2tzIHRvIHN1cHBvcnQgc2VydmVyLXNpZGUgcmVuZGVyaW5nIHVzZSBjYXNlc1xuICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL2ZvY3VzLXZpc2libGUvaXNzdWVzLzE5OVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIE1ha2UgdGhlIHBvbHlmaWxsIGhlbHBlciBnbG9iYWxseSBhdmFpbGFibGUuIFRoaXMgY2FuIGJlIHVzZWQgYXMgYSBzaWduYWxcbiAgICAvLyB0byBpbnRlcmVzdGVkIGxpYnJhcmllcyB0aGF0IHdpc2ggdG8gY29vcmRpbmF0ZSB3aXRoIHRoZSBwb2x5ZmlsbCBmb3IgZS5nLixcbiAgICAvLyBhcHBseWluZyB0aGUgcG9seWZpbGwgdG8gYSBzaGFkb3cgcm9vdDpcbiAgICB3aW5kb3cuYXBwbHlGb2N1c1Zpc2libGVQb2x5ZmlsbCA9IGFwcGx5Rm9jdXNWaXNpYmxlUG9seWZpbGw7XG5cbiAgICAvLyBOb3RpZnkgaW50ZXJlc3RlZCBsaWJyYXJpZXMgb2YgdGhlIHBvbHlmaWxsJ3MgcHJlc2VuY2UsIGluIGNhc2UgdGhlXG4gICAgLy8gcG9seWZpbGwgd2FzIGxvYWRlZCBsYXppbHk6XG4gICAgdmFyIGV2ZW50O1xuXG4gICAgdHJ5IHtcbiAgICAgIGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdmb2N1cy12aXNpYmxlLXBvbHlmaWxsLXJlYWR5Jyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIElFMTEgZG9lcyBub3Qgc3VwcG9ydCB1c2luZyBDdXN0b21FdmVudCBhcyBhIGNvbnN0cnVjdG9yIGRpcmVjdGx5OlxuICAgICAgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgIGV2ZW50LmluaXRDdXN0b21FdmVudCgnZm9jdXMtdmlzaWJsZS1wb2x5ZmlsbC1yZWFkeScsIGZhbHNlLCBmYWxzZSwge30pO1xuICAgIH1cblxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gQXBwbHkgdGhlIHBvbHlmaWxsIHRvIHRoZSBnbG9iYWwgZG9jdW1lbnQsIHNvIHRoYXQgbm8gSmF2YVNjcmlwdFxuICAgIC8vIGNvb3JkaW5hdGlvbiBpcyByZXF1aXJlZCB0byB1c2UgdGhlIHBvbHlmaWxsIGluIHRoZSB0b3AtbGV2ZWwgZG9jdW1lbnQ6XG4gICAgYXBwbHlGb2N1c1Zpc2libGVQb2x5ZmlsbChkb2N1bWVudCk7XG4gIH1cblxufSkpKTtcblxufSx7fV0sNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJzY3JvbGxMb2NrXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInNjcm9sbExvY2tcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvdG9vbHMuanNcbnZhciBhcmd1bWVudEFzQXJyYXkgPSBmdW5jdGlvbiBhcmd1bWVudEFzQXJyYXkoYXJndW1lbnQpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJndW1lbnQpID8gYXJndW1lbnQgOiBbYXJndW1lbnRdO1xufTtcbnZhciBpc0VsZW1lbnQgPSBmdW5jdGlvbiBpc0VsZW1lbnQodGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXQgaW5zdGFuY2VvZiBOb2RlO1xufTtcbnZhciBpc0VsZW1lbnRMaXN0ID0gZnVuY3Rpb24gaXNFbGVtZW50TGlzdChub2RlTGlzdCkge1xuICByZXR1cm4gbm9kZUxpc3QgaW5zdGFuY2VvZiBOb2RlTGlzdDtcbn07XG52YXIgZWFjaE5vZGUgPSBmdW5jdGlvbiBlYWNoTm9kZShub2RlTGlzdCwgY2FsbGJhY2spIHtcbiAgaWYgKG5vZGVMaXN0ICYmIGNhbGxiYWNrKSB7XG4gICAgbm9kZUxpc3QgPSBpc0VsZW1lbnRMaXN0KG5vZGVMaXN0KSA/IG5vZGVMaXN0IDogW25vZGVMaXN0XTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjYWxsYmFjayhub2RlTGlzdFtpXSwgaSwgbm9kZUxpc3QubGVuZ3RoKSA9PT0gdHJ1ZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG52YXIgdGhyb3dFcnJvciA9IGZ1bmN0aW9uIHRocm93RXJyb3IobWVzc2FnZSkge1xuICByZXR1cm4gY29uc29sZS5lcnJvcihcIltzY3JvbGwtbG9ja10gXCIuY29uY2F0KG1lc3NhZ2UpKTtcbn07XG52YXIgYXJyYXlBc1NlbGVjdG9yID0gZnVuY3Rpb24gYXJyYXlBc1NlbGVjdG9yKGFycmF5KSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgIHZhciBzZWxlY3RvciA9IGFycmF5LmpvaW4oJywgJyk7XG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9XG59O1xudmFyIG5vZGVMaXN0QXNBcnJheSA9IGZ1bmN0aW9uIG5vZGVMaXN0QXNBcnJheShub2RlTGlzdCkge1xuICB2YXIgbm9kZXMgPSBbXTtcbiAgZWFjaE5vZGUobm9kZUxpc3QsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGVzLnB1c2gobm9kZSk7XG4gIH0pO1xuICByZXR1cm4gbm9kZXM7XG59O1xudmFyIGZpbmRQYXJlbnRCeVNlbGVjdG9yID0gZnVuY3Rpb24gZmluZFBhcmVudEJ5U2VsZWN0b3IoJGVsLCBzZWxlY3Rvcikge1xuICB2YXIgc2VsZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogdHJ1ZTtcbiAgdmFyICRyb290ID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBkb2N1bWVudDtcblxuICBpZiAoc2VsZiAmJiBub2RlTGlzdEFzQXJyYXkoJHJvb3QucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpLmluZGV4T2YoJGVsKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gJGVsO1xuICB9XG5cbiAgd2hpbGUgKCgkZWwgPSAkZWwucGFyZW50RWxlbWVudCkgJiYgbm9kZUxpc3RBc0FycmF5KCRyb290LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKS5pbmRleE9mKCRlbCkgPT09IC0xKSB7XG4gICAgO1xuICB9XG5cbiAgcmV0dXJuICRlbDtcbn07XG52YXIgZWxlbWVudEhhc1NlbGVjdG9yID0gZnVuY3Rpb24gZWxlbWVudEhhc1NlbGVjdG9yKCRlbCwgc2VsZWN0b3IpIHtcbiAgdmFyICRyb290ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBkb2N1bWVudDtcbiAgdmFyIGhhcyA9IG5vZGVMaXN0QXNBcnJheSgkcm9vdC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkuaW5kZXhPZigkZWwpICE9PSAtMTtcbiAgcmV0dXJuIGhhcztcbn07XG52YXIgZWxlbWVudEhhc092ZXJmbG93SGlkZGVuID0gZnVuY3Rpb24gZWxlbWVudEhhc092ZXJmbG93SGlkZGVuKCRlbCkge1xuICBpZiAoJGVsKSB7XG4gICAgdmFyIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKCRlbCk7XG4gICAgdmFyIG92ZXJmbG93SXNIaWRkZW4gPSBjb21wdXRlZFN0eWxlLm92ZXJmbG93ID09PSAnaGlkZGVuJztcbiAgICByZXR1cm4gb3ZlcmZsb3dJc0hpZGRlbjtcbiAgfVxufTtcbnZhciBlbGVtZW50U2Nyb2xsVG9wT25TdGFydCA9IGZ1bmN0aW9uIGVsZW1lbnRTY3JvbGxUb3BPblN0YXJ0KCRlbCkge1xuICBpZiAoJGVsKSB7XG4gICAgaWYgKGVsZW1lbnRIYXNPdmVyZmxvd0hpZGRlbigkZWwpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgc2Nyb2xsVG9wID0gJGVsLnNjcm9sbFRvcDtcbiAgICByZXR1cm4gc2Nyb2xsVG9wIDw9IDA7XG4gIH1cbn07XG52YXIgZWxlbWVudFNjcm9sbFRvcE9uRW5kID0gZnVuY3Rpb24gZWxlbWVudFNjcm9sbFRvcE9uRW5kKCRlbCkge1xuICBpZiAoJGVsKSB7XG4gICAgaWYgKGVsZW1lbnRIYXNPdmVyZmxvd0hpZGRlbigkZWwpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgc2Nyb2xsVG9wID0gJGVsLnNjcm9sbFRvcDtcbiAgICB2YXIgc2Nyb2xsSGVpZ2h0ID0gJGVsLnNjcm9sbEhlaWdodDtcbiAgICB2YXIgc2Nyb2xsVG9wV2l0aEhlaWdodCA9IHNjcm9sbFRvcCArICRlbC5vZmZzZXRIZWlnaHQ7XG4gICAgcmV0dXJuIHNjcm9sbFRvcFdpdGhIZWlnaHQgPj0gc2Nyb2xsSGVpZ2h0O1xuICB9XG59O1xudmFyIGVsZW1lbnRTY3JvbGxMZWZ0T25TdGFydCA9IGZ1bmN0aW9uIGVsZW1lbnRTY3JvbGxMZWZ0T25TdGFydCgkZWwpIHtcbiAgaWYgKCRlbCkge1xuICAgIGlmIChlbGVtZW50SGFzT3ZlcmZsb3dIaWRkZW4oJGVsKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIHNjcm9sbExlZnQgPSAkZWwuc2Nyb2xsTGVmdDtcbiAgICByZXR1cm4gc2Nyb2xsTGVmdCA8PSAwO1xuICB9XG59O1xudmFyIGVsZW1lbnRTY3JvbGxMZWZ0T25FbmQgPSBmdW5jdGlvbiBlbGVtZW50U2Nyb2xsTGVmdE9uRW5kKCRlbCkge1xuICBpZiAoJGVsKSB7XG4gICAgaWYgKGVsZW1lbnRIYXNPdmVyZmxvd0hpZGRlbigkZWwpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgc2Nyb2xsTGVmdCA9ICRlbC5zY3JvbGxMZWZ0O1xuICAgIHZhciBzY3JvbGxXaWR0aCA9ICRlbC5zY3JvbGxXaWR0aDtcbiAgICB2YXIgc2Nyb2xsTGVmdFdpdGhXaWR0aCA9IHNjcm9sbExlZnQgKyAkZWwub2Zmc2V0V2lkdGg7XG4gICAgcmV0dXJuIHNjcm9sbExlZnRXaXRoV2lkdGggPj0gc2Nyb2xsV2lkdGg7XG4gIH1cbn07XG52YXIgZWxlbWVudElzU2Nyb2xsYWJsZUZpZWxkID0gZnVuY3Rpb24gZWxlbWVudElzU2Nyb2xsYWJsZUZpZWxkKCRlbCkge1xuICB2YXIgc2VsZWN0b3IgPSAndGV4dGFyZWEsIFtjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCJdJztcbiAgcmV0dXJuIGVsZW1lbnRIYXNTZWxlY3RvcigkZWwsIHNlbGVjdG9yKTtcbn07XG52YXIgZWxlbWVudElzSW5wdXRSYW5nZSA9IGZ1bmN0aW9uIGVsZW1lbnRJc0lucHV0UmFuZ2UoJGVsKSB7XG4gIHZhciBzZWxlY3RvciA9ICdpbnB1dFt0eXBlPVwicmFuZ2VcIl0nO1xuICByZXR1cm4gZWxlbWVudEhhc1NlbGVjdG9yKCRlbCwgc2VsZWN0b3IpO1xufTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3Njcm9sbC1sb2NrLmpzXG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGlzYWJsZVBhZ2VTY3JvbGxcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBkaXNhYmxlUGFnZVNjcm9sbDsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZW5hYmxlUGFnZVNjcm9sbFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGVuYWJsZVBhZ2VTY3JvbGw7IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImdldFNjcm9sbFN0YXRlXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gZ2V0U2Nyb2xsU3RhdGU7IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImNsZWFyUXVldWVTY3JvbGxMb2Nrc1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGNsZWFyUXVldWVTY3JvbGxMb2NrczsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZ2V0VGFyZ2V0U2Nyb2xsQmFyV2lkdGhcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBzY3JvbGxfbG9ja19nZXRUYXJnZXRTY3JvbGxCYXJXaWR0aDsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZ2V0Q3VycmVudFRhcmdldFNjcm9sbEJhcldpZHRoXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc2Nyb2xsX2xvY2tfZ2V0Q3VycmVudFRhcmdldFNjcm9sbEJhcldpZHRoOyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJnZXRQYWdlU2Nyb2xsQmFyV2lkdGhcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBnZXRQYWdlU2Nyb2xsQmFyV2lkdGg7IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImdldEN1cnJlbnRQYWdlU2Nyb2xsQmFyV2lkdGhcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBnZXRDdXJyZW50UGFnZVNjcm9sbEJhcldpZHRoOyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJhZGRTY3JvbGxhYmxlVGFyZ2V0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc2Nyb2xsX2xvY2tfYWRkU2Nyb2xsYWJsZVRhcmdldDsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwicmVtb3ZlU2Nyb2xsYWJsZVRhcmdldFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHNjcm9sbF9sb2NrX3JlbW92ZVNjcm9sbGFibGVUYXJnZXQ7IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImFkZFNjcm9sbGFibGVTZWxlY3RvclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHNjcm9sbF9sb2NrX2FkZFNjcm9sbGFibGVTZWxlY3RvcjsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwicmVtb3ZlU2Nyb2xsYWJsZVNlbGVjdG9yXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc2Nyb2xsX2xvY2tfcmVtb3ZlU2Nyb2xsYWJsZVNlbGVjdG9yOyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJhZGRMb2NrYWJsZVRhcmdldFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHNjcm9sbF9sb2NrX2FkZExvY2thYmxlVGFyZ2V0OyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJhZGRMb2NrYWJsZVNlbGVjdG9yXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc2Nyb2xsX2xvY2tfYWRkTG9ja2FibGVTZWxlY3RvcjsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwic2V0RmlsbEdhcE1ldGhvZFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHNjcm9sbF9sb2NrX3NldEZpbGxHYXBNZXRob2Q7IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImFkZEZpbGxHYXBUYXJnZXRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBzY3JvbGxfbG9ja19hZGRGaWxsR2FwVGFyZ2V0OyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJyZW1vdmVGaWxsR2FwVGFyZ2V0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc2Nyb2xsX2xvY2tfcmVtb3ZlRmlsbEdhcFRhcmdldDsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiYWRkRmlsbEdhcFNlbGVjdG9yXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc2Nyb2xsX2xvY2tfYWRkRmlsbEdhcFNlbGVjdG9yOyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJyZW1vdmVGaWxsR2FwU2VsZWN0b3JcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBzY3JvbGxfbG9ja19yZW1vdmVGaWxsR2FwU2VsZWN0b3I7IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcInJlZmlsbEdhcHNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiByZWZpbGxHYXBzOyB9KTtcbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykgeyBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlOyB9KSk7IH0gb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuXG52YXIgRklMTF9HQVBfQVZBSUxBQkxFX01FVEhPRFMgPSBbJ3BhZGRpbmcnLCAnbWFyZ2luJywgJ3dpZHRoJywgJ21heC13aWR0aCcsICdub25lJ107XG52YXIgVE9VQ0hfRElSRUNUSU9OX0RFVEVDVF9PRkZTRVQgPSAzO1xudmFyIHN0YXRlID0ge1xuICBzY3JvbGw6IHRydWUsXG4gIHF1ZXVlOiAwLFxuICBzY3JvbGxhYmxlU2VsZWN0b3JzOiBbJ1tkYXRhLXNjcm9sbC1sb2NrLXNjcm9sbGFibGVdJ10sXG4gIGxvY2thYmxlU2VsZWN0b3JzOiBbJ2JvZHknLCAnW2RhdGEtc2Nyb2xsLWxvY2stbG9ja2FibGVdJ10sXG4gIGZpbGxHYXBTZWxlY3RvcnM6IFsnYm9keScsICdbZGF0YS1zY3JvbGwtbG9jay1maWxsLWdhcF0nLCAnW2RhdGEtc2Nyb2xsLWxvY2stbG9ja2FibGVdJ10sXG4gIGZpbGxHYXBNZXRob2Q6IEZJTExfR0FQX0FWQUlMQUJMRV9NRVRIT0RTWzBdLFxuICAvL1xuICBzdGFydFRvdWNoWTogMCxcbiAgc3RhcnRUb3VjaFg6IDBcbn07XG52YXIgZGlzYWJsZVBhZ2VTY3JvbGwgPSBmdW5jdGlvbiBkaXNhYmxlUGFnZVNjcm9sbCh0YXJnZXQpIHtcbiAgaWYgKHN0YXRlLnF1ZXVlIDw9IDApIHtcbiAgICBzdGF0ZS5zY3JvbGwgPSBmYWxzZTtcbiAgICBzY3JvbGxfbG9ja19oaWRlTG9ja2FibGVPdmVyZmxvdygpO1xuICAgIGZpbGxHYXBzKCk7XG4gIH1cblxuICBzY3JvbGxfbG9ja19hZGRTY3JvbGxhYmxlVGFyZ2V0KHRhcmdldCk7XG4gIHN0YXRlLnF1ZXVlKys7XG59O1xudmFyIGVuYWJsZVBhZ2VTY3JvbGwgPSBmdW5jdGlvbiBlbmFibGVQYWdlU2Nyb2xsKHRhcmdldCkge1xuICBzdGF0ZS5xdWV1ZSA+IDAgJiYgc3RhdGUucXVldWUtLTtcblxuICBpZiAoc3RhdGUucXVldWUgPD0gMCkge1xuICAgIHN0YXRlLnNjcm9sbCA9IHRydWU7XG4gICAgc2Nyb2xsX2xvY2tfc2hvd0xvY2thYmxlT3ZlcmZsb3coKTtcbiAgICB1bmZpbGxHYXBzKCk7XG4gIH1cblxuICBzY3JvbGxfbG9ja19yZW1vdmVTY3JvbGxhYmxlVGFyZ2V0KHRhcmdldCk7XG59O1xudmFyIGdldFNjcm9sbFN0YXRlID0gZnVuY3Rpb24gZ2V0U2Nyb2xsU3RhdGUoKSB7XG4gIHJldHVybiBzdGF0ZS5zY3JvbGw7XG59O1xudmFyIGNsZWFyUXVldWVTY3JvbGxMb2NrcyA9IGZ1bmN0aW9uIGNsZWFyUXVldWVTY3JvbGxMb2NrcygpIHtcbiAgc3RhdGUucXVldWUgPSAwO1xufTtcbnZhciBzY3JvbGxfbG9ja19nZXRUYXJnZXRTY3JvbGxCYXJXaWR0aCA9IGZ1bmN0aW9uIGdldFRhcmdldFNjcm9sbEJhcldpZHRoKCR0YXJnZXQpIHtcbiAgdmFyIG9ubHlFeGlzdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuXG4gIGlmIChpc0VsZW1lbnQoJHRhcmdldCkpIHtcbiAgICB2YXIgY3VycmVudE92ZXJmbG93WVByb3BlcnR5ID0gJHRhcmdldC5zdHlsZS5vdmVyZmxvd1k7XG5cbiAgICBpZiAob25seUV4aXN0cykge1xuICAgICAgaWYgKCFnZXRTY3JvbGxTdGF0ZSgpKSB7XG4gICAgICAgICR0YXJnZXQuc3R5bGUub3ZlcmZsb3dZID0gJHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stc2F2ZWQtb3ZlcmZsb3cteS1wcm9wZXJ0eScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAkdGFyZ2V0LnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnO1xuICAgIH1cblxuICAgIHZhciB3aWR0aCA9IHNjcm9sbF9sb2NrX2dldEN1cnJlbnRUYXJnZXRTY3JvbGxCYXJXaWR0aCgkdGFyZ2V0KTtcbiAgICAkdGFyZ2V0LnN0eWxlLm92ZXJmbG93WSA9IGN1cnJlbnRPdmVyZmxvd1lQcm9wZXJ0eTtcbiAgICByZXR1cm4gd2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn07XG52YXIgc2Nyb2xsX2xvY2tfZ2V0Q3VycmVudFRhcmdldFNjcm9sbEJhcldpZHRoID0gZnVuY3Rpb24gZ2V0Q3VycmVudFRhcmdldFNjcm9sbEJhcldpZHRoKCR0YXJnZXQpIHtcbiAgaWYgKGlzRWxlbWVudCgkdGFyZ2V0KSkge1xuICAgIGlmICgkdGFyZ2V0ID09PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICB2YXIgZG9jdW1lbnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgdmFyIGN1cnJlbnRXaWR0aCA9IHdpbmRvd1dpZHRoIC0gZG9jdW1lbnRXaWR0aDtcbiAgICAgIHJldHVybiBjdXJyZW50V2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBib3JkZXJMZWZ0V2lkdGhDdXJyZW50UHJvcGVydHkgPSAkdGFyZ2V0LnN0eWxlLmJvcmRlckxlZnRXaWR0aDtcbiAgICAgIHZhciBib3JkZXJSaWdodFdpZHRoQ3VycmVudFByb3BlcnR5ID0gJHRhcmdldC5zdHlsZS5ib3JkZXJSaWdodFdpZHRoO1xuICAgICAgJHRhcmdldC5zdHlsZS5ib3JkZXJMZWZ0V2lkdGggPSAnMHB4JztcbiAgICAgICR0YXJnZXQuc3R5bGUuYm9yZGVyUmlnaHRXaWR0aCA9ICcwcHgnO1xuXG4gICAgICB2YXIgX2N1cnJlbnRXaWR0aCA9ICR0YXJnZXQub2Zmc2V0V2lkdGggLSAkdGFyZ2V0LmNsaWVudFdpZHRoO1xuXG4gICAgICAkdGFyZ2V0LnN0eWxlLmJvcmRlckxlZnRXaWR0aCA9IGJvcmRlckxlZnRXaWR0aEN1cnJlbnRQcm9wZXJ0eTtcbiAgICAgICR0YXJnZXQuc3R5bGUuYm9yZGVyUmlnaHRXaWR0aCA9IGJvcmRlclJpZ2h0V2lkdGhDdXJyZW50UHJvcGVydHk7XG4gICAgICByZXR1cm4gX2N1cnJlbnRXaWR0aDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn07XG52YXIgZ2V0UGFnZVNjcm9sbEJhcldpZHRoID0gZnVuY3Rpb24gZ2V0UGFnZVNjcm9sbEJhcldpZHRoKCkge1xuICB2YXIgb25seUV4aXN0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG4gIHJldHVybiBzY3JvbGxfbG9ja19nZXRUYXJnZXRTY3JvbGxCYXJXaWR0aChkb2N1bWVudC5ib2R5LCBvbmx5RXhpc3RzKTtcbn07XG52YXIgZ2V0Q3VycmVudFBhZ2VTY3JvbGxCYXJXaWR0aCA9IGZ1bmN0aW9uIGdldEN1cnJlbnRQYWdlU2Nyb2xsQmFyV2lkdGgoKSB7XG4gIHJldHVybiBzY3JvbGxfbG9ja19nZXRDdXJyZW50VGFyZ2V0U2Nyb2xsQmFyV2lkdGgoZG9jdW1lbnQuYm9keSk7XG59O1xudmFyIHNjcm9sbF9sb2NrX2FkZFNjcm9sbGFibGVUYXJnZXQgPSBmdW5jdGlvbiBhZGRTY3JvbGxhYmxlVGFyZ2V0KHRhcmdldCkge1xuICBpZiAodGFyZ2V0KSB7XG4gICAgdmFyIHRhcmdldHMgPSBhcmd1bWVudEFzQXJyYXkodGFyZ2V0KTtcbiAgICB0YXJnZXRzLm1hcChmdW5jdGlvbiAoJHRhcmdldHMpIHtcbiAgICAgIGVhY2hOb2RlKCR0YXJnZXRzLCBmdW5jdGlvbiAoJHRhcmdldCkge1xuICAgICAgICBpZiAoaXNFbGVtZW50KCR0YXJnZXQpKSB7XG4gICAgICAgICAgJHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stc2Nyb2xsYWJsZScsICcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvd0Vycm9yKFwiXFxcIlwiLmNvbmNhdCgkdGFyZ2V0LCBcIlxcXCIgaXMgbm90IGEgRWxlbWVudC5cIikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcbnZhciBzY3JvbGxfbG9ja19yZW1vdmVTY3JvbGxhYmxlVGFyZ2V0ID0gZnVuY3Rpb24gcmVtb3ZlU2Nyb2xsYWJsZVRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHRhcmdldCkge1xuICAgIHZhciB0YXJnZXRzID0gYXJndW1lbnRBc0FycmF5KHRhcmdldCk7XG4gICAgdGFyZ2V0cy5tYXAoZnVuY3Rpb24gKCR0YXJnZXRzKSB7XG4gICAgICBlYWNoTm9kZSgkdGFyZ2V0cywgZnVuY3Rpb24gKCR0YXJnZXQpIHtcbiAgICAgICAgaWYgKGlzRWxlbWVudCgkdGFyZ2V0KSkge1xuICAgICAgICAgICR0YXJnZXQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNjcm9sbC1sb2NrLXNjcm9sbGFibGUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvd0Vycm9yKFwiXFxcIlwiLmNvbmNhdCgkdGFyZ2V0LCBcIlxcXCIgaXMgbm90IGEgRWxlbWVudC5cIikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcbnZhciBzY3JvbGxfbG9ja19hZGRTY3JvbGxhYmxlU2VsZWN0b3IgPSBmdW5jdGlvbiBhZGRTY3JvbGxhYmxlU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgaWYgKHNlbGVjdG9yKSB7XG4gICAgdmFyIHNlbGVjdG9ycyA9IGFyZ3VtZW50QXNBcnJheShzZWxlY3Rvcik7XG4gICAgc2VsZWN0b3JzLm1hcChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgIHN0YXRlLnNjcm9sbGFibGVTZWxlY3RvcnMucHVzaChzZWxlY3Rvcik7XG4gICAgfSk7XG4gIH1cbn07XG52YXIgc2Nyb2xsX2xvY2tfcmVtb3ZlU2Nyb2xsYWJsZVNlbGVjdG9yID0gZnVuY3Rpb24gcmVtb3ZlU2Nyb2xsYWJsZVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIGlmIChzZWxlY3Rvcikge1xuICAgIHZhciBzZWxlY3RvcnMgPSBhcmd1bWVudEFzQXJyYXkoc2VsZWN0b3IpO1xuICAgIHNlbGVjdG9ycy5tYXAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICBzdGF0ZS5zY3JvbGxhYmxlU2VsZWN0b3JzID0gc3RhdGUuc2Nyb2xsYWJsZVNlbGVjdG9ycy5maWx0ZXIoZnVuY3Rpb24gKHNTZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gc1NlbGVjdG9yICE9PSBzZWxlY3RvcjtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xudmFyIHNjcm9sbF9sb2NrX2FkZExvY2thYmxlVGFyZ2V0ID0gZnVuY3Rpb24gYWRkTG9ja2FibGVUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQpIHtcbiAgICB2YXIgdGFyZ2V0cyA9IGFyZ3VtZW50QXNBcnJheSh0YXJnZXQpO1xuICAgIHRhcmdldHMubWFwKGZ1bmN0aW9uICgkdGFyZ2V0cykge1xuICAgICAgZWFjaE5vZGUoJHRhcmdldHMsIGZ1bmN0aW9uICgkdGFyZ2V0KSB7XG4gICAgICAgIGlmIChpc0VsZW1lbnQoJHRhcmdldCkpIHtcbiAgICAgICAgICAkdGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGwtbG9jay1sb2NrYWJsZScsICcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvd0Vycm9yKFwiXFxcIlwiLmNvbmNhdCgkdGFyZ2V0LCBcIlxcXCIgaXMgbm90IGEgRWxlbWVudC5cIikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmICghZ2V0U2Nyb2xsU3RhdGUoKSkge1xuICAgICAgc2Nyb2xsX2xvY2tfaGlkZUxvY2thYmxlT3ZlcmZsb3coKTtcbiAgICB9XG4gIH1cbn07XG52YXIgc2Nyb2xsX2xvY2tfYWRkTG9ja2FibGVTZWxlY3RvciA9IGZ1bmN0aW9uIGFkZExvY2thYmxlU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgaWYgKHNlbGVjdG9yKSB7XG4gICAgdmFyIHNlbGVjdG9ycyA9IGFyZ3VtZW50QXNBcnJheShzZWxlY3Rvcik7XG4gICAgc2VsZWN0b3JzLm1hcChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgIHN0YXRlLmxvY2thYmxlU2VsZWN0b3JzLnB1c2goc2VsZWN0b3IpO1xuICAgIH0pO1xuXG4gICAgaWYgKCFnZXRTY3JvbGxTdGF0ZSgpKSB7XG4gICAgICBzY3JvbGxfbG9ja19oaWRlTG9ja2FibGVPdmVyZmxvdygpO1xuICAgIH1cblxuICAgIHNjcm9sbF9sb2NrX2FkZEZpbGxHYXBTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH1cbn07XG52YXIgc2Nyb2xsX2xvY2tfc2V0RmlsbEdhcE1ldGhvZCA9IGZ1bmN0aW9uIHNldEZpbGxHYXBNZXRob2QobWV0aG9kKSB7XG4gIGlmIChtZXRob2QpIHtcbiAgICBpZiAoRklMTF9HQVBfQVZBSUxBQkxFX01FVEhPRFMuaW5kZXhPZihtZXRob2QpICE9PSAtMSkge1xuICAgICAgc3RhdGUuZmlsbEdhcE1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIHJlZmlsbEdhcHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG1ldGhvZHMgPSBGSUxMX0dBUF9BVkFJTEFCTEVfTUVUSE9EUy5qb2luKCcsICcpO1xuICAgICAgdGhyb3dFcnJvcihcIlxcXCJcIi5jb25jYXQobWV0aG9kLCBcIlxcXCIgbWV0aG9kIGlzIG5vdCBhdmFpbGFibGUhXFxuQXZhaWxhYmxlIGZpbGwgZ2FwIG1ldGhvZHM6IFwiKS5jb25jYXQobWV0aG9kcywgXCIuXCIpKTtcbiAgICB9XG4gIH1cbn07XG52YXIgc2Nyb2xsX2xvY2tfYWRkRmlsbEdhcFRhcmdldCA9IGZ1bmN0aW9uIGFkZEZpbGxHYXBUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQpIHtcbiAgICB2YXIgdGFyZ2V0cyA9IGFyZ3VtZW50QXNBcnJheSh0YXJnZXQpO1xuICAgIHRhcmdldHMubWFwKGZ1bmN0aW9uICgkdGFyZ2V0cykge1xuICAgICAgZWFjaE5vZGUoJHRhcmdldHMsIGZ1bmN0aW9uICgkdGFyZ2V0KSB7XG4gICAgICAgIGlmIChpc0VsZW1lbnQoJHRhcmdldCkpIHtcbiAgICAgICAgICAkdGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGwtbG9jay1maWxsLWdhcCcsICcnKTtcblxuICAgICAgICAgIGlmICghc3RhdGUuc2Nyb2xsKSB7XG4gICAgICAgICAgICBzY3JvbGxfbG9ja19maWxsR2FwVGFyZ2V0KCR0YXJnZXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvd0Vycm9yKFwiXFxcIlwiLmNvbmNhdCgkdGFyZ2V0LCBcIlxcXCIgaXMgbm90IGEgRWxlbWVudC5cIikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcbnZhciBzY3JvbGxfbG9ja19yZW1vdmVGaWxsR2FwVGFyZ2V0ID0gZnVuY3Rpb24gcmVtb3ZlRmlsbEdhcFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHRhcmdldCkge1xuICAgIHZhciB0YXJnZXRzID0gYXJndW1lbnRBc0FycmF5KHRhcmdldCk7XG4gICAgdGFyZ2V0cy5tYXAoZnVuY3Rpb24gKCR0YXJnZXRzKSB7XG4gICAgICBlYWNoTm9kZSgkdGFyZ2V0cywgZnVuY3Rpb24gKCR0YXJnZXQpIHtcbiAgICAgICAgaWYgKGlzRWxlbWVudCgkdGFyZ2V0KSkge1xuICAgICAgICAgICR0YXJnZXQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNjcm9sbC1sb2NrLWZpbGwtZ2FwJyk7XG5cbiAgICAgICAgICBpZiAoIXN0YXRlLnNjcm9sbCkge1xuICAgICAgICAgICAgc2Nyb2xsX2xvY2tfdW5maWxsR2FwVGFyZ2V0KCR0YXJnZXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvd0Vycm9yKFwiXFxcIlwiLmNvbmNhdCgkdGFyZ2V0LCBcIlxcXCIgaXMgbm90IGEgRWxlbWVudC5cIikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcbnZhciBzY3JvbGxfbG9ja19hZGRGaWxsR2FwU2VsZWN0b3IgPSBmdW5jdGlvbiBhZGRGaWxsR2FwU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgaWYgKHNlbGVjdG9yKSB7XG4gICAgdmFyIHNlbGVjdG9ycyA9IGFyZ3VtZW50QXNBcnJheShzZWxlY3Rvcik7XG4gICAgc2VsZWN0b3JzLm1hcChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgIGlmIChzdGF0ZS5maWxsR2FwU2VsZWN0b3JzLmluZGV4T2Yoc2VsZWN0b3IpID09PSAtMSkge1xuICAgICAgICBzdGF0ZS5maWxsR2FwU2VsZWN0b3JzLnB1c2goc2VsZWN0b3IpO1xuXG4gICAgICAgIGlmICghc3RhdGUuc2Nyb2xsKSB7XG4gICAgICAgICAgc2Nyb2xsX2xvY2tfZmlsbEdhcFNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xudmFyIHNjcm9sbF9sb2NrX3JlbW92ZUZpbGxHYXBTZWxlY3RvciA9IGZ1bmN0aW9uIHJlbW92ZUZpbGxHYXBTZWxlY3RvcihzZWxlY3Rvcikge1xuICBpZiAoc2VsZWN0b3IpIHtcbiAgICB2YXIgc2VsZWN0b3JzID0gYXJndW1lbnRBc0FycmF5KHNlbGVjdG9yKTtcbiAgICBzZWxlY3RvcnMubWFwKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgc3RhdGUuZmlsbEdhcFNlbGVjdG9ycyA9IHN0YXRlLmZpbGxHYXBTZWxlY3RvcnMuZmlsdGVyKGZ1bmN0aW9uIChmU2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIGZTZWxlY3RvciAhPT0gc2VsZWN0b3I7XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFzdGF0ZS5zY3JvbGwpIHtcbiAgICAgICAgc2Nyb2xsX2xvY2tfdW5maWxsR2FwU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xudmFyIHJlZmlsbEdhcHMgPSBmdW5jdGlvbiByZWZpbGxHYXBzKCkge1xuICBpZiAoIXN0YXRlLnNjcm9sbCkge1xuICAgIGZpbGxHYXBzKCk7XG4gIH1cbn07XG5cbnZhciBzY3JvbGxfbG9ja19oaWRlTG9ja2FibGVPdmVyZmxvdyA9IGZ1bmN0aW9uIGhpZGVMb2NrYWJsZU92ZXJmbG93KCkge1xuICB2YXIgc2VsZWN0b3IgPSBhcnJheUFzU2VsZWN0b3Ioc3RhdGUubG9ja2FibGVTZWxlY3RvcnMpO1xuICBzY3JvbGxfbG9ja19oaWRlTG9ja2FibGVPdmVyZmxvd1NlbGVjdG9yKHNlbGVjdG9yKTtcbn07XG5cbnZhciBzY3JvbGxfbG9ja19zaG93TG9ja2FibGVPdmVyZmxvdyA9IGZ1bmN0aW9uIHNob3dMb2NrYWJsZU92ZXJmbG93KCkge1xuICB2YXIgc2VsZWN0b3IgPSBhcnJheUFzU2VsZWN0b3Ioc3RhdGUubG9ja2FibGVTZWxlY3RvcnMpO1xuICBzY3JvbGxfbG9ja19zaG93TG9ja2FibGVPdmVyZmxvd1NlbGVjdG9yKHNlbGVjdG9yKTtcbn07XG5cbnZhciBzY3JvbGxfbG9ja19oaWRlTG9ja2FibGVPdmVyZmxvd1NlbGVjdG9yID0gZnVuY3Rpb24gaGlkZUxvY2thYmxlT3ZlcmZsb3dTZWxlY3RvcihzZWxlY3Rvcikge1xuICB2YXIgJHRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgZWFjaE5vZGUoJHRhcmdldHMsIGZ1bmN0aW9uICgkdGFyZ2V0KSB7XG4gICAgc2Nyb2xsX2xvY2tfaGlkZUxvY2thYmxlT3ZlcmZsb3dUYXJnZXQoJHRhcmdldCk7XG4gIH0pO1xufTtcblxudmFyIHNjcm9sbF9sb2NrX3Nob3dMb2NrYWJsZU92ZXJmbG93U2VsZWN0b3IgPSBmdW5jdGlvbiBzaG93TG9ja2FibGVPdmVyZmxvd1NlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIHZhciAkdGFyZ2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICBlYWNoTm9kZSgkdGFyZ2V0cywgZnVuY3Rpb24gKCR0YXJnZXQpIHtcbiAgICBzY3JvbGxfbG9ja19zaG93TG9ja2FibGVPdmVyZmxvd1RhcmdldCgkdGFyZ2V0KTtcbiAgfSk7XG59O1xuXG52YXIgc2Nyb2xsX2xvY2tfaGlkZUxvY2thYmxlT3ZlcmZsb3dUYXJnZXQgPSBmdW5jdGlvbiBoaWRlTG9ja2FibGVPdmVyZmxvd1RhcmdldCgkdGFyZ2V0KSB7XG4gIGlmIChpc0VsZW1lbnQoJHRhcmdldCkgJiYgJHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stbG9ja2VkJykgIT09ICd0cnVlJykge1xuICAgIHZhciBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoJHRhcmdldCk7XG4gICAgJHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stc2F2ZWQtb3ZlcmZsb3cteS1wcm9wZXJ0eScsIGNvbXB1dGVkU3R5bGUub3ZlcmZsb3dZKTtcbiAgICAkdGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGwtbG9jay1zYXZlZC1pbmxpbmUtb3ZlcmZsb3ctcHJvcGVydHknLCAkdGFyZ2V0LnN0eWxlLm92ZXJmbG93KTtcbiAgICAkdGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGwtbG9jay1zYXZlZC1pbmxpbmUtb3ZlcmZsb3cteS1wcm9wZXJ0eScsICR0YXJnZXQuc3R5bGUub3ZlcmZsb3dZKTtcbiAgICAkdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgJHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stbG9ja2VkJywgJ3RydWUnKTtcbiAgfVxufTtcblxudmFyIHNjcm9sbF9sb2NrX3Nob3dMb2NrYWJsZU92ZXJmbG93VGFyZ2V0ID0gZnVuY3Rpb24gc2hvd0xvY2thYmxlT3ZlcmZsb3dUYXJnZXQoJHRhcmdldCkge1xuICBpZiAoaXNFbGVtZW50KCR0YXJnZXQpICYmICR0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNjcm9sbC1sb2NrLWxvY2tlZCcpID09PSAndHJ1ZScpIHtcbiAgICAkdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stc2F2ZWQtaW5saW5lLW92ZXJmbG93LXByb3BlcnR5Jyk7XG4gICAgJHRhcmdldC5zdHlsZS5vdmVyZmxvd1kgPSAkdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGwtbG9jay1zYXZlZC1pbmxpbmUtb3ZlcmZsb3cteS1wcm9wZXJ0eScpO1xuICAgICR0YXJnZXQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNjcm9sbC1sb2NrLXNhdmVkLW92ZXJmbG93LXByb3BlcnR5Jyk7XG4gICAgJHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stc2F2ZWQtaW5saW5lLW92ZXJmbG93LXByb3BlcnR5Jyk7XG4gICAgJHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stc2F2ZWQtaW5saW5lLW92ZXJmbG93LXktcHJvcGVydHknKTtcbiAgICAkdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zY3JvbGwtbG9jay1sb2NrZWQnKTtcbiAgfVxufTtcblxudmFyIGZpbGxHYXBzID0gZnVuY3Rpb24gZmlsbEdhcHMoKSB7XG4gIHN0YXRlLmZpbGxHYXBTZWxlY3RvcnMubWFwKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgIHNjcm9sbF9sb2NrX2ZpbGxHYXBTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH0pO1xufTtcblxudmFyIHVuZmlsbEdhcHMgPSBmdW5jdGlvbiB1bmZpbGxHYXBzKCkge1xuICBzdGF0ZS5maWxsR2FwU2VsZWN0b3JzLm1hcChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICBzY3JvbGxfbG9ja191bmZpbGxHYXBTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH0pO1xufTtcblxudmFyIHNjcm9sbF9sb2NrX2ZpbGxHYXBTZWxlY3RvciA9IGZ1bmN0aW9uIGZpbGxHYXBTZWxlY3RvcihzZWxlY3Rvcikge1xuICB2YXIgJHRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgdmFyIGlzTG9ja2FibGUgPSBzdGF0ZS5sb2NrYWJsZVNlbGVjdG9ycy5pbmRleE9mKHNlbGVjdG9yKSAhPT0gLTE7XG4gIGVhY2hOb2RlKCR0YXJnZXRzLCBmdW5jdGlvbiAoJHRhcmdldCkge1xuICAgIHNjcm9sbF9sb2NrX2ZpbGxHYXBUYXJnZXQoJHRhcmdldCwgaXNMb2NrYWJsZSk7XG4gIH0pO1xufTtcblxudmFyIHNjcm9sbF9sb2NrX2ZpbGxHYXBUYXJnZXQgPSBmdW5jdGlvbiBmaWxsR2FwVGFyZ2V0KCR0YXJnZXQpIHtcbiAgdmFyIGlzTG9ja2FibGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuXG4gIGlmIChpc0VsZW1lbnQoJHRhcmdldCkpIHtcbiAgICB2YXIgc2Nyb2xsQmFyV2lkdGg7XG5cbiAgICBpZiAoJHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stbG9ja2FibGUnKSA9PT0gJycgfHwgaXNMb2NrYWJsZSkge1xuICAgICAgc2Nyb2xsQmFyV2lkdGggPSBzY3JvbGxfbG9ja19nZXRUYXJnZXRTY3JvbGxCYXJXaWR0aCgkdGFyZ2V0LCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyICRsb2NrYWJsZVBhcmVudCA9IGZpbmRQYXJlbnRCeVNlbGVjdG9yKCR0YXJnZXQsIGFycmF5QXNTZWxlY3RvcihzdGF0ZS5sb2NrYWJsZVNlbGVjdG9ycykpO1xuICAgICAgc2Nyb2xsQmFyV2lkdGggPSBzY3JvbGxfbG9ja19nZXRUYXJnZXRTY3JvbGxCYXJXaWR0aCgkbG9ja2FibGVQYXJlbnQsIHRydWUpO1xuICAgIH1cblxuICAgIGlmICgkdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGwtbG9jay1maWxsZWQtZ2FwJykgPT09ICd0cnVlJykge1xuICAgICAgc2Nyb2xsX2xvY2tfdW5maWxsR2FwVGFyZ2V0KCR0YXJnZXQpO1xuICAgIH1cblxuICAgIHZhciBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoJHRhcmdldCk7XG4gICAgJHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stZmlsbGVkLWdhcCcsICd0cnVlJyk7XG4gICAgJHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stY3VycmVudC1maWxsLWdhcC1tZXRob2QnLCBzdGF0ZS5maWxsR2FwTWV0aG9kKTtcblxuICAgIGlmIChzdGF0ZS5maWxsR2FwTWV0aG9kID09PSAnbWFyZ2luJykge1xuICAgICAgdmFyIGN1cnJlbnRNYXJnaW4gPSBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUubWFyZ2luUmlnaHQpO1xuICAgICAgJHRhcmdldC5zdHlsZS5tYXJnaW5SaWdodCA9IFwiXCIuY29uY2F0KGN1cnJlbnRNYXJnaW4gKyBzY3JvbGxCYXJXaWR0aCwgXCJweFwiKTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlLmZpbGxHYXBNZXRob2QgPT09ICd3aWR0aCcpIHtcbiAgICAgICR0YXJnZXQuc3R5bGUud2lkdGggPSBcImNhbGMoMTAwJSAtIFwiLmNvbmNhdChzY3JvbGxCYXJXaWR0aCwgXCJweClcIik7XG4gICAgfSBlbHNlIGlmIChzdGF0ZS5maWxsR2FwTWV0aG9kID09PSAnbWF4LXdpZHRoJykge1xuICAgICAgJHRhcmdldC5zdHlsZS5tYXhXaWR0aCA9IFwiY2FsYygxMDAlIC0gXCIuY29uY2F0KHNjcm9sbEJhcldpZHRoLCBcInB4KVwiKTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlLmZpbGxHYXBNZXRob2QgPT09ICdwYWRkaW5nJykge1xuICAgICAgdmFyIGN1cnJlbnRQYWRkaW5nID0gcGFyc2VGbG9hdChjb21wdXRlZFN0eWxlLnBhZGRpbmdSaWdodCk7XG4gICAgICAkdGFyZ2V0LnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiXCIuY29uY2F0KGN1cnJlbnRQYWRkaW5nICsgc2Nyb2xsQmFyV2lkdGgsIFwicHhcIik7XG4gICAgfVxuICB9XG59O1xuXG52YXIgc2Nyb2xsX2xvY2tfdW5maWxsR2FwU2VsZWN0b3IgPSBmdW5jdGlvbiB1bmZpbGxHYXBTZWxlY3RvcihzZWxlY3Rvcikge1xuICB2YXIgJHRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgZWFjaE5vZGUoJHRhcmdldHMsIGZ1bmN0aW9uICgkdGFyZ2V0KSB7XG4gICAgc2Nyb2xsX2xvY2tfdW5maWxsR2FwVGFyZ2V0KCR0YXJnZXQpO1xuICB9KTtcbn07XG5cbnZhciBzY3JvbGxfbG9ja191bmZpbGxHYXBUYXJnZXQgPSBmdW5jdGlvbiB1bmZpbGxHYXBUYXJnZXQoJHRhcmdldCkge1xuICBpZiAoaXNFbGVtZW50KCR0YXJnZXQpKSB7XG4gICAgaWYgKCR0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNjcm9sbC1sb2NrLWZpbGxlZC1nYXAnKSA9PT0gJ3RydWUnKSB7XG4gICAgICB2YXIgY3VycmVudEZpbGxHYXBNZXRob2QgPSAkdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGwtbG9jay1jdXJyZW50LWZpbGwtZ2FwLW1ldGhvZCcpO1xuICAgICAgJHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stZmlsbGVkLWdhcCcpO1xuICAgICAgJHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stY3VycmVudC1maWxsLWdhcC1tZXRob2QnKTtcblxuICAgICAgaWYgKGN1cnJlbnRGaWxsR2FwTWV0aG9kID09PSAnbWFyZ2luJykge1xuICAgICAgICAkdGFyZ2V0LnN0eWxlLm1hcmdpblJpZ2h0ID0gXCJcIjtcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudEZpbGxHYXBNZXRob2QgPT09ICd3aWR0aCcpIHtcbiAgICAgICAgJHRhcmdldC5zdHlsZS53aWR0aCA9IFwiXCI7XG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnRGaWxsR2FwTWV0aG9kID09PSAnbWF4LXdpZHRoJykge1xuICAgICAgICAkdGFyZ2V0LnN0eWxlLm1heFdpZHRoID0gXCJcIjtcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudEZpbGxHYXBNZXRob2QgPT09ICdwYWRkaW5nJykge1xuICAgICAgICAkdGFyZ2V0LnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG52YXIgb25SZXNpemUgPSBmdW5jdGlvbiBvblJlc2l6ZShlKSB7XG4gIHJlZmlsbEdhcHMoKTtcbn07XG5cbnZhciBvblRvdWNoU3RhcnQgPSBmdW5jdGlvbiBvblRvdWNoU3RhcnQoZSkge1xuICBpZiAoIXN0YXRlLnNjcm9sbCkge1xuICAgIHN0YXRlLnN0YXJ0VG91Y2hZID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XG4gICAgc3RhdGUuc3RhcnRUb3VjaFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgfVxufTtcblxudmFyIHNjcm9sbF9sb2NrX29uVG91Y2hNb3ZlID0gZnVuY3Rpb24gb25Ub3VjaE1vdmUoZSkge1xuICBpZiAoIXN0YXRlLnNjcm9sbCkge1xuICAgIHZhciBzdGFydFRvdWNoWSA9IHN0YXRlLnN0YXJ0VG91Y2hZLFxuICAgICAgICBzdGFydFRvdWNoWCA9IHN0YXRlLnN0YXJ0VG91Y2hYO1xuICAgIHZhciBjdXJyZW50Q2xpZW50WSA9IGUudG91Y2hlc1swXS5jbGllbnRZO1xuICAgIHZhciBjdXJyZW50Q2xpZW50WCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xuXG4gICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPCAyKSB7XG4gICAgICB2YXIgc2VsZWN0b3IgPSBhcnJheUFzU2VsZWN0b3Ioc3RhdGUuc2Nyb2xsYWJsZVNlbGVjdG9ycyk7XG4gICAgICB2YXIgZGlyZWN0aW9uID0ge1xuICAgICAgICB1cDogc3RhcnRUb3VjaFkgPCBjdXJyZW50Q2xpZW50WSxcbiAgICAgICAgZG93bjogc3RhcnRUb3VjaFkgPiBjdXJyZW50Q2xpZW50WSxcbiAgICAgICAgbGVmdDogc3RhcnRUb3VjaFggPCBjdXJyZW50Q2xpZW50WCxcbiAgICAgICAgcmlnaHQ6IHN0YXJ0VG91Y2hYID4gY3VycmVudENsaWVudFhcbiAgICAgIH07XG4gICAgICB2YXIgZGlyZWN0aW9uV2l0aE9mZnNldCA9IHtcbiAgICAgICAgdXA6IHN0YXJ0VG91Y2hZICsgVE9VQ0hfRElSRUNUSU9OX0RFVEVDVF9PRkZTRVQgPCBjdXJyZW50Q2xpZW50WSxcbiAgICAgICAgZG93bjogc3RhcnRUb3VjaFkgLSBUT1VDSF9ESVJFQ1RJT05fREVURUNUX09GRlNFVCA+IGN1cnJlbnRDbGllbnRZLFxuICAgICAgICBsZWZ0OiBzdGFydFRvdWNoWCArIFRPVUNIX0RJUkVDVElPTl9ERVRFQ1RfT0ZGU0VUIDwgY3VycmVudENsaWVudFgsXG4gICAgICAgIHJpZ2h0OiBzdGFydFRvdWNoWCAtIFRPVUNIX0RJUkVDVElPTl9ERVRFQ1RfT0ZGU0VUID4gY3VycmVudENsaWVudFhcbiAgICAgIH07XG5cbiAgICAgIHZhciBoYW5kbGUgPSBmdW5jdGlvbiBoYW5kbGUoJGVsKSB7XG4gICAgICAgIHZhciBza2lwID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcblxuICAgICAgICBpZiAoJGVsKSB7XG4gICAgICAgICAgdmFyIHBhcmVudFNjcm9sbGFibGVFbCA9IGZpbmRQYXJlbnRCeVNlbGVjdG9yKCRlbCwgc2VsZWN0b3IsIGZhbHNlKTtcblxuICAgICAgICAgIGlmIChlbGVtZW50SXNJbnB1dFJhbmdlKCRlbCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2tpcCB8fCBlbGVtZW50SXNTY3JvbGxhYmxlRmllbGQoJGVsKSAmJiBmaW5kUGFyZW50QnlTZWxlY3RvcigkZWwsIHNlbGVjdG9yKSB8fCBlbGVtZW50SGFzU2VsZWN0b3IoJGVsLCBzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHZhciBwcmV2ZW50ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50U2Nyb2xsTGVmdE9uU3RhcnQoJGVsKSAmJiBlbGVtZW50U2Nyb2xsTGVmdE9uRW5kKCRlbCkpIHtcbiAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbi51cCAmJiBlbGVtZW50U2Nyb2xsVG9wT25TdGFydCgkZWwpIHx8IGRpcmVjdGlvbi5kb3duICYmIGVsZW1lbnRTY3JvbGxUb3BPbkVuZCgkZWwpKSB7XG4gICAgICAgICAgICAgICAgcHJldmVudCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFNjcm9sbFRvcE9uU3RhcnQoJGVsKSAmJiBlbGVtZW50U2Nyb2xsVG9wT25FbmQoJGVsKSkge1xuICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uLmxlZnQgJiYgZWxlbWVudFNjcm9sbExlZnRPblN0YXJ0KCRlbCkgfHwgZGlyZWN0aW9uLnJpZ2h0ICYmIGVsZW1lbnRTY3JvbGxMZWZ0T25FbmQoJGVsKSkge1xuICAgICAgICAgICAgICAgIHByZXZlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbldpdGhPZmZzZXQudXAgJiYgZWxlbWVudFNjcm9sbFRvcE9uU3RhcnQoJGVsKSB8fCBkaXJlY3Rpb25XaXRoT2Zmc2V0LmRvd24gJiYgZWxlbWVudFNjcm9sbFRvcE9uRW5kKCRlbCkgfHwgZGlyZWN0aW9uV2l0aE9mZnNldC5sZWZ0ICYmIGVsZW1lbnRTY3JvbGxMZWZ0T25TdGFydCgkZWwpIHx8IGRpcmVjdGlvbldpdGhPZmZzZXQucmlnaHQgJiYgZWxlbWVudFNjcm9sbExlZnRPbkVuZCgkZWwpKSB7XG4gICAgICAgICAgICAgIHByZXZlbnQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocHJldmVudCkge1xuICAgICAgICAgICAgICBpZiAocGFyZW50U2Nyb2xsYWJsZUVsKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlKHBhcmVudFNjcm9sbGFibGVFbCwgdHJ1ZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGUuY2FuY2VsYWJsZSkge1xuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoYW5kbGUocGFyZW50U2Nyb2xsYWJsZUVsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsYWJsZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaGFuZGxlKGUudGFyZ2V0KTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBvblRvdWNoRW5kID0gZnVuY3Rpb24gb25Ub3VjaEVuZChlKSB7XG4gIGlmICghc3RhdGUuc2Nyb2xsKSB7XG4gICAgc3RhdGUuc3RhcnRUb3VjaFkgPSAwO1xuICAgIHN0YXRlLnN0YXJ0VG91Y2hYID0gMDtcbiAgfVxufTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblJlc2l6ZSk7XG59XG5cbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBzY3JvbGxfbG9ja19vblRvdWNoTW92ZSwge1xuICAgIHBhc3NpdmU6IGZhbHNlXG4gIH0pO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hFbmQpO1xufVxuXG52YXIgZGVwcmVjYXRlZE1ldGhvZHMgPSB7XG4gIGhpZGU6IGZ1bmN0aW9uIGhpZGUodGFyZ2V0KSB7XG4gICAgdGhyb3dFcnJvcignXCJoaWRlXCIgaXMgZGVwcmVjYXRlZCEgVXNlIFwiZGlzYWJsZVBhZ2VTY3JvbGxcIiBpbnN0ZWFkLiBcXG4gaHR0cHM6Ly9naXRodWIuY29tL0ZMM05LRVkvc2Nyb2xsLWxvY2sjZGlzYWJsZXBhZ2VzY3JvbGxzY3JvbGxhYmxldGFyZ2V0Jyk7XG4gICAgZGlzYWJsZVBhZ2VTY3JvbGwodGFyZ2V0KTtcbiAgfSxcbiAgc2hvdzogZnVuY3Rpb24gc2hvdyh0YXJnZXQpIHtcbiAgICB0aHJvd0Vycm9yKCdcInNob3dcIiBpcyBkZXByZWNhdGVkISBVc2UgXCJlbmFibGVQYWdlU2Nyb2xsXCIgaW5zdGVhZC4gXFxuIGh0dHBzOi8vZ2l0aHViLmNvbS9GTDNOS0VZL3Njcm9sbC1sb2NrI2VuYWJsZXBhZ2VzY3JvbGxzY3JvbGxhYmxldGFyZ2V0Jyk7XG4gICAgZW5hYmxlUGFnZVNjcm9sbCh0YXJnZXQpO1xuICB9LFxuICB0b2dnbGU6IGZ1bmN0aW9uIHRvZ2dsZSh0YXJnZXQpIHtcbiAgICB0aHJvd0Vycm9yKCdcInRvZ2dsZVwiIGlzIGRlcHJlY2F0ZWQhIERvIG5vdCB1c2UgaXQuJyk7XG5cbiAgICBpZiAoZ2V0U2Nyb2xsU3RhdGUoKSkge1xuICAgICAgZGlzYWJsZVBhZ2VTY3JvbGwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW5hYmxlUGFnZVNjcm9sbCh0YXJnZXQpO1xuICAgIH1cbiAgfSxcbiAgZ2V0U3RhdGU6IGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgIHRocm93RXJyb3IoJ1wiZ2V0U3RhdGVcIiBpcyBkZXByZWNhdGVkISBVc2UgXCJnZXRTY3JvbGxTdGF0ZVwiIGluc3RlYWQuIFxcbiBodHRwczovL2dpdGh1Yi5jb20vRkwzTktFWS9zY3JvbGwtbG9jayNnZXRzY3JvbGxzdGF0ZScpO1xuICAgIHJldHVybiBnZXRTY3JvbGxTdGF0ZSgpO1xuICB9LFxuICBnZXRXaWR0aDogZnVuY3Rpb24gZ2V0V2lkdGgoKSB7XG4gICAgdGhyb3dFcnJvcignXCJnZXRXaWR0aFwiIGlzIGRlcHJlY2F0ZWQhIFVzZSBcImdldFBhZ2VTY3JvbGxCYXJXaWR0aFwiIGluc3RlYWQuIFxcbiBodHRwczovL2dpdGh1Yi5jb20vRkwzTktFWS9zY3JvbGwtbG9jayNnZXRwYWdlc2Nyb2xsYmFyd2lkdGgnKTtcbiAgICByZXR1cm4gZ2V0UGFnZVNjcm9sbEJhcldpZHRoKCk7XG4gIH0sXG4gIGdldEN1cnJlbnRXaWR0aDogZnVuY3Rpb24gZ2V0Q3VycmVudFdpZHRoKCkge1xuICAgIHRocm93RXJyb3IoJ1wiZ2V0Q3VycmVudFdpZHRoXCIgaXMgZGVwcmVjYXRlZCEgVXNlIFwiZ2V0Q3VycmVudFBhZ2VTY3JvbGxCYXJXaWR0aFwiIGluc3RlYWQuIFxcbiBodHRwczovL2dpdGh1Yi5jb20vRkwzTktFWS9zY3JvbGwtbG9jayNnZXRjdXJyZW50cGFnZXNjcm9sbGJhcndpZHRoJyk7XG4gICAgcmV0dXJuIGdldEN1cnJlbnRQYWdlU2Nyb2xsQmFyV2lkdGgoKTtcbiAgfSxcbiAgc2V0U2Nyb2xsYWJsZVRhcmdldHM6IGZ1bmN0aW9uIHNldFNjcm9sbGFibGVUYXJnZXRzKHRhcmdldCkge1xuICAgIHRocm93RXJyb3IoJ1wic2V0U2Nyb2xsYWJsZVRhcmdldHNcIiBpcyBkZXByZWNhdGVkISBVc2UgXCJhZGRTY3JvbGxhYmxlVGFyZ2V0XCIgaW5zdGVhZC4gXFxuIGh0dHBzOi8vZ2l0aHViLmNvbS9GTDNOS0VZL3Njcm9sbC1sb2NrI2FkZHNjcm9sbGFibGV0YXJnZXRzY3JvbGxhYmxldGFyZ2V0Jyk7XG4gICAgc2Nyb2xsX2xvY2tfYWRkU2Nyb2xsYWJsZVRhcmdldCh0YXJnZXQpO1xuICB9LFxuICBzZXRGaWxsR2FwU2VsZWN0b3JzOiBmdW5jdGlvbiBzZXRGaWxsR2FwU2VsZWN0b3JzKHNlbGVjdG9yKSB7XG4gICAgdGhyb3dFcnJvcignXCJzZXRGaWxsR2FwU2VsZWN0b3JzXCIgaXMgZGVwcmVjYXRlZCEgVXNlIFwiYWRkRmlsbEdhcFNlbGVjdG9yXCIgaW5zdGVhZC4gXFxuIGh0dHBzOi8vZ2l0aHViLmNvbS9GTDNOS0VZL3Njcm9sbC1sb2NrI2FkZGZpbGxnYXBzZWxlY3RvcmZpbGxnYXBzZWxlY3RvcicpO1xuICAgIHNjcm9sbF9sb2NrX2FkZEZpbGxHYXBTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH0sXG4gIHNldEZpbGxHYXBUYXJnZXRzOiBmdW5jdGlvbiBzZXRGaWxsR2FwVGFyZ2V0cyh0YXJnZXQpIHtcbiAgICB0aHJvd0Vycm9yKCdcInNldEZpbGxHYXBUYXJnZXRzXCIgaXMgZGVwcmVjYXRlZCEgVXNlIFwiYWRkRmlsbEdhcFRhcmdldFwiIGluc3RlYWQuIFxcbiBodHRwczovL2dpdGh1Yi5jb20vRkwzTktFWS9zY3JvbGwtbG9jayNhZGRmaWxsZ2FwdGFyZ2V0ZmlsbGdhcHRhcmdldCcpO1xuICAgIHNjcm9sbF9sb2NrX2FkZEZpbGxHYXBUYXJnZXQodGFyZ2V0KTtcbiAgfSxcbiAgY2xlYXJRdWV1ZTogZnVuY3Rpb24gY2xlYXJRdWV1ZSgpIHtcbiAgICB0aHJvd0Vycm9yKCdcImNsZWFyUXVldWVcIiBpcyBkZXByZWNhdGVkISBVc2UgXCJjbGVhclF1ZXVlU2Nyb2xsTG9ja3NcIiBpbnN0ZWFkLiBcXG4gaHR0cHM6Ly9naXRodWIuY29tL0ZMM05LRVkvc2Nyb2xsLWxvY2sjY2xlYXJxdWV1ZXNjcm9sbGxvY2tzJyk7XG4gICAgY2xlYXJRdWV1ZVNjcm9sbExvY2tzKCk7XG4gIH1cbn07XG5cbnZhciBzY3JvbGxMb2NrID0gX29iamVjdFNwcmVhZCh7XG4gIGRpc2FibGVQYWdlU2Nyb2xsOiBkaXNhYmxlUGFnZVNjcm9sbCxcbiAgZW5hYmxlUGFnZVNjcm9sbDogZW5hYmxlUGFnZVNjcm9sbCxcbiAgZ2V0U2Nyb2xsU3RhdGU6IGdldFNjcm9sbFN0YXRlLFxuICBjbGVhclF1ZXVlU2Nyb2xsTG9ja3M6IGNsZWFyUXVldWVTY3JvbGxMb2NrcyxcbiAgZ2V0VGFyZ2V0U2Nyb2xsQmFyV2lkdGg6IHNjcm9sbF9sb2NrX2dldFRhcmdldFNjcm9sbEJhcldpZHRoLFxuICBnZXRDdXJyZW50VGFyZ2V0U2Nyb2xsQmFyV2lkdGg6IHNjcm9sbF9sb2NrX2dldEN1cnJlbnRUYXJnZXRTY3JvbGxCYXJXaWR0aCxcbiAgZ2V0UGFnZVNjcm9sbEJhcldpZHRoOiBnZXRQYWdlU2Nyb2xsQmFyV2lkdGgsXG4gIGdldEN1cnJlbnRQYWdlU2Nyb2xsQmFyV2lkdGg6IGdldEN1cnJlbnRQYWdlU2Nyb2xsQmFyV2lkdGgsXG4gIGFkZFNjcm9sbGFibGVTZWxlY3Rvcjogc2Nyb2xsX2xvY2tfYWRkU2Nyb2xsYWJsZVNlbGVjdG9yLFxuICByZW1vdmVTY3JvbGxhYmxlU2VsZWN0b3I6IHNjcm9sbF9sb2NrX3JlbW92ZVNjcm9sbGFibGVTZWxlY3RvcixcbiAgYWRkU2Nyb2xsYWJsZVRhcmdldDogc2Nyb2xsX2xvY2tfYWRkU2Nyb2xsYWJsZVRhcmdldCxcbiAgcmVtb3ZlU2Nyb2xsYWJsZVRhcmdldDogc2Nyb2xsX2xvY2tfcmVtb3ZlU2Nyb2xsYWJsZVRhcmdldCxcbiAgYWRkTG9ja2FibGVTZWxlY3Rvcjogc2Nyb2xsX2xvY2tfYWRkTG9ja2FibGVTZWxlY3RvcixcbiAgYWRkTG9ja2FibGVUYXJnZXQ6IHNjcm9sbF9sb2NrX2FkZExvY2thYmxlVGFyZ2V0LFxuICBhZGRGaWxsR2FwU2VsZWN0b3I6IHNjcm9sbF9sb2NrX2FkZEZpbGxHYXBTZWxlY3RvcixcbiAgcmVtb3ZlRmlsbEdhcFNlbGVjdG9yOiBzY3JvbGxfbG9ja19yZW1vdmVGaWxsR2FwU2VsZWN0b3IsXG4gIGFkZEZpbGxHYXBUYXJnZXQ6IHNjcm9sbF9sb2NrX2FkZEZpbGxHYXBUYXJnZXQsXG4gIHJlbW92ZUZpbGxHYXBUYXJnZXQ6IHNjcm9sbF9sb2NrX3JlbW92ZUZpbGxHYXBUYXJnZXQsXG4gIHNldEZpbGxHYXBNZXRob2Q6IHNjcm9sbF9sb2NrX3NldEZpbGxHYXBNZXRob2QsXG4gIHJlZmlsbEdhcHM6IHJlZmlsbEdhcHMsXG4gIF9zdGF0ZTogc3RhdGVcbn0sIGRlcHJlY2F0ZWRNZXRob2RzKTtcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgc2Nyb2xsX2xvY2sgPSBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChzY3JvbGxMb2NrKTtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pW1wiZGVmYXVsdFwiXTtcbn0pO1xufSx7fV0sNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vKiFcbiogdGFiYmFibGUgNS4zLjNcbiogQGxpY2Vuc2UgTUlULCBodHRwczovL2dpdGh1Yi5jb20vZm9jdXMtdHJhcC90YWJiYWJsZS9ibG9iL21hc3Rlci9MSUNFTlNFXG4qL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2FuZGlkYXRlU2VsZWN0b3JzID0gWydpbnB1dCcsICdzZWxlY3QnLCAndGV4dGFyZWEnLCAnYVtocmVmXScsICdidXR0b24nLCAnW3RhYmluZGV4XTpub3Qoc2xvdCknLCAnYXVkaW9bY29udHJvbHNdJywgJ3ZpZGVvW2NvbnRyb2xzXScsICdbY29udGVudGVkaXRhYmxlXTpub3QoW2NvbnRlbnRlZGl0YWJsZT1cImZhbHNlXCJdKScsICdkZXRhaWxzPnN1bW1hcnk6Zmlyc3Qtb2YtdHlwZScsICdkZXRhaWxzJ107XG52YXIgY2FuZGlkYXRlU2VsZWN0b3IgPSAvKiAjX19QVVJFX18gKi9jYW5kaWRhdGVTZWxlY3RvcnMuam9pbignLCcpO1xudmFyIE5vRWxlbWVudCA9IHR5cGVvZiBFbGVtZW50ID09PSAndW5kZWZpbmVkJztcbnZhciBtYXRjaGVzID0gTm9FbGVtZW50ID8gZnVuY3Rpb24gKCkge30gOiBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIHx8IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcbnZhciBnZXRSb290Tm9kZSA9ICFOb0VsZW1lbnQgJiYgRWxlbWVudC5wcm90b3R5cGUuZ2V0Um9vdE5vZGUgPyBmdW5jdGlvbiAoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC5nZXRSb290Tm9kZSgpO1xufSA6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG59O1xuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsIGNvbnRhaW5lciB0byBjaGVjayBpblxuICogQHBhcmFtIHtib29sZWFufSBpbmNsdWRlQ29udGFpbmVyIGFkZCBjb250YWluZXIgdG8gY2hlY2tcbiAqIEBwYXJhbSB7KG5vZGU6IEVsZW1lbnQpID0+IGJvb2xlYW59IGZpbHRlciBmaWx0ZXIgY2FuZGlkYXRlc1xuICogQHJldHVybnMge0VsZW1lbnRbXX1cbiAqL1xuXG52YXIgZ2V0Q2FuZGlkYXRlcyA9IGZ1bmN0aW9uIGdldENhbmRpZGF0ZXMoZWwsIGluY2x1ZGVDb250YWluZXIsIGZpbHRlcikge1xuICB2YXIgY2FuZGlkYXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShlbC5xdWVyeVNlbGVjdG9yQWxsKGNhbmRpZGF0ZVNlbGVjdG9yKSk7XG5cbiAgaWYgKGluY2x1ZGVDb250YWluZXIgJiYgbWF0Y2hlcy5jYWxsKGVsLCBjYW5kaWRhdGVTZWxlY3RvcikpIHtcbiAgICBjYW5kaWRhdGVzLnVuc2hpZnQoZWwpO1xuICB9XG5cbiAgY2FuZGlkYXRlcyA9IGNhbmRpZGF0ZXMuZmlsdGVyKGZpbHRlcik7XG4gIHJldHVybiBjYW5kaWRhdGVzO1xufTtcbi8qKlxuICogQGNhbGxiYWNrIEdldFNoYWRvd1Jvb3RcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCB0byBjaGVjayBmb3Igc2hhZG93IHJvb3RcbiAqIEByZXR1cm5zIHtTaGFkb3dSb290fGJvb2xlYW59IFNoYWRvd1Jvb3QgaWYgYXZhaWxhYmxlIG9yIGJvb2xlYW4gaW5kaWNhdGluZyBpZiBhIHNoYWRvd1Jvb3QgaXMgYXR0YWNoZWQgYnV0IG5vdCBhdmFpbGFibGUuXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgU2hhZG93Um9vdEZpbHRlclxuICogQHBhcmFtIHtFbGVtZW50fSBzaGFkb3dIb3N0Tm9kZSB0aGUgZWxlbWVudCB3aGljaCBjb250YWlucyBzaGFkb3cgY29udGVudFxuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgYSBzaGFkb3cgcm9vdCBjb3VsZCBwb3RlbnRpYWxseSBjb250YWluIHZhbGlkIGNhbmRpZGF0ZXMuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBDYW5kaWRhdGVzU2NvcGVcbiAqIEBwcm9wZXJ0eSB7RWxlbWVudH0gc2NvcGUgY29udGFpbnMgaW5uZXIgY2FuZGlkYXRlc1xuICogQHByb3BlcnR5IHtFbGVtZW50W119IGNhbmRpZGF0ZXNcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEl0ZXJhdGl2ZU9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7R2V0U2hhZG93Um9vdHxib29sZWFufSBnZXRTaGFkb3dSb290IHRydWUgaWYgc2hhZG93IHN1cHBvcnQgaXMgZW5hYmxlZDsgZmFsc3kgaWYgbm90O1xuICogIGlmIGEgZnVuY3Rpb24sIGltcGxpZXMgc2hhZG93IHN1cHBvcnQgaXMgZW5hYmxlZCBhbmQgZWl0aGVyIHJldHVybnMgdGhlIHNoYWRvdyByb290IG9mIGFuIGVsZW1lbnRcbiAqICBvciBhIGJvb2xlYW4gc3RhdGluZyBpZiBpdCBoYXMgYW4gdW5kaXNjbG9zZWQgc2hhZG93IHJvb3RcbiAqIEBwcm9wZXJ0eSB7KG5vZGU6IEVsZW1lbnQpID0+IGJvb2xlYW59IGZpbHRlciBmaWx0ZXIgY2FuZGlkYXRlc1xuICogQHByb3BlcnR5IHtib29sZWFufSBmbGF0dGVuIGlmIHRydWUgdGhlbiByZXN1bHQgd2lsbCBmbGF0dGVuIGFueSBDYW5kaWRhdGVzU2NvcGUgaW50byB0aGUgcmV0dXJuZWQgbGlzdFxuICogQHByb3BlcnR5IHtTaGFkb3dSb290RmlsdGVyfSBzaGFkb3dSb290RmlsdGVyIGZpbHRlciBzaGFkb3cgcm9vdHM7XG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnRbXX0gZWxlbWVudHMgbGlzdCBvZiBlbGVtZW50IGNvbnRhaW5lcnMgdG8gbWF0Y2ggY2FuZGlkYXRlcyBmcm9tXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVDb250YWluZXIgYWRkIGNvbnRhaW5lciBsaXN0IHRvIGNoZWNrXG4gKiBAcGFyYW0ge0l0ZXJhdGl2ZU9wdGlvbnN9IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtBcnJheS48RWxlbWVudHxDYW5kaWRhdGVzU2NvcGU+fVxuICovXG5cblxudmFyIGdldENhbmRpZGF0ZXNJdGVyYXRpdmVseSA9IGZ1bmN0aW9uIGdldENhbmRpZGF0ZXNJdGVyYXRpdmVseShlbGVtZW50cywgaW5jbHVkZUNvbnRhaW5lciwgb3B0aW9ucykge1xuICB2YXIgY2FuZGlkYXRlcyA9IFtdO1xuICB2YXIgZWxlbWVudHNUb0NoZWNrID0gQXJyYXkuZnJvbShlbGVtZW50cyk7XG5cbiAgd2hpbGUgKGVsZW1lbnRzVG9DaGVjay5sZW5ndGgpIHtcbiAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRzVG9DaGVjay5zaGlmdCgpO1xuXG4gICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ1NMT1QnKSB7XG4gICAgICAvLyBhZGQgc2hhZG93IGRvbSBzbG90IHNjb3BlIChzbG90IGl0c2VsZiBjYW5ub3QgYmUgZm9jdXNhYmxlKVxuICAgICAgdmFyIGFzc2lnbmVkID0gZWxlbWVudC5hc3NpZ25lZEVsZW1lbnRzKCk7XG4gICAgICB2YXIgY29udGVudCA9IGFzc2lnbmVkLmxlbmd0aCA/IGFzc2lnbmVkIDogZWxlbWVudC5jaGlsZHJlbjtcbiAgICAgIHZhciBuZXN0ZWRDYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlc0l0ZXJhdGl2ZWx5KGNvbnRlbnQsIHRydWUsIG9wdGlvbnMpO1xuXG4gICAgICBpZiAob3B0aW9ucy5mbGF0dGVuKSB7XG4gICAgICAgIGNhbmRpZGF0ZXMucHVzaC5hcHBseShjYW5kaWRhdGVzLCBuZXN0ZWRDYW5kaWRhdGVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbmRpZGF0ZXMucHVzaCh7XG4gICAgICAgICAgc2NvcGU6IGVsZW1lbnQsXG4gICAgICAgICAgY2FuZGlkYXRlczogbmVzdGVkQ2FuZGlkYXRlc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2hlY2sgY2FuZGlkYXRlIGVsZW1lbnRcbiAgICAgIHZhciB2YWxpZENhbmRpZGF0ZSA9IG1hdGNoZXMuY2FsbChlbGVtZW50LCBjYW5kaWRhdGVTZWxlY3Rvcik7XG5cbiAgICAgIGlmICh2YWxpZENhbmRpZGF0ZSAmJiBvcHRpb25zLmZpbHRlcihlbGVtZW50KSAmJiAoaW5jbHVkZUNvbnRhaW5lciB8fCAhZWxlbWVudHMuaW5jbHVkZXMoZWxlbWVudCkpKSB7XG4gICAgICAgIGNhbmRpZGF0ZXMucHVzaChlbGVtZW50KTtcbiAgICAgIH0gLy8gaXRlcmF0ZSBvdmVyIHNoYWRvdyBjb250ZW50IGlmIHBvc3NpYmxlXG5cblxuICAgICAgdmFyIHNoYWRvd1Jvb3QgPSBlbGVtZW50LnNoYWRvd1Jvb3QgfHwgLy8gY2hlY2sgZm9yIGFuIHVuZGlzY2xvc2VkIHNoYWRvd1xuICAgICAgdHlwZW9mIG9wdGlvbnMuZ2V0U2hhZG93Um9vdCA9PT0gJ2Z1bmN0aW9uJyAmJiBvcHRpb25zLmdldFNoYWRvd1Jvb3QoZWxlbWVudCk7XG4gICAgICB2YXIgdmFsaWRTaGFkb3dSb290ID0gIW9wdGlvbnMuc2hhZG93Um9vdEZpbHRlciB8fCBvcHRpb25zLnNoYWRvd1Jvb3RGaWx0ZXIoZWxlbWVudCk7XG5cbiAgICAgIGlmIChzaGFkb3dSb290ICYmIHZhbGlkU2hhZG93Um9vdCkge1xuICAgICAgICAvLyBhZGQgc2hhZG93IGRvbSBzY29wZSBJSUYgYSBzaGFkb3cgcm9vdCBub2RlIHdhcyBnaXZlbjsgb3RoZXJ3aXNlLCBhbiB1bmRpc2Nsb3NlZFxuICAgICAgICAvLyAgc2hhZG93IGV4aXN0cywgc28gbG9vayBhdCBsaWdodCBkb20gY2hpbGRyZW4gYXMgZmFsbGJhY2sgQlVUIGNyZWF0ZSBhIHNjb3BlIGZvciBhbnlcbiAgICAgICAgLy8gIGNoaWxkIGNhbmRpZGF0ZXMgZm91bmQgYmVjYXVzZSB0aGV5J3JlIGxpa2VseSBzbG90dGVkIGVsZW1lbnRzIChlbGVtZW50cyB0aGF0IGFyZVxuICAgICAgICAvLyAgY2hpbGRyZW4gb2YgdGhlIHdlYiBjb21wb25lbnQgZWxlbWVudCAod2hpY2ggaGFzIHRoZSBzaGFkb3cpLCBpbiB0aGUgbGlnaHQgZG9tLCBidXRcbiAgICAgICAgLy8gIHNsb3R0ZWQgc29tZXdoZXJlIF9pbnNpZGVfIHRoZSB1bmRpc2Nsb3NlZCBzaGFkb3cpIC0tIHRoZSBzY29wZSBpcyBjcmVhdGVkIGJlbG93LFxuICAgICAgICAvLyAgX2FmdGVyXyB3ZSByZXR1cm4gZnJvbSB0aGlzIHJlY3Vyc2l2ZSBjYWxsXG4gICAgICAgIHZhciBfbmVzdGVkQ2FuZGlkYXRlcyA9IGdldENhbmRpZGF0ZXNJdGVyYXRpdmVseShzaGFkb3dSb290ID09PSB0cnVlID8gZWxlbWVudC5jaGlsZHJlbiA6IHNoYWRvd1Jvb3QuY2hpbGRyZW4sIHRydWUsIG9wdGlvbnMpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmZsYXR0ZW4pIHtcbiAgICAgICAgICBjYW5kaWRhdGVzLnB1c2guYXBwbHkoY2FuZGlkYXRlcywgX25lc3RlZENhbmRpZGF0ZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbmRpZGF0ZXMucHVzaCh7XG4gICAgICAgICAgICBzY29wZTogZWxlbWVudCxcbiAgICAgICAgICAgIGNhbmRpZGF0ZXM6IF9uZXN0ZWRDYW5kaWRhdGVzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoZXJlJ3Mgbm90IHNoYWRvdyBzbyBqdXN0IGRpZyBpbnRvIHRoZSBlbGVtZW50J3MgKGxpZ2h0IGRvbSkgY2hpbGRyZW5cbiAgICAgICAgLy8gIF9fd2l0aG91dF9fIGdpdmluZyB0aGUgZWxlbWVudCBzcGVjaWFsIHNjb3BlIHRyZWF0bWVudFxuICAgICAgICBlbGVtZW50c1RvQ2hlY2sudW5zaGlmdC5hcHBseShlbGVtZW50c1RvQ2hlY2ssIGVsZW1lbnQuY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjYW5kaWRhdGVzO1xufTtcblxudmFyIGdldFRhYmluZGV4ID0gZnVuY3Rpb24gZ2V0VGFiaW5kZXgobm9kZSwgaXNTY29wZSkge1xuICBpZiAobm9kZS50YWJJbmRleCA8IDApIHtcbiAgICAvLyBpbiBDaHJvbWUsIDxkZXRhaWxzLz4sIDxhdWRpbyBjb250cm9scy8+IGFuZCA8dmlkZW8gY29udHJvbHMvPiBlbGVtZW50cyBnZXQgYSBkZWZhdWx0XG4gICAgLy8gYHRhYkluZGV4YCBvZiAtMSB3aGVuIHRoZSAndGFiaW5kZXgnIGF0dHJpYnV0ZSBpc24ndCBzcGVjaWZpZWQgaW4gdGhlIERPTSxcbiAgICAvLyB5ZXQgdGhleSBhcmUgc3RpbGwgcGFydCBvZiB0aGUgcmVndWxhciB0YWIgb3JkZXI7IGluIEZGLCB0aGV5IGdldCBhIGRlZmF1bHRcbiAgICAvLyBgdGFiSW5kZXhgIG9mIDA7IHNpbmNlIENocm9tZSBzdGlsbCBwdXRzIHRob3NlIGVsZW1lbnRzIGluIHRoZSByZWd1bGFyIHRhYlxuICAgIC8vIG9yZGVyLCBjb25zaWRlciB0aGVpciB0YWIgaW5kZXggdG8gYmUgMC5cbiAgICAvLyBBbHNvIGJyb3dzZXJzIGRvIG5vdCByZXR1cm4gYHRhYkluZGV4YCBjb3JyZWN0bHkgZm9yIGNvbnRlbnRFZGl0YWJsZSBub2RlcztcbiAgICAvLyBzbyBpZiB0aGV5IGRvbid0IGhhdmUgYSB0YWJpbmRleCBhdHRyaWJ1dGUgc3BlY2lmaWNhbGx5IHNldCwgYXNzdW1lIGl0J3MgMC5cbiAgICAvL1xuICAgIC8vIGlzU2NvcGUgaXMgcG9zaXRpdmUgZm9yIGN1c3RvbSBlbGVtZW50IHdpdGggc2hhZG93IHJvb3Qgb3Igc2xvdCB0aGF0IGJ5IGRlZmF1bHRcbiAgICAvLyBoYXZlIHRhYkluZGV4IC0xLCBidXQgbmVlZCB0byBiZSBzb3J0ZWQgYnkgZG9jdW1lbnQgb3JkZXIgaW4gb3JkZXIgZm9yIHRoZWlyXG4gICAgLy8gY29udGVudCB0byBiZSBpbnNlcnRlZCBpbiB0aGUgY29ycmVjdCBwb3NpdGlvblxuICAgIGlmICgoaXNTY29wZSB8fCAvXihBVURJT3xWSURFT3xERVRBSUxTKSQvLnRlc3Qobm9kZS50YWdOYW1lKSB8fCBub2RlLmlzQ29udGVudEVkaXRhYmxlKSAmJiBpc05hTihwYXJzZUludChub2RlLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSwgMTApKSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vZGUudGFiSW5kZXg7XG59O1xuXG52YXIgc29ydE9yZGVyZWRUYWJiYWJsZXMgPSBmdW5jdGlvbiBzb3J0T3JkZXJlZFRhYmJhYmxlcyhhLCBiKSB7XG4gIHJldHVybiBhLnRhYkluZGV4ID09PSBiLnRhYkluZGV4ID8gYS5kb2N1bWVudE9yZGVyIC0gYi5kb2N1bWVudE9yZGVyIDogYS50YWJJbmRleCAtIGIudGFiSW5kZXg7XG59O1xuXG52YXIgaXNJbnB1dCA9IGZ1bmN0aW9uIGlzSW5wdXQobm9kZSkge1xuICByZXR1cm4gbm9kZS50YWdOYW1lID09PSAnSU5QVVQnO1xufTtcblxudmFyIGlzSGlkZGVuSW5wdXQgPSBmdW5jdGlvbiBpc0hpZGRlbklucHV0KG5vZGUpIHtcbiAgcmV0dXJuIGlzSW5wdXQobm9kZSkgJiYgbm9kZS50eXBlID09PSAnaGlkZGVuJztcbn07XG5cbnZhciBpc0RldGFpbHNXaXRoU3VtbWFyeSA9IGZ1bmN0aW9uIGlzRGV0YWlsc1dpdGhTdW1tYXJ5KG5vZGUpIHtcbiAgdmFyIHIgPSBub2RlLnRhZ05hbWUgPT09ICdERVRBSUxTJyAmJiBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkobm9kZS5jaGlsZHJlbikuc29tZShmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQudGFnTmFtZSA9PT0gJ1NVTU1BUlknO1xuICB9KTtcbiAgcmV0dXJuIHI7XG59O1xuXG52YXIgZ2V0Q2hlY2tlZFJhZGlvID0gZnVuY3Rpb24gZ2V0Q2hlY2tlZFJhZGlvKG5vZGVzLCBmb3JtKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobm9kZXNbaV0uY2hlY2tlZCAmJiBub2Rlc1tpXS5mb3JtID09PSBmb3JtKSB7XG4gICAgICByZXR1cm4gbm9kZXNbaV07XG4gICAgfVxuICB9XG59O1xuXG52YXIgaXNUYWJiYWJsZVJhZGlvID0gZnVuY3Rpb24gaXNUYWJiYWJsZVJhZGlvKG5vZGUpIHtcbiAgaWYgKCFub2RlLm5hbWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciByYWRpb1Njb3BlID0gbm9kZS5mb3JtIHx8IGdldFJvb3ROb2RlKG5vZGUpO1xuXG4gIHZhciBxdWVyeVJhZGlvcyA9IGZ1bmN0aW9uIHF1ZXJ5UmFkaW9zKG5hbWUpIHtcbiAgICByZXR1cm4gcmFkaW9TY29wZS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cIicgKyBuYW1lICsgJ1wiXScpO1xuICB9O1xuXG4gIHZhciByYWRpb1NldDtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5DU1MgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuQ1NTLmVzY2FwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJhZGlvU2V0ID0gcXVlcnlSYWRpb3Mod2luZG93LkNTUy5lc2NhcGUobm9kZS5uYW1lKSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIHJhZGlvU2V0ID0gcXVlcnlSYWRpb3Mobm9kZS5uYW1lKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKCdMb29rcyBsaWtlIHlvdSBoYXZlIGEgcmFkaW8gYnV0dG9uIHdpdGggYSBuYW1lIGF0dHJpYnV0ZSBjb250YWluaW5nIGludmFsaWQgQ1NTIHNlbGVjdG9yIGNoYXJhY3RlcnMgYW5kIG5lZWQgdGhlIENTUy5lc2NhcGUgcG9seWZpbGw6ICVzJywgZXJyLm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjaGVja2VkID0gZ2V0Q2hlY2tlZFJhZGlvKHJhZGlvU2V0LCBub2RlLmZvcm0pO1xuICByZXR1cm4gIWNoZWNrZWQgfHwgY2hlY2tlZCA9PT0gbm9kZTtcbn07XG5cbnZhciBpc1JhZGlvID0gZnVuY3Rpb24gaXNSYWRpbyhub2RlKSB7XG4gIHJldHVybiBpc0lucHV0KG5vZGUpICYmIG5vZGUudHlwZSA9PT0gJ3JhZGlvJztcbn07XG5cbnZhciBpc05vblRhYmJhYmxlUmFkaW8gPSBmdW5jdGlvbiBpc05vblRhYmJhYmxlUmFkaW8obm9kZSkge1xuICByZXR1cm4gaXNSYWRpbyhub2RlKSAmJiAhaXNUYWJiYWJsZVJhZGlvKG5vZGUpO1xufTtcblxudmFyIGlzWmVyb0FyZWEgPSBmdW5jdGlvbiBpc1plcm9BcmVhKG5vZGUpIHtcbiAgdmFyIF9ub2RlJGdldEJvdW5kaW5nQ2xpZSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICB3aWR0aCA9IF9ub2RlJGdldEJvdW5kaW5nQ2xpZS53aWR0aCxcbiAgICAgIGhlaWdodCA9IF9ub2RlJGdldEJvdW5kaW5nQ2xpZS5oZWlnaHQ7XG5cbiAgcmV0dXJuIHdpZHRoID09PSAwICYmIGhlaWdodCA9PT0gMDtcbn07XG5cbnZhciBpc0hpZGRlbiA9IGZ1bmN0aW9uIGlzSGlkZGVuKG5vZGUsIF9yZWYpIHtcbiAgdmFyIGRpc3BsYXlDaGVjayA9IF9yZWYuZGlzcGxheUNoZWNrLFxuICAgICAgZ2V0U2hhZG93Um9vdCA9IF9yZWYuZ2V0U2hhZG93Um9vdDtcblxuICAvLyBOT1RFOiB2aXNpYmlsaXR5IHdpbGwgYmUgYHVuZGVmaW5lZGAgaWYgbm9kZSBpcyBkZXRhY2hlZCBmcm9tIHRoZSBkb2N1bWVudFxuICAvLyAgKHNlZSBub3RlcyBhYm91dCB0aGlzIGZ1cnRoZXIgZG93biksIHdoaWNoIG1lYW5zIHdlIHdpbGwgY29uc2lkZXIgaXQgdmlzaWJsZVxuICAvLyAgKHRoaXMgaXMgbGVnYWN5IGJlaGF2aW9yIGZyb20gYSB2ZXJ5IGxvbmcgd2F5IGJhY2spXG4gIC8vIE5PVEU6IHdlIGNoZWNrIHRoaXMgcmVnYXJkbGVzcyBvZiBgZGlzcGxheUNoZWNrPVwibm9uZVwiYCBiZWNhdXNlIHRoaXMgaXMgYVxuICAvLyAgX3Zpc2liaWxpdHlfIGNoZWNrLCBub3QgYSBfZGlzcGxheV8gY2hlY2tcbiAgaWYgKGdldENvbXB1dGVkU3R5bGUobm9kZSkudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciBpc0RpcmVjdFN1bW1hcnkgPSBtYXRjaGVzLmNhbGwobm9kZSwgJ2RldGFpbHM+c3VtbWFyeTpmaXJzdC1vZi10eXBlJyk7XG4gIHZhciBub2RlVW5kZXJEZXRhaWxzID0gaXNEaXJlY3RTdW1tYXJ5ID8gbm9kZS5wYXJlbnRFbGVtZW50IDogbm9kZTtcblxuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGVVbmRlckRldGFpbHMsICdkZXRhaWxzOm5vdChbb3Blbl0pIConKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIFRoZSByb290IG5vZGUgaXMgdGhlIHNoYWRvdyByb290IGlmIHRoZSBub2RlIGlzIGluIGEgc2hhZG93IERPTTsgc29tZSBkb2N1bWVudCBvdGhlcndpc2VcbiAgLy8gIChidXQgTk9UIF90aGVfIGRvY3VtZW50OyBzZWUgc2Vjb25kICdJZicgY29tbWVudCBiZWxvdyBmb3IgbW9yZSkuXG4gIC8vIElmIHJvb3ROb2RlIGlzIHNoYWRvdyByb290LCBpdCdsbCBoYXZlIGEgaG9zdCwgd2hpY2ggaXMgdGhlIGVsZW1lbnQgdG8gd2hpY2ggdGhlIHNoYWRvd1xuICAvLyAgaXMgYXR0YWNoZWQsIGFuZCB0aGUgb25lIHdlIG5lZWQgdG8gY2hlY2sgaWYgaXQncyBpbiB0aGUgZG9jdW1lbnQgb3Igbm90IChiZWNhdXNlIHRoZVxuICAvLyAgc2hhZG93LCBhbmQgYWxsIG5vZGVzIGl0IGNvbnRhaW5zLCBpcyBuZXZlciBjb25zaWRlcmVkIGluIHRoZSBkb2N1bWVudCBzaW5jZSBzaGFkb3dzXG4gIC8vICBiZWhhdmUgbGlrZSBzZWxmLWNvbnRhaW5lZCBET01zOyBidXQgaWYgdGhlIHNoYWRvdydzIEhPU1QsIHdoaWNoIGlzIHBhcnQgb2YgdGhlIGRvY3VtZW50LFxuICAvLyAgaXMgaGlkZGVuLCBvciBpcyBub3QgaW4gdGhlIGRvY3VtZW50IGl0c2VsZiBidXQgaXMgZGV0YWNoZWQsIGl0IHdpbGwgYWZmZWN0IHRoZSBzaGFkb3cnc1xuICAvLyAgdmlzaWJpbGl0eSwgaW5jbHVkaW5nIGFsbCB0aGUgbm9kZXMgaXQgY29udGFpbnMpLiBUaGUgaG9zdCBjb3VsZCBiZSBhbnkgbm9ybWFsIG5vZGUsXG4gIC8vICBvciBhIGN1c3RvbSBlbGVtZW50IChpLmUuIHdlYiBjb21wb25lbnQpLiBFaXRoZXIgd2F5LCB0aGF0J3MgdGhlIG9uZSB0aGF0IGlzIGNvbnNpZGVyZWRcbiAgLy8gIHBhcnQgb2YgdGhlIGRvY3VtZW50LCBub3QgdGhlIHNoYWRvdyByb290LCBub3IgYW55IG9mIGl0cyBjaGlsZHJlbiAoaS5lLiB0aGUgbm9kZSBiZWluZ1xuICAvLyAgdGVzdGVkKS5cbiAgLy8gSWYgcm9vdE5vZGUgaXMgbm90IGEgc2hhZG93IHJvb3QsIGl0IHdvbid0IGhhdmUgYSBob3N0LCBhbmQgc28gcm9vdE5vZGUgc2hvdWxkIGJlIHRoZVxuICAvLyAgZG9jdW1lbnQgKHBlciB0aGUgZG9jcykgYW5kIHdoaWxlIGl0J3MgYSBEb2N1bWVudC10eXBlIG9iamVjdCwgdGhhdCBkb2N1bWVudCBkb2VzIG5vdFxuICAvLyAgYXBwZWFyIHRvIGJlIHRoZSBzYW1lIGFzIHRoZSBub2RlJ3MgYG93bmVyRG9jdW1lbnRgIGZvciBzb21lIHJlYXNvbiwgc28gaXQncyBzYWZlclxuICAvLyAgdG8gaWdub3JlIHRoZSByb290Tm9kZSBhdCB0aGlzIHBvaW50LCBhbmQgdXNlIGBub2RlLm93bmVyRG9jdW1lbnRgLiBPdGhlcndpc2UsXG4gIC8vICB1c2luZyBgcm9vdE5vZGUuY29udGFpbnMobm9kZSlgIHdpbGwgX2Fsd2F5c18gYmUgdHJ1ZSB3ZSdsbCBnZXQgZmFsc2UtcG9zaXRpdmVzIHdoZW5cbiAgLy8gIG5vZGUgaXMgYWN0dWFsbHkgZGV0YWNoZWQuXG5cblxuICB2YXIgbm9kZVJvb3RIb3N0ID0gZ2V0Um9vdE5vZGUobm9kZSkuaG9zdDtcbiAgdmFyIG5vZGVJc0F0dGFjaGVkID0gKG5vZGVSb290SG9zdCA9PT0gbnVsbCB8fCBub2RlUm9vdEhvc3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGVSb290SG9zdC5vd25lckRvY3VtZW50LmNvbnRhaW5zKG5vZGVSb290SG9zdCkpIHx8IG5vZGUub3duZXJEb2N1bWVudC5jb250YWlucyhub2RlKTtcblxuICBpZiAoIWRpc3BsYXlDaGVjayB8fCBkaXNwbGF5Q2hlY2sgPT09ICdmdWxsJykge1xuICAgIGlmICh0eXBlb2YgZ2V0U2hhZG93Um9vdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gZmlndXJlIG91dCBpZiB3ZSBzaG91bGQgY29uc2lkZXIgdGhlIG5vZGUgdG8gYmUgaW4gYW4gdW5kaXNjbG9zZWQgc2hhZG93IGFuZCB1c2UgdGhlXG4gICAgICAvLyAgJ25vbi16ZXJvLWFyZWEnIGZhbGxiYWNrXG4gICAgICB2YXIgb3JpZ2luYWxOb2RlID0gbm9kZTtcblxuICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgdmFyIHBhcmVudEVsZW1lbnQgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHZhciByb290Tm9kZSA9IGdldFJvb3ROb2RlKG5vZGUpO1xuXG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50ICYmICFwYXJlbnRFbGVtZW50LnNoYWRvd1Jvb3QgJiYgZ2V0U2hhZG93Um9vdChwYXJlbnRFbGVtZW50KSA9PT0gdHJ1ZSAvLyBjaGVjayBpZiB0aGVyZSdzIGFuIHVuZGlzY2xvc2VkIHNoYWRvd1xuICAgICAgICApIHtcbiAgICAgICAgICAvLyBub2RlIGhhcyBhbiB1bmRpc2Nsb3NlZCBzaGFkb3cgd2hpY2ggbWVhbnMgd2UgY2FuIG9ubHkgdHJlYXQgaXQgYXMgYSBibGFjayBib3gsIHNvIHdlXG4gICAgICAgICAgLy8gIGZhbGwgYmFjayB0byBhIG5vbi16ZXJvLWFyZWEgdGVzdFxuICAgICAgICAgIHJldHVybiBpc1plcm9BcmVhKG5vZGUpO1xuICAgICAgICB9IGVsc2UgaWYgKG5vZGUuYXNzaWduZWRTbG90KSB7XG4gICAgICAgICAgLy8gaXRlcmF0ZSB1cCBzbG90XG4gICAgICAgICAgbm9kZSA9IG5vZGUuYXNzaWduZWRTbG90O1xuICAgICAgICB9IGVsc2UgaWYgKCFwYXJlbnRFbGVtZW50ICYmIHJvb3ROb2RlICE9PSBub2RlLm93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgICAvLyBjcm9zcyBzaGFkb3cgYm91bmRhcnlcbiAgICAgICAgICBub2RlID0gcm9vdE5vZGUuaG9zdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBpdGVyYXRlIHVwIG5vcm1hbCBkb21cbiAgICAgICAgICBub2RlID0gcGFyZW50RWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBub2RlID0gb3JpZ2luYWxOb2RlO1xuICAgIH0gLy8gZWxzZSwgYGdldFNoYWRvd1Jvb3RgIG1pZ2h0IGJlIHRydWUsIGJ1dCBhbGwgdGhhdCBkb2VzIGlzIGVuYWJsZSBzaGFkb3cgRE9NIHN1cHBvcnRcbiAgICAvLyAgKGkuZS4gaXQgZG9lcyBub3QgYWxzbyBwcmVzdW1lIHRoYXQgYWxsIG5vZGVzIG1pZ2h0IGhhdmUgdW5kaXNjbG9zZWQgc2hhZG93cyk7IG9yXG4gICAgLy8gIGl0IG1pZ2h0IGJlIGEgZmFsc3kgdmFsdWUsIHdoaWNoIG1lYW5zIHNoYWRvdyBET00gc3VwcG9ydCBpcyBkaXNhYmxlZFxuICAgIC8vIFNpbmNlIHdlIGRpZG4ndCBmaW5kIGl0IHNpdHRpbmcgaW4gYW4gdW5kaXNjbG9zZWQgc2hhZG93IChvciBzaGFkb3dzIGFyZSBkaXNhYmxlZClcbiAgICAvLyAgbm93IHdlIGNhbiBqdXN0IHRlc3QgdG8gc2VlIGlmIGl0IHdvdWxkIG5vcm1hbGx5IGJlIHZpc2libGUgb3Igbm90LCBwcm92aWRlZCBpdCdzXG4gICAgLy8gIGF0dGFjaGVkIHRvIHRoZSBtYWluIGRvY3VtZW50LlxuICAgIC8vIE5PVEU6IFdlIG11c3QgY29uc2lkZXIgY2FzZSB3aGVyZSBub2RlIGlzIGluc2lkZSBhIHNoYWRvdyBET00gYW5kIGdpdmVuIGRpcmVjdGx5IHRvXG4gICAgLy8gIGBpc1RhYmJhYmxlKClgIG9yIGBpc0ZvY3VzYWJsZSgpYCAtLSByZWdhcmRsZXNzIG9mIGBnZXRTaGFkb3dSb290YCBvcHRpb24gc2V0dGluZy5cblxuXG4gICAgaWYgKG5vZGVJc0F0dGFjaGVkKSB7XG4gICAgICAvLyB0aGlzIHdvcmtzIHdoZXJldmVyIHRoZSBub2RlIGlzOiBpZiB0aGVyZSdzIGF0IGxlYXN0IG9uZSBjbGllbnQgcmVjdCwgaXQnc1xuICAgICAgLy8gIHNvbWVob3cgZGlzcGxheWVkOyBpdCBhbHNvIGNvdmVycyB0aGUgQ1NTICdkaXNwbGF5OiBjb250ZW50cycgY2FzZSB3aGVyZSB0aGVcbiAgICAgIC8vICBub2RlIGl0c2VsZiBpcyBoaWRkZW4gaW4gcGxhY2Ugb2YgaXRzIGNvbnRlbnRzOyBhbmQgdGhlcmUncyBubyBuZWVkIHRvIHNlYXJjaFxuICAgICAgLy8gIHVwIHRoZSBoaWVyYXJjaHkgZWl0aGVyXG4gICAgICByZXR1cm4gIW5vZGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGg7XG4gICAgfSAvLyBFbHNlLCB0aGUgbm9kZSBpc24ndCBhdHRhY2hlZCB0byB0aGUgZG9jdW1lbnQsIHdoaWNoIG1lYW5zIHRoZSBgZ2V0Q2xpZW50UmVjdHMoKWBcbiAgICAvLyAgQVBJIHdpbGwgX19hbHdheXNfXyByZXR1cm4gemVybyByZWN0cyAodGhpcyBjYW4gaGFwcGVuLCBmb3IgZXhhbXBsZSwgaWYgUmVhY3RcbiAgICAvLyAgaXMgdXNlZCB0byByZW5kZXIgbm9kZXMgb250byBhIGRldGFjaGVkIHRyZWUsIGFzIGNvbmZpcm1lZCBpbiB0aGlzIHRocmVhZDpcbiAgICAvLyAgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy85MTE3I2lzc3VlY29tbWVudC0yODQyMjg4NzApXG4gICAgLy9cbiAgICAvLyBJdCBhbHNvIG1lYW5zIHRoYXQgZXZlbiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5kaXNwbGF5IHdpbGwgcmV0dXJuIGB1bmRlZmluZWRgXG4gICAgLy8gIGJlY2F1c2Ugc3R5bGVzIGFyZSBvbmx5IGNvbXB1dGVkIGZvciBub2RlcyB0aGF0IGFyZSBpbiB0aGUgZG9jdW1lbnQuXG4gICAgLy9cbiAgICAvLyBOT1RFOiBUSElTIEhBUyBCRUVOIFRIRSBDQVNFIEZPUiBZRUFSUy4gSXQgaXMgbm90IG5ldywgbm9yIGlzIGl0IGNhdXNlZCBieSB0YWJiYWJsZVxuICAgIC8vICBzb21laG93LiBUaG91Z2ggaXQgd2FzIG5ldmVyIHN0YXRlZCBvZmZpY2lhbGx5LCBhbnlvbmUgd2hvIGhhcyBldmVyIHVzZWQgdGFiYmFibGVcbiAgICAvLyAgQVBJcyBvbiBub2RlcyBpbiBkZXRhY2hlZCBjb250YWluZXJzIGhhcyBhY3R1YWxseSBpbXBsaWNpdGx5IHVzZWQgdGFiYmFibGUgaW4gd2hhdFxuICAgIC8vICB3YXMgbGF0ZXIgKGFzIG9mIHY1LjIuMCBvbiBBcHIgOSwgMjAyMSkgY2FsbGVkIGBkaXNwbGF5Q2hlY2s9XCJub25lXCJgIG1vZGUgLS0gZXNzZW50aWFsbHlcbiAgICAvLyAgY29uc2lkZXJpbmcgX19ldmVyeXRoaW5nX18gdG8gYmUgdmlzaWJsZSBiZWNhdXNlIG9mIHRoZSBpbm5hYmlsaXR5IHRvIGRldGVybWluZSBzdHlsZXMuXG5cbiAgfSBlbHNlIGlmIChkaXNwbGF5Q2hlY2sgPT09ICdub24temVyby1hcmVhJykge1xuICAgIC8vIE5PVEU6IEV2ZW4gdGhvdWdoIHRoaXMgdGVzdHMgdGhhdCB0aGUgbm9kZSdzIGNsaWVudCByZWN0IGlzIG5vbi16ZXJvIHRvIGRldGVybWluZVxuICAgIC8vICB3aGV0aGVyIGl0J3MgZGlzcGxheWVkLCBhbmQgdGhhdCBhIGRldGFjaGVkIG5vZGUgd2lsbCBfX2Fsd2F5c19fIGhhdmUgYSB6ZXJvLWFyZWFcbiAgICAvLyAgY2xpZW50IHJlY3QsIHdlIGRvbid0IHNwZWNpYWwtY2FzZSBmb3Igd2hldGhlciB0aGUgbm9kZSBpcyBhdHRhY2hlZCBvciBub3QuIEluXG4gICAgLy8gIHRoaXMgbW9kZSwgd2UgZG8gd2FudCB0byBjb25zaWRlciBub2RlcyB0aGF0IGhhdmUgYSB6ZXJvIGFyZWEgdG8gYmUgaGlkZGVuIGF0IGFsbFxuICAgIC8vICB0aW1lcywgYW5kIHRoYXQgaW5jbHVkZXMgYXR0YWNoZWQgb3Igbm90LlxuICAgIHJldHVybiBpc1plcm9BcmVhKG5vZGUpO1xuICB9IC8vIHZpc2libGUsIGFzIGZhciBhcyB3ZSBjYW4gdGVsbCwgb3IgcGVyIGN1cnJlbnQgYGRpc3BsYXlDaGVja2AgbW9kZVxuXG5cbiAgcmV0dXJuIGZhbHNlO1xufTsgLy8gZm9ybSBmaWVsZHMgKG5lc3RlZCkgaW5zaWRlIGEgZGlzYWJsZWQgZmllbGRzZXQgYXJlIG5vdCBmb2N1c2FibGUvdGFiYmFibGVcbi8vICB1bmxlc3MgdGhleSBhcmUgaW4gdGhlIF9maXJzdF8gPGxlZ2VuZD4gZWxlbWVudCBvZiB0aGUgdG9wLW1vc3QgZGlzYWJsZWRcbi8vICBmaWVsZHNldFxuXG5cbnZhciBpc0Rpc2FibGVkRnJvbUZpZWxkc2V0ID0gZnVuY3Rpb24gaXNEaXNhYmxlZEZyb21GaWVsZHNldChub2RlKSB7XG4gIGlmICgvXihJTlBVVHxCVVRUT058U0VMRUNUfFRFWFRBUkVBKSQvLnRlc3Qobm9kZS50YWdOYW1lKSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnRFbGVtZW50OyAvLyBjaGVjayBpZiBgbm9kZWAgaXMgY29udGFpbmVkIGluIGEgZGlzYWJsZWQgPGZpZWxkc2V0PlxuXG4gICAgd2hpbGUgKHBhcmVudE5vZGUpIHtcbiAgICAgIGlmIChwYXJlbnROb2RlLnRhZ05hbWUgPT09ICdGSUVMRFNFVCcgJiYgcGFyZW50Tm9kZS5kaXNhYmxlZCkge1xuICAgICAgICAvLyBsb29rIGZvciB0aGUgZmlyc3QgPGxlZ2VuZD4gYW1vbmcgdGhlIGNoaWxkcmVuIG9mIHRoZSBkaXNhYmxlZCA8ZmllbGRzZXQ+XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBjaGlsZCA9IHBhcmVudE5vZGUuY2hpbGRyZW4uaXRlbShpKTsgLy8gd2hlbiB0aGUgZmlyc3QgPGxlZ2VuZD4gKGluIGRvY3VtZW50IG9yZGVyKSBpcyBmb3VuZFxuXG4gICAgICAgICAgaWYgKGNoaWxkLnRhZ05hbWUgPT09ICdMRUdFTkQnKSB7XG4gICAgICAgICAgICAvLyBpZiBpdHMgcGFyZW50IDxmaWVsZHNldD4gaXMgbm90IG5lc3RlZCBpbiBhbm90aGVyIGRpc2FibGVkIDxmaWVsZHNldD4sXG4gICAgICAgICAgICAvLyByZXR1cm4gd2hldGhlciBgbm9kZWAgaXMgYSBkZXNjZW5kYW50IG9mIGl0cyBmaXJzdCA8bGVnZW5kPlxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXMuY2FsbChwYXJlbnROb2RlLCAnZmllbGRzZXRbZGlzYWJsZWRdIConKSA/IHRydWUgOiAhY2hpbGQuY29udGFpbnMobm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIHRoZSBkaXNhYmxlZCA8ZmllbGRzZXQ+IGNvbnRhaW5pbmcgYG5vZGVgIGhhcyBubyA8bGVnZW5kPlxuXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnROb2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICB9IC8vIGVsc2UsIG5vZGUncyB0YWJiYWJsZS9mb2N1c2FibGUgc3RhdGUgc2hvdWxkIG5vdCBiZSBhZmZlY3RlZCBieSBhIGZpZWxkc2V0J3NcbiAgLy8gIGVuYWJsZWQvZGlzYWJsZWQgc3RhdGVcblxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlID0gZnVuY3Rpb24gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKSB7XG4gIGlmIChub2RlLmRpc2FibGVkIHx8IGlzSGlkZGVuSW5wdXQobm9kZSkgfHwgaXNIaWRkZW4obm9kZSwgb3B0aW9ucykgfHwgLy8gRm9yIGEgZGV0YWlscyBlbGVtZW50IHdpdGggYSBzdW1tYXJ5LCB0aGUgc3VtbWFyeSBlbGVtZW50IGdldHMgdGhlIGZvY3VzXG4gIGlzRGV0YWlsc1dpdGhTdW1tYXJ5KG5vZGUpIHx8IGlzRGlzYWJsZWRGcm9tRmllbGRzZXQobm9kZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbnZhciBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUgPSBmdW5jdGlvbiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUob3B0aW9ucywgbm9kZSkge1xuICBpZiAoaXNOb25UYWJiYWJsZVJhZGlvKG5vZGUpIHx8IGdldFRhYmluZGV4KG5vZGUpIDwgMCB8fCAhaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxudmFyIGlzVmFsaWRTaGFkb3dSb290VGFiYmFibGUgPSBmdW5jdGlvbiBpc1ZhbGlkU2hhZG93Um9vdFRhYmJhYmxlKHNoYWRvd0hvc3ROb2RlKSB7XG4gIHZhciB0YWJJbmRleCA9IHBhcnNlSW50KHNoYWRvd0hvc3ROb2RlLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSwgMTApO1xuXG4gIGlmIChpc05hTih0YWJJbmRleCkgfHwgdGFiSW5kZXggPj0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIElmIGEgY3VzdG9tIGVsZW1lbnQgaGFzIGFuIGV4cGxpY2l0IG5lZ2F0aXZlIHRhYmluZGV4LFxuICAvLyBicm93c2VycyB3aWxsIG5vdCBhbGxvdyB0YWIgdGFyZ2V0aW5nIHNhaWQgZWxlbWVudCdzIGNoaWxkcmVuLlxuXG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcbi8qKlxuICogQHBhcmFtIHtBcnJheS48RWxlbWVudHxDYW5kaWRhdGVzU2NvcGU+fSBjYW5kaWRhdGVzXG4gKiBAcmV0dXJucyBFbGVtZW50W11cbiAqL1xuXG5cbnZhciBzb3J0QnlPcmRlciA9IGZ1bmN0aW9uIHNvcnRCeU9yZGVyKGNhbmRpZGF0ZXMpIHtcbiAgdmFyIHJlZ3VsYXJUYWJiYWJsZXMgPSBbXTtcbiAgdmFyIG9yZGVyZWRUYWJiYWJsZXMgPSBbXTtcbiAgY2FuZGlkYXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgdmFyIGlzU2NvcGUgPSAhIWl0ZW0uc2NvcGU7XG4gICAgdmFyIGVsZW1lbnQgPSBpc1Njb3BlID8gaXRlbS5zY29wZSA6IGl0ZW07XG4gICAgdmFyIGNhbmRpZGF0ZVRhYmluZGV4ID0gZ2V0VGFiaW5kZXgoZWxlbWVudCwgaXNTY29wZSk7XG4gICAgdmFyIGVsZW1lbnRzID0gaXNTY29wZSA/IHNvcnRCeU9yZGVyKGl0ZW0uY2FuZGlkYXRlcykgOiBlbGVtZW50O1xuXG4gICAgaWYgKGNhbmRpZGF0ZVRhYmluZGV4ID09PSAwKSB7XG4gICAgICBpc1Njb3BlID8gcmVndWxhclRhYmJhYmxlcy5wdXNoLmFwcGx5KHJlZ3VsYXJUYWJiYWJsZXMsIGVsZW1lbnRzKSA6IHJlZ3VsYXJUYWJiYWJsZXMucHVzaChlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3JkZXJlZFRhYmJhYmxlcy5wdXNoKHtcbiAgICAgICAgZG9jdW1lbnRPcmRlcjogaSxcbiAgICAgICAgdGFiSW5kZXg6IGNhbmRpZGF0ZVRhYmluZGV4LFxuICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICBpc1Njb3BlOiBpc1Njb3BlLFxuICAgICAgICBjb250ZW50OiBlbGVtZW50c1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG9yZGVyZWRUYWJiYWJsZXMuc29ydChzb3J0T3JkZXJlZFRhYmJhYmxlcykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHNvcnRhYmxlKSB7XG4gICAgc29ydGFibGUuaXNTY29wZSA/IGFjYy5wdXNoLmFwcGx5KGFjYywgc29ydGFibGUuY29udGVudCkgOiBhY2MucHVzaChzb3J0YWJsZS5jb250ZW50KTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCBbXSkuY29uY2F0KHJlZ3VsYXJUYWJiYWJsZXMpO1xufTtcblxudmFyIHRhYmJhYmxlID0gZnVuY3Rpb24gdGFiYmFibGUoZWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBjYW5kaWRhdGVzO1xuXG4gIGlmIChvcHRpb25zLmdldFNoYWRvd1Jvb3QpIHtcbiAgICBjYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlc0l0ZXJhdGl2ZWx5KFtlbF0sIG9wdGlvbnMuaW5jbHVkZUNvbnRhaW5lciwge1xuICAgICAgZmlsdGVyOiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUuYmluZChudWxsLCBvcHRpb25zKSxcbiAgICAgIGZsYXR0ZW46IGZhbHNlLFxuICAgICAgZ2V0U2hhZG93Um9vdDogb3B0aW9ucy5nZXRTaGFkb3dSb290LFxuICAgICAgc2hhZG93Um9vdEZpbHRlcjogaXNWYWxpZFNoYWRvd1Jvb3RUYWJiYWJsZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzKGVsLCBvcHRpb25zLmluY2x1ZGVDb250YWluZXIsIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZS5iaW5kKG51bGwsIG9wdGlvbnMpKTtcbiAgfVxuXG4gIHJldHVybiBzb3J0QnlPcmRlcihjYW5kaWRhdGVzKTtcbn07XG5cbnZhciBmb2N1c2FibGUgPSBmdW5jdGlvbiBmb2N1c2FibGUoZWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBjYW5kaWRhdGVzO1xuXG4gIGlmIChvcHRpb25zLmdldFNoYWRvd1Jvb3QpIHtcbiAgICBjYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlc0l0ZXJhdGl2ZWx5KFtlbF0sIG9wdGlvbnMuaW5jbHVkZUNvbnRhaW5lciwge1xuICAgICAgZmlsdGVyOiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlLmJpbmQobnVsbCwgb3B0aW9ucyksXG4gICAgICBmbGF0dGVuOiB0cnVlLFxuICAgICAgZ2V0U2hhZG93Um9vdDogb3B0aW9ucy5nZXRTaGFkb3dSb290XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY2FuZGlkYXRlcyA9IGdldENhbmRpZGF0ZXMoZWwsIG9wdGlvbnMuaW5jbHVkZUNvbnRhaW5lciwgaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZS5iaW5kKG51bGwsIG9wdGlvbnMpKTtcbiAgfVxuXG4gIHJldHVybiBjYW5kaWRhdGVzO1xufTtcblxudmFyIGlzVGFiYmFibGUgPSBmdW5jdGlvbiBpc1RhYmJhYmxlKG5vZGUsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKCFub2RlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBub2RlIHByb3ZpZGVkJyk7XG4gIH1cblxuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsIGNhbmRpZGF0ZVNlbGVjdG9yKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlKG9wdGlvbnMsIG5vZGUpO1xufTtcblxudmFyIGZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yID0gLyogI19fUFVSRV9fICovY2FuZGlkYXRlU2VsZWN0b3JzLmNvbmNhdCgnaWZyYW1lJykuam9pbignLCcpO1xuXG52YXIgaXNGb2N1c2FibGUgPSBmdW5jdGlvbiBpc0ZvY3VzYWJsZShub2RlLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGlmICghbm9kZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gbm9kZSBwcm92aWRlZCcpO1xuICB9XG5cbiAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCBmb2N1c2FibGVDYW5kaWRhdGVTZWxlY3RvcikgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUob3B0aW9ucywgbm9kZSk7XG59O1xuXG5leHBvcnRzLmZvY3VzYWJsZSA9IGZvY3VzYWJsZTtcbmV4cG9ydHMuaXNGb2N1c2FibGUgPSBpc0ZvY3VzYWJsZTtcbmV4cG9ydHMuaXNUYWJiYWJsZSA9IGlzVGFiYmFibGU7XG5leHBvcnRzLnRhYmJhYmxlID0gdGFiYmFibGU7XG5cblxufSx7fV0sNjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9zY3JvbGxMb2NrID0gcmVxdWlyZShcInNjcm9sbC1sb2NrXCIpO1xudmFyIHNpdGVCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtYm9keScpO1xudmFyIHByZWxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkZXInKTtcbigwLCBfc2Nyb2xsTG9jay5kaXNhYmxlUGFnZVNjcm9sbCkocHJlbG9hZGVyKTtcbigwLCBfc2Nyb2xsTG9jay5hZGRGaWxsR2FwVGFyZ2V0KShwcmVsb2FkZXIpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBzaXRlQm9keS5jbGFzc0xpc3QuYWRkKCd1aS1wcmVsb2FkZXItaGlkZGVuJyk7XG4gICAgc2l0ZUJvZHkuY2xhc3NMaXN0LmFkZCgndWktc2Nyb2xsLXZpc2libGUnKTtcbiAgICAoMCwgX3Njcm9sbExvY2suZW5hYmxlUGFnZVNjcm9sbCkocHJlbG9hZGVyKTtcbiAgfSwgMTUwMCk7XG4gIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBzaXRlQm9keS5jbGFzc0xpc3QuYWRkKCd1aS1zaXRlLWxvYWRlZCcpO1xuICAgIHNpdGVCb2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3VpLXByZWxvYWRlci1oaWRkZW4nKTtcbiAgfSwgMjAwMCk7XG59KTtcblxufSx7XCJzY3JvbGwtbG9ja1wiOjR9XSw3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX2Nob2ljZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjaG9pY2VzLmpzXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxudmFyIGNob29zaW5nQ2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hvb3NpbmctY2F0ZWdvcnknKTtcbmlmIChjaG9vc2luZ0NhdGVnb3J5KSB7XG4gIHZhciBzZWxlY3QgPSBjaG9vc2luZ0NhdGVnb3J5LnF1ZXJ5U2VsZWN0b3IoJy5jaG9vc2luZy1jYXRlZ29yeV9fc2VsZWN0Jyk7XG4gIHZhciBjaG9pY2VzID0gbmV3IF9jaG9pY2VzW1wiZGVmYXVsdFwiXShzZWxlY3QsIHtcbiAgICBhbGxvd0hUTUw6IGZhbHNlLFxuICAgIHNlYXJjaEVuYWJsZWQ6IGZhbHNlLFxuICAgIHNob3VsZFNvcnQ6IGZhbHNlLFxuICAgIGl0ZW1TZWxlY3RUZXh0OiAnJyxcbiAgICBjbGFzc05hbWVzOiB7XG4gICAgICBmbGlwcGVkU3RhdGU6ICdpcy1mbGlwJ1xuICAgIH1cbiAgfSk7XG59XG5cbn0se1wiY2hvaWNlcy5qc1wiOjF9XSw4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX2Nob2ljZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2hvaWNlcy5qc1wiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbi8vIHw9PT09PT09PT09PT09PT0gSU5JVElBTElaQVRJT04gT0YgQSBDVVNUT00gU0VMRUNUIE9OIFRIRSBGSVJTVCBMSU5FID09PT09PT09PT09PT09PT5cbnZhciBjaG9vc2luZ1JlZ2lvbkZpcnN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyX19jaG9vc2luZy1yZWdpb25fbGluZV9maXJzdCcpO1xuaWYgKGNob29zaW5nUmVnaW9uRmlyc3QpIHtcbiAgdmFyIHNlbGVjdCA9IGNob29zaW5nUmVnaW9uRmlyc3QucXVlcnlTZWxlY3RvcignLmNob29zaW5nLXJlZ2lvbl9fc2VsZWN0Jyk7XG4gIHZhciBjaG9pY2VzID0gbmV3IF9jaG9pY2VzMltcImRlZmF1bHRcIl0oc2VsZWN0LCB7XG4gICAgYWxsb3dIVE1MOiBmYWxzZSxcbiAgICBzZWFyY2hFbmFibGVkOiBmYWxzZSxcbiAgICBzaG91bGRTb3J0OiBmYWxzZSxcbiAgICBpdGVtU2VsZWN0VGV4dDogJydcbiAgfSk7XG59XG5cbi8vIHw9PT09PT09PT09PT09PT0gSU5JVElBTElaQVRJT04gT0YgQSBDVVNUT00gU0VMRUNUIE9OIFRIRSBTRUNPTkQgTElORSA9PT09PT09PT09PT09PT0+XG52YXIgY2hvb3NpbmdSZWdpb25TZWNvbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1oZWFkZXJfX2Nob29zaW5nLXJlZ2lvbl9saW5lX3NlY29uZCcpO1xuaWYgKGNob29zaW5nUmVnaW9uU2Vjb25kKSB7XG4gIHZhciBfc2VsZWN0ID0gY2hvb3NpbmdSZWdpb25TZWNvbmQucXVlcnlTZWxlY3RvcignLmNob29zaW5nLXJlZ2lvbl9fc2VsZWN0Jyk7XG4gIHZhciBfY2hvaWNlcyA9IG5ldyBfY2hvaWNlczJbXCJkZWZhdWx0XCJdKF9zZWxlY3QsIHtcbiAgICBhbGxvd0hUTUw6IGZhbHNlLFxuICAgIHNlYXJjaEVuYWJsZWQ6IGZhbHNlLFxuICAgIHNob3VsZFNvcnQ6IGZhbHNlLFxuICAgIGl0ZW1TZWxlY3RUZXh0OiAnJ1xuICB9KTtcbn1cblxufSx7XCJjaG9pY2VzLmpzXCI6MX1dLDk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfc2Nyb2xsTG9jayA9IHJlcXVpcmUoXCJzY3JvbGwtbG9ja1wiKTtcbnZhciBfZm9jdXNUcmFwID0gcmVxdWlyZShcImZvY3VzLXRyYXBcIik7XG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7IH1cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7IGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpOyB9XG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldOyByZXR1cm4gYXJyMjsgfVxudmFyIGJ1dHRvbk9wZW5OYXZpZ2F0aW9uTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXInKTtcbnZhciBidXR0b25DbG9zZU5hdmlnYXRpb25NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLW5hdmlnYXRpb24tbWVudScpO1xudmFyIG5hdmlnYXRpb25NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyX19uYXZpZ2F0aW9uLW1lbnUnKTtcbnZhciBwcmltYXJ5TmF2aWdhdGlvbkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaW1hcnktbmF2aWdhdGlvbl9fbGluaycpO1xudmFyIGFkZGl0aW9uYWxOYXZpZ2F0aW9uTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkaXRpb25hbC1uYXZpZ2F0aW9uX19saW5rJyk7XG52YXIgZm9jdXNUcmFwID0gKDAsIF9mb2N1c1RyYXAuY3JlYXRlRm9jdXNUcmFwKShuYXZpZ2F0aW9uTWVudSwge1xuICBvbkFjdGl2YXRlOiBmdW5jdGlvbiBvbkFjdGl2YXRlKCkge1xuICAgIHJldHVybiBuYXZpZ2F0aW9uTWVudS5jbGFzc0xpc3QuYWRkKCd1aS1mb2N1cy10cmFwLWFjdGl2ZScpO1xuICB9LFxuICBvbkRlYWN0aXZhdGU6IGZ1bmN0aW9uIG9uRGVhY3RpdmF0ZSgpIHtcbiAgICByZXR1cm4gbmF2aWdhdGlvbk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgndWktZm9jdXMtdHJhcC1hY3RpdmUnKTtcbiAgfSxcbiAgY2hlY2tDYW5Gb2N1c1RyYXA6IGZ1bmN0aW9uIGNoZWNrQ2FuRm9jdXNUcmFwKHRyYXBDb250YWluZXJzKSB7XG4gICAgdmFyIHJlc3VsdHMgPSB0cmFwQ29udGFpbmVycy5tYXAoZnVuY3Rpb24gKHRyYXBDb250YWluZXIpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICB2YXIgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUodHJhcENvbnRhaW5lcikudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgNSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocmVzdWx0cyk7XG4gIH1cbn0pO1xuZnVuY3Rpb24gYWN0aXZhdGlvbk5hdmlnYXRpb25NZW51KGVsZW1lbnQsIGVsZW1lbnRDbGFzcykge1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJcIi5jb25jYXQoZWxlbWVudENsYXNzKSk7XG4gIGZvY3VzVHJhcC5hY3RpdmF0ZSgpO1xuICAoMCwgX3Njcm9sbExvY2suZGlzYWJsZVBhZ2VTY3JvbGwpKGVsZW1lbnQpO1xufVxuZnVuY3Rpb24gZGVhY3RpdmF0aW9uTmF2aWdhdGlvbk1lbnUoZWxlbWVudCwgZWxlbWVudENsYXNzKSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIlwiLmNvbmNhdChlbGVtZW50Q2xhc3MpKTtcbiAgZm9jdXNUcmFwLmRlYWN0aXZhdGUoKTtcbiAgKDAsIF9zY3JvbGxMb2NrLmVuYWJsZVBhZ2VTY3JvbGwpKGVsZW1lbnQpO1xufVxuYnV0dG9uT3Blbk5hdmlnYXRpb25NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBhY3RpdmF0aW9uTmF2aWdhdGlvbk1lbnUobmF2aWdhdGlvbk1lbnUsICd1aS1uYXZpZ2F0aW9uLW1lbnUtYWN0aXZlJyk7XG59KTtcbmJ1dHRvbkNsb3NlTmF2aWdhdGlvbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGRlYWN0aXZhdGlvbk5hdmlnYXRpb25NZW51KG5hdmlnYXRpb25NZW51LCAndWktbmF2aWdhdGlvbi1tZW51LWFjdGl2ZScpO1xufSk7XG5pZiAocHJpbWFyeU5hdmlnYXRpb25MaW5rcykge1xuICBfdG9Db25zdW1hYmxlQXJyYXkocHJpbWFyeU5hdmlnYXRpb25MaW5rcykuZm9yRWFjaChmdW5jdGlvbiAocHJpbWFyeUxpbmspIHtcbiAgICBwcmltYXJ5TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRlYWN0aXZhdGlvbk5hdmlnYXRpb25NZW51KG5hdmlnYXRpb25NZW51LCAndWktbmF2aWdhdGlvbi1tZW51LWFjdGl2ZScpO1xuICAgIH0pO1xuICB9KTtcbn1cbmlmIChhZGRpdGlvbmFsTmF2aWdhdGlvbkxpbmtzKSB7XG4gIF90b0NvbnN1bWFibGVBcnJheShhZGRpdGlvbmFsTmF2aWdhdGlvbkxpbmtzKS5mb3JFYWNoKGZ1bmN0aW9uIChhZGRpdGlvbmFsTGluaykge1xuICAgIGFkZGl0aW9uYWxMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgZGVhY3RpdmF0aW9uTmF2aWdhdGlvbk1lbnUobmF2aWdhdGlvbk1lbnUsICd1aS1uYXZpZ2F0aW9uLW1lbnUtYWN0aXZlJyk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gaGVpZ2h0TmF2aWdhdGlvbk1lbnUoKSB7XG4gIG5hdmlnYXRpb25NZW51LnN0eWxlLnNldFByb3BlcnR5KCctLWhlaWdodC1uYXZpZ2F0aW9uLW1lbnUnLCBcIlwiLmNvbmNhdCh3aW5kb3cuaW5uZXJIZWlnaHQsIFwicHhcIikpO1xufVxuaGVpZ2h0TmF2aWdhdGlvbk1lbnUoKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoZWlnaHROYXZpZ2F0aW9uTWVudSk7XG5cbn0se1wiZm9jdXMtdHJhcFwiOjIsXCJzY3JvbGwtbG9ja1wiOjR9XSwxMDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxucmVxdWlyZShcImZvY3VzLXZpc2libGVcIik7XG5yZXF1aXJlKFwiLi4vY29tcG9uZW50cy9ob21lL19jdXN0b20tc2VsZWN0LWNob29zaW5nLXJlZ2lvblwiKTtcbnJlcXVpcmUoXCIuLi9jb21wb25lbnRzL2hvbWUvX2N1c3RvbS1zZWxlY3QtY2hvb3NpbmctY2F0ZWdvcnlcIik7XG5yZXF1aXJlKFwiLi4vY29tcG9uZW50cy9ob21lL19uYXZpZ2F0aW9uLW1lbnVcIik7XG5yZXF1aXJlKFwiLi4vY29tcG9uZW50cy9nbG9iYWwvX3ByZWxvYWRlclwiKTtcblxufSx7XCIuLi9jb21wb25lbnRzL2dsb2JhbC9fcHJlbG9hZGVyXCI6NixcIi4uL2NvbXBvbmVudHMvaG9tZS9fY3VzdG9tLXNlbGVjdC1jaG9vc2luZy1jYXRlZ29yeVwiOjcsXCIuLi9jb21wb25lbnRzL2hvbWUvX2N1c3RvbS1zZWxlY3QtY2hvb3NpbmctcmVnaW9uXCI6OCxcIi4uL2NvbXBvbmVudHMvaG9tZS9fbmF2aWdhdGlvbi1tZW51XCI6OSxcImZvY3VzLXZpc2libGVcIjozfV19LHt9LFsxMF0pO1xuIl0sImZpbGUiOiJzdXBwbGllcnMtc2NyaXB0cy5qcyJ9
