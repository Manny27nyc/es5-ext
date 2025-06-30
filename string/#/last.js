// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var value = require("../../object/valid-value");

module.exports = function () {
	var self = String(value(this)), length = self.length;
	return length ? self[length - 1] : null;
};
