$(function(){

  $("#answer").hide();

  $("#blankBall").on("click",function(){
    event.preventDefault();
    $("#answer").show();
    $("#blankBall").hide();
  });
});