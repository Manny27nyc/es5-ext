// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var str = "razdwatrzy";

module.exports = function () {
	if (typeof str.endsWith !== "function") return false;
	return str.endsWith("trzy") === true && str.endsWith("raz") === false;
};
