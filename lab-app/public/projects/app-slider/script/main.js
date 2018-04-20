
console.log("hello");

$("button").on("click", animate);

function animate() {
	$(".hidden").css("margin", "5px 5px").css("width", "90px");
}

$("button#resetBtn").on("click", reset);

function reset() {
	$(".hidden").css("margin", "5px 0").css("width", "0px");
}

$(".thumb:not(.hidden)").css("width", "90px");