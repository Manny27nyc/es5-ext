// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var o = { foo: "bar" };

module.exports = function (t, a) { a(t("foo")(o), o.foo); };
