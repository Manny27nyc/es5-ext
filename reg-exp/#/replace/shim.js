// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var validRegExp = require("../../valid-reg-exp");

module.exports = function (string, replaceValue) {
	validRegExp(this);
	return String(string).replace(this, replaceValue);
};
