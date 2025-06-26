/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var indexOf = String.prototype.indexOf, slice = String.prototype.slice;

module.exports = function (search, replace) {
	var index = indexOf.call(this, search);
	if (index === -1) return String(this);
	return slice.call(this, 0, index) + replace + slice.call(this, index + String(search).length);
};
