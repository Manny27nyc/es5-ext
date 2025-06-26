/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
// Stack grow safe implementation

"use strict";

var ensureValue       = require("../../object/valid-value")
  , isArray           = Array.isArray
  , objHasOwnProperty = Object.prototype.hasOwnProperty;

module.exports = function () {
	var input = ensureValue(this), index = 0, remaining, remainingIndexes, length, i, result = [];
	// Jslint: ignore
	main: while (input) {
		length = input.length;
		for (i = index; i < length; ++i) {
			if (!objHasOwnProperty.call(input, i)) continue;
			if (isArray(input[i])) {
				if (i < length - 1) {
					// eslint-disable-next-line max-depth
					if (!remaining) {
						remaining = [];
						remainingIndexes = [];
					}
					remaining.push(input);
					remainingIndexes.push(i + 1);
				}
				input = input[i];
				index = 0;
				continue main;
			}
			result.push(input[i]);
		}
		if (remaining) {
			input = remaining.pop();
			index = remainingIndexes.pop();
		} else {
			input = null;
		}
	}
	return result;
};
