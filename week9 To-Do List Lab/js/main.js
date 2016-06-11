$(function () {
  //input count
  var count 

  //Event listeners

  //Wen an item is submitted in the 
  $('new').on('submit', addNewItem);

  $('#todos').on('click', '.remove', removeItem);

  function updateCount () {
    //log the count
    console.log(count)
    //get the count of the number of items
    count = $('#todo li').not('.done').length();
    console.log(count);

    //print the new count
    $('#count').html(count);
  }

  function addNewItem(e){
    //Prevent page from reloading
      event.preventDefault();
      //Get the text the user entered
      var newItem ('newItem').val();
      //Add a <li> with what the text submitted
     
  }
    function removeItem(event) {
      //prevent page reload
      event.preventDefault ();
      //The parent is the item that we want to remove
      $(this).parent().remove();
    }






});
