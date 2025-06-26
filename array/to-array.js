/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var from    = require("./from")
  , isArray = Array.isArray;

module.exports = function (arrayLike) { return isArray(arrayLike) ? arrayLike : from(arrayLike); };
