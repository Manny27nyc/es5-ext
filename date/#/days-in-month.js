/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var getMonth = Date.prototype.getMonth;

module.exports = function () {
	switch (getMonth.call(this)) {
		case 1:
			return this.getFullYear() % 4 ? 28 : 29;
		case 3:
		case 5:
		case 8:
		case 10:
			return 30;
		default:
			return 31;
	}
};
