// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var isArrayLike = require("./is-array-like")
  , isObject    = require("./is-object");

module.exports = function (obj) {
	if (isObject(obj) && isArrayLike(obj)) return obj;
	throw new TypeError(obj + " is not array-like object");
};
