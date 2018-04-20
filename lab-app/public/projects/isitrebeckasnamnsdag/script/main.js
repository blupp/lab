
console.log("hello");

var d = new Date();

if(d.toString().indexOf("May 17") > -1) {
	$("#answer").text("YES");
}

if(d.toString().indexOf("Aug 20") > -1) {
	$("#answer").text("YES");
}

if(d.toString().indexOf("Sep 14") > -1) {
	$("#answer").text("YES");
}
