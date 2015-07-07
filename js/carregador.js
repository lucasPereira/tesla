(function () {
	"use strict";

	function carregar() {
		var telaDesejada = /screen=info_player/;
		var localizacao = window.location.href;
		if (telaDesejada.test(localizacao)) {
			limparTudo();
			var head = document.querySelector("head");
			var html = obterHtmlTesla(head);
			obterBootstrap(head);
			obterCssTesla(head);
			obterJsTesla(head, html);
		} else {
			alert("O script deve ser executado no seu perfil de usuário, noob.");
		}
	}

	function obterHtmlTesla() {
		var requisicao = new XMLHttpRequest();
		requisicao.open("GET", "//dominiol.com.br/tesla/html/tesla.html", false);
		requisicao.send();
		return requisicao.response;
	}

	function obterBootstrap(head) {
		var bootstrap = document.createElement("link");
		bootstrap.setAttribute("type", "text/css");
		bootstrap.setAttribute("rel", "stylesheet");
		bootstrap.setAttribute("href", "//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css");
		head.appendChild(bootstrap);
	}

	function obterCssTesla(head) {
		var css = document.createElement("link");
		css.setAttribute("type", "text/css");
		css.setAttribute("rel", "stylesheet");
		css.setAttribute("href", "//dominiol.com.br/tesla/css/tesla.css");
		head.appendChild(css);
	}

	function obterJsTesla(head, html) {
		var js = document.createElement("script");
		js.setAttribute("type", "application/javascript");
		js.setAttribute("src", "//dominiol.com.br/tesla/js/tesla.js");
		js.addEventListener("load", function () {
			new Tesla(html);
		});
		head.appendChild(js);
	}

	function limparTudo() {
		var head = document.querySelector("head");
		var body = document.querySelector("body");
		head.innerHTML = "";
		body.innerHTML = "";
	}

	carregar();
}());
