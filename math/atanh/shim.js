/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var log = Math.log;

module.exports = function (value) {
	if (isNaN(value)) return NaN;
	value = Number(value);
	if (value < -1) return NaN;
	if (value > 1) return NaN;
	if (value === -1) return -Infinity;
	if (value === 1) return Infinity;
	if (value === 0) return value;
	return 0.5 * log((1 + value) / (1 - value));
};
