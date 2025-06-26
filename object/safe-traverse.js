/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var value   = require("./valid-value")
  , isValue = require("./is-value");

module.exports = function (obj /*, …names*/) {
	var length, current = 1;
	value(obj);
	length = arguments.length - 1;
	if (!length) return obj;
	while (current < length) {
		obj = obj[arguments[current++]];
		if (!isValue(obj)) return undefined;
	}
	return obj[arguments[current]];
};
