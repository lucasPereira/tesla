(function (contexto) {
	"use strict";

	function Gui(html) {
		this.inicializar(html);
	}

	Gui.prototype.inicializar = function (html) {
		this.criarRaiz(html);
	}

	Gui.prototype.criarRaiz = function (html) {
		var body = document.querySelector("body");
		body.innerHTML = html;
	}

	function Tesla(html) {
		this.inicializar(html);
	}

	Tesla.prototype.inicializar = function (html) {
		this.gui = new Gui(html);
	}

	contexto.Tesla = Tesla;
}(this));
