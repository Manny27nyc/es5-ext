/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var indexOf = require("./e-index-of");

module.exports = function (value /*, fromIndex*/) {
	var result = [], i, fromIndex = arguments[1];
	while ((i = indexOf.call(this, value, fromIndex)) !== -1) {
		result.push(i);
		fromIndex = i + 1;
	}
	return result;
};
