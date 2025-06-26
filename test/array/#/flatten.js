/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var o = [1, 2, [3, 4, [5, 6], 7, 8], 9, 10, [11, 12, [13, 14]], 15];

module.exports = {
	"__generic": function (t, a) { a(t.call(this).length, 3); },
	"Nested Arrays": function (t, a) {
		var result = t.call(o);
		a.not(o, result);
		a.deep(result, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
	}
};
