"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actionTypes = require("../actions/actionTypes");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  columnDataUser: [// { title: "No", field: "id" },
  {
    title: "Full Name",
    field: "fullname"
  }, {
    title: "Username",
    field: "username"
  }, {
    title: "Email Address",
    field: "email"
  }, {
    title: "Role",
    field: "role",
    lookup: {
      worker: "worker",
      planner: "planner"
    }
  }],
  createNewUser: {
    fullname: "",
    username: "",
    email: "",
    password: "",
    role: ""
  },
  columnDataProject: [// { title: "No", field: "id" },
  {
    title: "Assignee",
    field: "assignee"
  }, {
    title: "Project Title",
    field: "title"
  }, {
    title: "Status",
    field: "status",
    lookup: {
      submit: "submit",
      reject: "reject",
      done: "done"
    }
  }]
};

var spvReducer = function spvReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var payload = action.payload,
      type = action.type;
  console.log(payload);

  switch (type) {
    case _actionTypes.SPV_CREATE_USER:
      return _objectSpread({}, state.createNewUser, {
        createNewUser: payload
      });

    case _actionTypes.SPV_COLUMN_DATA:
    case _actionTypes.SPV_DATA_REQUEST:
    default:
      return state;
  }
};

var _default = spvReducer;
exports["default"] = _default;