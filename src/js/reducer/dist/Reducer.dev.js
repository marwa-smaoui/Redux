"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _actionTypes = require("../const/actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  listItem: [{
    task: 'eat',
    isDone: false,
    id: Math.random()
  }]
};

var Reducer = function Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _actionTypes.ADD_TASK:
      return _objectSpread({}, state, {
        listItem: [].concat(_toConsumableArray(state.listItem), [payload])
      });

    case _actionTypes.DELETE_TASK:
      return _objectSpread({}, state, {
        listItem: state.listItem.filter(function (item) {
          return item.id !== payload;
        })
      });

    case _actionTypes.COMPLETE_TASK:
      return _objectSpread({}, state, {
        listItem: state.listItem.map(function (item) {
          return item.id == payload ? _objectSpread({}, item, {
            isDone: !item.isDone
          }) : item;
        })
      });

    case _actionTypes.EDIT_TASK:
      return _objectSpread({}, state, {
        listItem: state.listItem.map(function (item) {
          return item.id === payload.id ? _objectSpread({}, item, {
            task: payload.taskModified
          }) : item;
        })
      });

    default:
      return state;
      ;
  }
};

var _default = Reducer;
exports["default"] = _default;