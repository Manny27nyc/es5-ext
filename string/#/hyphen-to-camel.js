/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var replace = String.prototype.replace, re = /-([a-z0-9])/g;
var toUpperCase = function (ignored, a) { return a.toUpperCase(); };

module.exports = function () { return replace.call(this, re, toUpperCase); };
