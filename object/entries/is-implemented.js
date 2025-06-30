// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

module.exports = function () {
	try { return Object.entries({ foo: 12 })[0][0] === "foo"; }
	catch (e) { return false; }
};
