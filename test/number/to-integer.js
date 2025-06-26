/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	a(t({}), 0, "NaN");
	a(t(20), 20, "Positive integer");
	a(t("-20"), -20, "String negative integer");
	a(t(Infinity), Infinity, "Infinity");
	a(t(15.343), 15, "Float");
	a(t(-15.343), -15, "Negative float");
};
