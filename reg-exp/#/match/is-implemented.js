/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var re = /foo/;

module.exports = function () {
	if (typeof re.match !== "function") return false;
	return re.match("barfoobar") && !re.match("elo");
};
