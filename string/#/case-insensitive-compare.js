// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var toLowerCase = String.prototype.toLowerCase;

module.exports = function (other) {
	return toLowerCase.call(this).localeCompare(toLowerCase.call(String(other)));
};
