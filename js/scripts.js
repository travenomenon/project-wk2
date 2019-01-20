$(document).ready(function() {
  $("#formOne").submit(function(event) {

    $("#ruby, #php, #cSharp").hide();
    //reset track after new form submission

    var question1Input = $("#question1").val();
    var question2Input = $("#question2").val();
    var question3Input = $("#question3").val();
    var question4Input = $("#question4").val();
    var question5Input = $("#question5").val();

    if (question1Input === question3Input
      && question2Input != question4Input
      && question2Input != question5Input
      && question1Input === 'yes') {
      $("#ruby").show();
    } else if (question2Input === question4Input
      && question1Input != question3Input
      && question2Input != question5Input
      && question2Input === 'yes') {
      $("#php").show();
    } else if (question2Input === question5Input
      && question1Input != question3Input
      && question2Input != question4Input
      && question2Input === 'yes') {
      $("#cSharp").show();
    } else {
      $("#php").show();
      //default choice if above logic does not match
    }

    event.preventDefault();
  });
});
