/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	a.deep(t({ a: { aa: 1, ab: 2 }, b: { ba: 3, bb: 4 } }), { aa: 1, ab: 2, ba: 3, bb: 4 });
};
