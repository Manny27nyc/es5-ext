// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
// Thanks to Andrew Clover:
// http://stackoverflow.com/questions/3561493
// /is-there-a-regexp-escape-function-in-javascript

"use strict";

var re = /[-/\\^$*+?.()|[\]{}]/g;

module.exports = function (str) { return String(str).replace(re, "\\$&"); };
