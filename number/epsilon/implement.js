// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(Number, "EPSILON", {
		value: require("./"),
		configurable: false,
		enumerable: false,
		writable: false
	});
}
