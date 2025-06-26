/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var numIsNaN = require("../number/is-nan");

module.exports = function (val1, val2) {
	return val1 === val2 || (numIsNaN(val1) && numIsNaN(val2));
};
