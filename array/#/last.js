/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var lastIndex = require("./last-index");

module.exports = function () {
	var i;
	if ((i = lastIndex.call(this)) !== null) return this[i];
	return undefined;
};
