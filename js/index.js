/*For Wow Animation*/
new WOW().init();
/*For Wow Animation*/

/*Full Screen Overlay Starts from Here*/
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("main").style.marginLeft = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
/*Full Screen Overlay Ends Here*/

/*Animated Search Bar Starts From Here*/
function openAlt() {
  document.getElementById("sui3").style.width = "100%";
}

function closeAlt() {
  document.getElementById("sui3").style.width = "0%";
}

$("#ang3").click(function(){
  $(".animDrop").toggle();
});

$("#angg").click(function(){
  $(".animDrop2").toggle();
});
/*Animated Search Bar Ends Here*/

/*Custom DropDown for Search Bar Starts From Here*/
$("#ang").click(function(){
  $(".customDa").toggle();
});
/*Custom DropDown for Search Bar Ends Here*/

