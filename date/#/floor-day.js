/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var setHours = Date.prototype.setHours;

module.exports = function () {
	setHours.call(this, 0, 0, 0, 0);
	return this;
};
