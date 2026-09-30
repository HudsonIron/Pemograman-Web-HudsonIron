var menu = document.getElementById("menu");
var nav = document.getElementById("nav");

if (menu && nav) {
  menu.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", open);
  });
}