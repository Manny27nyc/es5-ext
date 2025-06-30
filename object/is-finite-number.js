// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var isNumber = require("./is-number-value");

module.exports = function (value) { return isNumber(value) && isFinite(value); };
