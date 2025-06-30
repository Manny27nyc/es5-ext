// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var value = require("../../object/valid-value");

module.exports = function () {
	var str = String(value(this));
	return str.charAt(0).toUpperCase() + str.slice(1);
};
