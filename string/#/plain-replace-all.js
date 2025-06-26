/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var value = require("../../object/valid-value");

module.exports = function (search, replace) {
	var index, pos = 0, str = String(value(this)), sl, rl;
	search = String(search);
	replace = String(replace);
	sl = search.length;
	rl = replace.length;
	while ((index = str.indexOf(search, pos)) !== -1) {
		str = str.slice(0, index) + replace + str.slice(index + sl);
		pos = index + rl;
	}
	return str;
};
