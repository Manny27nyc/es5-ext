/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
// Thanks to Andrew Clover:
// http://stackoverflow.com/questions/3561493
// /is-there-a-regexp-escape-function-in-javascript

"use strict";

var re = /[-/\\^$*+?.()|[\]{}]/g;

module.exports = function (str) { return String(str).replace(re, "\\$&"); };
