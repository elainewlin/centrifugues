$(document).ready(function(){
  $(".container").load("about.html"); 

  $("#members").click(function() {
    $.ajax({
      url: "./members/members.json",
      dataType: "json",
      success: function(data) {
        var template = document.getElementById('membersTemplate').innerHTML;
        document.getElementById("page").innerHTML = Mustache.render(template, data);
      }
    });  
  });


  $("#events").click(function(){ 
    $(".container").load("events.html"); 
  });

  $("#about").click(function(){ 
    $(".container").load("about.html"); 
  });

  $("#auditions").click(function(){ 
    $(".container").load("auditions.html"); 
  });

});