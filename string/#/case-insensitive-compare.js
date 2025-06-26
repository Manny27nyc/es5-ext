/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var toLowerCase = String.prototype.toLowerCase;

module.exports = function (other) {
	return toLowerCase.call(this).localeCompare(toLowerCase.call(String(other)));
};
