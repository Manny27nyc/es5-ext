// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

module.exports = require("./is-implemented")()
	? String.prototype[require("es6-symbol").iterator]
	: require("./shim");
