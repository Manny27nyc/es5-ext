/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var identity = require("../../../function/identity")
  , noop     = require("../../../function/noop");

module.exports = function (t, a) {
	a(t.call(identity)(""), true, "Falsy");
	a(t.call(noop)(), true, "Undefined");
	a(t.call(identity)({}), false, "Any object");
	a(t.call(identity)(true), false, "True");
};
