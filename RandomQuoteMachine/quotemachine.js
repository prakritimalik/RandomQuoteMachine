$(document).ready(function(){
	

function getQuote(){

var quotes = ["You can do anything, but not everything.", "You miss 100 percent of the shots you never take.", "Courage is not the absence of fear, but rather the judgement that something else is more important than fear.", "We are what we repeatedly do; excellence, then, is not an act but a habit.", "The real voyage of discovery consists not in seeking new lands but seeing with new eyes."];
var authors = ["-David Allen", "-Wayne Gretzky","-Ambrose Redmoon","-Aristotle","-Marcel Proust"];

var randomNum = Math.floor((Math.random() * quotes.length));

var randomQuote = quotes[randomNum];
var randomAuthor = authors[randomNum];

$(".quote").text(randomQuote);
$(".author").text(randomAuthor);
	}

	$(".btn").on("click",function() {
	getQuote();
	});
});

