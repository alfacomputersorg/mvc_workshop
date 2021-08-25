"use strict";

var _index = require("./core/index");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj; 
}

class Main {
  constructor(_title) {
    _defineProperty(this, "title", "");

    this.title = _title;
  }

  run() {
    console.log("Application is Running");
    let controller = new _index.Controller({
      model: "model"
    }, {
      view: "view"
    });
    console.log(controller.Model);
    console.log(controller.View);
    console.log(controller);
  }

}

const main = new Main("Application");
main.run();
