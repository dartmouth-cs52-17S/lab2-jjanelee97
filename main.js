// opaque funcionality
// modified from http://stackoverflow.com/questions/5568398/change-the-opacity-of-all-elements-except-the-one-selected
$('label#q1').click(function() {
   $('label#q1').not(this).stop().animate({opacity: 0.6}, 200);
   $(this).stop().animate({opacity: 1.0}, 200);
});
$('label#q2').click(function() {
   $('label#q2').not(this).stop().animate({opacity: 0.6}, 200);
   $(this).stop().animate({opacity: 1.0}, 200);
});
$('label#q3').click(function() {
   $('label#q3').not(this).stop().animate({opacity: 0.6}, 200);
   $(this).stop().animate({opacity: 1.0}, 200);
});
$('label#q4').click(function() {
   $('label#q4').not(this).stop().animate({opacity: 0.6}, 200);
   $(this).stop().animate({opacity: 1.0}, 200);
});
$('label#q5').click(function() {
   $('label#q5').not(this).stop().animate({opacity: 0.6}, 200);
   $(this).stop().animate({opacity: 1.0}, 200);
});


// when the user hits submit, execute this code
$('#submit').on('click', function(e) {

  $("#result").addClass("result-show");
  $("#result").removeClass("result-hide");


  $("#warning").css("display", "none");

  $("#result").css("display", "none");

  let choices = $("input[type='radio']:checked").map(function(i, element) {
    return parseInt($(element).val());
  }).toArray();

  // add the sum of array and convert with a range
  if (choices.length == 5)  {
    let score = choices.reduce((prev, val) => prev + val, 0);
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
      default:
        result = "averagely extra";
    }

    $("#result p").text("You are " + result);
    $("#result").css("display", "flex");

    let gif;
    switch(true) {
      case (result=='not extra'):
        gif = 'a-extra';
        break;
      case (result=='a bit extra'):
        gif = 'b-extra';
        break;
      case (result=='kinda extra'):
        gif = 'c-extra';
        break;
      case (result=='averagely extra'):
        gif = 'd-extra';
        break;
      case (result=='extra'):
        gif = 'e-extra';
        break;
      case (result=='extra extra'):
        gif = 'f-extra';
        break;
      default:
        gif = 'd-extra'
    }

    // to make sure that gifs don't overlap on each other
    $('.gif_result').each(function(i, obj) {
      if (gif == $(this).attr("id")) {
        $(this).addClass("gif-show");
        $(this).removeClass("gif-hide");
      }
      else {
        if ($(this).hasClass("gif-show")) {
          $(this).removeClass("gif-show");
        }
        $(this).addClass("gif-hide");
      }
    });
  }
  else {
    $("#warning").css("display", "flex");
  }
});
