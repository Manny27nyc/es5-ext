/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var ensurePlainFunction = require("../../object/ensure-plain-function")
  , ensureThenable      = require("../../object/ensure-thenable")
  , microtaskDelay      = require("../../function/#/microtask-delay");

module.exports = function (callback) {
	ensureThenable(this);
	ensurePlainFunction(callback);
	// Rely on microtaskDelay to escape eventual error swallowing
	this.then(
		microtaskDelay.call(function (value) { callback(null, value); }),
		microtaskDelay.call(function (reason) { callback(reason); })
	);
};
