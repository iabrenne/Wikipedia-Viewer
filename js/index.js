var searchRequestValueChanged = false;

var url = "https://en.wikipedia.org/w/api.php?";

var myArr;

var queryString = {
	"action":"query",
	"format":"json",
	"prop":"extracts",
	"generator":"search",
	"exsentences":1,
	"exlimit":10,
	"exintro":1,
	"explaintext":1,
	"gsrlimit":10,
	"origin":"*"
};

 

$(document).ready(function(){

	$("#search-box").on("change",function(){
		searchRequestValueChanged = true;
	});

	$(document).on("keyup",function(myEvent){		
		var myKeyCode = myEvent.keyCode;

		/* Checking if user pressed an Enter key */
		if (myKeyCode == 13) {
			if (searchRequestValueChanged){
				queryString.gsrsearch = $("#search-box").val();

				/* move search bar to the top to make room for search results */
				$("#search-div").css("bottom","auto");
				$("#search-div").css("top","1vw");

				/* GET request to wiki api for the topic selected */
				$.getJSON(url,queryString,function(data){
					myArr = Object.keys(data.query.pages);
				
					var myHtml = "";
					myArr.forEach(function (value) {
						
						myHtml = $("#results").html() + "<br>" + data.query.pages[value].title 
						            + "<br>" + data.query.pages[value].extract + "<br>";	
						$("#results").html(myHtml);				
					});

				});
	
			}

		}

	});


});

