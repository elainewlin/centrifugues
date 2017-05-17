$(document).ready(function(){
  $("#members").click(function(){ 
    $(".container").load("members.html"); 
  });

  $("#contact").click(function(){ 
    $(".container").load("contact.html"); 
  });

  $("#about").click(function(){ 
    $(".container").load("about.html"); 
  });
});