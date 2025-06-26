/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var isArray = Array.isArray;

module.exports = function (value) {
	if (isArray(value)) return value;
	throw new TypeError(value + " is not an array");
};
