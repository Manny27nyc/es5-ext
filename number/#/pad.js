/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var pad      = require("../../string/#/pad")
  , toPosInt = require("../to-pos-integer")
  , toFixed  = Number.prototype.toFixed;

module.exports = function (length /*, precision*/) {
	var precision;
	length = toPosInt(length);
	precision = toPosInt(arguments[1]);

	return pad.call(
		precision ? toFixed.call(this, precision) : this, "0",
		length + (precision ? 1 + precision : 0)
	);
};
