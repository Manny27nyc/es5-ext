/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var o = { call: Function.prototype.call, apply: Function.prototype.apply };

module.exports = function (t, a) {
	a(t(function () {}), true, "Function is function");
	a(t(o), false, "Plain object is not function");
	var asyncFunction;
	try { asyncFunction = eval("async () => {}"); }
	catch (error) {}
	if (asyncFunction) {
		a(t(asyncFunction), true, "Async function is function");
	}
};
