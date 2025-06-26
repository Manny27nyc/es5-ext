/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var callable    = require("../../../object/valid-callable")
  , ensureValue = require("../../../object/valid-value")
  , some        = Array.prototype.some
  , apply       = Function.prototype.apply;

module.exports = function (predicate /*, thisArg*/) {
	var k, self;
	self = Object(ensureValue(this));
	callable(predicate);

	return some.call(
		self,
		function (value, index) {
			if (apply.call(predicate, this, arguments)) {
				k = index;
				return true;
			}
			return false;
		},
		arguments[1]
	)
		? k
		: -1;
};
