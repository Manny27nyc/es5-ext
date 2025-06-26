/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var ensureArray = require("../../object/ensure-array")
  , firstIndex  = require("./first-index");

module.exports = function () { return firstIndex.call(ensureArray(this)) === null; };
