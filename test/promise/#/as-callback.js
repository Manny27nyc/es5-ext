/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	if (typeof Promise !== "function") return null;
	return {
		Success: function (d) {
			t.call(new Promise(function (resolve) { resolve("foo"); }), function (error, value) {
				a(error, null);
				a(value, "foo");
				d();
			});
		},
		Failure: function (d) {
			var error = new Error("Rejection");
			t.call(
				new Promise(function (resolve, reject) { reject(error); }),
				function (passedError, value) {
					a(passedError, error);
					a(value, undefined);
					d();
				}
			);
		}
	};
};
