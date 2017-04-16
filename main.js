$('#submit').on('click', function(e) {
  let choices = $("input[type='radio']:checked").map(function(i, element) {
    return parseInt($(element).val());
  }).toArray();
  console.log(choices);

  let score = choices.reduce((prev, val) => prev + val, 0);
  console.log(score);
  let result;
  switch(true) {
    case (score <= 6):
      result = "not extra";
      break;
    case (score > 6 && score <= 12):
      result = "a bit extra";
      break;
    case (score >= 12  && score < 18):
      result = "kinda extra";
      break;
    case (score >= 18  && score < 24):
      result = "averagely extra";
      break;
    case (score >= 24  && score < 30):
      result = "extra";
      break;
    case (score >= 30  && score < 36):
      result = "extra extra";
      break;
  }

  console.log(result);
  $("#result").text("You are " + result);
  $("#result").css("display", "flex");
});
