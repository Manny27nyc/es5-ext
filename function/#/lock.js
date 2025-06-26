/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var callable = require("../../object/valid-callable")
  , apply    = Function.prototype.apply;

module.exports = function (/* …args*/) {
	var fn = callable(this), args = arguments;

	return function () { return apply.call(fn, this, args); };
};
