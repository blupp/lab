
console.log("hello");

var imgHeight = 75;
var img = $("#header img");

function tic() {
	
	var scrollTop = $(window).scrollTop();

	var newHeight = imgHeight - scrollTop;

	if(scrollTop > 35) {
		newHeight = 40;
	}

	
	img.css("height", newHeight);

}

setInterval(tic, 16);