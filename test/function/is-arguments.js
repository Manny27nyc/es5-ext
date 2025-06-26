/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	var args, dummy;
	args = (function () { return arguments; })();
	dummy = { 0: 1, 1: 2 };
	Object.defineProperty(dummy, "length", { value: 2 });
	a(t(args), true, "Arguments");
	a(t(dummy), false, "Dummy");
	a(t([]), false, "Array");
};
