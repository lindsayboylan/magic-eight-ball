var getAnswer = function(){
  $.ajax( "/answers/shake", {  
    type: "get",
    success: function(data){
      $("#answer").html(data.text);
    }
  });
}


$(function(){
  $("#answer").on("click",function(){
    event.preventDefault();
    getAnswer();
  });

});