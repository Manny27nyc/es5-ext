/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var constant = require("../../function/constant")
  , o        = { b: constant("c") };

module.exports = function (t, a) { a(t("b")(o), "c"); };
