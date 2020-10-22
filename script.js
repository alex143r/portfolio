"use strict";

window.addEventListener("load", start);

function start() {
  console.log("start");
  document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
  console.log("toggleMenu");
  document.querySelector("#menu").classList.toggle("hide");
  if (document.querySelector("#menu").classList.contains("hide") == true) {
    document.querySelector("#menuknap").textContent = "☰";
  } else {
    document.querySelector("#menuknap").textContent = "X";
  }
}

window.addEventListener("scroll", function (e) {
  const target = document
    .querySelector(".show_scroll li")
    .getBoundingClientRect();
  console.log(target);
  let scrolled = window.pageYOffset;

  if (scrolled > 920) {
    document.querySelector(".show_scroll").classList.add("bottom_fade");
    document.querySelector(".show_scroll").style.opacity = "1";
  }
});

window.addEventListener("scroll", hideNav);
function hideNav() {
  console.log("yo");
  document.querySelector("nav").style.opacity = 0.5;
  //document.querySelector("nav").style.top = "-40px";

  let currScroll = window.pageYOffset;

  setTimeout(showNav, 200);
  function showNav() {
    if (currScroll === window.pageYOffset) {
      document.querySelector("nav").style.opacity = 1;
      //document.querySelector("nav").style.top = "0px";
    }
  }
}
