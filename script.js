"use strict";

window.addEventListener("load", start);

function start() {
  console.log("start");
  document.querySelector("#menuknap").addEventListener("click", toggleMenu);
  animateObserve();
}
let testScroll;

function animateObserve() {
  const upAnim = document.querySelectorAll(".anim");

  const observer = new IntersectionObserver((entries) => {
    /*if (scrolled > window.pageYOffset || scrolled === window.pageYOffset) {*/
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.style.animation = `anim_up_kf ${entry.target.dataset.delay} forwards ease-out`;
        if (entry.target.dataset.type === "anim_side") {
          console.log(entry);
          entry.target.style.animation = `anim_side_kf ${entry.target.dataset.delay} forwards .2s ease-out`;
        }

        if (entry.target.dataset.type === "parallax") {
          /*
                    let yValue = 0;
                    let scrollValue;
                    window.addEventListener("scroll", function () {
                      if (scrollValue > window.pageYOffset) {
                        entry.target.style.transform = `translate3d(0px, ${yValue}px, 0)`;
                        yValue = yValue - 0.5;
                      }
                      if (scrollValue < window.pageYOffset) {
                        entry.target.style.transform = `translate3d(0px, ${yValue}px, 0)`;
                        yValue = yValue + 0.5;
                      }
                      scrollValue = window.pageYOffset;
                    });*/
          let yValue = 0;
          let currScroll;

        }

        if (entry.target.dataset.type === "parallax") {
          testCalc(entry.target)
          console.log(entry);

        };


      } else {
        entry.target.style.animation = "none";
      }
    });
    /* }
    /*
    if (scrolled < window.pageYOffset) {
      console.log("scroll up");
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          console.log("if");
          entry.target.style.animation = `anim_down_kf ${entry.target.dataset.delay} forwards ease-out`;
        } else {
          console.log("else");
          entry.target.style.animation = "none";
        }
      });
    }
    */
  });
  upAnim.forEach((anim) => {
    observer.observe(anim);
  });
}

function testCalc(obj) {
  console.log("tewst")
  console.log(obj)
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

// window.addEventListener("scroll", function (e) {
//   const target = document
//     .querySelector(".show_scroll li")
//     .getBoundingClientRect();
//   console.log(target);
//   let scrolled = window.pageYOffset;

//   if (scrolled > 920) {
//     document.querySelector(".show_scroll").classList.add("bottom_fade");
//     document.querySelector(".show_scroll").style.opacity = "1";
//   }
// });

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