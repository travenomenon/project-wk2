$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var question1Input = $(".question1").val()
    var question2Input = $(".question2").val()
    var question3Input = $(".question3").val()
    var question4Input = $(".question4").val()
    var question5Input = $(".question5").val()

    if (question1Input === question3Input || question2Input != question4Input || question2Input != question5Input) {
      $("#ruby").show();
    }
    if (question2Input === question4Input || question1Input != question3Input || question2Input != question5Input) {
      $("#php").show();
    }








    event.preventDefault();
  });
});
