/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var indexOf = require("./e-index-of");

module.exports = function (searchElement /*, position*/) {
	return indexOf.call(this, searchElement, arguments[1]) > -1;
};
