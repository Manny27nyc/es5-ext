/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var objToString = Object.prototype.toString, id = objToString.call(1);

module.exports = function (value) {
	return (
		typeof value === "number" ||
		value instanceof Number ||
		(typeof value === "object" && objToString.call(value) === id)
	);
};
