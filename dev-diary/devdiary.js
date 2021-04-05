const link = document.querySelector(".link");

let screenWidth = window.innerWidth;

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    link.style.top = "10px";
  } else {
    link.style.top = "-105px";
  }
  prevScrollpos = currentScrollPos;
};