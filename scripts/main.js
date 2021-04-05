//MOBILE MENU

const hamburger = document.querySelector(".hamburger"),
  header = document.querySelector(".header"),
  menu__list = document.querySelector(".menu__list"),
  one = document.querySelector(".one"),
  two = document.querySelector(".two"),
  three = document.querySelector(".three");

let counter = 0;

window.addEventListener("resize", () => {
  let window__width = window.innerWidth;

  window__width < 1200
    ? (menu__list.style = "left: 100vw") &&
      (one.style.animationName = "oneHide") &&
      (two.style.animationName = "twoHide") &&
      (three.style.animationName = "threeHide") &&
      (counter = 0)
    : (menu__list.style = "left: 0");
});

window.addEventListener("scroll", () => {
  let window__width = window.innerWidth;

  if (window__width < 1200) {
    menu__list.style = "left: 100vw";
    one.style.animationName = "oneHide";
    two.style.animationName = "twoHide";
    three.style.animationName = "threeHide";
    counter = 0;
  }
});

function hideMenu() {
  counter == 0
    ? (menu__list.style = "left: 0") &&
      (one.style.animationName = "oneShow") &&
      (two.style.animationName = "twoShow") &&
      (three.style.animationName = "threeShow") &&
      counter++
    : (menu__list.style = "left: 100vw") &&
      (one.style.animationName = "oneHide") &&
      (two.style.animationName = "twoHide") &&
      (three.style.animationName = "threeHide") &&
      counter--;
}

hamburger.addEventListener("click", hideMenu);

//HEADER HIDE/SHOW

let screenWidth = window.innerWidth;

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.style.top = "20px";
  } else {
    header.style.top = "-175px";
  }
  prevScrollpos = currentScrollPos;
};
//-------------------------------------------------

//LEFT NAVIGATION MECHANISM

const body = document.querySelector("body");

const start = document.querySelector("#start"),
  about = document.querySelector("#about"),
  join__us = document.querySelector("#join__us"),
  footer = document.querySelector("#footer");

const start__section = document.querySelector("#start__section"),
  about__section = document.querySelector("#about__section"),
  join__us__section = document.querySelector("#join__us__section"),
  footer__section = document.querySelector("#footer__section");

const on__of = {
  on: "#f2f2f2",
  off: "#101010",
};

start__section.style.backgroundColor = on__of.on;

const app = document.querySelector(".app");

window.addEventListener("scroll", () => {
  start.getBoundingClientRect().top <= 0 &&
  start.getBoundingClientRect().top * -1 < start.clientHeight * 0.6
    ? (start__section.style.backgroundColor = on__of.on) &&
      (about__section.style.backgroundColor = on__of.off)
    : (start__section.style.backgroundColor = on__of.off) &&
      (about__section.style.backgroundColor = on__of.on);

  join__us.clientHeight * 0.8 > join__us.getBoundingClientRect().top
    ? (about__section.style.backgroundColor = on__of.off) &&
      (join__us__section.style.backgroundColor = on__of.on)
    : (join__us__section.style.backgroundColor = on__of.off);

  window.innerHeight + window.scrollY >= document.body.scrollHeight
    ? (join__us__section.style.backgroundColor = on__of.off) &&
      (footer__section.style.backgroundColor = on__of.on)
    : (footer__section.style.backgroundColor = on__of.off);
});
