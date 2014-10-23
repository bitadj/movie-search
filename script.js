var input;

//use jQuery for type to search function

$(document).ready(function (){

	//press enter to search
  $(document).bind('keydown', function(e){
    if (e.which == 13){
      $('#overlay').fadeIn('fast', function(){
          $('#content').css('opacity', 0.2);
          $('#searchtext').focus();
      });
    };
  });

  $(document).bind('click', function(){
    closeSearch();
  });

  $('#searchtext').keypress( function(e){
    if (e.which == 13){
      closeSearch();
    };
  });

  function closeSearch(){
    $('#overlay').fadeOut('slow');
    $('#content').css('opacity', 1);
  };

});

window.onload = function(){

	function myFunction(e) {
    inupt = document.getElementById("search").value;
    // document.getElementById("result").innerHTML = inupt;
    e.preventDefault();
    console.log(inupt);
    
	};

	function httpGet(url){
				
		// IMDb ID to Search
		var imdbId = "tt1285016";

		// Send Request
		var http = new XMLHttpRequest();
		http.open("GET", "http://www.omdbapi.com/?t=" + query, false);
		http.send(null);

		// Response to JSON
		var omdbData = http.responseText;
		var omdbJSON = eval("(" + omdbData + ")");

		// Returns Movie Title
		// alert(omdbJSON.Title);
		displayResults(omdbJSON);

	  console.log(http)
	  // // return xmlHttp.responseText;
	  // console.log(xmlHttp.status, xmlHttp.statusText);
	};

};