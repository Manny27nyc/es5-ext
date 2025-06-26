/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var isNumber = require("./is-number-value");

module.exports = function (value) { return isNumber(value) && isFinite(value); };
