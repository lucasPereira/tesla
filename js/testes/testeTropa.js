(function (contexto) {
	"use strict";

	var QUnit = contexto.QUnit;
	var Tropa = contexto.Tropa;
	var Unidade = contexto.Unidade;

	module("Unidade", {
		setup: function () {
			this.lanceiro = Unidade.lanceiro();
			this.espadachin = Unidade.espadachin();
			this.barbaro = Unidade.barbaro();
			this.arqueiro = Unidade.arqueiro();
			this.zeroZero = new Coordenada("000|000");
			this.zeroUm = new Coordenada("000|001");
			this.tresQuatro = new Coordenada("003|004");
		}
	});

	QUnit.test("Lanceiro.", function (assegure) {
		assegure.equal(this.lanceiro.calcularTempoDeViagem(this.zeroZero, this.zeroZero), 0);
		assegure.equal(this.lanceiro.calcularTempoDeViagem(this.zeroZero, this.zeroUm), 18);
		assegure.equal(this.lanceiro.calcularTempoDeViagem(this.zeroZero, this.tresQuatro), 5 * 18);
	});

	QUnit.test("Espadachin.", function (assegure) {
		assegure.equal(this.espadachin.calcularTempoDeViagem(this.zeroZero, this.zeroZero), 0);
		assegure.equal(this.espadachin.calcularTempoDeViagem(this.zeroZero, this.zeroUm), 22);
		assegure.equal(this.espadachin.calcularTempoDeViagem(this.zeroZero, this.tresQuatro), 5 * 22);
	});

	QUnit.test("Bárbaro.", function (assegure) {
		assegure.equal(this.barbaro.calcularTempoDeViagem(this.zeroZero, this.zeroZero), 0);
		assegure.equal(this.barbaro.calcularTempoDeViagem(this.zeroZero, this.zeroUm), 18);
		assegure.equal(this.barbaro.calcularTempoDeViagem(this.zeroZero, this.tresQuatro), 5 * 18);
	});

	QUnit.test("Arqueiro.", function (assegure) {
		assegure.equal(this.arqueiro.calcularTempoDeViagem(this.zeroZero, this.zeroZero), 0);
		assegure.equal(this.arqueiro.calcularTempoDeViagem(this.zeroZero, this.zeroUm), 18);
		assegure.equal(this.arqueiro.calcularTempoDeViagem(this.zeroZero, this.tresQuatro), 5 * 18);
	});

	module("Tropa", {
		setup: function () {
			this.tropa = new Tropa();
			this.zeroZero = new Coordenada("000|000");
			this.zeroUm = new Coordenada("000|001");
		}
	});

	QUnit.test("Sem nenhuma tropa definida.", function (assegure) {
		assegure.equal(this.tropa.contarLanceiros(), 0);
		assegure.equal(this.tropa.contarEspadachins(), 0);
		assegure.equal(this.tropa.contarBarbaros(), 0);
		assegure.equal(this.tropa.contarArqueiros(), 0);
	});

	QUnit.test("Com lanceiros.", function (assegure) {
		assegure.equal(this.tropa.comLanceiros(1));
		assegure.equal(this.tropa.contarLanceiros(), 1);
		assegure.equal(this.tropa.calcularTempoDeViagem(this.zeroZero, this.zeroUm), 18);
	});

	QUnit.test("Com espadachins.", function (assegure) {
		assegure.equal(this.tropa.comEspadachins(1));
		assegure.equal(this.tropa.contarEspadachins(), 1);
		assegure.equal(this.tropa.calcularTempoDeViagem(this.zeroZero, this.zeroUm), 22);
	});

	QUnit.test("Com lanceiros e espadachins.", function (assegure) {
		assegure.equal(this.tropa.comLanceiros(1));
		assegure.equal(this.tropa.comEspadachins(1));
		assegure.equal(this.tropa.calcularTempoDeViagem(this.zeroZero, this.zeroUm), 22);
	});
}(this));
