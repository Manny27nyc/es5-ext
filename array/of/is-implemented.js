/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function () {
	var of = Array.of, result;
	if (typeof of !== "function") return false;
	result = of("foo", "bar");
	return Boolean(result && result[1] === "bar");
};
