/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var mixin         = require("../../object/mixin")
  , validFunction = require("../valid-function")
  , re            = /^\s*function\s*([\0-')-\uffff]+)*\s*\(([\0-(*-\uffff]*)\)\s*\{/;

module.exports = function () {
	var match = String(validFunction(this)).match(re), fn;

	// eslint-disable-next-line no-new-func
	fn = new Function(
		"fn",
		"return function " +
			match[1].trim() +
			"(" +
			match[2] +
			") { return fn.apply(this, arguments); };"
	)(this);
	try { mixin(fn, this); }
	catch (ignore) {}
	return fn;
};
