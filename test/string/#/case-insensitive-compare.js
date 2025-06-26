/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	a(t.call("AA", "aa"), 0, "Same");
	a.ok(t.call("Amber", "zebra") < 0, "Less");
	a.ok(t.call("Zebra", "amber") > 0, "Greater");
};
