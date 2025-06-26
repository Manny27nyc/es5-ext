/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var objToString = Object.prototype.toString, id = objToString.call(true);

module.exports = function (value) {
	return (
		typeof value === "boolean" ||
		(typeof value === "object" && (value instanceof Boolean || objToString.call(value) === id))
	);
};
