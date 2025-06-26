/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = {
	"__generic": function (t, a) {
		var x = {};
		a.deep(t.call(this, this, [this[0], this[2], x]), [x]);
	},
	"": function (t, a) {
		var x = {}, y = {};

		a.deep(t.call([x, y]), [x, y], "No arguments");
		a.deep(t.call([x, 1], [], []), [x, 1], "Empty arguments");
		a.deep(t.call([1, "raz", x], [2, "raz", y], [2, "raz", x]), [1, y]);
	}
};
