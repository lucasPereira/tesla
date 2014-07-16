(function (contexto) {
	"use strict";

	function Coordenada(texto) {
		this.inicializar(texto);
	}

	Coordenada.prototype.inicializar = function (texto) {
		var coordenadas = texto.split("|");
		if (coordenadas.length != 2) {
			throw new Error("Coordenada inválida.");
		}
		var x = coordenadas[0].toString();
		var y = coordenadas[1].toString();
		var naoNumeros = /[^0-9]+/;
		if (x.length != 3 || y.length != 3 || naoNumeros.test(x) || naoNumeros.test(y)) {
			throw new Error("Coordenada inválida.");
		}
		var x = Number.parseInt(x);
		var y = Number.parseInt(y);
		if (x < 0 || y < 0) {
			throw new Error("Coordenada inválida.");
		}
		this.x = x;
		this.y = y;
	}

	Coordenada.prototype.calcularDistancia = function (outra) {
		var catetoOposto = Math.abs(outra.y - this.y);
		var catetoAdjacente = Math.abs(outra.x - this.x);
		var hipotenusa = Math.sqrt(Math.pow(catetoOposto, 2) + Math.pow(catetoAdjacente, 2));
		return hipotenusa;
	}

	contexto.Coordenada = Coordenada;
}(this));
