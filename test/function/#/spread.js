/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var f = function (a, b) { return this[a] + this[b]; }, o = { a: 3, b: 4 };

module.exports = function (t, a) { a(t.call(f).call(o, ["a", "b"]), 7); };
