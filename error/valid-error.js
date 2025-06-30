// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var isError = require("./is-error");

module.exports = function (value) {
	if (!isError(value)) throw new TypeError(value + " is not an Error object");
	return value;
};
