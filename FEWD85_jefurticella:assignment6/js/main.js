$(document).ready(function() {
  $(".readmore").click(function() {
    $("#show-this-on-click").slideDown();
      $(".readmore").hide();
        $(".readless").show();
          event.preventDefault();
  });

  $(".readless").click(function() {
    $("#show-this-on-click").slideUp();
      $(".readless").hide();
        $(".readmore").show();
          event.preventDefault();
  });





});