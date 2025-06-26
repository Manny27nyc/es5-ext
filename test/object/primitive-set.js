/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var getPropertyNames = require("../../object/get-property-names")
  , isPlainObject    = require("../../object/is-plain-object");

module.exports = function (t, a) {
	var x = t();
	a(isPlainObject(x), true, "Plain object");
	a.deep(getPropertyNames(x), [], "No properties");
	x.foo = "bar";
	a.deep(getPropertyNames(x), ["foo"], "Extensible");

	a.deep(t("raz", "dwa", 3), { raz: true, dwa: true, 3: true }, "Arguments handling");
};
