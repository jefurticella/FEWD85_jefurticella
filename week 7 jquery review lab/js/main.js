(function(){
  $("#submit-btn").on('submit', function(event){
    event.preventDefault();
    var city = $('#city-type').val();
      if(city ==='New York'){
        $('body').attr('class', 'nyc')
      }
    })



});


