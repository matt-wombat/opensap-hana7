/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, new-cap: 0*/
/*eslint-env node, es6 */

function stringBasics() {

	var body = "";
	var demo1 = "SAP HANA Extended Application Services";
	
	body += `<p>Basic String: ${demo1} </p>`;
	
	body += "<p>First character in the string: " + demo1[0] + "</p>";

	body += "<p>Length of the string: " + demo1.length + "</p>";
	
	body += "<p>Last character in the string: " + demo1.slice(-1) + "</p>";

	body += "<p>String in upper case: " + demo1.toUpperCase() + "</p>";

	body += "<p>String in lower case: " + demo1.toLowerCase() + "</p>";

	body += "<p>Find HANA: " + demo1.indexOf("HANA") + "</p>";

	body += "<p>Last Occurance of the letter A: " + demo1.lastIndexOf("A") + "</p>";
	
	body += "<p>Multi-line string<br>second line </p>";

	
	
	$.response.status = $.net.http.OK;
	$.response.contentType = "text/html";
	$.response.setBody(body);
	
}

stringBasics();





