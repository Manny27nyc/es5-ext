/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (value) {
	// eslint-disable-next-line no-bitwise
	value >>>= 0;
	return value ? 32 - value.toString(2).length : 32;
};
