/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	var o = new Date(), o2;

	o2 = t.call(o);
	a.not(o, o2, "Different objects");
	a.ok(o2 instanceof Date, "Instance of Date");
	a(o.getTime(), o2.getTime(), "Same time");
};
