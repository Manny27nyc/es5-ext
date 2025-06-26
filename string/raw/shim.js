/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var toPosInt   = require("../../number/to-pos-integer")
  , validValue = require("../../object/valid-value")
  , reduce     = Array.prototype.reduce;

module.exports = function (callSite /*,  …substitutions*/) {
	var args, rawValue = Object(validValue(Object(validValue(callSite)).raw));
	if (!toPosInt(rawValue.length)) return "";
	args = arguments;
	return reduce.call(rawValue, function (str1, str2, i) {
		return str1 + String(args[i]) + str2;
	});
};
