// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var re = /foo/;

module.exports = function () {
	if (typeof re.replace !== "function") return false;
	return re.replace("foobar", "mar") === "marbar";
};
