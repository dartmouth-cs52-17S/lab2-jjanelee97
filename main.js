// $('label').click(function() {
//         $('label').removeClass('active');
//         $(this).addClass('checked');
// });

// modified from http://stackoverflow.com/questions/5568398/change-the-opacity-of-all-elements-except-the-one-selected
$('label#q1').click(function() {
   $('label#q1').not(this).stop().animate({opacity: 0.4}, 200);
   $(this).stop().animate({opacity: 1.0}, 200);
});
$('label#q2').click(function() {
   $('label#q2').not(this).stop().animate({opacity: 0.4}, 200);
   $(this).stop().animate({opacity: 1.0}, 200);
});
$('label#q3').click(function() {
   $('label#q3').not(this).stop().animate({opacity: 0.4}, 200);
   $(this).stop().animate({opacity: 1.0}, 200);
});
$('label#q4').click(function() {
   $('label#q4').not(this).stop().animate({opacity: 0.4}, 200);
   $(this).stop().animate({opacity: 1.0}, 200);
});
$('label#q5').click(function() {
   $('label#q5').not(this).stop().animate({opacity: 0.4}, 200);
   $(this).stop().animate({opacity: 1.0}, 200);
});


$('#submit').on('click', function(e) {
  $("#warning").css("display", "none");

  let choices = $("input[type='radio']:checked").map(function(i, element) {
    return parseInt($(element).val());
  }).toArray();

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
    }
    $("#submit").css("display", "none");

    $("#result").text("You are " + result);
    $("#result").css("display", "flex");


    // $('.result_gif').each(function(i, obj) {
    //   document.getElementsByClassName("test")[0].id
    //   if (result == document.getElementsByClassName("result_gif")[i].id)
    //
    // });
    $(".result_gif").css("display", "flex");

    //
    //
    // // Get the modal
    // var modal = document.getElementById('myModal');
    //
    //
    // // Get the button that opens the modal
    // var btn = document.getElementById("myBtn");
    //
    // // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[0];
    //
    // // When the user clicks the button, open the modal
    // btn.onclick = function() {
    //   $("#submit").click(function(){
    //     $("myModal").show();
    //   });
    // }
    //
    // // When the user clicks on <span> (x), close the modal
    // span.onclick = function() {
    //   $("#submit").click(function(){
    //     $("myModal").hide();
    //   });
    // }
    //
    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //     }
    // }


  }
  else {
    $("#warning").css("display", "flex");
  }







});
