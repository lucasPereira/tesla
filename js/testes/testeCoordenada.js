(function (contexto) {
	"use strict";

	var QUnit = contexto.QUnit;
	var Coordenada = contexto.Coordenada;

	module("Coordenada", {
		setup: function () {
			this.zeroZero = new Coordenada("000|000");
			this.zeroDez = new Coordenada("000|010");
			this.dezZero = new Coordenada("010|000");
			this.tresQuatro = new Coordenada("003|004");
		}
	});

	QUnit.test("A distância entre 000|000 e 000|000 é 0.", function(assegure) {
		assegure.equal(this.zeroZero.calcularDistancia(this.zeroZero), 0);
	});

	QUnit.test("A distância entre 000|000 e 000|010 é 10.", function(assegure) {
		assegure.equal(this.zeroZero.calcularDistancia(this.zeroDez), 10);
	});

	QUnit.test("A distância entre 000|010 e 000|000 é 10.", function(assegure) {
		assegure.equal(this.zeroDez.calcularDistancia(this.zeroZero), 10);
	});

	QUnit.test("A distância entre 000|000 e 010|000 é 10.", function(assegure) {
		assegure.equal(this.zeroZero.calcularDistancia(this.dezZero), 10);
	});

	QUnit.test("A distância entre 010|000 e 000|000 é 10.", function(assegure) {
		assegure.equal(this.dezZero.calcularDistancia(this.zeroZero), 10);
	});

	QUnit.test("A distância entre 000|000 e 003|004 é 5.", function(assegure) {
		assegure.equal(this.zeroZero.calcularDistancia(this.tresQuatro), 5);
	});

	QUnit.test("A distância entre 003|004 e 000|000 é 5.", function(assegure) {
		assegure.equal(this.tresQuatro.calcularDistancia(this.zeroZero), 5);
	});

	QUnit.test("-001|000 não é uma coordenada válida.", function(assegure) {
		assegure.throws(function () {
			new Coordenada("-001|000");
		}, new Error("Coordenada inválida."));
	});

	QUnit.test("000|-001 não é uma coordenada válida.", function(assegure) {
		assegure.throws(function () {
			new Coordenada("000|-001");
		}, new Error("Coordenada inválida."));
	});

	QUnit.test("-01|000 não é uma coordenada válida.", function(assegure) {
		assegure.throws(function () {
			new Coordenada("-01|000");
		}, new Error("Coordenada inválida."));
	});

	QUnit.test("000|-01 não é uma coordenada válida.", function(assegure) {
		assegure.throws(function () {
			new Coordenada("000|-01");
		}, new Error("Coordenada inválida."));
	});

	QUnit.test("1000|000 não é uma coordenada válida.", function(assegure) {
		assegure.throws(function () {
			new Coordenada("1000|000");
		}, new Error("Coordenada inválida."));
	});

	QUnit.test("000|1000 não é uma coordenada válida.", function(assegure) {
		assegure.throws(function () {
			new Coordenada("000|1000");
		}, new Error("Coordenada inválida."));
	});

	QUnit.test("0000|000 não é uma coordenada válida.", function(assegure) {
		assegure.throws(function () {
			new Coordenada("0000|000");
		}, new Error("Coordenada inválida."));
	});

	QUnit.test("000|0000 não é uma coordenada válida.", function(assegure) {
		assegure.throws(function () {
			new Coordenada("000|0000");
		}, new Error("Coordenada inválida."));
	});

	QUnit.test("00|000 não é uma coordenada válida.", function(assegure) {
		assegure.throws(function () {
			new Coordenada("00|000");
		}, new Error("Coordenada inválida."));
	});

	QUnit.test("000|00 não é uma coordenada válida.", function(assegure) {
		assegure.throws(function () {
			new Coordenada("000|00");
		}, new Error("Coordenada inválida."));
	});

	QUnit.test("-000|000 não é uma coordenada válida.", function(assegure) {
		assegure.throws(function () {
			new Coordenada("-000|000");
		}, new Error("Coordenada inválida."));
	});

	QUnit.test("000|-000 não é uma coordenada válida.", function(assegure) {
		assegure.throws(function () {
			new Coordenada("000|-000");
		}, new Error("Coordenada inválida."));
	});

	QUnit.test("0.1|000 não é uma coordenada válida.", function(assegure) {
		assegure.throws(function () {
			new Coordenada("0.1|000");
		}, new Error("Coordenada inválida."));
	});

	QUnit.test("000|0.1 não é uma coordenada válida.", function(assegure) {
		assegure.throws(function () {
			new Coordenada("000|0.1");
		}, new Error("Coordenada inválida."));
	});

	QUnit.test("0.01|000 não é uma coordenada válida.", function(assegure) {
		assegure.throws(function () {
			new Coordenada("0.01|000");
		}, new Error("Coordenada inválida."));
	});

	QUnit.test("000|0.01 não é uma coordenada válida.", function(assegure) {
		assegure.throws(function () {
			new Coordenada("000|0.01");
		}, new Error("Coordenada inválida."));
	});

	QUnit.test("0,01|000 não é uma coordenada válida.", function(assegure) {
		assegure.throws(function () {
			new Coordenada("0,01|000");
		}, new Error("Coordenada inválida."));
	});

	QUnit.test("000|0,01 não é uma coordenada válida.", function(assegure) {
		assegure.throws(function () {
			new Coordenada("000|0,01");
		}, new Error("Coordenada inválida."));
	});

	QUnit.test("000.1|000 não é uma coordenada válida.", function(assegure) {
		assegure.throws(function () {
			new Coordenada("000.1|000");
		}, new Error("Coordenada inválida."));
	});

	QUnit.test("000|000.1 não é uma coordenada válida.", function(assegure) {
		assegure.throws(function () {
			new Coordenada("000|000.1");
		}, new Error("Coordenada inválida."));
	});

	QUnit.test("000000 não é uma coordenada válida.", function(assegure) {
		assegure.throws(function () {
			new Coordenada("000000");
		}, new Error("Coordenada inválida."));
	});
}(this));
