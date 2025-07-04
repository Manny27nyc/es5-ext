// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var firstIndex = require("./first-index");

module.exports = function () {
	var i;
	if ((i = firstIndex.call(this)) !== null) return this[i];
	return undefined;
};
