// Select The Elements
(function () {
    
    document.querySelector(".themee-btnn").addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      document.getElementsByClassName("bar")[0].classList.toggle('collapsed')
    })
})();
var toggle_btn;
var big_wrapper;
var hamburger_menu;

const main = document.querySelector("main");

toggle_btn = document.querySelector(".toggle-btn");
big_wrapper = document.querySelector(".big-wrapper");
hamburger_menu = document.querySelector(".hamburger-menu");

// big_wrapper.classList.add("dark");
// big_wrapper.classList.add("copy");
// document.body.classList.add("stop-scrolling");

function events() {
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}

events();