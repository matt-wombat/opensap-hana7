/*eslint no-console: 0, no-unused-vars: 0, consistent-return: 0, new-cap: 0*/
/*eslint-env node, es6 */
"use strict";
var express = require("express");
var app = express.Router();
var os = require("os");
var TextBundle = require("@sap/textbundle").TextBundle;
var langparser = require("accept-language-parser");

function getLocale(req) {
	var lang = req.headers["accept-language"];
	if (!lang) {
		return;
	}
	var arr = langparser.parse(lang);
	if (!arr || arr.length < 1) {
		return;
	}
	var locale = arr[0].code;
	if (arr[0].region) {
		locale += "_" + arr[0].region;
	}
	return locale;
}

module.exports = function() {

	app.get("/", (req, res) => {
		var bundle = new TextBundle(global.__base + "_i18n/messages", getLocale(req));
		res.writeHead(200, {
			"Content-Type": "text/plain; charset=utf-8"
		});
		var greeting = bundle.getText("greeting", [os.hostname(), os.type(), os.arch()]);
		res.end(greeting, "utf-8");
	});
	return app;
};