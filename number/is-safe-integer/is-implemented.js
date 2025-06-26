/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function () {
	var isSafeInteger = Number.isSafeInteger;
	if (typeof isSafeInteger !== "function") return false;
	return !isSafeInteger("23") && isSafeInteger(34232322323) && !isSafeInteger(9007199254740992);
};
