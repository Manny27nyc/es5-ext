// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var validRegExp = require("../valid-reg-exp")
  , re          = /\/[a-xz]*y[a-xz]*$/;

module.exports = function () { return Boolean(String(validRegExp(this)).match(re)); };
