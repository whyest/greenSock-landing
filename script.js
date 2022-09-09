const site = document.querySelector(".site");
const header = document.querySelector(".header");
const burger = document.querySelector(".burger");
const close = document.querySelector(".close");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll('.nav__link');
const body = document.body;

let headerDrop = gsap.timeline({ paused: true });

burger.addEventListener('click', (e) => {
    e.currentTarget.classList.add('active');
    menu.classList.add('menu--open');
    // header.classList.add('active');
    headerDrop.timeScale(.5).play();
  });

//   close.addEventListener('click', (e) => {
//     e.currentTarget.classList.remove('active');
//     menu.classList.remove('menu--open');
//   });

  close.onclick = function() {
      headerDrop.reverse();
  }

  headerDrop
    .from(".menu__top", {duration: 0.2, opacity: 0})
    .from(".menu__container", {duration: 0.5, opacity: 0, y: 500, ease: "circ"})
    .from(".social", {opacity: 0, y: 100, ease: "expo", stagger: 0.5})
    .from(".menu__right", {opacity: 0, y: 100, ease: "expo"}, "-=0.5")
   


let heroTl = gsap.timeline();

heroTl
  .from(".hero__left", {
    duration: 1.2,
    y: 200,
    opacity: 0,
    ease: "circ"
  })
  .from(".hero__descr", {
    duration: 0.5,
    opacity: 0
  })
  .from(".photos-wrap__img", {
    duration: 0.5,
    opacity: 0,
    stagger: 0.5
  })
  .from(".photos__author", {
    duration: 0.3,
    opacity: 0
  });
