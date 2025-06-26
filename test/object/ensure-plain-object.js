/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	// Just sanity checks, as logic is tested at isPlainFunction
	var obj = {};
	a(t(obj), obj, "Reguar object instance");
	obj = Object.create(null);
	a(t(obj), obj, "Null prototype");
	a.throws(
		function () {
			t(function () {});
		},
		TypeError,
		"Error"
	);
};
