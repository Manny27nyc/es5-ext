/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var isNatural     = require("../number/is-natural")
  , toShortString = require("../to-short-string-representation");

module.exports = function (arg) {
	var num = Number(arg);
	if (!isNatural(num)) throw new TypeError(toShortString(arg) + " is not a natural number");
	return num;
};
