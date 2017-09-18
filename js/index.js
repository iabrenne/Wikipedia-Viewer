var searchRequestValueChanged = false;

$(document).ready(function(){

	$("#search-box").on("change",function(){
		searchRequestValueChanged = true;
	});

	$(document).on("keyup",function(myEvent){		
		var myKeyCode = myEvent.keyCode;

		/* Checking if user pressed an Enter key */
		if (myKeyCode == 13) {
			if (searchRequestValueChanged){
				window.alert("Searching for " + $("#search-box").val()+ "!");
				searchRequestValueChanged = false;
			}

		}

	});


});

