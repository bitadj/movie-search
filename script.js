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

  document.getElementById('searchtext').onkeypress = function(e) {
    if (e.which == 13){
      e.preventDefault();
      input = document.getElementById('searchtext').value;
      // input = "the avengers"

      //clear out search results:
      input = null;
      document.getElementById('searchtext').value = ""
      return false;
    };
  };

	function httpGet(url){

		// Send Request
		var http = new XMLHttpRequest();
		http.open("GET", "http://www.omdbapi.com/?t=" + input, false);
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

	function displayResults(json){
	  document.getElementById("poster").src = json.Poster;
    document.getElementById("genre").innerHTML = json.Genre;
    document.getElementById("plot").innerHTML = json.Plot;
    document.getElementById("year").innerHTML = json.Released;
	};

};