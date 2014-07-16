(function (contexto) {
	"use strict";

	function Gui() {
		this.inicializar();
	}

	Gui.prototype.inicializar = function () {
		this.limparTudo();
		this.criarRaiz();
	}

	Gui.prototype.limparTudo = function () {
		var head = document.querySelector("head");
		var body = document.querySelector("body");
		head.innerHTML = "";
		body.innerHTML = "";
	}

	Gui.prototype.criarRaiz = function () {
		var raiz = document.querySelector("#tesla");
		if (raiz != null) {
			raiz.remove();
		}
	}

	function Tesla(html) {
		this.inicializar(html);
	}

	Tesla.prototype.inicializar = function () {
		this.gui = new Gui(html);
	}

	contexto.Tesla = Tesla;
}(this));
