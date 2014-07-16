(function () {
	"use strict";

	function carregar() {
		var head = document.querySelector("head");
		var css = document.createElement("link");
		css.setAttribute("type", "text/css");
		css.setAttribute("rel", "stylesheet");
		css.setAttribute("href", "http://dominiol.com.br/tesla/tesla.css");
		var js = document.createElement("script");
		js.setAttribute("type", "application/javascript");
		js.setAttribute("src", "http://dominiol.com.br/tesla/tesla.js");
		head.appendChild(css);
		head.appendChild(js);
		obterHtml(js);
	}

	function obterHtml(js) {
		var requisicao = new XMLHttpRequest();
		requisicao.responseType = "document";
		requisicao.open("GET", "http://dominiol.com.br/tesla/tesla.html");
		requisicao.addEventListener("load", function () {
			if (requisicao.status >= 200 && requisicao.status < 300) {
				js.addEventListener("load", function () {
					new Tesla(requisicao.response);
				});
			}
		});
		requisicao.send();
	}

	carregar();
}());
