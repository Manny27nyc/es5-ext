/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var log = Math.log, sqrt = Math.sqrt;

module.exports = function (value) {
	if (isNaN(value)) return NaN;
	value = Number(value);
	if (value < 1) return NaN;
	if (value === 1) return 0;
	if (value === Infinity) return value;
	return log(value + sqrt(value * value - 1));
};
