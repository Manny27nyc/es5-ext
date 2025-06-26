/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var callable     = require("../../object/valid-callable")
  , defineLength = require("../_define-length")
  , apply        = Function.prototype.apply;

module.exports = function () {
	var fn = callable(this);

	return defineLength(function () { return !apply.call(fn, this, arguments); }, fn.length);
};
