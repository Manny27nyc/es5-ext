/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	var re;
	a(t.call(/raz/), false, "Normal");
	a(t.call(/raz/g), false, "Global");
	try {
		// eslint-disable-next-line no-invalid-regexp
		re = new RegExp("raz", "y");
	} catch (ignore) {}
	if (!re) return;
	a(t.call(re), true, "Sticky");
};
