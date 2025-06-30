// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var objToString = Object.prototype.toString, id = objToString.call(new Error());

module.exports = function (value) {
	return (value && (value instanceof Error || objToString.call(value) === id)) || false;
};
