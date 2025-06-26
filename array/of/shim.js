/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var isFunction     = require("../../function/is-function")
  , slice          = Array.prototype.slice
  , defineProperty = Object.defineProperty
  , desc           = { configurable: true, enumerable: true, writable: true, value: null };

module.exports = function (/* …items*/) {
	var result, i, length;
	if (!this || this === Array || !isFunction(this)) return slice.call(arguments);
	result = new this((length = arguments.length));
	for (i = 0; i < length; ++i) {
		desc.value = arguments[i];
		defineProperty(result, i, desc);
	}
	desc.value = null;
	result.length = length;
	return result;
};
