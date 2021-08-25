"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Controller = void 0;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key,
      { value: value, enumerable: true, configurable: true, writable: true });
    }
    else {
      obj[key] = value;
    }
    return obj; 
  }

class Controller {
  constructor(_view, _model) {
    _defineProperty(this, "view", void 0);

    _defineProperty(this, "model", void 0);

    this.view = _view;
    this.model = _model;
  }

  get View() {
    return this.view;
  }

  get Model() {
    return this.model;
  }

}

exports.Controller = Controller;
