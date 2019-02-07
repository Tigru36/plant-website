$(document).ready(function() {
  $("#track").submit(function(event) {
    event.preventDefault();

    var interestInput = parseInt($("select#interests").val());
    var devInput = parseInt($("select#dev").val());
    var timeInput = parseInt($("select#time").val());
    var total = interestInput + devInput + timeInput;

    if (total <= 15) {
      $("#r1").show()
      $("#r2").hide()
      $("#r3").hide()
      $("#track").hide()
    }
    else if (total > 11 && total <= 30 ) {
      $("#r2").show()
      $("#r1").hide()
      $("#r3").hide()
      $("#track").hide()
    }
    else if (total > 31 && total <= 45) {
      $("#r3").show()
      $("#r1").hide()
      $("#r2").hide()
      $("#track").hide()
    } else {
      confirm("You mean to do that?")
    }
  });
});
