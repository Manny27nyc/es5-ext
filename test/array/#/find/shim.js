/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

exports.__generic = function (t, a) {
	var count = 0, o = {}, self = Object(this);
	a(
		t.call(
			self,
			function (value, i, scope) {
				a(value, this[i], "Value");
				a(i, count++, "Index");
				a(scope, this, "Scope");
			},
			self
		),
		undefined,
		"Falsy result"
	);
	a(count, 3);

	count = -1;
	a(t.call(this, function () { return ++count ? o : null; }, this), this[1], "Truthy result");
	a(count, 1);
};
