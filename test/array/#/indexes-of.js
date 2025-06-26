/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = {
	"__generic": function (t, a) { a.deep(t.call(this, this[1]), [1]); },
	"": function (t, a) {
		var x = {};
		a.deep(t.call([1, 3, 5, 3, 5], 6), [], "No result");
		a.deep(t.call([1, 3, 5, 1, 3, 5, 1], 1), [0, 3, 6], "Some results");
		a.deep(t.call([], x), [], "Empty array");
		a.deep(t.call([x, 3, {}, x, 3, 5, x], x), [0, 3, 6], "Search for object");
	}
};
