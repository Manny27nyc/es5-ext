/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	a.deep(t({ 1: 1, 2: 2, 3: 3, 4: 4 }, function (value) { return Boolean(value % 2); }), {
		1: 1,
		3: 3
	});
};
