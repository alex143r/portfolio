"use strict";


window.addEventListener("load", start);

function start() {
  document.querySelector("#menuknap").addEventListener("click", toggleMenu);
  animateObserve();
  let images = document.querySelectorAll(".parallax");
  new simpleParallax(images, {
    scale: 1.3,
    transition: 'cubic-bezier(0,0,0,1)'
  });

  window.addEventListener("scroll", function (e) {
    const target = document.querySelectorAll(".scroll")

    let length = target.length;
    for (let i = 0; i < length; i++) {
      if (window.innerWidth >= 768) {
        let pos = window.pageYOffset * 0.5;
        target[i].style.transform = "translate3d(0px, " + pos + "px, 0px)"
      } else {
        target[i].style.transform = "translate3d(0px, " + 0 + "px, 0px)"

      }
    }


  });
}


function animateObserve() {
  const upAnim = document.querySelectorAll(".anim");

  const observer = new IntersectionObserver((entries) => {
    /*if (scrolled > window.pageYOffset || scrolled === window.pageYOffset) {*/
    entries.forEach((entry) => {

      if (entry.intersectionRatio > 0) {
        entry.target.style.animation = `anim_up_kf ${entry.target.dataset.delay} forwards ease-out`;

        if (entry.target.dataset.type === "anim_side") {
          entry.target.style.animation = `anim_side_kf ${entry.target.dataset.delay} forwards .2s ease-out`;
        }        
        observer.unobserve(entry.target);
        
      } else {
        entry.target.style.animation = "none";
      }
   
    });

  });
  upAnim.forEach((anim) => {
    observer.observe(anim);
  });
}

function toggleMenu() {
  document.querySelector("#menu").classList.toggle("hide");
  if (document.querySelector("#menu").classList.contains("hide") == true) {
    document.querySelector("#menuknap").textContent = "☰";
  } else {
    document.querySelector("#menuknap").textContent = "X";
  }

}