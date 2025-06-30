// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(Number, "isSafeInteger", {
		value: require("./shim"),
		configurable: true,
		enumerable: false,
		writable: true
	});
}
