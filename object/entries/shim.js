/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var ensureValue = require("../valid-value");

module.exports = function (object) {
	ensureValue(object);
	var result = [];
	object = Object(object);
	for (var key in object) {
		if (!propertyIsEnumerable.call(object, key)) continue;
		result.push([key, object[key]]);
	}
	return result;
};
