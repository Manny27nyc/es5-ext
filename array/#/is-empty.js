// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var ensureArray = require("../../object/ensure-array")
  , firstIndex  = require("./first-index");

module.exports = function () { return firstIndex.call(ensureArray(this)) === null; };
