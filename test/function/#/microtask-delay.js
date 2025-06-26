/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var nextTick = require("next-tick");

module.exports = function (t, a, d) {
	var wasInvoked = false, args = [{}, {}], context = {};
	var target = t.call(function () {
		a(this, context);
		a.deep(arguments, args);
		wasInvoked = true;
	});

	nextTick(function () {
		a(wasInvoked, false);
		target.apply(context, args);
		a(wasInvoked, false);
		nextTick(function () {
			a(wasInvoked, true);
			d();
		});
	});
};
