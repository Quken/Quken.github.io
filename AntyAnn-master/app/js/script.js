'use strict';
let elems = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");

currentSlide(1);

function currentSlide(n) {
  for (let i = 0; i < elems.length; i++){
    elems[i].style.display = "none";
    dots[i].style.backgroundColor = "#bbb";
  }
  elems[n - 1].style.display = "block";
  dots[n - 1].style.backgroundColor = "#272727";
}