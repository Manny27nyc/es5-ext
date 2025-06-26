/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var fn = function (value) { return value > 3; };

module.exports = function () {
	var arr = [1, 2, 3, 4, 5, 6];
	if (typeof arr.findIndex !== "function") return false;
	return arr.findIndex(fn) === 3;
};
