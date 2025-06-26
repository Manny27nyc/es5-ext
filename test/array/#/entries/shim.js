/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

exports.__generic = function (t, a) {
	var iterator = t.call(this);
	a.deep(iterator.next(), { value: [0, "1"], done: false });
	a.deep(iterator.next(), { value: [1, "2"], done: false });
	a.deep(iterator.next(), { value: [2, "3"], done: false });
	a.deep(iterator.next(), { value: undefined, done: true });
};
