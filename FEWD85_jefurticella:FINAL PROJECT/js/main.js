//Nav bar slide animation//

$(document).on("scroll", function() { 
  if($(document).scrollTop() > 780 ) {
    $('nav').removeClass("large").addClass("small");
  }
  else { 
    $('nav').removeClass("small").addClass("large");
  }
});

//Smooth scroll animation//

$('a[href^="#"]').click(function(e) {
    e.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top}, 1000);
 
    return false;
});

//Show more-Show less button animation//

$(document).ready(function() {
  $(".readmore").click(function(event) {
    event.preventDefault();
    $("#show-this-on-click").fadeIn();
    $(".readmore").hide();
    $(".readless").show();
          
  });

  $(".readless").click(function(event) {
    event.preventDefault();
    $("#show-this-on-click").fadeOut();
    $(".readless").hide();
    $(".readmore").show();
  });
});
