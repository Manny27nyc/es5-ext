/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	a.deep(t({ foo: "bar" }), [["foo", "bar"]], "Object");
	a.deep(
		t("raz"),
		[
			["0", "r"], ["1", "a"], ["2", "z"]
		],
		"Primitive"
	);
	a.throws(function () { t(); }, TypeError, "Undefined");
	a.throws(function () { t(null); }, TypeError, "Undefined");
};
