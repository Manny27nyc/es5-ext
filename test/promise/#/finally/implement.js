// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var isImplemented = require("../../../../promise/#/finally/is-implemented");

if (typeof Promise !== "function") global.Promise = require("plain-promise");

module.exports = function (a) { a(isImplemented(), true); };
