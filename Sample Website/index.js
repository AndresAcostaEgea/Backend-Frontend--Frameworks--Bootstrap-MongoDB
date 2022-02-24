
$(".formButton").on("click", function(){
  $(".formContainer").html("<h2><center>¡Thank you for your information,</center></h2><h2><center>we will get in contact with you shortly!  💪😃📱</center></h2>");
});

$(".imageOne").on("click", function(){
  $(".imageOne").animate({right:"109%"}).fadeOut()
  $(".imageTwo").animate({left:"99%"}).fadeOut()
  $(".imageThree").animate({right:"109%"}).fadeOut();
});
