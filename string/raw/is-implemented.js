/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function () {
	var raw = String.raw, test;
	if (typeof raw !== "function") return false;
	test = ["foo\nbar", "marko\n"];
	test.raw = ["foo\\nbar", "marko\\n"];
	return raw(test, "INSE\nRT") === "foo\\nbarINSE\nRTmarko\\n";
};
