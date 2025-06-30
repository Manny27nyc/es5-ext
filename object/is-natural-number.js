// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var isNatural = require("../number/is-natural");

module.exports = function (arg) { return isNatural(Number(arg)); };
