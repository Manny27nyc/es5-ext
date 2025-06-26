/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var partial = require("../../../function/#/partial");

module.exports = {
	Left: function (t, a) {
		t = partial.call(t, "x", 5);

		a(t.call("yy"), "xxxyy");
		a(t.call(""), "xxxxx", "Empty string");

		a(t.call("yyyyy"), "yyyyy", "Equal length");
		a(t.call("yyyyyyy"), "yyyyyyy", "Longer");
	},
	Right: function (t, a) {
		t = partial.call(t, "x", -5);

		a(t.call("yy"), "yyxxx");
		a(t.call(""), "xxxxx", "Empty string");

		a(t.call("yyyyy"), "yyyyy", "Equal length");
		a(t.call("yyyyyyy"), "yyyyyyy", "Longer");
	}
};
