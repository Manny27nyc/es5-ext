/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var isEmpty = require("../../object/is-empty");

module.exports = function (t, a) {
	var x = {};
	a(t(x), x, "Empty: Returns same object");
	a(isEmpty(x), true, "Empty: Not changed");
	x.foo = "raz";
	x.bar = "dwa";
	a(t(x), x, "Same object");
	a(isEmpty(x), true, "Emptied");
};
