/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var value = require("../../object/valid-value");

module.exports = function () {
	var self = String(value(this)), length = self.length;
	return length ? self[length - 1] : null;
};
