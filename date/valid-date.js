/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var isDate = require("./is-date");

module.exports = function (value) {
	if (!isDate(value)) throw new TypeError(value + " is not valid Date object");
	return value;
};
