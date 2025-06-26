/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	var arr = [4, 5, 6], obj1 = { length: 8 }, obj2 = {}, obj3 = { length: 1 };

	a.deep([arr, obj1, obj2, obj3].sort(t), [obj2, obj3, arr, obj1]);
};
