
console.log("hello");

setTimeout(function(){
	$("#preloader").css("width","318px");
	$("#loader").css("width","318px");
},1000);

setTimeout(function(){
	$("#spinner").hide();
	$("#eject").show().addClass("blink");
},16000);

var curr = 0;
setInterval(function(){
	if(curr == 346) {
		return;
	}
	$("#progressText span").text(curr++);
},145);