/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var isUnicode = require("../is-unicode");

if (!require("./is-implemented")()) {
	Object.defineProperty(RegExp.prototype, "unicode", {
		configurable: true,
		enumerable: false,
		get: isUnicode
	});
}
