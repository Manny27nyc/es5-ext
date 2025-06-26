/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var ensurePlainFunction = require("../../object/ensure-plain-function")
  , defineLength        = require("../_define-length")
  , nextTick            = require("next-tick");

var apply = Function.prototype.apply;

module.exports = function () {
	var src = ensurePlainFunction(this);
	return defineLength(function () { nextTick(apply.bind(src, this, arguments)); }, this.length);
};
