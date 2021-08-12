$(document).ready(function() {
  $("#age").submit(function(event) {
    event.preventDefault();
    const age = parseInt($("input#ageInput").val());

    if (age >= 18) {
      $("#voting").show();
      $("#noVote").hide();
    } else {
      $("#noVote").show();
      $("#voting").hide();
    }
  });
});