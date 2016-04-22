  $(document).ready(function() {
    $("h1").addClass("animated pulse");
    $(".gif").addClass("animated bounceInUp");
  });

  $(document).ready(function(){
  	$('a[href^="#"]').on('click',function (e) {
  	    e.preventDefault();
        //attribute starts with selector
        //e is the event--prevent the default action (html link functionality)
  	    var target = this.hash,
        //assigns variable target to elements that has been clicked
  	    $target = $(target);

  	    $('html, body').stop().animate({
          //above stops any other animation happening on the html, body onClick
  	        'scrollTop': $target.offset().top
            //scrolltop sets the scroll bar position to top of targeted element; //offset() is what grabs those coordinates
  }, 900, 'swing', function () {
    //700 is the timing in milliseconds
    //swing determines the easing...moves faster at beginning and end
  	        window.location.hash = target;
    //Callback function to the animate function; redirects window to specified location only after animate is done running
  	    });
  	});
  });
