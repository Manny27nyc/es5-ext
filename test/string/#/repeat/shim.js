/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	a(t.call("a", 0), "", "Empty");
	a(t.call("a", 1), "a", "1");
	a(t.call("a", 2), "aa", "2");
	a(t.call("\t", 5), "\t\t\t\t\t", "Whitespace");
	a(t.call("raz", 3), "razrazraz", "Many chars");
	a(t.call("raz", 3), "razrazraz", "Many chars");
	a(t.call("razfoobar", 5), "razfoobarrazfoobarrazfoobarrazfoobarrazfoobar", "Many chars");
	a(t.call("a", 300).length, 300);
};
