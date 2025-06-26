/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
/* eslint-env node */

"use strict";

var indexTest = require("tad/lib/utils/index-test")
  , path      = require("path").resolve(__dirname, "../../../reg-exp/#");

module.exports = function (t, a, d) {
	indexTest(
		indexTest.readDir(path).aside(function (data) {
			delete data.sticky;
			delete data.unicode;
		})
	)(t, a, d);
};
