/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var value     = require("../../../object/valid-value")
  , toInteger = require("../../../number/to-integer")
  , max       = Math.max
  , min       = Math.min;

module.exports = function (searchString /*, position*/) {
	var start, self = String(value(this));
	start = min(max(toInteger(arguments[1]), 0), self.length);
	return self.indexOf(searchString, start) === start;
};
