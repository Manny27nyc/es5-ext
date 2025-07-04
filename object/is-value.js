// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var _undefined = require("../function/noop")(); // Support ES3 engines

module.exports = function (val) { return val !== _undefined && val !== null; };
