/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var shim;

if (!require("./is-implemented")() && (shim = require("./shim"))) {
	Object.defineProperty(Object, "setPrototypeOf", {
		value: shim,
		configurable: true,
		enumerable: false,
		writable: true
	});
}
