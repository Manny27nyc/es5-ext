/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	var r = /raz/;
	a(t(r), r, "Direct");
	r = new RegExp("foo");
	a(t(r), r, "Constructor");
	a.throws(function () { t({}); }, "Object");
	a.throws(function () {
		t(function () {});
	}, "Function");
	a.throws(function () {
		t({ exec: function () { return 20; } });
	}, "Plain object");
};
