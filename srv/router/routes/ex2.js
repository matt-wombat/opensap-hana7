/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, new-cap: 0*/
"use strict";
var express = require("express");

module.exports = () => {
	var app = express.Router();
	
	// Hello Router
	app.get("/",(req,res) => {
		let client = require("@sap/hana-client");
		
		// Lookup HANA DB Connection from Bound HDB Container Service
		const xsenv = require("@sap/xsenv");
		let hanaOptions = xsenv.getServices({
			hana: {
				tag: "hana"
			}
		});
		
		// Create DB connection with options from the bound service
		let conn = client.createConnection();
		var connParams = {
			serverNode: hanaOptions.hana.host + ":" + hanaOptions.hana.port,
			uid: hanaOptions.hana.user,
			pwd: hanaOptions.hana.password,
			CURRENTSCHEMA: hanaOptions.hana.schema
		};
		
		// connect
		conn.connect(connParams,(err) => {
			if (err) {
				return res.type("text/plain").status(500).send(`ERROR: ${JSON.stringify(err)}`);
			} else {
				conn.exec(`SELECT SESSION_USER, CURRENT_SCHEMA FROM "DUMMY"`,(err,result) => {
					if (err) {
						return res.type("text/plain").status(500).send(`ERROR: ${JSON.stringify(err)}`);
					} else {
						conn.disconnect();
						return res.type("application/json").status(200).send(result);
					}
				});
			}

			return null;
		});
	});
	
	// Simple Database Select via Client Wrapper/Middleware - In-line Callbacks
	app.get("/express",(req,res) => {
		let client = req.db;
		client.prepare(
			`SELECT SESSION_USER, 
					CURRENT_SCHEMA
				FROM "DUMMY"`,
			(err,statement) => {
				if (err) {
					return res.type("text/plain").status(500).send("ERROR: " + err.toString());
				}
				
				statement.exec([],(err,results) => {
					if (err) {
						return res.type("text/plain").status(500).send("ERROR: " + err.toString());
					} else {
						var result = JSON.stringify({
							Objects: results
						});
						return res.type("application/json").status(200).send(result);
					}
				});
				
			return null;	
			});
	});
	
	var async = require("async");
	// Simple Database Select via Client Wrapper/Middleware
	app.get("/waterfall",(req,res) => {
		let client = req.db;
		async.waterfall([
			function prepare(callback) {
				client.prepare(
					`SELECT SESSION_USER, CURRENT_SCHEMA
						FROM "DUMMY"`,
					(err,statement) => {
						callback(null,err,statement);
					});
			},
			
			function execute(err,statement,callback) {
				statement.exec([], (execErr,results) => {
					callback(null, execErr, results);
				});
			},
			
			function response(err,results,callback) {
				if (err) {
					res.type("text/plain").status(500).send(`ERROR: ${err.toString()}`);
				} else {
					var result = JSON.stringify({
						Objects: results
					});
					res.type("application/json").status(200).send(result);
				}
				return callback; 
			}
		]);
	});

	return app;
};