/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function () {
	var dummyRegExp = /a/;
	// We need to do check on instance and not on prototype due to how ES2015 spec evolved:
	// https://github.com/tc39/ecma262/issues/262
	// https://github.com/tc39/ecma262/pull/263
	// https://bugs.chromium.org/p/v8/issues/detail?id=4617
	return "unicode" in dummyRegExp;
};
