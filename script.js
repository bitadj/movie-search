var input;

//use jQuery for type to search function
$(document).ready(function (){

  $('#overlay').hide();
	//press enter to search
  $(document).bind('keydown', function(e){
    if (e.which == 13){
      $('#overlay').fadeIn('fast', function(){
          $('#content').css('opacity', 0.2);
          $('#searchtext').css('opacity',1);
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

		if (input) {
        httpGet(input);
      } else {
        document.getElementById("title").innerHTML = "You didn't search for anything. Please try again.";
        clearDOM();
      };

      input = null;
      document.getElementById('searchtext').value = ""
      return false;
    };  
  };

	function httpGet(url){

    var http = new XMLHttpRequest();
    http.open("GET", "http://www.omdbapi.com/?t=" + input, false);
    http.send(null);

    var omdbData = http.responseText;
    var omdbJSON = eval("(" + omdbData + ")");
      displayResults(omdbJSON);
  };

	function displayResults(json){
		if (json.Response == "False") {
      document.getElementById("title").innerHTML = json.Error;
		} else if (json.Response == "True"){
		  document.getElementById("title").innerHTML = json.Title;
      if (json.Poster == "N/A"){
        //do nothing
      } else {
        document.getElementById("poster").src = json.Poster;
      };
	    document.getElementById("genre").innerHTML = json.Genre;
	    document.getElementById("plot").innerHTML = json.Plot;
      document.getElementById("year").innerHTML = extractReleaseYear(json.Released);
      document.getElementById("actors").innerHTML = getActors(json.Actors);
    } else {
      document.getElementById("title").innerHTML = "Try again later.";
    };
	};

	function clearDOM(){
    document.getElementById("poster").src = ""
    document.getElementById("genre").innerHTML = "";
    document.getElementById("plot").innerHTML = "";
    document.getElementById("year").innerHTML = "";
    document.getElementById("actors").innerHTML = "";

  };

  function extractReleaseYear(release) {
    var d = Date.parse(release);
    var minutes = 1000 * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var years = days * 365;
    var y = Math.round(d / years) + 1970;
    return y;
  };

  function getActors(actors_list) {
    var actors = "";
    var actors_array = actors_list.split(", ")
    console.log(actors_array)
    console.log(actors)

    for (i = 0; i < actors_array.length; i++) { 
      actors += actors_array[i] + "<br>";
    };
    return actors;
  };

};