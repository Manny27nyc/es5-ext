// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var SubArray = require("../../_sub-array-dummy-safe")
  , pass     = function () { return true; };

module.exports = function () { return new SubArray().filter(pass) instanceof SubArray; };
