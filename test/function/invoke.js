// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var constant = require("../../function/constant")
  , o        = { b: constant("c") };

module.exports = function (t, a) { a(t("b")(o), "c"); };
