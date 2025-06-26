/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var eq   = require("./eq")
  , some = require("./some");

module.exports = function (obj, searchValue) {
	var result;
	return some(obj, function (value, name) {
		if (eq(value, searchValue)) {
			result = name;
			return true;
		}
		return false;
	})
		? result
		: null;
};
