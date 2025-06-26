/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	var x = {};
	a(t.call([3, "raz", {}, x, {}, x], x), 5, "Regular");
	a(t.call([3, "raz", NaN, {}, x], NaN), 2, "NaN");
	a(t.call([3, "raz", 0, {}, -0], -0), 4, "-0");
	a(t.call([3, "raz", -0, {}, 0], +0), 4, "+0");
	a(t.call([3, "raz", NaN, {}, NaN], NaN, 3), 2, "fromIndex");
	a(t.call([3, "raz", NaN, 2, NaN], NaN, -1), 4, "Negative fromIndex #1");
	a(t.call([3, "raz", NaN, 2, NaN], NaN, -2), 2, "Negative fromIndex #2");
};
