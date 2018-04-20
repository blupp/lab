
console.log("hello");


var state = 1;
$("body").click(function(){

	if(state) {
		anin();
		state = false;
	} else {
		out();
		state = true;
	}

});


function anin() {
	$("#page1").animate({
		marginLeft: "-1000px"
	},{
    duration: 700,
    specialEasing: {
      marginLeft: "easeOutQuad"
    }
	});


	$("#page2")
		.css("top",$(window).scrollTop())
		.animate({
			left: ($(window).width()-950)/2
		},{
			duration: 700,
			specialEasing: {
				left: "easeOutQuad"
			},
			complete: function(){
				console.log("HEJ");
				$(window).scrollTop(0);
				$(this).css("top",0);
			}
		});
}

function out() {
	$("#page1").animate({
			marginLeft: ($(window).width()-950)/2
		},{
			duration: 700,
			specialEasing: {
				left: "easeOutQuad"
			}
		});

		$("#page2").animate({
			marginLeft: "100%"
		},{
			duration: 700,
			specialEasing: {
				left: "easeOutQuad"
			}
		});
}
