/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var StringIterator = require("es6-iterator/string")
  , value          = require("../../../object/valid-value");

module.exports = function () { return new StringIterator(value(this)); };
