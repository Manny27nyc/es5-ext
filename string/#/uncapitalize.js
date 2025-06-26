/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var ensureStringifiable = require("../../object/validate-stringifiable-value");

module.exports = function () {
	var str = ensureStringifiable(this);
	return str.charAt(0).toLowerCase() + str.slice(1);
};
