/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var isClassStr = RegExp.prototype.test.bind(/^\s*class[\s{/}]/)
  , fnToString = Function.prototype.toString;

module.exports = function (fn) {
	if (typeof fn !== "function") return false;
	if (typeof fn.call !== "function") return false;
	if (typeof fn.apply !== "function") return false;
	return !isClassStr(fnToString.call(fn));
};
