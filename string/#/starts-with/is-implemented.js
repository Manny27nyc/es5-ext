/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var str = "razdwatrzy";

module.exports = function () {
	if (typeof str.startsWith !== "function") return false;
	return str.startsWith("trzy") === false && str.startsWith("raz") === true;
};
