//This is my nav bar slide animation//

$(document).on("scroll", function() { 
  if($(document).scrollTop() > 50 ) {
    $('nav').removeClass("large").addClass("small");
  }
  else { 
    $('nav').removeClass("small").addClass("large");
  }
});

//This is my smooth scroll animation//

$('a[href^="#"]').click(function(e) {
 
    $('html,body').animate({ scrollTop: $(this.hash).offset().top}, 1000);
 
    return false;
 
    e.preventDefault();
});
