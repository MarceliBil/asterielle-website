//MOBILE MENU
const hamburger = document.querySelector(".hamburger"),
  header = document.querySelector(".header"),
  menu__list = document.querySelector(".menu__list");

let counter = 0;

const hamburger__items = Array.from(document.querySelectorAll(".hamburger__bar")),
  showAnimations = ["oneShow", "twoShow", "threeShow"],
  hideAnimations = ["oneHide", "twoHide", "threeHide"];

//SHOW HIDE MOBILE MENU
const showMenu = () => {
  menu__list.style = "left: 0"
  hamburger__items.map(i => i.style.animationName = showAnimations[hamburger__items.indexOf(i)])
  counter++
}

const hideMenu = () => {
  menu__list.style = "left: 100vw"
  hamburger__items.map(i => i.style.animationName = hideAnimations[hamburger__items.indexOf(i)])
  counter = 0
}

window.addEventListener("resize", () => window.innerWidth < 1200 ? hideMenu() : (menu__list.style = "left: 0"));

window.addEventListener("scroll", () => { if (window.innerWidth < 1200 && counter == 1) hideMenu() });

hamburger.addEventListener("click", () => counter == 0 ? showMenu() : hideMenu());

//HEADER HIDE/SHOW
let screenWidth = window.innerWidth,
  prevScrollpos = window.pageYOffset;

window.addEventListener('scroll', () => {
  let currentScrollPos = window.pageYOffset;
  prevScrollpos > currentScrollPos ? header.style.top = "20px" : header.style.top = "-175px";
  prevScrollpos = currentScrollPos;
})

//-------------------------------------------------

//LEFT NAVIGATION MECHANISM
const { on, off } = { on: "background-color: #f2f2f2", off: "background-color: #101010" }

const sections = Array.from(document.querySelectorAll("section"));
const current__section__marker = Array.from(document.querySelectorAll(".current__section"));

const checkCurrentSection = () => {
  sections.forEach(i => {
    if (window.innerHeight - i.getBoundingClientRect().top >= window.innerHeight * 0.6) {
      current__section__marker.forEach(i => i.style = off)
      current__section__marker[sections.indexOf(i)].style = on
    }
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      current__section__marker.forEach(i => i.style = off)
      footer__section.style = on
    }
  })
}
window.addEventListener("load", checkCurrentSection)
window.addEventListener("scroll", checkCurrentSection)


