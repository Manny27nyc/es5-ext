// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

module.exports = function (t, a) { a(t.call(/foo/, "foobar", "mar"), "marbar"); };
