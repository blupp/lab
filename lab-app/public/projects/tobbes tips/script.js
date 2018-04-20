
var things = [
	"dricka rödvin",
	"måla tavla",
	"laga crepes",
	"dricka drinkar",
	"måla dockhuvuden",
	"dricka Weissbier",
	"kolla på whiplash",
	"dreja",
	"dricka sidecar",
	"montera IKEA-möbler",
	"plåta flörtkulor",
	"klippa tobbe",
	"sy en jacka",
	"kolla på diabilder",
	"ha möte om plåt",
	"komma på ett sidoprojekt",
	"banga utgång",
	"sy kuddfodral",
	"redigera bilder",
	"ta en cava",
	"ha mössa inomhus",
	"googla på guzz"
];

var tips = [];

Parse.initialize("z5LAYvCT95SukxksUbr2eXVbVpt8jWWDUJU7wSX4", "byFevtq24SquK5OkQXOAthkx6kXdHaNr7WhqVWr3");

function getDataFromBackend() {
	var Tips = Parse.Object.extend("tips");
	var query = new Parse.Query(Tips);
	query.find({
	  success: function(results) {
	    
	    for (var i = 0; i < results.length; i++) {
	      var object = results[i];
	      var tip = {"id": object.id, "tip": object.get('tip')};
	      tips.push(tip);
	    }

	    console.log(tips);

	    if(QueryString.tip1 && QueryString.tip2) {
	    	console.log("hej");
	    	setTips(QueryString.tip1, QueryString.tip2);
	    } else {
	    	updateLeft();
			updateRight();
		}
	  },
	  error: function(error) {
	    alert("Error: " + error.code + " " + error.message);
	  }
	});
}

var currLeft,currRight = "";

function setTips(tip1id, tip2id) {
	var tip1 = getTipById(tip1id);
	var tip2 = getTipById(tip2id);

	$("#left .text").text(tip1.tip);
	currLeft = tip1.id;

	$("#right .text").text(tip2.tip);
	currRight = tip2.id;
}


function updateLeft() {
	var index = getRandomNumber();

	$("#left .text").text(tips[index].tip);
	currLeft = tips[index].id;
}

function updateRight() {
	var index = getRandomNumber();

	$("#right .text").text(tips[index].tip);
	currRight = tips[index].id;
}

function getRandomNumber() {
	var randomNumber = null;
	while (randomNumber === currLeft || randomNumber === currRight || randomNumber === null) {
		randomNumber = Math.floor(Math.random()*tips.length);
	}

	return randomNumber;
}

function getTipById(id) {
	for(var i=0;i<tips.length;i++) {
		if(tips[i].id == id) {
			return tips[i];
		}
	}
}

$("#reloadBtn").on("click", function() {
	updateLeft();
	updateRight();
});

function sendTipToSlack() {
	$.get("http://linkoping.nrtv.io:8889/tobbestip/?tip=", function(){});
}

var QueryString = function () {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  } 
    return query_string;
}();

getDataFromBackend();


