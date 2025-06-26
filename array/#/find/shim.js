/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var findIndex = require("../find-index/shim");

// eslint-disable-next-line no-unused-vars
module.exports = function (predicate /*, thisArg*/) {
	var index = findIndex.apply(this, arguments);
	return index === -1 ? undefined : this[index];
};
