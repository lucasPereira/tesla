(function (contexto) {
	"use strict";

	var QUnit = contexto.QUnit;
	var Saque = contexto.Saque;

	module("Saque", {
		setup: function () {
		}
	});

	QUnit.test("A distância entre 000|000 e 000|000 é 0.", function(assegure) {
		var saque = new Saque(aldeia, tropa);
		saque.adicionarCoordenada(null);
	});

}(this));
