/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	var x = {};
	a(t.call([]), true, "Empty");
	a(t.call({ length: 0 }), true, "Empty lists");
	a(t.call([1, x, "raz"]), false, "Non empty");
};
