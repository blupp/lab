
console.log("hello");

$(".state").on("click", function(e){
	var state = $(this).text();

	// show info
	var stateInfo = state.replace(/ /g,"").replace(/%/g,"").toLowerCase();
	console.log(stateInfo);
	$("#info p").hide();
	$("#i"+stateInfo).show();
	

	// update LEDs
	switch (state) {
		case "100%":
			setLED(1,100,100,0);
			setLED(2,100,100,50);
			setLED(3,100,100,100);
			setLED(4,100,100,150);

			setLEDs(0,100,1000);
			break;

		case "75% - 100%":
			setLED(1,100,100,0);
			setLED(2,100,100,50);
			setLED(3,100,100,100);
			setLED(4,100,100,150);

			blink3(4,450);

			setLEDs(0,100,2200);
			break;

		case "50% - 75%":
			setLED(1,100,100,0);
			setLED(2,100,100,50);
			setLED(3,100,100,100);

			blink3(3,400);

			setLEDs(0,100,2150);
			break;

		case "25% - 50%":
			setLED(1,100,100,0);
			setLED(2,100,100,50);

			blink3(2,350);

			setLEDs(0,100,2100);
			break;

		case "5% - 25%":
			setLED(1,100,100,0);

			blink3(1,300);

			setLEDs(0,100,2050);
			break;

		case "5%":
			blink3(1,0);
			blink3(1,1800);

			setLEDs(0,0,3600);
			break;

		case "Power on":
			setLEDs(100,500);
			setLEDs(0,0,1500);
			break;

		case "Power off":
			setLEDs(100);
			setLEDs(0,500,1500);
			break;

		case "Double tapped":
			setLEDs(100);
			setLED(4,0,0,400);
			setLED(3,0,0,700);
			setLED(2,0,0,1000);
			setLED(1,0,0,1300);
			setLEDs(100,0,1600);
			setLEDs(0,0,2200);
			break;

		case "Out of storage":
			setLED(1,0);
			setLED(1,100,300,0);
			setLED(1,0,300,300);
			setLED(1,100,300,600);
			setLED(1,0,300,900);
			setLED(1,100,300,1200);
			setLED(1,0,300,1500);
			break;

		case "Charging":
			setLEDs(100);
			setLEDs(0,0,800);
			setLED(1,100,100,1100);
			setLED(2,100,100,1150);
			setLED(3,100,100,1200);

			setLEDs(0,100,2200);
			break;

		case "Plugged out":
			setLEDs(100);
			setLEDs(0,0,800);
			break;

	}

});

function setLED(nr,pwr,time,delay) {
	if(!time) {
		time = 0;
	}
	if(!delay) {
		delay = 0;
	}
	setTimeout(function(){
		$("#led-"+nr).animate({opacity: pwr/100}, time);
	}, delay);
}

function setLEDs(pwr,time,delay) {
	for(var i=1;i<5;i++) {
		setLED(i,pwr,time,delay);
	}
}

function blink3(nr,start_at) {
	blink_delay = 300;

	setLED(nr,0,100,start_at);
	setLED(nr,100,100,start_at+blink_delay*1);
	setLED(nr,0,100,start_at+blink_delay*2);
	setLED(nr,100,100,start_at+blink_delay*3);
	setLED(nr,0,100,start_at+blink_delay*4);
	setLED(nr,100,100,start_at+blink_delay*5);

	console.log(start_at+blink_delay*5);
}

