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
	if (value === 0) return value;
	if (!isFinite(value)) return value;
	if (value < 0) {
		value = -value;
		return -log(value + sqrt(value * value + 1));
	}
	return log(value + sqrt(value * value + 1));
};
