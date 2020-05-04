/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, new-cap: 0*/
/*eslint-env node, es6 */

function dateBasics() {
	
	var body = "";
	var myDate = new Date();
	var nextMonth = new Date();

	body += "<p>Now: " + myDate + "</p>";
	body += "<p>Now UTC: " +  myDate.toUTCString() + "</p>";
	body += "<p>Now Date String: " +  myDate.toDateString() + "</p>";
	body += "<p>Now Locale Date String: " +  myDate.toLocaleDateString() + "</p>";
	body += "<p>Now Locale Time String: " +  myDate.toLocaleTimeString() + "</p>";
	body += "<p>Now Locale String: " +  myDate.toLocaleString() + "</p>";
	body += "<p>Now ISO String: " +  myDate.toISOString() + "</p>";
	body += "<p>Now JSON String: " +  myDate.toJSON() + "</p>";
	body += "<p>Now Year: " +  myDate.getFullYear() + "</p>";
	body += "<p>Now Month: " +  myDate.getMonth() + "</p>";
	body += "<p>Now Day of Week: " +  myDate.getDay() + "</p>";
	body += "<p>Now Day of Month: " +  myDate.getDate() + "</p>";
	body += "<p>Now milliseconds since midnight 01/01/1970: " +  myDate.getTime() + "</p>";
	body += "<p>Now Hours: " +  myDate.getHours() + "</p>";
	body += "<p>Now Minutes: " +  myDate.getMinutes() + "</p>";
	body += "<p>Now Seconds: " +  myDate.getSeconds() + "</p>";
	
	nextMonth.setDate(myDate.getDate()+30);
	body += `30 days from now: ${nextMonth} </p>`;
	
	let dateUS = new Intl.DateTimeFormat("en-US");
	let dateDE = new Intl.DateTimeFormat("de-DE");
	body += `US: ${dateUS.format(new Date())}, DE: ${dateDE.format(new Date())} </p>`;
	
	$.response.status = $.net.http.OK;
	$.response.contentType = "text/html";
	$.response.setBody(body);
	
}

dateBasics();
