$(document).ready(function() {
  $("#heightForm").submit(function(event) {
    var heightFeet = parseInt($("input#feet").val());
    var heightInches = parseInt($("input#inches").val());
    var heightTotal = (heightFeet*12) + heightInches;

    if (heightTotal <= 48){
      $(".card").hide();
      $("#smallride").show();
    } else if (heightTotal > 48 && heightTotal < 72){
      $(".card").hide();
      $("#smallride").show();
      $("#medride").show();
      $("#largeride").show();
    } else {
      $(".card").hide();
      $("#medride").show();
      $("#largeride").show();
    }

    event.preventDefault();
  })
})
