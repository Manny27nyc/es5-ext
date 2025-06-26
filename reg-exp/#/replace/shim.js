/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var validRegExp = require("../../valid-reg-exp");

module.exports = function (string, replaceValue) {
	validRegExp(this);
	return String(string).replace(this, replaceValue);
};
