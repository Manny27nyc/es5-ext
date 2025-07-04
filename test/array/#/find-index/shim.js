// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
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
		-1,
		"Falsy result"
	);
	a(count, 3);

	count = -1;
	a(t.call(this, function () { return ++count ? o : null; }, this), 1, "Truthy result");
	a(count, 1);
};
