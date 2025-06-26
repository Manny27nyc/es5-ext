/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(RegExp.prototype, "split", {
		value: require("./shim"),
		configurable: true,
		enumerable: false,
		writable: true
	});
}
