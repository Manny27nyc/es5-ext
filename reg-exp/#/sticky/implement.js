// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var isSticky = require("../is-sticky");

if (!require("./is-implemented")()) {
	Object.defineProperty(RegExp.prototype, "sticky", {
		configurable: true,
		enumerable: false,
		get: isSticky
	});
}
