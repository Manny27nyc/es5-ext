// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var objToString = Object.prototype.toString, id = objToString.call(/a/);

module.exports = function (value) {
	return (value && (value instanceof RegExp || objToString.call(value) === id)) || false;
};
