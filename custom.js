mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

function myFunction1() {
  var text;
  switch (new Date().getDay()) {
    case 6:
      text = "Today is Saturday";
      break;
    case 0:
      text = "Today is Sunday";
      break;
    default:
      text = "Looking forward to the Weekend";
  }
  document.getElementById("danusedmici").innerHTML = text;
}

function myFunction() {
  var time = new Date().getHours();
  var greeting;
  if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting ="Good evening";
  }
document.getElementById("welcome").innerHTML = greeting;
}
