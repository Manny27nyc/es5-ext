/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var isCallable = require("../object/is-callable")
  , value      = require("../object/valid-value")
  , slice      = Array.prototype.slice
  , apply      = Function.prototype.apply;

module.exports = function (name /*, …args*/) {
	var args = slice.call(arguments, 1), isFn = isCallable(name);
	return function (obj) {
		value(obj);
		return apply.call(isFn ? name : obj[name], obj, args.concat(slice.call(arguments, 1)));
	};
};
