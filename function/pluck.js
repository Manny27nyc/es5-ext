// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var value = require("../object/valid-value");

module.exports = function (name) {
	return function (obj) { return value(obj)[name]; };
};
