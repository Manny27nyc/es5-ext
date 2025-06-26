/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var forEach = Array.prototype.forEach;

module.exports = function (sep) {
	var result = [];
	forEach.call(this, function (val) { result.push(val, sep); });
	result.pop();
	return result;
};
