/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	t = t({ a: "A", aa: "B", ab: "C", b: "D", c: function () { return ++this.a; } });
	a(t.call({ a: 0 }, " %a%aab%abb%b\\%aa%ab%c%c "), " ABbCbD%aaC12 ");
};
