// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var floorMonth = require("./floor-month");

module.exports = function () {
	floorMonth.call(this).setMonth(0);
	return this;
};
