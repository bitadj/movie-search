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


});
