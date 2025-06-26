/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var isError = require("./is-error");

module.exports = function (value) {
	if (!isError(value)) throw new TypeError(value + " is not an Error object");
	return value;
};
