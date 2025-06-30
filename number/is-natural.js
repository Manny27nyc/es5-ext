// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var isInteger = require("./is-integer");

module.exports = function (num) { return isInteger(num) && num >= 0; };
