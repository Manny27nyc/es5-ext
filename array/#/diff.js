/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var value    = require("../../object/valid-value")
  , contains = require("./contains")
  , filter   = Array.prototype.filter;

module.exports = function (other) {
	value(this);
	value(other);
	return filter.call(this, function (item) { return !contains.call(other, item); });
};
