/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	var foo = "raz", bar = "dwa";
	// eslint-disable-next-line func-names
	var fn = function marko(a, b) { return this + a + b + foo + bar; };
	var result, o = {};

	fn.prototype = o;

	fn.foo = "raz";

	result = t.call(fn);

	a(result.length, fn.length, "Length");
	a(result.name, fn.name, "Length");
	a(result.call("marko", "el", "fe"), "markoelferazdwa", "Body");
	a(result.prototype, fn.prototype, "Prototype");
	a(result.foo, fn.foo, "Custom property");
};
