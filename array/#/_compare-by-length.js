/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
// Used internally to sort array of lists by length

"use strict";

var toPosInt = require("../../number/to-pos-integer");

module.exports = function (arr1, arr2) { return toPosInt(arr1.length) - toPosInt(arr2.length); };
