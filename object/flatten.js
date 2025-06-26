/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var isPlainObject = require("./is-plain-object")
  , forEach       = require("./for-each")
  , process;

process = function self(value, key) {
	if (isPlainObject(value)) forEach(value, self, this);
	else this[key] = value;
};

module.exports = function (obj) {
	var flattened = {};
	forEach(obj, process, flattened);
	return flattened;
};
