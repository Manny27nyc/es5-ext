// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(Math, "imul", {
		value: require("./shim"),
		configurable: true,
		enumerable: false,
		writable: true
	});
}
