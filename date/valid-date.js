// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var isDate = require("./is-date");

module.exports = function (value) {
	if (!isDate(value)) throw new TypeError(value + " is not valid Date object");
	return value;
};
