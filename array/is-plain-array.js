/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var isArray = Array.isArray, getPrototypeOf = Object.getPrototypeOf;

module.exports = function (obj) {
	var proto;
	if (!obj || !isArray(obj)) return false;
	proto = getPrototypeOf(obj);
	if (!isArray(proto)) return false;
	return !isArray(getPrototypeOf(proto));
};
