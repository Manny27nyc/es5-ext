// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

module.exports = function (t, a) {
	var result = "foobar".match(/foo/);
	a.deep(t.call(/foo/, "foobar"), result);
};
