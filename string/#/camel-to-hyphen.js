/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var replace = String.prototype.replace, re = /([A-Z])/g;

module.exports = function () {
	var str = replace.call(this, re, "-$1").toLowerCase();
	if (str[0] === "-") str = str.slice(1);
	return str;
};
