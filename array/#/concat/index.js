// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

module.exports = require("./is-implemented")() ? Array.prototype.concat : require("./shim");
