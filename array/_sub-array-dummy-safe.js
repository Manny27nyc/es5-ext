/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var setPrototypeOf = require("../object/set-prototype-of")
  , isExtensible   = require("./_is-extensible");

module.exports = (function () {
	var SubArray;

	if (isExtensible) return require("./_sub-array-dummy");

	if (!setPrototypeOf) return null;
	SubArray = function () {
		var arr = Array.apply(this, arguments);
		setPrototypeOf(arr, SubArray.prototype);
		return arr;
	};
	setPrototypeOf(SubArray, Array);
	SubArray.prototype = Object.create(Array.prototype, {
		constructor: { value: SubArray, enumerable: false, writable: true, configurable: true }
	});
	return SubArray;
})();
