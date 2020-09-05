"use strict";

exports.__esModule = true;
exports.ENV = void 0;
let ENV;
exports.ENV = ENV;

(function (ENV) {
  ENV["LOCAL"] = "local";
  ENV["STAGE"] = "stage";
  ENV["SANDBOX"] = "sandbox";
  ENV["PRODUCTION"] = "production";
  ENV["TEST"] = "test";
  ENV["DEMO"] = "demo";
})(ENV || (exports.ENV = ENV = {}));