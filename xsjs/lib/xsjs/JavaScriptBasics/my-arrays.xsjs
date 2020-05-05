/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, new-cap: 0*/
/*eslint-env node, es6 */

function arrayBasics() {
	
	var body = "";
	var array1 = ["Red","Green","Blue"];
	var array2 = ["Black","Whitegrey","Orange","Purple"];
	var array1HTML = [];
	var array2HTML = [];
	var arrayCombined = [];
	var i = 0;

	for(i = 0; i < array1.length; i++) {
		array1HTML[i] = "<font color=\"" + array1[i] + "\">" + array1[i] + "</font>";
	}

	for(i = 0; i < array2.length; i++) {
		array2HTML[i] = "<font color=\"" + array2[i] + "\">" + array2[i] + "</font>";
	}

	
	body += "<p>Complete Array 1: " + array1HTML.toString() + "</p>";

	body += "<p>First Wlement: " + array1HTML[0].toString() + "</p>";

	body += "<p>Number of Wlements: " + array1HTML.length.toString() + "</p>";

	body += "<p>Position of Blue: " + array1.indexOf("Blue").toString() + "</p>";

	body += "<p>Loop of Array 1 Wlements: ";
	for (let arrayElementHTML of array1HTML) {
		body += arrayElementHTML.toString() + " ";
	}
	body += "</p>";

	body += "<p>Complete Array 2: " + array2HTML.toString() + "</p>";
	
	arrayCombined = array1HTML.concat(array2HTML);
	body += "<p>Combined Arrays: " + arrayCombined.toString() + "</p>";

	body += "<p>Reverse Sorted Array: " + arrayCombined.reverse() + "</p>";

	body += "<p>Sorted Ascending Array: " + arrayCombined.sort() + "</p>";

	arrayCombined.pop();
	body += "<p>Remove the last element: " + arrayCombined.toString() + "</p>";

	arrayCombined.shift();
	body += "<p>Remove the first element: " + arrayCombined.toString() + "</p>";
	
	var arraySliced = arrayCombined.slice(2, 4);
	body += "<p>Slice out the 3rd and 4th element: " + arraySliced.toString() + "</p>";
	
	//Add multiple elements at specific position - splice(insertion Index, number of elements, value1, ...)
	arrayCombined.splice(2, 2, "<font color=\"malachite\">Malachite</font>", "<font color=\"fallow\">Fallow</font>");
	body += `Add two values at position 3: ${arrayCombined.toString()} </p>`;

	//Add an element to the beginning of the array - unshift
	arrayCombined.unshift("<font color=\"brown\">Brown</font>");
	body += `Add element to the beginning of the array: ${arrayCombined.toString()} </p>`;
	
	$.response.status = $.net.http.OK;
	$.response.contentType = "text/html";
	$.response.setBody(body);

}


arrayBasics();
