/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	var x = {}, y = {}, o = { foo: "bar", raz: x, trzy: "cztery", five: "6" };

	a(t(o, "bar"), "foo", "First property");
	a(t(o, 6), null, "Primitive that's not there");
	a(t(o, x), "raz", "Object");
	a(t(o, y), null, "Object that's not there");
	a(t(o, "6"), "five", "Last property");
};
