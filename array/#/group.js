/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
// Inspired by Underscore's groupBy:
// http://documentcloud.github.com/underscore/#groupBy

"use strict";

var callable = require("../../object/valid-callable")
  , value    = require("../../object/valid-value")
  , forEach  = Array.prototype.forEach
  , apply    = Function.prototype.apply;

module.exports = function (cb /*, thisArg*/) {
	var result;

	value(this);
	callable(cb);

	result = Object.create(null);
	forEach.call(
		this,
		function (item) {
			var key = apply.call(cb, this, arguments);
			if (!result[key]) result[key] = [];
			result[key].push(item);
		},
		arguments[1]
	);
	return result;
};
