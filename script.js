const menuToggle = document.querySelector(".menu-toggle");
const collapsedNavLinks = document.querySelector(".collapsed-nav__links");

menuToggle.addEventListener("click", function () {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true" || false;
  menuToggle.setAttribute("aria-expanded", !expanded);
  collapsedNavLinks.classList.toggle("expanded");
});

let boxes = document.querySelectorAll(".about-title, .slide-in");

window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  let triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((aboutTitle) => {
    let boxTop = aboutTitle.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      aboutTitle.classList.add("show");
    } else {
      aboutTitle.classList.remove("show");
    }
  });
}
console.log(window.innerWidth);
