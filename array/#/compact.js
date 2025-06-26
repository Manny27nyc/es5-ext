/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
// Inspired by: http://documentcloud.github.com/underscore/#compact

"use strict";

var isValue = require("../../object/is-value");

var filter = Array.prototype.filter;

module.exports = function () {
	return filter.call(this, function (val) { return isValue(val); });
};
