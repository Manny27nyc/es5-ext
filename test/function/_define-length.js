/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	var foo = "raz", bar = "dwa", fn = function (a, b) { return this + a + b + foo + bar; }, result;

	result = t(fn, 3);
	a(result.call("marko", "el", "fe"), "markoelferazdwa", "Content");
	a(result.length, 3, "Length");
	a(result.prototype, fn.prototype, "Prototype");
};
