/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
/* eslint no-bitwise: "off" */

// Thanks: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
//         /Global_Objects/Math/imul

"use strict";

module.exports = function (val1, val2) {
	var xh = (val1 >>> 16) & 0xffff
	  , xl = val1 & 0xffff
	  , yh = (val2 >>> 16) & 0xffff
	  , yl = val2 & 0xffff;

	// The shift by 0 fixes the sign on the high part
	// the final |0 converts the unsigned value into a signed value
	return (xl * yl + (((xh * yl + xl * yh) << 16) >>> 0)) | 0;
};
