/**
 * @author [abdulhalim.hafidh]
 * @email [abdulhalim.hafidh@tra.go.tz]
 * @create date 2023-09-9 20:03:23
 * @modify date 2023-09-9 20:03:23
 * @desc [javascript file for menu navigation and image]
 */



function toggleMenu() {
    var x = document.getElementById("myMenu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}



function toggleDiv() {
  var div = document.getElementById("mobile-menu");
  if (div.style.display === "none" || div.style.display === "") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
