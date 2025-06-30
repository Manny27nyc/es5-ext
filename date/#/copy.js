// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
"use strict";

var getTime = Date.prototype.getTime;

module.exports = function () { return new Date(getTime.call(this)); };
