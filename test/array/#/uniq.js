/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = {
	"__generic": function (t, a) { a(t.call(this).length, 3); },
	"": function (t, a) {
		var o, x = {}, y = {}, z = {}, w;
		o = [1, 2, x, 3, 1, "raz", "1", y, x, "trzy", z, "raz"];

		a.not((w = t.call(o)), o, "Returns different object");
		a.deep(w, [1, 2, x, 3, "raz", "1", y, "trzy", z], "Result");
	}
};
