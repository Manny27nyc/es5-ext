// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var isValue = require("./is-value");

var map = { function: true, object: true };

module.exports = function (value) { return (isValue(value) && map[typeof value]) || false; };
