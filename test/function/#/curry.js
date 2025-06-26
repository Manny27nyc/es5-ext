/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var toArray = require("../../../array/to-array")
  , f       = function () { return toArray(arguments); };

module.exports = function (t, a) {
	var x, y = {}, z;
	a.deep(t.call(f, 0, 1, 2)(3), [], "0 arguments");
	x = t.call(f, 5, {});
	a(x.length, 5, "Length #1");
	z = x(1, 2);
	a(z.length, 3, "Length #2");
	z = z(3, 4);
	a(z.length, 1, "Length #1");
	a.deep(z(5, 6), [1, 2, 3, 4, 5], "Many arguments");
	a.deep(x(8, 3)(y, 45)("raz", 6), [8, 3, y, 45, "raz"], "Many arguments #2");
};
