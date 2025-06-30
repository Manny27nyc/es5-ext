// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var isObject = require("./is-object");

module.exports = function (value) {
	if (!isObject(value)) throw new TypeError(value + " is not an Object");
	return value;
};
