// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var setHours = Date.prototype.setHours;

module.exports = function () {
	setHours.call(this, 0, 0, 0, 0);
	return this;
};
