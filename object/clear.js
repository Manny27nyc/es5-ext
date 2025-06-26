/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var keys = require("./keys");

module.exports = function (obj) {
	var error;
	keys(obj).forEach(function (key) {
		try {
			delete this[key];
		} catch (e) {
			if (!error) error = e;
		}
	}, obj);
	if (error !== undefined) throw error;
	return obj;
};
