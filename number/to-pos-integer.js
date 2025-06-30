// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var toInteger = require("./to-integer")
  , max       = Math.max;

module.exports = function (value) { return max(0, toInteger(value)); };
