/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var exp = Math.exp;

module.exports = function (value) {
	var num1, num2;
	if (isNaN(value)) return NaN;
	value = Number(value);
	if (value === 0) return value;
	if (value === Infinity) return 1;
	if (value === -Infinity) return -1;
	num1 = exp(value);
	if (num1 === Infinity) return 1;
	num2 = exp(-value);
	if (num2 === Infinity) return -1;
	return (num1 - num2) / (num1 + num2);
};
