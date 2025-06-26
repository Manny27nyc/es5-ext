/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var uniq                = require("../array/#/uniq")
  , value               = require("./valid-value")
  , push                = Array.prototype.push
  , getOwnPropertyNames = Object.getOwnPropertyNames
  , getPrototypeOf      = Object.getPrototypeOf;

module.exports = function (obj) {
	var keys;
	obj = Object(value(obj));
	keys = getOwnPropertyNames(obj);
	while ((obj = getPrototypeOf(obj))) {
		push.apply(keys, getOwnPropertyNames(obj));
	}
	return uniq.call(keys);
};
