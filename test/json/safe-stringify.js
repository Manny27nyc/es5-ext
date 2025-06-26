/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	a(t({ foo: "bar" }), JSON.stringify({ foo: "bar" }));
	a(t({ foo: { elo: 12 } }), "{\"foo\":{\"elo\":12}}");
	a(
		t({ foo: { elo: 12, mel: { toJSON: function () { throw new Error("Nu nu!"); } } } }),
		"{\"foo\":{\"elo\":12}}"
	);
	a(
		t({ foo: { elo: 12 }, mel: { toJSON: function () { throw new Error("Nu nu!"); } } }),
		"{\"foo\":{\"elo\":12}}"
	);
	a(
		t({
			foo: { elo: 12 },
			mel: ["raz", { toJSON: function () { throw new Error("Nu nu!"); } }, 0, 2]
		}),
		"{\"foo\":{\"elo\":12},\"mel\":[\"raz\",0,2]}"
	);
};
