/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var toArray = require("../../../array/to-array")
  , f       = function () { return toArray(arguments); };

module.exports = function (t, a) { a.deep(t.call(f, 1)(2, 3), [1, 2, 3]); };
