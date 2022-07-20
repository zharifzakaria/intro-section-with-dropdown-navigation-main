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

const blocker = document.createElement("div");
blocker.classList.add("blocker");

const mobileMenu = document.createElement("div");
mobileMenu.classList.add("mobile-container");

const openMenuButton = document.getElementById("openMenu");
openMenuButton.addEventListener("touchstart", () => {
  const blocker = document.createElement("div");
  blocker.classList.add("blocker");

  const mobileMenu = document.createElement("div");
  mobileMenu.classList.add("mobile-container");

  //   <div id="submenu1" class="menu__list__sub1">
  //   <ul class="sub__menu">
  //     <li class="sub__item"><span class="icon icon-todo"></span>Todo List</li>
  //     <li class="sub__item"><span class="icon icon-calendar"></span>Calendar</li>
  //     <li class="sub__item"><span class="icon icon-reminders"></span>Reminders</li>
  //     <li class="sub__item"><span class="icon icon-planning"></span>Planning</li>
  //   </ul>
  // </div>

  // <div id="submenu2" class="menu__list__sub2">
  //   <ul class="sub__menu">
  //     <li class="sub__item">History</li>
  //     <li class="sub__item">Our Team</li>
  //     <li class="sub__item">Blog</li>
  //   </ul>
  // </div>

  const mainMenuArray = [
    {
      name: "Features",
      class: "features",
    },
    {
      name: "Company",
      class: "company",
    },
    {
      name: "Careers",
      class: "careers",
    },
    {
      name: "About",
      class: "about",
    },
  ];

  const subMmenuArray = [
    {
      name: "Todo List",
      class: "todo",
    },
    {
      name: "Calendar",
      class: "calendar",
    },
    {
      name: "Reminders",
      class: "reminders",
    },
    {
      name: "Planning",
      class: "planning",
    },
  ];

  const subMenu1 = document.createElement("div");
  subMenu1.classList.add("menu__list__sub1");
  const menu1Ul = document.createElement("ul");
  menu1Ul.classList.add("sub__menu");

  mainMenuArray.forEach((el) => {
    const li = document.createElement("li");
    li.classList.add(`icon-${el.class}`);
    li.innerHTML = el.name;
    menu1Ul.appendChild(li);

    if (el.name === 'Features' || el.name === 'Company') {
      const arrowDown = document.createElement('img');
      arrowDown.src = './images/icon-arrow-down.svg';
      arrowDown.style.paddingLeft = '8px';
      li.appendChild(arrowDown);
    }
  });

  const closeBtn = document.createElement("img");
  closeBtn.id = "closeBtn";
  closeBtn.src = "./images/icon-close-menu.svg";
  closeBtn.classList.add("close-btn");

  closeBtn.addEventListener("touchstart", () => {
    mobileMenu.style.right = "-280px";
    setTimeout(() => {
      document.body.removeChild(blocker);
      document.body.removeChild(mobileMenu);
    }, 300);
  });

  mobileMenu.appendChild(closeBtn);
  mobileMenu.appendChild(menu1Ul);
  document.body.appendChild(blocker);
  document.body.appendChild(mobileMenu);
  mobileMenu.style.right = "-280px";

  setTimeout(() => {
    mobileMenu.style.right = "0";
    mobileMenu.style.opacity = 1;
    blocker.style.opacity = 0.6;
  }, 100);
});
