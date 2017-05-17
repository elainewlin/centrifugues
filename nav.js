$(document).ready(function(){
  $("#members").click(function(){ 
    $(".container").load("members.html"); 
  });

  $("#events").click(function(){ 
    $(".container").load("events.html"); 
  });

  $("#about").click(function(){ 
    $(".container").load("about.html"); 
  });

});