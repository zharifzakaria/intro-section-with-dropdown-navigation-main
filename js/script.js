const features = document.getElementById("features");
const company = document.getElementById("company");
const submenu1 = document.getElementById("submenu1");
const submenu2 = document.getElementById("submenu2");
const menu = document.querySelector("nav > .menu");

features.addEventListener("mouseover", () => {
  submenu1.classList.add("show");
  submenu2.classList.remove("show");
});

company.addEventListener("mouseover", () => {
    submenu2.classList.add("show");
    submenu1.classList.remove("show");
  });

menu.addEventListener("mouseleave", () => {
  submenu1.classList.remove("show");
  submenu2.classList.remove("show");
});
