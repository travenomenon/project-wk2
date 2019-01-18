$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var question1Input = $(".question1").val()
    var question2Input = $(".question2").val()
    var question3Input = $(".question3").val()
    var question4Input = $(".question4").val()
    var question5Input = $(".question5").val()

    if (question1Input === question3Input) {
      $("#ruby").show();
    }


    event.preventDefault();
  });
});
