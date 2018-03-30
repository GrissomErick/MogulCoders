// Code here handles what happens when a sitter submits their information on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#sit-submit").on("click", function(event) {
  event.preventDefault();
  console.log("button clicked!!!");

  const newSitter = {
    first_name: $("#first_name").val().trim(),
    last_name: $("#last_name").val().trim(),
    email: $("#email").val().trim(),
    password: $("#password").val().trim(),
    street: $("#address").val().trim(),
    city: $("#address").val().trim(),    
    zip: $("#zip").val().trim()
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/newsitter", newSitter)
    // on success, run this callback
    .then(function(data) {

      $('#sitterModal').on('shown.bs.modal', function () {
          $('#sitterModal').trigger('focus')
        })
      // log the data we found
      console.log(data);
      // tell the user they've been added to the list of Critter Sitters.
      //alert("You've been added to the list of available Critter Sitters. Thanks for joining!");
    });

  // // empty each input box by replacing the value with an empty string
  $("#first_name").val("");
  $("#last_name").val("");
  $("#email").val("");
  $("#password").val("");
  $("#street").val("");
  $("#city").val("");
  $("#zip").val("");

});
  