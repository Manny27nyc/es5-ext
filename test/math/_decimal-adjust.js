/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

module.exports = function (t, a) {
	// Just sanity check, as real tests are in 'round', 'ceil' and 'floor' variants
	a(t("round")(55.55, -1), 55.6);
};
