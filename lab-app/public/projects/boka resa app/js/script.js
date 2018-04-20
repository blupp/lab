
$(document).ready(function(){
	addTrip();
	populateTravelers();
	populateLocations();
});


$("#createBtn").click(function(){

	console.log("click");

	// intro
	var result = "Hej, jag skulle vilja boka följande tågresa";
	result += "<br><br>";

	// trip
	$(".trip").each(function(){

		result += "<b>" + $(this).find("select.from").val() + " - " + $(this).find("select.to").val() + "</b> ";

		var date = $(this).find(".datepicker").val();
		var month = date.slice(5,7);
		var day = 	date.slice(8,10);
		var time = 	date.slice(11);

		result += day + "/" + month + " " + time;

		// travlers
		//console.log("#trip" + parseInt(i+1) + " .traveler");
		$(this).find(".traveler").each(function(){
			result += "<br>";
			result += "* " + $(this).find(".name").val();
			var traveldirection = $(this).find(".traveldirection").val();
			if(traveldirection != "--")
			result += "<br>&nbsp;&nbsp;" + $(this).find(".traveldirection").val();
			result += "<br>";
		});

		result += "<br><br>"; 
	});

	// bokförs under
	result += "<br><br>";
	result += "Bokförs under \"" + $("select.account").val() + "\"";

	// tack
	result += "<br><br>";
	result += "Tack på förhand";

	$("#result").html(result);

	return false;


});

$("body").on("click", ".addTravelerButton", function(){
	console.log("click");
	addTraveler($(this).data("trip"));
});

$("#addTripBtn").click(addTrip);

function addTraveler(trip) {
	console.log(trip);

	var html = "<br><span class=\"traveler\">" + $(".traveler").html() + "</span>"; //"<br><select class=\"traveler\"></select>";

	$("#" + trip + " .travelers .insertHere").prepend(html);
}

function addTrip() {
	var tripID = "trip"+parseInt($(".trip").size());

	var tripHTML = $("#trip_template").clone();
	tripHTML.attr("id", tripID);
	tripHTML.addClass("trip");
	tripHTML.find(".addTravelerButton").data("trip", tripID);

	$("#trips").append(tripHTML);

	populateLocations();
}

function populateTravelers() {
	var travelers = [];

	travelers.push({name: "Sebastian Björkelid", phone: "0739280357", prio: "9752 2102 4704 5426"});
	travelers.push({name: "Petri Määttä", phone: "0735012297"});
	travelers.push({name: "Tobias Björsberg", phone: "0707985454"});
	travelers.push({name: "Fernanda Barbato", phone: "0705113030"});
	travelers.push({name: "Mattias Nygård", phone: "0739354556"});
	travelers.push({name: "Dzana", phone: "0739354556", youth: 1});

	$(".traveler .name").each(function(){
		var e = $(this);
		if(e.val() == null) {
			travelers.map(function(traveler){
				var t = traveler.name + " " + traveler.phone;
				t += (traveler.prio ? "<br>&nbsp;&nbsp; Prionummer: " + traveler.prio : "");
				t += (traveler.youth ? "<br>&nbsp;&nbsp; Ungdomsbiljett" : "");
				e.append(new Option(traveler.name, t, true, true));
			});
		}
	});
}

function populateLocations() {
	var locations = [];

	locations.push("Stockholm");
	locations.push("Linköping");
	locations.push("Lund");
	locations.push("Uppsala");
	locations.push("Norrköping");

	$(".location").each(function(){
		var e = $(this);
		if(e.val() == null) {
			locations.map(function(location){
				e.append(new Option(location, location, true, true));
			});
		}
	});
}

/*
for(i=0;i<$(".trip").size();i++) {

		result += "<b>" + $("select.from").val() + " - " + $("select.to").val() + "</b> ";

		var date = $(".datepicker").val();
		var month = date.slice(5,7);
		var day = 	date.slice(8,10);
		var time = 	date.slice(11);

		result += day + "/" + month + " " + time;

		// travlers
		console.log("#trip" + parseInt(i+1) + " .traveler");
		$("#trip" + parseInt(i+1) + " .traveler").each(function(){
			result += "<br>";
			result += "* " + $(this).val();
		});

		result += "<br><br>"; 
	}

*/