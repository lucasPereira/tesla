(function (contexto) {
	"use strict";

	function Unidade(velocidade) {
		this.velocidade = velocidade;
	}

	Unidade.lanceiro = function () {
		return new Unidade(18);
	}

	Unidade.espadachin = function () {
		return new Unidade(22);
	}

	Unidade.barbaro = function () {
		return new Unidade(18);
	}

	Unidade.arqueiro = function () {
		return new Unidade(18);
	}

	Unidade.prototype.calcularTempoDeViagem = function (origem, destino) {
		return origem.calcularDistancia(destino) * this.velocidade;
	}

	function Agrupamento(unidade) {
		this.unidade = unidade;
		this.quantidade = 0;
	}

	Agrupamento.prototype.contar = function() {
		return this.quantidade;
	}

	Agrupamento.prototype.fixarQuantidade = function(quantidade) {
		this.quantidade = quantidade;
	}

	Agrupamento.prototype.calcularTempoDeViagem = function(origem, destino) {
		return this.unidade.calcularTempoDeViagem(origem, destino);
	}

	function Tropa() {
		this.agrupamentos = {
			lanceiros: new Agrupamento(Unidade.lanceiro()),
			espadachins: new Agrupamento(Unidade.espadachin())
		}
	}

	Tropa.prototype.contarLanceiros = function () {
		return this.agrupamentos.lanceiros.contar();
	}

	Tropa.prototype.contarEspadachins = function () {
		return this.agrupamentos.espadachins.contar();
	}

	Tropa.prototype.contarBarbaros = function () {
		return 0;
	}

	Tropa.prototype.contarArqueiros = function () {
		return 0;
	}

	Tropa.prototype.comLanceiros = function (quantidade) {
		return this.agrupamentos.lanceiros.fixarQuantidade(quantidade);
	}

	Tropa.prototype.comEspadachins = function (quantidade) {
		return this.agrupamentos.espadachins.fixarQuantidade(quantidade);
	}

	Tropa.prototype.comBarbaros = function () {
		return 0;
	}

	Tropa.prototype.comArqueiros = function () {
		return 0;
	}

	Tropa.prototype.calcularTempoDeViagem = function (origem, destino) {
		return this.agrupamentos.lanceiros.calcularTempoDeViagem(origem, destino);
	}

	contexto.Unidade = Unidade;
	contexto.Tropa = Tropa;
}(this));
