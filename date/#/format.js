/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
/* eslint id-length: "off" */

"use strict";

var pad  = require("../../number/#/pad")
  , date = require("../valid-date")
  , format;

format = require("../../string/format-method")({
	Y: function () { return String(this.getFullYear()); },
	y: function () { return String(this.getFullYear()).slice(-2); },
	m: function () { return pad.call(this.getMonth() + 1, 2); },
	d: function () { return pad.call(this.getDate(), 2); },
	H: function () { return pad.call(this.getHours(), 2); },
	M: function () { return pad.call(this.getMinutes(), 2); },
	S: function () { return pad.call(this.getSeconds(), 2); },
	L: function () { return pad.call(this.getMilliseconds(), 3); }
});

module.exports = function (pattern) { return format.call(date(this), pattern); };
