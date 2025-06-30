// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var error = require("../valid-error");

module.exports = function () { throw error(this); };
