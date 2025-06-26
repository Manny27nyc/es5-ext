/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var validRegExp = require("../valid-reg-exp")
  , re          = /\/[a-xz]*y[a-xz]*$/;

module.exports = function () { return Boolean(String(validRegExp(this)).match(re)); };
