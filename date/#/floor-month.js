// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var floorDay = require("./floor-day");

module.exports = function () {
	floorDay.call(this).setDate(1);
	return this;
};
