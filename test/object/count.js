/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	a(t({}), 0, "Empty");
	a(t({ raz: 1, dwa: null, trzy: undefined, cztery: 0 }), 4, "Some properties");
	a(
		t(
			Object.defineProperties(
				{}, { raz: { value: "raz" }, dwa: { value: "dwa", enumerable: true } }
			)
		),
		1, "Some properties hidden"
	);
};
