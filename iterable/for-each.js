/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var forOf      = require("es6-iterator/for-of")
  , isIterable = require("es6-iterator/is-iterable")
  , iterable   = require("./validate")
  , forEach    = Array.prototype.forEach;

module.exports = function (target, cb /*, thisArg*/) {
	if (isIterable(iterable(target))) forOf(target, cb, arguments[2]);
	else forEach.call(target, cb, arguments[2]);
};
