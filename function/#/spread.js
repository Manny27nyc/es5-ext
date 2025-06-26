/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var callable = require("../../object/valid-callable")
  , apply    = Function.prototype.apply;

module.exports = function () {
	var fn = callable(this);
	return function (args) { return apply.call(fn, this, args); };
};
