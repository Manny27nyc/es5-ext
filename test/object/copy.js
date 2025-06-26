/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
"use strict";

var stringify = JSON.stringify;

module.exports = function (t, a) {
	var o = { 1: "raz", 2: "dwa", 3: "trzy" }, no = t(o);

	a.not(no, o, "Return different object");
	a(stringify(no), stringify(o), "Match properties and values");

	o = {
		foo: "bar",
		raz: {
			dwa: "dwa",
			trzy: { cztery: "pięć", sześć: "siedem" },
			osiem: {},
			dziewięć: function () {}
		},
		dziesięć: 10
	};
	o.raz.rec = o;

	no = t(o);
	a(o.raz, no.raz, "Shallow");

	a.deep(t(o, ["foo"]), { foo: "bar" });
	a.deep(t(Object.create(o), ["foo"]), { foo: "bar" });
	a.deep(t(o, ["foo", "habla"]), { foo: "bar" });
	a.deep(t(o, ["foo", "habla"], { ensure: true }), { foo: "bar", habla: undefined });
};
