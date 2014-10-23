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

};