/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var floorDay = require("./floor-day");

module.exports = function () {
	floorDay.call(this).setDate(1);
	return this;
};
