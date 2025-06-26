/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	var promise;
	a.throws(function () { t(); }, TypeError);
	a.throws(function () { t(null); }, TypeError);
	a.throws(function () { t("promise"); }, TypeError);
	a.throws(function () { t({}); }, TypeError);
	a.throws(function () {
		t(function () {});
	}, TypeError);
	a.throws(function () { t({ then: {} }); }, TypeError);
	promise = { then: function () {} };
	a(t(promise), promise);
	promise = function () {};
	promise.then = {};
	a.throws(function () { t(promise); }, TypeError);
	promise.then = function () {};
	a(t(promise), promise);
};
