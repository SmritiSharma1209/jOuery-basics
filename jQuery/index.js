
 $(" h1").addClass(" big-heading margin");
// $("h1").removeClass("margin");
// $("a").attr("href","https://www.bing.com");
// $("button").text(" Good Bye ");

// $("h1").click(function(){
//   $("h1").css("color", "purple");
//
// });

// $("button").click(function(){      h1 changes style when button is clicked
//   $("h1").addClass("new-style");
// });

// $("input").keydown(function(event){    detects key events;
//   console.log(event.key);
// });


// $(document).keydown(function(event){    changes h1 to the button presses
//   $("h1").html(event.key);
// });
//
// $("h1").on("mouseover", function(){           .on function
//   $("h1").removeClass("big-heading");
//   $("h1").addClass("new-style");
// });

$("button").click(function(){
  $("h1").slideUp().slideToggle().animate({opacity: 0.5});
});
