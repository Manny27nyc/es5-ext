/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var isValidFormat = RegExp.prototype.test.bind(/^[a-z0-9]+$/);

module.exports = function (t, a) {
	a(typeof t(), "string");
	a.ok(t().length > 7);
	a.not(t({ isUnique: true }), t({ isUnique: true }));
	a.ok(isValidFormat(t()));
	a(t({ length: 1 }).length, 1);
	a(t({ length: 100 }).length, 100);
	a(t({ length: 0 }), "");
};
