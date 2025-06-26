/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	var d = new Date();
	a(t(d), d, "Date");
	a.throws(function () { t({}); }, "Object");
	a.throws(function () {
		t({ valueOf: function () { return 20; } });
	}, "Number object");
};
