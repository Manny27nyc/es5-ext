/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	// Just sanity checks as proper tests are at isThenable
	var thenable = { then: function () {} };

	a.throws(function () { t({}); }, TypeError);
	a(t(thenable), thenable);
};
